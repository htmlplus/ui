/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

// APIs
const API_CONNECTED = Symbol();
const API_HOST = Symbol();
const API_INSTANCE = Symbol();
const API_LOCKED = Symbol();
const API_REQUEST = Symbol();
const API_RENDER_COMPLETED = Symbol();
const API_STACKS = Symbol();
// lifecycle
const LIFECYCLE_ADOPTED = 'adoptedCallback';
const LIFECYCLE_CONNECT = 'connectCallback';
const LIFECYCLE_CONNECTED = 'connectedCallback';
const LIFECYCLE_CONSTRUCTED = 'constructedCallback';
const LIFECYCLE_DISCONNECTED = 'disconnectedCallback';
const LIFECYCLE_LOADED = 'loadedCallback';
const LIFECYCLE_UPDATE = 'updateCallback';
const LIFECYCLE_UPDATED = 'updatedCallback';
// methods
const METHOD_RENDER = 'render';
// statics
const STATIC_MEMBERS = 'MEMBERS';
const STATIC_STYLES = 'STYLES';
const STATIC_TAG = 'TAG';
// types
const TYPE_ARRAY = 2 ** 0;
const TYPE_BOOLEAN = 2 ** 1;
const TYPE_DATE = 2 ** 2;
const TYPE_FUNCTION = 2 ** 4;
const TYPE_NULL = 2 ** 5;
const TYPE_NUMBER = 2 ** 6;
const TYPE_OBJECT = 2 ** 7;
const TYPE_UNDEFINED = 2 ** 9;

const addMember = (target, key, data) => {
    var _a;
    target[_a = STATIC_MEMBERS] || (target[_a] = {});
    target[STATIC_MEMBERS][key] = data;
};

const appendToMethod = (target, propertyKey, handler) => {
    // Gets the previous function
    const previous = target[propertyKey];
    // Creates new function
    function next(...parameters) {
        // Calls the previous
        const result = previous === null || previous === void 0 ? void 0 : previous.bind(this)(...parameters);
        // Calls the appended
        handler.bind(this)(...parameters);
        // Returns the result
        return result;
    }
    // Replaces the next with the previous one
    target[propertyKey] = next;
};

const outsides = [];
/**
 * TODO
 */
const off = (target, type, handler, options) => {
    if (type != 'outside')
        return target.removeEventListener(type, handler, options);
    const index = outsides.findIndex((outside) => outside.target == target && outside.handler == handler && outside.options == options);
    const outside = outsides[index];
    if (!outside)
        return;
    off(document, outside.type, outside.callback, outside.options);
    outsides.splice(index, 1);
};
/**
 * TODO
 */
const on = (target, type, handler, options) => {
    if (type != 'outside')
        return target.addEventListener(type, handler, options);
    const callback = (event) => {
        !event.composedPath().some((item) => item == target) && handler(event);
    };
    type = 'ontouchstart' in window.document.documentElement ? 'touchstart' : 'click';
    on(document, type, callback, options);
    outsides.push({
        target,
        type,
        handler,
        options,
        callback
    });
};

const isEvent = (input) => {
    return !!(input === null || input === void 0 ? void 0 : input.match(/on[A-Z]\w+/g));
};

const toEvent = (input) => {
    return input === null || input === void 0 ? void 0 : input.slice(2).toLowerCase();
};

// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
// Used to iterate over the initial split result and separate numbers.
const SPLIT_SEPARATE_NUMBER_RE = /(\d)\p{Ll}|(\p{L})\d/u;
// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
// The replacement value for splits.
const SPLIT_REPLACE_VALUE = "$1\0$2";
// The default characters to keep after transforming case.
const DEFAULT_PREFIX_SUFFIX_CHARACTERS = "";
/**
 * Split any cased input strings into an array of words.
 */
function split(value) {
    let result = value.trim();
    result = result
        .replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE)
        .replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
    result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
    let start = 0;
    let end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    if (start === end)
        return [];
    while (result.charAt(end - 1) === "\0")
        end--;
    return result.slice(start, end).split(/\0/g);
}
/**
 * Split the input string into an array of words, separating numbers.
 */
function splitSeparateNumbers(value) {
    const words = split(value);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const match = SPLIT_SEPARATE_NUMBER_RE.exec(word);
        if (match) {
            const offset = match.index + (match[1] ?? match[2]).length;
            words.splice(i, 1, word.slice(0, offset), word.slice(offset));
        }
    }
    return words;
}
/**
 * Convert a string to space separated lower case (`foo bar`).
 */
function noCase(input, options) {
    const [prefix, words, suffix] = splitPrefixSuffix(input, options);
    return (prefix +
        words.map(lowerFactory(options?.locale)).join(options?.delimiter ?? " ") +
        suffix);
}
/**
 * Convert a string to camel case (`fooBar`).
 */
function camelCase(input, options) {
    const [prefix, words, suffix] = splitPrefixSuffix(input, options);
    const lower = lowerFactory(options?.locale);
    const upper = upperFactory(options?.locale);
    const transform = options?.mergeAmbiguousCharacters
        ? capitalCaseTransformFactory(lower, upper)
        : pascalCaseTransformFactory(lower, upper);
    return (prefix +
        words
            .map((word, index) => {
            if (index === 0)
                return lower(word);
            return transform(word, index);
        })
            .join(options?.delimiter ?? "") +
        suffix);
}
/**
 * Convert a string to pascal case (`FooBar`).
 */
function pascalCase(input, options) {
    const [prefix, words, suffix] = splitPrefixSuffix(input, options);
    const lower = lowerFactory(options?.locale);
    const upper = upperFactory(options?.locale);
    const transform = options?.mergeAmbiguousCharacters
        ? capitalCaseTransformFactory(lower, upper)
        : pascalCaseTransformFactory(lower, upper);
    return prefix + words.map(transform).join(options?.delimiter ?? "") + suffix;
}
/**
 * Convert a string to kebab case (`foo-bar`).
 */
function kebabCase(input, options) {
    return noCase(input, { delimiter: "-", ...options });
}
function lowerFactory(locale) {
    return locale === false
        ? (input) => input.toLowerCase()
        : (input) => input.toLocaleLowerCase(locale);
}
function upperFactory(locale) {
    return locale === false
        ? (input) => input.toUpperCase()
        : (input) => input.toLocaleUpperCase(locale);
}
function capitalCaseTransformFactory(lower, upper) {
    return (word) => `${upper(word[0])}${lower(word.slice(1))}`;
}
function pascalCaseTransformFactory(lower, upper) {
    return (word, index) => {
        const char0 = word[0];
        const initial = index > 0 && char0 >= "0" && char0 <= "9" ? "_" + char0 : upper(char0);
        return initial + lower(word.slice(1));
    };
}
function splitPrefixSuffix(input, options = {}) {
    const splitFn = options.split ?? (options.separateNumbers ? splitSeparateNumbers : split);
    const prefixCharacters = options.prefixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
    const suffixCharacters = options.suffixCharacters ?? DEFAULT_PREFIX_SUFFIX_CHARACTERS;
    let prefixIndex = 0;
    let suffixIndex = input.length;
    while (prefixIndex < input.length) {
        const char = input.charAt(prefixIndex);
        if (!prefixCharacters.includes(char))
            break;
        prefixIndex++;
    }
    while (suffixIndex > prefixIndex) {
        const index = suffixIndex - 1;
        const char = input.charAt(index);
        if (!suffixCharacters.includes(char))
            break;
        suffixIndex = index;
    }
    return [
        input.slice(0, prefixIndex),
        splitFn(input.slice(prefixIndex, suffixIndex)),
        input.slice(suffixIndex),
    ];
}

const updateAttribute = (node, key, value) => {
    const name = kebabCase(key);
    if ([undefined, null, false].includes(value))
        return node.removeAttribute(name);
    node.setAttribute(name, value === true ? '' : value);
};

const symbol = Symbol();
const attributes$1 = (element, attributes) => {
    const prev = element[symbol] || {};
    const next = Object.assign({}, ...attributes);
    const prevClass = (prev.class || '').split(' ');
    const nextClass = (next.class || '').split(' ');
    const newClass = element.className
        .split(' ')
        .filter((key) => !prevClass.includes(key) && !nextClass.includes(key))
        .concat(nextClass)
        .filter((key) => key)
        .join(' ');
    updateAttribute(element, 'class', newClass || undefined);
    if (prev.style || next.style)
        element.setAttribute('style', next.style || '');
    for (const key in prev)
        isEvent(key) && off(element, toEvent(key), prev[key]);
    for (const key in next) {
        if (['class', 'style'].includes(key))
            continue;
        if (isEvent(key))
            on(element, toEvent(key), next[key]);
        else
            updateAttribute(element, key, next[key]);
    }
    element[symbol] = Object.assign({}, next);
};

