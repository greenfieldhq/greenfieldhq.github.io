---
layout: post
category : lessons
tagline: ""
tags : [ember, ember-cli]
title: "Building an Application with Ember-CLI Part 1"
description: First part of a series on building an app with Ember-CLI.
author: mike_munroe
---
{% include JB/setup %}
**UPDATE** (05/16/2014): Bryan Cardarella from DockYard is working on a similar tutorial and he has gone a bit more in depth than I have. Rather than regurgitate similar coverage on our blog, head over and check out Bryan's [coverage of the same topic](http://reefpoints.dockyard.com/2014/05/07/building-an-ember-app-with-rails-part-1.html).

-----

You are new to Ember or might even be a novice and you keep hearing about this Ember-CLI thing.

##What is Ember-CLI?

Ember-CLI is command line platform for building Ember applications. At this time, it seems like the Ember core team is standing behind Ember-CLI as the standard, so we at greenfield have hitched our wagons onto Ember-CLI and have been enjoying the benefits of set file structure conventions and module based code that Ember-CLI provides.

Before we get into the process of building out that Books application, let's review what module based code will look like inside of the Ember-CLI structure. To do so, I will create a model with Ember syntax that does not use modules and then module based syntax.

Non module syntax -
{% highlight JavaScript %}
  App.Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    birthday: DS.attr()
  });
{% endhighlight %}

Module syntax -
{% highlight JavaScript %}
  var Person = DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),
    birthday: DS.attr()
  });

  export default Person
{% endhighlight %}

For more information on how Ember-CLI provides support for module based syntax, head on over to the [Ember-CLI docs](http://iamstef.net/ember-cli/#using-modules).

##Building Our Application

1. Complete [Getting Started](http://iamstef.net/ember-cli/#getting-started) within Ember-CLI docs
2. At the end of step 1, you should have run `ember server` from your command line
3. Navigate to `localhost:4200` in your browser, you should see
![cli index page]({{ BASE_PATH }}/assets/images/cli-tutorial/welcome.png)

Join us in part 2, as we start building out some substance for our application.

The code for this [example project](https://github.com/greenfieldhq/ember-cli-books) can be found on the [greenfield Github page](https://github.com/greenfieldhq).

##Resources
If you found this post and followed along, you may be just beginning your journey to learn Ember.js. If that is the case, I would suggest checking out Code School's [Warmimg Up with Ember](https://www.codeschool.com/courses/warming-up-with-emberjs) course. Code School requires a monthly membership, but it's around $30 or so. I checked out the material when it was first released and think it might be the best shortcut for a beginner to pick up some Ember skills.

Code School put out an Ember screencast called [Soup to Bits: Warming Up with Ember](https://www.codeschool.com/code_tv/soup-to-bits-warming-up-with-ember). This books project is basically a port of what is taught during the screencast, but in Ember-CLI.
