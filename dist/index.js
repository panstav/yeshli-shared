"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themes = exports.roles = exports.misc = void 0;
var roles = exports.roles = {
  order: ['GUEST', 'TRIAL', 'MEMBER', 'EDITOR', 'ADMIN'],
  GUEST: 'GUEST',
  TRIAL: 'TRIAL',
  MEMBER: 'MEMBER',
  EDITOR: 'EDITOR',
  ADMIN: 'ADMIN'
};

// cspell:ignore alon, elyse
var themes = exports.themes = [{
  themeName: "alon-01",
  parentDomain: "yesh.li"
}, {
  themeName: "elyse-01",
  parentDomain: "yesh.li"
}, {
  themeName: "tom-01",
  parentDomain: "yesh.li-eng",
  collectionPages: [{
    type: "post",
    prefix: "blog",
    componentPath: "pages/Post/index.js"
  }, {
    type: "tag",
    prefix: "blog/tag",
    componentPath: "pages/Tag/index.js"
  }, {
    type: "portfolio",
    prefix: "portfolio",
    componentPath: "pages/PortfolioPost/index.js"
  }]
}];
var misc = exports.misc = {
  yeshLiHomepagePurchaseId: 'purchase'
};