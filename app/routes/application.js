import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  moment: Ember.inject.service(),
  beforeModel() {
    moment.locale('es');
  }
});
