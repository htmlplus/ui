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
    <plus-breadcrumb separator="/" max="4" offset="0">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
      <span>Item 6</span>
      <span>Item 7</span>
      <span>Item 8</span>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="/" max="4" offset="2">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
      <span>Item 6</span>
      <span>Item 7</span>
      <span>Item 8</span>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="/" max="4" offset="-1">
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
      <span>Item 4</span>
      <span>Item 5</span>
      <span>Item 6</span>
      <span>Item 7</span>
      <span>Item 8</span>
    </plus-breadcrumb>
  </div>
</fragment>
```