const call = (target, key, ...parameters) => {
    var _a;
    return (_a = target[key]) === null || _a === void 0 ? void 0 : _a.call(target, ...parameters);
};

const typeOf = (input) => {
    return Object.prototype.toString
        .call(input)
        .replace(/\[|\]|object| /g, '')
        .toLowerCase();
};

/**
 * TODO
 */
const classes = (input, smart) => {
    const result = [];
    switch (typeOf(input)) {
        case 'array': {
            for (const item of input) {
                result.push(classes(item, smart));
            }
            break;
        }
        case 'object': {
            const keys = Object.keys(input);
            for (const key of keys) {
                const value = input[key];
                const name = kebabCase(key);
                const type = typeOf(value);
                if (!smart) {
                    value && result.push(name);
                    continue;
                }
                switch (type) {
                    case 'boolean': {
                        value && result.push(`${name}`);
                        break;
                    }
                    case 'number':
                    case 'string': {
                        result.push(`${name}-${value}`);
                        break;
                    }
                }
            }
            break;
        }
        case 'string': {
            result.push(input);
            break;
        }
    }
    return result.filter((item) => item).join(' ');
};

/**
 * Indicates whether the current code is running on a server.
 */
const isServer = () => {
    return !(typeof window != 'undefined' && window.document);
};

