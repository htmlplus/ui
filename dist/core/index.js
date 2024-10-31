var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const SPLIT_LOWER_UPPER_RE = new RegExp("([\\p{Ll}\\d])(\\p{Lu})", "gu");
const SPLIT_UPPER_UPPER_RE = new RegExp("(\\p{Lu})([\\p{Lu}][\\p{Ll}])", "gu");
const SPLIT_SEPARATE_NUMBER_RE = new RegExp("(\\d)\\p{Ll}|(\\p{L})\\d", "u");
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
const SPLIT_REPLACE_VALUE = "$1\0$2";
const DEFAULT_PREFIX_SUFFIX_CHARACTERS = "";
function split(value) {
  let result = value.trim();
  result = result.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE).replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
  result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
  let start = 0;
  let end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  if (start === end)
    return [];
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split(/\0/g);
}
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
function noCase(input, options) {
  const [prefix2, words, suffix] = splitPrefixSuffix(input, options);
  return prefix2 + words.map(lowerFactory(options == null ? void 0 : options.locale)).join((options == null ? void 0 : options.delimiter) ?? " ") + suffix;
}
function camelCase(input, options) {
  const [prefix2, words, suffix] = splitPrefixSuffix(input, options);
  const lower = lowerFactory(options == null ? void 0 : options.locale);
  const upper = upperFactory(options == null ? void 0 : options.locale);
  const transform = pascalCaseTransformFactory(lower, upper);
  return prefix2 + words.map((word, index) => {
    if (index === 0)
      return lower(word);
    return transform(word, index);
  }).join("") + suffix;
}
function pascalCase(input, options) {
  const [prefix2, words, suffix] = splitPrefixSuffix(input, options);
  const lower = lowerFactory(options == null ? void 0 : options.locale);
  const upper = upperFactory(options == null ? void 0 : options.locale);
  const transform = pascalCaseTransformFactory(lower, upper);
  return prefix2 + words.map(transform).join("") + suffix;
}
function kebabCase(input, options) {
  return noCase(input, { delimiter: "-", ...options });
}
function lowerFactory(locale) {
  return locale === false ? (input) => input.toLowerCase() : (input) => input.toLocaleLowerCase(locale);
}
function upperFactory(locale) {
  return (input) => input.toLocaleUpperCase(locale);
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
    input.slice(suffixIndex)
  ];
}
const KEY = "htmlplus";
const MAPPER = Symbol();
const API_CONNECTED = Symbol();
const API_HOST = Symbol();
const API_INSTANCE = Symbol();
const API_REQUEST = Symbol();
const API_RENDER_COMPLETED = Symbol();
const API_STACKS = Symbol();
const API_STYLE = Symbol();
const LIFECYCLE_ADOPTED = "adoptedCallback";
const LIFECYCLE_CONNECTED = "connectedCallback";
const LIFECYCLE_CONSTRUCTED = "constructedCallback";
const LIFECYCLE_DISCONNECTED = "disconnectedCallback";
const LIFECYCLE_LOADED = "loadedCallback";
const LIFECYCLE_UPDATE = "updateCallback";
const LIFECYCLE_UPDATED = "updatedCallback";
const METHOD_RENDER = "render";
const STATIC_STYLE = "style";
const STATIC_TAG = "tag";
const TYPE_ARRAY = 2 ** 0;
const TYPE_BOOLEAN = 2 ** 2;
const TYPE_DATE = 2 ** 3;
const TYPE_NULL = 2 ** 6;
const TYPE_NUMBER = 2 ** 7;
const TYPE_OBJECT = 2 ** 8;
const TYPE_UNDEFINED = 2 ** 10;
const appendToMethod = (target, key, handler) => {
  const previous = target[key];
  function next(...parameters) {
    const result = previous == null ? void 0 : previous.bind(this)(...parameters);
    handler.bind(this)(...parameters);
    return result;
  }
  target[key] = next;
};
const host = (target) => {
  try {
    return target[API_HOST]();
  } catch {
    return target;
  }
};
const outsides = [];
const dispatch = (target, type, eventInitDict) => {
  const event2 = new CustomEvent(type, eventInitDict);
  host(target).dispatchEvent(event2);
  return event2;
};
const on = (target, type, handler, options) => {
  const element = host(target);
  if (type != "outside") {
    return element.addEventListener(type, handler, options);
  }
  const callback = (event2) => {
    !event2.composedPath().some((item) => item == element) && handler(event2);
  };
  type = "ontouchstart" in window.document.documentElement ? "touchstart" : "click";
  on(document, type, callback, options);
  outsides.push({
    callback,
    element,
    handler,
    options,
    type
  });
};
const off = (target, type, handler, options) => {
  const element = host(target);
  if (type != "outside") {
    return element.removeEventListener(type, handler, options);
  }
  const index = outsides.findIndex((outside2) => {
    return outside2.element == element && outside2.handler == handler && outside2.options == options;
  });
  const outside = outsides[index];
  if (!outside)
    return;
  off(document, outside.type, outside.callback, outside.options);
  outsides.splice(index, 1);
};
const isEvent = (input) => {
  return !!(input == null ? void 0 : input.match(/on[A-Z]\w+/g));
};
const toEvent = (input) => {
  return input == null ? void 0 : input.slice(2).toLowerCase();
};
const updateAttribute = (target, key, value) => {
  const element = host(target);
  const name = kebabCase(key);
  if ([void 0, null, false].includes(value)) {
    return element.removeAttribute(name);
  }
  element.setAttribute(name, value === true ? "" : value);
};
const symbol = Symbol();
const attributes$2 = (target, attributes2) => {
  const element = host(target);
  const prev = element[symbol] || {};
  const next = Object.assign({}, ...attributes2);
  const prevClass = (prev.class || "").split(" ");
  const nextClass = (next.class || "").split(" ");
  const newClass = element.className.split(" ").filter((key) => !prevClass.includes(key) && !nextClass.includes(key)).concat(nextClass).filter((key) => key).join(" ");
  updateAttribute(element, "class", newClass || void 0);
  if (prev.style || next.style)
    element.setAttribute("style", next.style || "");
  for (const key in prev)
    isEvent(key) && off(element, toEvent(key), prev[key]);
  for (const key in next) {
    if (["class", "style"].includes(key))
      continue;
    if (isEvent(key))
      on(element, toEvent(key), next[key]);
    else
      updateAttribute(element, key, next[key]);
  }
  element[symbol] = { ...next };
};
const call = (target, key, ...parameters) => {
  var _a;
  return (_a = target[key]) == null ? void 0 : _a.call(target, ...parameters);
};
const typeOf = (input) => {
  return Object.prototype.toString.call(input).replace(/\[|\]|object| /g, "").toLowerCase();
};
const classes = (input, smart) => {
  const result = [];
  switch (typeOf(input)) {
    case "array": {
      for (const item of input) {
        result.push(classes(item));
      }
      break;
    }
    case "object": {
      const keys = Object.keys(input);
      for (const key of keys) {
        const value = input[key];
        const name = kebabCase(key);
        const type = typeOf(value);
        switch (type) {
          case "boolean": {
            value && result.push(`${name}`);
            break;
          }
          case "number":
          case "string": {
            result.push(`${name}-${value}`);
            break;
          }
        }
      }
      break;
    }
    case "string": {
      result.push(input);
      break;
    }
  }
  return result.filter((item) => item).join(" ");
};
const isServer = () => {
  return !(typeof window != "undefined" && window.document);
};
const merge = (target, ...sources) => {
  for (const source of sources) {
    if (!source)
      continue;
    if (typeOf(source) != "object") {
      target = source;
      continue;
    }
    for (const key of Object.keys(source)) {
      if (target[key] instanceof Object && source[key] instanceof Object && target[key] !== source[key]) {
        target[key] = merge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
};
const DEFAULTS = {
  element: {}
};
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
const setConfig = (config, options) => {
  if (isServer())
    return;
  const previous = (options == null ? void 0 : options.override) ? {} : window[`$htmlplus$`];
  window[`$htmlplus$`] = merge({}, DEFAULTS, previous, config);
};
const defineProperty = Object.defineProperty;
const direction = (target) => {
  return getComputedStyle(host(target)).getPropertyValue("direction");
};
const getFramework = (target) => {
  const element = host(target);
  if ("_qc_" in element)
    return "qwik";
  if ("_$owner" in element)
    return "solid";
  if ("__svelte_meta" in element)
    return "svelte";
  if ("__vnode" in element)
    return "vue";
  const keys = Object.keys(element);
  const has = (input) => keys.some((key) => key.startsWith(input));
  if (has("_blazor"))
    return "blazor";
  if (has("__react"))
    return "react";
  if (has("__zone_symbol__"))
    return "angular";
};
const getTag = (target) => {
  return target.constructor[STATIC_TAG] ?? target[STATIC_TAG];
};
const isCSSColor = (input) => {
  const option = new Option();
  option.style.color = input;
  return option.style.color !== "";
};
const isRTL = (target) => direction(target) == "rtl";
const shadowRoot = (target) => {
  var _a;
  return (_a = host(target)) == null ? void 0 : _a.shadowRoot;
};
function query(target, selectors) {
  var _a;
  return (_a = shadowRoot(target)) == null ? void 0 : _a.querySelector(selectors);
}
function queryAll(target, selectors) {
  var _a;
  return (_a = shadowRoot(target)) == null ? void 0 : _a.querySelectorAll(selectors);
}
const task = (options) => {
  let running, promise;
  const run = () => {
    if (options.canStart && !options.canStart())
      return Promise.resolve(false);
    if (!running)
      promise = enqueue();
    return promise;
  };
  const enqueue = async () => {
    running = true;
    try {
      await promise;
    } catch (error) {
      Promise.reject(error);
    }
    if (!running)
      return promise;
    try {
      if (options.canRun && !options.canRun())
        return running = false;
      options.handler();
      running = false;
      return true;
    } catch (error) {
      running = false;
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
const attributes$1 = /([^\s\\>"'=]+)\s*=\s*(['"]?)\x01/g;
const holes = /[\x01\x02]/g;
var instrument = (template, prefix2, svg) => {
  let i = 0;
  return template.join("").trim().replace(elements, (_, name, attrs, selfClosing) => {
    let ml = name + attrs.replace(attributes$1, "=$2$1").trimEnd();
    if (selfClosing.length) ml += svg || empty.test(name) ? " /" : "></" + name;
    return "<" + ml + ">";
  }).replace(holes, (hole) => hole === "" ? "<!--" + prefix2 + i++ + "-->" : prefix2 + i++);
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
const diffable = (node, operation) => node.nodeType === nodeType ? 1 / operation < 0 ? operation ? remove(node) : node.lastChild : operation ? node.valueOf() : node.firstChild : node;
const persistent = (fragment) => {
  const { firstChild, lastChild } = fragment;
  if (firstChild === lastChild) return lastChild || fragment;
  const { childNodes } = fragment;
  const nodes = [...childNodes];
  return {
    ELEMENT_NODE,
    nodeType,
    firstChild,
    lastChild,
    valueOf() {
      if (childNodes.length !== nodes.length) fragment.append(...nodes);
      return fragment;
    }
  };
};
const { isArray: isArray$1 } = Array;
const aria = (node) => (values) => {
  for (const key in values) {
    const name = key === "role" ? key : `aria-${key}`;
    const value = values[key];
    if (value == null) node.removeAttribute(name);
    else node.setAttribute(name, value);
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
      } else {
        const value = newValue;
        if (value == null) {
          if (!orphan) node.removeAttributeNode(attributeNode);
          orphan = true;
        } else {
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
    if (oldValue = !!newValue) node.setAttribute(key, "");
    else node.removeAttribute(key);
  }
};
const data = ({ dataset }) => (values) => {
  for (const key in values) {
    const value = values[key];
    if (value == null) delete dataset[key];
    else dataset[key] = value;
  }
};
const event = (node, name) => {
  let oldValue, lower, type = name.slice(2);
  if (!(name in node) && (lower = name.toLowerCase()) in node) type = lower.slice(2);
  return (newValue) => {
    const info = isArray$1(newValue) ? newValue : [newValue, false];
    if (oldValue !== info[0]) {
      if (oldValue) node.removeEventListener(type, oldValue, info[1]);
      if (oldValue = info[0]) node.addEventListener(type, oldValue, info[1]);
    }
  };
};
const ref = (node) => {
  let oldValue;
  return (value) => {
    if (oldValue !== value) {
      oldValue = value;
      if (typeof value === "function") value(node);
      else value.current = node;
    }
  };
};
const setter = (node, key) => key === "dataset" ? data(node) : (value) => {
  node[key] = value;
};
const text = (node) => {
  let oldValue;
  return (newValue) => {
    if (oldValue != newValue) {
      oldValue = newValue;
      node.textContent = newValue == null ? "" : newValue;
    }
  };
};
var udomdiff = (parentNode, a, b, get, before) => {
  const bLength = b.length;
  let aEnd = a.length;
  let bEnd = bLength;
  let aStart = 0;
  let bStart = 0;
  let map = null;
  while (aStart < aEnd || bStart < bEnd) {
    if (aEnd === aStart) {
      const node = bEnd < bLength ? bStart ? get(b[bStart - 1], -0).nextSibling : get(b[bEnd - bStart], 0) : before;
      while (bStart < bEnd) parentNode.insertBefore(get(b[bStart++], 1), node);
    } else if (bEnd === bStart) {
      while (aStart < aEnd) {
        if (!map || !map.has(a[aStart])) parentNode.removeChild(get(a[aStart], -1));
        aStart++;
      }
    } else if (a[aStart] === b[bStart]) {
      aStart++;
      bStart++;
    } else if (a[aEnd - 1] === b[bEnd - 1]) {
      aEnd--;
      bEnd--;
    } else if (a[aStart] === b[bEnd - 1] && b[bStart] === a[aEnd - 1]) {
      const node = get(a[--aEnd], -1).nextSibling;
      parentNode.insertBefore(get(b[bStart++], 1), get(a[aStart++], -1).nextSibling);
      parentNode.insertBefore(get(b[--bEnd], 1), node);
      a[aEnd] = b[bEnd];
    } else {
      if (!map) {
        map = /* @__PURE__ */ new Map();
        let i = bStart;
        while (i < bEnd) map.set(b[i], i++);
      }
      if (map.has(a[aStart])) {
        const index = map.get(a[aStart]);
        if (bStart < index && index < bEnd) {
          let i = aStart;
          let sequence = 1;
          while (++i < aEnd && i < bEnd && map.get(a[i]) === index + sequence) sequence++;
          if (sequence > index - bStart) {
            const node = get(a[aStart], 0);
            while (bStart < index) parentNode.insertBefore(get(b[bStart++], 1), node);
          } else {
            parentNode.replaceChild(get(b[bStart++], 1), get(a[aStart++], -1));
          }
        } else aStart++;
      } else parentNode.removeChild(get(a[aStart++], -1));
    }
  }
  return b;
};
const { isArray, prototype } = Array;
const { indexOf } = prototype;
const {
  createDocumentFragment,
  createElement,
  createElementNS,
  createTextNode,
  createTreeWalker,
  importNode
} = new Proxy(typeof window == "undefined" ? {} : window.document, {
  get: (target, method) => (target[method] || function() {
  }).bind(target)
});
const createHTML = (html2) => {
  const template = createElement("template");
  template.innerHTML = html2;
  return template.content;
};
let xml;
const createSVG = (svg) => {
  if (!xml) xml = createElementNS("http://www.w3.org/2000/svg", "svg");
  xml.innerHTML = svg;
  const content = createDocumentFragment();
  content.append(...xml.childNodes);
  return content;
};
const createContent = (text2, svg) => svg ? createSVG(text2) : createHTML(text2);
const reducePath = ({ childNodes }, i) => childNodes[i];
const diff = (comment, oldNodes, newNodes) => udomdiff(
  comment.parentNode,
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
  oldNodes,
  newNodes,
  diffable,
  comment
);
const handleAnything = (comment) => {
  let oldValue, text2, nodes = [];
  const anyContent = (newValue) => {
    switch (typeof newValue) {
      case "string":
      case "number":
      case "boolean":
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (!text2) text2 = createTextNode("");
          text2.data = newValue;
          nodes = diff(comment, nodes, [text2]);
        }
        break;
      case "object":
      case "undefined":
        if (newValue == null) {
          if (oldValue != newValue) {
            oldValue = newValue;
            nodes = diff(comment, nodes, []);
          }
          break;
        }
        if (isArray(newValue)) {
          oldValue = newValue;
          if (newValue.length === 0) nodes = diff(comment, nodes, []);
          else if (typeof newValue[0] === "object") nodes = diff(comment, nodes, newValue);
          else anyContent(String(newValue));
          break;
        }
        if (oldValue !== newValue && "ELEMENT_NODE" in newValue) {
          oldValue = newValue;
          nodes = diff(
            comment,
            nodes,
            newValue.nodeType === 11 ? [...newValue.childNodes] : [newValue]
          );
        }
        break;
      case "function":
        anyContent(newValue(comment));
        break;
    }
  };
  return anyContent;
};
const handleAttribute = (node, name) => {
  switch (name[0]) {
    case "?":
      return boolean(node, name.slice(1), false);
    case ".":
      return setter(node, name.slice(1));
    case "@":
      return event(node, "on" + name.slice(1));
    case "o":
      if (name[1] === "n") return event(node, name);
  }
  switch (name) {
    case "ref":
      return ref(node);
    case "aria":
      return aria(node);
  }
  return attribute(
    node,
    name
    /*, svg*/
  );
};
function handlers(options) {
  const { type, path } = options;
  const node = path.reduceRight(reducePath, this);
  return type === "node" ? handleAnything(node) : type === "attr" ? handleAttribute(
    node,
    options.name
    /*, options.svg*/
  ) : text(node);
}
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
const prefix = "isµ";
const cache$1 = new WeakMapSet();
const textOnly = /^(?:textarea|script|style|title|plaintext|xmp)$/;
const createCache = () => ({
  stack: [],
  // each template gets a stack for each interpolation "hole"
  entry: null,
  // each entry contains details, such as:
  //  * the template that is representing
  //  * the type of node it represents (html or svg)
  //  * the content fragment with all nodes
  //  * the list of updates per each node (template holes)
  //  * the "wired" node or fragment that will get updates
  // if the template or type are different from the previous one
  // the entry gets re-created each time
  wire: null
  // each rendered node represent some wired content and
  // this reference to the latest one. If different, the node
  // will be cleaned up and the new "wire" will be appended
});
const createEntry = (type, template) => {
  const { content, updates } = mapUpdates(type, template);
  return { type, template, content, updates, wire: null };
};
const mapTemplate = (type, template) => {
  const svg = type === "svg";
  const text2 = instrument(template, prefix, svg);
  const content = createContent(text2, svg);
  const tw = createTreeWalker(content, 1 | 128);
  const nodes = [];
  const length = template.length - 1;
  let i = 0;
  let search = `${prefix}${i}`;
  while (i < length) {
    const node = tw.nextNode();
    if (!node) throw `bad template: ${text2}`;
    if (node.nodeType === 8) {
      if (node.data === search) {
        nodes.push({ type: "node", path: createPath(node) });
        search = `${prefix}${++i}`;
      }
    } else {
      while (node.hasAttribute(search)) {
        nodes.push({
          type: "attr",
          path: createPath(node),
          name: node.getAttribute(search)
        });
        node.removeAttribute(search);
        search = `${prefix}${++i}`;
      }
      if (textOnly.test(node.localName) && node.textContent.trim() === `<!--${search}-->`) {
        node.textContent = "";
        nodes.push({ type: "text", path: createPath(node) });
        search = `${prefix}${++i}`;
      }
    }
  }
  return { content, nodes };
};
const mapUpdates = (type, template) => {
  const { content, nodes } = cache$1.get(template) || cache$1.set(template, mapTemplate(type, template));
  const fragment = importNode(content, true);
  const updates = nodes.map(handlers, fragment);
  return { content: fragment, updates };
};
const unroll = (info, { type, template, values }) => {
  const length = unrollValues(info, values);
  let { entry } = info;
  if (!entry || entry.template !== template || entry.type !== type)
    info.entry = entry = createEntry(type, template);
  const { content, updates, wire } = entry;
  for (let i = 0; i < length; i++) updates[i](values[i]);
  return wire || (entry.wire = persistent(content));
};
const unrollValues = ({ stack }, values) => {
  const { length } = values;
  for (let i = 0; i < length; i++) {
    const hole = values[i];
    if (hole instanceof Hole) values[i] = unroll(stack[i] || (stack[i] = createCache()), hole);
    else if (isArray(hole)) unrollValues(stack[i] || (stack[i] = createCache()), hole);
    else stack[i] = null;
  }
  if (length < stack.length) stack.splice(length);
  return length;
};
class Hole {
  constructor(type, template, values) {
    this.type = type;
    this.template = template;
    this.values = values;
  }
}
const tag = (type) => {
  const keyed = new WeakMapSet();
  const fixed = (cache2) => (template, ...values) => unroll(cache2, { type, template, values });
  return Object.assign(
    // non keyed operations are recognized as instance of Hole
    // during the "unroll", recursively resolved and updated
    (template, ...values) => new Hole(type, template, values),
    {
      // keyed operations need a reference object, usually the parent node
      // which is showing keyed results, and optionally a unique id per each
      // related node, handy with JSON results and mutable list of objects
      // that usually carry a unique identifier
      for(ref2, id) {
        const memo = keyed.get(ref2) || keyed.set(ref2, new MapSet());
        return memo.get(id) || memo.set(id, fixed(createCache()));
      },
      // it is possible to create one-off content out of the box via node tag
      // this might return the single created node, or a fragment with all
      // nodes present at the root level and, of course, their child nodes
      node: (template, ...values) => unroll(createCache(), new Hole(type, template, values)).valueOf()
    }
  );
};
const cache = new WeakMapSet();
const render = (where, what) => {
  const hole = typeof what === "function" ? what() : what;
  const info = cache.get(where) || cache.set(where, createCache());
  const wire = hole instanceof Hole ? unroll(info, hole) : hole;
  if (wire !== info.wire) {
    info.wire = wire;
    where.replaceChildren(wire.valueOf());
  }
  return where;
};
const html$1 = tag("html");
tag("svg");
const request = (target, name, previous, callback) => {
  const stacks = target[API_STACKS] || (target[API_STACKS] = /* @__PURE__ */ new Map());
  const stack = stacks.get(name) || { callbacks: [], previous };
  callback && stack.callbacks.push(callback);
  stacks.set(name, stack);
  const handler = () => {
    if (!target[API_CONNECTED])
      return;
    const states = new Map(Array.from(stacks).filter((stack2) => stack2[0]).map((stack2) => [stack2[0], stack2[1].previous]));
    call(target, LIFECYCLE_UPDATE, states);
    render(shadowRoot(target), () => call(target, METHOD_RENDER));
    stacks.forEach((state) => {
      state.callbacks.forEach((callback2, index, callbacks) => {
        callback2(callbacks.length - 1 != index);
      });
    });
    (() => {
      var _a, _b, _c;
      const raw = target.constructor[STATIC_STYLE];
      if (!raw)
        return;
      const regex1 = /this-([\w-]+)(?:-([\w-]+))?/g;
      const regex2 = /(\s*\w+\s*:\s*(undefined|null)\s*;?)/g;
      const regex3 = /global\s+[^{]+\{[^{}]*\{[^{}]*\}[^{}]*\}|global\s+[^{]+\{[^{}]*\}/g;
      const hasGlobal = raw.includes("global");
      const hasVariable = raw.includes("this-");
      let localSheet = target[API_STYLE];
      let globalSheet = target.constructor[API_STYLE];
      if (!hasVariable && localSheet)
        return;
      const parsed = raw.replace(regex1, (match, key) => {
        let value = target;
        for (const section of key.split("-")) {
          value = value == null ? void 0 : value[section];
        }
        return value;
      }).replace(regex2, "");
      if (!localSheet) {
        localSheet = new CSSStyleSheet();
        target[API_STYLE] = localSheet;
        shadowRoot(target).adoptedStyleSheets.push(localSheet);
      }
      const localStyle = parsed.replace(regex3, "");
      localSheet.replaceSync(localStyle);
      if (!hasGlobal || globalSheet)
        return;
      if (!globalSheet) {
        globalSheet = new CSSStyleSheet();
        target.constructor[API_STYLE] = globalSheet;
        document.adoptedStyleSheets.push(globalSheet);
      }
      const globalStyle = (_c = (_b = (_a = parsed == null ? void 0 : parsed.match(regex3)) == null ? void 0 : _a.join("")) == null ? void 0 : _b.replaceAll("global", "")) == null ? void 0 : _c.replaceAll(":host", getTag(target));
      globalSheet.replaceSync(globalStyle);
    })();
    call(target, LIFECYCLE_UPDATED, states);
    stacks.clear();
    target[API_RENDER_COMPLETED] = true;
  };
  target[API_REQUEST] || (target[API_REQUEST] = task({ handler }));
  call(target, API_REQUEST);
};
const styles$1 = (input) => {
  return Object.keys(input).filter((key) => input[key] !== void 0 && input[key] !== null).map((key) => `${key.startsWith("--") ? "--" : ""}${kebabCase(key)}: ${input[key]}`).join("; ");
};
function toDecorator(util, ...parameters) {
  return function(target, key) {
    defineProperty(target, key, {
      get() {
        return util(this, ...parameters);
      }
    });
  };
}
const toProperty = (input, type) => {
  if (type === void 0)
    return input;
  const string = `${input}`;
  if (TYPE_BOOLEAN & type || type === Boolean) {
    if (string === "")
      return true;
    if (string === "true")
      return true;
    if (string === "false")
      return false;
  }
  if (TYPE_NUMBER & type || type === Number) {
    if (string != "" && !isNaN(input)) {
      return parseFloat(input);
    }
  }
  if (TYPE_NULL & type || type === null) {
    if (string === "null") {
      return null;
    }
  }
  if (TYPE_DATE & type || type === Date) {
    const value = new Date(input);
    if (value.toString() != "Invalid Date") {
      return value;
    }
  }
  if (TYPE_ARRAY & type || type === Array) {
    try {
      const value = JSON.parse(input);
      if (typeOf(value) == "array") {
        return value;
      }
    } catch {
    }
  }
  if (TYPE_OBJECT & type || type === Object) {
    try {
      const value = JSON.parse(input);
      if (typeOf(value) == "object") {
        return value;
      }
    } catch {
    }
  }
  if (TYPE_UNDEFINED & type || type === void 0) {
    if (string === "undefined") {
      return void 0;
    }
  }
  return input;
};
const toUnit = (input, unit = "px") => {
  if (input === null || input === void 0 || input === "")
    return input;
  if (isNaN(+input))
    return String(input);
  return Number(input) + unit;
};
function Bind() {
  return function(target, key, descriptor) {
    return {
      configurable: true,
      get() {
        const value = descriptor == null ? void 0 : descriptor.value.bind(this);
        defineProperty(this, key, {
          value,
          configurable: true,
          writable: true
        });
        return value;
      }
    };
  };
}
function Provider(namespace) {
  return function(target, key, descriptor) {
    const symbol2 = Symbol();
    const [MAIN, SUB] = namespace.split(".");
    const prefix2 = `${KEY}:${MAIN}`;
    const cleanups = (instance) => {
      return instance[symbol2] || (instance[symbol2] = /* @__PURE__ */ new Map());
    };
    const update = (instance) => {
      const options = {};
      options.detail = descriptor.get.call(instance);
      dispatch(instance, `${prefix2}:update`, options);
      if (!SUB)
        return;
      options.bubbles = true;
      dispatch(instance, `${prefix2}:${instance[SUB]}:update`, options);
    };
    appendToMethod(target, LIFECYCLE_CONNECTED, function() {
      const cleanup = () => {
        off(this, `${prefix2}:presence`, onPresence);
        cleanups(this).delete(prefix2);
      };
      const onPresence = (event2) => {
        event2.stopPropagation();
        event2.detail(this, descriptor.get.call(this));
      };
      on(this, `${prefix2}:presence`, onPresence);
      cleanups(this).set(prefix2, cleanup);
    });
    appendToMethod(target, LIFECYCLE_UPDATE, function(states) {
      var _a;
      update(this);
      if (cleanups(this).size && !states.has(SUB))
        return;
      (_a = cleanups(this).get(`${prefix2}:${states.get(SUB)}`)) == null ? void 0 : _a();
      const type = `${prefix2}:${this[SUB]}`;
      const cleanup = () => {
        off(window, `${type}:presence`, onPresence);
        cleanups(this).delete(type);
        dispatch(window, `${type}:disconnect`);
      };
      const onPresence = () => {
        update(this);
      };
      on(window, `${type}:presence`, onPresence);
      cleanups(this).set(type, cleanup);
    });
    appendToMethod(target, LIFECYCLE_DISCONNECTED, function() {
      cleanups(this).forEach((cleanup) => cleanup());
    });
  };
}
function Consumer(namespace) {
  return function(target, key) {
    const symbol2 = Symbol();
    const [MAIN, SUB] = namespace.split(".");
    const prefix2 = `${KEY}:${MAIN}`;
    const cleanups = (instance) => {
      return instance[symbol2] || (instance[symbol2] = /* @__PURE__ */ new Map());
    };
    const update = (instance, state) => {
      instance[key] = state;
    };
    appendToMethod(target, LIFECYCLE_CONNECTED, function() {
      if (SUB && this[SUB])
        return;
      let connected;
      const options = {
        bubbles: true
      };
      options.detail = (parent, state) => {
        connected = true;
        update(this, state);
        const cleanup = () => {
          off(parent, `${prefix2}:update`, onUpdate);
          cleanups(this).delete(prefix2);
          update(this, void 0);
        };
        const onUpdate = (event2) => {
          update(this, event2.detail);
        };
        on(parent, `${prefix2}:update`, onUpdate);
        cleanups(this).set(prefix2, cleanup);
      };
      dispatch(this, `${prefix2}:presence`, options);
      !connected && setTimeout(() => dispatch(this, `${prefix2}:presence`, options));
    });
    appendToMethod(target, LIFECYCLE_UPDATE, function(states) {
      var _a;
      if (cleanups(this).size && !states.has(SUB))
        return;
      (_a = cleanups(this).get(`${prefix2}:${states.get(SUB)}`)) == null ? void 0 : _a();
      const type = `${prefix2}:${this[SUB]}`;
      const cleanup = () => {
        off(window, `${type}:disconnect`, onDisconnect);
        off(window, `${type}:update`, onUpdate);
        cleanups(this).delete(type);
        update(this, void 0);
      };
      const onDisconnect = () => {
        update(this, void 0);
      };
      const onUpdate = (event2) => {
        update(this, event2.detail);
      };
      on(window, `${type}:disconnect`, onDisconnect);
      on(window, `${type}:update`, onUpdate);
      cleanups(this).set(type, cleanup);
      dispatch(window, `${type}:presence`);
    });
    appendToMethod(target, LIFECYCLE_DISCONNECTED, function() {
      cleanups(this).forEach((cleanup) => cleanup());
    });
  };
}
function Element() {
  return function(constructor) {
    if (isServer())
      return;
    const tag2 = getTag(constructor);
    if (customElements.get(tag2))
      return;
    customElements.define(tag2, proxy(constructor));
  };
}
const proxy = (constructor) => {
  var _a;
  return _a = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
        delegatesFocus: constructor["delegatesFocus"],
        slotAssignment: constructor["slotAssignment"]
      });
      const instance = this[API_INSTANCE] = new constructor();
      instance[API_HOST] = () => this;
      call(instance, LIFECYCLE_CONSTRUCTED);
    }
    adoptedCallback() {
      call(this[API_INSTANCE], LIFECYCLE_ADOPTED);
    }
    attributeChangedCallback(key, prev, next) {
      var _a2;
      try {
        const attribute2 = (_a2 = constructor[MAPPER]) == null ? void 0 : _a2[key];
        const property = attribute2 || camelCase(key);
        this[property] = next;
      } catch {
      }
    }
    connectedCallback() {
      const instance = this[API_INSTANCE];
      Object.assign(instance, getConfig("element", getTag(instance), "property"));
      instance[API_CONNECTED] = true;
      const connect = () => {
        request(instance, void 0, void 0, () => {
          call(instance, LIFECYCLE_LOADED);
        });
      };
      const callback = call(instance, LIFECYCLE_CONNECTED);
      if (!(callback == null ? void 0 : callback.then))
        return connect();
      callback.then(() => connect());
    }
    disconnectedCallback() {
      call(this[API_INSTANCE], LIFECYCLE_DISCONNECTED);
    }
  }, __publicField(_a, "formAssociated", constructor["formAssociated"]), __publicField(_a, "observedAttributes", constructor["observedAttributes"]), _a;
};
function Event(options = {}) {
  return function(target, key) {
    defineProperty(target, key, {
      get() {
        return (detail) => {
          var _a;
          const element = host(this);
          const framework = getFramework(this);
          options.bubbles ?? (options.bubbles = false);
          let type = String(key);
          switch (framework) {
            case "blazor":
              options.bubbles = true;
              type = pascalCase(type);
              try {
                window["Blazor"].registerCustomEventType(type, {
                  createEventArgs: (event3) => ({
                    detail: event3.detail
                  })
                });
              } catch {
              }
              break;
            case "qwik":
            case "solid":
              type = pascalCase(type).toLowerCase();
              break;
            case "react":
            case "preact":
              type = pascalCase(type);
              break;
            default:
              type = kebabCase(type);
              break;
          }
          let event2;
          event2 || (event2 = (_a = getConfig("event", "resolver")) == null ? void 0 : _a({ detail, element, framework, options, type }));
          event2 && element.dispatchEvent(event2);
          event2 || (event2 = dispatch(this, type, { ...options, detail }));
          return event2;
        };
      }
    });
  };
}
function Host() {
  return toDecorator(host);
}
function Method() {
  return function(target, key) {
    appendToMethod(target, LIFECYCLE_CONSTRUCTED, function() {
      defineProperty(host(this), key, {
        get: () => this[key].bind(this)
      });
    });
  };
}
function Property(options) {
  return function(target, key, descriptor) {
    var _a, _b;
    const locked = Symbol();
    const name = String(key);
    const attribute2 = (options == null ? void 0 : options.attribute) || kebabCase(name);
    ((_a = target.constructor)["observedAttributes"] || (_a["observedAttributes"] = [])).push(attribute2);
    if (attribute2) {
      (_b = target.constructor)[MAPPER] || (_b[MAPPER] = {});
      target.constructor[MAPPER][attribute2] = name;
    }
    if (descriptor) {
      if (options == null ? void 0 : options.reflect) {
        const getter = descriptor.get;
        descriptor.get = function() {
          const value = getter == null ? void 0 : getter.apply(this);
          this[locked] = true;
          updateAttribute(this, attribute2, value);
          this[locked] = false;
          return value;
        };
        appendToMethod(target, LIFECYCLE_UPDATED, function() {
          this[key];
        });
      }
    } else {
      let get = function() {
        return this[symbol2];
      }, set = function(next) {
        const previous = this[symbol2];
        if (next === previous)
          return;
        this[symbol2] = next;
        request(this, name, previous, (skipped) => {
          if (skipped)
            return;
          if (!(options == null ? void 0 : options.reflect))
            return;
          this[locked] = true;
          updateAttribute(this, attribute2, next);
          this[locked] = false;
        });
      };
      const symbol2 = Symbol();
      defineProperty(target, key, { get, set });
    }
    appendToMethod(target, LIFECYCLE_CONSTRUCTED, function() {
      const get = () => {
        return this[key];
      };
      const set = descriptor ? void 0 : (input) => {
        if (this[locked]) {
          return;
        }
        this[key] = toProperty(input, options == null ? void 0 : options.type);
      };
      defineProperty(host(this), key, { get, set, configurable: true });
    });
  };
}
function Query(selectors) {
  return toDecorator(query, selectors);
}
function QueryAll(selectors) {
  return toDecorator(queryAll, selectors);
}
function State() {
  return function(target, key) {
    const name = String(key);
    const symbol2 = Symbol();
    function get() {
      return this[symbol2];
    }
    function set(next) {
      const previous = this[symbol2];
      if (next === previous)
        return;
      this[symbol2] = next;
      request(this, name, previous);
    }
    defineProperty(target, key, { get, set, configurable: true });
  };
}
function Watch(keys, immediate) {
  return function(target, key) {
    const all = [keys].flat().filter((item) => item);
    appendToMethod(target, LIFECYCLE_UPDATED, function(states) {
      if (!immediate && !this[API_RENDER_COMPLETED])
        return;
      states.forEach((previous, item) => {
        if (all.length && !all.includes(item))
          return;
        this[key](this[item], previous, item);
      });
    });
  };
}
const attributes = attributes$2;
const html = html$1;
const styles = styles$1;
var __defProp$1 = Object.defineProperty;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1(target, key, result);
  return result;
};
class PlusCore {
  // TODO
  get dir() {
    return direction(this);
  }
  get isRTL() {
    return isRTL(this);
  }
}
__decorateClass$1([
  Host()
], PlusCore.prototype, "$host");
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp2(target, key, result);
  return result;
};
const _PlusForm = class _PlusForm extends PlusCore {
  get form() {
    return this.internals.form;
  }
  get validationMessage() {
    return this.internals.validationMessage;
  }
  get validity() {
    return this.internals.validity;
  }
  get willValidate() {
    return this.internals.willValidate;
  }
  checkValidity() {
    return this.internals.checkValidity();
  }
  reportValidity() {
    return this.internals.reportValidity();
  }
  setCustomValidity(error) {
    this.internals.setValidity({ customError: true }, error);
  }
  valueWatcher() {
    this.internals.setFormValue(this.value);
  }
  constructedCallback() {
    this.internals = this.$host.attachInternals();
  }
  connectedCallback() {
    if (this.internals.form) {
      on(this.internals.form, "reset", this.onReset);
    }
  }
  disconnectedCallback() {
    if (this.internals.form) {
      off(this.internals.form, "reset", this.onReset);
    }
  }
};
_PlusForm.delegatesFocus = true;
_PlusForm.formAssociated = true;
let PlusForm = _PlusForm;
__decorateClass([
  Property({
    reflect: true,
    type: Boolean
  })
], PlusForm.prototype, "disabled", 2);
__decorateClass([
  Property({
    reflect: true,
    type: String
  })
], PlusForm.prototype, "name", 2);
__decorateClass([
  Property({
    attribute: "readonly",
    reflect: true,
    type: Boolean
  })
], PlusForm.prototype, "readOnly", 2);
__decorateClass([
  Property({
    reflect: true,
    type: Boolean
  })
], PlusForm.prototype, "required", 2);
__decorateClass([
  Property()
], PlusForm.prototype, "form", 1);
__decorateClass([
  Property()
], PlusForm.prototype, "validationMessage", 1);
__decorateClass([
  Property()
], PlusForm.prototype, "validity", 1);
__decorateClass([
  Property()
], PlusForm.prototype, "willValidate", 1);
__decorateClass([
  Method()
], PlusForm.prototype, "checkValidity", 1);
__decorateClass([
  Method()
], PlusForm.prototype, "reportValidity", 1);
__decorateClass([
  Method()
], PlusForm.prototype, "setCustomValidity", 1);
__decorateClass([
  Watch("value", true)
], PlusForm.prototype, "valueWatcher", 1);
const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
function Breakpoint() {
  return function(target, key) {
    const symbol2 = Symbol();
    const connected = target.connectedCallback;
    target.connectedCallback = function() {
      this[symbol2] = [];
      const keys = Object.keys(BREAKPOINTS);
      const callback = (media) => {
        var _a;
        if (media.matches) {
          this[key] = ((_a = media.currentTarget) == null ? void 0 : _a.breakpoint) || media.breakpoint;
        }
      };
      this[symbol2] = keys.map((key2, index) => {
        const min = BREAKPOINTS[keys[index]];
        const max = BREAKPOINTS[keys[index + 1]];
        const query2 = `(min-width: ${min}px)` + (max ? ` and (max-width: ${max - 1}px)` : ``);
        const media = window.matchMedia(query2);
        media["breakpoint"] = key2;
        on(media, "change", callback);
        callback(media);
        return () => off(media, "change", callback);
      });
      connected == null ? void 0 : connected.call(this);
    };
    const disconnected = target.disconnectedCallback;
    target.disconnectedCallback = function() {
      for (const teardown of this[symbol2]) {
        teardown();
      }
      this[symbol2] = [];
      disconnected == null ? void 0 : disconnected.call(this);
    };
  };
}
function Style() {
  return function(target, key) {
    const symbol2 = Symbol();
    const updated = target.updatedCallback;
    target.updatedCallback = function() {
      const element = host(this);
      let style = this[symbol2];
      if (!style) {
        style = new CSSStyleSheet();
        style.replace(":host {}");
        element.shadowRoot.adoptedStyleSheets.push(style);
        style = this[symbol2] = style.cssRules[0].style;
      }
      const value = this[key];
      for (const key2 of Object.keys(value)) {
        if (value[key2]) {
          style.setProperty(key2, value[key2]);
        } else if (value) {
          style.removeProperty(key2);
        }
      }
      return updated == null ? void 0 : updated.call(this);
    };
  };
}
const isSize = (input) => {
  return [
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x"
  ].includes(input);
};
const toAxis = (input, rtl) => {
  if (!input) return input;
  if (input.match(/start/)) input = rtl ? "right" : "left";
  if (input.match(/end/)) input = rtl ? "left" : "right";
  return input;
};
class Animation {
  constructor(config) {
    this.state = "leaved";
    this.config = Object.assign({}, this.config, config, {
      states: Object.assign(
        {},
        {
          enter: "enter",
          entering: "entering",
          entered: "entered",
          leave: "leave",
          leaving: "leaving",
          leaved: "leaved"
        },
        config.states
      )
    });
  }
  get animation() {
    return this.source.getAnimations()[0];
  }
  get source() {
    const element = this.config.source;
    if (typeof element == "function") return element();
    return element;
  }
  get target() {
    const element = this.config.target;
    if (typeof element == "function") return element();
    return element;
  }
  dispose() {
    var _a;
    (_a = this.destroy) == null ? void 0 : _a.call(this);
  }
  enter(parameters) {
    return new Promise((resolve) => {
      var _a, _b, _c;
      (_a = this.destroy) == null ? void 0 : _a.call(this);
      this.update("enter");
      (_c = (_b = this.config).onEnter) == null ? void 0 : _c.call(_b, parameters);
      this.next(() => {
        var _a2, _b2;
        this.update("entering");
        (_b2 = (_a2 = this.config).onEntering) == null ? void 0 : _b2.call(_a2, parameters);
        const onCancel = () => {
          resolve(true);
        };
        const onFinish = () => {
          var _a3, _b3;
          this.update("entered");
          (_b3 = (_a3 = this.config).onEntered) == null ? void 0 : _b3.call(_a3, parameters);
          resolve(false);
        };
        if (!this.animation) return onFinish();
        this.destroy = () => {
          var _a3, _b3;
          resolve(true);
          (_a3 = this.animation) == null ? void 0 : _a3.removeEventListener("cancel", onCancel);
          (_b3 = this.animation) == null ? void 0 : _b3.removeEventListener("finish", onFinish);
        };
        this.animation.addEventListener("cancel", onCancel, { once: true });
        this.animation.addEventListener("finish", onFinish, { once: true });
      });
    });
  }
  initialize(state) {
    this.update(state);
  }
  leave(parameters) {
    return new Promise((resolve) => {
      var _a, _b, _c;
      (_a = this.destroy) == null ? void 0 : _a.call(this);
      this.update("leave");
      (_c = (_b = this.config).onLeave) == null ? void 0 : _c.call(_b, parameters);
      this.next(() => {
        var _a2, _b2;
        this.update("leaving");
        (_b2 = (_a2 = this.config).onLeaving) == null ? void 0 : _b2.call(_a2, parameters);
        const onCancel = () => {
          resolve(true);
        };
        const onFinish = () => {
          var _a3, _b3;
          this.update("leaved");
          (_b3 = (_a3 = this.config).onLeaved) == null ? void 0 : _b3.call(_a3, parameters);
          resolve(false);
        };
        if (!this.animation) return onFinish();
        this.destroy = () => {
          var _a3, _b3;
          resolve(true);
          (_a3 = this.animation) == null ? void 0 : _a3.removeEventListener("cancel", onCancel);
          (_b3 = this.animation) == null ? void 0 : _b3.removeEventListener("finish", onFinish);
        };
        this.animation.addEventListener("cancel", onCancel, { once: true });
        this.animation.addEventListener("finish", onFinish, { once: true });
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
const _Scrollbar = class _Scrollbar {
  static get width() {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "-9999px";
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflow = "scroll";
    document.body.appendChild(div);
    const width = div.getBoundingClientRect().width - div.clientWidth;
    document.body.removeChild(div);
    return width;
  }
  static remove(key) {
    this.keys.add(key);
    if (this.keys.size > 1) return;
    const rect = document.body.getBoundingClientRect();
    const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    if (!isOverflowing) return;
    const dir = window.getComputedStyle(window.document.body).getPropertyValue("direction").toLowerCase();
    const property = dir == "rtl" ? "paddingLeft" : "paddingRight";
    this.style = {
      overflow: document.body.style.overflow,
      [property]: document.body.style[property]
    };
    document.body.style.overflow = "hidden";
    const scrollbarWidth = this.width;
    document.body.style[property] = `${scrollbarWidth}px`;
  }
  static reset(key) {
    this.keys.delete(key);
    if (this.keys.size) return;
    const keys = Object.keys(this.style);
    for (const key2 of keys) document.body.style[key2] = this.style[key2];
    this.style = {};
  }
};
_Scrollbar.keys = /* @__PURE__ */ new Set();
_Scrollbar.style = {};
let Scrollbar = _Scrollbar;
export {
  Animation as A,
  Bind as B,
  Consumer as C,
  Element as E,
  Method as M,
  PlusCore as P,
  Query as Q,
  Style as S,
  Watch as W,
  Property as a,
  off as b,
  Event as c,
  attributes as d,
  State as e,
  Provider as f,
  PlusForm as g,
  html as h,
  isCSSColor as i,
  Scrollbar as j,
  toAxis as k,
  classes as l,
  Breakpoint as m,
  isSize as n,
  on as o,
  getConfig as p,
  setConfig as q,
  query as r,
  styles as s,
  toUnit as t,
  QueryAll as u
};
