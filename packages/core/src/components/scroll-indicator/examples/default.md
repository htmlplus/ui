```css [style]
   .container {
    max-width: 570px;
    margin-left: auto;
    margin-right: auto;
  }

  .p-1 {
    padding: 1rem;
  }

  .bg-banana {
    background-color: gold;
  }

  .text-beauty {
    text-align: justify;
    line-height: 22px;
    font-weight: 800;
    font-family: cursive;
  }

  .indicator {
    position: fixed;
    top: 0;
    z-index: 1;
    height: 8px;
    background: dodgerblue;
    width: 0;
  }
```

```tsx [script]
class {

  indicator = document.getElementById("indicator")

  handleScrollIndiicator(v) {
    indicator.style.width = `${v}%`;
  }

  render() {
    return (
      <div>
        <div class="indicator" id="indicator"/>
        <div class="container">
          <plus-scroll-indicator scrolled={v=>handleScrollIndiicator(v)} >
            <div class="p-1 text-beauty bg-banana">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna
              aliqua. Potenti nullam ac tortor vitae purus faucibus ornare. Id volutpat lacus laoreet non curabitur.
              Mauris a
              diam
              maecenas sed enim ut sem. Fames ac turpis egestas integer eget. Netus et malesuada fames ac turpis egestas
              sed.
              Sed
              vulputate odio ut enim blandit. Pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies lacus sed
              turpis
              tincidunt id aliquet risus feugiat in. Lacus sed viverra tellus in hac. Morbi leo urna molestie at. Id
              neque
              aliquam
              vestibulum morbi blandit cursus risus at ultrices.

              Vulputate mi sit amet mauris. Pulvinar mattis nunc sed blandit libero volutpat. Odio pellentesque diam
              volutpat
              commodo sed egestas egestas fringilla phasellus. Enim tortor at auctor urna nunc id. Quam viverra orci
              sagittis eu
              volutpat odio facilisis mauris sit. Sed pulvinar proin gravida hendrerit lectus a. Lectus arcu bibendum at
              varius
              vel pharetra. Risus nullam eget felis eget nunc lobortis mattis. Nisi quis eleifend quam adipiscing.
              Cursus risus
              at
              ultrices mi tempus. Morbi tincidunt augue interdum velit euismod in pellentesque.

              Id interdum velit laoreet id donec ultrices tincidunt. Maecenas pharetra convallis posuere morbi leo urna.
              Porttitor
              rhoncus dolor purus non. Sem nulla pharetra diam sit amet. Imperdiet proin fermentum leo vel. Ornare
              lectus sit
              amet
              est placerat in egestas erat imperdiet. Nascetur ridiculus mus mauris vitae ultricies leo integer.
              Consequat nisl
              vel pretium lectus. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Morbi tempus iaculis
              urna id.
              Diam quis enim lobortis scelerisque fermentum. Amet nisl purus in mollis nunc sed. Pulvinar sapien et
              ligula
              ullamcorper malesuada proin libero nunc consequat. Adipiscing enim eu turpis egestas pretium. Augue
              interdum velit
              euismod in. Diam phasellus vestibulum lorem sed risus.

              In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Lacus vestibulum sed arcu non odio euismod
              lacinia
              at. At erat pellentesque adipiscing commodo elit at imperdiet. Lorem ipsum dolor sit amet consectetur
              adipiscing
              elit. Duis ut diam quam nulla. Pellentesque diam volutpat commodo sed. Mi in nulla posuere sollicitudin
              aliquam
              ultrices. Dui faucibus in ornare quam viverra orci. Urna condimentum mattis pellentesque id. Vitae proin
              sagittis
              nisl rhoncus mattis rhoncus urna neque. Scelerisque fermentum dui faucibus in ornare. Sed arcu non odio
              euismod.
              Id
              consectetur purus ut faucibus pulvinar. In vitae turpis massa sed elementum tempus. Proin nibh nisl
              condimentum id
              venenatis. Convallis a cras semper auctor. Neque laoreet suspendisse interdum consectetur libero id
              faucibus nisl
              tincidunt. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nec ullamcorper sit amet
              risus
              nullam eget felis eget nunc.

              In nibh mauris cursus mattis molestie a. Sit amet luctus venenatis lectus magna fringilla urna. Proin
              sagittis
              nisl
              rhoncus mattis rhoncus. At augue eget arcu dictum varius duis. Ac turpis egestas sed tempus. In fermentum
              et
              sollicitudin ac. Risus nec feugiat in fermentum posuere urna. Massa eget egestas purus viverra accumsan
              in.
              Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Neque volutpat ac tincidunt vitae
              semper
              quis lectus. Amet consectetur adipiscing elit pellentesque habitant. Quisque egestas diam in arcu cursus
              euismod
              quis viverra. Cursus turpis massa tincidunt dui ut ornare lectus. Maecenas volutpat blandit aliquam etiam
              erat
              velit
              scelerisque in dictum.

              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna
              aliqua. Potenti nullam ac tortor vitae purus faucibus ornare. Id volutpat lacus laoreet non curabitur.
              Mauris a
              diam
              maecenas sed enim ut sem. Fames ac turpis egestas integer eget. Netus et malesuada fames ac turpis egestas
              sed.
              Sed
              vulputate odio ut enim blandit. Pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies lacus sed
              turpis
              tincidunt id aliquet risus feugiat in. Lacus sed viverra tellus in hac. Morbi leo urna molestie at. Id
              neque
              aliquam
              vestibulum morbi blandit cursus risus at ultrices.

              Vulputate mi sit amet mauris. Pulvinar mattis nunc sed blandit libero volutpat. Odio pellentesque diam
              volutpat
              commodo sed egestas egestas fringilla phasellus. Enim tortor at auctor urna nunc id. Quam viverra orci
              sagittis eu
              volutpat odio facilisis mauris sit. Sed pulvinar proin gravida hendrerit lectus a. Lectus arcu bibendum at
              varius
              vel pharetra. Risus nullam eget felis eget nunc lobortis mattis. Nisi quis eleifend quam adipiscing.
              Cursus risus
              at
              ultrices mi tempus. Morbi tincidunt augue interdum velit euismod in pellentesque.

              Id interdum velit laoreet id donec ultrices tincidunt. Maecenas pharetra convallis posuere morbi leo urna.
              Porttitor
              rhoncus dolor purus non. Sem nulla pharetra diam sit amet. Imperdiet proin fermentum leo vel. Ornare
              lectus sit
              amet
              est placerat in egestas erat imperdiet. Nascetur ridiculus mus mauris vitae ultricies leo integer.
              Consequat nisl
              vel pretium lectus. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Morbi tempus iaculis
              urna id.
              Diam quis enim lobortis scelerisque fermentum. Amet nisl purus in mollis nunc sed. Pulvinar sapien et
              ligula
              ullamcorper malesuada proin libero nunc consequat. Adipiscing enim eu turpis egestas pretium. Augue
              interdum velit
              euismod in. Diam phasellus vestibulum lorem sed risus.

              In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Lacus vestibulum sed arcu non odio euismod
              lacinia
              at. At erat pellentesque adipiscing commodo elit at imperdiet. Lorem ipsum dolor sit amet consectetur
              adipiscing
              elit. Duis ut diam quam nulla. Pellentesque diam volutpat commodo sed. Mi in nulla posuere sollicitudin
              aliquam
              ultrices. Dui faucibus in ornare quam viverra orci. Urna condimentum mattis pellentesque id. Vitae proin
              sagittis
              nisl rhoncus mattis rhoncus urna neque. Scelerisque fermentum dui faucibus in ornare. Sed arcu non odio
              euismod.
              Id
              consectetur purus ut faucibus pulvinar. In vitae turpis massa sed elementum tempus. Proin nibh nisl
              condimentum id
              venenatis. Convallis a cras semper auctor. Neque laoreet suspendisse interdum consectetur libero id
              faucibus nisl
              tincidunt. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nec ullamcorper sit amet
              risus
              nullam eget felis eget nunc.

              In nibh mauris cursus mattis molestie a. Sit amet luctus venenatis lectus magna fringilla urna. Proin
              sagittis
              nisl
              rhoncus mattis rhoncus. At augue eget arcu dictum varius duis. Ac turpis egestas sed tempus. In fermentum
              et
              sollicitudin ac. Risus nec feugiat in fermentum posuere urna. Massa eget egestas purus viverra accumsan
              in.
              Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Neque volutpat ac tincidunt vitae
              semper
              quis lectus. Amet consectetur adipiscing elit pellentesque habitant. Quisque egestas diam in arcu cursus
              euismod
              quis viverra. Cursus turpis massa tincidunt dui ut ornare lectus. Maecenas volutpat blandit aliquam etiam
              erat
              velit
              scelerisque in dictum.
            </div>
          </plus-scroll-indicator>
        </div>
      </div>
    )
  }
}
```

