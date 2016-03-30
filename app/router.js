import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('liquid-tether-modals');
  this.route('ember-guru-modals');
});

export default Router;
