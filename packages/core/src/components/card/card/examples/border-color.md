```css [style]
plus-card {
  height: 120px;
  width: 120px;
  margin: auto;
}
plus-card.pink {
  --plus-card-border-color: #ef9a9a;
}
plus-card.yellow {
  --plus-card-border-color: #fff59d;
}
plus-card.blue {
  --plus-card-border-color: #80cbc4;
}
```

```html [template]
<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="pink" outlined></plus-card>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="yellow" outlined></plus-card>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="blue" outlined></plus-card>
  </plus-grid-item>
</plus-grid>
```