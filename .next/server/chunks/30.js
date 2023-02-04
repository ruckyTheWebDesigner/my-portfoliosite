"use strict";
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 3561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Card)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
;// CONCATENATED MODULE: ./components/shared/Button.tsx



function CustomButton({ variant , color , rightIcon , children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
        variant: variant,
        radius: "md",
        color: color,
        rightIcon: rightIcon,
        children: children
    });
}
/* harmony default export */ const Button = (CustomButton);

;// CONCATENATED MODULE: ./components/shared/Card.tsx





function BlogCard({ title , description  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
        sx: {
            minHeight: "250px",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
                transform: "translateY(-5px)"
            }
        },
        shadow: "xl",
        className: "leading-relaxed group dark:bg-gray-800 space-y-2 lg:space-y-4 cursor-pointer hover:shadow-xl p-4 lg:p-6",
        radius: "md",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-4 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "dark:text-gray-100 text-xl lg:text-2xl font-semibold group-hover:text-primary-color",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-medium dark:text-gray-200",
                        children: description.slice(0, 150).concat("...")
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button, {
                variant: "light",
                rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiArrowRight, {
                    className: ""
                }),
                children: "Read More"
            })
        ]
    });
}
/* harmony default export */ const Card = (BlogCard);


/***/ }),

/***/ 9177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8910);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useArticles() {
    const { data , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)({
        queryKey: [
            "articles"
        ],
        queryFn: async ()=>{
            const response = await fetch("http://localhost:3000/api/articles");
            const data = await response.json();
            const { article: { data: { user: { publication: { posts  }  }  }  }  } = data;
            return posts;
        }
    });
    return {
        data,
        isLoading
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useArticles);


/***/ })

};
;