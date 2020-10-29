import {css, html, LitElement} from "lit-element";
import {classMap} from "lit-html/directives/class-map";

class Input extends LitElement {
// properties getter
  static get properties() {
    return {
      type: {type: String, reflect: true},
      label: {type: String, reflect: true},
      placeholder: {type: String, reflect: true},
      value: {type: String, reflect: true},
      disabled: {type: Boolean, reflect: true},
      outline: {type: Boolean, reflect: true},
      flatRound: {type: Boolean, reflect: true},
      isFocused: {type: Boolean, reflect: true, attribute: false}
    };
  }

  constructor() {
    super();
// initialize the properties
    this.value = "";
    this.outline = false;
    this.flatRound = false;
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
    border: 1px solid var(--jvx-material-input-primary, blue);
    border-radius: 5px;
    padding: 10px;
    }
    label {
    position: absolute;
    font-size: 14px;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color:   var(--jvx-material-input-background, #fff);
    color: gray;
    padding: 0;
    margin: 0;
     -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
     -moz-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
     -ms-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
     -o-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
     transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    transform-origin: left top;
    pointer-events: none;
    }
    .input-container.outline label{
    margin-left: 10px;
    }
    .input-container:not(.flat-round){
    transition: 0.1s ease-out;
    border-bottom: 1px solid  var(--jvx-material-input-primary, blue);
    }
    input {
    padding-bottom: 8px;
    flex: 1 1 100%;
    font-size: 14px;
    outline: none;
    border: none;
    color:  var(--jvx-material-input-primary, blue);
    transition: 0.1s ease-out;
    background: transparent;
    cursor: text;
    margin-left: auto;
    width: 100%;
    margin-right: auto;
    }
    .input-container:not(.flat-round) input{
      border-radius: 0px;
    }
    .input-container:not(.flat-round).is-focused{
    border-color:  var(--jvx-material-input-accent, #b949d5);
    }
    .input-container:not(.flat-round) input:focus + label{
    color:  var(--jvx-material-input-accent, #b949d5);
    top: 0;
    transform: translateY(-50%) scale(0.75);
    }
    .input-container:not(.flat-round) input:not(:placeholder-shown) + label{
    top: 0;
    transform: translateY(-50%) scale(0.75);
    }
    .input-container:not(.outline) input:focus ~ label,
    .input-container:not(.outline) input:not(:placeholder-shown) ~ label
    {
    padding-left: 0px;
    }
    input:disabled,  input:disabled ~ .label {
    opacity: 0.5;
    }
    
   .input-container.flat-round{
    border-radius: 4px;
    background-color: var(--jvx-material-background-color, #D5D5D5);
    padding: 7px 0.75em;
   }
    
   .input-container.flat-round input{
    padding: 0;
   }  
    
   .input-container.flat-round label{
    background: transparent
   }
   
   .input-container.flat-round label{
    left: 0.75em;
   }
    .input-container.flat-round input:focus + label{
    color: var(--jvx-material-input-accent, #b949d5);
    top: 0;
    transform: translateY(-13px) scale(0.75) translateX(-0.75em);
    }
    .input-container.flat-round input:not(:placeholder-shown) + label{
    top: 0;
    transform: translateY(-13px) scale(0.75) translateX(-0.75em);
    }
`;
  }

  render() {
    return html`
<div class=${classMap({
      'flat-round': this.flatRound,
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
placeholder="${this.activePlaceholder}"
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

  get activePlaceholder(){
    return !this.label || this.label.length === 0 ? this.placeholder: ' ';
  }
}

customElements.define("jvx-material-input", Input);
