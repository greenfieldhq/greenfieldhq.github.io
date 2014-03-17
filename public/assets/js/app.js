window.App = Ember.Application.create();

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',
});
