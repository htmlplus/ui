```css [style]
plus-layout {
    min-height: unset;
    --plus-layout-gutter-x: 0.5rem;
    --plus-layout-gutter-y: 0.5rem;
}
plus-layout * {
    border-radius: 0.25rem;
    background-color: #E0E0E0;
    padding: 1rem;
    box-sizing: border-box;
    height: 100%;
}
plus-layout .main {
    height: 150px;
}
```

```html [template]
<plus-layout>
    <div slot="header">
        Header
    </div>
    <div class="main">
        Main
    </div>
    <div slot="footer">
        Footer
    </div>
</plus-layout>
```