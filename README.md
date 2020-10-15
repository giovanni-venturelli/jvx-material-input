# \<jvx-material-input\>

A material design input web component based on Deepak Pandey's material input

## Install jvx-material-input

```
npm install jvx-material-input
```

## API

### Slots
| Name           | Description
| -------------- | -----------
| `prepend`      | Use this slot for any element you want to show before the input.
| `append`       | Use this slot for any element you want to show after the input.


### Properties/Attributes
| Name | Type | Default | Description
| ---- | ---- | ------- | -----------
| `type` | `String` | `''` | The good old type of the input.
| `label` | `String` | `''` | Label to display for the input, and `aria-label`.
| `value` | `String` | `''` | The default value of the input.
| `disabled` | `Boolean` | `false` | True to disable the input.
| `outline` | `Boolean` | `false` | True to outline the component.

### Methods
*None*

### Events

| Event Name | Target         | Detail | Description
| ---------- | -------------- | ------ | -----------
| `input`     |               | `String`| Fired when the user changes the value of the input. The detail contains the new value.

### CSS Custom Properties
*None*

#### Global Custom Properties
*None*
