```css [style]
.center {
  text-align: center;
}
```

```html [template]
<fragment>
  <div class="center">
    <plus-dialog-toggler connector="dialog-persistent">
      Open
    </plus-dialog-toggler>
  </div>
  <plus-dialog animation="fade" connector="dialog-persistent" persistent>
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