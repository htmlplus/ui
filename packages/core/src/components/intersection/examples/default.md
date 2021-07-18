The intersection component observes the viewport and updates the status when the card component 
enters or exits the viewport. (Its a component for detecting when elements are visible within the user's viewport).

```css [style]
.container {
  position: relative;
  background-color: #EEEEEE;
}

.status {
  color: #FAFAFA;
  background-color: #212121;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  z-index: 1;
}

.content {
  height: 20rem;
  overflow: auto;
}

.spacer {
  padding: 500px 0;
}

plus-card {
  width: 15rem;
  padding: 1rem;
  margin: auto;
}
```

```tsx [script]
class {
  
  @State()
  intersecting = false;

  onChange(event) {
    this.intersecting = event.detail.isIntersecting;
  }

  render() {
    return (
      <fragment dock>
        <div class="container">
          <div class="status">
            {this.intersecting ? 'In Viewport' : 'Out of Viewport'}
          </div>
          <div class="content">
            <div class="spacer"></div> 
            <plus-intersection onPlusChange={(event) => this.onChange(event)}>
              <plus-card elevation="10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </plus-card>
            </plus-intersection>
            <div class="spacer"></div> 
          </div>
        </div>
      </fragment>
    )
  }
}
```

```html [javascript:template]
<div class="container">
  <div id="element1" class="status"></div>
  <div class="content">
    <div class="spacer"></div> 
    <plus-intersection id="element2">
      <plus-card elevation="10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </plus-card>
    </plus-intersection>
    <div class="spacer"></div> 
  </div>
</div>
```

```js [javascript:script]
element2.addEventListener('plusChange', (event) => {
  element1.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
})
```