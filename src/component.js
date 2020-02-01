import { LitElement,  html, css } from 'lit-element';
import { spacing, composeStyles } from './utility-classes';
import style from './component.scss';

class Patatas extends LitElement {
  static get styles() {
    return css`
      :host {
        text-transform: uppercase;
      }
    `;
  }
}

export class Component extends LitElement {
  static get properties() {
    return {
      myProperty: {
        type: String,
        attribute: 'my-property'
      }
    };
  }

  constructor() {
    super();
    this.myProperty = 'Ohh yeah!';
  }

  render() {
    return html`
      <p class="m:0 p:2">${this.myProperty}</p>
      <p class="m:0 p:2 pb:5">${this.myProperty}</p>
      <p class="m:1 ph:1">${this.myProperty}</p>
    `;
  }
}

// shorter way of adding static properties
Component.version = '__VERSION__';

// component styles can be composed from other component styles (Class.styles) or strings
Component.styles = composeStyles(
  Patatas.styles,
  spacing,
  style
);
