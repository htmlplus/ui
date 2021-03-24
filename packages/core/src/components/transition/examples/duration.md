```css [style]
plus-grid-item {
  text-align: center;
}
```

```html [template]
<plus-grid justify-content="evenly" gutter="md">
  <plus-grid-item xs="12" sm="6" md="4" xl="auto">
    <plus-transition name="fade-in" repeat="infinite" duration="slower">
      HTMLPLUS
    </plus-transition>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6" md="4" xl="auto">
    <plus-transition name="fade-in" repeat="infinite" duration="slow">
      HTMLPLUS
    </plus-transition>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6" md="4" xl="auto">
    <plus-transition name="fade-in" repeat="infinite" duration="normal">
      HTMLPLUS
    </plus-transition>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6" md="4" xl="auto">
    <plus-transition name="fade-in" repeat="infinite" duration="fast">
      HTMLPLUS
    </plus-transition>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6" md="4" xl="auto">
    <plus-transition name="fade-in" repeat="infinite" duration="faster">
      HTMLPLUS
    </plus-transition>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="6" md="4" xl="auto">
    <plus-transition name="fade-in" repeat="infinite" duration="2.5s">
      HTMLPLUS
    </plus-transition>
  </plus-grid-item>
</plus-grid>
```