const merge = (target, ...sources) => {
    for (const source of sources) {
        if (!source)
            continue;
        if (typeOf(source) != 'object') {
            target = source;
            continue;
        }
        for (const key of Object.keys(source)) {
            if (target[key] instanceof Object && source[key] instanceof Object && target[key] !== source[key]) {
                target[key] = merge(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return target;
};

const DEFAULTS = {
    element: {}
};
/**
 * TODO
 */
const getConfig = (...keys) => {
    if (isServer())
        return;
    let config = window[`$htmlplus$`];
    for (const key of keys) {
        if (!config)
            break;
        config = config[key];
    }
    return config;
};
/**
 * TODO
 */
const setConfig = (config, options) => {
    if (isServer())
        return;
    const previous = (options === null || options === void 0 ? void 0 : options.override) ? {} : window[`$htmlplus$`];
    window[`$htmlplus$`] = merge({}, DEFAULTS, previous, config);
};

const defineProperty = Object.defineProperty;

/**
 * Indicates the host of the element.
 */
const host = (target) => {
    return target[API_HOST]();
};

/**
 * Indicates whether the [Direction](https://mdn.io/css-direction)
 * of the element is `Right-To-Left` or `Left-To-Right`.
 */
const direction = (target) => {
    return getComputedStyle(host(target)).getPropertyValue('direction');
};

const getFramework = (target) => {
    if ('_qc_' in target)
        return 'qwik';
    if ('_$owner' in target)
        return 'solid';
    if ('__svelte_meta' in target)
        return 'svelte';
    if ('__vnode' in target)
        return 'vue';
    const keys = Object.keys(target);
    const has = (input) => keys.some((key) => key.startsWith(input));
    if (has('__zone_symbol__'))
        return 'angular';
    if (has('__react'))
        return 'react';
};

// TODO
const getMembers = (target) => {
    return target[STATIC_MEMBERS] || {};
};

const getStyles = (target) => {
    var _a;
    return (_a = target.constructor[STATIC_STYLES]) !== null && _a !== void 0 ? _a : target[STATIC_STYLES];
};

const getTag = (target) => {
    var _a;
    return (_a = target.constructor[STATIC_TAG]) !== null && _a !== void 0 ? _a : target[STATIC_TAG];
};

/**
 * Indicates whether the direction of the element is `Right-To-Left` or not.
 */
const isRTL = (target) => direction(target) == 'rtl';

const shadowRoot = (target) => {
    var _a;
    return (_a = host(target)) === null || _a === void 0 ? void 0 : _a.shadowRoot;
};

/**
 * Selects the first element in the shadow dom that matches a specified CSS selector.
 */
function query(target, selectors) {
    var _a;
    return (_a = shadowRoot(target)) === null || _a === void 0 ? void 0 : _a.querySelector(selectors);
}

/**
 * Selects all elements in the shadow dom that match a specified CSS selector.
 */
function queryAll(target, selectors) {
    var _a;
    return (_a = shadowRoot(target)) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selectors);
}

const task = (options) => {
    let isPending, promise;
    const run = () => {
        if (options.canStart && !options.canStart())
            return Promise.resolve(false);
        if (!isPending)
            promise = enqueue();
        return promise;
    };
    const enqueue = async () => {
        isPending = true;
        try {
            await promise;
        }
        catch (error) {
            Promise.reject(error);
        }
        // TODO: maybe is optional
        if (!isPending)
            return promise;
        try {
            if (options.canRun && !options.canRun())
                return (isPending = false);
            options.run();
            isPending = false;
            return true;
        }
        catch (error) {
            isPending = false;
            throw error;
        }
    };
    return run;
};

class MapSet extends Map {
    set(key, value) {
        super.set(key, value);
        return value;
    }
}
class WeakMapSet extends WeakMap {
    set(key, value) {
        super.set(key, value);
        return value;
    }
}
/*! (c) Andrea Giammarchi - ISC */
const empty = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
const elements = /<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/?)>/g;
const attributes = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
const holes = /[\x01\x02]/g;
// \x01 Node.ELEMENT_NODE
// \x02 Node.ATTRIBUTE_NODE
/**
 * Given a template, find holes as both nodes and attributes and
 * return a string with holes as either comment nodes or named attributes.
 * @param {string[]} template a template literal tag array
 * @param {string} prefix prefix to use per each comment/attribute
 * @param {boolean} svg enforces self-closing tags
 * @returns {string} X/HTML with prefixed comments or attributes
 */
var instrument = (template, prefix, svg) => {
    let i = 0;
    return template
        .join('\x01')
        .trim()
        .replace(elements, (_, name, attrs, selfClosing) => {
        let ml = name + attrs.replace(attributes, '\x02=$2$1').trimEnd();
        if (selfClosing.length)
            ml += svg || empty.test(name) ? ' /' : '></' + name;
        return '<' + ml + '>';
    })
        .replace(holes, (hole) => (hole === '\x01' ? '<!--' + prefix + i++ + '-->' : prefix + i++));
};
const ELEMENT_NODE = 1;
const nodeType = 111;
const remove = ({ firstChild, lastChild }) => {
    const range = document.createRange();
    range.setStartAfter(firstChild);
    range.setEndAfter(lastChild);
    range.deleteContents();
    return firstChild;
};
const diffable = (node, operation) => node.nodeType === nodeType
    ? 1 / operation < 0
        ? operation
            ? remove(node)
            : node.lastChild
        : operation
            ? node.valueOf()
            : node.firstChild
    : node;
const persistent = (fragment) => {
    const { firstChild, lastChild } = fragment;
    if (firstChild === lastChild)
        return lastChild || fragment;
    const { childNodes } = fragment;
    const nodes = [...childNodes];
    return {
        ELEMENT_NODE,
        nodeType,
        firstChild,
        lastChild,
        valueOf() {
            if (childNodes.length !== nodes.length)
                fragment.append(...nodes);
            return fragment;
        }
    };
};
const { isArray: isArray$1 } = Array;
const aria = (node) => (values) => {
    for (const key in values) {
        const name = key === 'role' ? key : `aria-${key}`;
        const value = values[key];
        if (value == null)
            node.removeAttribute(name);
        else
            node.setAttribute(name, value);
    }
};
const attribute = (node, name) => {
    let oldValue, orphan = true;
    const attributeNode = document.createAttributeNS(null, name);
    return (newValue) => {
        if (oldValue !== newValue) {
            oldValue = newValue;
            if (oldValue == null) {
                if (!orphan) {
                    node.removeAttributeNode(attributeNode);
                    orphan = true;
                }
            }
            else {
                const value = newValue;
                if (value == null) {
                    if (!orphan)
                        node.removeAttributeNode(attributeNode);
                    orphan = true;
                }
                else {
                    attributeNode.value = value;
                    if (orphan) {
                        node.setAttributeNodeNS(attributeNode);
                        orphan = false;
                    }
                }
            }
        }
    };
};
const boolean = (node, key, oldValue) => (newValue) => {
    if (oldValue !== !!newValue) {
        // when IE won't be around anymore ...
        // node.toggleAttribute(key, oldValue = !!newValue);
        if ((oldValue = !!newValue))
            node.setAttribute(key, '');
        else
            node.removeAttribute(key);
    }
};
const data = ({ dataset }) => (values) => {
    for (const key in values) {
        const value = values[key];
        if (value == null)
            delete dataset[key];
        else
            dataset[key] = value;
    }
};
const event = (node, name) => {
    let oldValue, lower, type = name.slice(2);
    if (!(name in node) && (lower = name.toLowerCase()) in node)
        type = lower.slice(2);
    return (newValue) => {
        const info = isArray$1(newValue) ? newValue : [newValue, false];
        if (oldValue !== info[0]) {
            if (oldValue)
                node.removeEventListener(type, oldValue, info[1]);
            if ((oldValue = info[0]))
                node.addEventListener(type, oldValue, info[1]);
        }
    };
};
const ref = (node) => {
    let oldValue;
    return (value) => {
        if (oldValue !== value) {
            oldValue = value;
            if (typeof value === 'function')
                value(node);
            else
                value.current = node;
        }
    };
};
const setter = (node, key) => key === 'dataset'
    ? data(node)
    : (value) => {
        node[key] = value;
    };
const text = (node) => {
    let oldValue;
    return (newValue) => {
        if (oldValue != newValue) {
            oldValue = newValue;
            node.textContent = newValue == null ? '' : newValue;
        }
    };
};
/**
 * ISC License
 *
 * Copyright (c) 2020, Andrea Giammarchi, @WebReflection
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
/**
 * @param {Node} parentNode The container where children live
 * @param {Node[]} a The list of current/live children
 * @param {Node[]} b The list of future children
 * @param {(entry: Node, action: number) => Node} get
 * The callback invoked per each entry related DOM operation.
 * @param {Node} [before] The optional node used as anchor to insert before.
 * @returns {Node[]} The same list of future children.
 */
var udomdiff = (parentNode, a, b, get, before) => {
    const bLength = b.length;
    let aEnd = a.length;
    let bEnd = bLength;
    let aStart = 0;
    let bStart = 0;
    let map = null;
    while (aStart < aEnd || bStart < bEnd) {
        // append head, tail, or nodes in between: fast path
        if (aEnd === aStart) {
            // we could be in a situation where the rest of nodes that
            // need to be added are not at the end, and in such case
            // the node to `insertBefore`, if the index is more than 0
            // must be retrieved, otherwise it's gonna be the first item.
            const node = bEnd < bLength ? (bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0)) : before;
            while (bStart < bEnd)
                parentNode.insertBefore(get(b[bStart++], 1), node);
        }
        // remove head or tail: fast path
        else if (bEnd === bStart) {
            while (aStart < aEnd) {
                // remove the node only if it's unknown or not live
                if (!map || !map.has(a[aStart]))
                    parentNode.removeChild(get(a[aStart], -1));
                aStart++;
            }
        }
        // same node: fast path
        else if (a[aStart] === b[bStart]) {
            aStart++;
            bStart++;
        }
        // same tail: fast path
        else if (a[aEnd - 1] === b[bEnd - 1]) {
            aEnd--;
            bEnd--;
        }
        // The once here single last swap "fast path" has been removed in v1.1.0
        // https://github.com/WebReflection/udomdiff/blob/single-final-swap/esm/index.js#L69-L85
        // reverse swap: also fast path
        else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
            // this is a "shrink" operation that could happen in these cases:
            // [1, 2, 3, 4, 5]
            // [1, 4, 3, 2, 5]
            // or asymmetric too
            // [1, 2, 3, 4, 5]
            // [1, 2, 3, 5, 6, 4]
            const node = get(a[--aEnd], -1).nextSibling;
            parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
            parentNode.insertBefore(get(b[--bEnd], 1), node);
            // mark the future index as identical (yeah, it's dirty, but cheap 👍)
            // The main reason to do this, is that when a[aEnd] will be reached,
            // the loop will likely be on the fast path, as identical to b[bEnd].
            // In the best case scenario, the next loop will skip the tail,
            // but in the worst one, this node will be considered as already
            // processed, bailing out pretty quickly from the map index check
            a[aEnd] = b[bEnd];
        }
        // map based fallback, "slow" path
        else {
            // the map requires an O(bEnd - bStart) operation once
            // to store all future nodes indexes for later purposes.
            // In the worst case scenario, this is a full O(N) cost,
            // and such scenario happens at least when all nodes are different,
            // but also if both first and last items of the lists are different
            if (!map) {
                map = new Map();
                let i = bStart;
                while (i < bEnd)
                    map.set(b[i], i++);
            }
            // if it's a future node, hence it needs some handling
            if (map.has(a[aStart])) {
                // grab the index of such node, 'cause it might have been processed
                const index = map.get(a[aStart]);
                // if it's not already processed, look on demand for the next LCS
                if (bStart < index && index < bEnd) {
                    let i = aStart;
                    // counts the amount of nodes that are the same in the future
                    let sequence = 1;
                    while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence)
                        sequence++;
                    // effort decision here: if the sequence is longer than replaces
                    // needed to reach such sequence, which would brings again this loop
                    // to the fast path, prepend the difference before a sequence,
                    // and move only the future list index forward, so that aStart
                    // and bStart will be aligned again, hence on the fast path.
                    // An example considering aStart and bStart are both 0:
                    // a: [1, 2, 3, 4]
                    // b: [7, 1, 2, 3, 6]
                    // this would place 7 before 1 and, from that time on, 1, 2, and 3
                    // will be processed at zero cost
                    if (sequence > index - bStart) {
                        const node = get(a[aStart], 0);
                        while (bStart < index)
                            parentNode.insertBefore(get(b[bStart++], 1), node);
                    }
                    // if the effort wasn't good enough, fallback to a replace,
                    // moving both source and target indexes forward, hoping that some
                    // similar node will be found later on, to go back to the fast path
                    else {
                        parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
                    }
                }
                // otherwise move the source forward, 'cause there's nothing to do
                else
                    aStart++;
            }
            // this node has no meaning in the future list, so it's more than safe
            // to remove it, and check the next live node out instead, meaning
            // that only the live list index should be forwarded
            else
                parentNode.removeChild(get(a[aStart++], -1));
        }
    }
    return b;
};
const { isArray, prototype } = Array;
const { indexOf } = prototype;
const { createDocumentFragment, createElement, createElementNS, createTextNode, createTreeWalker, importNode } = new Proxy(typeof window == 'undefined' ? {} : window.document, {
    get: (target, method) => (target[method] || function () { }).bind(target)
});
const createHTML = (html) => {
    const template = createElement('template');
    template.innerHTML = html;
    return template.content;
};
let xml;
const createSVG = (svg) => {
    if (!xml)
        xml = createElementNS('http://www.w3.org/2000/svg', 'svg');
    xml.innerHTML = svg;
    const content = createDocumentFragment();
    content.append(...xml.childNodes);
    return content;
};
const createContent = (text, svg) => (svg ? createSVG(text) : createHTML(text));
// from a generic path, retrieves the exact targeted node
const reducePath = ({ childNodes }, i) => childNodes[i];
// this helper avoid code bloat around handleAnything() callback
const diff = (comment, oldNodes, newNodes) => udomdiff(comment.parentNode, 
// TODO: there is a possible edge case where a node has been
//       removed manually, or it was a keyed one, attached
//       to a shared reference between renders.
//       In this case udomdiff might fail at removing such node
//       as its parent won't be the expected one.
//       The best way to avoid this issue is to filter oldNodes
//       in search of those not live, or not in the current parent
//       anymore, but this would require both a change to uwire,
//       exposing a parentNode from the firstChild, as example,
//       but also a filter per each diff that should exclude nodes
//       that are not in there, penalizing performance quite a lot.
//       As this has been also a potential issue with domdiff,
//       and both lighterhtml and hyperHTML might fail with this
//       very specific edge case, I might as well document this possible
//       "diffing shenanigan" and call it a day.
oldNodes, newNodes, diffable, comment);
// if an interpolation represents a comment, the whole
// diffing will be related to such comment.
// This helper is in charge of understanding how the new
// content for such interpolation/hole should be updated
const handleAnything = (comment) => {
    let oldValue, text, nodes = [];
    const anyContent = (newValue) => {
        switch (typeof newValue) {
            // primitives are handled as text content
            case 'string':
            case 'number':
            case 'boolean':
                if (oldValue !== newValue) {
                    oldValue = newValue;
                    if (!text)
                        text = createTextNode('');
                    text.data = newValue;
                    nodes = diff(comment, nodes, [text]);
                }
                break;
            // null, and undefined are used to cleanup previous content
            case 'object':
            case 'undefined':
                if (newValue == null) {
                    if (oldValue != newValue) {
                        oldValue = newValue;
                        nodes = diff(comment, nodes, []);
                    }
                    break;
                }
                // arrays and nodes have a special treatment
                if (isArray(newValue)) {
                    oldValue = newValue;
                    // arrays can be used to cleanup, if empty
                    if (newValue.length === 0)
                        nodes = diff(comment, nodes, []);
                    // or diffed, if these contains nodes or "wires"
                    else if (typeof newValue[0] === 'object')
                        nodes = diff(comment, nodes, newValue);
                    // in all other cases the content is stringified as is
                    else
                        anyContent(String(newValue));
                    break;
                }
                // if the new value is a DOM node, or a wire, and it's
                // different from the one already live, then it's diffed.
                // if the node is a fragment, it's appended once via its childNodes
                // There is no `else` here, meaning if the content
                // is not expected one, nothing happens, as easy as that.
                if (oldValue !== newValue && 'ELEMENT_NODE' in newValue) {
                    oldValue = newValue;
                    nodes = diff(comment, nodes, newValue.nodeType === 11 ? [...newValue.childNodes] : [newValue]);
                }
                break;
            case 'function':
                anyContent(newValue(comment));
                break;
        }
    };
    return anyContent;
};
// attributes can be:
//  * ref=${...}      for hooks and other purposes
//  * aria=${...}     for aria attributes
//  * ?boolean=${...} for boolean attributes
//  * .dataset=${...} for dataset related attributes
//  * .setter=${...}  for Custom Elements setters or nodes with setters
//                    such as buttons, details, options, select, etc
//  * @event=${...}   to explicitly handle event listeners
//  * onevent=${...}  to automatically handle event listeners
//  * generic=${...}  to handle an attribute just like an attribute
const handleAttribute = (node, name /*, svg*/) => {
    switch (name[0]) {
        case '?':
            return boolean(node, name.slice(1), false);
        case '.':
            return setter(node, name.slice(1));
        case '@':
            return event(node, 'on' + name.slice(1));
        case 'o':
            if (name[1] === 'n')
                return event(node, name);
    }
    switch (name) {
        case 'ref':
            return ref(node);
        case 'aria':
            return aria(node);
    }
    return attribute(node, name /*, svg*/);
};
// each mapped update carries the update type and its path
// the type is either node, attribute, or text, while
// the path is how to retrieve the related node to update.
// In the attribute case, the attribute name is also carried along.
function handlers(options) {
    const { type, path } = options;
    const node = path.reduceRight(reducePath, this);
    return type === 'node'
        ? handleAnything(node)
        : type === 'attr'
            ? handleAttribute(node, options.name /*, options.svg*/)
            : text(node);
}
// from a fragment container, create an array of indexes
// related to its child nodes, so that it's possible
// to retrieve later on exact node via reducePath
const createPath = (node) => {
    const path = [];
    let { parentNode } = node;
    while (parentNode) {
        path.push(indexOf.call(parentNode.childNodes, node));
        node = parentNode;
        ({ parentNode } = node);
    }
    return path;
};
// the prefix is used to identify either comments, attributes, or nodes
// that contain the related unique id. In the attribute cases
// isµX="attribute-name" will be used to map current X update to that
// attribute name, while comments will be like <!--isµX-->, to map
// the update to that specific comment node, hence its parent.
// style and textarea will have <!--isµX--> text content, and are handled
// directly through text-only updates.
const prefix = 'isµ';
// Template Literals are unique per scope and static, meaning a template
// should be parsed once, and once only, as it will always represent the same
// content, within the exact same amount of updates each time.
// This cache relates each template to its unique content and updates.
const cache$1 = new WeakMapSet();
// a RegExp that helps checking nodes that cannot contain comments
const textOnly = /^(?:textarea|script|style|title|plaintext|xmp)$/;
const createCache = () => ({
    stack: [],
    entry: null,
    //  * the template that is representing
    //  * the type of node it represents (html or svg)
    //  * the content fragment with all nodes
    //  * the list of updates per each node (template holes)
    //  * the "wired" node or fragment that will get updates
    // if the template or type are different from the previous one
    // the entry gets re-created each time
    wire: null // each rendered node represent some wired content and
    // this reference to the latest one. If different, the node
    // will be cleaned up and the new "wire" will be appended
});
// the entry stored in the rendered node cache, and per each "hole"
const createEntry = (type, template) => {
    const { content, updates } = mapUpdates(type, template);
    return { type, template, content, updates, wire: null };
};
// a template is instrumented to be able to retrieve where updates are needed.
// Each unique template becomes a fragment, cloned once per each other
// operation based on the same template, i.e. data => html`<p>${data}</p>`
const mapTemplate = (type, template) => {
    const svg = type === 'svg';
    const text = instrument(template, prefix, svg);
    const content = createContent(text, svg);
    // once instrumented and reproduced as fragment, it's crawled
    // to find out where each update is in the fragment tree
    const tw = createTreeWalker(content, 1 | 128);
    const nodes = [];
    const length = template.length - 1;
    let i = 0;
    // updates are searched via unique names, linearly increased across the tree
    // <div isµ0="attr" isµ1="other"><!--isµ2--><style><!--isµ3--</style></div>
    let search = `${prefix}${i}`;
    while (i < length) {
        const node = tw.nextNode();
        // if not all updates are bound but there's nothing else to crawl
        // it means that there is something wrong with the template.
        if (!node)
            throw `bad template: ${text}`;
        // if the current node is a comment, and it contains isµX
        // it means the update should take care of any content
        if (node.nodeType === 8) {
            // The only comments to be considered are those
            // which content is exactly the same as the searched one.
            if (node.data === search) {
                nodes.push({ type: 'node', path: createPath(node) });
                search = `${prefix}${++i}`;
            }
        }
        else {
            // if the node is not a comment, loop through all its attributes
            // named isµX and relate attribute updates to this node and the
            // attribute name, retrieved through node.getAttribute("isµX")
            // the isµX attribute will be removed as irrelevant for the layout
            // let svg = -1;
            while (node.hasAttribute(search)) {
                nodes.push({
                    type: 'attr',
                    path: createPath(node),
                    name: node.getAttribute(search)
                });
                node.removeAttribute(search);
                search = `${prefix}${++i}`;
            }
            // if the node was a style, textarea, or others, check its content
            // and if it is <!--isµX--> then update tex-only this node
            if (textOnly.test(node.localName) && node.textContent.trim() === `<!--${search}-->`) {
                node.textContent = '';
                nodes.push({ type: 'text', path: createPath(node) });
                search = `${prefix}${++i}`;
            }
        }
    }
    // once all nodes to update, or their attributes, are known, the content
    // will be cloned in the future to represent the template, and all updates
    // related to such content retrieved right away without needing to re-crawl
    // the exact same template, and its content, more than once.
    return { content, nodes };
};
// if a template is unknown, perform the previous mapping, otherwise grab
// its details such as the fragment with all nodes, and updates info.
const mapUpdates = (type, template) => {
    const { content, nodes } = cache$1.get(template) || cache$1.set(template, mapTemplate(type, template));
    // clone deeply the fragment
    const fragment = importNode(content, true);
    // and relate an update handler per each node that needs one
    const updates = nodes.map(handlers, fragment);
    // return the fragment and all updates to use within its nodes
    return { content: fragment, updates };
};
// as html and svg can be nested calls, but no parent node is known
// until rendered somewhere, the unroll operation is needed to
// discover what to do with each interpolation, which will result
// into an update operation.
const unroll = (info, { type, template, values }) => {
    // interpolations can contain holes and arrays, so these need
    // to be recursively discovered
    const length = unrollValues(info, values);
    let { entry } = info;
    // if the cache entry is either null or different from the template
    // and the type this unroll should resolve, create a new entry
    // assigning a new content fragment and the list of updates.
    if (!entry || entry.template !== template || entry.type !== type)
        info.entry = entry = createEntry(type, template);
    const { content, updates, wire } = entry;
    // even if the fragment and its nodes is not live yet,
    // it is already possible to update via interpolations values.
    for (let i = 0; i < length; i++)
        updates[i](values[i]);
    // if the entry was new, or representing a different template or type,
    // create a new persistent entity to use during diffing.
    // This is simply a DOM node, when the template has a single container,
    // as in `<p></p>`, or a "wire" in `<p></p><p></p>` and similar cases.
    return wire || (entry.wire = persistent(content));
};
// the stack retains, per each interpolation value, the cache
// related to each interpolation value, or null, if the render
// was conditional and the value is not special (Array or Hole)
const unrollValues = ({ stack }, values) => {
    const { length } = values;
    for (let i = 0; i < length; i++) {
        const hole = values[i];
        // each Hole gets unrolled and re-assigned as value
        // so that domdiff will deal with a node/wire, not with a hole
        if (hole instanceof Hole)
            values[i] = unroll(stack[i] || (stack[i] = createCache()), hole);
        // arrays are recursively resolved so that each entry will contain
        // also a DOM node or a wire, hence it can be diffed if/when needed
        else if (isArray(hole))
            unrollValues(stack[i] || (stack[i] = createCache()), hole);
        // if the value is nothing special, the stack doesn't need to retain data
        // this is useful also to cleanup previously retained data, if the value
        // was a Hole, or an Array, but not anymore, i.e.:
        // const update = content => html`<div>${content}</div>`;
        // update(listOfItems); update(null); update(html`hole`)
        else
            stack[i] = null;
    }
    if (length < stack.length)
        stack.splice(length);
    return length;
};
/**
 * Holds all details wrappers needed to render the content further on.
 * @constructor
 * @param {string} type The hole type, either `html` or `svg`.
 * @param {string[]} template The template literals used to the define the content.
 * @param {Array} values Zero, one, or more interpolated values to render.
 */
