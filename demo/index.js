import 'regenerator-runtime';
import { Component } from '../src/index.js';
import './styles.css';

if (!window.customElements.get('my-component')) {
  window.customElements.define('my-component', Component);
}
