import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  diaMaximo: Ember.computed(function(){
    return moment().toDate();
  })
});
