---
layout: post
title: "EmberConf Recap -- Day 1"
description: "A short recap of some of the presentations at EmberConf -- Day 1"
category:
tags: [ember, ember.js, conference, emberconf]
author: vikram_ramakrishnan
---
{% include JB/setup %}

88.89% of [Greenfield](www.greenfieldhq.com)'s team is attending [EmberConf 2016](http://emberconf.com/schedule.html)!
With over 950+ attendees, this EmberConf's largest showing yet. It's an
exciting time to be working in Ember, and this short blog post highlights 
some of today's presentations:

###Keynote
This was a really great keynote by [Yehuda Katz](https://twitter.com/wycats) & [Tom Dale](https://twitter.com/tomdale) highlight where Ember is headed, with a particular focus on performance & optimization.

- Ember core team remains but is also dividing up into sub-teams (Ember Data, Ember-CLI, Learning)
- Team is really pushing to be more mobile friendly
- Glimmer2 is phenomenally fast (seeing something in the range of 3-5x improvements in FPS)

###Service Workers
[John Kleinschmidt](https://twitter.com/jkleinsc) of [cure.org](https://cure.org/) introduced us to Service Workers in Ember to highlight its benefits.

- Service workers as a reliable replacement for application cache
- Highlighted benefits of service workers for offline functionality in apps
- Impressed by how easily service workers can be integrated with Ember-CLi

###Cross-Pollinating Communities: We All Win
[Chris Ball](https://twitter.com/cball_) of [echobind](https://echobind.com/) presented a short history of Ember through multiple vantage points.

- "Good artists good copy, great artists steal"
- A great historical look at Ember.js from its roots in SproutCore to where we are today
- Ember has drawn from a number of frameworks (convention over configuration, one-way data binding) and other frameworks have drawn from Ember (Angular’s CLI, React Router)

###<select>ing Good Ember Patterns

[Brenna O'Brien](https://twitter.com/brnnbrn) spent time walking us [through](http://talks.brennaobrien.com/ember-select/selecting-good-ember-patterns.pdf) making good design pattern
choices in the vein of "Data Down, Actions Up" and Closure Actions to build
a flexible, reusable and modern app.

- Benefits of components with custom HTML & custom data flow
- Implementing DDAU to help add more dynamism to your Ember app
- `{{get}}` helper, which lets you [dynamically lookup](http://emberjs.com/api/classes/Ember.Templates.helpers.html#method_get) an object's property &`{{mut}}` helper to implement 1 or 2-way bindings

###Building Desktop Apps with Ember and Electron

[Felix Rieseberg](https://twitter.com/felixrieseberg) talked about how you can turn your Ember app into a legitimate
desktop app, highlighting its cross-platform benefits!

- [Ember-Electron](https://github.com/felixrieseberg/ember-electron) integrates Ember & Electron (development, testing & packaging). For example, we can still use the Ember inspector with Electron
- Multiple Electron apps can be bundled together to provide a "single" native app experience
- A short discussion around security concerns when building a desktop app through Electron

###Building Mobile Applications with Ember

Alex Blom walked us through [ember-cli-cordova](https://github.com/poetic/ember-cli-cordova), a tool to help develop mobile Ember apps.

- Forked over a Platform Service from Ionic to determine what Platform the app is running on
- Handling touch events with [Hammer.js](http://hammerjs.github.io/). Also, infinite scrolling with [smoke and mirrors](https://github.com/runspired/smoke-and-mirrors) and animations with [liquidfire](https://github.com/ember-animation/liquid-fire) work with Cordova. Another animation library to consider is [velocity.js](https://github.com/julianshapiro/velocity)
- [Crosswalk Project](https://crosswalk-project.org/) enables some performance optimizations. Managing 'Reflow'

If you're at EmberConf 2016 too, tweet us at [greenfieldhq](https://twitter.com/greenfieldhq). We'd love to meet up!
