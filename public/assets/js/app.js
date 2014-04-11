window.App = Ember.Application.create({
  LOG_TRANSITIONS: true,
  LOG_VIEW_LOOKUPS: true
});

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
App.ApplicationSerializer = DS.RESTSerializer.extend({
  primaryKey: '_id',
});
