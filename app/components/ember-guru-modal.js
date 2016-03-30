import Ember from 'ember';

export default Ember.Component.extend({
  show: function() {
    Ember.$('.modal').modal();
  }.on('didInsertElement')
});