class Hole {
    constructor(type, template, values) {
        this.type = type;
        this.template = template;
        this.values = values;
    }
}
// both `html` and `svg` template literal tags are polluted
// with a `for(ref[, id])` and a `node` tag too
const tag = (type) => {
    // both `html` and `svg` tags have their own cache
    const keyed = new WeakMapSet();
    // keyed operations always re-use the same cache and unroll
    // the template and its interpolations right away
    const fixed = (cache) => (template, ...values) => unroll(cache, { type, template, values });
    return Object.assign(
    // non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values) => new Hole(type, template, values), {
        // keyed operations need a reference object, usually the parent node
        // which is showing keyed results, and optionally a unique id per each
        // related node, handy with JSON results and mutable list of objects
        // that usually carry a unique identifier
        for(ref, id) {
            const memo = keyed.get(ref) || keyed.set(ref, new MapSet());
            return memo.get(id) || memo.set(id, fixed(createCache()));
        },
        // it is possible to create one-off content out of the box via node tag
        // this might return the single created node, or a fragment with all
        // nodes present at the root level and, of course, their child nodes
        node: (template, ...values) => unroll(createCache(), new Hole(type, template, values)).valueOf()
    });
};
// each rendered node gets its own cache
const cache = new WeakMapSet();
// rendering means understanding what `html` or `svg` tags returned
// and it relates a specific node to its own unique cache.
// Each time the content to render changes, the node is cleaned up
// and the new new content is appended, and if such content is a Hole
// then it's "unrolled" to resolve all its inner nodes.
const render = (where, what) => {
    const hole = typeof what === 'function' ? what() : what;
    const info = cache.get(where) || cache.set(where, createCache());
    const wire = hole instanceof Hole ? unroll(info, hole) : hole;
    if (wire !== info.wire) {
        info.wire = wire;
        // valueOf() simply returns the node itself, but in case it was a "wire"
        // it will eventually re-append all nodes to its fragment so that such
        // fragment can be re-appended many times in a meaningful way
        // (wires are basically persistent fragments facades with special behavior)
        where.replaceChildren(wire.valueOf());
    }
    return where;
};
const html = tag('html');
tag('svg');

