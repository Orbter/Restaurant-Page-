/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Pixelify+Sans:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Riot&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0px;
  padding: 0px;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background-color: #28b465;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.headline {
  font-family: "Delicious Handrawn", cursive;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}

#head {
  z-index: 10;
}

#logo {
  width: 70%;
}

#content {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #88d4ab;
  min-height: 500px;
  height: fit-content;
  border-radius: 15px;
  width: 80%;
  margin-top: 40px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.button {
  width: 95px;
  height: 45px;
  border-radius: 17px;
  border: 1px solid #e72e2e;
  background-color: #e72e2e;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  box-sizing: content-box;
}

.active {
  border: 2px solid #ffbe0b;
  color: #ffbe0b;
  width: 110px;
  height: 55px;
}

.leaf {
  position: absolute;
  width: 200px;
}

@keyframes slideAndRotateInFromLeft1 {
  from {
    transform: translateX(-100%) rotate(0deg);
    opacity: 0;
  }
  to {
    transform: translateX(0) rotate(137deg);
    opacity: 1;
  }
}
#leaf-1 {
  animation: slideAndRotateInFromLeft1 1.5s ease-in forwards;
  width: 200px;
  top: -30px;
  left: -40px;
}

@keyframes slideAndRotateInFromRight2 {
  from {
    transform: translateX(100%) rotate(0deg);
    opacity: 0;
  }
  to {
    transform: translateX(0) rotate(224deg);
    opacity: 1;
  }
}
#leaf-2 {
  animation: slideAndRotateInFromRight2 1.5s ease-in forwards;
  width: 200px;
  top: -31px;
  right: -39px;
}

@keyframes slideAndRotateInFromLeft3 {
  from {
    transform: translateX(-100%) rotate(0deg);
    opacity: 0;
  }
  to {
    transform: translateX(0) rotate(36deg);
    opacity: 1;
  }
}
#leaf-3 {
  animation: slideAndRotateInFromLeft3 1.5s ease-in forwards;
  bottom: -22px;
  left: -48px;
  width: 200px;
}

@keyframes slideAndRotateInFromRight4 {
  from {
    transform: translateX(100%) rotate(0deg);
    opacity: 0;
  }
  to {
    transform: translateX(0) rotate(312deg);
    opacity: 1;
  }
}
#leaf-4 {
  animation: slideAndRotateInFromRight4 1.5s ease-in forwards;
  bottom: -22px;
  right: -46px;
  width: 200px;
}

.text {
  font-size: 1.5rem;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  padding: 10px;
}

.pizza {
  width: 80%;
}

.menu-container {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 80%;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgba(210, 227, 188, 0.56);
}

.menu-name {
  font-size: 1.9rem;
  font-family: "Protest Riot", sans-serif;
}

.menu-text {
  padding: 5px;
  font-family: "Protest Riot", sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
}

.map {
  min-width: 240px;
  width: 80%;
  padding-top: 50px;
}

.about-photo {
  width: 25px;
}

.number {
  display: flex;
  gap: 10px;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
}

.address {
  display: flex;
  gap: 10px;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  text-wrap: wrap;
}

.about-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 5px;
}

