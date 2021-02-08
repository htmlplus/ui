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
    this.inside++;
  }

  onOutsideClick() {
    this.outside++;
  }

  render() {
    return (
      <preview>
        <plus-outside-click 
          class="box" 
          onClick={() => this.onClick()} 
          onPlusOutsideClick={() => this.onOutsideClick()}
        >
          {this.inside} times inside clicked
          <br/>
          {this.outside} times outside clicked
        </plus-outside-click>
      </preview>
    )
  }
}
```