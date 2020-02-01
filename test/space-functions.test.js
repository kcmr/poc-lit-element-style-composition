import { fixture, fixtureCleanup, html, assert } from '@open-wc/testing';
import '../space-functions.js';

suite('<space-functions>', () => {
  teardown(() => {
    fixtureCleanup();
  });

  test('"myProperty" can be set via "my-property" attribute', async() => {
    const el = await fixture(html`
      <space-functions my-property="foo"></space-functions>
    `);

    assert.strictEqual(el.myProperty, 'foo');
  });
});