/**
 * Updates the DOM with a scheduled task.
 * @param target The element instance.
 * @param name Property/State name.
 * @param previous The previous value of Property/State.
 * @param callback Invoked when the rendering phase is completed.
 */
const request = (target, name, previous, callback) => {
    var _a, _b;
    // Creates/Gets a stacks.
    const stacks = (target[_a = API_STACKS] || (target[_a] = new Map()));
    // Creates/Updates a stack
    const stack = stacks.get(name) || { callbacks: [], previous };
    // Adds the callback to the stack, if exists.
    callback && stack.callbacks.push(callback);
    // Stores the stack.
    stacks.set(name, stack);
    // Creates/Gets a micro task function.
    target[_b = API_REQUEST] || (target[_b] = task({
        run: () => {
            // Skips the rendering phase if DOM isn't ready.
            if (!target[API_CONNECTED])
                return;
            // Calculates the states to pass into lifecycles' callbacks.
            const states = new Map(Array.from(stacks)
                .filter((stack) => stack[0])
                .map((stack) => [stack[0], stack[1].previous]));
            // Calls the lifecycle's callback before the rendering phase.
            call(target, LIFECYCLE_UPDATE, states);
            // Calculates the template.
            const template = () => {
                // Calculates the markup.
                const markup = call(target, METHOD_RENDER);
                // Calculates the styles.
                const styles = getStyles(target);
                // Returns the markup if styles don't exist.
                if (!styles)
                    return markup;
                // Returns the markup and styles together.
                return html `<style>${styles}</style>${markup}`;
            };
            // Renders template to the DOM.
            render(shadowRoot(target), template);
            // Invokes requests' callback.
            stacks.forEach((state) => {
                state.callbacks.forEach((callback, index, callbacks) => {
                    callback(callbacks.length - 1 != index);
                });
            });
            // Calls the lifecycle's callback after the rendering phase.
            call(target, LIFECYCLE_UPDATED, states);
            // Clears stacks.
            stacks.clear();
            // TODO: releated to the @Watch decorator.
            target[API_RENDER_COMPLETED] = true;
        }
    }));
    // Calls the micro task.
    call(target, API_REQUEST);
};

/**
 * Returns the slots name.
 */
const slots = (target) => {
    var _a;
    const slots = {};
    const children = Array.from(host(target).childNodes);
    for (const child of children) {
        if (child.nodeName == '#comment')
            continue;
        const name = child['slot'] || (((_a = child.nodeValue) === null || _a === void 0 ? void 0 : _a.trim()) && 'default') || ('slot' in child && 'default');
        if (!name)
            continue;
        slots[name] = true;
    }
    return slots;
};

/**
 * Converts a JavaScript object containing CSS styles to a CSS string.
 */
const styles = (input) => {
    return Object.keys(input)
        .filter((key) => input[key] !== undefined && input[key] !== null)
        .map((key) => `${key.startsWith('--') ? '--' : ''}${kebabCase(key)}: ${input[key]}`)
        .join('; ');
};

function toDecorator(util, ...parameters) {
    return function (target, propertyKey) {
        defineProperty(target, propertyKey, {
            get() {
                return util(this, ...parameters);
            }
        });
    };
}

const toProperty = (input, type) => {
    if (type === undefined)
        return input;
    const string = `${input}`;
    if (TYPE_BOOLEAN & type) {
        if (string === '')
            return true;
        if (string === 'false')
            return false;
        if (string === 'true')
            return true;
    }
    if (TYPE_NUMBER & type) {
        if (string != '' && !isNaN(input)) {
            return parseFloat(input);
        }
    }
    if (TYPE_NULL & type) {
        if (string === 'null') {
            return null;
        }
    }
    if (TYPE_DATE & type) {
        const value = new Date(input);
        if (value.toString() != 'Invalid Date') {
            return value;
        }
    }
    if (TYPE_ARRAY & type) {
        try {
            const value = JSON.parse(input);
            if (typeOf(value) == 'array') {
                return value;
            }
        }
        catch (_a) { }
    }
    if (TYPE_OBJECT & type) {
        try {
            const value = JSON.parse(input);
            if (typeOf(value) == 'object') {
                return value;
            }
        }
        catch (_b) { }
    }
    if (TYPE_UNDEFINED & type) {
        if (string === 'undefined') {
            return undefined;
        }
    }
    return input;
};

