import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `jvx-material-input`
 * A material design input web component based on Deepak Pandey material input
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class JvxMaterialInput extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'jvx-material-input',
      },
    };
  }
}

window.customElements.define('jvx-material-input', JvxMaterialInput);
