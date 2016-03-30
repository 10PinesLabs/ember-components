import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    showModal: function(name, model) {
      this.render(name, {
        into: 'ember-guru-modals',
        outlet: 'modal',
        model: model
      });
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'ember-guru-modals'
      });
    },
    save: function() {
      alert('save was caught by the route');
    }
  },
  model: function() {
    return Ember.Object.create({ name: 'My name' });
  }
});
