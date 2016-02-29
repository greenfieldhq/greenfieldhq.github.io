---
layout: post
category : lessons
tagline: ""
tags : [ember, ember-cli]
title: "Adding Bootstrap to Ember-CLI"
description: Directions for adding bootstrap to Ember-CLI.
author: mike_munroe
---
{% include JB/setup %}

I think a lot of designers cry every time a developer reaches for [Bootstrap](http://getbootstrap.com/) to use for an
application being built, but it is a great utility to get up and running fast with a decent UI.

Integrating Boostrap with Ember-CLI used to be a bit of a pain, but recent changes to Ember-CLI have made
integrating Bootstrap an easy task.

Below, I will show the steps to follow to utilize Bootstrap in your Ember app, that you should be building with
Ember-CLI.

The directions below work with versions of Ember-CLI > 0.0.28. To find what version of Ember-CLI you are using, do

{% highlight javascript %}
  ember --version
{% endhighlight %}

If you need to upgrade your version of Ember-CLI, check out this
[tweet from Stefan Penner](https://twitter.com/stefanpenner/status/474546138725777408), that should be helpful.

For example purposes, let's call our app Dashboard.

Create your Dashboard Ember app
{% highlight javascript %}
  ember new dashboard
{% endhighlight %}

Change into its directory
{% highlight javascript %}
  cd dashboard
{% endhighlight %}

Start your Ember application
{% highlight javascript %}
  ember serve
{% endhighlight %}

In your browser, navigate to http://localhost:4200
You should see
![cli index page]({{ BASE_PATH }}/assets/images/cli-tutorial/welcome.png)

Go back to your terminal window were Ember is running and stop it
Install bootstrap using bower
{% highlight javascript %}
  bower install --save bootstrap
{% endhighlight %}

Open Brocfile.js in your editor of choice. Brocfile.js is located in the root of your Ember project.
Add the following line
{% highlight javascript %}
  app.import('vendor/bootstrap/dist/css/bootstrap.css')
{% endhighlight %}
I added it above,
{% highlight javascript %}
  // Use this to add additional libraries to the generated output files.
  app.import('vendor/ember-data/ember-data.js');
{% endhighlight %}

Save the changes to Brocfile.js
Open index.html in your editor of choice. Index.html is located in the `app` folder of your Ember project.
Add the following line
{% highlight javascript %}
  <link rel="stylesheet" href="assets/vendor.css">
{% endhighlight %}
I added it above,
{% highlight javascript %}
  <link rel="stylesheet" href="assets/test-cli.css">
{% endhighlight %}

Start your Ember application
{% highlight javascript %}
  ember serve
{% endhighlight %}

Success! You should see your Welcome message with Boostrap styling
![cli index page]({{ BASE_PATH }}/assets/images/cli/bootstrap-welcome.png)

Thank you for following along. greenfield is an Ember.js consulting firm based in Boston, MA. [Reach out](http://greenfieldhq.com/#/?anchor=contact) to us if you
have a project that you could use our help on.

