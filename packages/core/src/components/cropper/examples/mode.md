```css [style]
plus-cropper[mode="none"] {
  height: 100%;
}
```

```html [template]
<plus-grid gutter="md">
  <plus-grid-item xs="6">
    <plus-cropper mode="none" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="6">
    <plus-grid gutter="md">
      <plus-grid-item xs="12">
        <plus-cropper mode="crop" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12">
        <plus-cropper mode="move" src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  </plus-grid-item>
</plus-grid>
```