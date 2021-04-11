By default, the card component has border-radius. The tile property neutralizes border-radius.

```css [style]
div {
  padding: 2rem 0;
  background-color: #EEEEEE;
}
plus-card {
  height: 8rem;
  width: 8rem;
  margin: auto;
}
```

```html [template]
<fragment dock>
  <div>
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card tile></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card tile outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card tile elevation="5"></plus-card>
      </plus-grid-item>
    </plus-grid>
  </div>
</fragment>
```

```html [vue:template]
<div>
  <plus-grid justify-content="evenly" gutter="md">
    <plus-grid-item xs="12" sm="auto">
      <plus-card tile></plus-card>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-card tile outlined></plus-card>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-card tile elevation="5"></plus-card>
    </plus-grid-item>
  </plus-grid>
</div>
```