```html [javascript:template]
<div>
  <div class="indicator" id="indicator"></div>
  <div class="container">
    <plus-scroll-indicator id="scroll">
      <div class="p-1 text-beauty bg-banana">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna
        aliqua. Potenti nullam ac tortor vitae purus faucibus ornare. Id volutpat lacus laoreet non curabitur. Mauris a
        diam
        maecenas sed enim ut sem. Fames ac turpis egestas integer eget. Netus et malesuada fames ac turpis egestas sed.
        Sed
        vulputate odio ut enim blandit. Pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies lacus sed turpis
        tincidunt id aliquet risus feugiat in. Lacus sed viverra tellus in hac. Morbi leo urna molestie at. Id neque
        aliquam
        vestibulum morbi blandit cursus risus at ultrices.

        Vulputate mi sit amet mauris. Pulvinar mattis nunc sed blandit libero volutpat. Odio pellentesque diam volutpat
        commodo sed egestas egestas fringilla phasellus. Enim tortor at auctor urna nunc id. Quam viverra orci sagittis eu
        volutpat odio facilisis mauris sit. Sed pulvinar proin gravida hendrerit lectus a. Lectus arcu bibendum at varius
        vel pharetra. Risus nullam eget felis eget nunc lobortis mattis. Nisi quis eleifend quam adipiscing. Cursus risus
        at
        ultrices mi tempus. Morbi tincidunt augue interdum velit euismod in pellentesque.

        Id interdum velit laoreet id donec ultrices tincidunt. Maecenas pharetra convallis posuere morbi leo urna.
        Porttitor
        rhoncus dolor purus non. Sem nulla pharetra diam sit amet. Imperdiet proin fermentum leo vel. Ornare lectus sit
        amet
        est placerat in egestas erat imperdiet. Nascetur ridiculus mus mauris vitae ultricies leo integer. Consequat nisl
        vel pretium lectus. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Morbi tempus iaculis urna id.
        Diam quis enim lobortis scelerisque fermentum. Amet nisl purus in mollis nunc sed. Pulvinar sapien et ligula
        ullamcorper malesuada proin libero nunc consequat. Adipiscing enim eu turpis egestas pretium. Augue interdum velit
        euismod in. Diam phasellus vestibulum lorem sed risus.

        In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Lacus vestibulum sed arcu non odio euismod lacinia
        at. At erat pellentesque adipiscing commodo elit at imperdiet. Lorem ipsum dolor sit amet consectetur adipiscing
        elit. Duis ut diam quam nulla. Pellentesque diam volutpat commodo sed. Mi in nulla posuere sollicitudin aliquam
        ultrices. Dui faucibus in ornare quam viverra orci. Urna condimentum mattis pellentesque id. Vitae proin sagittis
        nisl rhoncus mattis rhoncus urna neque. Scelerisque fermentum dui faucibus in ornare. Sed arcu non odio euismod.
        Id
        consectetur purus ut faucibus pulvinar. In vitae turpis massa sed elementum tempus. Proin nibh nisl condimentum id
        venenatis. Convallis a cras semper auctor. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl
        tincidunt. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nec ullamcorper sit amet risus
        nullam eget felis eget nunc.

        In nibh mauris cursus mattis molestie a. Sit amet luctus venenatis lectus magna fringilla urna. Proin sagittis
        nisl
        rhoncus mattis rhoncus. At augue eget arcu dictum varius duis. Ac turpis egestas sed tempus. In fermentum et
        sollicitudin ac. Risus nec feugiat in fermentum posuere urna. Massa eget egestas purus viverra accumsan in.
        Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Neque volutpat ac tincidunt vitae semper
        quis lectus. Amet consectetur adipiscing elit pellentesque habitant. Quisque egestas diam in arcu cursus euismod
        quis viverra. Cursus turpis massa tincidunt dui ut ornare lectus. Maecenas volutpat blandit aliquam etiam erat
        velit
        scelerisque in dictum.

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna
        aliqua. Potenti nullam ac tortor vitae purus faucibus ornare. Id volutpat lacus laoreet non curabitur. Mauris a
        diam
        maecenas sed enim ut sem. Fames ac turpis egestas integer eget. Netus et malesuada fames ac turpis egestas sed.
        Sed
        vulputate odio ut enim blandit. Pretium nibh ipsum consequat nisl vel pretium lectus. Ultricies lacus sed turpis
        tincidunt id aliquet risus feugiat in. Lacus sed viverra tellus in hac. Morbi leo urna molestie at. Id neque
        aliquam
        vestibulum morbi blandit cursus risus at ultrices.

        Vulputate mi sit amet mauris. Pulvinar mattis nunc sed blandit libero volutpat. Odio pellentesque diam volutpat
        commodo sed egestas egestas fringilla phasellus. Enim tortor at auctor urna nunc id. Quam viverra orci sagittis eu
        volutpat odio facilisis mauris sit. Sed pulvinar proin gravida hendrerit lectus a. Lectus arcu bibendum at varius
        vel pharetra. Risus nullam eget felis eget nunc lobortis mattis. Nisi quis eleifend quam adipiscing. Cursus risus
        at
        ultrices mi tempus. Morbi tincidunt augue interdum velit euismod in pellentesque.

        Id interdum velit laoreet id donec ultrices tincidunt. Maecenas pharetra convallis posuere morbi leo urna.
        Porttitor
        rhoncus dolor purus non. Sem nulla pharetra diam sit amet. Imperdiet proin fermentum leo vel. Ornare lectus sit
        amet
        est placerat in egestas erat imperdiet. Nascetur ridiculus mus mauris vitae ultricies leo integer. Consequat nisl
        vel pretium lectus. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Morbi tempus iaculis urna id.
        Diam quis enim lobortis scelerisque fermentum. Amet nisl purus in mollis nunc sed. Pulvinar sapien et ligula
        ullamcorper malesuada proin libero nunc consequat. Adipiscing enim eu turpis egestas pretium. Augue interdum velit
        euismod in. Diam phasellus vestibulum lorem sed risus.

        In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Lacus vestibulum sed arcu non odio euismod lacinia
        at. At erat pellentesque adipiscing commodo elit at imperdiet. Lorem ipsum dolor sit amet consectetur adipiscing
        elit. Duis ut diam quam nulla. Pellentesque diam volutpat commodo sed. Mi in nulla posuere sollicitudin aliquam
        ultrices. Dui faucibus in ornare quam viverra orci. Urna condimentum mattis pellentesque id. Vitae proin sagittis
        nisl rhoncus mattis rhoncus urna neque. Scelerisque fermentum dui faucibus in ornare. Sed arcu non odio euismod.
        Id
        consectetur purus ut faucibus pulvinar. In vitae turpis massa sed elementum tempus. Proin nibh nisl condimentum id
        venenatis. Convallis a cras semper auctor. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl
        tincidunt. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Nec ullamcorper sit amet risus
        nullam eget felis eget nunc.

        In nibh mauris cursus mattis molestie a. Sit amet luctus venenatis lectus magna fringilla urna. Proin sagittis
        nisl
        rhoncus mattis rhoncus. At augue eget arcu dictum varius duis. Ac turpis egestas sed tempus. In fermentum et
        sollicitudin ac. Risus nec feugiat in fermentum posuere urna. Massa eget egestas purus viverra accumsan in.
        Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Neque volutpat ac tincidunt vitae semper
        quis lectus. Amet consectetur adipiscing elit pellentesque habitant. Quisque egestas diam in arcu cursus euismod
        quis viverra. Cursus turpis massa tincidunt dui ut ornare lectus. Maecenas volutpat blandit aliquam etiam erat
        velit
        scelerisque in dictum.
      </div>
    </plus-scroll-indicator>
  </div>
</div>
```

```js [javascript:script]
scroll.addEventListener('scrolled', handleShowScrolled)

function handleShowScrolled(e) {
  indicator.style.width = `${e.detail}%`;
}
```
