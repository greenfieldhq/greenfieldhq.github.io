App.ApplicationController = Ember.Controller.extend({
  actions: {
    contactUs: function() {
      var contact = this.get('model');

      contact.validate().then(function() {
        contact.get('isValid');
        contact.save();
        $('#contact-us').hide();
        $('#contact-confirm').show();
      }, function() {
        contact.get('isValid');
      })
    }
  }
});
