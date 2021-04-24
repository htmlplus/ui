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
    <plus-breadcrumb>
      <svg slot="separator" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" /></svg>
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb>
      <svg slot="separator" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
  <div class="container">
    <plus-breadcrumb>
      <svg slot="separator" viewBox="0 0 16 16"><path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /></svg>
      <a href="#">First</a>
      <a href="#">Second</a>
      <a href="#">Third</a>
      <a href="#">Fourth</a>
      <a href="#">Fifth</a>
    </plus-breadcrumb>
  </div>
</fragment>
```
