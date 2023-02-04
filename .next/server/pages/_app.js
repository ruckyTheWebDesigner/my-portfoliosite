(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
;// CONCATENATED MODULE: external "@tanstack/react-query-devtools"
const react_query_devtools_namespaceObject = require("@tanstack/react-query-devtools");
// EXTERNAL MODULE: external "@tanstack/react-query"
var react_query_ = __webpack_require__(8910);
;// CONCATENATED MODULE: ./pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_query_.QueryClientProvider, {
        client: new react_query_.QueryClient(),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MantineProvider, {
            theme: {
                colorScheme: "dark",
                primaryColor: "teal"
            },
            withNormalizeCSS: true,
            withGlobalStyles: true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_query_devtools_namespaceObject.ReactQueryDevtools, {
                    initialIsOpen: false
                })
            ]
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 2247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 8910:
/***/ ((module) => {

"use strict";
module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7181));
module.exports = __webpack_exports__;

})();