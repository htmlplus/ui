```css [style]
plus-cropper {
  height: 250px;
}
plus-cropper.style-1 {
  --plus-cropper-resizer-size: 20px;
  --plus-cropper-viewport-opacity: 0;
  --plus-cropper-viewport-style: dashed;
}
plus-cropper.style-2 {
  --plus-cropper-indicator-color: #E6F018;
  --plus-cropper-indicator-size: 15px;
  --plus-cropper-indicator-weight: 2px;
  --plus-cropper-resizer-color: black;
  --plus-cropper-resizer-offset: -27px;
  --plus-cropper-resizer-size: 21px;
  --plus-cropper-viewport-color: #E6F018;
}
plus-cropper.style-3 {
  --plus-cropper-indicator-color: #5499C7;
  --plus-cropper-guides-color: black;
  --plus-cropper-resizer-color: #5499C7;
  --plus-cropper-resizer-size: 15px;
  --plus-cropper-viewport-color: #5499C7;
  --plus-cropper-viewport-weight: 2px;
}
plus-cropper.style-4 {
  --plus-cropper-guides-weight: 2px;
  --plus-cropper-resizer-size: 22px;
  --plus-cropper-resizer-weight: 2px;
  --plus-cropper-viewport-style: dashed;
  --plus-cropper-viewport-weight: 2px;
}
plus-cropper.style-5 {
  --plus-cropper-backdrop-color: white;
  --plus-cropper-backdrop-opacity: 0.7;
  --plus-cropper-resizer-color: #A93226;
  --plus-cropper-resizer-size: 20px;
  --plus-cropper-resizer-weight: 3px;
}
plus-cropper.style-6 {
  --plus-cropper-viewport-opacity: 0;
  --plus-cropper-viewport-style: dashed;
}
```

```html [template]
<plus-grid gutter="md">
  <plus-grid-item xs="12" sm="5">
    <plus-cropper 
      class="style-1" 
      indicator
      mode="crop" 
      shape="circle" 
      resizer="main" 
      resizer-shape="line" 
      src="/assets/images/penguin.jpg" 
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="7">
    <plus-cropper
      class="style-2"
      indicator
      mode="crop"
      resizer="both"
      resizer-shape="line"
      src="/assets/images/penguin.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      class="style-3"
      guides
      indicator
      mode="crop"
      resizer="main"
      resizer-shape="circle"
      shape="circle"
      src="/assets/images/cat.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper
      class="style-4"
      guides
      mode="crop"
      resizer="edge"
      resizer-shape="line"
      src="/assets/images/cat.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="7">
    <plus-cropper
      class="style-5"
      backdrop
      background
      mode="crop"
      resizer="edge"
      resizer-shape="line"
      src="/assets/images/ladybug.jpg"
    ></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="5">
    <plus-cropper 
      class="style-6" 
      src="/assets/images/bear.jpg"
    ></plus-cropper>
  </plus-grid-item>
</plus-grid>
```