---
layout: post
category :
tagline: ""
tags : [founder]
title: "Founder Series: The Code for Your Application"
description: What is source control and why is it important?
author: mike_munroe
nav: blog
---
{% include JB/setup %}

Managing the development of an application can be very scary for a new founder and this is the first in a series of
posts we will share as a means of educating new founders on technical topics that impact the application development
process. Seasoned technical founders may find some of this material elementary, but we think non technical founders or
technical founders lacking experience shipping an application from idea to market will benefit from the material.

Today, we will cover source control, what it is and why it is important.

##What is source control?##

Source control is a tool used to host the code that is developed for your application. As developers write code, they
submit their code to the source control repository incrementally using check-ins. A check-in is a snapshot of the code
on the developer's local machine. Typically, a developer will check-in code following the completion of a feature or a
subset of code that would be used for completing development of a larger feature. The same goes for fixing bugs,
often a developer would submit a check-in following the development of code that fixes a bug or a small piece of a
larger bug.

When the developer feels the code meets a certain level of stability, often following running automated tests against
the code to be checked in, the developer submits the check-in, publishing their code to the source control repository,
so that other developers can see those changes, review them, and utilize those changes within their local development
environments.

##Why is source control important?##

The check-in process allows developers to add comments to the code that they are contributing to the source code
repository and manages conflicts between developers that might be working on the same piece of code at the same time.
Source control systems also allow developers to work on sections of code in parallel through the use of branches or to
tag code marking a specific state in time.

Writing good comments when committing a check-in is invaluable. Even within a one developer team, using a source control
repository and writing good comments when checking-in code is priceless. As the code base gets bigger as more features
are developed for the application, having a written history for changes made is very helpful when debugging later on or,
more importantly, serves as documentation for a new developer coming in to develop code for the application. The new
developer or development team can read through previous check-in comments to get a guage on how and why the previous
developer(s) made certain decisions as they made changes within the code base. Even if check-in comments are not
utilized, a new developer can use the tools of the source code repository to see the revision history of all files
within the code base.

As a founder, after you have sketched out some ideas of your product vision and you hire a development team to make your
vision a reality, make sure they are using a source control repository to host the code for your application and make
sure you have access to the source control repository. If you need to add new developers to the team, or in the worst
case scenario, you have to find a new development team, you want to provide access to the source code
repository, not just to the source code. The source code is just a snapshot in time for your application code.
A source code repository provides a historical record of the changes made within your source code and the development
path that lead to the current version of your application.

##Where should I go now if I want more info?##

We utilize git at greenfield and host all of our git repositories with [GitHub](https://github.com/). For more
information on git and Github, check out this great post from
[readwrite](http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1) or
[GitHub's Intro](https://try.github.io/levels/1/challenges/1).

Thank you for following along. greenfield is a consulting firm based in Boston, MA.
Please [reach out](http://greenfieldhq.com/#/?anchor=contact) to us if you have a project that you could use our help
on.

