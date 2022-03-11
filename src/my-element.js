import { html, css, LitElement } from 'lit';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 5px gray;
        padding: 16px;
        max-width: 800px;
        font-size:5rem;
        font-family: sans-serif;
        font-weight: bold;
        color: blueviolet;
      }
      button {
        padding: 20px 45px;
        background: deeppink;
        font-size: 1.5rem;
        color: white;
        font-weight: 700;
        margin-left: 8rem;

      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-element', MyElement);
