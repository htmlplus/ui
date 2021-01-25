```css [style]
plus-grid {
  height: 200px;
}
.box {
  border: 1px solid #ccc;
  background-color: #eee;
  height: 100%;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid align-items="center" vertical>
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
  <plus-grid-item xs="3">
    <div class="box">
      Item
    </div>
  </plus-grid-item>
</plus-grid>
```
