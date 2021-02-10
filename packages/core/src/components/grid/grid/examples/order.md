```css [style]
.box {
  color: #00bcd4;
  border: 1px solid #fff;
  background-color: #e0f7fa;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid>
  <plus-grid-item order-xs="3" xs="grow">
    <div class="box">
      order=3
    </div>
  </plus-grid-item>
  <plus-grid-item order-xs="2" xs="grow">
    <div class="box">
      order=2
    </div>
  </plus-grid-item>
  <plus-grid-item order-xs="1" xs="grow">
    <div class="box">
      order=1
    </div>
  </plus-grid-item>
</plus-grid>
```
