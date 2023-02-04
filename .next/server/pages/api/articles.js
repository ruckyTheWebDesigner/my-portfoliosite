"use strict";
(() => {
var exports = {};
exports.id = 100;
exports.ids = [100];
exports.modules = {

/***/ 893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2636);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
    const data = await (0,_utils_articles__WEBPACK_IMPORTED_MODULE_0__/* .fetchArticles */ .Z)();
    //   const parseBody = JSON.parse(req.body);
    if (data) {
        res.status(200).json({
            article: data
        });
    } else {
        res.status(400).json({
            article: "No article found"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636], () => (__webpack_exec__(893)));
module.exports = __webpack_exports__;

})();