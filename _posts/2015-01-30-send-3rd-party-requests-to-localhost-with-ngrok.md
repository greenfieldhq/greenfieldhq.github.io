---
layout: post
title: "Send 3rd Party Requests to localhost with ngrok"
description: "How to send requests from 3rd party services to your develepment server using ngrok"
category:
tags: [ngrok, inbound-email, tunnel]
author: faizaan_shamsi
---
{% include JB/setup %}

## Introduction

Have you ever had to build an application that parses inbound email? What about requests from 3rd party services? If so, you've run across the problem of working with these incoming messages in your development environment without having to deploy the application into staging or production. I've found some success using tools such as [ngrok](https://ngrok.com/) to forward requests to my localhost.

One of the simplest solutions to this problem is to forward any requests at a given URL to our server running on `localhost`, which is what ngrok allows us to do. To use it, download ngrok, unzip it, and run `ngrok 80`. Make sure the executable is in your present working directory. You'll see something like this:

![ngrok terminal output](https://s3.amazonaws.com/faizaan-blog-assets/ngrok/ngrok-terminal-output.png)

## Tunnel to Localhost

ngrok provides both an `http` as well as an `https` endpoint (they will be different for you) that will forward all requests to port 80 on our machine. If we visit the `http://93b8608.ngrok.com` URL provided we get the following screen in our browser:

<img src="https://s3.amazonaws.com/faizaan-blog-assets/ngrok/ngrok-no-web-server.png" alt="ngrok no web server" width="500" height="180">

We're not running our application server. Our next step will be to launch our application on a development server, then pass that port to ngrok so we can tunnel to it. I'm using Ruby on Rails so I'll use `rails s` to launch my server on port 3000. Then on ngrok, we run `ngrok 3000` to have it tunnel to port 3000:

![ngrok with localhost port](https://s3.amazonaws.com/faizaan-blog-assets/ngrok/ngrok-with-localhost-port.png)

You'll notice that the ngrok url is now forwarding to port 3000 instead of 80, and with our Rails server running we can visit `http://93b8608.ngrok.com` and voila! You'll see your application at that URL. As long as you have ngrok and your webserver running you can share that URL.

## Traffic Inspection

If you look back at the terminal where we had ngrok running, you'll notice a line called `Web Interface` with an address of `127.0.0.1:4040`. Go to the forwarding URL and make some requests on your application. Then visit the web interface at `localhost:4040` and you'll see a page that looks like this:

<img src="https://s3.amazonaws.com/faizaan-blog-assets/ngrok/ngrok-web-interface.png" alt="ngrok no web server" width="800" height="550">

ngrok provides a useful interface for inspecting all the requests being passed from the URL to localhost. This can be useful when setting up incoming requests from other services.

## Mail

You may be using various 3rd party mail services to process inbound email and forward it to your application. Many of them (in my particular case Mandrill) require a real URL as the endpoint they forward their (often JSON) payload to. With the paid version of ngrok we can set the domain to one of our own. The first step is to reserve the name on our [ngrok dashboard](https://ngrok.com/dashboard). Then, go to your domain registrar and change your CNAME records to point to `ngrok.com`. Then you can launch ngrok with the forwarding URL as follows:

```
$ ngrok -hostname 'your.urlhere.com' 3000
```

As long as ngrok remains running, any requests to your domain will forward to your application server on localhost. This allows you to configure 3rd party services to send messages to a real endpoint on your domain before your app is in production.

## CNAME, MX, A Records and limitations

I've seen ngrok successfully used with inbound email and video encoding services. However, in working with Mandrill for my inbound email, I came across an issue. Mandrill required my MX records ([DNS Record Types](http://en.wikipedia.org/wiki/List_of_DNS_record_types)) to point to their servers so they could receive and parse my mail into JSON, which would then be forwarded to an endpoint I provided. However, this would require setting A and MX records on my domain (since I couldn't set MX and CNAME for the same domain). ngrok currently only supports CNAME records. I found a similar paid service, [forwardhq](https://forwardhq.com/) that allowed me to set my A records to point at their service, and my MX records to point at Mandrill. This way, I could visit my URL and be connected to my server running on localhost; but any incoming mail would be sent to Mandrill, where it would be parsed and forwarded as JSON to my real domain, which would forward it to my server running on localhost.

<img src="https://s3.amazonaws.com/faizaan-blog-assets/ngrok/request-flow.png" alt="request diagram">

## Contact

Hopefully you find these tools useful for simplifying your development. If you have any questions or comments, I'm [@faizaanshamsi](http://twitter.com/faizaanshamsi) on Twitter and [GitHub](http://github.com/faizaanshamsi).
