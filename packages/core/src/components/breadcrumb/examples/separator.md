```css [style]
.container {
  text-align: center;
  margin: 0.75em
}
plus-breadcrumb {
  display: inline-block;
  color: #707070;
}
plus-breadcrumb a {
  color: inherit;
  text-decoration: none;
}
plus-breadcrumb a:hover {
  text-decoration: underline;
}
```

```html [template]
<fragment>
  <div class="container">
    <plus-breadcrumb separator="\">
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="-">
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="/">
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
</fragment>
```
