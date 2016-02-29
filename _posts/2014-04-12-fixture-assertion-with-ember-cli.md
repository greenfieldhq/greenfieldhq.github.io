---
layout: post
category : lessons
tagline: "Fixtures Assertion in Ember-CLI"
tags : [ember, ember-cli]
title: "Assertion Failed: Unable to find fixtures for model using Ember-CLI"
description: How to fix assertion on fixtures set up within an Ember-CLI project.
author: mike_munroe
---
{% include JB/setup %}

Recently, I started a new application to kick the tires with [Ember-CLI](http://iamstef.net/ember-cli). The application tracks books read, ratings, etc.

To get started, I wanted to use fixture data. One of the first issues I ran into was that my data was not loading and the following exception was being thrown in the console,
{% highlight JavaScript %}
  Error while loading route: Error: Assertion Failed: Unable to find fixtures for model type books@model:book:
    at new Error (native)
    at Error.Ember.Error (ember.js:910:19)
    at Object.Ember.assert (ember.js:73:11)
    at Adapter.extend.findAll (ember-data.js:795:15)
    at _findAll (ember-data.js:10391:29)
    at Ember.Object.extend.fetchAll (ember-data.js:9425:29)
    at Ember.Object.extend.findAll (ember-data.js:9406:21)
    at __exports__.default.Ember.Route.extend.model (books/routes/index.js:7:27)
    at superWrapper [as model] (ember.js:1292:16)
    at Ember.Route.Ember.Object.extend.deserialize (ember.js:36556:19)
{% endhighlight %}

In Ember-CLI, the fixture adapter gets defined at `app\adapters\application.js`
{% highlight JavaScript %}
export default DS.FixtureAdapter.extend();
{% endhighlight %}

Here is the code for a simplified version of my Book model `app\models\books.js`
{% highlight JavaScript %}
var Book = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr()
});

Book.FIXTURES = [{
  id: 1,
  title: 'Flash Boys',
  author: 'Michael Lewis'
},
{
  id: 2,
  title: 'Getting to Yes: Negotiating Agreement Without Giving In',
  author: 'Roger Fisher, William L. Ury and Bruce Patton'
}];

export default Book;
{% endhighlight %}

Notice how the fixture data is defined with `Book.FIXTURES = . . .`

That was the cause of the problem.

To fix the `Unable to find fixtures for model` assertion, I had to define my fixture data using `reopenClass`.
{% highlight JavaScript %}
var Book = DS.Model.extend({
  title: DS.attr(),
  author: DS.attr()
});

Book.reopenClass({
  FIXTURES: [{
      id: 1,
      title: 'Flash Boys',
      author: 'Michael Lewis'
    },
    {
      id: 2,
      title: 'Getting to Yes: Negotiating Agreement Without Giving In',
      author: 'Roger Fisher, William L. Ury and Bruce Patton'
    }]
});

export default Book;
{% endhighlight %}

If you are interested in seeing the rest of the code for this Ember-CLI based app, head over to [https://github.com/mikepmunroe/books](https://github.com/mikepmunroe/books).