/**
 * Converts a value to a unit.
 */
const toUnit = (input, unit = 'px') => {
    if (input === null || input === undefined || input === '')
        return input;
    if (isNaN(+input))
        return String(input);
    return Number(input) + unit;
};

/**
 * Used to bind a method of a class to the current context,
 * making it easier to reference `this` within the method.
 */
function Bind() {
    return function (target, propertyKey, descriptor) {
        return {
            configurable: true,
            get() {
                const value = descriptor === null || descriptor === void 0 ? void 0 : descriptor.value.bind(this);
                defineProperty(this, propertyKey, {
                    value,
                    configurable: true,
                    writable: true
                });
                return value;
            }
        };
    };
}

/**
 * The class marked with this decorator is considered a
 * [Custom Element](https://mdn.io/using-custom-elements),
 * and its name, in kebab-case, serves as the element name.
 */
function Element() {
    return function (constructor) {
        if (isServer())
            return;
        const tag = getTag(constructor);
        if (customElements.get(tag))
            return;
        const members = getMembers(constructor);
        class Plus extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                const instance = (this[API_INSTANCE] = new constructor());
                Object.keys(members).forEach((key) => {
                    if (members[key].type != TYPE_FUNCTION) {
                        members[key].default = instance[key];
                    }
                });
                instance[API_HOST] = () => this;
                // TODO
                call(instance, LIFECYCLE_CONSTRUCTED);
            }
            static get observedAttributes() {
                return Object.keys(members)
                    .filter((key) => members[key].type != TYPE_FUNCTION)
                    .map((key) => kebabCase(key));
            }
            adoptedCallback() {
                call(this[API_INSTANCE], LIFECYCLE_ADOPTED);
            }
            attributeChangedCallback(attribute, prev, next) {
                var _a;
                const instance = this[API_INSTANCE];
                if (instance[API_LOCKED])
                    return;
                const name = camelCase(attribute);
                const type = (_a = members[name]) === null || _a === void 0 ? void 0 : _a.type;
                const value = toProperty(next, type);
                if (instance[name] === value)
                    return;
                instance[name] = value;
            }
            connectedCallback() {
                const instance = this[API_INSTANCE];
                // TODO: experimental for global config
                Object.assign(instance, getConfig('element', getTag(instance), 'property'));
                const connect = () => {
                    instance[API_CONNECTED] = true;
                    call(instance, LIFECYCLE_CONNECTED);
                    request(instance, undefined, undefined, () => {
                        call(instance, LIFECYCLE_LOADED);
                    });
                };
                const callback = call(instance, LIFECYCLE_CONNECT);
                if (!(callback === null || callback === void 0 ? void 0 : callback.then))
                    return connect();
                callback.then(() => connect());
            }
            disconnectedCallback() {
                call(this[API_INSTANCE], LIFECYCLE_DISCONNECTED);
            }
        }
        customElements.define(tag, Plus);
    };
}

/**
 * Provides the capability to dispatch a [CustomEvent](https://mdn.io/custom-event)
 * from an element.
 *
 * @param options An object that configures options for the event dispatcher.
 */
function Event$1(options = {}) {
    return function (target, propertyKey) {
        defineProperty(target, propertyKey, {
            get() {
                return (detail) => {
                    var _a, _b;
                    const element = host(this);
                    const framework = getFramework(element);
                    (_a = options.bubbles) !== null && _a !== void 0 ? _a : (options.bubbles = false);
                    let type = String(propertyKey);
                    switch (framework) {
                        case 'qwik':
                        case 'solid':
                            type = pascalCase(type).toLowerCase();
                            break;
                        case 'preact':
                            type = pascalCase(type);
                            break;
                        default:
                            type = kebabCase(type);
                            break;
                    }
                    let event;
                    event || (event = (_b = getConfig('event', 'resolver')) === null || _b === void 0 ? void 0 : _b({ detail, element, framework, options, type }));
                    event || (event = new CustomEvent(type, Object.assign(Object.assign({}, options), { detail })));
                    element.dispatchEvent(event);
                    return event;
                };
            }
        });
    };
}

/**
 * Indicates the host of the element.
 */
function Host() {
    return toDecorator(host);
}

/**
 * Provides a way to encapsulate functionality within an element
 * and invoke it as needed, both internally and externally.
 */
function Method() {
    return function (target, propertyKey) {
        appendToMethod(target, LIFECYCLE_CONNECTED, function () {
            defineProperty(host(this), propertyKey, {
                get: () => this[propertyKey].bind(this)
            });
        });
    };
}

/**
 * Creates a reactive property, reflecting a corresponding attribute value,
 * and updates the element when the property is set.
 */
function Property(options) {
    return function (target, propertyKey) {
        const name = String(propertyKey);
        const symbol = Symbol();
        addMember(target.constructor, name, options);
        function get() {
            return this[symbol];
        }
        function set(next) {
            const previous = this[symbol];
            if (next === previous)
                return;
            this[symbol] = next;
            request(this, name, previous, (skipped) => {
                if (!(options === null || options === void 0 ? void 0 : options.reflect) || skipped)
                    return;
                target[API_LOCKED] = true;
                updateAttribute(host(this), name, next);
                target[API_LOCKED] = false;
            });
        }
        defineProperty(target, propertyKey, { get, set });
        // TODO: check the lifecycle
        appendToMethod(target, LIFECYCLE_CONSTRUCTED, function () {
            const element = host(this);
            // TODO: experimental for isolated options
            if (element === this)
                return;
            const get = () => {
                return this[propertyKey];
            };
            const set = (input) => {
                this[propertyKey] = toProperty(input, options === null || options === void 0 ? void 0 : options.type);
            };
            // TODO: configurable
            defineProperty(element, propertyKey, { get, set, configurable: true });
        });
    };
}

/**
 * Selects the first element in the shadow dom that matches a specified CSS selector.
 *
 * @param selectors A string containing one or more selectors to match.
 * This string must be a valid CSS selector string; if it isn't, a `SyntaxError` exception is thrown. See
 * [Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
 * for more about selectors and how to manage them.
 */
function Query(selectors) {
    return toDecorator(query, selectors);
}

/**
 * Selects all elements in the shadow dom that match a specified CSS selector.
 *
 * @param selectors A string containing one or more selectors to match against.
 * This string must be a valid
 * [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)
 * string; if it's not, a `SyntaxError` exception is thrown. See
 * [Locating DOM elements using selectors](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
 * for more information about using selectors to identify elements.
 * Multiple selectors may be specified by separating them using commas.
 */
function QueryAll(selectors) {
    return toDecorator(queryAll, selectors);
}

/**
 * Applying this decorator to any `class property` will trigger the
 * element to re-render upon the desired property changes.
 */
function State() {
    return function (target, propertyKey) {
        const name = String(propertyKey);
        const symbol = Symbol();
        function get() {
            return this[symbol];
        }
        function set(next) {
            const previous = this[symbol];
            if (next === previous)
                return;
            this[symbol] = next;
            request(this, name, previous);
        }
        // TODO: configurable
        defineProperty(target, propertyKey, { get, set, configurable: true });
    };
}

/**
 * Monitors `@Property` and `@State` to detect changes.
 * The decorated method will be called after any changes,
 * with the `key`, `newValue`, and `oldValue` as parameters.
 * If the `key` is not defined, all `@Property` and `@State` are considered.
 *
 * @param keys Collection of `@Property` and `@State` names.
 * @param immediate Triggers the callback immediately after initialization.
 */
function Watch(keys, immediate) {
    return function (target, propertyKey) {
        // Gets all keys
        const all = [keys].flat().filter((key) => key);
        // Registers a lifecycle to detect changes.
        appendToMethod(target, LIFECYCLE_UPDATED, function (states) {
            // Skips the logic if 'immediate' wasn't passed.
            if (!immediate && !this[API_RENDER_COMPLETED])
                return;
            // Loops the keys.
            states.forEach((previous, key) => {
                // Skips the current key.
                if (all.length && !all.includes(key))
                    return;
                // Invokes the method with parameters.
                this[propertyKey](this[key], previous, key);
            });
        });
    };
}

