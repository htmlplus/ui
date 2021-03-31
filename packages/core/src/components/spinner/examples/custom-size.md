```css [style]
plus-spinner[size=sm] {
  --plus-spinner-size: 24px;
}
plus-spinner[size=md] {
  --plus-spinner-size: 48px;
}
plus-spinner[size=lg] {
  --plus-spinner-size: 72px;
}
```

```html [template]
<plus-grid align-items="center" justify-content="evenly">
  <plus-grid-item>
    <plus-spinner size="sm"></plus-spinner>
  </plus-grid-item>
  <plus-grid-item>
    <plus-spinner size="md"></plus-spinner>
  </plus-grid-item>
  <plus-grid-item>
    <plus-spinner size="lg"></plus-spinner>
  </plus-grid-item>
</plus-grid>
```