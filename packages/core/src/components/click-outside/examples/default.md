```css [style]
.box {
  padding: 20px;
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
      <preview>
        <plus-click-outside 
          onClick={() => this.onClick()} 
          onPlusClickOutside={() => this.onClickOutside()}
        >
          <plus-card elevation="10" class="box">
            {this.inside} time(s) inside clicked
            <br/>
            {this.outside} time(s) outside clicked
          </plus-card>
        </plus-click-outside>
      </preview>
    )
  }
}
```