class PlusCore {
    // TODO
    get dir() {
        return direction(this);
    }
    get isRTL() {
        return isRTL(this);
    }
}
__decorate([
    Host()
], PlusCore.prototype, "$host", void 0);

class PlusForm extends PlusCore {
}

class Animation2 {
    get animation() {
        return this.source.getAnimations()[0];
    }
    get source() {
        const element = this.config.source;
        if (typeof element == 'function')
            return element();
        return element;
    }
    get target() {
        const element = this.config.target;
        if (typeof element == 'function')
            return element();
        return element;
    }
    constructor(config) {
        this.state = 'leaved';
        this.config = Object.assign({}, this.config, config, {
            states: Object.assign({}, {
                enter: 'enter',
                entering: 'entering',
                entered: 'entered',
                leave: 'leave',
                leaving: 'leaving',
                leaved: 'leaved'
            }, config.states)
        });
    }
    dispose() {
        var _a;
        (_a = this.destroy) === null || _a === void 0 ? void 0 : _a.call(this);
    }
    enter(parameters) {
        return new Promise((resolve) => {
            var _a, _b, _c;
            (_a = this.destroy) === null || _a === void 0 ? void 0 : _a.call(this);
            this.update('enter');
            (_c = (_b = this.config).onEnter) === null || _c === void 0 ? void 0 : _c.call(_b, parameters);
            this.next(() => {
                var _a, _b;
                this.update('entering');
                (_b = (_a = this.config).onEntering) === null || _b === void 0 ? void 0 : _b.call(_a, parameters);
                const onCancel = () => {
                    resolve(true);
                };
                const onFinish = () => {
                    var _a, _b;
                    this.update('entered');
                    (_b = (_a = this.config).onEntered) === null || _b === void 0 ? void 0 : _b.call(_a, parameters);
                    resolve(false);
                };
                if (!this.animation)
                    return onFinish();
                this.destroy = () => {
                    var _a, _b;
                    resolve(true);
                    (_a = this.animation) === null || _a === void 0 ? void 0 : _a.removeEventListener('cancel', onCancel);
                    (_b = this.animation) === null || _b === void 0 ? void 0 : _b.removeEventListener('finish', onFinish);
                };
                this.animation.addEventListener('cancel', onCancel, { once: true });
                this.animation.addEventListener('finish', onFinish, { once: true });
            });
        });
    }
    initialize(state) {
        this.update(state);
    }
    leave(parameters) {
        return new Promise((resolve) => {
            var _a, _b, _c;
            (_a = this.destroy) === null || _a === void 0 ? void 0 : _a.call(this);
            this.update('leave');
            (_c = (_b = this.config).onLeave) === null || _c === void 0 ? void 0 : _c.call(_b, parameters);
            this.next(() => {
                var _a, _b;
                this.update('leaving');
                (_b = (_a = this.config).onLeaving) === null || _b === void 0 ? void 0 : _b.call(_a, parameters);
                const onCancel = () => {
                    resolve(true);
                };
                const onFinish = () => {
                    var _a, _b;
                    this.update('leaved');
                    (_b = (_a = this.config).onLeaved) === null || _b === void 0 ? void 0 : _b.call(_a, parameters);
                    resolve(false);
                };
                if (!this.animation)
                    return onFinish();
                this.destroy = () => {
                    var _a, _b;
                    resolve(true);
                    (_a = this.animation) === null || _a === void 0 ? void 0 : _a.removeEventListener('cancel', onCancel);
                    (_b = this.animation) === null || _b === void 0 ? void 0 : _b.removeEventListener('finish', onFinish);
                };
                this.animation.addEventListener('cancel', onCancel, { once: true });
                this.animation.addEventListener('finish', onFinish, { once: true });
            });
        });
    }
    next(callback) {
        requestAnimationFrame(() => setTimeout(() => callback(), 5));
    }
    update(state) {
        this.state = state;
        const value = this.config.states[this.state];
        this.target.setAttribute(this.config.key, value);
    }
}

class Animation {
    constructor(config) {
        const states = Object.assign({}, {
            enter: 'enter',
            entering: 'entering',
            entered: 'entered',
            leave: 'leave',
            leaving: 'leaving',
            leaved: 'leaved'
        }, config.states);
        this.config = Object.assign({}, {
            reflect: 'class',
            states,
            onEnter: () => undefined,
            onEntering: () => undefined,
            onEntered: () => undefined,
            onEnterCanceled: () => undefined,
            onLeave: () => undefined,
            onLeaving: () => undefined,
            onLeaved: () => undefined,
            onLeaveCanceled: () => undefined
        }, config);
        this.init();
    }
    get sources() {
        let { source } = this.config;
        try {
            source = source();
        }
        catch (_a) { }
        return [source].flat(1);
    }
    get targets() {
        let { target } = this.config;
        try {
            target = target();
        }
        catch (_a) { }
        return [target].flat(1);
    }
    duration() {
        return this.sources
            .map((item) => {
            try {
                const style = window.getComputedStyle(item);
                const duration = [
                    style.animationDelay,
                    style.transitionDelay,
                    style.animationDuration,
                    style.transitionDuration
                ].map((item = '0s') => parseFloat(item) * (/ms/g.test(item) ? 1 : 1000));
                return Math.max(...duration.slice(0, 2)) + Math.max(...duration.slice(2));
            }
            catch (_a) {
                return 0;
            }
        })
            .sort((a, b) => a - b)
            .pop();
    }
    init() {
        let { state } = this.config;
        this.update(state);
    }
    next(callback) {
        requestAnimationFrame(() => setTimeout(() => callback(), 5));
    }
    update(state) {
        const { key, states } = this.config;
        this.targets.map((target) => target.setAttribute(key, states[state]));
    }
    cancel() {
        clearTimeout(this.timeout);
    }
    dispose() {
        clearTimeout(this.timeout);
    }
    enter(config) {
        this.cancel();
        config = Object.assign({}, this.config, config);
        this.update('enter');
        config.onEnter();
        this.next(() => {
            clearTimeout(this.timeout);
            this.update('entering');
            config.onEntering();
            const duration = this.duration();
            this.timeout = setTimeout(() => {
                this.update('entered');
                config.onEntered();
            }, duration);
        });
    }
    leave(config) {
        this.cancel();
        config = Object.assign({}, this.config, config);
        this.update('leave');
        config.onLeave();
        this.next(() => {
            clearTimeout(this.timeout);
            this.update('leaving');
            config.onLeaving();
            const duration = this.duration();
            this.timeout = setTimeout(() => {
                this.update('leaved');
                config.onLeaved();
            }, duration);
        });
    }
}

