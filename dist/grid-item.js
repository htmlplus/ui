import { P as PlusCore, h as html, a as Property, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ':host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  flex-grow: 0;\n  flex-basis: auto;\n  max-width: none;\n  box-sizing: border-box;\n}\n\n:host([align-self=auto]) {\n  align-self: auto;\n}\n\n:host([align-self=stretch]) {\n  align-self: stretch;\n}\n\n:host([align-self=start]) {\n  align-self: flex-start;\n}\n\n:host([align-self=center]) {\n  align-self: center;\n}\n\n:host([align-self=end]) {\n  align-self: flex-end;\n}\n\n:host([align-self-xs=auto]) {\n  align-self: auto;\n}\n\n:host([align-self-xs=stretch]) {\n  align-self: stretch;\n}\n\n:host([align-self-xs=start]) {\n  align-self: flex-start;\n}\n\n:host([align-self-xs=center]) {\n  align-self: center;\n}\n\n:host([align-self-xs=end]) {\n  align-self: flex-end;\n}\n\n@media (min-width: 576px) {\n  :host([align-self-sm=auto]) {\n    align-self: auto;\n  }\n  :host([align-self-sm=stretch]) {\n    align-self: stretch;\n  }\n  :host([align-self-sm=start]) {\n    align-self: flex-start;\n  }\n  :host([align-self-sm=center]) {\n    align-self: center;\n  }\n  :host([align-self-sm=end]) {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 768px) {\n  :host([align-self-md=auto]) {\n    align-self: auto;\n  }\n  :host([align-self-md=stretch]) {\n    align-self: stretch;\n  }\n  :host([align-self-md=start]) {\n    align-self: flex-start;\n  }\n  :host([align-self-md=center]) {\n    align-self: center;\n  }\n  :host([align-self-md=end]) {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 992px) {\n  :host([align-self-lg=auto]) {\n    align-self: auto;\n  }\n  :host([align-self-lg=stretch]) {\n    align-self: stretch;\n  }\n  :host([align-self-lg=start]) {\n    align-self: flex-start;\n  }\n  :host([align-self-lg=center]) {\n    align-self: center;\n  }\n  :host([align-self-lg=end]) {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 1200px) {\n  :host([align-self-xl=auto]) {\n    align-self: auto;\n  }\n  :host([align-self-xl=stretch]) {\n    align-self: stretch;\n  }\n  :host([align-self-xl=start]) {\n    align-self: flex-start;\n  }\n  :host([align-self-xl=center]) {\n    align-self: center;\n  }\n  :host([align-self-xl=end]) {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 1400px) {\n  :host([align-self-xxl=auto]) {\n    align-self: auto;\n  }\n  :host([align-self-xxl=stretch]) {\n    align-self: stretch;\n  }\n  :host([align-self-xxl=start]) {\n    align-self: flex-start;\n  }\n  :host([align-self-xxl=center]) {\n    align-self: center;\n  }\n  :host([align-self-xxl=end]) {\n    align-self: flex-end;\n  }\n}\n\n:host([xs=auto]) {\n  flex-basis: auto;\n  max-width: none;\n}\n\n:host([xs=grow]) {\n  flex-grow: 1;\n  flex-basis: 0;\n  max-width: 100%;\n}\n\n:host([xs="1"]) {\n  flex-basis: 8.3333333333%;\n  max-width: 8.3333333333%;\n}\n\n:host([offset-xs="1"]) {\n  margin-left: 8.3333333333%;\n}\n\n:host([order-xs="1"]) {\n  order: 1;\n}\n\n:host([xs="2"]) {\n  flex-basis: 16.6666666667%;\n  max-width: 16.6666666667%;\n}\n\n:host([offset-xs="2"]) {\n  margin-left: 16.6666666667%;\n}\n\n:host([order-xs="2"]) {\n  order: 2;\n}\n\n:host([xs="3"]) {\n  flex-basis: 25%;\n  max-width: 25%;\n}\n\n:host([offset-xs="3"]) {\n  margin-left: 25%;\n}\n\n:host([order-xs="3"]) {\n  order: 3;\n}\n\n:host([xs="4"]) {\n  flex-basis: 33.3333333333%;\n  max-width: 33.3333333333%;\n}\n\n:host([offset-xs="4"]) {\n  margin-left: 33.3333333333%;\n}\n\n:host([order-xs="4"]) {\n  order: 4;\n}\n\n:host([xs="5"]) {\n  flex-basis: 41.6666666667%;\n  max-width: 41.6666666667%;\n}\n\n:host([offset-xs="5"]) {\n  margin-left: 41.6666666667%;\n}\n\n:host([order-xs="5"]) {\n  order: 5;\n}\n\n:host([xs="6"]) {\n  flex-basis: 50%;\n  max-width: 50%;\n}\n\n:host([offset-xs="6"]) {\n  margin-left: 50%;\n}\n\n:host([order-xs="6"]) {\n  order: 6;\n}\n\n:host([xs="7"]) {\n  flex-basis: 58.3333333333%;\n  max-width: 58.3333333333%;\n}\n\n:host([offset-xs="7"]) {\n  margin-left: 58.3333333333%;\n}\n\n:host([order-xs="7"]) {\n  order: 7;\n}\n\n:host([xs="8"]) {\n  flex-basis: 66.6666666667%;\n  max-width: 66.6666666667%;\n}\n\n:host([offset-xs="8"]) {\n  margin-left: 66.6666666667%;\n}\n\n:host([order-xs="8"]) {\n  order: 8;\n}\n\n:host([xs="9"]) {\n  flex-basis: 75%;\n  max-width: 75%;\n}\n\n:host([offset-xs="9"]) {\n  margin-left: 75%;\n}\n\n:host([order-xs="9"]) {\n  order: 9;\n}\n\n:host([xs="10"]) {\n  flex-basis: 83.3333333333%;\n  max-width: 83.3333333333%;\n}\n\n:host([offset-xs="10"]) {\n  margin-left: 83.3333333333%;\n}\n\n:host([order-xs="10"]) {\n  order: 10;\n}\n\n:host([xs="11"]) {\n  flex-basis: 91.6666666667%;\n  max-width: 91.6666666667%;\n}\n\n:host([offset-xs="11"]) {\n  margin-left: 91.6666666667%;\n}\n\n:host([order-xs="11"]) {\n  order: 11;\n}\n\n:host([xs="12"]) {\n  flex-basis: 100%;\n  max-width: 100%;\n}\n\n:host([offset-xs="12"]) {\n  margin-left: 100%;\n}\n\n:host([order-xs="12"]) {\n  order: 12;\n}\n\n@media (min-width: 576px) {\n  :host([sm=auto]) {\n    flex-basis: auto;\n    max-width: none;\n  }\n  :host([sm=grow]) {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n  :host([sm="1"]) {\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  :host([offset-sm="1"]) {\n    margin-left: 8.3333333333%;\n  }\n  :host([order-sm="1"]) {\n    order: 1;\n  }\n  :host([sm="2"]) {\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  :host([offset-sm="2"]) {\n    margin-left: 16.6666666667%;\n  }\n  :host([order-sm="2"]) {\n    order: 2;\n  }\n  :host([sm="3"]) {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  :host([offset-sm="3"]) {\n    margin-left: 25%;\n  }\n  :host([order-sm="3"]) {\n    order: 3;\n  }\n  :host([sm="4"]) {\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  :host([offset-sm="4"]) {\n    margin-left: 33.3333333333%;\n  }\n  :host([order-sm="4"]) {\n    order: 4;\n  }\n  :host([sm="5"]) {\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  :host([offset-sm="5"]) {\n    margin-left: 41.6666666667%;\n  }\n  :host([order-sm="5"]) {\n    order: 5;\n  }\n  :host([sm="6"]) {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  :host([offset-sm="6"]) {\n    margin-left: 50%;\n  }\n  :host([order-sm="6"]) {\n    order: 6;\n  }\n  :host([sm="7"]) {\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  :host([offset-sm="7"]) {\n    margin-left: 58.3333333333%;\n  }\n  :host([order-sm="7"]) {\n    order: 7;\n  }\n  :host([sm="8"]) {\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  :host([offset-sm="8"]) {\n    margin-left: 66.6666666667%;\n  }\n  :host([order-sm="8"]) {\n    order: 8;\n  }\n  :host([sm="9"]) {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  :host([offset-sm="9"]) {\n    margin-left: 75%;\n  }\n  :host([order-sm="9"]) {\n    order: 9;\n  }\n  :host([sm="10"]) {\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  :host([offset-sm="10"]) {\n    margin-left: 83.3333333333%;\n  }\n  :host([order-sm="10"]) {\n    order: 10;\n  }\n  :host([sm="11"]) {\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  :host([offset-sm="11"]) {\n    margin-left: 91.6666666667%;\n  }\n  :host([order-sm="11"]) {\n    order: 11;\n  }\n  :host([sm="12"]) {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  :host([offset-sm="12"]) {\n    margin-left: 100%;\n  }\n  :host([order-sm="12"]) {\n    order: 12;\n  }\n}\n\n@media (min-width: 768px) {\n  :host([md=auto]) {\n    flex-basis: auto;\n    max-width: none;\n  }\n  :host([md=grow]) {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n  :host([md="1"]) {\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  :host([offset-md="1"]) {\n    margin-left: 8.3333333333%;\n  }\n  :host([order-md="1"]) {\n    order: 1;\n  }\n  :host([md="2"]) {\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  :host([offset-md="2"]) {\n    margin-left: 16.6666666667%;\n  }\n  :host([order-md="2"]) {\n    order: 2;\n  }\n  :host([md="3"]) {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  :host([offset-md="3"]) {\n    margin-left: 25%;\n  }\n  :host([order-md="3"]) {\n    order: 3;\n  }\n  :host([md="4"]) {\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  :host([offset-md="4"]) {\n    margin-left: 33.3333333333%;\n  }\n  :host([order-md="4"]) {\n    order: 4;\n  }\n  :host([md="5"]) {\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  :host([offset-md="5"]) {\n    margin-left: 41.6666666667%;\n  }\n  :host([order-md="5"]) {\n    order: 5;\n  }\n  :host([md="6"]) {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  :host([offset-md="6"]) {\n    margin-left: 50%;\n  }\n  :host([order-md="6"]) {\n    order: 6;\n  }\n  :host([md="7"]) {\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  :host([offset-md="7"]) {\n    margin-left: 58.3333333333%;\n  }\n  :host([order-md="7"]) {\n    order: 7;\n  }\n  :host([md="8"]) {\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  :host([offset-md="8"]) {\n    margin-left: 66.6666666667%;\n  }\n  :host([order-md="8"]) {\n    order: 8;\n  }\n  :host([md="9"]) {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  :host([offset-md="9"]) {\n    margin-left: 75%;\n  }\n  :host([order-md="9"]) {\n    order: 9;\n  }\n  :host([md="10"]) {\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  :host([offset-md="10"]) {\n    margin-left: 83.3333333333%;\n  }\n  :host([order-md="10"]) {\n    order: 10;\n  }\n  :host([md="11"]) {\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  :host([offset-md="11"]) {\n    margin-left: 91.6666666667%;\n  }\n  :host([order-md="11"]) {\n    order: 11;\n  }\n  :host([md="12"]) {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  :host([offset-md="12"]) {\n    margin-left: 100%;\n  }\n  :host([order-md="12"]) {\n    order: 12;\n  }\n}\n\n@media (min-width: 992px) {\n  :host([lg=auto]) {\n    flex-basis: auto;\n    max-width: none;\n  }\n  :host([lg=grow]) {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n  :host([lg="1"]) {\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  :host([offset-lg="1"]) {\n    margin-left: 8.3333333333%;\n  }\n  :host([order-lg="1"]) {\n    order: 1;\n  }\n  :host([lg="2"]) {\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  :host([offset-lg="2"]) {\n    margin-left: 16.6666666667%;\n  }\n  :host([order-lg="2"]) {\n    order: 2;\n  }\n  :host([lg="3"]) {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  :host([offset-lg="3"]) {\n    margin-left: 25%;\n  }\n  :host([order-lg="3"]) {\n    order: 3;\n  }\n  :host([lg="4"]) {\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  :host([offset-lg="4"]) {\n    margin-left: 33.3333333333%;\n  }\n  :host([order-lg="4"]) {\n    order: 4;\n  }\n  :host([lg="5"]) {\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  :host([offset-lg="5"]) {\n    margin-left: 41.6666666667%;\n  }\n  :host([order-lg="5"]) {\n    order: 5;\n  }\n  :host([lg="6"]) {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  :host([offset-lg="6"]) {\n    margin-left: 50%;\n  }\n  :host([order-lg="6"]) {\n    order: 6;\n  }\n  :host([lg="7"]) {\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  :host([offset-lg="7"]) {\n    margin-left: 58.3333333333%;\n  }\n  :host([order-lg="7"]) {\n    order: 7;\n  }\n  :host([lg="8"]) {\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  :host([offset-lg="8"]) {\n    margin-left: 66.6666666667%;\n  }\n  :host([order-lg="8"]) {\n    order: 8;\n  }\n  :host([lg="9"]) {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  :host([offset-lg="9"]) {\n    margin-left: 75%;\n  }\n  :host([order-lg="9"]) {\n    order: 9;\n  }\n  :host([lg="10"]) {\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  :host([offset-lg="10"]) {\n    margin-left: 83.3333333333%;\n  }\n  :host([order-lg="10"]) {\n    order: 10;\n  }\n  :host([lg="11"]) {\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  :host([offset-lg="11"]) {\n    margin-left: 91.6666666667%;\n  }\n  :host([order-lg="11"]) {\n    order: 11;\n  }\n  :host([lg="12"]) {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  :host([offset-lg="12"]) {\n    margin-left: 100%;\n  }\n  :host([order-lg="12"]) {\n    order: 12;\n  }\n}\n\n@media (min-width: 1200px) {\n  :host([xl=auto]) {\n    flex-basis: auto;\n    max-width: none;\n  }\n  :host([xl=grow]) {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n  :host([xl="1"]) {\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  :host([offset-xl="1"]) {\n    margin-left: 8.3333333333%;\n  }\n  :host([order-xl="1"]) {\n    order: 1;\n  }\n  :host([xl="2"]) {\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  :host([offset-xl="2"]) {\n    margin-left: 16.6666666667%;\n  }\n  :host([order-xl="2"]) {\n    order: 2;\n  }\n  :host([xl="3"]) {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  :host([offset-xl="3"]) {\n    margin-left: 25%;\n  }\n  :host([order-xl="3"]) {\n    order: 3;\n  }\n  :host([xl="4"]) {\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  :host([offset-xl="4"]) {\n    margin-left: 33.3333333333%;\n  }\n  :host([order-xl="4"]) {\n    order: 4;\n  }\n  :host([xl="5"]) {\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  :host([offset-xl="5"]) {\n    margin-left: 41.6666666667%;\n  }\n  :host([order-xl="5"]) {\n    order: 5;\n  }\n  :host([xl="6"]) {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  :host([offset-xl="6"]) {\n    margin-left: 50%;\n  }\n  :host([order-xl="6"]) {\n    order: 6;\n  }\n  :host([xl="7"]) {\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  :host([offset-xl="7"]) {\n    margin-left: 58.3333333333%;\n  }\n  :host([order-xl="7"]) {\n    order: 7;\n  }\n  :host([xl="8"]) {\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  :host([offset-xl="8"]) {\n    margin-left: 66.6666666667%;\n  }\n  :host([order-xl="8"]) {\n    order: 8;\n  }\n  :host([xl="9"]) {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  :host([offset-xl="9"]) {\n    margin-left: 75%;\n  }\n  :host([order-xl="9"]) {\n    order: 9;\n  }\n  :host([xl="10"]) {\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  :host([offset-xl="10"]) {\n    margin-left: 83.3333333333%;\n  }\n  :host([order-xl="10"]) {\n    order: 10;\n  }\n  :host([xl="11"]) {\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  :host([offset-xl="11"]) {\n    margin-left: 91.6666666667%;\n  }\n  :host([order-xl="11"]) {\n    order: 11;\n  }\n  :host([xl="12"]) {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  :host([offset-xl="12"]) {\n    margin-left: 100%;\n  }\n  :host([order-xl="12"]) {\n    order: 12;\n  }\n}\n\n@media (min-width: 1400px) {\n  :host([xxl=auto]) {\n    flex-basis: auto;\n    max-width: none;\n  }\n  :host([xxl=grow]) {\n    flex-grow: 1;\n    flex-basis: 0;\n    max-width: 100%;\n  }\n  :host([xxl="1"]) {\n    flex-basis: 8.3333333333%;\n    max-width: 8.3333333333%;\n  }\n  :host([offset-xxl="1"]) {\n    margin-left: 8.3333333333%;\n  }\n  :host([order-xxl="1"]) {\n    order: 1;\n  }\n  :host([xxl="2"]) {\n    flex-basis: 16.6666666667%;\n    max-width: 16.6666666667%;\n  }\n  :host([offset-xxl="2"]) {\n    margin-left: 16.6666666667%;\n  }\n  :host([order-xxl="2"]) {\n    order: 2;\n  }\n  :host([xxl="3"]) {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  :host([offset-xxl="3"]) {\n    margin-left: 25%;\n  }\n  :host([order-xxl="3"]) {\n    order: 3;\n  }\n  :host([xxl="4"]) {\n    flex-basis: 33.3333333333%;\n    max-width: 33.3333333333%;\n  }\n  :host([offset-xxl="4"]) {\n    margin-left: 33.3333333333%;\n  }\n  :host([order-xxl="4"]) {\n    order: 4;\n  }\n  :host([xxl="5"]) {\n    flex-basis: 41.6666666667%;\n    max-width: 41.6666666667%;\n  }\n  :host([offset-xxl="5"]) {\n    margin-left: 41.6666666667%;\n  }\n  :host([order-xxl="5"]) {\n    order: 5;\n  }\n  :host([xxl="6"]) {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  :host([offset-xxl="6"]) {\n    margin-left: 50%;\n  }\n  :host([order-xxl="6"]) {\n    order: 6;\n  }\n  :host([xxl="7"]) {\n    flex-basis: 58.3333333333%;\n    max-width: 58.3333333333%;\n  }\n  :host([offset-xxl="7"]) {\n    margin-left: 58.3333333333%;\n  }\n  :host([order-xxl="7"]) {\n    order: 7;\n  }\n  :host([xxl="8"]) {\n    flex-basis: 66.6666666667%;\n    max-width: 66.6666666667%;\n  }\n  :host([offset-xxl="8"]) {\n    margin-left: 66.6666666667%;\n  }\n  :host([order-xxl="8"]) {\n    order: 8;\n  }\n  :host([xxl="9"]) {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  :host([offset-xxl="9"]) {\n    margin-left: 75%;\n  }\n  :host([order-xxl="9"]) {\n    order: 9;\n  }\n  :host([xxl="10"]) {\n    flex-basis: 83.3333333333%;\n    max-width: 83.3333333333%;\n  }\n  :host([offset-xxl="10"]) {\n    margin-left: 83.3333333333%;\n  }\n  :host([order-xxl="10"]) {\n    order: 10;\n  }\n  :host([xxl="11"]) {\n    flex-basis: 91.6666666667%;\n    max-width: 91.6666666667%;\n  }\n  :host([offset-xxl="11"]) {\n    margin-left: 91.6666666667%;\n  }\n  :host([order-xxl="11"]) {\n    order: 11;\n  }\n  :host([xxl="12"]) {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  :host([offset-xxl="12"]) {\n    margin-left: 100%;\n  }\n  :host([order-xxl="12"]) {\n    order: 12;\n  }\n}\n\n:host([hide-xs-up]) {\n  display: none;\n}\n\n@media (min-width: 576px) {\n  :host([hide-sm-up]) {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) {\n  :host([hide-md-up]) {\n    display: none;\n  }\n}\n\n@media (min-width: 992px) {\n  :host([hide-lg-up]) {\n    display: none;\n  }\n}\n\n@media (min-width: 1200px) {\n  :host([hide-xl-up]) {\n    display: none;\n  }\n}\n\n@media (max-width: 767.98px) {\n  :host([hide-sm-down]) {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  :host([hide-md-down]) {\n    display: none;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  :host([hide-lg-down]) {\n    display: none;\n  }\n}\n\n@media (max-width: 1399.98px) {\n  :host([hide-xl-down]) {\n    display: none;\n  }\n}\n\n@media (max-width: 575.98px) {\n  :host([hide-xs]) {\n    display: none;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 767.98px) {\n  :host([hide-sm]) {\n    display: none;\n  }\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  :host([hide-md]) {\n    display: none;\n  }\n}\n\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  :host([hide-lg]) {\n    display: none;\n  }\n}\n\n@media (min-width: 1200px) and (max-width: 1399.98px) {\n  :host([hide-xl]) {\n    display: none;\n  }\n}\n\n@media (min-width: 1400px) {\n  :host([hide-xxl]) {\n    display: none;\n  }\n}';
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
    type: 8
  })
], GridItem.prototype, "alignSelf", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "alignSelfXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "alignSelfSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "alignSelfMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "alignSelfLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "alignSelfXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "alignSelfXxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "xs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "sm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "md", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "lg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "xl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "xxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideXxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hide", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideSmUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideMdUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideLgUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideXlUp", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideSmDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideMdDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideLgDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideXlDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], GridItem.prototype, "hideXxlDown", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "offsetXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "offsetSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "offsetMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "offsetLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "offsetXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "offsetXxl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "orderXs", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "orderSm", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "orderMd", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "orderLg", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "orderXl", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], GridItem.prototype, "orderXxl", 2);
GridItem = __decorateClass([
  Element()
], GridItem);
export {
  GridItem
};
