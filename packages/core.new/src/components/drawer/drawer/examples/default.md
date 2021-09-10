```css [style]
plus-card {
  --plus-card-background-color: #E0E0E0;
  padding: 10rem 0;
  text-align: center;
}
plus-drawer plus-card {
  --plus-card-background-color: #AACAFF;
  margin-right: 0.5rem;
}
```

```html [template]
<plus-grid>
  <plus-grid-item xs="auto">
    <plus-drawer animation="fade" size="200px" connector="drawer-default">
      <plus-card>
        Drawer Content
      </plus-card>
    </plus-drawer>
  </plus-grid-item>
  <plus-grid-item xs="grow">
    <plus-card>
      <plus-drawer-toggler connector="drawer-default">
        Toggle
      </plus-drawer-toggler>
    </plus-card>
  </plus-grid-item>
</plus-grid>
```