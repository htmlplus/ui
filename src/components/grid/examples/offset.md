```css [style]
plus-grid div {
  color: #00BCD4;
  border: 1px solid #FFFFFF;
  background-color: #E0F7FA;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid>
  <plus-grid-item xs="3">
    <div>
      xs=3
    </div>
  </plus-grid-item>
  <plus-grid-item offset-xs="3" xs="3">
    <div>
      offset-xs="3", xs=3
    </div>
  </plus-grid-item>
  <plus-grid-item xs="3">
    <div>
      xs=3
    </div>
  </plus-grid-item>
</plus-grid>
```
