```css [style]
div {
  padding: 1rem;
}
plus-click-outside {
  margin: auto;
  display: block;
  max-width: 20rem;
}
```

```tsx [script]
class {

  @State()
  inside = 0;

  @State()
  outside = 0;

  onClick() {
    this.inside = this.inside + 1;
  }

  onClickOutside() {
    this.outside = this.outside + 1;
  }

  render() {
    return (
      <plus-click-outside
        onClick={() => this.onClick()} 
        onPlusClickOutside={() => this.onClickOutside()}
      >
        <plus-card elevation="10">
          <div>
            {this.inside} time(s) inside clicked
            <br />
            {this.outside} time(s) outside clicked
          </div>
        </plus-card>
      </plus-click-outside>
    )
  }
}
```

```html [javascript:template]
<plus-click-outside id="element1">
  <plus-card elevation="10">
    <div>
      <span id="element2">0</span> time(s) inside clicked
      <br />
      <span id="element3">0</span> time(s) outside clicked
    </div>
  </plus-card>
</plus-click-outside>
```

```js [javascript:script]
let inside = 0;
let outside = 0;
element1.addEventListener('click', (event) => {
  inside = inside + 1;
  element2.innerHTML = inside;
})
element1.addEventListener('plusClickOutside', (event) => {
  outside = outside + 1;
  element3.innerHTML = outside;
})
```