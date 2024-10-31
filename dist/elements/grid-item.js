import { P as PlusCore, h as html, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ':host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{flex-grow:0;flex-basis:auto;max-width:none;box-sizing:border-box}:host([align-self=auto]){align-self:auto}:host([align-self=stretch]){align-self:stretch}:host([align-self=start]){align-self:flex-start}:host([align-self=center]){align-self:center}:host([align-self=end]){align-self:flex-end}:host([align-self-xs=auto]){align-self:auto}:host([align-self-xs=stretch]){align-self:stretch}:host([align-self-xs=start]){align-self:flex-start}:host([align-self-xs=center]){align-self:center}:host([align-self-xs=end]){align-self:flex-end}@media(min-width: 576px){:host([align-self-sm=auto]){align-self:auto}:host([align-self-sm=stretch]){align-self:stretch}:host([align-self-sm=start]){align-self:flex-start}:host([align-self-sm=center]){align-self:center}:host([align-self-sm=end]){align-self:flex-end}}@media(min-width: 768px){:host([align-self-md=auto]){align-self:auto}:host([align-self-md=stretch]){align-self:stretch}:host([align-self-md=start]){align-self:flex-start}:host([align-self-md=center]){align-self:center}:host([align-self-md=end]){align-self:flex-end}}@media(min-width: 992px){:host([align-self-lg=auto]){align-self:auto}:host([align-self-lg=stretch]){align-self:stretch}:host([align-self-lg=start]){align-self:flex-start}:host([align-self-lg=center]){align-self:center}:host([align-self-lg=end]){align-self:flex-end}}@media(min-width: 1200px){:host([align-self-xl=auto]){align-self:auto}:host([align-self-xl=stretch]){align-self:stretch}:host([align-self-xl=start]){align-self:flex-start}:host([align-self-xl=center]){align-self:center}:host([align-self-xl=end]){align-self:flex-end}}@media(min-width: 1400px){:host([align-self-xxl=auto]){align-self:auto}:host([align-self-xxl=stretch]){align-self:stretch}:host([align-self-xxl=start]){align-self:flex-start}:host([align-self-xxl=center]){align-self:center}:host([align-self-xxl=end]){align-self:flex-end}}:host([xs=auto]){flex-basis:auto;max-width:none}:host([xs=grow]){flex-grow:1;flex-basis:0;max-width:100%}:host([xs="1"]){flex-basis:8.3333333333%;max-width:8.3333333333%}:host([offset-xs="1"]){margin-left:8.3333333333%}:host([order-xs="1"]){order:1}:host([xs="2"]){flex-basis:16.6666666667%;max-width:16.6666666667%}:host([offset-xs="2"]){margin-left:16.6666666667%}:host([order-xs="2"]){order:2}:host([xs="3"]){flex-basis:25%;max-width:25%}:host([offset-xs="3"]){margin-left:25%}:host([order-xs="3"]){order:3}:host([xs="4"]){flex-basis:33.3333333333%;max-width:33.3333333333%}:host([offset-xs="4"]){margin-left:33.3333333333%}:host([order-xs="4"]){order:4}:host([xs="5"]){flex-basis:41.6666666667%;max-width:41.6666666667%}:host([offset-xs="5"]){margin-left:41.6666666667%}:host([order-xs="5"]){order:5}:host([xs="6"]){flex-basis:50%;max-width:50%}:host([offset-xs="6"]){margin-left:50%}:host([order-xs="6"]){order:6}:host([xs="7"]){flex-basis:58.3333333333%;max-width:58.3333333333%}:host([offset-xs="7"]){margin-left:58.3333333333%}:host([order-xs="7"]){order:7}:host([xs="8"]){flex-basis:66.6666666667%;max-width:66.6666666667%}:host([offset-xs="8"]){margin-left:66.6666666667%}:host([order-xs="8"]){order:8}:host([xs="9"]){flex-basis:75%;max-width:75%}:host([offset-xs="9"]){margin-left:75%}:host([order-xs="9"]){order:9}:host([xs="10"]){flex-basis:83.3333333333%;max-width:83.3333333333%}:host([offset-xs="10"]){margin-left:83.3333333333%}:host([order-xs="10"]){order:10}:host([xs="11"]){flex-basis:91.6666666667%;max-width:91.6666666667%}:host([offset-xs="11"]){margin-left:91.6666666667%}:host([order-xs="11"]){order:11}:host([xs="12"]){flex-basis:100%;max-width:100%}:host([offset-xs="12"]){margin-left:100%}:host([order-xs="12"]){order:12}@media(min-width: 576px){:host([sm=auto]){flex-basis:auto;max-width:none}:host([sm=grow]){flex-grow:1;flex-basis:0;max-width:100%}:host([sm="1"]){flex-basis:8.3333333333%;max-width:8.3333333333%}:host([offset-sm="1"]){margin-left:8.3333333333%}:host([order-sm="1"]){order:1}:host([sm="2"]){flex-basis:16.6666666667%;max-width:16.6666666667%}:host([offset-sm="2"]){margin-left:16.6666666667%}:host([order-sm="2"]){order:2}:host([sm="3"]){flex-basis:25%;max-width:25%}:host([offset-sm="3"]){margin-left:25%}:host([order-sm="3"]){order:3}:host([sm="4"]){flex-basis:33.3333333333%;max-width:33.3333333333%}:host([offset-sm="4"]){margin-left:33.3333333333%}:host([order-sm="4"]){order:4}:host([sm="5"]){flex-basis:41.6666666667%;max-width:41.6666666667%}:host([offset-sm="5"]){margin-left:41.6666666667%}:host([order-sm="5"]){order:5}:host([sm="6"]){flex-basis:50%;max-width:50%}:host([offset-sm="6"]){margin-left:50%}:host([order-sm="6"]){order:6}:host([sm="7"]){flex-basis:58.3333333333%;max-width:58.3333333333%}:host([offset-sm="7"]){margin-left:58.3333333333%}:host([order-sm="7"]){order:7}:host([sm="8"]){flex-basis:66.6666666667%;max-width:66.6666666667%}:host([offset-sm="8"]){margin-left:66.6666666667%}:host([order-sm="8"]){order:8}:host([sm="9"]){flex-basis:75%;max-width:75%}:host([offset-sm="9"]){margin-left:75%}:host([order-sm="9"]){order:9}:host([sm="10"]){flex-basis:83.3333333333%;max-width:83.3333333333%}:host([offset-sm="10"]){margin-left:83.3333333333%}:host([order-sm="10"]){order:10}:host([sm="11"]){flex-basis:91.6666666667%;max-width:91.6666666667%}:host([offset-sm="11"]){margin-left:91.6666666667%}:host([order-sm="11"]){order:11}:host([sm="12"]){flex-basis:100%;max-width:100%}:host([offset-sm="12"]){margin-left:100%}:host([order-sm="12"]){order:12}}@media(min-width: 768px){:host([md=auto]){flex-basis:auto;max-width:none}:host([md=grow]){flex-grow:1;flex-basis:0;max-width:100%}:host([md="1"]){flex-basis:8.3333333333%;max-width:8.3333333333%}:host([offset-md="1"]){margin-left:8.3333333333%}:host([order-md="1"]){order:1}:host([md="2"]){flex-basis:16.6666666667%;max-width:16.6666666667%}:host([offset-md="2"]){margin-left:16.6666666667%}:host([order-md="2"]){order:2}:host([md="3"]){flex-basis:25%;max-width:25%}:host([offset-md="3"]){margin-left:25%}:host([order-md="3"]){order:3}:host([md="4"]){flex-basis:33.3333333333%;max-width:33.3333333333%}:host([offset-md="4"]){margin-left:33.3333333333%}:host([order-md="4"]){order:4}:host([md="5"]){flex-basis:41.6666666667%;max-width:41.6666666667%}:host([offset-md="5"]){margin-left:41.6666666667%}:host([order-md="5"]){order:5}:host([md="6"]){flex-basis:50%;max-width:50%}:host([offset-md="6"]){margin-left:50%}:host([order-md="6"]){order:6}:host([md="7"]){flex-basis:58.3333333333%;max-width:58.3333333333%}:host([offset-md="7"]){margin-left:58.3333333333%}:host([order-md="7"]){order:7}:host([md="8"]){flex-basis:66.6666666667%;max-width:66.6666666667%}:host([offset-md="8"]){margin-left:66.6666666667%}:host([order-md="8"]){order:8}:host([md="9"]){flex-basis:75%;max-width:75%}:host([offset-md="9"]){margin-left:75%}:host([order-md="9"]){order:9}:host([md="10"]){flex-basis:83.3333333333%;max-width:83.3333333333%}:host([offset-md="10"]){margin-left:83.3333333333%}:host([order-md="10"]){order:10}:host([md="11"]){flex-basis:91.6666666667%;max-width:91.6666666667%}:host([offset-md="11"]){margin-left:91.6666666667%}:host([order-md="11"]){order:11}:host([md="12"]){flex-basis:100%;max-width:100%}:host([offset-md="12"]){margin-left:100%}:host([order-md="12"]){order:12}}@media(min-width: 992px){:host([lg=auto]){flex-basis:auto;max-width:none}:host([lg=grow]){flex-grow:1;flex-basis:0;max-width:100%}:host([lg="1"]){flex-basis:8.3333333333%;max-width:8.3333333333%}:host([offset-lg="1"]){margin-left:8.3333333333%}:host([order-lg="1"]){order:1}:host([lg="2"]){flex-basis:16.6666666667%;max-width:16.6666666667%}:host([offset-lg="2"]){margin-left:16.6666666667%}:host([order-lg="2"]){order:2}:host([lg="3"]){flex-basis:25%;max-width:25%}:host([offset-lg="3"]){margin-left:25%}:host([order-lg="3"]){order:3}:host([lg="4"]){flex-basis:33.3333333333%;max-width:33.3333333333%}:host([offset-lg="4"]){margin-left:33.3333333333%}:host([order-lg="4"]){order:4}:host([lg="5"]){flex-basis:41.6666666667%;max-width:41.6666666667%}:host([offset-lg="5"]){margin-left:41.6666666667%}:host([order-lg="5"]){order:5}:host([lg="6"]){flex-basis:50%;max-width:50%}:host([offset-lg="6"]){margin-left:50%}:host([order-lg="6"]){order:6}:host([lg="7"]){flex-basis:58.3333333333%;max-width:58.3333333333%}:host([offset-lg="7"]){margin-left:58.3333333333%}:host([order-lg="7"]){order:7}:host([lg="8"]){flex-basis:66.6666666667%;max-width:66.6666666667%}:host([offset-lg="8"]){margin-left:66.6666666667%}:host([order-lg="8"]){order:8}:host([lg="9"]){flex-basis:75%;max-width:75%}:host([offset-lg="9"]){margin-left:75%}:host([order-lg="9"]){order:9}:host([lg="10"]){flex-basis:83.3333333333%;max-width:83.3333333333%}:host([offset-lg="10"]){margin-left:83.3333333333%}:host([order-lg="10"]){order:10}:host([lg="11"]){flex-basis:91.6666666667%;max-width:91.6666666667%}:host([offset-lg="11"]){margin-left:91.6666666667%}:host([order-lg="11"]){order:11}:host([lg="12"]){flex-basis:100%;max-width:100%}:host([offset-lg="12"]){margin-left:100%}:host([order-lg="12"]){order:12}}@media(min-width: 1200px){:host([xl=auto]){flex-basis:auto;max-width:none}:host([xl=grow]){flex-grow:1;flex-basis:0;max-width:100%}:host([xl="1"]){flex-basis:8.3333333333%;max-width:8.3333333333%}:host([offset-xl="1"]){margin-left:8.3333333333%}:host([order-xl="1"]){order:1}:host([xl="2"]){flex-basis:16.6666666667%;max-width:16.6666666667%}:host([offset-xl="2"]){margin-left:16.6666666667%}:host([order-xl="2"]){order:2}:host([xl="3"]){flex-basis:25%;max-width:25%}:host([offset-xl="3"]){margin-left:25%}:host([order-xl="3"]){order:3}:host([xl="4"]){flex-basis:33.3333333333%;max-width:33.3333333333%}:host([offset-xl="4"]){margin-left:33.3333333333%}:host([order-xl="4"]){order:4}:host([xl="5"]){flex-basis:41.6666666667%;max-width:41.6666666667%}:host([offset-xl="5"]){margin-left:41.6666666667%}:host([order-xl="5"]){order:5}:host([xl="6"]){flex-basis:50%;max-width:50%}:host([offset-xl="6"]){margin-left:50%}:host([order-xl="6"]){order:6}:host([xl="7"]){flex-basis:58.3333333333%;max-width:58.3333333333%}:host([offset-xl="7"]){margin-left:58.3333333333%}:host([order-xl="7"]){order:7}:host([xl="8"]){flex-basis:66.6666666667%;max-width:66.6666666667%}:host([offset-xl="8"]){margin-left:66.6666666667%}:host([order-xl="8"]){order:8}:host([xl="9"]){flex-basis:75%;max-width:75%}:host([offset-xl="9"]){margin-left:75%}:host([order-xl="9"]){order:9}:host([xl="10"]){flex-basis:83.3333333333%;max-width:83.3333333333%}:host([offset-xl="10"]){margin-left:83.3333333333%}:host([order-xl="10"]){order:10}:host([xl="11"]){flex-basis:91.6666666667%;max-width:91.6666666667%}:host([offset-xl="11"]){margin-left:91.6666666667%}:host([order-xl="11"]){order:11}:host([xl="12"]){flex-basis:100%;max-width:100%}:host([offset-xl="12"]){margin-left:100%}:host([order-xl="12"]){order:12}}@media(min-width: 1400px){:host([xxl=auto]){flex-basis:auto;max-width:none}:host([xxl=grow]){flex-grow:1;flex-basis:0;max-width:100%}:host([xxl="1"]){flex-basis:8.3333333333%;max-width:8.3333333333%}:host([offset-xxl="1"]){margin-left:8.3333333333%}:host([order-xxl="1"]){order:1}:host([xxl="2"]){flex-basis:16.6666666667%;max-width:16.6666666667%}:host([offset-xxl="2"]){margin-left:16.6666666667%}:host([order-xxl="2"]){order:2}:host([xxl="3"]){flex-basis:25%;max-width:25%}:host([offset-xxl="3"]){margin-left:25%}:host([order-xxl="3"]){order:3}:host([xxl="4"]){flex-basis:33.3333333333%;max-width:33.3333333333%}:host([offset-xxl="4"]){margin-left:33.3333333333%}:host([order-xxl="4"]){order:4}:host([xxl="5"]){flex-basis:41.6666666667%;max-width:41.6666666667%}:host([offset-xxl="5"]){margin-left:41.6666666667%}:host([order-xxl="5"]){order:5}:host([xxl="6"]){flex-basis:50%;max-width:50%}:host([offset-xxl="6"]){margin-left:50%}:host([order-xxl="6"]){order:6}:host([xxl="7"]){flex-basis:58.3333333333%;max-width:58.3333333333%}:host([offset-xxl="7"]){margin-left:58.3333333333%}:host([order-xxl="7"]){order:7}:host([xxl="8"]){flex-basis:66.6666666667%;max-width:66.6666666667%}:host([offset-xxl="8"]){margin-left:66.6666666667%}:host([order-xxl="8"]){order:8}:host([xxl="9"]){flex-basis:75%;max-width:75%}:host([offset-xxl="9"]){margin-left:75%}:host([order-xxl="9"]){order:9}:host([xxl="10"]){flex-basis:83.3333333333%;max-width:83.3333333333%}:host([offset-xxl="10"]){margin-left:83.3333333333%}:host([order-xxl="10"]){order:10}:host([xxl="11"]){flex-basis:91.6666666667%;max-width:91.6666666667%}:host([offset-xxl="11"]){margin-left:91.6666666667%}:host([order-xxl="11"]){order:11}:host([xxl="12"]){flex-basis:100%;max-width:100%}:host([offset-xxl="12"]){margin-left:100%}:host([order-xxl="12"]){order:12}}:host([hide-xs-up]){display:none}@media(min-width: 576px){:host([hide-sm-up]){display:none}}@media(min-width: 768px){:host([hide-md-up]){display:none}}@media(min-width: 992px){:host([hide-lg-up]){display:none}}@media(min-width: 1200px){:host([hide-xl-up]){display:none}}@media(max-width: 767.98px){:host([hide-sm-down]){display:none}}@media(max-width: 991.98px){:host([hide-md-down]){display:none}}@media(max-width: 1199.98px){:host([hide-lg-down]){display:none}}@media(max-width: 1399.98px){:host([hide-xl-down]){display:none}}@media(max-width: 575.98px){:host([hide-xs]){display:none}}@media(min-width: 576px)and (max-width: 767.98px){:host([hide-sm]){display:none}}@media(min-width: 768px)and (max-width: 991.98px){:host([hide-md]){display:none}}@media(min-width: 992px)and (max-width: 1199.98px){:host([hide-lg]){display:none}}@media(min-width: 1200px)and (max-width: 1399.98px){:host([hide-xl]){display:none}}@media(min-width: 1400px){:host([hide-xxl]){display:none}}';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let GridItem = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.alignSelf = "auto";
  }
  render() {
    return html`<slot />`;
  }
};
GridItem.tag = "plus-grid-item";
GridItem.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelf", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelfXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelfSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelfMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelfLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelfXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "alignSelfXxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "xs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "sm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "md", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "lg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "xl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "xxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideXxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hide", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideSmUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideMdUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideLgUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideXlUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideSmDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideMdDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideLgDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideXlDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], GridItem.prototype, "hideXxlDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "offsetXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "offsetSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "offsetMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "offsetLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "offsetXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "offsetXxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "orderXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "orderSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "orderMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "orderLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "orderXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], GridItem.prototype, "orderXxl", 2);
GridItem = __decorateClass([
  Element()
], GridItem);
export {
  GridItem
};
