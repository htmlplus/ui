import { P as PlusCore, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{white-space:pre}";
const FORMAT_BYTES_STANDARD = {
  METRIC: {
    base: 1e3,
    unit: "bytes",
    units: [
      ["B", ""],
      ["kB", "kilo"],
      ["MB", "mega"],
      ["GB", "giga"],
      ["TB", "tera"],
      ["PB", "peta"],
      ["EB", "exa"],
      ["ZB", "zetta"],
      ["YB", "yotta"]
    ]
  },
  METRIC_OCTET: {
    base: 1e3,
    unit: "octets",
    units: [
      ["o", ""],
      ["ko", "kilo"],
      ["Mo", "mega"],
      ["Go", "giga"],
      ["To", "tera"],
      ["Po", "peta"],
      ["Eo", "exa"],
      ["Zo", "zetta"],
      ["Yo", "yotta"]
    ]
  },
  IEC: {
    base: 1024,
    unit: "bytes",
    units: [
      ["B", ""],
      ["KiB", "kibi"],
      ["MiB", "mebi"],
      ["GiB", "gibi"],
      ["TiB", "tebi"],
      ["PiB", "pebi"],
      ["EiB", "exbi"],
      ["ZiB", "zebi"],
      ["YiB", "yobi"]
    ]
  },
  IEC_OCTET: {
    base: 1024,
    unit: "octets",
    units: [
      ["o", ""],
      ["Kio", "kibi"],
      ["Mio", "mebi"],
      ["Gio", "gibi"],
      ["Tio", "tebi"],
      ["Pio", "pebi"],
      ["Eio", "exbi"],
      ["Zio", "zebi"],
      ["Yio", "yobi"]
    ]
  }
};
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
let FormatBytes = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.display = "short";
    this.decimals = [0, 1];
    this.separator = " ";
    this.standard = "METRIC";
    this.unit = "auto";
  }
  get formated() {
    if (isNaN(this.value)) return null;
    const bytes = Math.abs(this.value);
    const standard = FORMAT_BYTES_STANDARD[this.standard];
    if (!standard) return null;
    const {
      base,
      unit,
      units
    } = standard;
    let found;
    for (let index = 0; index < units.length; index++) {
      const [short, long] = units[index];
      const from = index ? Math.pow(base, index) : 0;
      const to = Math.pow(base, index + 1);
      found = {
        from,
        long,
        short,
        to
      };
      if (this.unit == "base") break;
      if (this.unit != "auto") {
        if (this.unit == long) break;
        if (units.some(([, long2]) => this.unit == long2)) continue;
      }
      if (bytes >= from && bytes < to) break;
    }
    const decimals = [this.decimals].flat();
    const formatter = new Intl.NumberFormat(this.locale, {
      style: "decimal",
      minimumFractionDigits: decimals[0],
      maximumFractionDigits: decimals[1] || decimals[0]
    });
    let result = "";
    result += this.value < 0 ? "-" : this.signed ? this.value == 0 ? " " : "+" : "";
    result += formatter.format(bytes / ((found == null ? void 0 : found.from) || 1));
    result += this.separator || "";
    result += (found == null ? void 0 : found[this.display]) || "";
    result += this.display == "long" ? unit : "";
    return result;
  }
  render() {
    return this.formated;
  }
};
FormatBytes.tag = "plus-format-bytes";
FormatBytes.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 16
  })
], FormatBytes.prototype, "display", 2);
__decorateClass([
  Property({
    type: 513
  })
], FormatBytes.prototype, "locale", 2);
__decorateClass([
  Property({
    type: 129
  })
], FormatBytes.prototype, "decimals", 2);
__decorateClass([
  Property({
    type: 512
  })
], FormatBytes.prototype, "separator", 2);
__decorateClass([
  Property({
    type: 4
  })
], FormatBytes.prototype, "signed", 2);
__decorateClass([
  Property({
    type: 16
  })
], FormatBytes.prototype, "standard", 2);
__decorateClass([
  Property({
    type: 16
  })
], FormatBytes.prototype, "unit", 2);
__decorateClass([
  Property({
    type: 128
  })
], FormatBytes.prototype, "value", 2);
FormatBytes = __decorateClass([
  Element()
], FormatBytes);
export {
  FormatBytes
};
