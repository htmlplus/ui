```css [style]
#source { color: red  }
#target { color: blue }
```

```html [template]
<fragment>
  <div id="source">
    <plus-portal target="#target">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
    </plus-portal>
  </div>
  <div id="target"></div>
</fragment>
```
