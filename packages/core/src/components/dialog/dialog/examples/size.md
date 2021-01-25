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
      <preview split="false">
        <Host>
          <button onClick={() => this.show('sm')}>
            Small dialog
          </button>
          &nbsp;
          <button onClick={() => this.show('lg')}>
            Large dialog
          </button>
          &nbsp;
          <button onClick={() => this.show('xl')}>
            Extra large dialog
          </button>
          &nbsp;
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
        </Host>
      </preview>
    )
  }
}
```