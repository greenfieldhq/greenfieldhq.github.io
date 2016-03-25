---
layout: post
category : lessons
tagline: ""
tags : [ember]
title: "Render Data from Multiple Models in One View in Ember"
description: Directions for showing data from multiple models inside of one view.
author: mike_munroe
nav: blog
---
{% include JB/setup %}

Updated on 7/10: switch to using an ObjectController for simpler code.

If you follow any [decent Ember tutorial](http://emberjs.com/guides/), you will quickly learn how easy it is to create
a resource within Ember and render some data for that resource's model within a template.

Often times, you want to show data from multiple resources within one view. For example, let's pretend that your
application's homepage is more of a dashboard. On that home page, you want to show a list of users and a list
of tweets.

To start, let's make sure we have our 2 models defined correctly,

{% highlight javascript %}
  # app/models/user.js

  var User = DS.Model.extend({
    name: DS.attr('string')
  });

  export default User;
{% endhighlight %}

{% highlight javascript %}
  # app/models/tweet.js

  var Tweet = DS.Model.extend({
    content: DS.attr('string')
  });

  export default Tweet;
{% endhighlight %}

To keep things simple, let's use fixture data for our models.

To enable fixtures, create a folder named `adapters` inside of `app` and add the following file,

{% highlight javascript %}
  # app/adapters/application.js

  export default DS.FixtureAdapter.extend({});

{% endhighlight %}

Go back to your models and update them to include fixture data,

{% highlight javascript %}
  # app/models/user.js

  var User = DS.Model.extend({
    name: DS.attr('string'),
  });

  User.reopenClass({
    FIXTURES: [{
        id: 1,
        name: 'Mike'
      },
      {
        id: 2,
        name: 'Tom'
      },
      {
        id: 3,
        name: 'Dave'
      }]
  });

  export default User;
{% endhighlight %}

{% highlight javascript %}
  # app/models/tweet.js

  var Tweet = DS.Model.extend({
    content: DS.attr('string')
  });

  Tweet.reopenClass({
    FIXTURES: [{
        id: 1,
        content: 'Ember Rocks!'
      },
      {
        id: 2,
        content: 'Wicked Good Ember is hosted in Boston.',
      },
      {
        id: 3,
        content: 'greenfield loves Ember!'
      }]
  });

  export default Tweet;
{% endhighlight %}


With the 2 models defined, we can define our index route.

In model, we will utilize [Ember.RSVP.hash](http://emberjs.com/api/classes/Ember.RSVP.html#method_hash) to hash both
models, or as many as needed. We will then use setupController to make those models available for use within
our index template.

{% highlight javascript %}
  # app/routes/index.js

  var IndexRoute = Ember.Route.extend({
    model: function() {
      return Ember.RSVP.hash({
        users: this.store.findAll('user'),
        tweet: this.store.findAll('tweet')
      });
    }
  });

  export default IndexRoute;
{% endhighlight %}

The index controller will need to be defined as an array controller.

{% highlight javascript %}
  # app/controllers/index.js

  export default Ember.)ObjectController.extend({});
{% endhighlight %}

Last, let's present our data within our index template.

{% highlight javascript %}
  # app/templates/index.hbs

  <ul>
    {% raw %}{{#each users}}{% endraw %}
      <li>{% raw %}{{name}}{% endraw %}</li>
    {% raw %}{{/each}}{% endraw %}
  </ul>

  <ul>
    {% raw %}{{#each tweets}}{% endraw %}
      <li>{% raw %}{{content}}{% endraw %}</li>
    {% raw %}{{/each}}{% endraw %}
  </ul>

{% endhighlight %}

At this point, you should see the following in your Ember CLI welcome screen,
![two-models index page]({{ BASE_PATH }}/assets/images/two-models.png)

Thank you for following along. greenfield is an Ember.js consulting firm based in Boston, MA.
Please [reach out](http://greenfieldhq.com/#/?anchor=contact) to us if you have a project that you could use our help
on.

