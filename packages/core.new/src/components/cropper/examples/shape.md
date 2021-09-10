```css [style]
plus-cropper[shape="rectangle"] {
  height: 100%;
}
```

```html [template]
<plus-grid gutter="md">
  <plus-grid-item xs="6">
    <plus-cropper shape="rectangle" aspect-ratio="2" src="/assets/images/panda.jpg"></plus-cropper>
  </plus-grid-item>
  <plus-grid-item xs="6">
    <plus-grid gutter="md">
      <plus-grid-item xs="12">
        <plus-cropper shape="square" src="/assets/images/panda.jpg"></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12">
        <plus-cropper shape="circle" src="/assets/images/panda.jpg"></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  </plus-grid-item>
</plus-grid>
```