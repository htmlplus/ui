```css [style]
plus-grid {
  background-color: #EEEEEE;
  height: 8rem;
}
plus-grid div {
  color: #00BCD4;
  border: 1px solid #FFFFFF;
  background-color: #E0F7FA;
  padding: 0.5em;
  text-align: center;
}
```

```html [template]
<plus-grid align-items="center">
  <plus-grid-item xs="grow" align-self="start">
    <div>
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <div>
      Item
    </div>
  </plus-grid-item>
  <plus-grid-item xs="grow" align-self="end">
    <div>
      Item
    </div>
  </plus-grid-item>
</plus-grid>
```
