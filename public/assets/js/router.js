App.Router.map(function() {
  this.resource('contacts', { path: '/contacts' });
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller, model, params) {
    controller.set('model', model);
  },
  model: function(params) {
    return this.store.createRecord('contact');
  }
});
