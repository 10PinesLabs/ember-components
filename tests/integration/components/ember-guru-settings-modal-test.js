import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-guru-settings-modal', 'Integration | Component | ember guru settings modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-guru-settings-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-guru-settings-modal}}
      template block text
    {{/ember-guru-settings-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
