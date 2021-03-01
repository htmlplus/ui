```css [style]
.wrapper {
    position: relative;
    background-color: #eee;
}

.status {
    color: #fafafa;
    background-color: #212121;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    border-radius: 20px;
    z-index: 1;
}

.content {
    height: 320px;
    overflow: auto;
}

.spacer {
    padding: 500px 0;
}

.box {
    width: 250px;
    padding: 20px;
    margin: 0 auto;
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
      <div class="wrapper">
        <div class="status">
          {this.intersecting ? 'In Viewport' : 'Out of Viewport'}
        </div>
        <div class="content">
          <div class="spacer"></div> 
          <plus-intersection onPlusChange={(event) => this.onChange(event)}>
            <plus-card elevation="10" class="box">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </plus-card>
          </plus-intersection>
          <div class="spacer"></div> 
        </div>
      </div>
    )
  }
}
```