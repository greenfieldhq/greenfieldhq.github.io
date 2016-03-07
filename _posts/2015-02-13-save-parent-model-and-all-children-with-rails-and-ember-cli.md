---
layout: post
title: "Save a parent model and all children with Ember CLI and Rails"
description: "How to Save a parent model and all of its children at the same time with Ember CLI and Rails"
category:
tags: [rails, ember-cli, ember-data]
author: jodi_detch
---
{% include JB/setup %}

# Introduction

In this post, we'll explore how to save a parent model and all of its children at the same time using Ember CLI on the frontend and Rails API on the backend. It is assumed that the reader has a basic understanding of how to utilize Rails and Ember CLI together in an application.

For this discussion, I have created a sample application called "Shopmaster," a simple app for creating grocery lists. The basic features include the ability to:
 
* Create new grocery lists with names and descriptions
* Dynamically add one to n list items to a given grocery list
* Save a grocery list and all of its items together at the same time 

The focus of this post centers on saving a *new* record and its children, so I purposely left out additional CRUD functionality like editing and deleting, perhaps for a follow-up post.

You can check out the Shopmaster repo <a href="https://github.com/jdetch/Shopmaster" target="_blank">here</a>.

In this case, a grocery list is the parent model and list items are its children. For ease of use, I wanted the user to be able to create a new grocery list, add however many items they want to that list and then save everything together at the same time. See example screenshot below:

<img src="http://i.imgur.com/awZupYJ.png" alt="grocery list screenshot"> 

# So, how does it work?

Check out these key files of interest:

## The Controller

In order to dynamically add items (i.e. new *item name* and *item quantity* fields only show up when a user specifically clicks the *add item* button on the page), I created an `addItem` action in the `grocery-lists/new` controller. Each time the button is clicked, a new list item is created and subsequently pushed into an array of items associated with a given grocery list. The various objects exist at this point, but with *null* ids.

    // Shopmaster/frontend/app/controllers/grocery-lists/new.js
  
    import Ember from 'ember';

    export default Ember.Controller.extend({
      actions: {
        addItem: function() {
          var item = this.store.createRecord('item');
          var groceryList = this.get('model');
      
          groceryList.get('items').pushObject(item);              
        }
      }
    });

## The Template  
  
As you can see below, the `addItem` action in the controller is linked to the same action on the template:

    // Shopmaster/frontend/app/templates/grocery-lists/new.hbs
    
    <h1>Create your new grocery list</h1>

    <p>
      <label for="listName">List name:</label> 
      {% raw %}{{input id="listName" value=model.name}}{% endraw %}

      <label for="listDescription">List description:</label>
      {% raw %}{{input id="listDescription" value=model.description}}{% endraw %}
    </p>

    {% raw %}{{#each item in model.items}}{% endraw %}
    <p>
      <label>Item name:</label> 
      {% raw %}{{input type="text" value=item.name}}{% endraw %}

      <label>Item quantity:</label> 
      {% raw %}{{input type="text" value=item.quantity}}{% endraw %}
    </p>
    {% raw %}{{/each}}{% endraw %}

    <p><button{% raw %}{{action 'addItem'}}{% endraw %}>Add item</button></p>

    <p><button{% raw %}{{action 'save'}}{% endraw %}>Save list</button></p>

Please note, I did not use `label for`s or `input id`s for *item name* and *item quantity* in the code above because an error gets thrown by Ember when more than one list item is added. This occurs because Ember tries (and fails) to register a view with an id that is already in use on the page.

## The Route

At this point, we've done a good amount of set up, but how do we get the grocery list and all of its items to persist properly to the database when a user clicks *save*?

### METHOD 1 

In the `save` action of the `grocery-lists/new` route, you will see that the model (the grocery list) is saved first, with a series of `then` functions chained after it. What are all of those functions doing? Once the grocery list is saved with `model.save()`, the grocery list object gets passed into the next function. We then obtain its array of list items using `get`, pass that array into the next function and then loop over and save each item in the array using `forEach`.

The chain of `then`s is made possible because the relationships are asynchronous and are therefore returning promises. (You can check out the files in `Shopmaster/frontend/app/models` for more details on how I set up the asynchronous relationships in Ember for this example.) 

    // Shopmaster/frontend/app/routes/grocery-lists/new.js
    
    import Ember from 'ember';

    export default Ember.Route.extend({
      setupController: function(controller, model) {
      controller.set('model', model);
    },

    model: function() {
      return this.store.createRecord('grocery-list');
    },

    actions: {
      save: function() {
        var model = this.get('controller.model');

        var _this = this;
        model.save().then(function(groceryList) {
          groceryList.get('items').then(function(items){
            items.forEach(function(item){
              item.save();
            });
            _this.transitionTo('grocery-lists.index');
          });
        });
       }
     }

    });
    
### METHOD 2 - Refactor using Ember.RSVP

In method 1, the transition to the index page takes place before all of the saves finish. In this refactor, I used the Ember RSVP class to execute all of the saves and *then* transition. I also included an error message to log to the console in case one of the saves fails for some reason.

You can read more about the Ember RSVP class in the <a href="http://emberjs.com/api/classes/RSVP.html" target="_blank">documentation</a>.
  
    // Shopmaster/frontend/app/routes/grocery-lists/new.js
  
    import Ember from 'ember';

    export default Ember.Route.extend({
      setupController: function(controller, model) {
      controller.set('model', model);
    },

    model: function() {
      return this.store.createRecord('grocery-list');
    },

    actions: {
      save: function() {
        var model = this.get('controller.model');
        var _this = this;
        var promises = [];

        model.save().then(function(groceryList){
          groceryList.get('items').forEach(function(item) {
            promises.push(item.save());
          });
            return Ember.RSVP.all(promises).then(function () {
              _this.transitionTo('grocery-lists.index');
            }).catch(function () {
              console.log('one of the saves failed');
            });
          });
        }
      }

    });    
    
The bottom line is that the parent model must be saved first so that it will be assigned an id. This is important for the parent-child association to work properly, as each child will have its respective foreign key set to the parent's id.       
    
## Some 'gotchas' to keep in mind

* On the Rails side, make sure you are passing in `id` as an attribute in each model's respective serializer. 
* Also on the Rails side, be sure to include the foreign key id as a permitted param in the controller of the child model. In the example above, that means I included `grocery_list_id` as a permitted param in the `item_params` method in the `ItemsController`.
* Be aware of your software versions. Specifically, I ran into some issues with persisting my data properly before upgrading ember-data from v1.0.0-beta.12 to v1.0.0-beta.14.1.
  * Versions in use in the <a href="https://github.com/jdetch/Shopmaster" target="_blank">Shopmaster repo</a> as of this writing:
    * Ember: 1.9.1
    * Ember Data: 1.0.0-beta.15  
    * Ember CLI: 0.1.15
    * Rails: 4.1.6

## Contact

I hope you've enjoyed this post and found it helpful. If you have any questions or comments, my contact information is available on <a href="http://github.com/jdetch" target="_blank">GitHub</a>.



