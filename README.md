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
| `flatRound` | `Boolean` | `false` | True to give a nice flat rounded style to the input.

### Methods
*None*

### Events

| Event Name | Target         | Detail | Description
| ---------- | -------------- | ------ | -----------
| `input`     |               | `String`| Fired when the user changes the value of the input. The detail contains the new value.

### CSS Custom Properties
*None*

#### Global Custom Properties

| Name                                              | Default               | Description
| ------------------------------------------------- | --------------------- |------------
| `--jvx-material-input-primary`                    | `blue`                | Color of the filled input's bottom line when idle.
| `--jvx-material-input-background`                 | `#fff` | '#D5D5D5' if `flatRound` is `true`                | Color of the input's background fill.
| `--jvx-material-input-accent`                     | `#b949d5`             | Color when active of the underline ripple, the outline, and the caret.
