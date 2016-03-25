---
layout: post
category :
tagline: ""
tags :
title: "5 Warning Signs that Your Development Team Needs Help"
description: Some top warning signs to look out for.
author: mike_munroe
nav: blog
---
{% include JB/setup %}

For some development teams, the items on the list below might be taken for
granted, but if any of the following are issues within your team, you should
investigate ways to remedy the shortfall.

###1. Your team does not use source control

Source control, also referred to as version control, is a system to track
on-going changes to the source code for your application. Many teams are
utilizing
[Git](http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), but
another common source control system is [SVN](https://subversion.apache.org/).
Utilizing a source control system allows for your developers to see the
revision history for changes, and who made those changes. Depending on the
source control system, there are also a lot of tools for managing development
efforts moving in parallel.

We utilize Git, hosted on [GitHub](https://github.com/), for all of our client
work. GitHub has a powerful UI for reviewing pull requests, a set of changes a
developer wants to share with other team members for review before being
committed to source control and we uses pull requests to review every commit
made to a client project.

###2. Your database is not backed up regularly

We all know how important backups can be, but we never realize how important
they are until one is needed. Backing up the database for your application is
of the utmost importance. Not having a regular back up occurring is a sign of
organization missing within your team. There are a lot of tools that can be
utilized for completing backups on a schedule, but often a
[cron job](https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=cron%20job)
is enough to run a back up task and place the back up file in a secure location
on a regularly scheduled basis.

For most of our clients, daily backup is sufficient and that is typically what
we set up. Most clients we serve are hosted on a cloud based service, such as
[AWS](http://aws.amazon.com/) or [Heroku](https://www.heroku.com/) and both of
those have facilities for making regular backups easy to schedule.

###3. Your application often takes seconds to load

In general, your users are expecting to see pages load in under 1 second. Even
if the application is not delivered within a browser, plan for similar
expectations. Performance issues are always going to be a drag for your users.
Aside from the issues above, performance issues could be caused by a multitude
of different problems. It's possible that the UI that has been programmed is
causing excessive load time, it could be a slow query again your database, it
could be a fast query that is getting called an excessive amount of times over
and over again, or it could be some calculation being completed that takes a
long time. If you have some performance issues within your application, but you
don't have any solid evidence on where the problem lies, it's time to pull back
the covers and isolate where the problem is and work towards getting the
bottlenecks fixed.

It's not out of the ordinary for performance issues to creep up while completing
client work. In each case though, the first thing we do is track down the cause
of the bottleneck and keep a work item on the schedule to fix the problem as
soon as feasible. For front end debugging, we utilize
[Chrome Dev Tools](https://developer.chrome.com/devtools) to see what is going
on at the UI level or the network traffic going back and forth. On the backend,
for us is [Rails](http://rubyonrails.org/) &
[PosgreSQL](http://www.postgresql.org/), we can take a peak at the Rails server
output to see how traffic is behaving and also utilize tools such as
[explain](http://www.postgresql.org/docs/9.1/static/sql-explain.html) to get in
depth information for optimizing queries.

###4. You have no automated tests

Automated testing provides a way of testing that the critical parts of your
application work as they are intended to. It can reduce the likelihood
of bugs, improve the quality of the codebase, and improve the productivity of
your development team (less time bugfixing). It requires buy in and some upfront
work from your development team however, and the ideal amount to test is not
widely agreed upon across all teams.

If you have no automated testing coverage, especially for core areas of your
product, it's time to bring the development team together to investigate and
set up your testing strategy. If you have a team of QA engineers manual testing
things, that's great. Try to convince a few of them to bite off doing some
programming and getting you some automated coverage.

We have standardized on a suite of tests across the backend and our front end.
For the backend test suite, we utilize [RSpec](http://rspec.info/) and for the
front end we utilize the QUnit testing framework built in to
[Ember CLI](http://www.ember-cli.com/).

###5. You have no confidence in your release schedule

Your last 3 releases were behind schedule. You're currently working on your next
release, but you can't tell if you are on schedule or behind. You're basing the
status of the release on the feel of how things are going. If you really want
to understand something, you have to measure it. Teams have different strategies
for measuring progress.

With our clients, we typically break up releases into smaller two week sprints.
Each sprint has features within them with a quantifiable measure of estimated
work, often referred to as story points. As we work through sprints, an average
velocity of work completed during a sprint falls out and is useful in estimating
the amount of work the team can complete during a sprint. If you are
measuring progress, you can quantify results and plan accordingly, but going
blind by feel is a recipe for painful outcomes.

Greenfield is a Ember.js and Rails consulting firm based in Boston, MA, but we
have a lot of experience with managing these type of problems. If you need help
investigating solutions for these issues within your team, please
[reach out](http://greenfieldhq.com/#/?anchor=contact).

Thanks to [@faizaanshamsi](https://twitter.com/faizaanshamsi),
[@heroiceric](https://twitter.com/heroiceric), & [@davekaro](https://twitter.com/davekaro)
for feedback on this post.
