```css [style]
  .row {
    display: flex;
    justify-content: center;
  }

  .mx-2 {
    margin: 0 2rem 0 2rem;
  }

  .mt-2 {
    margin-top: 2rem;
  }

  .btn-success {
    background-color: #81b541;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
    min-width: 200px;
    cursor: pointer;
    padding: 10px 15px 10px 15px;
  }

  p {
    margin: 0;
    padding: 15px;
    text-align: justify;
  }
```

```html [template]
<preview>
 <div class="row mt-2">
  <div class="mx-2">
    <button type="button" class="btn-success">
      Mousemove tooltip click
      <plus-tooltip placement="bottom" trigger="click">
        Mousemove tooltip
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2" style="direction: rtl">
    <button type="button" class="btn-success" id="HoverTest">
      Mousemove tooltip hover
      <plus-tooltip placement="left-top" trigger="mouseover">
        Mousemove tooltip
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <plus-tooltip placement="right-top" trigger="mouseover">
      Mousemove tooltip
      <button type="button" class="btn-success" slot="activator">
        Tooltip wrapper
      </button>
    </plus-tooltip>
  </div>
  <div class="mx-2" style="direction: rtl">
    <button type="button" class="btn-success" id="HoverTest">
      Mousemove direction
      <plus-tooltip placement="left-top" trigger="mouseover">
        left-top -> right->top
      </plus-tooltip>
    </button>
  </div>
</div>
<div class="row mt-2">
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip offset X
      <plus-tooltip placement="bottom" offset-x="10">
        Horizontal offset 10px
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip offset Y
      <plus-tooltip placement="bottom" offset-y="10">
        Vertical offset 10px
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Mousemove tooltip Click
      <plus-tooltip placement="bottom" offset="10">
        Offset to both (X and Y)
      </plus-tooltip>
    </button>
  </div>
</div>
<div class="row mt-2">
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip top start placement
      <plus-tooltip placement="top-start">
        top-start
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip top center placement
      <plus-tooltip placement="top">
        top
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip top end placement
      <plus-tooltip placement="top-end">
        top-end
      </plus-tooltip>
    </button>
  </div>
</div>
<div class="row mt-2">
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip right start placement
      <plus-tooltip placement="right-start">
        right-start
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip right center placement
      <plus-tooltip placement="right">
        right
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip right end placement
      <plus-tooltip placement="right-end">
        right-end
      </plus-tooltip>
    </button>
  </div>
</div>
<div class="row mt-2">
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip bottom start placement
      <plus-tooltip placement="bottom-start">
        bottom-start
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip bottom center placement
      <plus-tooltip placement="bottom">
        bottom
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip bottom end placement
      <plus-tooltip placement="bottom-end">
        bottom-end
      </plus-tooltip>
    </button>
  </div>
</div>
<div class="row mt-2">
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip left start placement
      <plus-tooltip placement="left-start">
        left-start
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip left center placement
      <plus-tooltip placement="left">
        left
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Tooltip left end placement
      <plus-tooltip placement="left-end">
        left-end
      </plus-tooltip>
    </button>
  </div>
</div>
</preview>
```
