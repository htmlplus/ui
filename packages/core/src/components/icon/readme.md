## Libraries
TODO

<br></br>

### Material Design
The `plus-icon` component will display an icon from any icon font that supports ligatures. As a prerequisite, you must include one, such as the [Material icon font](https://google.github.io/material-design-icons/#icon-font-for-the-web) in your project, for instance, via Google Web Fonts.
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

Connect `Material icon font` to the `plus-icon` component.
```css
plus-icon {
  font-family: 'Material Icons';
}
```

To use an icon simply wrap the icon name (font ligature) with the `plus-icon` component.
```html
<plus-icon>home</plus-icon>
```

<br></br>

### Font Awesome
[Font Awesome](https://fontawesome.com/icons) can be used with the Icon component as follow:
```html
<plus-icon class="fa fa-home"></plus-icon>
```

<br></br>

### IcoMoon
TODO

Connect `Custom icon font` to the `plus-icon` component.
```css
@font-face {
  font-family: 'your icons';
  src: url('path/icons.eot');
  src: url('path/icons.eot') format('embedded-opentype'),
       url('path/icons.ttf') format('truetype'),
       url('path/icons.woff') format('woff'),
       url('path/icons.svg') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

plus-icon {
  font-family: 'your icons';
}
```

To use an icon simply wrap the icon name (font ligature) with the `plus-icon` component.
```html
<plus-icon>home</plus-icon>
```