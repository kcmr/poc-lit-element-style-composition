import 'regenerator-runtime';
import { Component } from '../src';
import './styles.css';

if (!window.customElements.get('my-component')) {
  window.customElements.define('my-component', Component);
}
