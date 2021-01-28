```css [style]
.box {
  background: #c5cae9;
  padding: 12px;
}
```

```tsx [script]
class {

  callback() {

  }

  render() {
    return (
      <preview>
        <plus-outside-click class="box" onPlusOutsideClick={() => this.callback()}>
            Click outside
        </plus-outside-click>
      </preview>
    )
  }
}
```