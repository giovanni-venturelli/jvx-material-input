import {LitElement, html, css} from "lit-element";
import {classMap} from "lit-html/directives/class-map";

class Input extends LitElement {
// properties getter
  static get properties() {
    return {
      type: {type: String},
      label: {type: String},
      value: {type: String},
      disabled: {type: Boolean},
      outline: {type: Boolean},
      isFocused: {type: Boolean, attribute: false}
    };
  }

  constructor() {
    super();
// initialize the properties
    this.value = "";
    this.outline = false;
    this.disabled = false;
    this.isFocused = false;
  }

//

  static get styles() {
    return css`
    :host{
    width: 100%;
    }
*{
box-sizing: border-box;
}
.form-group {
position: relative;
margin: 1rem 0;
padding-top: 7px;
display: flex;
align-items: center;
}
.input-container.outline {
border: 1px solid  #333333;
border-radius: 5px;
padding: 10px;
}
label {
position: absolute;
font-size: 14px;
left: 0;
top: 50%;
transform: translateY(-50%);
background-color:  #fff;
color: gray;
padding: 0;
margin: 0;
transition: 0.1s ease-out;
transform-origin: left top;
pointer-events: none;
}
.input-container.outline label{
margin-left: 10px;
}
.input-container{
transition: 0.1s ease-out;
border-bottom: 1px solid  #333333;
}
input {
flex: 1 1 100%;
font-size: 14px;
outline: none;
border: none;
border-radius: 0px;
color:  #333333;
transition: 0.1s ease-out;
background: transparent;
cursor: text;
margin-left: auto;
width: 100%;
margin-right: auto;
}
.input-container.is-focused{
border-color:  #b949d5;
}
.input-container input:focus + label{
color:  #b949d5;
top: 0;
transform: translateY(-50%) scale(0.9);
}
input:not(:placeholder-shown) + label{
top: 0;
transform: translateY(-50%) scale(0.9);
}
.input-container:not(.outline) input:focus ~ label,
.input-container:not(.outline) input:not(:placeholder-shown) ~ label
{
padding-left: 0px;
}
input:disabled,  input:disabled ~ .label {
opacity: 0.5;
}
`;
  }

  render() {
    return html`
<div class=${classMap({
      'form-group': true,
      'input-container': true,
      'is-focused': this.isFocused,
      outline: this.outline
    })}>
<slot name="prepend"></slot>
<input
class=${classMap({
      outline: this.outline
    })}
@input=${this.inputHandler}
type="${this.type}"
placeholder=" "
@focus="${this._onFocus}"
@blur="${this._onBlur}"
.value=${this.value}
?disabled="${this.disabled}"
/>
<label>${this.label}</label>
<slot name="append"></slot>
</div>
`;
  }

  inputHandler(event) {
    this.dispatchEvent(
      new CustomEvent("input", {
        detail: {value: event.composedPath()[0].value}
      })
    );
  }

  _onFocus() {
    this.isFocused = true;
  }

  _onBlur() {
    this.isFocused = false;
  }
}

customElements.define("jvx-material-input", Input);
