```css [style]
plus-breadcrumb {
  padding: 0.75em;
  border-radius: 0.25em;
}
plus-breadcrumb.first {
  --plus-breadcrumb-gutter-x: 0.75em;
  --plus-breadcrumb-expander-background-color: transparent;
  --plus-breadcrumb-expander-border-radius: 0;
  --plus-breadcrumb-expander-color: white;
  --plus-breadcrumb-expander-height: 1em;
  --plus-breadcrumb-expander-width: 1em;
  --plus-breadcrumb-separator-color: white;
  --plus-breadcrumb-separator-height: 0.75em;
  --plus-breadcrumb-separator-width: 0.75em;
  background-color: #2B78AC;
}
plus-breadcrumb.first a {
  text-decoration: none;
  color: white;
}
plus-breadcrumb.second {
  --plus-breadcrumb-gutter-x: 0.75em;
  --plus-breadcrumb-expander-background-color: transparent;
  --plus-breadcrumb-expander-border-radius: 0;
  --plus-breadcrumb-expander-color: black;
  --plus-breadcrumb-expander-height: 1em;
  --plus-breadcrumb-expander-width: 1em;
  --plus-breadcrumb-separator-color: black;
  --plus-breadcrumb-separator-height: 0.75em;
  --plus-breadcrumb-separator-width: 0.75em;
  background-color: #DCDCDC;
}
plus-breadcrumb.second a {
  text-decoration: none;
  color: black;
}
```

```html [template]
<fragment>
  <plus-breadcrumb class="first" max="2">
    <svg slot="separator" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>
    <a href="#">HTMLPLUS</a>
    <a href="#">Core</a>
    <a href="#">UI Components</a>
    <a href="#">Breadcrumb</a>
  </plus-breadcrumb>
  <br />
  <plus-breadcrumb class="second" max="2">
    <svg slot="separator" viewBox="0 0 16 16"><path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" /></svg>
    <a href="#">HTMLPLUS</a>
    <a href="#">Core</a>
    <a href="#">UI Components</a>
    <a href="#">Breadcrumb</a>
  </plus-breadcrumb>
</fragment>
```
