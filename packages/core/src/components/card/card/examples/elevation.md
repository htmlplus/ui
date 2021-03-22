The card component accepts a custom elevation between `1` and `24`.The elevation property specifies the value of the box-shodow property.

```css [style]
plus-card {
  height: 200px;
  width: 200px;
  margin: auto;
}
input[type="range"] {
  display: block;
  width: 200px;
  margin: auto;
}
```

```tsx [script]
class {

  @State()
  elevation = '12';

  onChange(event) {
    this.elevation = event.target.value;
  }

  render() {
    return (
      <div>
        <plus-card elevation={this.elevation}></plus-card>
        <br />
        <input 
          type="range" 
          value={this.elevation} 
          min="1" 
          max="24" 
          onChange={(event) => this.onChange(event)} 
        />
      </div>
    )
  }
}
```