# Icon

Symbols for common actions and items.This component gives you access to the icon libraries (font awesome, icon material, ...).

<Playground />

<Usage />

## Libraries

TODO

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

### Font Awesome

[Font Awesome](https://fontawesome.com/icons) can be used with the Icon component as follow:

```html
<plus-icon class="fa fa-home"></plus-icon>
```

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

<Api />

<GlobalConfig />

<Examples />
### Default
<Example value="default" />

### Color

<Example value="color" />

### Custom Color

<Example value="custom-color" />

### Size

<Example value="size" />

### Flip

<Example value="flip" />

### Rotate

<Example value="rotate" />

# Accessibility

Icons can convey all sorts of meaningful information, so it's important that they reach the largest amount of people possible. There are two use cases you'll want to consider:

- **Decorative Icons** are only being used for visual or branding reinforcement. If they were removed from the page, users would still understand and be able to use your page.
- **Semantic Icons** are ones that you're using to convey meaning, rather than just pure decoration. This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.

### Decorative Icons

If your icons are purely decorative, you'll need to manually add an aria-hidden attribute to each of your icons so they're accessible.

```html
<plus-icon class="fa fa-home" aria-hidden="true"></plus-icon>
```

> Using property shorthand You might be tempted to use <i aria-hidden></i> and leave the ="true" part out. Don't, it's important for screen readers to have a value that follows the spec.

### Semantic Icons

If your icons have semantic meaning, you'll need to manually add a few things so that your icon is appropriately accessible:

- `aria-hidden="true"` attribute
- Provide a text alternative inside a `<span>` (or similar) element. Also include appropriate CSS to visually hide the element while keeping it accessible to assisitive technologies.
- title attribute on the icon to provide a tooltip for sighted mouse users.

```html
<plus-icon aria-hidden="true" class="fa fa-home" title="Time to destination by car"></plus-icon>
<span class="sr-only">Time to destination by car:</span>
<span>4 minutes</span>
```

In the case of focusable interactive elements, there are various options to include an alternative text or label to the element, without the need for any visually hidden `<span>` or similar. For instance, simply adding the aria-label attribute with a text description to the interactive element itself will be sufficient to provide an accessible alternative name for the element. If you need to provide a visual tooltip on mouseover/focus, we recommend additionally using the title attribute or a custom tooltip solution.

```html
<a href="path/to/shopping/cart" aria-label="View 3 items in your shopping cart">
  <plus-icon aria-hidden="true" class="fa fa-home"></plus-icon>
</a>
```

## Reference

[https://fontawesome.com/v5.15/how-to-use/on-the-web/other-topics/accessibility](https://fontawesome.com/v5.15/how-to-use/on-the-web/other-topics/accessibility)

<Checklist 
    accessibility={false}
    bidirectionality={false}
    cssParts={false}
    cssVariables={false}
    documentation={false}
    examples={false}
    events={false}
    keyboard={false}
    methods={false}
    playground={false}
    properties={false}
    skeleton={false}
    slots={false}
/>

<LastModified />
