- update docs for the `view` property.
- add the rest properties in options
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

```js
/**
 * Gets `blob` value from the cropped image.
 */
@Method()
toBlob(): Promise<Blob> {
  return new Promise((resolve) => {
    this.instance.getCroppedCanvas(/* TODO */).toBlob((blob) => resolve(blob)/* TODO */);
  });
}

/**
 * Gets `base64` from the cropped image.
 */
@Method()
toBase64(): string {
  return this.instance.getCroppedCanvas(/* TODO */).toDataURL(/* TODO */);
}

/**
 * Gets `blob url` from the cropped image.
 */
@Method()
toURL(): Promise<string> {
  return new Promise((resolve) => {
    this.instance.getCroppedCanvas(/* TODO */).toBlob((blob) => resolve(URL.createObjectURL(blob))/* TODO */);
  });
}

onReady() {
  this.value && this.updateValue(this.value);
}

onZoom(event) {
  if (!defaultPrevented) return this.onCrop();
}

updateValue(value?) {
  if (!this.instance) return;

  const { height, width } = this.instance.getContainerData();

  if (value) {
    const toPixel = (a, b) => (a * b) / 100;

    // TODO this.instance.rotateTo(value.rotate);

    this.instance
      .setCropBoxData({
        top: toPixel(value.top, height),
        left: toPixel(value.left, width),
        width: toPixel(100 - value.right - value.left, width),
        height: toPixel(100 - value.top - value.bottom, height)
      })
      .setCanvasData({
        top: toPixel(value.y, height),
        left: toPixel(value.x, width),
        width: toPixel(value.width, width),
        height: toPixel(value.height, height)
      });

    return;
  }

  const canvas = this.instance.getCanvasData();

  // TODO
  // const data = this.instance.getData();

  const viewport = this.instance.getCropBoxData();

  const toPercent = (a, b) => parseFloat(((a / b) * 100).toFixed(2));

  this.lock = true;

  this.value = {
    // TODO rotate: data.rotate,
    top: toPercent(viewport.top, height),
    right: toPercent(width - viewport.left - viewport.width, width),
    bottom: toPercent(height - viewport.top - viewport.height, height),
    left: toPercent(viewport.left, width),
    width: toPercent(canvas.width, width),
    height: toPercent(canvas.height, height),
    x: toPercent(canvas.left, width),
    y: toPercent(canvas.top, height)
  };

  this.lock = false;
}
```

    this.locked = true;
    const container = this.instance.getContainerData();
    const canvasData = this.instance.getCanvasData();
    const data = this.instance.getData();
    const cropBoxData = this.instance.getCropBoxData();
    const imageData = this.instance.getImageData();
    this.value = {
      canvasData,
      data,
      cropBoxData,
    } as any;
    this.locked = false;

    console.log('onCrop', e.detail, { container, canvasData, data, cropBoxData, imageData });
