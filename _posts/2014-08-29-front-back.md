---
layout: post
category :
tagline: ""
tags : [founder]
title: "Founder Series: What is the difference between front end and back end?"
description: Developers often talk about front end code or back end code. What does that mean?
author: mike_munroe
nav: blog
---
{% include JB/setup %}

Managing the development of an application can be very scary for a new founder and this is the second in a series of
posts we will share as a means of educating new founders on technical topics that impact the application development
process. Seasoned technical founders may find some of this material elementary, but we think non technical founders or
technical founders lacking experience shipping an application from idea to market will benefit from the material.

Today, we will cover two terms used often by developers, "the front end" and "the back end".

##What is the front end?##
Think of the front end as the bucket for all code that is used to create things that can be seen or touched, in the case
of a mobile app. On the web, that would encompass HTML, Javascript, and stylesheet code. For mobile, that would be all
code written to create a display in iOS for an iPhone or iPad or code written for Android to create a display in an
Android phone. In case you are not familiar with Android phones, that would usually mean any smart phone that is
not an Apple product, such as a [Samsung Galaxy](http://www.samsung.com/us/mobile/cell-phones/SM-G386TZKATMB) or
[Motorola Moto X](http://www.motorola.com/us/FLEXR1-1/Moto-X/FLEXR1.html).

HTML is all code that will be written to create the display for your application in a browser, that can be viewed on a
laptop, tablet or a phone. Think of HTML as the foundation of the display for your application. This is where basic
layout structure is often defined, such as headers, footers, and content areas.

Stylesheets are used to "dress up" the HTML display. Colors, typography, layout rules such as alignment and spacing will
all be defined in your stylesheets. If a developers mentions "CSS", they are referrring to the stylesheets.

Javascript is code used to create dynamic interactions built in HTML and styled with CSS. Not that long ago, most code
used to create interactive experiences for the user was defined in the back end and provided by a server. Over the past
few years, enhancements to browsers and the availability of improved Javascript frameworks and libraries has caused a
shift towards moving the code that allows users to interact with your application to live in the front end on the
browser.

For non developers, this can be a hard topic to understand, so here is a an example. Let's pretend that your
application calculates the amount of retirement funds required for a user of any age to have before they can retire. The
application probably has a form that asks for the users age and their current yearly salary. Using that information, the
application will return three different retirement ages with a calculated total amount of money they would need at the
three different age points. If Javascript is used, the code to make those calculations will already be loaded on the
user's browser running on their computer, phone or tablet, so their computer, phone or tablet will do the work to
complete the calculations needed for your application and display the results back to the user. Not too long ago, most
applications would have the same form ask for the users age and yearly salary, then take that information and send it
off to a server over the Internet. The server would complete the calculations and return the calculation and code to
adjust the new display accordingly back to the user's browser over the Internet.

Utilizing Javascript on the client is an advantage, especially, when you account for users on a mobile device that may
have spotty Internet connections. Since they do not have to send data out to a server, if the Internet is down or slow,
they are not impacted as much. This is an over simplified example, but the take away is that through Javascript, work
that needs to be done by your application can be pushed down to the user's browser. Most applications will still require
the client's browser to communicate a lot with a server over the Internet, but cutting down the amount of communication
that is needed is an improvement. Speaking of servers, that leads right into our next section, the back end.

##What is the back end?##
Think of the back end as the bucket for all code that your applications needs for things that the end user will not see.
The back end encompasses your servers, data and the code written to deliver that data to your application.
Most often, data lives in a database or cluster of databases, but it could also come from an external service, such as
[Twilio](https://www.twilio.com/), for example. If your application sends text messages to users, Twilio would be a
great service to utilize and the code that communicates with Twilio to send the text messages to your users would be
back end code.

Your servers would include everything needed to host your application, such as firewalls, caching sytems, web servers
that serves the front end code downstream to your clients browsers, and any other server infrastructure your application
might require.

A lot of applications these days provide an API that allows servers from a third party to communicate with your servers
to get data that your application utilizes. Twitter is a good example here. Users author tweets on Twitter every day.
Your application might show the last three tweets for a user in a user profile page. To accomplish that, your development
team would write code, in the back end, that would communicate with Twitter's servers, through
[Twitter's API](https://dev.twitter.com/docs/api/1.1), to retrieve the last three tweets for the user you are showing
the user profile for.

##How does this information impact hiring?##
In general, you want a core set of developers that are full stack, meaning they have the ability to create front end
and back end code well. A larger development team will often have at least one front end specialist and at least one
back end specialist on the team. The front end specialist will typically have some sort of an art background with a
heavy understanding of what is needed to create great user experiences. The back end specialist will typically have a
lot of experience dealing with databases and managing large datasets efficiently. Back end specialists are often very
helpful in making sure your application code can run very efficiently and highly performant that can have a big impact
on the bottom line if you are hosting your application in the cloud.

We recently saved a client $1000 per month, by making their back end code more efficient, therefore, cutting down the
amount of processing power required to run their app on Heroku.

This is the second post in our Founder Series. The first post covered the topic of source control. Here is a link to
that post, [Founder Series: The Code for Your Application](http://blog.greenfieldhq.com/2014/08/04/source-control/).

Thank you for following along. greenfield is a consulting firm based in Boston, MA.
Please [reach out](http://greenfieldhq.com/#/?anchor=contact) to us if you have a project that you could use our help
on.

