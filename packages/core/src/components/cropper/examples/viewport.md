```css [style]
plus-cropper {
  height: 18rem;
}
```

```html [template]
<plus-grid gutter="md">
  <plus-grid-item xs="12" sm="6">
    <plus-cropper viewport-shape="rect" src="/assets/images/panda.jpg"></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6">
    <plus-cropper viewport-shape="round" src="/assets/images/panda.jpg"></plus-cropper>
  </plus-grid-item>
</plus-grid>
```