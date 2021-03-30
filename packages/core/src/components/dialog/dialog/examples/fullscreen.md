```css [style]
div {
  text-align: center;
}
```

```html [template]
<fragment>
  <div>
    <plus-dialog-toggler connector="dialog-fullscreen">
      Open
    </plus-dialog-toggler>
  </div>
  <plus-dialog class="fade" connector="dialog-fullscreen" placement="bottom" fullscreen>
    <plus-dialog-content>
      <plus-dialog-header>
        Dialog Title
      </plus-dialog-header>
      <plus-dialog-body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler>
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
</fragment>
```