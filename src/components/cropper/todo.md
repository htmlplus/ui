- update docs for the `view` property.
- add the rest properties in options
- add ready state
- add the rest methods
  - clear
  - crop
  - get/set Data
  - get/set CanvasData
  - get/set CropBoxData
  - getContainerData
  - getImageData
  - getCroppedCanvas
  - scale
  - scaleX
  - scaleY
- examples
  - resizer
  - resizerShape
  - responsive
  - value
  - view

```js
onReady() {
  this.value && this.updateValue(this.value);
}
onZoom(event) {
  if (!defaultPrevented) return this.onCrop();
}
```
