```css [style]
div {
  text-align: center;
}
```

```tsx [script]
class {

  ensure(type, event) {
    
    if(confirm(`Are you sure you want to ${type} it?`)) return;

    event.preventDefault();
  }

  render() {
    return (
      <fragment>
        <div>
          <plus-dialog-toggler connector="dialog-prevent">
            Open
          </plus-dialog-toggler>
        </div>
        <plus-dialog 
          class="fade" 
          connector="dialog-prevent" 
          onPlusOpen={(event) => this.ensure('open', event)}
          onPlusClose={(event) => this.ensure('close', event)}
        >
          <plus-dialog-content>
            <plus-dialog-header>
              Dialog Title
            </plus-dialog-header>
            <plus-dialog-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </plus-dialog-body>
            <plus-dialog-footer>
              <plus-dialog-toggler connector="dialog-prevent">
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
<fragment>
  <div>
    <plus-dialog-toggler connector="dialog-prevent">
      Open
    </plus-dialog-toggler>
  </div>
  <plus-dialog id="element1" class="fade" connector="dialog-prevent">
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
        <plus-dialog-toggler connector="dialog-prevent">
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
</fragment>
```

```js [javascript:script]
const ensure = (type, event) => {

  if (confirm(`Are you sure you want to ${type} it?`)) return;

  event.preventDefault();
}

element1.addEventListener('plusOpen', (event) => ensure('open', event));

element1.addEventListener('plusClose', (event) => ensure('close', event));
```