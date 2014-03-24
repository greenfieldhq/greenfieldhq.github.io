App.Contact = DS.Model.extend(Ember.Validations.Mixin, {
  name: DS.attr('string'),
  email: DS.attr('string'),
  subject: DS.attr('string'),
  body: DS.attr('string')
});

App.Contact.reopen({
  validations: {
    name: {
      presence: true
    },
    email: {
      presence: true
    },
    body: {
      presence: true
    }
  },
  isNameValid: function() {
    return this.get('errors.name').length == 0;
  }.property('name'),
  isEmailValid: function() {
    return this.get('errors.email').length == 0;
  }.property('email'),
  isBodyValid: function() {
    return this.get('errors.body').length == 0;
  }.property('body')
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