.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 70px;
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,YAAA;AACF;;AAOA;EACE,uBAAA;AAJF;;AAOA;EACE,iBAAA;EACA,yBAZc;EAad,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,kBAAA;AAJF;;AAMA;EACE,0CAAA;EACA,eAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AAHF;;AAKA;EACE,WAAA;AAFF;;AAIA;EACE,UAAA;AADF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,sBAAA;EACA,yBArCmB;EAsCnB,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,UAAA;EACA,gBAAA;AAAF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,mBAAA;EACA,yBAAA;EACA,yBAvDO;EAwDP,kCAAA;EACA,iBAAA;EACA,gBAAA;EACA,uBAAA;AACF;;AACA;EACE,yBAAA;EACA,cA9Dc;EA+Dd,YAAA;EACA,YAAA;AAEF;;AACA;EACE,kBAAA;EACA,YAAA;AAEF;;AACA;EACE;IACE,yCAAA;IACA,UAAA;EAEF;EAAA;IACE,uCAAA;IACA,UAAA;EAEF;AACF;AACA;EACE,0DAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;AACF;;AAEA;EACE;IACE,wCAAA;IACA,UAAA;EACF;EACA;IACE,uCAAA;IACA,UAAA;EACF;AACF;AAEA;EACE,2DAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;AAAF;;AAEA;EACE;IACE,yCAAA;IACA,UAAA;EACF;EACA;IACE,sCAAA;IACA,UAAA;EACF;AACF;AAEA;EACE,0DAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;AAAF;;AAGA;EACE;IACE,wCAAA;IACA,UAAA;EAAF;EAEA;IACE,uCAAA;IACA,UAAA;EAAF;AACF;AAGA;EACE,2DAAA;EACA,aAAA;EACA,YAAA;EACA,YAAA;AADF;;AAIA;EACE,iBAAA;EACA,+BAAA;EACA,gBAAA;EACA,aAAA;AADF;;AAIA;EACE,UAAA;AADF;;AAGA;EACE,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,QAAA;EACA,UAAA;EACA,uBAAA;EACA,kBAAA;EACA,2CApKe;AAoKjB;;AAEA;EACE,iBAAA;EACA,uCAAA;AACF;;AACA;EACE,YAAA;EACA,uCAAA;EACA,iBAAA;EACA,gBAAA;AAEF;;AAAA;EACE,gBAAA;EACA,UAAA;EACA,iBAAA;AAGF;;AADA;EACE,WAAA;AAIF;;AAFA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,+BAAA;AAKF;;AAHA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,+BAAA;EACA,eAAA;AAMF;;AAJA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;AAOF;;AALA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,iBAAA;AAQF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Pixelify+Sans:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Riot&display=swap\");\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n$primary-color: #28b465;\r\n$content-background: #88d4ab;\r\n$button: #e72e2e;\r\n$button-active: #ffbe0b;\r\n$menu-container: rgb(210, 227, 188, 0.56);\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: $primary-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.headline {\r\n  font-family: \"Delicious Handrawn\", cursive;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n#head {\r\n  z-index: 10;\r\n}\r\n#logo {\r\n  width: 70%;\r\n}\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: $content-background;\r\n  min-height: 500px;\r\n  height: fit-content;\r\n  border-radius: 15px;\r\n  width: 80%;\r\n  margin-top: 40px;\r\n}\r\n.button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.button {\r\n  width: 95px;\r\n  height: 45px;\r\n  border-radius: 17px;\r\n  border: 1px solid $button;\r\n  background-color: $button;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  box-sizing: content-box;\r\n}\r\n.active {\r\n  border: 2px solid $button-active;\r\n  color: $button-active;\r\n  width: 110px;\r\n  height: 55px;\r\n}\r\n\r\n.leaf {\r\n  position: absolute;\r\n  width: 200px;\r\n}\r\n\r\n@keyframes slideAndRotateInFromLeft1 {\r\n  from {\r\n    transform: translateX(-100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(137deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-1 {\r\n  animation: slideAndRotateInFromLeft1 1.5s ease-in forwards;\r\n  width: 200px;\r\n  top: -30px;\r\n  left: -40px;\r\n}\r\n\r\n@keyframes slideAndRotateInFromRight2 {\r\n  from {\r\n    transform: translateX(100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(224deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-2 {\r\n  animation: slideAndRotateInFromRight2 1.5s ease-in forwards;\r\n  width: 200px;\r\n  top: -31px;\r\n  right: -39px;\r\n}\r\n@keyframes slideAndRotateInFromLeft3 {\r\n  from {\r\n    transform: translateX(-100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(36deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-3 {\r\n  animation: slideAndRotateInFromLeft3 1.5s ease-in forwards;\r\n  bottom: -22px;\r\n  left: -48px;\r\n  width: 200px;\r\n}\r\n\r\n@keyframes slideAndRotateInFromRight4 {\r\n  from {\r\n    transform: translateX(100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(312deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-4 {\r\n  animation: slideAndRotateInFromRight4 1.5s ease-in forwards;\r\n  bottom: -22px;\r\n  right: -46px;\r\n  width: 200px;\r\n}\r\n\r\n.text {\r\n  font-size: 1.5rem;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: 600;\r\n  padding: 10px;\r\n}\r\n\r\n.pizza {\r\n  width: 80%;\r\n}\r\n.menu-container {\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  width: 80%;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: $menu-container;\r\n}\r\n.menu-name {\r\n  font-size: 1.9rem;\r\n  font-family: \"Protest Riot\", sans-serif;\r\n}\r\n.menu-text {\r\n  padding: 5px;\r\n  font-family: \"Protest Riot\", sans-serif;\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n}\r\n.map {\r\n  min-width: 240px;\r\n  width: 80%;\r\n  padding-top: 50px;\r\n}\r\n.about-photo {\r\n  width: 25px;\r\n}\r\n.number {\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 1rem;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n.address {\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 1rem;\r\n  font-family: \"Lato\", sans-serif;\r\n  text-wrap: wrap;\r\n}\r\n.about-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  padding: 5px;\r\n}\r\n.info {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  padding-top: 70px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pageJs/about.js":
/*!*****************************!*\
  !*** ./src/pageJs/about.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_google_photo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/google-photo.png */ "./src/assets/google-photo.png");
/* harmony import */ var _src_assets_pizza_shop_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/pizza-shop.svg */ "./src/assets/pizza-shop.svg");
/* harmony import */ var _src_assets_call_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/call.svg */ "./src/assets/call.svg");



