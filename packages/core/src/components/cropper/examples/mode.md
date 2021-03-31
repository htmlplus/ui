```css [style]
plus-cropper[mode="none"] {
  height: 100%;
}
```

```html [template]
<plus-grid gutter="md">
  <plus-grid-item xs="6">
    <plus-cropper mode="none" src="/assets/images/panda.jpg"></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="6">
    <plus-grid gutter="md">
      <plus-grid-item xs="12">
        <plus-cropper mode="crop" src="/assets/images/panda.jpg"></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12">
        <plus-cropper mode="move" src="/assets/images/panda.jpg"></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  </plus-grid-item>
</plus-grid>
```