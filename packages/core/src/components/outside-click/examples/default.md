```css [style]
.box {
  background: #c5cae9;
  padding: 20px;
}
```

```tsx [script]
class {

  @State()
  counter = 0;

  callback() {
    this.counter++;
  }

  render() {
    return (
      <preview>
        <plus-outside-click class="box" onPlusOutsideClick={() => this.callback()}>
            {this.counter} times clicked
        </plus-outside-click>
      </preview>
    )
  }
}
```