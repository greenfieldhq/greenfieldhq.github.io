---
layout: post
title: "Parsing SEC filings with Elixir's Floki Library"
description: "How to parse SEC XML RSS Feeds in a simple, straightforward fashion"
category:
tags: [elixir, parsing, fintech]
author: vikram_ramakrishnan
---
{% include JB/setup %}

This blog post covers how to parse [SEC filings](https://github.com/vikram7/sec_latest_filings_rss_feed_parser)
with the [Floki](https://github.com/philss/floki) HTML parser.

## The Problem

At Greenfield, we've become more interested in FinTech after modernizing
a large Financial Services client's web application. We've also been experimenting
with [Elixir](http://elixir-lang.org/), which, we think, would make a great technological
fit in FinTech for its speed and scalability benefits.

Recently, we wanted to take a look at how Elixir could be used for parsing
data. We investigated the [website](https://www.sec.gov) of the
Securities and Exchange Commission or SEC, which is an agency of the US Government
that handles and enforces various securities related laws. One duty of companies
that are registered with the SEC is that they must provide regular public filings.
The SEC's website hosts a phenomenal amount of material.

Unfortunately, much of this data is difficult to handle for a number of reasons,
but primarily because of a lack of standardization across filings. However, the
SEC does host a convenient RSS Feed for the latest filings located [here](https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&type=&company=&dateb=&owner=include&start=0&count=40&output=atom).
The RSS Feed looks something like this:

```xml
<?xml version="1.0" encoding="ISO-8859-1" ?>
<feed>
  <title> . . . </title>
  <entry>
    <title> . . . </title>
    <link />
    <summary type=". . .">
      . . .
    </summary>
    <updated> . . . </updated>
    <category scheme=". . ." label=". . ." term=". . ."/>
    <id> . . . </id>
  </entry>
  <entry>
    <title> . . . </title>
    <link />
    <summary type=". . .">
      . . .
    </summary>
    <updated> . . . </updated>
    <category scheme=". . ." label=". . ." term=". . ."/>
    <id> . . . </id>
  </entry>
</feed>
```

Each "entry" in the feed is what we care most about. The entries contain filing
information, like a link to the filing, what type of filing it is, when it was
last updated and so forth. In the above example, there are two filing "entries,"
which correspond to form types in the `category` XML element, called `term`
here. Hundreds of filings can come through in a single day.

Ideally, we could grab each entry in the feed for our purposes, which would
make it easier to handle. It would be great to have a parser to easily run
through the feed so we can grab what we need in the format we need it.

## Enter Floki

There are a number of libraries for parsing available. A great resource to find
libraries is [awesome-elixir](https://github.com/h4cc/awesome-elixir). I found
[Floki](https://github.com/philss/floki) to be straightforward compared to
some of the other libraries for the purposes here.

Floki abstracts away a lot of selection headache associated with other parsers.
It allows you to use XML element names to grab precisely what you expect to 
grab. Say your XML feed entry (`entry_xml`) looks like this:

```xml
<entry>
<title>497K - PNC FUNDS (0000778202) (Filer)</title>
<link rel="alternate" type="text/html" href="http://www.sec.gov/Archives/edgar/data/some-link-1"/>
<summary type="html">
 &lt;b&gt;Filed:&lt;/b&gt; 2016-03-18 &lt;b&gt;AccNo:&lt;/b&gt; 0001104659-16-106276 &lt;b&gt;Size:&lt;/b&gt; 8 KB
</summary>
<updated>2016-03-18T13:00:33-04:00</updated>
<category scheme="http://www.sec.gov/" label="form type" term="497K"/>
<id>urn:tag:sec.gov,2008:accession-number=0001104659-16-106276</id>
</entry>
```

`entry_xml |> Floki.find("title")` would return the following:

```
"497K - PNC FUNDS (0000778202)"
```

Similarly, `entry_xml |> Floki.find("updated")` returns the following:

```
"2016-03-18T13:00:33-04:00"
```

Simply being able to parse by element names makes the whole process quite a bit
easier! Of course, we need to parse the entire feed and create a list of
entry maps, which would be the most appropriate data structure to handle for
this task in Elixir.

```elixir
defmodule SecLatestFilingsRssFeedParser.Entry do
  @moduledoc """
  This module handles the parsing and creation of an entry
  map. An entry in the SEC's Latest Filings RSS Feed is defined
  by the content between opening <entry> and closing </entry>
  tags
  """

  @doc """
  parse/1 takes an xml entry and parses it to return a map of that entry.
  """

  def parse(xml) do
    %{
      title: parse_title(xml),
      link: parse_link(xml),
      summary: parse_summary(xml),
      updated_date: parse_updated_date(xml),
      rss_feed_id: parse_rss_feed_id(xml),
      cik_id: parse_cik_id(xml),
      category: parse_category(xml)
    }
  end

  defp parse_category(xml) do
    {_, metadata, _} =
      xml
      |> Floki.find("category")
      |> hd

    {_, category} =
      metadata
      |> List.last

    category
  end

  defp parse_title(xml) do
    [{_, _, [title]}] =
      xml
      |> Floki.find("title")

    title
  end

  defp parse_link(xml) do
    regex = ~r/http(.*)index.htm/
    Regex.run(regex, xml, capture: :first)
    |> hd
  end

  defp parse_summary(xml) do
    xml
    |> Floki.find("summary")
    |> Floki.text
    |> String.strip
  end

  defp parse_updated_date(xml) do
    [{_, _, [updated]}] =
      xml
      |> Floki.find("updated")

    updated
  end

  defp parse_rss_feed_id(xml) do
    [{_, _, [id]}] = 
      xml
      |> Floki.find("id")

    id
  end

  defp parse_cik_id(xml) do
    regex = ~r/\d{10}/
    title = parse_title(xml)

    Regex.run(regex, title, capture: :first)
    |> hd
  end
end
```

We have a number of private methods that use the Floki package to
parse an entry and return the following type of map:

```elixir
%{
  cik_id: "0000778202",
  link: "http://www.sec.gov/Archives/edgar/data/some-link-1",
  rss_feed_id: "urn:tag:sec.gov,2008:accession-number=0001104659-16-106276",
  summary: "Filed: 2016-03-18 AccNo: 0001104659-16-106276 Size: 8 KB",
  title: "497K - PNC FUNDS (0000778202) (Filer)",
  updated_date: "2016-03-18T13:00:33-04:00"
  category: "497K"
}
```

By the way, as you'll notice in the module above, not all the functions use
Floki, since keys we care about like `cik_id` (which is the SEC's unique
identifier of a company filing with them) are not able to be selected
directly. Apart from the SEC modifying the structure of their feed, which
they likely won't do soon, we can't simply get away with just using Floki
to grab element names like this. Alas!

Once we have our entries parsed, we can throw them in a feed:

```elixir
defmodule SecLatestFilingsRssFeedParser.Feed do
  @moduledoc """
  This module handles the parsing and creation of a feed
  map. A feed in the SEC's Latest Filings RSS Feed is defined
  by the content between opening <feed> and closing </feed>
  tags, including metadata and multiple entries
  """

  @doc """
  SecLatestFilingsRssFeedParser.parse/1 returns a map of
  a feed with its updated date and many entries.
  """

  def parse(xml) do
    %{
      updated: parse_updated(xml),
      entries: parse_feed(xml)
    }
  end

  defp parse_feed(xml) do
    Floki.find(xml, "entry")
    |> Enum.map(fn entry ->
      Floki.raw_html(entry)
      |> SecLatestFilingsRssFeedParser.Entry.parse
    end)
  end

  defp parse_updated(feed) do
    {_, _, [extracted_feed]} =
      feed
      |> Floki.find("updated")
      |> hd

    extracted_feed
  end
end
```

Here, we grab the entire feed, find all the entries in `parse_feed/1` and map
them to generate the maps above so we end up with a list of maps.

You'll notice the use of `Floki.raw_html/1` which lets us select an entry and 
return the HTML of that entry. What `parse_feed/1` does here is the following:

```
1. Find all elements with element name of "entry"
2. For each of those entries, grab the raw HTML of an entry
3. Run SecLatestFilingsRssFeedParser.Entry on (2) to produce a map of the entry
4. Return a list of these entries
```

Once we've put our parser together, we have a pretty fast module with few
dependencies other than `Floki`. Check out the entire `SecLatestFilingsRssFeedParser`
[here](https://github.com/vikram7/sec_latest_filings_rss_feed_parser)!