function aboutPage() {
  const content = document.getElementById("content");
  const imgMap = document.createElement("img");
  const imgHouse = document.createElement("img");
  const imgNumber = document.createElement("img");
  const Phone = document.createElement("h3");
  const pizzaHouse = document.createElement("h3");
  const addressContainer = document.createElement("div");
  const numberContainer = document.createElement("div");
  const container = document.createElement("div");
  const info = document.createElement("div");

  //classes
  imgMap.className = "map";
  imgHouse.classList.add("about-photo", "home");
  imgNumber.classList.add("about-photo", "phone");
  Phone.className = "about-headline";
  pizzaHouse.className = "about-headline";
  addressContainer.className = "address";
  numberContainer.className = "number";
  container.className = "about-container";
  info.className = "info";

  //inner text
  pizzaHouse.textContent = "address: 1435 Broadway, New York, NY 10018, Usa";
  Phone.textContent = "phone-number: 123-456-789";

  //src
  imgMap.src = _src_assets_google_photo_png__WEBPACK_IMPORTED_MODULE_0__;
  imgHouse.src = _src_assets_pizza_shop_svg__WEBPACK_IMPORTED_MODULE_1__;
  imgNumber.src = _src_assets_call_svg__WEBPACK_IMPORTED_MODULE_2__;
  //appending

  numberContainer.appendChild(imgNumber);
  numberContainer.appendChild(Phone);

  addressContainer.appendChild(imgHouse);
  addressContainer.appendChild(pizzaHouse);

  info.appendChild(numberContainer);
  info.appendChild(addressContainer);
  content.appendChild(info);
  content.appendChild(imgMap);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);


/***/ }),

/***/ "./src/pageJs/home.js":
/*!****************************!*\
  !*** ./src/pageJs/home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_pizza_guy_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/pizza-guy.svg */ "./src/assets/pizza-guy.svg");
 // Assuming pizza-guy.svg is in the assets folder and processed by Webpack

function homePage() {
  const content = document.getElementById("content");
  const logo = document.createElement("img");
  const text = document.createElement("text");
  logo.src = _src_assets_pizza_guy_svg__WEBPACK_IMPORTED_MODULE_0__;
  logo.id = "logo";
  text.className = "text";
  text.textContent =
    "Discover PureSlice: Where gourmet meets wellness. Bite into our deliciously healthy pizzas, made with organic ingredients and a pinch of joy. Taste the difference health makes. PureSlice - Your slice of health!";
  content.appendChild(logo);
  content.appendChild(text);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


/***/ }),

/***/ "./src/pageJs/menu.js":
/*!****************************!*\
  !*** ./src/pageJs/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_regular_pizza_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/regular-pizza.svg */ "./src/assets/regular-pizza.svg");
/* harmony import */ var _src_assets_red_sauce_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/assets/red-sauce.svg */ "./src/assets/red-sauce.svg");
/* harmony import */ var _src_assets_spicy_pizza_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../src/assets/spicy-pizza.svg */ "./src/assets/spicy-pizza.svg");
/* harmony import */ var _src_assets_our_flagship_pizza_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/assets/our-flagship-pizza.svg */ "./src/assets/our-flagship-pizza.svg");
/* harmony import */ var _src_assets_olives_tomato_onion_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../src/assets/olives-tomato-onion.svg */ "./src/assets/olives-tomato-onion.svg");
/* harmony import */ var _src_assets_mushrooms_and_tomatoes_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../src/assets/mushrooms-and-tomatoes.svg */ "./src/assets/mushrooms-and-tomatoes.svg");
/* harmony import */ var _src_assets_meat_and_cheese_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../src/assets/meat-and-cheese.svg */ "./src/assets/meat-and-cheese.svg");








function createMenu(name, img, ingredients) {
  const content = document.getElementById("content");
  const menu = document.createElement("div");
  const imgPizza = document.createElement("img");
  const headline = document.createElement("h2");
  const text = document.createElement("text");

  //content
  imgPizza.src = img;
  headline.textContent = name;
  text.textContent = ingredients;

  //class
  menu.className = "menu-container";
  imgPizza.className = "pizza";
  text.className = "menu-text";
  headline.className = "menu-name ";

  //appending
  menu.appendChild(imgPizza);
  menu.appendChild(headline);
  menu.appendChild(text);
  content.appendChild(menu);
}
function menuPage() {
  createMenu(
    "Peppy",
    _src_assets_regular_pizza_svg__WEBPACK_IMPORTED_MODULE_0__,
    "pepperoni, garnish of basil leaves, with a tomato sauce cheese base."
  );
  createMenu(
    "Margher",
    _src_assets_red_sauce_svg__WEBPACK_IMPORTED_MODULE_1__,
    "fresh tomato slices, chunks of mozzarella cheese, and is garnished with fresh basil."
  );
  createMenu(
    "Spicy",
    _src_assets_spicy_pizza_svg__WEBPACK_IMPORTED_MODULE_2__,
    "pepperoni, red chili peppers and garlic cloves  along with a classic cheese and tomato sauce base."
  );
  createMenu(
    "Supreme",
    _src_assets_our_flagship_pizza_svg__WEBPACK_IMPORTED_MODULE_3__,
    "black olives, red onions, slices of garlic cloves, chunks of sausage, fresh basil leaves, and a scattering of tomato slices, all on a cheese and tomato sauce base."
  );
  createMenu(
    "Delite",
    _src_assets_olives_tomato_onion_svg__WEBPACK_IMPORTED_MODULE_4__,
    "black olives, sliced tomatoes, red onion rings with cheese base with tomato sauce"
  );
  createMenu(
    "Veggie",
    _src_assets_mushrooms_and_tomatoes_svg__WEBPACK_IMPORTED_MODULE_5__,
    "sliced mushrooms, black olives, tomato slices mozzarella with cheese on a tomato sauce base."
  );
  createMenu(
    "Hawaiin",
    _src_assets_meat_and_cheese_svg__WEBPACK_IMPORTED_MODULE_6__,
    " ham and pineapple with cheese and a tomato sauce base"
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);


/***/ }),

