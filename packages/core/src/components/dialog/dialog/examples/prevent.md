```tsx [script]
class {

  confirm(type, event) {
    
    if(confirm(`Are you sure you want to ${type} it?`)) return;

    event.preventDefault();
  }

  render() {
    return (
      <preview split="false">
        <plus-dialog-toggler connector="dialog-prevent">
          Open
        </plus-dialog-toggler>
        <plus-dialog 
          class="fade" 
          connector="dialog-prevent" 
          onPlusOpen={(event) => this.confirm('open', event)}
          onPlusClose={(event) => this.confirm('close', event)}
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
      </preview>
    )
  }
}
```