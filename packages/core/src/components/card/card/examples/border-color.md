```css [style]
plus-card {
  height: 8rem;
  width: 8rem;
  margin: auto;
}
plus-card.pink {
  --plus-card-border-color: #EF9A9A;
}
plus-card.yellow {
  --plus-card-border-color: #FFF59D;
}
plus-card.blue {
  --plus-card-border-color: #80CBC4;
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