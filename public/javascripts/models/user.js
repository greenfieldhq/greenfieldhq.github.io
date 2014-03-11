Todos.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string')
});

Todos.User.FIXTURES = [
 {
   id: 1,
   username: 'rtremaine',
   email: 'ryan.trem@gmail.com'
 },
 {
   id: 2,
   username: 'jdoe',
   email: 'jdoe@gmail.com'
 },
 {
   id: 3,
   username: 'boblawblaw',
   email: 'bob@lawblog.com'
 },
];
