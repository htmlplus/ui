```css [style]
.box {
  padding: 12px;
  color: white;
  margin: 4px;
}

.ratio-one {
  width: 40.625%;
  float: right;
}

.one   { background: #08dfc8 }
.two   { background: #ff5449 }
.three { background: #5f9ee9 }
.four  { background: #ffc903 }
.five  { background: #9073c1 }
```

```html [template]
<plus-grid>
  <plus-grid-item xs="6">
    <plus-grid>
      <plus-grid-item xs="12">
        <plus-aspect-ratio value="3/2" class="ratio-one">
          <div class="box one">
            3:2
          </div>
        </plus-aspect-ratio>
      </plus-grid-item>
      <plus-grid-item xs="12">
        <plus-aspect-ratio value="16/9">
          <div class="box two">
            16:9
          </div>
        </plus-aspect-ratio>
      </plus-grid-item>
    </plus-grid>
  </plus-grid-item>
  <plus-grid-item xs="6">
    <plus-grid>
      <plus-grid-item xs="6">
        <plus-aspect-ratio value="1">
          <div class="box three">
            1:1
          </div>
        </plus-aspect-ratio>
      </plus-grid-item>
      <plus-grid-item xs="6" align-self="end">
        <plus-aspect-ratio value="4/3">
          <div class="box four">
            4:3
          </div>
        </plus-aspect-ratio>
      </plus-grid-item>
      <plus-grid-item xs="12">
        <plus-aspect-ratio value="18/6">
          <div class="box five">
            18:6
          </div>
        </plus-aspect-ratio>
      </plus-grid-item>
    </plus-grid>
  </plus-grid-item>
</plus-grid>
```