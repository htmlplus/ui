```css [style]
.wrapper {
    position: relative;
    background-color: #eee;
}

.status {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 12px;
    border-radius: 20px;
}

.status.in {
    background-color: green;
}

.status.out {
    background-color: red;
}

.content {
    height: 320px;
    overflow: auto;
}

.box {
    background: #c5cae9;
    width: 250px;
    padding: 20px;
    margin: 750px auto;
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
        <div class={`status ${this.intersecting ? 'in' : 'out'}`}>
          {this.intersecting ? 'In Viewport' : 'Out of Viewport'}
        </div>
        <div class="content">
          <plus-intersection class="box" onPlusChange={(event) => this.onChange(event)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </plus-intersection>
        </div>
      </div>
    )
  }
}
```