```css [style]
plus-breadcrumb {
  padding: 0.75em;
  border-radius: 0.25em;
}
plus-breadcrumb.first {
  --plus-breadcrumb-separator-color: white;
  background-color: #2B78AC;
}
plus-breadcrumb.first a {
  text-decoration: none;
  color: white;
}
plus-breadcrumb.second {
  --plus-breadcrumb-separator-color: gray;
  background-color: #DCDCDC;
}
plus-breadcrumb.second a {
  text-decoration: none;
  color: black;
}
```

```html [template]
<fragment>
  <plus-breadcrumb class="first">
    <svg slot="separator" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>
    <a href="#">Desktop</a>
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">Breadcrumb</a>
  </plus-breadcrumb>
  <br />
  <plus-breadcrumb class="second">
    <svg slot="separator" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>
    <a href="#">Desktop</a>
    <a href="#">Home</a>
    <a href="#">Projects</a>
    <a href="#">Breadcrumb</a>
  </plus-breadcrumb>
</fragment>
```
