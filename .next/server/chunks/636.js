"use strict";
exports.id = 636;
exports.ids = [636];
exports.modules = {

/***/ 2636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ fetchArticle),
/* harmony export */   "Z": () => (/* binding */ fetchArticles)
/* harmony export */ });
const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
  {
    user(username: "rukewe") {
      publication {
        posts(page: 0) {
            _id
            title
            brief
            slug
            followersCount
            dateAdded
            coverImage
            contentMarkdown
        }
      }
    }
  }

`;
const fetchArticles = async ()=>{
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: ARTICLE_QUERY
        })
    });
    const data = await response.json();
    return data;
};
const apiKey = "7df95377-352a-4181-8e01-08e6833f82c6";
const fetchArticle = async (slug)=>{
    const ARTICLE_QUERY_BY_SLUG = `
{
  post(slug: "${slug}", hostname: "sleektechnology.hashnode.dev") {
    sourcedFromGithub
    _id
    isRepublished
    followersCount
    cuid
    slug
    title
    type
    partOfPublication
    dateUpdated
    totalReactions
    numCollapsed
    isDelisted
    isFeatured
    isActive
    replyCount
    responseCount
    popularity
    dateAdded
    contentMarkdown
    content
    brief
    coverImage
    isAnonymous
    tags {
      name
    }
    reactions {
      reaction {
        image
        name
      }
      count
    }
    responses(page: 0) {
      popularity
      totalReactions
      replies {
        content
        dateAdded
      }
    }
  }
}
`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //   authorization: `Bearer ${process.env.HASHNODE_API_KEY}`,
            Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            query: ARTICLE_QUERY_BY_SLUG
        })
    });
    const data = await response.json();
    return data;
};


/***/ })

};
;