---
layout: post
title: "Bring Sanity to Your Data Structures with Elixir Pattern Matching"
description: "Examples of pattern matching deeply nested data structures in Elixir."
category:
tags: [elixir, pattern matching, functional programming, api]
author: vikram_ramakrishnan
---
{% include JB/setup %}

This short (I promise) blog post offers an alternate method of extracting data
from a deeply nested data structure using Elixir pattern matching.

## Pattern Matching

Elixir's docs on [pattern matching](http://elixir-lang.org/getting-started/pattern-matching.html#pattern-matching) are brief, which is a shame because it is a powerful and intuitive
way to extract information you need if you know the *precise* format of an
incoming data structure. Most examples of pattern matching contain relatively
innocuous examples like these:

```elixir
[x, y] = [1, 10]
```

or

```elixir
{x, y} = {1, 2}
```

Both of these match `x` with `1` and `y` with `10`. Seems straightforward, right?
What about more complicated structures? Can we pattern match on nested data
structures? Let's take a look:

```elixir
[[], _, [_, _, canyoufindme]] = [[], "anything", ["oh", "hai", "thereyouare"]]
```

Just side note. The above data structure is probably not anything we would
actually want to write IRL. I'm just using it as an example of how you might
retrieve a value from a nested data structure.

Here, we match `canyoufindme` with the string `"thereyouare"`. By the way,
the `_` simply ignores whatever's on the right hand side of the match. `_`
just means 'I don't care about assigning the right side of this match
to anything so ignore me.'

Without pattern matching, we might end up doing something ridiculous (and
unreadable) like this:

```elixir
[[], "anything", ["oh", "hai", "thereyouare"]]
|> tl
|> tl
|> hd
|> Enum.reverse
|> hd
# => "thereyouare"
```

Or, we might try something more reasonable, but still not entirely satisfactory:

```elixir
[[], "anything", ["oh", "hai", "thereyouare"]]
|> List.last
|> List.last
# => "thereyouare"
```

Chaining together `tl`s and `hd`s with `Enum.reverse`s is completely unnecessary
here. Similarly, calling `List.last` multiple times seems to beg a little
refactoring. If you know how many times you need to grab a head or tail and
reverse a list, then you probably know the *precise* format of the data
structure coming in, which evokes the question, "Why not use pattern matching?"

I promised this would be a short blog post, but I wanted to give one more
example where pattern matching would be helpful over chaining-madness.

In a separate blog post, [here](link), I wrote about using the [Floki](https://github.com/philss/floki)
library to parse the SEC website's XML RSS Feed.

While parsing one of the feeds, Floki returns a deeply nested data
structure of company addresses and contact information (let's call it `data`):

```elixir
[{"address", [{"type", "mailing"}],
  [{"city", [], ["San Francisco"]}, {"state", [], ["CA"]},
   {"street1", [], ["1355 MARKET STREET, SUITE 900"]}, {"zip", [], ["94103"]}]},
 {"address", [{"type", "business"}],
  [{"city", [], ["San Francisco"]}, {"phone", [], ["(415) 222-9670"]},
   {"state", [], ["CA"]}, {"street1", [], ["1355 MARKET STREET, SUITE 900"]},
   {"zip", [], ["94103"]}]}]
```

We can handle it by assigning variables to whatever we want from this mess:

```elixir
[{"address", [{"type", type1}],
  [{"city", [], [city1]}, {"state", [], [state1]},
    {"street1", [], [street1]},
    {"zip", [], [zip1]}]},
 {"address", [{"type", type2}],
  [{"city", [], [city2]}, {"phone", [],
      [phone]},
    {"state", [], [state2]}, {"street1", [],
      [street2]},
    {"zip", [], [zip2]}]}] = data
```

Now, `city1` corresponds to the string `"San Francisco"`, `phone` is matched with `"(415) 222-9670"`, so forth and so on.

As long as you're aware of the data structure coming to you, then take advantage
of Elixir's built-in pattern matching!

### Last Minute Just-For-Fun Appendix

Just for fun, I wanted to see what parsing `data` would be like with `tl`s, `hd`s
and `elem/2`s. `elem/2` just returns the `n`th element of a tuple (see more
[here](http://elixir-lang.org/getting-started/basic-types.html#tuples). I'm
just going to try to get the business phone number. Let's take a look:

```elixir
data
|> tl
|> hd
|> elem(2)
|> tl
|> hd
|> elem(2)
|> hd
# => "(415) 222-9670"
```

Yep, I would much prefer pattern matching than doing that.
