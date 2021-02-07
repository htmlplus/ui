```css [style]
.wrapper {
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
      <preview>
        <plus-intersection class="wrapper" once onPlusChange={(event) => this.onChange(event)}>
          <img data-src="https://placekitten.com/200/300">
        </plus-intersection>
      </preview>
    )
  }
}
```