/***/ "./src/assets/call.svg":
/*!*****************************!*\
  !*** ./src/assets/call.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "call.svg";

/***/ }),

/***/ "./src/assets/google-photo.png":
/*!*************************************!*\
  !*** ./src/assets/google-photo.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "google-photo.png";

/***/ }),

/***/ "./src/assets/leaf.svg":
/*!*****************************!*\
  !*** ./src/assets/leaf.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "leaf.svg";

/***/ }),

/***/ "./src/assets/meat-and-cheese.svg":
/*!****************************************!*\
  !*** ./src/assets/meat-and-cheese.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "meat-and-cheese.svg";

/***/ }),

/***/ "./src/assets/mushrooms-and-tomatoes.svg":
/*!***********************************************!*\
  !*** ./src/assets/mushrooms-and-tomatoes.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "mushrooms-and-tomatoes.svg";

/***/ }),

/***/ "./src/assets/olives-tomato-onion.svg":
/*!********************************************!*\
  !*** ./src/assets/olives-tomato-onion.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "olives-tomato-onion.svg";

/***/ }),

/***/ "./src/assets/our-flagship-pizza.svg":
/*!*******************************************!*\
  !*** ./src/assets/our-flagship-pizza.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "our-flagship-pizza.svg";

/***/ }),

/***/ "./src/assets/pizza-guy.svg":
/*!**********************************!*\
  !*** ./src/assets/pizza-guy.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-guy.svg";

/***/ }),

/***/ "./src/assets/pizza-shop.svg":
/*!***********************************!*\
  !*** ./src/assets/pizza-shop.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pizza-shop.svg";

/***/ }),

/***/ "./src/assets/red-sauce.svg":
/*!**********************************!*\
  !*** ./src/assets/red-sauce.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "red-sauce.svg";

/***/ }),

/***/ "./src/assets/regular-pizza.svg":
/*!**************************************!*\
  !*** ./src/assets/regular-pizza.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "regular-pizza.svg";

/***/ }),

/***/ "./src/assets/spicy-pizza.svg":
/*!************************************!*\
  !*** ./src/assets/spicy-pizza.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "spicy-pizza.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_leaf_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/leaf.svg */ "./src/assets/leaf.svg");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _pageJs_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageJs/about */ "./src/pageJs/about.js");
/* harmony import */ var _pageJs_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageJs/menu.js */ "./src/pageJs/menu.js");
/* harmony import */ var _pageJs_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageJs/home.js */ "./src/pageJs/home.js");



// Importing page JS




// Correctly set the source for leaf-1 and logo images
const leafImg1 = document.getElementById("leaf-1");
const leafImg2 = document.getElementById("leaf-2");
const leafImg3 = document.getElementById("leaf-3");
const leafImg4 = document.getElementById("leaf-4");
leafImg1.src = _assets_leaf_svg__WEBPACK_IMPORTED_MODULE_0__;
leafImg2.src = _assets_leaf_svg__WEBPACK_IMPORTED_MODULE_0__;
leafImg3.src = _assets_leaf_svg__WEBPACK_IMPORTED_MODULE_0__;
leafImg4.src = _assets_leaf_svg__WEBPACK_IMPORTED_MODULE_0__;

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");
homeButton.addEventListener("click", loadHome);
menuButton.addEventListener("click", loadMenu);
aboutButton.addEventListener("click", loadAbout);

