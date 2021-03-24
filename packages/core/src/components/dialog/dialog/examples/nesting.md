```css [style]
plus-grid-item {
  text-align: center;
}
```

```html [template]
<fragment>
  <plus-grid justify-content="evenly" gutter="md">
    <plus-grid-item xs="12" sm="auto">
      <plus-dialog-toggler connector="dialog-nesting-1">
        Open Dialog 1
      </plus-dialog-toggler>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-dialog-toggler connector="dialog-nesting-2">
        Open Dialog 2
      </plus-dialog-toggler>
    </plus-grid-item>
    <plus-grid-item xs="12" sm="auto">
      <plus-dialog-toggler connector="dialog-nesting-3">
        Open Dialog 3
      </plus-dialog-toggler>
    </plus-grid-item>
  </plus-grid>
  <plus-dialog class="fade" connector="dialog-nesting-1" size="xl">
    <plus-dialog-content>
      <plus-dialog-header>
        Dialog 1
      </plus-dialog-header>
      <plus-dialog-body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nibh eros, luctus in lacus eu, eleifend
          ultricies ipsum. Morbi sit amet diam et erat pulvinar ultricies in vel erat. Vestibulum sit amet posuere
          lacus, gravida semper libero. Praesent sed nisi sed lorem posuere consequat. Nunc vehicula fermentum
          hendrerit. Mauris aliquam ornare laoreet. Maecenas cursus nec ipsum et tempus. Sed pretium odio bibendum,
          pharetra nisl sed, scelerisque ipsum. Nam egestas interdum risus et gravida. Suspendisse aliquam leo ac leo
          fermentum, ac accumsan purus vestibulum. Integer facilisis tincidunt urna vel accumsan. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas et elit imperdiet, gravida urna
          tempus, fringilla nisl.
        </p>
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler connector="dialog-nesting-2">
          Open Dialog 2
        </plus-dialog-toggler>
        <plus-dialog-toggler>
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
  <plus-dialog class="fade" connector="dialog-nesting-2" size="lg">
    <plus-dialog-content>
      <plus-dialog-header>
        Dialog 2
      </plus-dialog-header>
      <plus-dialog-body>
        <p>
          Nam a gravida lorem. Curabitur sagittis vitae quam vitae dignissim. Curabitur eget sollicitudin urna, vitae
          venenatis massa. Aliquam nulla dolor, lobortis at mauris non, gravida dignissim nulla. Integer ac ultricies
          nisl. Duis aliquam sem eu dui porttitor lobortis. Ut luctus rhoncus tincidunt. Vestibulum consequat risus non
          diam consectetur, bibendum molestie enim placerat. Morbi pretium sem sit amet dictum feugiat. Fusce gravida,
          eros ac bibendum ullamcorper, sapien nunc vulputate elit, quis iaculis sapien ligula eget nisi. Duis erat
          urna, porttitor non massa at, porttitor varius mauris. In lobortis massa dui, et consectetur mauris iaculis
          vitae. Vivamus suscipit, risus vitae viverra auctor, enim sem lacinia nisl, vel dictum risus dolor at felis.
          In hac habitasse platea dictumst. Donec ac urna ac sapien euismod vulputate.
        </p>
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler connector="dialog-nesting-3">
          Open Dialog 3
        </plus-dialog-toggler>
        <plus-dialog-toggler>
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
  <plus-dialog class="fade" connector="dialog-nesting-3" xs="sm">
    <plus-dialog-content>
      <plus-dialog-header>
        Dialog 3
      </plus-dialog-header>
      <plus-dialog-body>
        <p>
          Proin sapien enim, pellentesque eget urna ut, mollis tincidunt quam. Pellentesque eu orci et leo dapibus
          sagittis in nec tellus. Vivamus porta felis turpis, ac vehicula felis tristique at. Integer at lacus odio.
          Donec ornare turpis eu cursus finibus. Suspendisse cursus vestibulum lacus vel porta. Nam eget nibh eu ante
          ultrices aliquet. Nullam quis ligula faucibus, aliquam tellus quis, accumsan tortor. Integer at leo dictum,
          luctus dui ac, suscipit turpis. Sed pharetra finibus sapien sed fermentum. In viverra est sagittis sagittis
          maximus.
        </p>
      </plus-dialog-body>
      <plus-dialog-footer>
        <plus-dialog-toggler>
          Close
        </plus-dialog-toggler>
      </plus-dialog-footer>
    </plus-dialog-content>
  </plus-dialog>
</fragment>
```