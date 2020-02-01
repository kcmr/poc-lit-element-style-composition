import { Component } from './dist/index';

if (!window.customElements.get('my-component')) {
  window.customElements.define('my-component', Component);
}
