```css [style]
plus-browse {
  background: white;
  border: 2px dashed #E0E0E0;
  border-radius: 4px;
  display: block;
  padding: 3rem;
  text-align: center;
}
plus-browse[dragging] {
  border-color: #0087F7;
}
```

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
      >
        Click or Drag & Drop a file here
      </plus-browse>
    )
  }
}
```

```html [javascript:template]
<plus-browse id="element" droppable>
  Click or Drag & Drop a file here
</plus-browse>
```

```js [javascript:script]
const onChange = (event) => {
  const name = event.detail.files[0].file.name;
  alert(`File '${name}' selected.`);
}
element.addEventListener('plusChange', onChange);
```