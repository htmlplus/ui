```css [style]
plus-grid-item {
  text-align: center;
}
```

```tsx [script]
class {

  @State()
  open = false;

  @State()
  size = 'md';

  hide() {
    this.open = false;
  }

  show(size) {
    this.size = size;
    this.open = true;
  }

  render() {
    return (
      <fragment>
        <plus-grid justify-content="center" gutter="md">
          <plus-grid-item xs="12" sm="auto">
            <button onClick={() => this.show('sm')}>
              Small dialog
            </button>
          </plus-grid-item>
          <plus-grid-item xs="12" sm="auto">
            <button onClick={() => this.show('lg')}>
              Large dialog
            </button>
          </plus-grid-item>
          <plus-grid-item xs="12" sm="auto">
            <button onClick={() => this.show('xl')}>
              Extra large dialog
            </button>
          </plus-grid-item>
        </plus-grid>
        <plus-dialog class="fade" open={this.open} size={this.size} onPlusClose={() => this.hide()}>
          <plus-dialog-content>
            <plus-dialog-header>
              Dialog Title
            </plus-dialog-header>
            <plus-dialog-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </plus-dialog-body>
            <plus-dialog-footer>
              <button onClick={() => this.hide()}>
                Close
              </button>
            </plus-dialog-footer>
          </plus-dialog-content>
        </plus-dialog>
      </fragment>
    )
  }
}
```

```html [javascript:template]
<plus-grid justify-content="center" gutter="md">
  <plus-grid-item xs="12" sm="auto">
    <button id="element1">
      Small dialog
    </button>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <button id="element2">
      Large dialog
    </button>
  </plus-grid-item>
  <plus-grid-item xs="12" sm="auto">
    <button id="element3">
      Extra large dialog
    </button>
  </plus-grid-item>
</plus-grid>
<plus-dialog id="element4" class="fade">
  <plus-dialog-content>
    <plus-dialog-header>
      Dialog Title
    </plus-dialog-header>
    <plus-dialog-body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </plus-dialog-body>
    <plus-dialog-footer>
      <button id="element5">
        Close
      </button>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
```

```js [javascript:script]
const hide = () => {
  element4.open = false;
}
const show = (size) => {
  element4.size = size;
  element4.open = true;
}
element1.addEventListener('click', (event) => show('sm'));
element2.addEventListener('click', (event) => show('md'));
element3.addEventListener('click', (event) => show('lg'));
element4.addEventListener('click', () => hide());
element5.addEventListener('click', () => hide());
```