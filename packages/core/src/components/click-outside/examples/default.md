```css [style]
.box {
  background: #c5cae9;
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
          class="box" 
          onClick={() => this.onClick()} 
          onPlusClickOutside={() => this.onClickOutside()}
        >
          {this.inside} times inside clicked
          <br/>
          {this.outside} times outside clicked
        </plus-click-outside>
      </preview>
    )
  }
}
```