window.Todos = Ember.Application.create();

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
Todos.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',
});
