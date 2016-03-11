---
layout: post
title: "Easily Migrate From MySQL To PostgreSQL"
description: "How we migrated the techscene.at database from MySQL to PostgreSQL"
category:
tags: [rails, mysql, postgresql, pgloader, techscene.at]
author: ryan_tremaine
nav: blog
---
{% include JB/setup %}

### Introduction
Greenfield is currently in the process of upgrading [techscene.at](http://techscene.at) to the latest version of [Ember CLI](http://www.ember-cli.com/) as well as moving it over to use the [CrunchBase API v2.0](https://info.crunchbase.com/2014/06/crunchbase-api-v2-0-released/). We also want to host it in a more robust environment and add some features that require us migrating the database from MySQL to PostgreSQL. Here is how we accomplished migrating both the schema and data using [pgloader](http://pgloader.io/).

### 1. Postgres
Create the Postgres database that you will be migrating to

    createdb techscene_development

### 2. pgloader
Download and install [pgloader](http://pgloader.io/download.html)

Create a load script like our *techscene.load*

    load database  
         from      mysql://user:password@localhost/techscene_development  
         into postgresql://user:password@localhost:5432/techscene_development
     
     WITH include drop, create tables, no truncate,  
          create indexes, reset sequences, foreign keys  
     
     SET maintenance_work_mem to '128MB', work_mem to '12MB'
     
     CAST type datetime to timestamptz  
                    drop default drop not null using zero-dates-to-null,  
          type date drop not null drop default using zero-dates-to-null;


Exectute the load by running

    pgloader techscene.load

If everything goes according to plan you should see output like this

    2015-02-14T01:06:40.028000+01:00 LOG Starting pgloader, log system is ready.
    2015-02-14T01:06:40.042000+01:00 INFO Starting monitor
    2015-02-14T01:06:40.047000+01:00 LOG Main logs in '/private/tmp/pgloader/pgloader.log'
    2015-02-14T01:06:40.047000+01:00 LOG Data errors in '/private/tmp/pgloader/'
    2015-02-14T01:06:40.047000+01:00 LOG Parsing commands from file #P"/Users/rtremaine/Source/techscene.load"
                    table name       read   imported     errors            time

                   before load          1          1          0          0.015s
               fetch meta data         12         12          0          0.111s
                  create, drop          0         12          0          0.202s
------------------------------  ---------  ---------  ---------  --------------
                     companies        855        855          0          1.301s
                    exclusions         14         14          0          0.145s
                        images        845        845          0          0.073s
                    inclusions         54         54          0          0.045s
             schema_migrations         23         23          0          0.026s
                         users          4          4          0          0.031s
        Index Build Completion          0          0          0          0.000s
------------------------------  ---------  ---------  ---------  --------------
                Create Indexes         13         13          0          0.413s
               Reset Sequences          0          0          0          0.037s
                  Foreign Keys          0          0          0          0.000s
------------------------------  ---------  ---------  ---------  --------------
------------------------------  ---------  ---------  ---------  --------------
             Total import time       1795       1795          0          1.986s

That's it! If you have any issues try running `pgloader --verbose techscene.load` and also looking at the log files created by pgloader.

Be sure to check out the official [pgloader documentaion](http://pgloader.io/howto/pgloader.1.html) as it can do about a million things more than we needed for our simple migration.
