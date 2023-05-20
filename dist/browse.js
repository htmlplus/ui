import { _ as __decorate, h as html, e as attributes, f as host, P as Property, E as Event, Q as Query, S as State, M as Method, B as Bind, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{cursor:pointer}input[type=file]{display:none}";

var BrowseError;
(function (BrowseError) {
    BrowseError["Min"] = "MIN";
    BrowseError["Max"] = "MAX";
})(BrowseError || (BrowseError = {}));
var BrowseFileError;
(function (BrowseFileError) {
    BrowseFileError["Accept"] = "ACCEPT";
    BrowseFileError["Min_Size"] = "MIN_SIZE";
    BrowseFileError["Max_Size"] = "MAX_SIZE";
})(BrowseFileError || (BrowseFileError = {}));

/**
 * @slot default - The default slot.
 */
let Browse = class Browse {
    get attributes() {
        const attributes = {};
        if (this.disabled)
            return attributes;
        attributes['onClick'] = this.onClick;
        if (!this.droppable)
            return attributes;
        attributes['dragging'] = this.dragging;
        attributes['onDragLeave'] = this.onDragLeave;
        attributes['onDragOver'] = this.onDragOver;
        attributes['onDrop'] = this.onDrop;
        return attributes;
    }
    get types() {
        return (this.accept || '').split(',').map(type => type.trim());
    }
    /**
     * Opens the browse dialog.
     */
    browse() {
        this.$input.click();
    }
    do(files) {
        const detail = {
            errors: [],
            files: []
        };
        if (this.min > files.length)
            detail.errors.push(BrowseError.Min);
        if (this.max < files.length)
            detail.errors.push(BrowseError.Max);
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const value = {
                errors: [],
                file
            };
            for (const type of this.types) {
                const isMime = /\//.exec(type);
                const isPattern = /\/*/.exec(type);
                if (!isMime && value.file.name.endsWith(type))
                    break;
                if (isMime && !isPattern && value.file.type === type)
                    break;
                if (isMime && isPattern && value.file.type.startsWith(type.slice(0, -1)))
                    break;
                value.errors.push(BrowseFileError.Accept);
            }
            if (this.minSize > value.file.size)
                value.errors.push(BrowseFileError.Min_Size);
            if (this.maxSize < value.file.size)
                value.errors.push(BrowseFileError.Max_Size);
            detail.files.push(value);
        }
        const error = detail.errors.length || detail.files.some(file => file.errors.length);
        const filtered = detail.files.filter(file => !error || file.errors.length);
        const data = Object.assign({}, detail, {
            files: filtered
        });
        error ? this.plusError(data) : this.plusSuccess(data);
        this.plusChange(detail);
    }
    onClick() {
        this.$input.click();
    }
    onChange(event) {
        const files = event.target.files;
        if (!files.length)
            return;
        this.do(files);
    }
    onDragLeave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.dragging = false;
        }, 50);
    }
    onDragOver(event) {
        clearTimeout(this.timeout);
        event.preventDefault();
        this.dragging = true;
    }
    onDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this.dragging = false;
        this.do(event.dataTransfer.files);
    }
    render() {
        return html `${attributes(host(this), [this.attributes])}
        <slot />
        <input accept=${this.accept} multiple=${this.multiple} type="file" onChange=${this.onChange} onClick=${event => event.stopPropagation()} />
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Browse.TAG = "plus-browse";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Browse.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], Browse.prototype, "accept", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Browse.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Browse.prototype, "droppable", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse.prototype, "min", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse.prototype, "max", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse.prototype, "minSize", void 0);
__decorate([
    Property({
        type: 64
    })
], Browse.prototype, "maxSize", void 0);
__decorate([
    Property({
        type: 2
    })
], Browse.prototype, "multiple", void 0);
__decorate([
    Event()
], Browse.prototype, "plusChange", void 0);
__decorate([
    Event()
], Browse.prototype, "plusError", void 0);
__decorate([
    Event()
], Browse.prototype, "plusSuccess", void 0);
__decorate([
    Query('input')
], Browse.prototype, "$input", void 0);
__decorate([
    State()
], Browse.prototype, "dragging", void 0);
__decorate([
    Method()
], Browse.prototype, "browse", null);
__decorate([
    Bind()
], Browse.prototype, "onClick", null);
__decorate([
    Bind()
], Browse.prototype, "onChange", null);
__decorate([
    Bind()
], Browse.prototype, "onDragLeave", null);
__decorate([
    Bind()
], Browse.prototype, "onDragOver", null);
__decorate([
    Bind()
], Browse.prototype, "onDrop", null);
Browse = __decorate([
    Element()
], Browse);

export { Browse };
