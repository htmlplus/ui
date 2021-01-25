```css [style]
.box {
  border: 1px solid #ccc;
  background-color: #eee;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<Host>
  <plus-grid>
    <plus-grid-item xs="grow">
      <div class="box">
        xs=grow
      </div>
    </plus-grid-item>
    <plus-grid-item xs="grow">
      <div class="box">
        xs=grow
      </div>
    </plus-grid-item>
    <plus-grid-item xs="grow">
      <div class="box">
        xs=grow
      </div>
    </plus-grid-item>
  </plus-grid>
  <plus-grid>
    <plus-grid-item xs="12" md="2">
      <div class="box">
        xs=12, md=2
      </div>
    </plus-grid-item>
    <plus-grid-item xs="grow">
      <div class="box">
        xs=grow
      </div>
    </plus-grid-item>
    <plus-grid-item xs="12" md="2">
      <div class="box">
        xs=12, md=2
      </div>
    </plus-grid-item>
  </plus-grid>
</Host>
```
