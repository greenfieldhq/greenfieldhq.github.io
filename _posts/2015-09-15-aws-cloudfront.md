---
layout: post
category :
tagline: ""
tags : AWS
title: "Boost Your Pageload Speed in Under 10 Minutes"
description: Deploying Amazon Web Service's Cloudfront Content Delivery System improves your site's pageload speed - and your organic search performance.
author: greenfield
image: /assets/images/aws-cloudfront/ctr-by-serp-position.PNG
nav: blog
---
{% include JB/setup %}

Search Engine Optimization, or SEO, is a huge topic that encompasses a wide range of potential actions. An effective SEO campaign will leave you with a fast-loading site that Google and other search engines can readily understand. The better a search engine understands the relevance of your content to a specific search query, the more likely your site is to rank highly.

Any digital marketer worth their salt will tell you, the astronomical ROI on securing top-3 search ranking results for your most important keywords make it a compelling investment. In fact, moving from page 2 or lower in the search results onto page 1 can be as impactful to your website as can improving from spots 6-10 to a top-5 position, and then again as improving to the top 3.

![CTR by SERP position]({{ BASE_PATH }}/assets/images/aws-cloudfront/ctr-by-serp-position.PNG)

_(Image credit to [Google Organic Click-Through Rates in 2014](https://moz.com/blog/google-organic-click-through-rates-in-2014).)_

Not only do **page 1 results garner over 70% of all clicks** (!), those in the **top 5 account for over 67%** (!!) and the **top 3, over 55%** (!!!). It seems safe to suggest that improving your search engine performance is key to increasing your organic traffic.

## CloudfFront and SEO

SEO has been a dynamic industry since its inception in the early 1990s. [Early search engines](http://www.thehistoryofseo.com/The-Industry/Short_History_of_Early_Search_Engines.aspx), including Yahoo!, were human-curated; the innovation of crawler-based search engines, like [WebCrawler](https://en.wikipedia.org/wiki/WebCrawler) and [Excite](https://en.wikipedia.org/wiki/Excite), sparked a wave of change, manipulation, mastery, and obsolescence that continues to this day.

Various tactics - everything from [keyword stuffing](https://support.google.com/webmasters/answer/66358?hl=en) to [hiding text](http://searchenginewatch.com/sew/news/2291159/keyword-stuffing-hidden-text-manual-action-google-on-how-to-fix-it#) - at times [have been effective](https://en.wikipedia.org/wiki/Search_engine_optimization#History). One trait these all share, however, is that they were in some way manipulative, and eventually search engines got wise to the actions webmasters were taking to improve their ranking. That's one reason why the first heading on Google's "[Steps to a Google-friendly site](https://support.google.com/webmasters/answer/40349?hl=en)" explicitly encourages us to "Give visitors the information they're looking for."

## Is SEO only about content?

Content is king. But once you have the content that your visitors are looking for, what's next? There is another side to SEO. Modern SEO is near-synonymous with Google, and Google has made it clear that pageload speed is a significant ranking factor.

How quickly your website loads depends on a host of factors. Some of those factors occur at the level of your website - everything from whether or not your site is [mobile-device friendly](http://googlewebmastercentral.blogspot.com/2015/04/faqs-april-21st-mobile-friendly.html) to the titles of image files included in your blog posts to [how well organized are your CSS files](http://blog.greenfieldhq.com/2014/08/29/front-back/). These and others relating to your [hosting environment](http://blog.greenfieldhq.com/2015/08/21/cloud-hosting/) all are loosely grouped together under the umbrella of _technical SEO_. And this is where a modern and optimized content delivery network, or CDN, can be a huge boon.

## Technical SEO and CloudFront CDN

As pageload speed is better understood, we've been able to break it down into its individual components. More and more SEO practitioners now are espousing the importance of being able to serve up your website quickly and seamlessly. Here are two of ranking factors that you can improve by optimizing your hosting solution.

## Time To First Byte

Google considers _Time To First Byte_ (TTFB) - the time it takes for your computer to send a request over the internet and to begin receiving the requested web page or data back to your browser - as a signal of a smooth and pleasant user experience for the searcher. In an impactful study investigating the impact of page load speed and other technical SEO aspects published on Moz in 2013:

> ...a clear correlation was identified between decreasing search rank and increasing time to first byte. Sites that have a lower TTFB respond faster and have higher search result rankings than slower sites with a higher TTFB. Of all the data we captured the TTFB metric had the strongest correlation effect, implying a high likelihood of some level of influence on search ranking.

_[How Website Speed Actually Impacts Search Ranking](https://moz.com/blog/how-website-speed-actually-impacts-search-ranking)_

CloudFront - and other content delivery networks - utilize a global distributed network of servers, referred to as [edge locatons](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/LocationsOfEdgeServers.html). By allowing visitors to access your site via the edge location nearest to them, response time is lowered and the overall user experience is improved.

![Content delivery network diagram]({{ BASE_PATH }}/assets/images/aws-cloudfront/aws-cloudfront-diagram.PNG)

_(Image credit to [How CloudFront Delivers Content](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowCloudFrontWorks.html).)_

## Leveraging browser caching

By allowing you to define the period of time for which you want a resource - whether a single image file or your stylesheet - to be considered "current", CloudFront allows you to more fully leverage browser caching to quickly and seamlessly deliver your webpage to visitors.

It does so by, first, routing the user to the nearest edge location and, second, checking that edge location's cache for a current version of the requested files. If the version available is still considered current, it's instantly served up to the visitor; if the cached version is expired, CloudFront sends a request to your origin server for the newest version, serves that file up, and then replaces the expired version available at the edge location.

By selectively extending the expiration dates for certain files - including your site's CSS files, images, and other objects that are not frequently updated - it's possible to significantly reduce the frequency with which CloudFront has to request updated versions for an edge location. The end result is a faster, more seamless experience for your users and, going off of Google's stated preferences around pageload speed and SEO, improved search engine rankings.

To find out how Greenfield can help you improve your website's performance by optimizing your web hosting solutions, [contact us here](http://greenfieldhq.com/#contact).

Like what you've read? Receive more contact like this, directly to your inbox, by subscribing to our newsletter using the form below.
