import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('prueba', function() {
    this.route('combo');
  });
});

export default Router;
