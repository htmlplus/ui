```css [style]
.center {
  text-align: center;
}
```

```tsx [script]
class {

  @State()
  disabled: boolean = true;

  change(disabled) {
    this.disabled = disabled;
  }

  render() {
    return (
      <fragment>
        <div class="center">
          <plus-dialog-toggler connector="dialog-cropper">
            Open
          </plus-dialog-toggler>
        </div>
        <plus-dialog 
          class="fade" 
          connector="dialog-cropper" 
          onPlusOpened={() => this.change(false)}
          onPlusClosed={() => this.change(true)}
        >
          <plus-dialog-content>
            <plus-dialog-header>
              Cropper
            </plus-dialog-header>
            <plus-dialog-body>
              <plus-cropper disabled={this.disabled} src="/assets/images/panda.jpg"></plus-cropper>
            </plus-dialog-body>
            <plus-dialog-footer>
              <plus-dialog-toggler>
                Close
              </plus-dialog-toggler>
            </plus-dialog-footer>
          </plus-dialog-content>
        </plus-dialog>
      </fragment>
    )
  }
}
```

```html [javascript:template]
<div class="center">
  <plus-dialog-toggler connector="dialog-cropper">
    Open
  </plus-dialog-toggler>
</div>
<plus-dialog id="element1" class="fade" connector="dialog-cropper">
  <plus-dialog-content>
    <plus-dialog-header>
      Cropper
    </plus-dialog-header>
    <plus-dialog-body>
      <plus-cropper id="element2" disabled src="/assets/images/panda.jpg"></plus-cropper>
    </plus-dialog-body>
    <plus-dialog-footer>
      <plus-dialog-toggler>
        Close
      </plus-dialog-toggler>
    </plus-dialog-footer>
  </plus-dialog-content>
</plus-dialog>
```

```js [javascript:script]
const change = (disabled) => {
  element2.disabled = disabled;
}
element1.addEventListener('plusOpened', () => change(false));
element1.addEventListener('plusClosed', () => change(true));
```