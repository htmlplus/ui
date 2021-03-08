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
    <div slot="header:start">
        Header Start
    </div>
    <div slot="header">
        Header
    </div>
    <div slot="header:end">
        Header End
    </div>
    <div slot="aside:start">
        Aside Start
    </div>
    <div class="main">
        Main
    </div>
    <div slot="aside:end">
        Aside End
    </div>
    <div slot="footer:start">
        Footer Start
    </div>
    <div slot="footer">
        Footer
    </div>
    <div slot="footer:end">
        Footer End
    </div>
</plus-layout>
```