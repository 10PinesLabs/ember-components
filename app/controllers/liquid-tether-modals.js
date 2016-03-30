import Ember from 'ember';


export default Ember.Controller.extend({
  showFirstModalDialog: Ember.computed.gte('currentModalDialogStep', 1),
  showSecondModalDialog: Ember.computed.gte('currentModalDialogStep', 2),
  showThirdModalDialog: Ember.computed.gte('currentModalDialogStep', 3),

  actions: {
    toggleHello() {
      this.toggleProperty('showHello');
    },

    openModalDialog() {
      this.set('currentModalDialogStep', 1);
    },

    prevModalDialog() {
      this.decrementProperty('currentModalDialogStep');
    },

    nextModalDialog() {
      this.incrementProperty('currentModalDialogStep');
    },

    closeModalDialog() {
      this.set('currentModalDialogStep', 0);
    }
  }
});



