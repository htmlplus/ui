```css [style]
.drawer,
.content {
    padding: 150px 0;
    text-align: center;
    border-radius: 4px;
}
.drawer {
    margin-right: 10px;
    background-color: #AACAFF;
}
.content {
    background-color: #E0E0E0;
}
```

```html [template]
<plus-grid>
    <plus-grid-item xs="auto">
        <plus-drawer class="fade" size="200px" connector="drawer-default">
            <div class="drawer">
                Drawer Content
            </div>
        </plus-drawer>
    </plus-grid-item>
    <plus-grid-item xs="grow">
        <div class="content">
            <plus-drawer-toggler connector="drawer-default">
                Toggle
            </plus-drawer-toggler>
        </div>
    </plus-grid-item>
</plus-grid>
```