```css [style]
  .bg-colorful {
    background-color: yellow;
    padding: 2rem;
  }
```

```tsx [script]
class {

  @State()
  opened = 0;

  toggleFullscreen() {
    this.opened = !this.outside;
  }

  render() {
    return (
        <div>
          <button onClick={() => toggleFullscreen()}>Open Full Screen</button>

          <plus-full-screen id="full-screen" opened={this.opened}>
            <div class="bg-colorful">
              <h1>Hello world!</h1>
            </div>
            <button onClick={() => toggleFullscreen()}>Close Full Screen</button>
          </plus-full-screen>
        </div>
    )
  }
}
```

```html [javascript:template]
<button onclick="toggleFullscreen()">Open Full Screen</button>

<plus-full-screen id="full-screen">
  <div class="bg-colorful">
    <h1>Hello world!</h1>
  </div>
  <button onclick="toggleFullscreen()">Close Full Screen</button>
</plus-full-screen>
```

```js [javascript:script]
function toggleFullscreen() {
  const element = document.getElementById('full-screen');

  if (element.getAttribute('opened')) {
    return element.removeAttribute('opened');
  }

  return element.setAttribute('opened', 'true');
}
```
