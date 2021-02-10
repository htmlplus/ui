```css [style]
plus-grid {
  background-color: #eee;
  height: 140px;
}
.box {
  color: #00bcd4;
  border: 1px solid #fff;
  background-color: #e0f7fa;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid align-content="center">
  <plus-grid-item xs="6">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
</plus-grid>
```
