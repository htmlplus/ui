(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[11],{

/***/ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-tunnel-consumer.entry.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/plus-tunnel-consumer.entry.js ***!
  \*********************************************************************************************************/
/*! exports provided: plus_tunnel_consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plus_tunnel_consumer", function() { return TunnelConsumer; });
/* harmony import */ var _index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-618b7fc8.js */ "./node_modules/@htmlplus/react/node_modules/@htmlplus/core/dist/esm/index-618b7fc8.js");


const TunnelConsumer = class {
  constructor(hostRef) {
    Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    this.context = {};
    this.renderer = () => null;
  }
  connectedCallback() {
    if (this.subscribe != null) {
      this.unsubscribe = this.subscribe(this.$host, ['context']);
    }
  }
  disconnectedCallback() {
    if (this.unsubscribe != null) {
      this.unsubscribe();
    }
  }
  render() {
    return this.renderer(Object.assign({}, this.context));
  }
  get $host() { return Object(_index_618b7fc8_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BodG1scGx1cy9yZWFjdC9ub2RlX21vZHVsZXMvQGh0bWxwbHVzL2NvcmUvZGlzdC9lc20vcGx1cy10dW5uZWwtY29uc3VtZXIuZW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUE2RTs7QUFFN0U7QUFDQTtBQUNBLElBQUksNERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQSxlQUFlLFFBQVEsNERBQVUsT0FBTztBQUN4Qzs7QUFFa0QiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHIgYXMgcmVnaXN0ZXJJbnN0YW5jZSwgZyBhcyBnZXRFbGVtZW50IH0gZnJvbSAnLi9pbmRleC02MThiN2ZjOC5qcyc7XG5cbmNvbnN0IFR1bm5lbENvbnN1bWVyID0gY2xhc3Mge1xyXG4gIGNvbnN0cnVjdG9yKGhvc3RSZWYpIHtcclxuICAgIHJlZ2lzdGVySW5zdGFuY2UodGhpcywgaG9zdFJlZik7XHJcbiAgICB0aGlzLmNvbnRleHQgPSB7fTtcclxuICAgIHRoaXMucmVuZGVyZXIgPSAoKSA9PiBudWxsO1xyXG4gIH1cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmliZSAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSB0aGlzLnN1YnNjcmliZSh0aGlzLiRob3N0LCBbJ2NvbnRleHQnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgaWYgKHRoaXMudW5zdWJzY3JpYmUgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY29udGV4dCkpO1xyXG4gIH1cclxuICBnZXQgJGhvc3QoKSB7IHJldHVybiBnZXRFbGVtZW50KHRoaXMpOyB9XHJcbn07XG5cbmV4cG9ydCB7IFR1bm5lbENvbnN1bWVyIGFzIHBsdXNfdHVubmVsX2NvbnN1bWVyIH07XG4iXSwic291cmNlUm9vdCI6IiJ9