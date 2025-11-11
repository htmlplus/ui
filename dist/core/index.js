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
  return prefix2 + words.map(lowerFactory(options?.locale)).join(options?.delimiter ?? " ") + suffix;
}
function pascalCase(input, options) {
  const [prefix2, words, suffix] = splitPrefixSuffix(input, options);
  const lower = lowerFactory(options?.locale);
  const upper = upperFactory(options?.locale);
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
const API_CONNECTED = Symbol();
const API_DEFAULTS = Symbol();
const API_HOST = Symbol();
const API_REQUEST = Symbol();
const API_RENDER_COMPLETED = Symbol();
const API_STACKS = Symbol();
const API_STYLE = Symbol();
const LIFECYCLE_ADOPTED = "adoptedCallback";
const LIFECYCLE_CONNECTED = "connectedCallback";
const LIFECYCLE_CONSTRUCTED = "constructedCallback";
const LIFECYCLE_DISCONNECTED = "disconnectedCallback";
const LIFECYCLE_READY = "readyCallback";
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
const TYPE_STRING = 2 ** 9;
const TYPE_UNDEFINED = 2 ** 10;
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
  if (type !== "outside") {
    return element.addEventListener(type, handler, options);
  }
  const callback = (event2) => {
    const has = event2.composedPath().some((item) => item === element);
    if (has)
      return;
    if (typeof handler === "function") {
      handler(event2);
    } else {
      handler.handleEvent(event2);
    }
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
  if (type !== "outside") {
    return void element.removeEventListener(type, handler, options);
  }
  const index = outsides.findIndex((outside2) => {
    return outside2.element === element && outside2.handler === handler && outside2.options === options;
  });
  const outside = outsides[index];
  if (!outside)
    return;
  off(document, outside.type, outside.callback, outside.options);
  outsides.splice(index, 1);
};
const isEvent = (input) => {
  return !!input?.match(/on[A-Z]\w+/g);
};
const toEvent = (input) => {
  return input?.slice(2).toLowerCase();
};
const updateAttribute = (target, key, value) => {
  const element = host(target);
  if (value === void 0 || value === null || value === false) {
    return void element.removeAttribute(key);
  }
  element.setAttribute(key, value === true ? "" : String(value));
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
      updateAttribute(element, kebabCase(key), next[key]);
  }
  element[symbol] = { ...next };
};
const call = (target, key, ...args) => {
  return target[key]?.apply(target, args);
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
      const obj = input;
      const keys = Object.keys(obj);
      for (const key of keys) {
        const value = obj[key];
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
const merge = (target, ...sources) => {
  for (const source of sources) {
    if (!source)
      continue;
    if (typeOf(source) !== "object") {
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
const getConfig$1 = (namespace) => {
  return globalThis[`$htmlplus:${namespace}$`] || {};
};
const getConfigCreator = (namespace) => () => {
  return getConfig$1(namespace);
};
const setConfig$1 = (namespace, config, options) => {
  const previous = options?.override ? {} : globalThis[`$htmlplus:${namespace}$`];
  const next = merge({}, previous, config);
  globalThis[`$htmlplus:${namespace}$`] = next;
};
const setConfigCreator = (namespace) => (config, options) => {
  return setConfig$1(namespace, config, options);
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
const getNamespace = (target) => {
  return getTag(target)?.split("-")?.at(0);
};
const isCSSColor = (input) => {
  const option = new Option();
  option.style.color = input;
  return option.style.color !== "";
};
const isCSSUnit = (input) => {
  return /^\d+(\.\d+)?(px|pt|cm|mm|in|em|rem|%|vw|vh)$/.test(input);
};
const isRTL = (target) => {
  return direction(target) === "rtl";
};
const isServer = () => {
  return !(typeof window !== "undefined" && window.document);
};
const shadowRoot = (target) => {
  return host(target)?.shadowRoot;
};
function query(target, selectors) {
  return shadowRoot(target)?.querySelector(selectors);
}
function queryAll(target, selectors) {
  return shadowRoot(target)?.querySelectorAll(selectors);
}
const task = (options) => {
  let running;
  let promise;
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
      if (options.canRun && !options.canRun()) {
        running = false;
        return running;
      }
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
      // primitives are handled as text content
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
      // null, and undefined are used to cleanup previous content
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
const requestUpdate = (target, name, previous, callback) => {
  target[API_STACKS] ||= /* @__PURE__ */ new Map();
  const stacks = target[API_STACKS];
  const stack = stacks.get(name) || { callbacks: [], previous };
  callback && stack.callbacks.push(callback);
  stacks.set(name, stack);
  const handler = () => {
    if (!target[API_CONNECTED])
      return;
    const states = new Map(Array.from(stacks).filter((stack2) => stack2[0]).map((stack2) => [stack2[0], stack2[1].previous]));
    call(target, LIFECYCLE_UPDATE, states);
    render(shadowRoot(target), () => call(target, METHOD_RENDER) ?? null);
    stacks.forEach((state) => {
      state.callbacks.forEach((callback2, index, callbacks) => {
        callback2(callbacks.length - 1 !== index);
      });
    });
    (() => {
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
      const parsed = raw.replace(regex1, (_match, key) => {
        let value = target;
        for (const section of key.split("-")) {
          value = value?.[section];
        }
        return value;
      }).replace(regex2, "");
      if (!localSheet) {
        localSheet = new CSSStyleSheet();
        target[API_STYLE] = localSheet;
        shadowRoot(target)?.adoptedStyleSheets.push(localSheet);
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
      const globalStyle = parsed?.match(regex3)?.join("")?.replaceAll("global", "")?.replaceAll(":host", getTag(target) || "");
      globalSheet.replaceSync(globalStyle);
    })();
    call(target, LIFECYCLE_UPDATED, states);
    stacks.clear();
    target[API_RENDER_COMPLETED] = true;
  };
  target[API_REQUEST] ||= task({ handler });
  call(target, API_REQUEST);
};
const styles$1 = (input) => {
  return Object.keys(input).filter((key) => input[key] !== void 0 && input[key] !== null).map((key) => `${key.startsWith("--") ? "--" : ""}${kebabCase(key)}: ${input[key]}`).join("; ");
};
function toDecorator(util, ...args) {
  return (target, key) => {
    defineProperty(target, key, {
      get() {
        return util(this, ...args);
      }
    });
  };
}
const toProperty = (input, type) => {
  if (type === void 0)
    return input;
  const string = `${input}`;
  const typeNumber = typeof type === "number" ? type : 0;
  if (TYPE_BOOLEAN & typeNumber || type === Boolean) {
    if (string === "")
      return true;
    if (string === "true")
      return true;
    if (string === "false")
      return false;
  }
  if (TYPE_NUMBER & typeNumber || type === Number) {
    if (string !== "" && !Number.isNaN(Number(input))) {
      return parseFloat(string);
    }
  }
  if (TYPE_NULL & typeNumber || type === null) {
    if (string === "null") {
      return null;
    }
  }
  if (TYPE_DATE & typeNumber || type === Date) {
    const value = new Date(string);
    if (!Number.isNaN(value.getTime())) {
      return value;
    }
  }
  if (TYPE_ARRAY & typeNumber || type === Array) {
    try {
      const value = JSON.parse(string);
      if (typeOf(value) === "array")
        return value;
    } catch {
    }
  }
  if (TYPE_OBJECT & typeNumber || type === Object) {
    try {
      const value = JSON.parse(string);
      if (typeOf(value) === "object") {
        return value;
      }
    } catch {
    }
  }
  if (TYPE_UNDEFINED & typeNumber) {
    if (string === "undefined") {
      return void 0;
    }
  }
  if (TYPE_STRING & typeNumber || type === String) {
    return string;
  }
  try {
    return JSON.parse(string);
  } catch {
    return input;
  }
};
const wrapMethod = (mode, target, key, handler) => {
  const original = target[key];
  if (original && typeof original !== "function") {
    throw new TypeError(`Property ${String(key)} is not a function`);
  }
  function wrapped(...args) {
    if (mode === "before") {
      handler.apply(this, args);
    }
    const result = original?.apply(this, args);
    if (mode === "after") {
      handler.apply(this, args);
    }
    return result;
  }
  target[key] = wrapped;
};
function Bind() {
  return (_target, key, descriptor) => {
    const original = descriptor.value;
    return {
      configurable: true,
      get() {
        const next = original.bind(this);
        defineProperty(this, key, {
          value: next,
          configurable: true,
          writable: true
        });
        return next;
      }
    };
  };
}
function Provider(namespace) {
  return (target, key) => {
    const symbol2 = Symbol();
    const [MAIN, SUB] = namespace.split(".");
    const prefix2 = `${KEY}:${MAIN}`;
    const cleanups = (instance) => {
      return instance[symbol2] ||= /* @__PURE__ */ new Map();
    };
    const update = (instance) => {
      const options = {};
      options.detail = instance[key];
      dispatch(instance, `${prefix2}:update`, options);
      if (!SUB)
        return;
      options.bubbles = true;
      dispatch(instance, `${prefix2}:${instance[SUB]}:update`, options);
    };
    wrapMethod("after", target, LIFECYCLE_CONNECTED, function() {
      const cleanup = () => {
        off(this, `${prefix2}:presence`, onPresence);
        cleanups(this).delete(prefix2);
      };
      const onPresence = (event2) => {
        event2.stopPropagation();
        event2.detail(this, this[key]);
      };
      on(this, `${prefix2}:presence`, onPresence);
      cleanups(this).set(prefix2, cleanup);
    });
    wrapMethod("after", target, LIFECYCLE_UPDATE, function(states) {
      update(this);
      if (cleanups(this).size && !states.has(SUB))
        return;
      cleanups(this).get(`${prefix2}:${states.get(SUB)}`)?.();
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
    wrapMethod("after", target, LIFECYCLE_DISCONNECTED, function() {
      cleanups(this).forEach((cleanup) => {
        cleanup();
      });
    });
  };
}
function Consumer(namespace) {
  return (target, key) => {
    const symbol2 = Symbol();
    const [MAIN, SUB] = namespace.split(".");
    const prefix2 = `${KEY}:${MAIN}`;
    const cleanups = (instance) => {
      return instance[symbol2] ||= /* @__PURE__ */ new Map();
    };
    const update = (instance, state) => {
      instance[key] = state;
    };
    wrapMethod("after", target, LIFECYCLE_CONNECTED, function() {
      if (SUB && this[SUB])
        return;
      let connected = false;
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
    wrapMethod("after", target, LIFECYCLE_UPDATE, function(states) {
      if (cleanups(this).size && !states.has(SUB))
        return;
      cleanups(this).get(`${prefix2}:${states.get(SUB)}`)?.();
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
    wrapMethod("after", target, LIFECYCLE_DISCONNECTED, function() {
      cleanups(this).forEach((cleanup) => {
        cleanup();
      });
    });
  };
}
function Element() {
  return (constructor) => {
    if (isServer())
      return;
    const tag2 = getTag(constructor);
    if (!tag2)
      return;
    if (customElements.get(tag2))
      return;
    customElements.define(tag2, proxy(constructor));
  };
}
const proxy = (constructor) => {
  return class Plus extends HTMLElement {
    #instance;
    // biome-ignore lint: TODO
    static formAssociated = constructor["formAssociated"];
    // biome-ignore lint: TODO
    static observedAttributes = constructor["observedAttributes"];
    constructor() {
      super();
      this.attachShadow({
        mode: "open",
        // biome-ignore lint: TODO
        delegatesFocus: constructor["delegatesFocus"],
        // biome-ignore lint: TODO
        slotAssignment: constructor["slotAssignment"]
      });
      this.#instance = new constructor();
      this.#instance[API_HOST] = () => this;
      call(this.#instance, LIFECYCLE_CONSTRUCTED);
    }
    adoptedCallback() {
      call(this.#instance, LIFECYCLE_ADOPTED);
    }
    attributeChangedCallback(key, prev, next) {
      if (prev !== next) {
        this.#instance[`RAW:${key}`] = next;
      }
    }
    connectedCallback() {
      (() => {
        const namespace = getNamespace(this.#instance) || "";
        const tag2 = getTag(this.#instance) || "";
        const properties = getConfig$1(namespace).elements?.[tag2]?.properties;
        if (!properties)
          return;
        const defaults = Object.fromEntries(Object.entries(properties).map(([key, value]) => [key, value?.default]));
        Object.assign(this, defaults);
      })();
      (() => {
        const key = Object.keys(this).find((key2) => key2.startsWith("__reactProps"));
        const props = this[key];
        if (!props)
          return;
        for (const [key2, value] of Object.entries(props)) {
          if (this[key2] !== void 0)
            continue;
          if (key2 === "children")
            continue;
          if (typeof value !== "object")
            continue;
          this[key2] = value;
        }
      })();
      this.#instance[API_CONNECTED] = true;
      call(this.#instance, LIFECYCLE_CONNECTED);
      requestUpdate(this.#instance, void 0, void 0, () => {
        call(this.#instance, LIFECYCLE_READY);
      });
    }
    disconnectedCallback() {
      call(this.#instance, LIFECYCLE_DISCONNECTED);
    }
  };
};
function Event(options = {}) {
  return (target, key) => {
    target[key] = function(detail) {
      const element = host(this);
      const framework = getFramework(this);
      options.bubbles ??= false;
      let type = String(key);
      switch (framework) {
        // TODO: Experimental
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
      const resolver = getConfig$1(getNamespace(target) || "").event?.resolver;
      event2 ||= resolver?.({ detail, element, framework, options, type });
      event2 && element.dispatchEvent(event2);
      event2 ||= dispatch(this, type, { ...options, detail });
      return event2;
    };
  };
}
function Host() {
  return toDecorator(host);
}
function Listen(type, options) {
  return (target, key, descriptor) => {
    const element = (instance) => {
      switch (options?.target) {
        case "body":
          return window.document.body;
        case "document":
          return window.document;
        case "window":
          return window;
        case "host":
          return instance;
        default:
          return instance;
      }
    };
    wrapMethod("before", target, LIFECYCLE_CONNECTED, function() {
      on(element(this), type, this[key], options);
    });
    wrapMethod("before", target, LIFECYCLE_DISCONNECTED, function() {
      off(element(this), type, this[key], options);
    });
    return Bind()(target, key, descriptor);
  };
}
function Method() {
  return (target, key, _descriptor) => {
    wrapMethod("before", target, LIFECYCLE_CONSTRUCTED, function() {
      host(this)[key] = this[key].bind(this);
    });
  };
}
const CONTAINER_DATA = Symbol();
const getContainers = (breakpoints) => {
  return Object.entries(breakpoints || {}).reduce((result, [key, breakpoint]) => {
    if (breakpoint.type !== "container")
      return result;
    result[key] = {
      min: breakpoint.min,
      max: breakpoint.max
    };
    return result;
  }, {});
};
const getMedias = (breakpoints) => {
  return Object.entries(breakpoints || {}).reduce((result, [key, breakpoint]) => {
    if (breakpoint.type !== "media")
      return result;
    const parts = [];
    const min = "min" in breakpoint ? breakpoint.min : void 0;
    const max = "max" in breakpoint ? breakpoint.max : void 0;
    if (min !== void 0)
      parts.push(`(min-width: ${min}px)`);
    if (max !== void 0)
      parts.push(`(max-width: ${max}px)`);
    const query2 = parts.join(" and ");
    if (query2)
      result[key] = query2;
    return result;
  }, {});
};
const matchContainer = (element, container) => {
  const getData = () => {
    if (element[CONTAINER_DATA])
      return element[CONTAINER_DATA];
    const listeners = /* @__PURE__ */ new Set();
    const observer = new ResizeObserver(() => {
      listeners.forEach((listener) => {
        listener();
      });
    });
    observer.observe(element);
    element[CONTAINER_DATA] = { listeners, observer };
    return element[CONTAINER_DATA];
  };
  const getMatches = () => {
    const width = element.offsetWidth;
    const matches = (container.min === void 0 || width >= container.min) && (container.max === void 0 || width <= container.max);
    return matches;
  };
  const addEventListener = (_type, listener) => {
    getData().listeners.add(listener);
  };
  const removeEventListener = (_type, listener) => {
    const data2 = getData();
    data2.listeners.delete(listener);
    if (data2.listeners.size !== 0)
      return;
    data2.observer.disconnect();
    delete element[CONTAINER_DATA];
  };
  return {
    get matches() {
      return getMatches();
    },
    addEventListener,
    removeEventListener
  };
};
function Overrides() {
  return (target, key) => {
    const DISPOSERS = Symbol();
    const breakpoints = getConfig$1(getNamespace(target) || "").breakpoints || {};
    const containers = getContainers(breakpoints);
    const medias = getMedias(breakpoints);
    wrapMethod("after", target, LIFECYCLE_UPDATE, function(states) {
      if (!states.has(key))
        return;
      this[DISPOSERS] ??= /* @__PURE__ */ new Map();
      const disposers = this[DISPOSERS];
      const overrides = this[key] || {};
      const activeKeys = new Set(disposers.keys());
      const overrideKeys = Object.keys(overrides);
      const containerKeys = overrideKeys.filter((breakpoint) => breakpoint in containers);
      const mediaKeys = overrideKeys.filter((breakpoint) => breakpoint in medias);
      let next = {};
      let scheduled = false;
      const apply = (overrideKey) => {
        overrideKey && Object.assign(next, overrides[overrideKey]);
        if (scheduled)
          return;
        scheduled = true;
        queueMicrotask(() => {
          scheduled = false;
          const defaults = Object.assign({}, this[API_DEFAULTS], next);
          delete defaults[key];
          Object.assign(host(this), defaults);
          next = {};
        });
      };
      for (const overrideKey of overrideKeys) {
        if (activeKeys.delete(overrideKey))
          continue;
        const breakpoint = breakpoints[overrideKey];
        if (!breakpoint)
          continue;
        switch (breakpoint.type) {
          case "container": {
            const container = containers[overrideKey];
            if (!container)
              break;
            const containerQueryList = matchContainer(host(this), container);
            const change = () => {
              for (const containerKey of containerKeys) {
                if (matchContainer(host(this), containers[containerKey]).matches) {
                  apply(containerKey);
                }
              }
              apply();
            };
            containerQueryList.addEventListener("change", change);
            const disposer = () => {
              containerQueryList.removeEventListener("change", change);
            };
            disposers.set(overrideKey, disposer);
            if (!containerQueryList.matches)
              break;
            change();
            break;
          }
          case "media": {
            const media = medias[overrideKey];
            if (!media)
              break;
            const mediaQueryList = window.matchMedia(media);
            const change = () => {
              for (const mediaKey of mediaKeys) {
                if (window.matchMedia(medias[mediaKey]).matches) {
                  apply(mediaKey);
                }
              }
              apply();
            };
            mediaQueryList.addEventListener("change", change);
            const disposer = () => {
              mediaQueryList.removeEventListener("change", change);
            };
            disposers.set(overrideKey, disposer);
            if (!mediaQueryList.matches)
              break;
            change();
            break;
          }
        }
      }
      for (const activeKey of activeKeys) {
        const disposer = disposers.get(activeKey);
        disposer?.();
        disposers.delete(activeKey);
      }
    });
    wrapMethod("after", target, LIFECYCLE_DISCONNECTED, function() {
      this[DISPOSERS] ??= /* @__PURE__ */ new Map();
      const disposers = this[DISPOSERS];
      disposers.forEach((disposer) => {
        disposer();
      });
      disposers.clear();
    });
  };
}
function Property(options) {
  return (target, key, descriptor) => {
    const KEY2 = Symbol();
    const LOCKED = Symbol();
    const attribute2 = options?.attribute || kebabCase(key);
    const originalSetter = descriptor?.set;
    target.constructor["observedAttributes"] ||= [];
    target.constructor["observedAttributes"].push(attribute2);
    function get() {
      return this[KEY2];
    }
    function set(value) {
      const previous = this[KEY2];
      const next = value;
      if (!originalSetter && next === previous)
        return;
      if (originalSetter) {
        originalSetter.call(this, next);
      } else {
        this[KEY2] = next;
      }
      requestUpdate(this, key, previous, (skipped) => {
        if (skipped)
          return;
        if (!options?.reflect)
          return;
        this[LOCKED] = true;
        updateAttribute(this, attribute2, next);
        this[LOCKED] = false;
      });
    }
    if (originalSetter) {
      descriptor.set = set;
    }
    if (!descriptor) {
      defineProperty(target, key, { configurable: true, get, set });
    }
    defineProperty(target, `RAW:${attribute2}`, {
      set(value) {
        if (!this[LOCKED]) {
          this[key] = toProperty(value, options?.type);
        }
      }
    });
    wrapMethod("before", target, LIFECYCLE_CONNECTED, function() {
      this[API_DEFAULTS] ||= {};
      this[API_DEFAULTS][key] = this[key];
    });
    wrapMethod("before", target, LIFECYCLE_CONSTRUCTED, function() {
      const get2 = () => {
        if (descriptor && !descriptor.get) {
          throw new Error(`Property '${key}' does not have a getter. Unable to retrieve value.`);
        }
        return this[key];
      };
      const set2 = (value) => {
        if (descriptor && !descriptor.set) {
          throw new Error(`Property '${key}' does not have a setter. Unable to assign value.`);
        }
        this[key] = value;
      };
      defineProperty(host(this), key, { configurable: true, get: get2, set: set2 });
    });
    if (options?.reflect && descriptor?.get) {
      wrapMethod("before", target, LIFECYCLE_UPDATED, function() {
        this[LOCKED] = true;
        updateAttribute(this, attribute2, this[key]);
        this[LOCKED] = false;
      });
    }
  };
}
function Query(selectors) {
  return toDecorator(query, selectors);
}
function QueryAll(selectors) {
  return toDecorator(queryAll, selectors);
}
function State() {
  return (target, key) => {
    const KEY2 = Symbol();
    const name = String(key);
    defineProperty(target, key, {
      enumerable: true,
      configurable: true,
      get() {
        return this[KEY2];
      },
      set(next) {
        const previous = this[KEY2];
        if (next === previous)
          return;
        this[KEY2] = next;
        requestUpdate(this, name, previous);
      }
    });
  };
}
function Style() {
  return (target, key) => {
    const LAST = Symbol();
    const SHEET = Symbol();
    wrapMethod("before", target, LIFECYCLE_UPDATED, function() {
      let sheet = this[SHEET];
      let value = this[key];
      const update = (value2) => (result) => {
        if (value2 && value2 !== this[LAST])
          return;
        sheet.replaceSync(toCssString(result));
        this[LAST] = void 0;
      };
      if (!sheet) {
        sheet = new CSSStyleSheet();
        this[SHEET] = sheet;
        shadowRoot(this)?.adoptedStyleSheets.push(sheet);
      }
      if (typeof value === "function") {
        value = value.call(this);
      }
      if (value instanceof Promise) {
        value.then(update(this[LAST] = value)).catch((error) => {
          throw new Error("TODO", { cause: error });
        });
      } else {
        update()(value);
      }
    });
  };
}
const toCssString = (input, parent) => {
  if (typeof input === "string") {
    return input.trim();
  }
  if (Array.isArray(input)) {
    return input.map((item) => toCssString(item, parent)).filter(Boolean).join("\n");
  }
  if (input === null)
    return "";
  if (typeof input !== "object")
    return "";
  let result = "";
  for (const key of Object.keys(input)) {
    const value = input[key];
    const ignore = [null, void 0, false].includes(value);
    if (ignore)
      continue;
    const cssKey = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    if (typeof value === "object") {
      result += `${cssKey} {${toCssString(value, cssKey)}}`;
    } else {
      result += `${cssKey}: ${value};`;
    }
  }
  return parent ? result : `:host {${result}}`;
};
function Variant() {
  return (target, key) => {
    wrapMethod("after", target, LIFECYCLE_UPDATE, function(states) {
      if (!states.has(key))
        return;
      const namespace = getNamespace(target) || "";
      const tag2 = getTag(this) || "";
      const properties = getConfig$1(namespace).elements?.[tag2]?.variants?.[this[key]]?.properties;
      if (!properties)
        return;
      const defaults = Object.assign({}, this[API_DEFAULTS], properties);
      delete defaults[key];
      Object.assign(this, defaults);
    });
  };
}
function Watch(keys, immediate) {
  return (target, key) => {
    const all = [keys].flat().filter((item) => item);
    wrapMethod("after", target, LIFECYCLE_UPDATED, function(states) {
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
const BREAKPOINTS = {
  xs: {
    type: "media",
    min: 0
  },
  sm: {
    type: "media",
    min: 600
  },
  md: {
    type: "media",
    min: 900
  },
  lg: {
    type: "media",
    min: 1200
  },
  xl: {
    type: "media",
    min: 1536
  },
  "@xs": {
    type: "container",
    min: 0
  },
  "@sm": {
    type: "container",
    min: 384
  },
  "@md": {
    type: "container",
    min: 640
  },
  "@lg": {
    type: "container",
    min: 768
  },
  "@xl": {
    type: "container",
    min: 1024
  }
};
const NAMESPACE = "plus";
const getConfig = getConfigCreator(NAMESPACE);
const setConfig = setConfigCreator(NAMESPACE);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
setConfig({
  breakpoints: BREAKPOINTS
});
class PlusCore {
  // TODO
  get dir() {
    return direction(this);
  }
  get isRTL() {
    return isRTL(this);
  }
  forceUpdate() {
    this.tick = Math.random();
  }
}
__decorateClass$1([
  Host()
], PlusCore.prototype, "$host", 2);
__decorateClass$1([
  State()
], PlusCore.prototype, "tick", 2);
__decorateClass$1([
  Bind()
], PlusCore.prototype, "forceUpdate", 1);
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
class ExternalDependencyError extends Error {
  constructor(element, key, options) {
    const message = [
      `The "${element.localName}" element depends on an external package, `,
      `but it doesn't seem to be installed. `,
      `Running "npm install ${key}" will fix this problem.`
    ].join("");
    super(message, options);
    this.name = "ExternalDependencyError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ExternalDependencyError);
    }
  }
}
class NotEmptyPropertyError extends Error {
  constructor(element, key, options) {
    const message = `The "${element.localName}" element has a property named "${key}" that must not be empty.`;
    super(message, options);
    this.name = "NotEmptyPropertyError";
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotEmptyPropertyError);
    }
  }
}
const toAxis = (input, rtl) => {
  if (!input) return input;
  if (input.match(/start/)) input = rtl ? "right" : "left";
  if (input.match(/end/)) input = rtl ? "left" : "right";
  return input;
};
const toCSSColor = (input) => {
  if (!input) return;
  if (isCSSColor(input)) return input;
  const key = input.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/[_\s.:]+/g, "-").replace(/-+/g, "-").toLowerCase().replace(/^-+|-+$/g, "");
  return `var(--plus-palette-${key})`;
};
const toCSSUnit = (input) => {
  if (typeof input === "string" && isCSSUnit(input)) {
    return input;
  }
  if (typeof input === "number" || typeof input === "string" && !Number.isNaN(Number(input))) {
    return `calc(var(--plus-spacing, 1px) * ${input})`;
  }
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
    if (typeof element === "function") return element();
    return element;
  }
  get target() {
    const element = this.config.target;
    if (typeof element === "function") return element();
    return element;
  }
  dispose() {
    this.destroy?.();
  }
  enter(parameters) {
    return new Promise((resolve) => {
      this.destroy?.();
      this.update("enter");
      this.config.onEnter?.(parameters);
      this.next(() => {
        this.update("entering");
        this.config.onEntering?.(parameters);
        const onCancel = () => {
          resolve(true);
        };
        const onFinish = () => {
          this.update("entered");
          this.config.onEntered?.(parameters);
          resolve(false);
        };
        if (!this.animation) return onFinish();
        this.destroy = () => {
          resolve(true);
          this.animation?.removeEventListener("cancel", onCancel);
          this.animation?.removeEventListener("finish", onFinish);
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
      this.destroy?.();
      this.update("leave");
      this.config.onLeave?.(parameters);
      this.next(() => {
        this.update("leaving");
        this.config.onLeaving?.(parameters);
        const onCancel = () => {
          resolve(true);
        };
        const onFinish = () => {
          this.update("leaved");
          this.config.onLeaved?.(parameters);
          resolve(false);
        };
        if (!this.animation) return onFinish();
        this.destroy = () => {
          resolve(true);
          this.animation?.removeEventListener("cancel", onCancel);
          this.animation?.removeEventListener("finish", onFinish);
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
const _AsyncCache = class _AsyncCache {
  constructor(config) {
    this.config = config;
    this.cache = {};
  }
  get currentCache() {
    switch (this.config.type) {
      case "basic":
        return this.cache;
      case "external":
        return this.config.cache();
      case "global":
        return _AsyncCache.globalCache;
      default:
        return {};
    }
  }
  has(key) {
    return Object.hasOwn(this.currentCache, key);
  }
  get(key) {
    return this.currentCache[key];
  }
  remove(key) {
    delete this.currentCache[key];
  }
  set(key, value) {
    this.currentCache[key] = value;
  }
  getKey(...params) {
    if (this.config.type === "external") {
      return this.config.key(...params);
    }
    const namespace = this.config.type === "global" ? this.config.namespace : "";
    const key = [namespace].concat(...params).filter((key2) => !!key2).map((param) => JSON.stringify(param)).join(":");
    return key;
  }
  async resolve(...params) {
    const key = this.getKey(...params);
    const has = this.has(key);
    const value = this.get(key);
    const pending = value instanceof Promise;
    if (has && !pending) return value;
    if (!has) {
      this.set(key, this.config.resolver(...params));
    }
    try {
      const result = await this.get(key);
      this.set(key, result);
      return result;
    } catch (error) {
      this.remove(key);
      throw error;
    }
  }
};
_AsyncCache.globalCache = {};
let AsyncCache = _AsyncCache;
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
    _Scrollbar.keys.add(key);
    if (_Scrollbar.keys.size > 1) return;
    const rect = document.body.getBoundingClientRect();
    const isOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
    if (!isOverflowing) return;
    const dir = window.getComputedStyle(window.document.body).getPropertyValue("direction").toLowerCase();
    const property = dir == "rtl" ? "paddingLeft" : "paddingRight";
    _Scrollbar.style = {
      overflow: document.body.style.overflow,
      [property]: document.body.style[property]
    };
    document.body.style.overflow = "hidden";
    const scrollbarWidth = _Scrollbar.width;
    document.body.style[property] = `${scrollbarWidth}px`;
  }
  static reset(key) {
    _Scrollbar.keys.delete(key);
    if (_Scrollbar.keys.size) return;
    const keys = Object.keys(_Scrollbar.style);
    for (const key2 of keys) document.body.style[key2] = _Scrollbar.style[key2];
    _Scrollbar.style = {};
  }
};
_Scrollbar.keys = /* @__PURE__ */ new Set();
_Scrollbar.style = {};
let Scrollbar = _Scrollbar;
export {
  AsyncCache as A,
  Bind as B,
  Consumer as C,
  ExternalDependencyError as E,
  Listen as L,
  Method as M,
  NotEmptyPropertyError as N,
  Overrides as O,
  PlusCore as P,
  Query as Q,
  State as S,
  Variant as V,
  Watch as W,
  off as a,
  attributes as b,
  Property as c,
  Element as d,
  Event as e,
  Provider as f,
  Style as g,
  html as h,
  toCSSColor as i,
  PlusForm as j,
  setConfig as k,
  getConfig as l,
  Animation as m,
  Scrollbar as n,
  on as o,
  toAxis as p,
  query as q,
  classes as r,
  styles as s,
  toCSSUnit as t,
  QueryAll as u,
  setConfig$1 as v
};
