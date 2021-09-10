```css [style]
plus-card {
  height: 12rem;
  width: 12rem;
  margin: auto;
}
plus-card.pink {
  --plus-card-background-color: #EF9A9A;
}
plus-card.yellow {
  --plus-card-background-color: #FFF59D;
}
plus-card.blue {
  --plus-card-background-color: #80CBC4;
}
```

```html [template]
<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="pink"></plus-card>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="yellow"></plus-card>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="blue"></plus-card>
  </plus-grid-item>
</plus-grid>
```