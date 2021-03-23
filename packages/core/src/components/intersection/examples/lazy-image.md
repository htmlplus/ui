```css [style]
.container {
  position: relative;
  height: 20rem;
  overflow: auto;
  background-color: #EEEEEE;
}

.box {
  text-align: center;
  margin: 1000px auto;
}

[data-hidden] {
  display: none;
}

img {
  display: block;
  width: 12rem;
  height: 12rem;
  object-fit: cover;
}

plus-card {
  display: inline-block;
}

plus-spinner {
  margin: 1rem;
}
```

```tsx [script]
class {

  onChange(event) {

    if (!event.detail.isIntersecting) return;

      setTimeout(() => {

        const image = event.target.querySelector('img');

        const spinner = event.target.querySelector('plus-spinner');

        const src = image.getAttribute('data-src');

        image.setAttribute('src', src);

        image.removeAttribute('data-hidden');

        spinner.setAttribute('data-hidden', 'true')
      }, 1000);
  }

  render() {
    return (
      <fragment>
        <div class="container">
          <plus-intersection class="box" once onPlusChange={(event) => this.onChange(event)}>
            <plus-card elevation="10">
              <plus-spinner></plus-spinner>
              <img data-hidden data-src="https://placekitten.com/200/200" alt="Lazy Image" />
            </plus-card>
          </plus-intersection>
        </div>
      </fragment>
    )
  }
}
```

```html [javascript:template]
<fragment>
  <div class="container">
    <plus-intersection id="element1" class="box" once>
      <plus-card elevation="10">
        <plus-spinner></plus-spinner>
        <img data-hidden data-src="https://placekitten.com/200/200" alt="Lazy Image" />
      </plus-card>
    </plus-intersection>
  </div>
</fragment>
```

```js [javascript:script]
element1.addEventListener('plusChange', (event) => {

  if (!event.detail.isIntersecting) return;

  setTimeout(() => {

    const image = event.target.querySelector('img');

    const spinner = event.target.querySelector('plus-spinner');

    const src = image.getAttribute('data-src');

    image.setAttribute('src', src);

    image.removeAttribute('data-hidden');

    spinner.setAttribute('data-hidden', 'true')
  }, 1000);
})
```