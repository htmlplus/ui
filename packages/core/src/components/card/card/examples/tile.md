By default, the card component has border-radius. The tile property neutralizes border-radius.

```css [style]
div {
  padding: 40px 0;
  background-color: #eee;
}
plus-card {
  height: 120px;
  width: 120px;
  margin: auto;
}
```

```html [template]
<div>
  <plus-grid justify-content="evenly" gutter="md">
    <plus-grid-item xs="12" sm="auto">
      <plus-card tile></plus-card>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-card tile outlined></plus-card>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-card tile elevation="5"></plus-card>
    </plus-grid-item>
  </plus-grid>
</div>
```