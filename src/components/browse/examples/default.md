```tsx [script]
class {
  onChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
  render() {
    return (
      <plus-browse
        droppable
        onPlusChange={(event) => this.onChange(event)}
      ></plus-browse>
    );
  }
}
```

```html [javascript:template]
<plus-browse id="element" droppable></plus-browse>
```

```js [javascript:script]
const onChange = (event) => {
  const name = event.detail.files[0].file.name;
  alert(`File '${name}' selected.`);
};
element.addEventListener('plusChange', onChange);
```
