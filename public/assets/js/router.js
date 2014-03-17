App.Router.map(function() {
  //this.resource('todos', { path: '/' }, function() {
  //  this.route('active');
  //  this.route('completed');
  //});
  //this.resource('users', { path: '/users' });
});

//Todos.TodosRoute = Ember.Route.extend({
//  model: function() {
//    return this.store.find('todo');
//  }
//});
//
//Todos.TodosIndexRoute = Ember.Route.extend({
//  model: function() {
//    return this.modelFor('todos');
//  },
//  renderTemplate: function(controller) {
//    this.render({outlet: 'todos'});
//    var controller = this.controllerFor('users');
//    this.render('users', {
//      outlet: 'users',
//      controller: controller
//    });
//  },
//  setupController: function(controller, model) {
//    controller.set('model', model);
//    this.controllerFor('users').set('model',this.store.find('user'));
//  }
//});
//
//Todos.TodosActiveRoute = Ember.Route.extend({
//  model: function(){
//    return this.store.filter('todo', function(todo) {
//      return !todo.get('isCompleted');
//    });
//  },
//  renderTemplate: function(controller) {
//    this.render('todos/index', {controller: controller});
//  }
//});
//
//Todos.TodosCompletedRoute = Ember.Route.extend({
//  model: function(){
//    return this.store.filter('todo', function(todo) {
//      return todo.get('isCompleted');
//    });
//  },
//  renderTemplate: function(controller) {
//    this.render('todos/index', {controller: controller});
//  }
//});
//
//Todos.UsersRoute = Ember.Route.extend({
//  model: function() {
//    return this.store.find('user');
//  }
//});
