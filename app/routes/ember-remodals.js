import Ember from 'ember';

export default Ember.Route.extend({
  remodal: Ember.inject.service(),

  closeModal() {
    this.get('remodal').close();
  },

  actions: {
    notifyOpened() {
      alert("modal opened!");
    },

    notifyConfirmed() {
      alert("modal ok!");
    },

    notifyCanceled() {
      alert("modal canceled!");
    },

    notifyClosed() {
      alert("modal closed!");
    },

    openModal() {
      this.get('remodal').open();
    }
  }
});
