App.Contact = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  subject: DS.attr('string'),
  body: DS.attr('string')
});

App.Contact.FIXTURES = [
 {
   id: 1,
   name: 'Ryan Tremaine',
   email: 'ryan.trem@gmail.com',
   subject: 'We need help',
   body: 'Please contact me'
 },
];
