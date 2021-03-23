The card component accepts a custom elevation between `1` and `24`.The elevation property specifies the value of the box-shodow property.

```css [style]
plus-card {
  height: 12rem;
  width: 12rem;
  margin: auto;
}
input[type="range"] {
  display: block;
  width: 12rem;
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
      <fragment>
        <plus-card elevation={this.elevation}></plus-card>
        <br />
        <input 
          type="range" 
          value={this.elevation} 
          min="1" 
          max="24" 
          onChange={(event) => this.onChange(event)} 
        />
      </fragment>
    )
  }
}
```

```html [javascript:template]
<plus-card id="card" elevation="12"></plus-card>
<br />
<input id="input" type="range" value="12" min="1" max="24" />
```

```js [javascript:script]
input.addEventListener('change', (event) => {
  card.elevation = event.target.value
})
```

```html [vue:template]
<plus-card :elevation="elevation"></plus-card>    
<br />    
<input type="range" v-model="elevation" min="1" max="24" /> 
```

```js [vue:script]
export default {
  data() {
    return {
      elevation: '12'
    }
  }
};
```