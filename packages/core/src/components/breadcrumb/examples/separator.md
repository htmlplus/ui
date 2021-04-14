```css [style]
.container {
  text-align: center;
  margin: 0.75em
}
plus-breadcrumb {
  display: inline-block;
}
```

```html [template]
<fragment>
  <div class="container">
    <plus-breadcrumb separator="\">
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
      <span>Fourth</span>
      <span>Fifth</span>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="-">
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
      <span>Fourth</span>
      <span>Fifth</span>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="/">
      <span>First</span>
      <span>Second</span>
      <span>Third</span>
      <span>Fourth</span>
      <span>Fifth</span>
    </plus-breadcrumb>
  </div>
</fragment>
```
