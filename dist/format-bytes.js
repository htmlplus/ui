import { _ as __decorate, P as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{white-space:pre}";

const FORMAT_BYTES_STANDARD = {
    METRIC: {
        base: 1000,
        unit: 'bytes',
        units: [
            ['B', ''],
            ['kB', 'kilo'],
            ['MB', 'mega'],
            ['GB', 'giga'],
            ['TB', 'tera'],
            ['PB', 'peta'],
            ['EB', 'exa'],
            ['ZB', 'zetta'],
            ['YB', 'yotta']
        ]
    },
    METRIC_OCTET: {
        base: 1000,
        unit: 'octets',
        units: [
            ['o', ''],
            ['ko', 'kilo'],
            ['Mo', 'mega'],
            ['Go', 'giga'],
            ['To', 'tera'],
            ['Po', 'peta'],
            ['Eo', 'exa'],
            ['Zo', 'zetta'],
            ['Yo', 'yotta']
        ]
    },
    IEC: {
        base: 1024,
        unit: 'bytes',
        units: [
            ['B', ''],
            ['KiB', 'kibi'],
            ['MiB', 'mebi'],
            ['GiB', 'gibi'],
            ['TiB', 'tebi'],
            ['PiB', 'pebi'],
            ['EiB', 'exbi'],
            ['ZiB', 'zebi'],
            ['YiB', 'yobi']
        ]
    },
    IEC_OCTET: {
        base: 1024,
        unit: 'octets',
        units: [
            ['o', ''],
            ['Kio', 'kibi'],
            ['Mio', 'mebi'],
            ['Gio', 'gibi'],
            ['Tio', 'tebi'],
            ['Pio', 'pebi'],
            ['Eio', 'exbi'],
            ['Zio', 'zebi'],
            ['Yio', 'yobi']
        ]
    }
};

/**
 * @stable
 */
let FormatBytes = class FormatBytes {
    constructor() {
        /**
         * Specifies the unit will be shown as an abbreviation or not.
         */
        this.display = 'short';
        /**
         * Specifies the number of decimal places.
         * Use an array to specify the minimum and maximum.
         */
        this.decimals = [0, 1];
        /**
         * Specifies the separator between number and unit.
         */
        this.separator = ' ';
        /**
         * Specifies the standard of units.
         * [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) are supported.
         */
        this.standard = 'METRIC';
        /**
         * Specifies the unit in which the result will be returned.
         */
        this.unit = 'auto';
    }
    get formated() {
        if (isNaN(this.value))
            return null;
        const bytes = Math.abs(this.value);
        const standard = FORMAT_BYTES_STANDARD[this.standard];
        if (!standard)
            return null;
        const { base, unit, units } = standard;
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
            if (this.unit == 'base')
                break;
            if (this.unit != 'auto') {
                if (this.unit == long)
                    break;
                if (units.some(([, long]) => this.unit == long))
                    continue;
            }
            if (bytes >= from && bytes < to)
                break;
        }
        const decimals = [this.decimals].flat();
        const formatter = new Intl.NumberFormat(this.locale, {
            style: 'decimal',
            minimumFractionDigits: decimals[0],
            maximumFractionDigits: decimals[1] || decimals[0]
        });
        let result = '';
        result += this.value < 0 ? '-' : this.signed ? this.value == 0 ? ' ' : '+' : '';
        result += formatter.format(bytes / ((found === null || found === void 0 ? void 0 : found.from) || 1));
        result += this.separator || '';
        result += (found === null || found === void 0 ? void 0 : found[this.display]) || '';
        result += this.display == 'long' ? unit : '';
        return result;
    }
    render() {
        return this.formated;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
FormatBytes.TAG = "plus-format-bytes";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
FormatBytes.STYLES = css_248z;
__decorate([
    Property({
        type: 8
    })
], FormatBytes.prototype, "display", void 0);
__decorate([
    Property({
        type: 257
    })
], FormatBytes.prototype, "locale", void 0);
__decorate([
    Property({
        type: 65
    })
], FormatBytes.prototype, "decimals", void 0);
__decorate([
    Property({
        type: 256
    })
], FormatBytes.prototype, "separator", void 0);
__decorate([
    Property({
        type: 2
    })
], FormatBytes.prototype, "signed", void 0);
__decorate([
    Property({
        type: 8
    })
], FormatBytes.prototype, "standard", void 0);
__decorate([
    Property({
        type: 8
    })
], FormatBytes.prototype, "unit", void 0);
__decorate([
    Property({
        type: 64
    })
], FormatBytes.prototype, "value", void 0);
FormatBytes = __decorate([
    Element()
], FormatBytes);

export { FormatBytes };
