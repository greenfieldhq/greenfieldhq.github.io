---
layout: post
category :
tagline: ""
tags :
title: "3 Reasons Why You Should Try Elasticsearch"
description: A small introduction to Elasticsearch.
author: mike_munroe
nav: blog
---
{% include JB/setup %}


![marbles]({{ BASE_PATH }}/assets/images/es/marbles.jpg)


Do you have an application or set of applications that require searching
capabilities, has a large data set and you want to do some analysis on that
data? If so, you should check out Elasticsearch. I'm going to outline 3 reasons
why.

#### Elasticsearch supports many programming languages.
Depending on many factors, the programming language of choice can differ
across companies and products. For example, if your product is a web
application, you might utilize [Ruby on Rails](http://rubyonrails.org/), one of
our frameworks of choice at [Greenfield](http://greenfieldhq.com). If your
product requries a lot of statistical analysis, you might work with
[R](http://www.r-project.org/). Elasticsearch supports all of these different
languages through clients built for each language. You can find a list of
supported clients on the
[Elastic website](https://www.elastic.co/guide/en/elasticsearch/client/community/current/clients.html).
In general, Elasticsearch will work with any language that allows you to send
GET and POST requests, but these clients above will make it easier to
integrate Elasticsearch.

#### Elasticsearch supports many features.
Elasticsearch supports many different features that might be needed within a
product such as:

*  full-text search - basic search matching words against documents
*  multifield matching - advanced search matching multiple different searches
against documents
*  proximity matching - matching words close to each other, such as a phrase
against documents
*  partial matching - often used for matching against mispellings
*  tweak relevancy - change the weighting of search criteria to make some more
relevant than others
*  multiple language support - French, German, Spanish, etc.
*  percolator - 'reverse' searching
*  aggregations - ask sophisticated questions about our data in near real time
*  geolocation - support location information

We have used it for many of these already and have been very happy with that
choice.

#### Elasticsearch is fast.
We have been using Elasticsearch on a few different client projects and have
been very impressed with its performance.

In one instance, Elasticsearch is being utilized for full-text search,
multifield matching, and using its [percolator](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-percolate.html)
against millions of documents and it is instantaneous. Percolator is a larger
subject than covered in this post that we are planning to discuss in the future,
but for now, think of it as a way to implement saved searching functionality.
A user can search on something, save that search, and when a new document is
created, percolator functionality in Elasticsearch can tell you if the new
document has any data in the document matches against a set of criteria in a
saved search that has been created by a user.

In another instance, we worked with a client that was reporting real time
analytics on a set of 50-100 million data points and growing. Initially, their
processing, utilizing a custom built solution, was taking around 10 seconds for
results to come back for presenting in their reporting dashboard. We worked with
them to integrate Elasticsearch, utilizing it's aggregation features, to get the
time down to less than a second to return results.

There are many reasons to utilize Elasticsearch, such as its support for many
programming languages, its rich feature set and how fast it is. We have had a
lot of success with Elasticsearch and I hope you might be interested in trying
it out on a future project.

Greenfield is a Ember.js and Rails consulting firm based in Boston, MA, and we
have been doing a lot of work with Elasticsearch. If you think Elasticsearch
could help your product, please
[reach out](http://greenfieldhq.com/#/?anchor=contact).

photo credit: <a href="http://www.flickr.com/photos/86775868@N03/9100937592">Marbles</a> via <a href="http://photopin.com">photopin</a> <a href="https://creativecommons.org/licenses/by/2.0/">(license)</a>
