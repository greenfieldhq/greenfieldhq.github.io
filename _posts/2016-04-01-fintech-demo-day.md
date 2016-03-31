---
layout: post
title: "Fintech Sandbox Demo Day"
description: "A short recap of the Fintech Sandbox's Demo Day"
category:
tags: [fintech, conference]
author: vikram_ramakrishnan
---
{% include JB/setup %}

Last week, [Greenfield](www.greenfieldhq.com) attended the [Fintech Sandbox](http://fintechsandbox.org/)'s Demo Day, which highlighted
some of the exciting Fintech startups which have gone through the sandbox.
What the Fintech Sandbox does is connect some phenomenal data partners
(Thomson Reuters, Factset, Tradier, Xignite), accelerator partners and
infrastructure partners (like AWS) with startups. The benefit here is that
what was once very expensive to get started (due to the cost of data access)
can now be prototyped and worked on quickly and for free.

Here are some high level themes that we came across that seemed to be
overarching related to the companies that presented:

1. Every startup that presented fundamentally implemented technology to enable better decision making by investors, individuals and other customers
2. Data feeds are still hard to wrangle and startups need better easy access
to good quality, standardized data sources. For example, some data providers
provide data in CSVs, others through proprietary formats that need to be
delivered through FTP. This non-standardization can become a major headache for
startups as they attempt to use this data.

Here's a rundown of the companies that presented:

### ForwardLane

[ForwardLane](http://forwardlane.com/home.html) offers ultra high net worth investors customized investment
advice that's. Nathan Stevenson, CEO, spoke about the $800bn shortfall for the
42mm ultra affluent investors who are affected by market volatility. They
attempt to solve this problem by programmatically generating questions and
advice to a financial advisor who wants to help them by implementing machine learning and quantitative finance in the background.

[Twitter](https://twitter.com/Forward_Lane)

### Volos Portfolio Solutions
[Volos](http://volossoftware.com/)'s software platform lets derivative traders
and portfolio managers build a strategy for developing and analyzing complex
derivative trades. This was an impressive looking piece of software. If you were
a trader or portfolio managers, you could enter in your criteria like the
options you were interested in along with a general thesis and risk objectives
and Volos' software recommends a series of options strategies that fit your
objectives. From the demo, the software looks like a single page app along with
some scenario analysis tools. It provides for a massive competitive advantage within this asset class.

[Twitter](https://twitter.com/volossoftware)

### Cognism

[Cognism](http://www.cognism.com) improves lead generation time for financial
professionals.

Cognism is a web-based productivity suite for financial professionals that dissects financial research and news into unique knowledge blocks. It kind of looks like
a Trello or Kanban board and uses that UI to create a sales pipeline for users.
In particular, its intelligence lays in the ability to create "triggers" on
personnel changes at companies to create leads. For example, a user can set up
a trigger like "please look up everyone in CA that has changed jobs" and when
this trigger gets hit, the user is notified of what caused that trigger, thereby
generating a lead. Their current client roster ranges from the Financial Times
to a wealth manager in CA, engineering firms in Switzerland and asset managers
in London. Their tagline is "We push opportunities to your people."

[Twitter](https://twitter.com/realCognism)

### Nutonian
Nutonian offers an application that empowers SAS and MATLAB professionals to automatically discover analytical models via sophisticated evolutionary algorithms.
- http://nutonian.com
- https://twitter.com/nutonian

Joy Kinnear, British Consulte General

- Data important, but impact isn't there yet
- Facset + CapitalIQ = data partners
- 200,000 data scientist job openings
- not enough people to help companies come up with good analytics
- data science in enterprise; orgs held hostage by select few
- "machines are the future of analytics"

Eureqa

cornell AI lab

- eureqa goes through billions of opportunities that gives you a model you should use
- "the first question is often not a good one, the fifth? that gets better"
- models by themselves aren't a strategy, so we need to find a good model
- demo of real estate investment firm

1. upload data or connect to fin data providers
2. now we're looking at tons of data, eco indicators per month
3. send this data in and get back a bunch of models and how accurate they were
4. gives you more information and specifics about each of these (real gdp has a high correlation)
5. you can export it in excel, pdf, etc.; RESTful python API

- raw data to actionable answers at the push of a button

### Kyper
Kyper's data marketplace and logistics technology power the entire lifecycle of data, from data on-boarding to research and product development.
- https://www.kyper.com/
- https://twitter.com/kyperdata

Dwayne Desaulniers, Associated Press - "Gone from horses to python"

- Quant fund team members
- Fintech data publishers << interface == Kyper >> Fintech developers
- right now integration with mulitple data publishers is difficult
- imposed tech like java .net c# comm protocls, csv, clxs, xml

- this process is repeated over and over; massive systemic duplication of effort

- kyper wnats to remove the friction by providing data as a service
- devs can quickly prototype ideas and implement ideas
- for publishers, kyper provides portal; images, logo , branding
- dev perspective, very easily find a data set that is useful to you; you can subscribe to a data source for $x/mo and have immediate access to it
- stock + earnings events + wikipedia traffic

pubs
1. access new markets
2. new products
3. respond to client
4. protect data

devs
1. access data immed
2. prototype fast
3. accurately access roi
4. build internal consensus

### EverSafe
EverSafe is a financial safety net for seniors and their families. EverSafe protects older adults from fraud, identity theft and unscrupulous telemarketers.
- https://www.eversafe.com/index.html
- https://twitter.com/EverSafeSeniors

Mark Goodman, MassMutual Ventures

- harriet tischler, 80, victim of financial exploitation
- old people have risk associated with financial exploitation
- use innovative & proprietary technology to get ahead of this problem
- allow elderly to live with grace and dignity
- eversafe scans financial accounts for patterns of suspicious behavior =>
- data feeds into algo (60 red flags for older population) =>
- When suspicious activity shows up, family members get alerts
- tech is mobile + web
- one algo

- unusual increase in cash withdrawals
- alerts

- "your data makes our learning algorithms more powerful"
- "ask us how you can help"

### Open Invest Co.
Open Invest provides openness in investment management, open refinement of strategies for wealth management and capital preservation, along with an ease of management of systematically described strategies.
- https://openinvest.co/
- https://twitter.com/openinvestco

Ranjit Tinaikar, Thomson Reuters

- make it easy to invest
- mainstream socially responsible investing
- investment strategy that seeks to consider both financial return & social good
- "financial performance is not affected when you take into accountsocial returns"
- Millenials invest in accordance with their values

- automated systems for tax loss harvesting
- target client: mid 30s, doctor at UCSF, vegan, environmentally responsible, paid off all loans

- dashboard => user picks which field they dont want (like tobacco)
- follow up an you can choose companies that dont support another field
- backend data (400 + indicators)
- they get carbon use from a data provider
- you can exlucde specific companies and tell the system why, which helps inform trends for the next user

ongoing client interactions
- due to changing trending issues
- keep fees low, low churn, etc.

### Trigger
Trigger helps you manage your portfolio by simplifying your investment ideas. We make it easy to execute and share your views via an IF THIS THEN THAT statement, called a Trigger. Use your linked brokerage account to get real-time alerts on the events you are about and place orders immediately after your trigger has fired.
- http://www.triggerfinance.com
- https://twitter.com/triggerfinance

Ryan Teksten, Fidelity

"We watch the stock market for you"
Rachel Mayer, co-founder and CEO of Trigger

Manage your portfolio with simple if this then that method (which is the trigger) (if `__goog__ is __up 30%__` and `___reaches long term cap gains___` then `___sell goog___`)

"democratize tools and technologies that wall street has had for decades"

3 types
- xignite. 1 year high, etc. real time stock related data
- benzinga: real time company events, like comapyn repots
- trigger on economic reports (fed rate etc)

- real time push notifications that trigger has fired
- some social networking around these triggers and following other people who see other triggers

- What I was most impressed by its UI and UX. Really easy to use, it appears.

### [Comments on Fintech & GF]
