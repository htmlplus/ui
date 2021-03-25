```css [style]
  .row {
    display: flex;
    justify-content: center;
  }
  .mx-2 {
    margin: 0 2rem 0 2rem;
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
```

```html [template]
<preview>
 <div class="row">
  <div class="mx-2">
    <button type="button" class="btn-success">
    Mousemove tooltip right
      <plus-tooltip placement="right">
        Mousemove tooltip
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">Mousemove tooltip top
      <plus-tooltip placement="right">
        Mousemove tooltip
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
    Mousemove tooltip left
      <plus-tooltip placement="right">
        Mousemove tooltip
      </plus-tooltip>
    </button>
  </div>
  <div class="mx-2">
    <button type="button" class="btn-success">
      Mousemove tooltip bottom
      <plus-tooltip placement="right">
        Mousemove tooltip
      </plus-tooltip>
    </button>
  </div>
</div>
</preview>
```
