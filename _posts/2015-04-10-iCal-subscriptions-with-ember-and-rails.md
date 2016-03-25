---
layout: post
category :
tagline: ""
tags : [iCal, calendar, ics, Ember, Rails]
title: "iCal subscriptions with Rails"
description: "How to subscribe to your application's events by setting up an .ics endpoint"
author: faizaan_shamsi
nav: blog
---
{% include JB/setup %}

#### Introduction

You've built a feature that creates events/schedules/todos. Your users are
clamoring to have those events added to their Calendar application. Let's look
at how we can do that in the context of a Rails app.

#### The iCalendar format

We are going to want to create an endpoint in our app that responds with the
`.ics` format: [iCalendar](http://en.wikipedia.org/wiki/ICalendar). Most
calendar apps such as Apple Calendar and Google Calendar can import an `.ics`
file or subscribe to an `.ics` URL. The important thing to note is that we will
be returning a `VCALENDAR` with multiple Objects (most likely `VEVENT` or
`VTODO`) inside it. You'll have to choose the Object that is correct for your
use case by looking at the required and optional attributes that best match.
We'll be using `VEVENT`.

#### Building iCalendar objects in Ruby

Let us assume we have a `Meeting` class in Rails as follows:

{% highlight ruby %}

class Meeting < ActiveRecord::Base
  validates :description, presence: true
  validates :duration,    presence: true
  validates :location,    presence: true
  validates :start_time,  presence: true
end

{% endhighlight %}

We have meeting objects that we would like to turn into `VEVENT` objects. We're
going to use the [icalendar](https://github.com/icalendar/icalendar) gem to help
 us. The important thing to note is that based on the type of object (`VEVENT`,
 `VTODO`, etc.) there are different required and optional parameters. We can
 view these by inspecting the source for the [`Icalendar::Event`](https://github.com/icalendar/icalendar/blob/master/lib/icalendar/event.rb)
 we will be creating. The main things to note:

* The `dstamp` and `uid` are required, but we don't need to provide arguments.
* We must provide a `dtstart`, and may provide a `dtend` or `duration` but not both.
* There are additional optional properties that can be added as makes sense.

Let's define a `#to_ics` method on our `Meeting` class:

{% highlight ruby %}

class Meeting < ActiveRecord::Base
  validates :start_time,  presence: true
  validates :duration,    presence: true
  validates :description, presence: true
  validates :location,    presence: true

  def to_ics
    event = Icalendar::Event.new
    event.dtstart       = start_time
    event.duration      = duration
    event.description   = description
    event.created       = created_at
    event.last_modified = updated_at
    event.uid           = id # Don't do this in real life
    event
  end
end

{% endhighlight %}

In our case we've set the `uid` of the Event based on our meeting's `id`. We might
not want to expose that id publicly so may have to devise some other method to
generate a uid.

#### Building an iCalendar endpoint in Rails

Now that we've seen how we can turn our objects into the `VEVENT` format, we
need to create an `.ics` Rails endpoint. We want something like this:

{% highlight ruby %}

  class API::MeetingsController < API::BaseController
    # 1
    skip_before_action :some_kind_of_auth, only: [:index]
    # 2
    include ActionController::MimeResponds

    def index
      meetings = Meeting.all
      # 3
      calendar = Icalendar::Calendar.new

      meetings.each do |meeting|
        # 4
        calendar.add_event(meeting.to_ics)
      end

      respond_to do |format|
        # 5
        format.ics { render text: calendar.to_ical }
      end
    end
  end

{% endhighlight %}

This is a simplified case. You may have a somewhat different controller and
we'll assume the route has already been created. Let's see what's happening on
 each of these lines:

1. Since this URL will be exposed to an external app we will disable any auth
that would have otherwise inherited. In a future post we'll talk about how to
make this more secure.

2. We need to allow our Rails app to respond with a `text/calendar`
[MIME Type](http://en.wikipedia.org/wiki/MIME). Rails fortunately has support for this.

3. We use the `Icalendar` class provided by the  `icalendar` gem to create a
calendar that can later be converted to a `VCALENDAR`.

4. We convert each meeting to a `VEVENT` using the `to_ics` method defined earlier,
and add it to the calendar.

5. We convert our Calendar to a `VCALENDAR` and render the result.

#### Results

As long as we have some valid meetings in our database, if we fire out our Rails
server and visit `http://localhost:3000/meetings.ics` (or the appropriate URL for
your app) we most likely will be prompted to download an `.ics` file that we
can import into our default calendar application. What is especially useful is the
fact that we can provide that URL to the Calendar application and it will
routinely check for updates (based on your application the frequency may be
configurable). The important thing to note is that this demo app exposes the
calendar URL directly, we haven't covered how to secure it. 

Find me at [@faizaanshamsi](https://twitter.com/faizaanshamsi).

Greenfield is a Ember.js and Rails consulting firm based in Boston, MA, but we
have a lot of experience with managing these type of problems. If you need help
investigating solutions for these issues within your team, please
[reach out](http://greenfieldhq.com/#/?anchor=contact).
