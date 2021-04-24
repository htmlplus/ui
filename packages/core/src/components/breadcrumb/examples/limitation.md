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
    <plus-breadcrumb separator="/" max="4" offset="0">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
      <a href="#">Item 4</a>
      <a href="#">Item 5</a>
      <a href="#">Item 6</a>
      <a href="#">Item 7</a>
      <a href="#">Item 8</a>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="/" max="4" offset="2">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
      <a href="#">Item 4</a>
      <a href="#">Item 5</a>
      <a href="#">Item 6</a>
      <a href="#">Item 7</a>
      <a href="#">Item 8</a>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb separator="/" max="4" offset="-1">
      <a href="#">Item 1</a>
      <a href="#">Item 2</a>
      <a href="#">Item 3</a>
      <a href="#">Item 4</a>
      <a href="#">Item 5</a>
      <a href="#">Item 6</a>
      <a href="#">Item 7</a>
      <a href="#">Item 8</a>
    </plus-breadcrumb>
  </div>
</fragment>
```
