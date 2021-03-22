By default, the card component has no border. outlined property Adds border.

```css [style]
plus-card {
  height: 120px;
  width: 120px;
  margin: auto;
}
plus-card.size-1 {
  --plus-card-border-width: 1px;
}
plus-card.size-2 {
  --plus-card-border-width: 2px;
}
plus-card.size-3 {
  --plus-card-border-width: 3px;
}
```

```html [template]
<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="size-1" outlined></plus-card>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="size-2" outlined></plus-card>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <plus-card class="size-3" outlined></plus-card>
  </plus-grid-item>
</plus-grid>
```