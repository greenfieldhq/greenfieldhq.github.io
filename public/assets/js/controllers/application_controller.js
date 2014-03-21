App.ApplicationController = Ember.Controller.extend({
  actions: {
    contactUs: function() {
        debugger;
      var contact = this.store.createRecord('contact', {
        name: this.get('name'),
        email: this.get('email'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      contact.save();
    }
  }
});
