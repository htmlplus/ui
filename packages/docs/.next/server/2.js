exports.ids = [2];
exports.modules = {

/***/ "./src/content/en/getting-started/installation.javascript.md":
/*!*******************************************************************!*\
  !*** ./src/content/en/getting-started/installation.javascript.md ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("# JavaScript\nYou can utilize **{Constants.PLATFORM_NAME}** simply by adding a simple scirpt in your main html like this:\n```html\n<html>\n  <head>\n    <script src=\"{Constants.PORT_JAVASCRIPT_PACKAGE_CDN}\"></script>\n  </head>\n  <body>\n    <plus-switch></plus-switch>\n  </body>\n</html>\n```\nIf you prefer to use ES modules you can import components.\n\n> [warning]Pay attention that type=\"module\" just works in the modern browser and it's not compatible with IE11 or Edge 12-18.\n\n```html\n<html>\n  <head>\n    <script type=\"module\">\n      import { defineCustomElements } from '{Constants.PORT_JAVASCRIPT_PACKAGE_CDN_LOADER}';\n      defineCustomElements();\n    </script>\n  </head>\n  <body>\n    <plus-switch></plus-switch>\n  </body>\n</html>\n```\nSetting Attributes on components.\n\n```html\n<plus-switch reverse></plus-switch>\nOr\n<plus-switch reverse=\"true\"></plus-switch>\n```\nYou can change the components attributes by using JAVASCIRPTS APIs.\n\n```html\n<plus-switch id=\"element\"></plus-switch>\n<script>\n  element.reverse = true;\n</script>\n```\nChanging the event of a component is something like this.\n> [info] You need to use hp prefix in order to avoid conflict occuring because most of events such as click and change, etc are prereserved by explorers.\n```html\n<plus-switch id=\"element\"></plus-switch>\n<script>\n  element.addEventListener('plusChange', () => {\n    alert('plusChange event fired!');\n  })\n</script>\n```\n");

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9lbi9nZXR0aW5nLXN0YXJ0ZWQvaW5zdGFsbGF0aW9uLmphdmFzY3JpcHQubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFlLGlHQUFrQyx3QkFBd0IsZ0hBQWdILHNDQUFzQyxxV0FBcVcsdUJBQXVCLFFBQVEsNkNBQTZDLEVBQUUsK0JBQStCLHlZQUF5WSx1VkFBdVYsdUNBQXVDLEtBQUssb0JBQW9CLEUiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiIyBKYXZhU2NyaXB0XFxuWW91IGNhbiB1dGlsaXplICoqe0NvbnN0YW50cy5QTEFURk9STV9OQU1FfSoqIHNpbXBseSBieSBhZGRpbmcgYSBzaW1wbGUgc2NpcnB0IGluIHlvdXIgbWFpbiBodG1sIGxpa2UgdGhpczpcXG5gYGBodG1sXFxuPGh0bWw+XFxuICA8aGVhZD5cXG4gICAgPHNjcmlwdCBzcmM9XFxcIntDb25zdGFudHMuUE9SVF9KQVZBU0NSSVBUX1BBQ0tBR0VfQ0ROfVxcXCI+PC9zY3JpcHQ+XFxuICA8L2hlYWQ+XFxuICA8Ym9keT5cXG4gICAgPHBsdXMtc3dpdGNoPjwvcGx1cy1zd2l0Y2g+XFxuICA8L2JvZHk+XFxuPC9odG1sPlxcbmBgYFxcbklmIHlvdSBwcmVmZXIgdG8gdXNlIEVTIG1vZHVsZXMgeW91IGNhbiBpbXBvcnQgY29tcG9uZW50cy5cXG5cXG4+IFt3YXJuaW5nXVBheSBhdHRlbnRpb24gdGhhdCB0eXBlPVxcXCJtb2R1bGVcXFwiIGp1c3Qgd29ya3MgaW4gdGhlIG1vZGVybiBicm93c2VyIGFuZCBpdCdzIG5vdCBjb21wYXRpYmxlIHdpdGggSUUxMSBvciBFZGdlIDEyLTE4LlxcblxcbmBgYGh0bWxcXG48aHRtbD5cXG4gIDxoZWFkPlxcbiAgICA8c2NyaXB0IHR5cGU9XFxcIm1vZHVsZVxcXCI+XFxuICAgICAgaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudHMgfSBmcm9tICd7Q29uc3RhbnRzLlBPUlRfSkFWQVNDUklQVF9QQUNLQUdFX0NETl9MT0FERVJ9JztcXG4gICAgICBkZWZpbmVDdXN0b21FbGVtZW50cygpO1xcbiAgICA8L3NjcmlwdD5cXG4gIDwvaGVhZD5cXG4gIDxib2R5PlxcbiAgICA8cGx1cy1zd2l0Y2g+PC9wbHVzLXN3aXRjaD5cXG4gIDwvYm9keT5cXG48L2h0bWw+XFxuYGBgXFxuU2V0dGluZyBBdHRyaWJ1dGVzIG9uIGNvbXBvbmVudHMuXFxuXFxuYGBgaHRtbFxcbjxwbHVzLXN3aXRjaCByZXZlcnNlPjwvcGx1cy1zd2l0Y2g+XFxuT3JcXG48cGx1cy1zd2l0Y2ggcmV2ZXJzZT1cXFwidHJ1ZVxcXCI+PC9wbHVzLXN3aXRjaD5cXG5gYGBcXG5Zb3UgY2FuIGNoYW5nZSB0aGUgY29tcG9uZW50cyBhdHRyaWJ1dGVzIGJ5IHVzaW5nIEpBVkFTQ0lSUFRTIEFQSXMuXFxuXFxuYGBgaHRtbFxcbjxwbHVzLXN3aXRjaCBpZD1cXFwiZWxlbWVudFxcXCI+PC9wbHVzLXN3aXRjaD5cXG48c2NyaXB0PlxcbiAgZWxlbWVudC5yZXZlcnNlID0gdHJ1ZTtcXG48L3NjcmlwdD5cXG5gYGBcXG5DaGFuZ2luZyB0aGUgZXZlbnQgb2YgYSBjb21wb25lbnQgaXMgc29tZXRoaW5nIGxpa2UgdGhpcy5cXG4+IFtpbmZvXSBZb3UgbmVlZCB0byB1c2UgaHAgcHJlZml4IGluIG9yZGVyIHRvIGF2b2lkIGNvbmZsaWN0IG9jY3VyaW5nIGJlY2F1c2UgbW9zdCBvZiBldmVudHMgc3VjaCBhcyBjbGljayBhbmQgY2hhbmdlLCBldGMgYXJlIHByZXJlc2VydmVkIGJ5IGV4cGxvcmVycy5cXG5gYGBodG1sXFxuPHBsdXMtc3dpdGNoIGlkPVxcXCJlbGVtZW50XFxcIj48L3BsdXMtc3dpdGNoPlxcbjxzY3JpcHQ+XFxuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNDaGFuZ2UnLCAoKSA9PiB7XFxuICAgIGFsZXJ0KCdwbHVzQ2hhbmdlIGV2ZW50IGZpcmVkIScpO1xcbiAgfSlcXG48L3NjcmlwdD5cXG5gYGBcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9