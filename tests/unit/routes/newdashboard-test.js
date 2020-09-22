import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | newdashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:newdashboard');
    assert.ok(route);
  });
});
