import Ember from 'ember';
import OracleInitializer from 'ember-components/initializers/oracle';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | oracle', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  OracleInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
