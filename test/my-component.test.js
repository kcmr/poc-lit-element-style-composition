import { fixture, fixtureCleanup, html, assert } from '@open-wc/testing';
import { Component } from '../src';

if (!window.customElements.get('my-component')) {
  window.customElements.define('my-component', Component);
}

suite('<my-component>', () => {
  teardown(() => {
    fixtureCleanup();
  });

  test('"myProperty" can be set via "my-property" attribute', async() => {
    const el = await fixture(html`
      <my-component my-property="foo"></my-component>
    `);

    assert.strictEqual(el.myProperty, 'foo');
  });
});
