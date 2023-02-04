"use strict";
(() => {
var exports = {};
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 31:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_articles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2636);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const apiKey = "27d2c2e08fb27734661eaf85c7db6c5818d6f4dff83789806777922e7dcb4a2fe";
const userId = "163464c7cce742cbe86250df5a84e66918f84a511337a9769015b7e9389170e48";
async function handler(req, res) {
    const slug = req.body;
    const data = await (0,_utils_articles__WEBPACK_IMPORTED_MODULE_0__/* .fetchArticle */ .V)(slug);
    if (data) {
        res.status(200).json({
            article: data
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
var __webpack_exports__ = __webpack_require__.X(0, [636], () => (__webpack_exec__(31)));
module.exports = __webpack_exports__;

})();