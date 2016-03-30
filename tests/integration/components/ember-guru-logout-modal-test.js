import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-guru-logout-modal', 'Integration | Component | ember guru logout modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-guru-logout-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-guru-logout-modal}}
      template block text
    {{/ember-guru-logout-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
