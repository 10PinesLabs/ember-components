import Ember from 'ember';
import config from '../config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('prueba', function() {
    this.route('combo');
    this.route('date-picker');
    this.route('ember-guru-modals');
    this.route('liquid-tether-modals');
  });
});

export default Router;
