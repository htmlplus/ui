_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
let {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
let mostRecentHash = null;
/* eslint-disable-next-line */

let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


async function tryApplyUpdates() {
  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  try {
    const res = await fetch(`${hotUpdatePath}${curHash}.hot-update.json`);
    const jsonData = await res.json();
    const curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

    const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(mod => {
      return mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`) !== -1 || mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`.replace(/\//g, '\\')) !== -1;
    });

    if (pageUpdated) {
      document.location.reload(true);
    } else {
      curHash = mostRecentHash;
    }
  } catch (err) {
    console.error('Error occurred checking for update', err);
    document.location.reload(true);
  }
}

(0, _eventsource.getEventSourceWrapper)({
  path: `${assetPrefix}/_next/webpack-hmr`
}).addMessageListener(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    const message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(cb => {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function (fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: cb => {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function () {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


let evtSource;
let currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  const url = `${assetPrefix}/_next/webpack-hmr?page=${currentPage}`;
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      const payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vLi4vY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImRvY3VtZW50IiwiYXNzZXRQcmVmaXgiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJob3RVcGRhdGVQYXRoIiwibW9kdWxlIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJyZXMiLCJmZXRjaCIsImpzb25EYXRhIiwiY3VyUGFnZSIsInBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiT2JqZWN0IiwibW9kIiwiY29uc29sZSIsInBhdGgiLCJldmVudCIsIm1lc3NhZ2UiLCJ0cnlBcHBseVVwZGF0ZXMiLCJldmVudENhbGxiYWNrcyIsImxhc3RBY3Rpdml0eSIsImxpc3RlbmVycyIsIm9wdGlvbnMiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJzb3VyY2UiLCJpIiwiY2IiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsImNsb3NlIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyIiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsIm9jdGV0c0NvdW50IiwiY29kZVBvaW50IiwiYml0c05lZWRlZCIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXRzIiwib2N0ZXQiLCJ2YWxpZCIsIlN0cmluZyIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwic3RyZWFtIiwiayIsInRoYXQiLCJ4aHIiLCJzdGF0ZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJvblN0YXJ0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImNvbnRlbnRUeXBlIiwib25Qcm9ncmVzcyIsInJlc3BvbnNlVGV4dCIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJ1cmwiLCJYSFJXcmFwcGVyIiwibmFtZSIsImMiLCJtYXAiLCJhcnJheSIsImFsbCIsImxpbmUiLCJwYXJ0cyIsInZhbHVlIiwidG9Mb3dlckNhc2UiLCJIZWFkZXJzUG9seWZpbGwiLCJYSFJUcmFuc3BvcnQiLCJvZmZzZXQiLCJjaHVuayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsImhlYWRlcnMiLCJvblN0YXJ0Q2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiSGVhZGVyc1dyYXBwZXIiLCJjb250cm9sbGVyIiwic2lnbmFsIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsIndpdGhDcmVkZW50aWFscyIsImNhY2hlIiwicmVhZGVyIiwicmVzcG9uc2UiLCJyZWFkTmV4dENodW5rIiwicmVzdWx0IiwicmVzb2x2ZSIsInJlamVjdCIsIlByb21pc2UiLCJFdmVudFRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJsZW5ndGgiLCJsaXN0ZW5lciIsInRocm93RXJyb3IiLCJ0eXBlIiwiZm91bmQiLCJmaWx0ZXJlZCIsIkV2ZW50IiwiTWVzc2FnZUV2ZW50IiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJmaXJlIiwiZiIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwibGFzdEV2ZW50SWQiLCJyZXRyeSIsIndhc0FjdGl2aXR5IiwiQ3VycmVudFRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwiZXMiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwieCIsImNhbGxiYWNrIiwiZXZ0U291cmNlIiwicGF0aG5hbWUiLCJwYXRobmFtZUZuIiwiY2xvc2VQaW5nIiwiY3VycmVudFBhZ2UiLCJvbmRlbWFuZCIsInBheWxvYWQiLCJsb2NhdGlvbiIsInBhZ2VSZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFKQTs7O0FBTUEsSUFBSSxDQUFDQSxNQUFNLENBQVgsYUFBeUI7QUFDdkJBLFFBQU0sQ0FBTkEsY0FBcUJDLHFCQUFyQkQ7QUFHRjs7QUFBQSxNQUFNRSxJQUFJ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SUFBSSxDQUFKQSxNQUFXb0IsS0FBSyxDQUFoQyxJQUFnQnBCLENBQWhCOztBQUNBLFVBQUl1SyxPQUFPLENBQVgsU0FBcUI7QUFDbkI7QUFDQTtBQUNBN0osYUFBSyxDQUFDOEosUUFBUSxDQUFULE1BQWdCO0FBQ25CMUUscUJBQVcsRUFEYnBGO0FBQXFCLFNBQWhCLENBQUxBLE1BRVMrSixPQUFELElBQWE7QUFDbkIsY0FBSUEsT0FBTyxDQUFQQSxXQUFKLEtBQTRCO0FBQzFCRCxvQkFBUSxDQUFSQTtBQUVIO0FBTkQ5SjtBQVFIO0FBQUMsS0FiRixDQWFFLFlBQVk7QUFDWlEsYUFBTyxDQUFQQTtBQUVIO0FBbEJEK0k7QUFtQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL2FtcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pbXBvcnQgRXZlbnRTb3VyY2VQb2x5ZmlsbCBmcm9tICcuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbCdcbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcbmltcG9ydCB7IHNldHVwUGluZyB9IGZyb20gJy4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHMnXG5pbXBvcnQgeyBkaXNwbGF5Q29udGVudCB9IGZyb20gJy4vZm91YydcblxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgd2luZG93LkV2ZW50U291cmNlID0gRXZlbnRTb3VyY2VQb2x5ZmlsbFxufVxuXG5jb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KVxubGV0IHsgYXNzZXRQcmVmaXgsIHBhZ2UgfSA9IGRhdGFcbmFzc2V0UHJlZml4ID0gYXNzZXRQcmVmaXggfHwgJydcbmxldCBtb3N0UmVjZW50SGFzaCA9IG51bGxcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xubGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fXG5jb25zdCBob3RVcGRhdGVQYXRoID1cbiAgYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nXG5cbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gIC8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4gIC8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cbiAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfX1xufVxuXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpIHtcbiAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJ1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gIGlmICghaXNVcGRhdGVBdmFpbGFibGUoKSB8fCAhY2FuQXBwbHlVcGRhdGVzKCkpIHtcbiAgICByZXR1cm5cbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKVxuICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IGN1clBhZ2UgPSBwYWdlID09PSAnLycgPyAnaW5kZXgnIDogcGFnZVxuICAgIC8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcbiAgICBjb25zdCBwYWdlVXBkYXRlZCA9IChBcnJheS5pc0FycmF5KGpzb25EYXRhLmMpXG4gICAgICA/IGpzb25EYXRhLmNcbiAgICAgIDogT2JqZWN0LmtleXMoanNvbkRhdGEuYylcbiAgICApLnNvbWUoKG1vZCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgbW9kLmluZGV4T2YoXG4gICAgICAgICAgYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YFxuICAgICAgICApICE9PSAtMSB8fFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke1xuICAgICAgICAgICAgY3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gXG4gICAgICAgICAgfWAucmVwbGFjZSgvXFwvL2csICdcXFxcJylcbiAgICAgICAgKSAhPT0gLTFcbiAgICAgIClcbiAgICB9KVxuXG4gICAgaWYgKHBhZ2VVcGRhdGVkKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgY3VySGFzaCA9IG1vc3RSZWNlbnRIYXNoXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKVxuICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICB9XG59XG5cbmdldEV2ZW50U291cmNlV3JhcHBlcih7XG4gIHBhdGg6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcmAsXG59KS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5kYXRhID09PSAnXFx1RDgzRFxcdURDOTMnKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXG5cbiAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzeW5jJyB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gJ2J1aWx0Jykge1xuICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaFxuICAgICAgdHJ5QXBwbHlVcGRhdGVzKClcbiAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH1cbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleClcbiAgfVxufSlcblxuc2V0dXBQaW5nKGFzc2V0UHJlZml4LCAoKSA9PiBwYWdlKVxuZGlzcGxheUNvbnRlbnQoKVxuIiwiY29uc3QgZXZlbnRDYWxsYmFja3MgPSBbXVxuXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICB2YXIgc291cmNlXG4gIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIHZhciBsaXN0ZW5lcnMgPSBbXVxuXG4gIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgb3B0aW9ucy50aW1lb3V0ID0gMjAgKiAxMDAwXG4gIH1cblxuICBpbml0KClcbiAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICBoYW5kbGVEaXNjb25uZWN0KClcbiAgICB9XG4gIH0sIG9wdGlvbnMudGltZW91dCAvIDIpXG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aClcbiAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lXG4gICAgc291cmNlLm9uZXJyb3IgPSBoYW5kbGVEaXNjb25uZWN0XG4gICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKVxuICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RlbmVyc1tpXShldmVudClcbiAgICB9XG5cbiAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgaWYgKCFjYi51bmZpbHRlcmVkICYmIGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykgPT09IC0xKSByZXR1cm5cbiAgICAgIGNiKGV2ZW50KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgc291cmNlLmNsb3NlKClcbiAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xvc2U6ICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpXG4gICAgICBzb3VyY2UuY2xvc2UoKVxuICAgIH0sXG4gICAgYWRkTWVzc2FnZUxpc3RlbmVyOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGxpc3RlbmVycy5wdXNoKGZuKVxuICAgIH0sXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5vbmRlbWFuZCkge1xuICAgIHJldHVybiB7XG4gICAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IChjYikgPT4ge1xuICAgICAgICBldmVudENhbGxiYWNrcy5wdXNoKGNiKVxuICAgICAgfSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudFxudmFyIFJlc3BvbnNlID0gd2luZG93LlJlc3BvbnNlXG52YXIgVGV4dERlY29kZXIgPSB3aW5kb3cuVGV4dERlY29kZXJcbnZhciBUZXh0RW5jb2RlciA9IHdpbmRvdy5UZXh0RW5jb2RlclxudmFyIEFib3J0Q29udHJvbGxlciA9IHdpbmRvdy5BYm9ydENvbnRyb2xsZXJcblxuaWYgKEFib3J0Q29udHJvbGxlciA9PSB1bmRlZmluZWQpIHtcbiAgQWJvcnRDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2lnbmFsID0gbnVsbFxuICAgIHRoaXMuYWJvcnQgPSBmdW5jdGlvbiAoKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XG4gIHRoaXMuYml0c05lZWRlZCA9IDBcbiAgdGhpcy5jb2RlUG9pbnQgPSAwXG59XG5cblRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChvY3RldHMpIHtcbiAgZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LCBzaGlmdCwgb2N0ZXRzQ291bnQpIHtcbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMDgwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDA3ZmZcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAoY29kZVBvaW50ID49IDB4MDgwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhkN2ZmKSB8fFxuICAgICAgICAoY29kZVBvaW50ID49IDB4ZTAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhmZmZmKVxuICAgICAgKVxuICAgIH1cbiAgICBpZiAob2N0ZXRzQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMTAwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MTBmZmZmXG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigpXG4gIH1cbiAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMikge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDJcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAzKSB7XG4gICAgICByZXR1cm4gM1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIHZhciBSRVBMQUNFUiA9IDB4ZmZmZFxuICB2YXIgc3RyaW5nID0gJydcbiAgdmFyIGJpdHNOZWVkZWQgPSB0aGlzLmJpdHNOZWVkZWRcbiAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb2N0ZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldXG4gICAgaWYgKGJpdHNOZWVkZWQgIT09IDApIHtcbiAgICAgIGlmIChcbiAgICAgICAgb2N0ZXQgPCAxMjggfHxcbiAgICAgICAgb2N0ZXQgPiAxOTEgfHxcbiAgICAgICAgIXZhbGlkKFxuICAgICAgICAgIChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2MyksXG4gICAgICAgICAgYml0c05lZWRlZCAtIDYsXG4gICAgICAgICAgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgaWYgKG9jdGV0ID49IDAgJiYgb2N0ZXQgPD0gMTI3KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0XG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDE5MiAmJiBvY3RldCA8PSAyMjMpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAxXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMzFcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjI0ICYmIG9jdGV0IDw9IDIzOSkge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDJcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAxNVxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyNDAgJiYgb2N0ZXQgPD0gMjQ3KSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogM1xuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGJpdHNOZWVkZWQgIT09IDAgJiZcbiAgICAgICAgIXZhbGlkKGNvZGVQb2ludCwgYml0c05lZWRlZCwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSlcbiAgICAgICkge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBiaXRzTmVlZGVkIC09IDZcbiAgICAgIGNvZGVQb2ludCA9IChjb2RlUG9pbnQgPDwgNikgfCAob2N0ZXQgJiA2MylcbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhmZmZmKSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCArICgoY29kZVBvaW50IC0gMHhmZmZmIC0gMSkgPj4gMTApKVxuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShcbiAgICAgICAgICAweGRjMDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpICYgMHgzZmYpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdGhpcy5iaXRzTmVlZGVkID0gYml0c05lZWRlZFxuICB0aGlzLmNvZGVQb2ludCA9IGNvZGVQb2ludFxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIChcbiAgICAgIG5ldyBUZXh0RGVjb2RlcigpLmRlY29kZShuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoJ3Rlc3QnKSwge1xuICAgICAgICBzdHJlYW06IHRydWUsXG4gICAgICB9KSA9PT0gJ3Rlc3QnXG4gICAgKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBJRSwgRWRnZVxuaWYgKFxuICBUZXh0RGVjb2RlciA9PSB1bmRlZmluZWQgfHxcbiAgVGV4dEVuY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gICFzdXBwb3J0c1N0cmVhbU9wdGlvbigpXG4pIHtcbiAgVGV4dERlY29kZXIgPSBUZXh0RGVjb2RlclBvbHlmaWxsXG59XG5cbnZhciBrID0gZnVuY3Rpb24gKCkge31cblxuZnVuY3Rpb24gWEhSV3JhcHBlcih4aHIpIHtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZVxuICB0aGlzLnJlc3BvbnNlVHlwZSA9ICcnXG4gIHRoaXMucmVhZHlTdGF0ZSA9IDBcbiAgdGhpcy5zdGF0dXMgPSAwXG4gIHRoaXMuc3RhdHVzVGV4dCA9ICcnXG4gIHRoaXMucmVzcG9uc2VUZXh0ID0gJydcbiAgdGhpcy5vbnByb2dyZXNzID0ga1xuICB0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGtcbiAgdGhpcy5fY29udGVudFR5cGUgPSAnJ1xuICB0aGlzLl94aHIgPSB4aHJcbiAgdGhpcy5fc2VuZFRpbWVvdXQgPSAwXG4gIHRoaXMuX2Fib3J0ID0ga1xufVxuXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gIHRoaXMuX2Fib3J0KHRydWUpXG5cbiAgdmFyIHRoYXQgPSB0aGlzXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgdmFyIHN0YXRlID0gMVxuICB2YXIgdGltZW91dCA9IDBcblxuICB0aGlzLl9hYm9ydCA9IGZ1bmN0aW9uIChzaWxlbnQpIHtcbiAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dClcbiAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMFxuICAgIH1cbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNFxuICAgICAgeGhyLm9ubG9hZCA9IGtcbiAgICAgIHhoci5vbmVycm9yID0ga1xuICAgICAgeGhyLm9uYWJvcnQgPSBrXG4gICAgICB4aHIub25wcm9ncmVzcyA9IGtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gICAgICAvLyBJRSA4IC0gOTogWERvbWFpblJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgLy8gT3BlcmEgPCAxMDogWE1MSHR0cFJlcXVlc3QjYWJvcnQoKSBkb2VzIG5vdCBmaXJlIGFueSBldmVudFxuICAgICAgeGhyLmFib3J0KClcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlID0gMFxuICB9XG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHN0YXRlID09PSAxKSB7XG4gICAgICAvLyBzdGF0ZSA9IDI7XG4gICAgICB2YXIgc3RhdHVzID0gMFxuICAgICAgdmFyIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgdmFyIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICBpZiAoISgnY29udGVudFR5cGUnIGluIHhocikpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xuICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbiAgICAgICAgICBzdGF0dXMgPSAwXG4gICAgICAgICAgc3RhdHVzVGV4dCA9ICcnXG4gICAgICAgICAgY29udGVudFR5cGUgPSB1bmRlZmluZWRcbiAgICAgICAgICAvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxuICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0dXMgPSAyMDBcbiAgICAgICAgc3RhdHVzVGV4dCA9ICdPSydcbiAgICAgICAgY29udGVudFR5cGUgPSB4aHIuY29udGVudFR5cGVcbiAgICAgIH1cbiAgICAgIGlmIChzdGF0dXMgIT09IDApIHtcbiAgICAgICAgc3RhdGUgPSAyXG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDJcbiAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXNcbiAgICAgICAgdGhhdC5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dFxuICAgICAgICB0aGF0Ll9jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlXG4gICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgb25TdGFydCgpXG4gICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDNcbiAgICAgIHZhciByZXNwb25zZVRleHQgPSAnJ1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gM1xuICAgICAgdGhhdC5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHRcbiAgICAgIHRoYXQub25wcm9ncmVzcygpXG4gICAgfVxuICB9XG4gIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBGaXJlZm94IDUyIGZpcmVzIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkgd2l0aG91dCBmaW5hbCBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpXG4gICAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbiAgICBvblByb2dyZXNzKClcbiAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgIHN0YXRlID0gNFxuICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgIHRpbWVvdXQgPSAwXG4gICAgICB9XG4gICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0XG4gICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgfVxuICB9XG4gIHZhciBvblJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIE9wZXJhIDEyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgb25GaW5pc2goKVxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgICBvblByb2dyZXNzKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgb25TdGFydCgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCA1MDApXG4gICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICBvblByb2dyZXNzKClcbiAgICB9XG4gIH1cblxuICAvLyBYRG9tYWluUmVxdWVzdCNhYm9ydCByZW1vdmVzIG9ucHJvZ3Jlc3MsIG9uZXJyb3IsIG9ubG9hZFxuICB4aHIub25sb2FkID0gb25GaW5pc2hcbiAgeGhyLm9uZXJyb3IgPSBvbkZpbmlzaFxuICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4gIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXG4gIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbiAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG4gIHhoci5vbmFib3J0ID0gb25GaW5pc2hcblxuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbiAgaWYgKFxuICAgICEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgICEoJ21vekFub24nIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSlcbiAgKSB7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzXG4gIH1cblxuICAvLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4gIC8vIE9wZXJhIDwgMTJcbiAgLy8gRmlyZWZveCA8IDMuNVxuICAvLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbiAgLy8gb25wcm9ncmVzcyBpcyBub3QgZmlyZWQgc29tZXRpbWVzIG9yIGRlbGF5ZWRcbiAgLy8gc2VlIGFsc28gIzY0XG4gIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvblJlYWR5U3RhdGVDaGFuZ2VcblxuICBpZiAoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdwYWRkaW5nPXRydWUnXG4gIH1cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpXG5cbiAgaWYgKCdyZWFkeVN0YXRlJyBpbiB4aHIpIHtcbiAgICAvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbiAgICAvLyAjOTFcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvblRpbWVvdXQoKVxuICAgIH0sIDApXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9hYm9ydChmYWxzZSlcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgfVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICA/IHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgIDogJydcbn1cblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuICBpZiAoXG4gICAgISgnb250aW1lb3V0JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmXG4gICAgZG9jdW1lbnQgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiZcbiAgICBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnXG4gICkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICAgIHRoYXQuc2VuZCgpXG4gICAgfSwgNClcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB4aHIgPSB0aGlzLl94aHJcbiAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFsc1xuICB4aHIucmVzcG9uc2VUeXBlID0gdGhpcy5yZXNwb25zZVR5cGVcbiAgdHJ5IHtcbiAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG4gICAgeGhyLnNlbmQodW5kZWZpbmVkKVxuICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAvLyBTYWZhcmkgNS4xLjcsIE9wZXJhIDEyXG4gICAgdGhyb3cgZXJyb3IxXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9Mb3dlckNhc2UobmFtZSkge1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDB4MjApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpIHtcbiAgLy8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbiAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGFycmF5ID0gYWxsLnNwbGl0KCdcXHJcXG4nKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGxpbmUgPSBhcnJheVtpXVxuICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJylcbiAgICB2YXIgbmFtZSA9IHBhcnRzLnNoaWZ0KClcbiAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpXG4gICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlXG4gIH1cbiAgdGhpcy5fbWFwID0gbWFwXG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldXG59XG5cbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHt9XG5cblhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB4aHIub3BlbignR0VUJywgdXJsKVxuICB2YXIgb2Zmc2V0ID0gMFxuICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dFxuICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpXG4gICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aFxuICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuaylcbiAgfVxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXNcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHRcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJylcbiAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dCxcbiAgICAgICAgY29udGVudFR5cGUsXG4gICAgICAgIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB4aHIuYWJvcnQoKVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgb25GaW5pc2hDYWxsYmFjaygpXG4gICAgfVxuICB9XG4gIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0J1xuICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsIG5hbWUpKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgIH1cbiAgfVxuICB4aHIuc2VuZCgpXG59XG5cbmZ1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpIHtcbiAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnNcbn1cbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSlcbn1cblxuZnVuY3Rpb24gRmV0Y2hUcmFuc3BvcnQoKSB7fVxuXG5GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChcbiAgeGhyLFxuICBvblN0YXJ0Q2FsbGJhY2ssXG4gIG9uUHJvZ3Jlc3NDYWxsYmFjayxcbiAgb25GaW5pc2hDYWxsYmFjayxcbiAgdXJsLFxuICB3aXRoQ3JlZGVudGlhbHMsXG4gIGhlYWRlcnNcbikge1xuICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKVxuICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcbiAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcbiAgZmV0Y2godXJsLCB7XG4gICAgaGVhZGVyczogaGVhZGVycyxcbiAgICBjcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICBzaWduYWw6IHNpZ25hbCxcbiAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgfSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpXG4gICAgICBvblN0YXJ0Q2FsbGJhY2soXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLFxuICAgICAgICBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KClcbiAgICAgICAgICByZWFkZXIuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVhZGVyXG4gICAgICAgICAgICAucmVhZCgpXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwgeyBzdHJlYW06IHRydWUgfSlcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgIHJlamVjdChlcnJvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmVhZE5leHRDaHVuaygpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oXG4gICAgICBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgKVxufVxuXG5mdW5jdGlvbiBFdmVudFRhcmdldCgpIHtcbiAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxufVxuXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGhyb3cgZVxuICB9LCAwKVxufVxuXG5FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC50YXJnZXQgPSB0aGlzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBsZW5ndGggPSB0eXBlTGlzdGVuZXJzLmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IHR5cGVMaXN0ZW5lcnNbaV1cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93RXJyb3IoZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICB0eXBlTGlzdGVuZXJzID0gW11cbiAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzXG4gIH1cbiAgdmFyIGZvdW5kID0gZmFsc2VcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICBmb3VuZCA9IHRydWVcbiAgICB9XG4gIH1cbiAgaWYgKCFmb3VuZCkge1xuICAgIHR5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxufVxuRXZlbnRUYXJnZXQucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIpIHtcbiAgdHlwZSA9IFN0cmluZyh0eXBlKVxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzXG4gIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdXG4gIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgIHZhciBmaWx0ZXJlZCA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlTGlzdGVuZXJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdXG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50KHR5cGUpIHtcbiAgdGhpcy50eXBlID0gdHlwZVxuICB0aGlzLnRhcmdldCA9IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBNZXNzYWdlRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuZGF0YSA9IG9wdGlvbnMuZGF0YVxuICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZFxufVxuXG5NZXNzYWdlRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XG4gIEV2ZW50LmNhbGwodGhpcywgdHlwZSlcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG59XG5cbkNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSlcblxudmFyIFdBSVRJTkcgPSAtMVxudmFyIENPTk5FQ1RJTkcgPSAwXG52YXIgT1BFTiA9IDFcbnZhciBDTE9TRUQgPSAyXG5cbnZhciBBRlRFUl9DUiA9IC0xXG52YXIgRklFTERfU1RBUlQgPSAwXG52YXIgRklFTEQgPSAxXG52YXIgVkFMVUVfU1RBUlQgPSAyXG52YXIgVkFMVUUgPSAzXG5cbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2lcblxudmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwXG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwXG5cbnZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBkZWYpIHtcbiAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApXG4gIGlmIChuICE9PSBuKSB7XG4gICAgbiA9IGRlZlxuICB9XG4gIHJldHVybiBjbGFtcER1cmF0aW9uKG4pXG59XG52YXIgY2xhbXBEdXJhdGlvbiA9IGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTilcbn1cblxudmFyIGZpcmUgPSBmdW5jdGlvbiAodGhhdCwgZiwgZXZlbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGYuY2FsbCh0aGF0LCBldmVudClcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aHJvd0Vycm9yKGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgRXZlbnRUYXJnZXQuY2FsbCh0aGlzKVxuXG4gIHRoaXMub25vcGVuID0gdW5kZWZpbmVkXG4gIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkXG4gIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZFxuXG4gIHRoaXMudXJsID0gdW5kZWZpbmVkXG4gIHRoaXMucmVhZHlTdGF0ZSA9IHVuZGVmaW5lZFxuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZFxuXG4gIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkXG5cbiAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKVxufVxuXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9XG4gIGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZSAhPSB1bmRlZmluZWQgJiYgJ2JvZHknIGluIFJlc3BvbnNlLnByb3RvdHlwZVxuXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XG4gIHVybCA9IFN0cmluZyh1cmwpXG4gIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKVxuXG4gIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApXG4gIHZhciBoZWFydGJlYXRUaW1lb3V0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkXG4gICAgICA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMClcbiAgICAgIDogY2xhbXBEdXJhdGlvbig0NTAwMClcblxuICB2YXIgbGFzdEV2ZW50SWQgPSAnJ1xuICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgdmFyIGhlYWRlcnMgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWRcbiAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvcHRpb25zLmhlYWRlcnMpKVxuICAgICAgOiB1bmRlZmluZWRcbiAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPVxuICAgIG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBvcHRpb25zLlRyYW5zcG9ydFxuICAgICAgOiBYTUxIdHRwUmVxdWVzdFxuICB2YXIgeGhyID1cbiAgICBpc0ZldGNoU3VwcG9ydGVkICYmXG4gICAgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpXG4gICAgICA/IHVuZGVmaW5lZFxuICAgICAgOiBuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKVxuICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpXG4gIHZhciBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZFxuICB2YXIgdGltZW91dCA9IDBcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgdmFyIGRhdGFCdWZmZXIgPSAnJ1xuICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSAnJ1xuICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJydcblxuICB2YXIgdGV4dEJ1ZmZlciA9ICcnXG4gIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gIHZhciBmaWVsZFN0YXJ0ID0gMFxuICB2YXIgdmFsdWVTdGFydCA9IDBcblxuICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uIChzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzLCBjYW5jZWwpIHtcbiAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbFxuICAgICAgaWYgKFxuICAgICAgICBzdGF0dXMgPT09IDIwMCAmJlxuICAgICAgICBjb250ZW50VHlwZSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSlcbiAgICAgICkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZVxuICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTlxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25vcGVuLCBldmVudClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gJydcbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXNzYWdlID1cbiAgICAgICAgICAgIFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgK1xuICAgICAgICAgICAgc3RhdHVzICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBzdGF0dXNUZXh0ICtcbiAgICAgICAgICAgICcgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgK1xuICAgICAgICAgICAgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/ICctJ1xuICAgICAgICAgICAgICA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgK1xuICAgICAgICAgICAgJy4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKVxuICAgICAgICBjbG9zZSgpXG4gICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgfSlcbiAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodGV4dENodW5rKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTikge1xuICAgICAgdmFyIG4gPSAtMVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0Q2h1bmsubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSB0ZXh0Q2h1bmsuY2hhckNvZGVBdChpKVxuICAgICAgICBpZiAoYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgbiA9IGlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSlcbiAgICAgIHRleHRCdWZmZXIgPSAobiA9PT0gLTEgPyB0ZXh0QnVmZmVyIDogJycpICsgdGV4dENodW5rLnNsaWNlKG4gKyAxKVxuICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpIHtcbiAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKVxuICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xuICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpXG4gICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKFxuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgK1xuICAgICAgICAgICAgICAgICAgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KSA9PT0gJyAnLmNoYXJDb2RlQXQoMClcbiAgICAgICAgICAgICAgICAgICAgPyAxXG4gICAgICAgICAgICAgICAgICAgIDogMCksXG4gICAgICAgICAgICAgICAgcG9zaXRpb25cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xuICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbidcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbFJldHJ5ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaW5pdGlhbFJldHJ5KVxuICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdFRpbWVvdXQgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KClcbiAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGxhc3RFdmVudElkID0gbGFzdEV2ZW50SWRCdWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxuICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQ6IGxhc3RFdmVudElkQnVmZmVyLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ubWVzc2FnZSwgZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgIGZpZWxkU3RhcnQgPSBwb3NpdGlvblxuICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDFcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XG4gICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkdcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgfSwgcmV0cnkpXG4gICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpXG5cbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HXG4gICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoJ2Vycm9yJylcbiAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudClcbiAgICB9XG4gIH1cblxuICB2YXIgY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudFN0YXRlID0gQ0xPU0VEXG4gICAgaWYgKGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsRnVuY3Rpb24oKVxuICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgdGltZW91dCA9IDBcbiAgICB9XG4gICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRFxuICB9XG5cbiAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0ID0gMFxuXG4gICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xuICAgICAgaWYgKCF3YXNBY3Rpdml0eSAmJiBjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3dFcnJvcihcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnTm8gYWN0aXZpdHkgd2l0aGluICcgK1xuICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ICtcbiAgICAgICAgICAgICAgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2VcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpXG4gICAgICB9XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuXG4gICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElOR1xuICAgIGRhdGFCdWZmZXIgPSAnJ1xuICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG4gICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZFxuICAgIHRleHRCdWZmZXIgPSAnJ1xuICAgIGZpZWxkU3RhcnQgPSAwXG4gICAgdmFsdWVTdGFydCA9IDBcbiAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUXG5cbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00Mjg5MTZcbiAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgdmFyIHJlcXVlc3RVUkwgPSB1cmxcbiAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICByZXF1ZXN0VVJMICs9XG4gICAgICAgICAgKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArXG4gICAgICAgICAgJ2xhc3RFdmVudElkPScgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0ge31cbiAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nXG4gICAgaWYgKGhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gaGVhZGVyc1tuYW1lXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICB0cmFuc3BvcnQub3BlbihcbiAgICAgICAgeGhyLFxuICAgICAgICBvblN0YXJ0LFxuICAgICAgICBvblByb2dyZXNzLFxuICAgICAgICBvbkZpbmlzaCxcbiAgICAgICAgcmVxdWVzdFVSTCxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzLFxuICAgICAgICByZXF1ZXN0SGVhZGVyc1xuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjbG9zZSgpXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGVzLnVybCA9IHVybFxuICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHNcbiAgZXMuX2Nsb3NlID0gY2xvc2VcblxuICBvblRpbWVvdXQoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQucHJvdG90eXBlKVxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRURcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9jbG9zZSgpXG59XG5cbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkdcbkV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU5cbkV2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTb3VyY2VQb2x5ZmlsbFxuIiwiLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbW92ZSBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3b3JrYXJvdW5kIGZvciB1c2luZ1xuLy8gYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQuIEl0IG11c3QgYmUgY2FsbGVkIGJlZm9yZSBoeWRyYXRpb24sIG9yIGVsc2Vcbi8vIHJlbmRlcmluZyB3b24ndCBoYXZlIHRoZSBjb3JyZWN0IGNvbXB1dGVkIHZhbHVlcyBpbiBlZmZlY3RzLlxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gIDsod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0KShmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChcbiAgICAgIHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDtcbiAgICAgIGktLTtcblxuICAgICkge1xuICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pXG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soKVxuICAgIH1cbiAgfSlcbn1cbiIsIi8qIGdsb2JhbCBsb2NhdGlvbiAqL1xuaW1wb3J0IHsgZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuXG5sZXQgZXZ0U291cmNlXG5leHBvcnQgbGV0IGN1cnJlbnRQYWdlXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVBpbmcoKSB7XG4gIGlmIChldnRTb3VyY2UpIGV2dFNvdXJjZS5jbG9zZSgpXG4gIGV2dFNvdXJjZSA9IG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCwgcGF0aG5hbWVGbiwgcmV0cnkpIHtcbiAgY29uc3QgcGF0aG5hbWUgPSBwYXRobmFtZUZuKClcblxuICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxuICBpZiAocGF0aG5hbWUgPT09IGN1cnJlbnRQYWdlICYmICFyZXRyeSkgcmV0dXJuXG4gIGN1cnJlbnRQYWdlID0gcGF0aG5hbWVcbiAgLy8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXG4gIGNsb3NlUGluZygpXG5cbiAgY29uc3QgdXJsID0gYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gXG4gIGV2dFNvdXJjZSA9IGdldEV2ZW50U291cmNlV3JhcHBlcih7IHBhdGg6IHVybCwgdGltZW91dDogNTAwMCwgb25kZW1hbmQ6IDEgfSlcblxuICBldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5kYXRhLmluZGV4T2YoJ3snKSA9PT0gLTEpIHJldHVyblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCkge1xuICAgICAgICAvLyBQYXlsb2FkIGNhbiBiZSBpbnZhbGlkIGV2ZW4gaWYgdGhlIHBhZ2UgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSBpdCBleGlzdHMgYmVmb3JlIHJlbG9hZGluZy5cbiAgICAgICAgZmV0Y2gobG9jYXRpb24uaHJlZiwge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKChwYWdlUmVzKSA9PiB7XG4gICAgICAgICAgaWYgKHBhZ2VSZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignb24tZGVtYW5kLWVudHJpZXMgZmFpbGVkIHRvIHBhcnNlIHJlc3BvbnNlJywgZXJyKVxuICAgIH1cbiAgfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=