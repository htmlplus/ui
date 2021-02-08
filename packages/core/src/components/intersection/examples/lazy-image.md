```css [style]
.wrapper {
  position: relative;
  height: 320px;
  overflow: auto;
  background-color: #eee;
}
.box {
  text-align: center;
  margin: 1000px auto;
}
```

```tsx [script]
class {

  onChange(event) {

    if (!event.detail.isIntersecting) return;

    const element = event.target.querySelector('[data-src]');

    const src = element.getAttribute('data-src');

    element.setAttribute('src', src);
  }

  render() {
    return (
      <div class="wrapper">
        <plus-intersection class="box" once onPlusChange={(event) => this.onChange(event)}>
          <img data-src="https://placekitten.com/200/200" alt="Lazy Image"/>
        </plus-intersection>
      </div>
    )
  }
}
```