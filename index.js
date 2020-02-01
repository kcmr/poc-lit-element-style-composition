import { Component } from './dist';

if (!window.customElements.get('my-component')) {
  window.customElements.define('my-component', Component);
}
