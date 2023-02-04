"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 6539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./utils/mutations.ts
const endpoint = "https://api.hashnode.com/";
const apiKey = "7df95377-352a-4181-8e01-08e6833f82c6";
const mutation = `
mutation {
    followUser(userId : "rukewe") {
      code
        success
        message
    }
    }
`;
const followUser = async ()=>{
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: apiKey
        },
        body: JSON.stringify({
            query: mutation
        })
    });
    const data = await response.json();
    return data;
};

;// CONCATENATED MODULE: ./pages/api/user.ts
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
    const data = await followUser();
    console.log(data, "data");
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
var __webpack_exports__ = (__webpack_exec__(6539));
module.exports = __webpack_exports__;

})();