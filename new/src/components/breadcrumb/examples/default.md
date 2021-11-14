```css [style]
.center {
  text-align: center;
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
<div class="center">
  <plus-breadcrumb separator="/">
    <a href="#">HTMLPLUS</a>
    <a href="#">Core</a>
    <a href="#">UI Components</a>
    <span>Breadcrumb</span>
  </plus-breadcrumb>
</div>
```
