TODO: align-self on grid-item overrides grid align-items

```css [style]
plus-grid {
  background-color: #fafafa;
  height: 140px;
}
.box {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid align-items="center">
  <plus-grid-item xs="grow" align-self="start">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="grow" align-self="end">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
</plus-grid>
```