function loadHome() {
  const content = document.getElementById("content");
  if (homeButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(homeButton);
    (0,_pageJs_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
}
function loadMenu() {
  const content = document.getElementById("content");
  if (menuButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(menuButton);
    (0,_pageJs_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }
}
function loadAbout() {
  const content = document.getElementById("content");
  if (aboutButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(aboutButton);
    (0,_pageJs_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}
function Remove(div) {
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}
function toggelButtons(button) {
  menuButton.classList.remove("active");
  homeButton.classList.remove("active");
  aboutButton.classList.remove("active");
  button.classList.add("active");
}
loadHome();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhJQUE4SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DLElBQUksSUFBSSxtQ0FBbUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSx3Q0FBd0M7QUFDclo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFL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Ozs7Ozs7Ozs7Ozs7OztVQ3JFeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDVDtBQUM1QjtBQUNBO0FBQ3VDO0FBQ0M7QUFDQTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CLGVBQWUsNkNBQUk7QUFDbkIsZUFBZSw2Q0FBSTtBQUNuQixlQUFlLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSwyREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSwyREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSx5REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUpzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlSnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUpzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVBpeGVsaWZ5K1NhbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Qcm90ZXN0K1Jpb3QmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGI0NjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRsaW5lIHtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaWNpb3VzIEhhbmRyYXduXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jaGVhZCB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jbG9nbyB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDRhYjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNzJlMmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzJlMmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG4uYWN0aXZlIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmYmUwYjtcbiAgY29sb3I6ICNmZmJlMGI7XG4gIHdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ubGVhZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDEzN2RlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xlYWYtMSB7XG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MSAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIHdpZHRoOiAyMDBweDtcbiAgdG9wOiAtMzBweDtcbiAgbGVmdDogLTQwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMjI0ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4jbGVhZi0yIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0MiAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIHdpZHRoOiAyMDBweDtcbiAgdG9wOiAtMzFweDtcbiAgcmlnaHQ6IC0zOXB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDMge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDM2ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4jbGVhZi0zIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQzIDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgYm90dG9tOiAtMjJweDtcbiAgbGVmdDogLTQ4cHg7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0NCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgzMTJkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiNsZWFmLTQge1xuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQ0IDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgYm90dG9tOiAtMjJweDtcbiAgcmlnaHQ6IC00NnB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBpenphIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMjcsIDE4OCwgMC41Nik7XG59XG5cbi5tZW51LW5hbWUge1xuICBmb250LXNpemU6IDEuOXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUHJvdGVzdCBSaW90XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tZW51LXRleHQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3Rlc3QgUmlvdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hcCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uYWJvdXQtcGhvdG8ge1xuICB3aWR0aDogMjVweDtcbn1cblxuLm51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC13cmFwOiB3cmFwO1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBT0E7RUFDRSx1QkFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSx5QkFaYztFQWFkLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFNQTtFQUNFLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxXQUFBO0FBRkY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQXJDbUI7RUFzQ25CLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkF2RE87RUF3RFAsa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0E5RGM7RUErRGQsWUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSx5Q0FBQTtJQUNBLFVBQUE7RUFFRjtFQUFBO0lBQ0UsdUNBQUE7SUFDQSxVQUFBO0VBRUY7QUFDRjtBQUNBO0VBQ0UsMERBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0NBQUE7SUFDQSxVQUFBO0VBQ0Y7RUFDQTtJQUNFLHVDQUFBO0lBQ0EsVUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFLDJEQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFDRTtJQUNFLHlDQUFBO0lBQ0EsVUFBQTtFQUNGO0VBQ0E7SUFDRSxzQ0FBQTtJQUNBLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSwwREFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSx3Q0FBQTtJQUNBLFVBQUE7RUFBRjtFQUVBO0lBQ0UsdUNBQUE7SUFDQSxVQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0UsMkRBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FwS2U7QUFvS2pCOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx1Q0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFPRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFRRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1QaXhlbGlmeStTYW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9UHJvdGVzdCtSaW90JmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxufVxcclxcbiRwcmltYXJ5LWNvbG9yOiAjMjhiNDY1O1xcclxcbiRjb250ZW50LWJhY2tncm91bmQ6ICM4OGQ0YWI7XFxyXFxuJGJ1dHRvbjogI2U3MmUyZTtcXHJcXG4kYnV0dG9uLWFjdGl2ZTogI2ZmYmUwYjtcXHJcXG4kbWVudS1jb250YWluZXI6IHJnYigyMTAsIDIyNywgMTg4LCAwLjU2KTtcXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5oZWFkbGluZSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkRlbGljaW91cyBIYW5kcmF3blxcXCIsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuI2hlYWQge1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcbiNsb2dvIHtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb250ZW50LWJhY2tncm91bmQ7XFxyXFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXHJcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxufVxcclxcbi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgd2lkdGg6IDk1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGJ1dHRvbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b247XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgJGJ1dHRvbi1hY3RpdmU7XFxyXFxuICBjb2xvcjogJGJ1dHRvbi1hY3RpdmU7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICBoZWlnaHQ6IDU1cHg7XFxyXFxufVxcclxcblxcclxcbi5sZWFmIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQxIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgxMzdkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbGVhZi0xIHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MSAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICB0b3A6IC0zMHB4O1xcclxcbiAgbGVmdDogLTQwcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDIge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMjI0ZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xlYWYtMiB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQyIDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIHRvcDogLTMxcHg7XFxyXFxuICByaWdodDogLTM5cHg7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MyB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMzZkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbGVhZi0zIHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MyAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxuICBib3R0b206IC0yMnB4O1xcclxcbiAgbGVmdDogLTQ4cHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDQge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMzEyZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xlYWYtNCB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQ0IDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG4gIGJvdHRvbTogLTIycHg7XFxyXFxuICByaWdodDogLTQ2cHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGl6emEge1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtZW51LWNvbnRhaW5lcjtcXHJcXG59XFxyXFxuLm1lbnUtbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDEuOXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJvdGVzdCBSaW90XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLm1lbnUtdGV4dCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlByb3Rlc3QgUmlvdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcbi5tYXAge1xcclxcbiAgbWluLXdpZHRoOiAyNDBweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG59XFxyXFxuLmFib3V0LXBob3RvIHtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbn1cXHJcXG4ubnVtYmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uYWRkcmVzcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHRleHQtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGZsZXgtZ3JvdzogMTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNTBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuLmluZm8ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKlxyXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XHJcbiAgdmFyIGxpc3QgPSBbXTtcclxuXHJcbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XHJcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bNF0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfSkuam9pbihcIlwiKTtcclxuICB9O1xyXG5cclxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XHJcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XHJcbiAgICB9XHJcbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG4gICAgaWYgKGRlZHVwZSkge1xyXG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xyXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcclxuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xyXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtZWRpYSkge1xyXG4gICAgICAgIGlmICghaXRlbVsyXSkge1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHN1cHBvcnRzKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XHJcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gbGlzdDtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XHJcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xyXG4gIGlmICghY3NzTWFwcGluZykge1xyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XHJcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XHJcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcclxuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcclxuICB9XHJcbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xyXG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcclxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gIHZhciByZXN1bHQgPSAtMTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xyXG4gICAgICByZXN1bHQgPSBpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xyXG4gIHZhciBpZENvdW50TWFwID0ge307XHJcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XHJcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcclxuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XHJcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcclxuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xyXG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICB2YXIgb2JqID0ge1xyXG4gICAgICBjc3M6IGl0ZW1bMV0sXHJcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxyXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXHJcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxyXG4gICAgICBsYXllcjogaXRlbVs1XVxyXG4gICAgfTtcclxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XHJcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XHJcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XHJcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcclxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxyXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xyXG4gIH1cclxuICByZXR1cm4gaWRlbnRpZmllcnM7XHJcbn1cclxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcclxuICBhcGkudXBkYXRlKG9iaik7XHJcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xyXG4gICAgaWYgKG5ld09iaikge1xyXG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFwaS5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiB1cGRhdGVyO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcclxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcclxuICBsaXN0ID0gbGlzdCB8fCBbXTtcclxuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xyXG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcclxuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XHJcbiAgICB9XHJcbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcclxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcclxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xyXG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xyXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XHJcbiAgfTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBtZW1vID0ge307XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xyXG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XHJcblxyXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcclxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxyXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XHJcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcclxuICB9XHJcbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xyXG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcclxuICBpZiAoIXRhcmdldCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcclxuICB9XHJcbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcclxuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcclxuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcclxuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XHJcbiAgaWYgKG5vbmNlKSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xyXG4gIHZhciBjc3MgPSBcIlwiO1xyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xyXG4gIH1cclxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XHJcbiAgfVxyXG4gIGNzcyArPSBvYmouY3NzO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gRm9yIG9sZCBJRVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cclxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcclxuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcclxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxufVxyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcclxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xyXG4gIHJldHVybiB7XHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcclxuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xyXG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XHJcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XHJcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFwIGZyb20gXCIvc3JjL2Fzc2V0cy9nb29nbGUtcGhvdG8ucG5nXCI7XHJcbmltcG9ydCBob3VzZSBmcm9tIFwiL3NyYy9hc3NldHMvcGl6emEtc2hvcC5zdmdcIjtcclxuaW1wb3J0IG51bWJlciBmcm9tIFwiL3NyYy9hc3NldHMvY2FsbC5zdmdcIjtcclxuZnVuY3Rpb24gYWJvdXRQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgaW1nTWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbWdIb3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW1nTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBjb25zdCBwaXp6YUhvdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IGFkZHJlc3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgLy9jbGFzc2VzXHJcbiAgaW1nTWFwLmNsYXNzTmFtZSA9IFwibWFwXCI7XHJcbiAgaW1nSG91c2UuY2xhc3NMaXN0LmFkZChcImFib3V0LXBob3RvXCIsIFwiaG9tZVwiKTtcclxuICBpbWdOdW1iZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXBob3RvXCIsIFwicGhvbmVcIik7XHJcbiAgUGhvbmUuY2xhc3NOYW1lID0gXCJhYm91dC1oZWFkbGluZVwiO1xyXG4gIHBpenphSG91c2UuY2xhc3NOYW1lID0gXCJhYm91dC1oZWFkbGluZVwiO1xyXG4gIGFkZHJlc3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJhZGRyZXNzXCI7XHJcbiAgbnVtYmVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibnVtYmVyXCI7XHJcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXQtY29udGFpbmVyXCI7XHJcbiAgaW5mby5jbGFzc05hbWUgPSBcImluZm9cIjtcclxuXHJcbiAgLy9pbm5lciB0ZXh0XHJcbiAgcGl6emFIb3VzZS50ZXh0Q29udGVudCA9IFwiYWRkcmVzczogMTQzNSBCcm9hZHdheSwgTmV3IFlvcmssIE5ZIDEwMDE4LCBVc2FcIjtcclxuICBQaG9uZS50ZXh0Q29udGVudCA9IFwicGhvbmUtbnVtYmVyOiAxMjMtNDU2LTc4OVwiO1xyXG5cclxuICAvL3NyY1xyXG4gIGltZ01hcC5zcmMgPSBtYXA7XHJcbiAgaW1nSG91c2Uuc3JjID0gaG91c2U7XHJcbiAgaW1nTnVtYmVyLnNyYyA9IG51bWJlcjtcclxuICAvL2FwcGVuZGluZ1xyXG5cclxuICBudW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nTnVtYmVyKTtcclxuICBudW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoUGhvbmUpO1xyXG5cclxuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0hvdXNlKTtcclxuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphSG91c2UpO1xyXG5cclxuICBpbmZvLmFwcGVuZENoaWxkKG51bWJlckNvbnRhaW5lcik7XHJcbiAgaW5mby5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nTWFwKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhYm91dFBhZ2U7XHJcbiIsImltcG9ydCBwaXp6YUd1eSBmcm9tIFwiL3NyYy9hc3NldHMvcGl6emEtZ3V5LnN2Z1wiOyAvLyBBc3N1bWluZyBwaXp6YS1ndXkuc3ZnIGlzIGluIHRoZSBhc3NldHMgZm9sZGVyIGFuZCBwcm9jZXNzZWQgYnkgV2VicGFja1xyXG5cclxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRcIik7XHJcbiAgbG9nby5zcmMgPSBwaXp6YUd1eTtcclxuICBsb2dvLmlkID0gXCJsb2dvXCI7XHJcbiAgdGV4dC5jbGFzc05hbWUgPSBcInRleHRcIjtcclxuICB0ZXh0LnRleHRDb250ZW50ID1cclxuICAgIFwiRGlzY292ZXIgUHVyZVNsaWNlOiBXaGVyZSBnb3VybWV0IG1lZXRzIHdlbGxuZXNzLiBCaXRlIGludG8gb3VyIGRlbGljaW91c2x5IGhlYWx0aHkgcGl6emFzLCBtYWRlIHdpdGggb3JnYW5pYyBpbmdyZWRpZW50cyBhbmQgYSBwaW5jaCBvZiBqb3kuIFRhc3RlIHRoZSBkaWZmZXJlbmNlIGhlYWx0aCBtYWtlcy4gUHVyZVNsaWNlIC0gWW91ciBzbGljZSBvZiBoZWFsdGghXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgcGl6emExIGZyb20gXCIvc3JjL2Fzc2V0cy9yZWd1bGFyLXBpenphLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emEyIGZyb20gXCIvc3JjL2Fzc2V0cy9yZWQtc2F1Y2Uuc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTMgZnJvbSBcIi9zcmMvYXNzZXRzL3NwaWN5LXBpenphLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emE0IGZyb20gXCIvc3JjL2Fzc2V0cy9vdXItZmxhZ3NoaXAtcGl6emEuc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTUgZnJvbSBcIi9zcmMvYXNzZXRzL29saXZlcy10b21hdG8tb25pb24uc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTYgZnJvbSBcIi9zcmMvYXNzZXRzL211c2hyb29tcy1hbmQtdG9tYXRvZXMuc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTcgZnJvbSBcIi9zcmMvYXNzZXRzL21lYXQtYW5kLWNoZWVzZS5zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUobmFtZSwgaW1nLCBpbmdyZWRpZW50cykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW1nUGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dFwiKTtcclxuXHJcbiAgLy9jb250ZW50XHJcbiAgaW1nUGl6emEuc3JjID0gaW1nO1xyXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gaW5ncmVkaWVudHM7XHJcblxyXG4gIC8vY2xhc3NcclxuICBtZW51LmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcclxuICBpbWdQaXp6YS5jbGFzc05hbWUgPSBcInBpenphXCI7XHJcbiAgdGV4dC5jbGFzc05hbWUgPSBcIm1lbnUtdGV4dFwiO1xyXG4gIGhlYWRsaW5lLmNsYXNzTmFtZSA9IFwibWVudS1uYW1lIFwiO1xyXG5cclxuICAvL2FwcGVuZGluZ1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoaW1nUGl6emEpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xyXG4gIG1lbnUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcclxufVxyXG5mdW5jdGlvbiBtZW51UGFnZSgpIHtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJQZXBweVwiLFxyXG4gICAgcGl6emExLFxyXG4gICAgXCJwZXBwZXJvbmksIGdhcm5pc2ggb2YgYmFzaWwgbGVhdmVzLCB3aXRoIGEgdG9tYXRvIHNhdWNlIGNoZWVzZSBiYXNlLlwiXHJcbiAgKTtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJNYXJnaGVyXCIsXHJcbiAgICBwaXp6YTIsXHJcbiAgICBcImZyZXNoIHRvbWF0byBzbGljZXMsIGNodW5rcyBvZiBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGlzIGdhcm5pc2hlZCB3aXRoIGZyZXNoIGJhc2lsLlwiXHJcbiAgKTtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJTcGljeVwiLFxyXG4gICAgcGl6emEzLFxyXG4gICAgXCJwZXBwZXJvbmksIHJlZCBjaGlsaSBwZXBwZXJzIGFuZCBnYXJsaWMgY2xvdmVzICBhbG9uZyB3aXRoIGEgY2xhc3NpYyBjaGVlc2UgYW5kIHRvbWF0byBzYXVjZSBiYXNlLlwiXHJcbiAgKTtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJTdXByZW1lXCIsXHJcbiAgICBwaXp6YTQsXHJcbiAgICBcImJsYWNrIG9saXZlcywgcmVkIG9uaW9ucywgc2xpY2VzIG9mIGdhcmxpYyBjbG92ZXMsIGNodW5rcyBvZiBzYXVzYWdlLCBmcmVzaCBiYXNpbCBsZWF2ZXMsIGFuZCBhIHNjYXR0ZXJpbmcgb2YgdG9tYXRvIHNsaWNlcywgYWxsIG9uIGEgY2hlZXNlIGFuZCB0b21hdG8gc2F1Y2UgYmFzZS5cIlxyXG4gICk7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiRGVsaXRlXCIsXHJcbiAgICBwaXp6YTUsXHJcbiAgICBcImJsYWNrIG9saXZlcywgc2xpY2VkIHRvbWF0b2VzLCByZWQgb25pb24gcmluZ3Mgd2l0aCBjaGVlc2UgYmFzZSB3aXRoIHRvbWF0byBzYXVjZVwiXHJcbiAgKTtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJWZWdnaWVcIixcclxuICAgIHBpenphNixcclxuICAgIFwic2xpY2VkIG11c2hyb29tcywgYmxhY2sgb2xpdmVzLCB0b21hdG8gc2xpY2VzIG1venphcmVsbGEgd2l0aCBjaGVlc2Ugb24gYSB0b21hdG8gc2F1Y2UgYmFzZS5cIlxyXG4gICk7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiSGF3YWlpblwiLFxyXG4gICAgcGl6emE3LFxyXG4gICAgXCIgaGFtIGFuZCBwaW5lYXBwbGUgd2l0aCBjaGVlc2UgYW5kIGEgdG9tYXRvIHNhdWNlIGJhc2VcIlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsZWFmIGZyb20gXCIuL2Fzc2V0cy9sZWFmLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9tYWluLnNjc3NcIjtcclxuXHJcbi8vIEltcG9ydGluZyBwYWdlIEpTXHJcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSBcIi4vcGFnZUpzL2Fib3V0XCI7XHJcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9wYWdlSnMvbWVudS5qc1wiO1xyXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vcGFnZUpzL2hvbWUuanNcIjtcclxuXHJcbi8vIENvcnJlY3RseSBzZXQgdGhlIHNvdXJjZSBmb3IgbGVhZi0xIGFuZCBsb2dvIGltYWdlc1xyXG5jb25zdCBsZWFmSW1nMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZi0xXCIpO1xyXG5jb25zdCBsZWFmSW1nMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZi0yXCIpO1xyXG5jb25zdCBsZWFmSW1nMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZi0zXCIpO1xyXG5jb25zdCBsZWFmSW1nNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVhZi00XCIpO1xyXG5sZWFmSW1nMS5zcmMgPSBsZWFmO1xyXG5sZWFmSW1nMi5zcmMgPSBsZWFmO1xyXG5sZWFmSW1nMy5zcmMgPSBsZWFmO1xyXG5sZWFmSW1nNC5zcmMgPSBsZWFmO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZS1idXR0b25cIik7XHJcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpO1xyXG5jb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXQtYnV0dG9uXCIpO1xyXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkSG9tZSk7XHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRNZW51KTtcclxuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGxvYWRBYm91dCk7XHJcblxyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGlmIChob21lQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSZW1vdmUoY29udGVudCk7XHJcbiAgICB0b2dnZWxCdXR0b25zKGhvbWVCdXR0b24pO1xyXG4gICAgaG9tZVBhZ2UoKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBpZiAobWVudUJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgIHJldHVybjtcclxuICB9IGVsc2Uge1xyXG4gICAgUmVtb3ZlKGNvbnRlbnQpO1xyXG4gICAgdG9nZ2VsQnV0dG9ucyhtZW51QnV0dG9uKTtcclxuICAgIG1lbnVQYWdlKCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGlmIChhYm91dEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgIHJldHVybjtcclxuICB9IGVsc2Uge1xyXG4gICAgUmVtb3ZlKGNvbnRlbnQpO1xyXG4gICAgdG9nZ2VsQnV0dG9ucyhhYm91dEJ1dHRvbik7XHJcbiAgICBhYm91dFBhZ2UoKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gUmVtb3ZlKGRpdikge1xyXG4gIHdoaWxlIChkaXYuZmlyc3RDaGlsZCkge1xyXG4gICAgZGl2LnJlbW92ZUNoaWxkKGRpdi5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2VsQnV0dG9ucyhidXR0b24pIHtcclxuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn1cclxubG9hZEhvbWUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9