const properties = [];
const attach = (property) => {
    switch (property.type) {
        case 'ACTION':
            getRelated(property, 'INJECT').forEach((to) => inject(property, to));
            break;
        case 'OBSERVABLE':
            getRelated(property, 'INJECT').forEach((to) => inject(property, to));
            // TODO
            let value = getValue(property);
            Object.defineProperty(property.instance, property.name, {
                enumerable: true,
                configurable: true,
                get() {
                    return value;
                },
                set(input) {
                    if (input === value)
                        return;
                    value = input;
                    getRelated(property, 'INJECT').forEach((to) => inject(property, to));
                }
            });
            break;
        case 'INJECT':
            getRelated(property, 'ACTION', 'OBSERVABLE').forEach((to) => inject(to, property));
            break;
    }
};
const connect = (property) => {
    property = prepare(property);
    register(property);
    if (!property.config.crawl || property.namespace)
        return attach(property);
    queue(property);
};
const detach = (property) => {
    switch (property.type) {
        case 'ACTION':
            getRelated(property, 'INJECT').forEach((to) => setValue(to, to.initialize));
            break;
        case 'INJECT':
            setValue(property, property.initialize);
            break;
        case 'OBSERVABLE':
            // TODO
            Object.defineProperty(property.instance, property.name, {
                value: getValue(property),
                enumerable: true,
                configurable: true
            });
            getRelated(property, 'INJECT').forEach((to) => setValue(to, to.initialize));
            break;
    }
};
const disconnect = (property) => {
    property = properties.find((item) => {
        return item.instance == property.instance && item.name == property.name;
    });
    detach(property);
    unregister(property);
};
const findParent = (property) => {
    var _a;
    let element = (_a = property.element) === null || _a === void 0 ? void 0 : _a.parentElement;
    while (element) {
        if (element.shadowRoot) {
            const parent = properties.find((item) => {
                return item.element == element && item.name == property.name;
            });
            if (parent)
                return parent;
        }
        element = element.parentElement;
    }
};
const getRelated = (property, ...types) => {
    return properties.filter((item) => {
        if (typeof item.namespace == 'undefined')
            return;
        if (!types.includes(item.type))
            return;
        if (item.name != property.name)
            return;
        if (item.namespace === property.namespace)
            return true;
        if (item.namespace === property)
            return true;
        if (item === property.namespace)
            return true;
    });
};
const getValue = (property) => {
    return property.instance[property.name];
};
const inject = (from, to) => {
    let value = getValue(from);
    if (typeof value === 'function')
        value = value.bind(from.instance);
    setValue(to, value);
};
const prepare = (property) => {
    var _a;
    const { config, instance, name } = property;
    const element = host(instance);
    const initialize = instance[name];
    const namespace = (_a = config === null || config === void 0 ? void 0 : config.namespace) === null || _a === void 0 ? void 0 : _a.call(config, instance);
    return Object.assign({}, property, { element, initialize, namespace });
};
// TODO
let timeout;
const unresolved = new Set();
const queue = (property) => {
    unresolved.add(property);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        Array.from(unresolved).forEach((source) => {
            const parent = findParent(source);
            if (!parent)
                return;
            source.namespace = parent;
            unresolved.delete(source);
            attach(source);
        });
    }, 0);
};
const reconnect = (instance) => {
    properties
        .filter((property) => property.instance == instance)
        .forEach((property) => {
        disconnect(property);
        connect(property);
    });
};
const register = (property) => {
    properties.push(property);
};
const setValue = (property, value) => {
    property.instance[property.name] = value;
    /**
     * TODO
     * extra render should be removed. callback 'attributeChangedCallback' in '@Element'
     * should use the 'request' method inside itself to update properties.
     */
    if (property.type == 'INJECT' && property.options)
        request(property.instance);
    // .then(() => {
    //   // render(property.instance)
    // })
    // .catch(() => undefined);
};
const unregister = (property) => {
    const index = properties.findIndex((item) => item === property);
    properties.splice(index, 1);
};
const createDecorator = (parameters) => {
    return (target, name) => {
        const { connectedCallback, disconnectedCallback } = target;
        target.connectedCallback = function () {
            connectedCallback === null || connectedCallback === void 0 ? void 0 : connectedCallback.call(this);
            connect(Object.assign(Object.assign({}, parameters), { instance: this, name }));
        };
        target.disconnectedCallback = function () {
            disconnectedCallback === null || disconnectedCallback === void 0 ? void 0 : disconnectedCallback.call(this);
            disconnect({
                instance: this,
                name
            });
        };
    };
};
const createLink = (config) => {
    const Action = () => {
        return createDecorator({ config, type: 'ACTION' });
    };
    const Inject = (state) => {
        return createDecorator({ config, type: 'INJECT', options: state });
    };
    const Observable = () => {
        return createDecorator({ config, type: 'OBSERVABLE' });
    };
    return {
        Action,
        Inject,
        Observable,
        reconnect
    };
};

class Portal {
    constructor(options) {
        this.options = options;
        this.keys = new Map();
        this.init();
    }
    get source() {
        return [this.options.source].flat();
    }
    get strategy() {
        return this.options.strategy;
    }
    get target() {
        let target = this.options.target;
        if (typeof target === 'string')
            target = document.querySelector(target);
        return target;
    }
    init() {
        for (let i = 0; i < this.source.length; i++) {
            const node = this.source[i];
            const place = document.createElement('div');
            this.keys.set(node, place);
            node['before'](place);
            this.target[this.strategy](node);
        }
    }
    revert() {
        for (let i = 0; i < this.source.length; i++) {
            const node = this.source[i];
            if (!this.keys.has(node))
                continue;
            const place = this.keys.get(node);
            place['replaceWith'](node);
            this.keys.delete(node);
        }
    }
}

// TODO: add dynamic target like html, body, ...
class Scrollbar {
    static get width() {
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = '-9999px';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        document.body.appendChild(div);
        const width = div.getBoundingClientRect().width - div.clientWidth;
        document.body.removeChild(div);
        return width;
    }
    static remove(key) {
        this.keys.add(key);
        if (this.keys.size > 1)
            return;
        const rect = document.body.getBoundingClientRect();
        const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
        if (!isOverflowing)
            return;
        const dir = window
            .getComputedStyle(window.document.body)
            .getPropertyValue('direction')
            .toLowerCase();
        const property = dir == 'rtl' ? 'paddingLeft' : 'paddingRight';
        this.style = {
            overflow: document.body.style.overflow,
            [property]: document.body.style[property]
        };
        document.body.style.overflow = 'hidden';
        const scrollbarWidth = this.width;
        document.body.style[property] = `${scrollbarWidth}px`;
    }
    static reset(key) {
        this.keys.delete(key);
        if (this.keys.size)
            return;
        const keys = Object.keys(this.style);
        for (const key of keys)
            document.body.style[key] = this.style[key];
        this.style = {};
    }
}
Scrollbar.keys = new Set();
Scrollbar.style = {};

// TODO: use regex
const isSize = (input) => {
    return [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        'xxl',
        '1x',
        '2x',
        '3x',
        '4x',
        '5x',
        '6x',
        '7x',
        '8x',
        '9x'
    ].includes(input);
};

const isValidCSSColor = (input) => {
    const option = new Option();
    option.style.color = input;
    return option.style.color !== '';
};

const toAxis = (input, rtl) => {
    if (!input)
        return input;
    if (input.match(/start/))
        input = rtl ? 'right' : 'left';
    if (input.match(/end/))
        input = rtl ? 'left' : 'right';
    return input;
};

const BREAKPOINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
};

function Media(query) {
    const getMedia = (target, query) => {
        const breakpoints = sort(BREAKPOINTS);
        query = normalize(target, query);
        if (!query)
            return;
        const [key, direction] = query.split('-');
        const isUp = direction === 'up';
        const isDown = direction === 'down';
        const index = breakpoints.findIndex((breakpoint) => breakpoint.key === key);
        const min = breakpoints[index].value;
        const max = (breakpoints[index + 1] || {}).value - 1;
        if (isUp || isNaN(max)) {
            query = `(min-width: ${min}px)`;
        }
        else if (isDown) {
            query = `(max-width: ${max}px)`;
        }
        else {
            query = `(min-width: ${min}px) and (max-width: ${max}px)`;
        }
        return window.matchMedia(query);
    };
    const normalize = (target, query) => {
        const isProperty = query.match(/\[(.*)\]/);
        if (isProperty) {
            const property = isProperty[1];
            query = query.replace(`[${property}]`, target[property]);
        }
        return query;
    };
    const sort = (breakpoints) => {
        return Object.keys(breakpoints)
            .map((key) => {
            return {
                key,
                value: breakpoints[key]
            };
        })
            .sort((a, b) => a.value - b.value);
    };
    return function (target, propertyKey) {
        let media;
        const connected = target.connectedCallback;
        target.connectedCallback = function () {
            media = getMedia(this, query);
            const callback = this[propertyKey];
            on(media, 'change', callback);
            connected && connected.bind(this)();
            // TODO
            const event = new Event('change');
            event.matches = media.matches;
            event.media = media.media;
            media.dispatchEvent(event);
        };
        const disconnected = target.disconnectedCallback;
        target.disconnectedCallback = function () {
            const callback = this[propertyKey];
            off(media, 'change', callback);
            disconnected && disconnected.bind(this)();
        };
    };
}

export { Animation2 as A, Bind as B, Event$1 as E, Method as M, PlusCore as P, Query as Q, State as S, Watch as W, __decorate as _, __awaiter as a, Property as b, Element as c, styles as d, attributes$1 as e, host as f, getConfig as g, html as h, isSize as i, QueryAll as j, off as k, classes as l, createLink as m, toAxis as n, on as o, Animation as p, Scrollbar as q, request as r, setConfig as s, toUnit as t, Portal as u, slots as v, Media as w, isValidCSSColor as x, PlusForm as y };
