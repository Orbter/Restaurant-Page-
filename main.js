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
  max-width: 650px;
  margin-top: 40px;
  transition: opacity 0.3s ease-in-out;
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
  cursor: pointer;
}

.active {
  border: 2px solid #ffbe0b;
  color: #ffbe0b;
  width: 110px;
  transition: width 0.3s ease, height 0.3s ease, border 0.3s ease, color 0.5s ease;
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
}

.fade-in {
  animation: fadeInAnimation 0.5s ease-in forwards;
}

@keyframes fadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.inner-fade-in {
  opacity: 0;
  animation: innerFadeInAnimation 0.5s ease-in forwards;
  animation-delay: 0.5s; /* Delay to wait for the main content fade-in to complete */
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
element {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@keyframes innerFadeInAnimation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (min-width: 1440px) {
  .leaf {
    position: absolute;
    width: 300px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Pixelify+Sans:wght@400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Protest+Riot&display=swap\");\r\n* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n$primary-color: #28b465;\r\n$content-background: #88d4ab;\r\n$button: #e72e2e;\r\n$button-active: #ffbe0b;\r\n$menu-container: rgb(210, 227, 188, 0.56);\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  min-height: 100vh;\r\n  background-color: $primary-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n.headline {\r\n  font-family: \"Delicious Handrawn\", cursive;\r\n  font-size: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n#head {\r\n  z-index: 10;\r\n}\r\n#logo {\r\n  width: 70%;\r\n}\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: $content-background;\r\n  min-height: 500px;\r\n  height: fit-content;\r\n  border-radius: 15px;\r\n  width: 80%;\r\n  max-width: 650px;\r\n  margin-top: 40px;\r\n  transition: opacity 0.3s ease-in-out;\r\n}\r\n.button-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.button {\r\n  width: 95px;\r\n  height: 45px;\r\n  border-radius: 17px;\r\n  border: 1px solid $button;\r\n  background-color: $button;\r\n  font-family: \"Poppins\", sans-serif;\r\n  font-size: 1.1rem;\r\n  font-weight: 600;\r\n  box-sizing: content-box;\r\n  cursor: pointer;\r\n}\r\n.active {\r\n  border: 2px solid $button-active;\r\n  color: $button-active;\r\n  width: 110px;\r\n  transition: width 0.3s ease, height 0.3s ease, border 0.3s ease,\r\n    color 0.5s ease;\r\n\r\n  height: 55px;\r\n}\r\n\r\n.leaf {\r\n  position: absolute;\r\n  width: 200px;\r\n}\r\n\r\n@keyframes slideAndRotateInFromLeft1 {\r\n  from {\r\n    transform: translateX(-100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(137deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-1 {\r\n  animation: slideAndRotateInFromLeft1 1.5s ease-in forwards;\r\n  top: -30px;\r\n  left: -40px;\r\n}\r\n\r\n@keyframes slideAndRotateInFromRight2 {\r\n  from {\r\n    transform: translateX(100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(224deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-2 {\r\n  animation: slideAndRotateInFromRight2 1.5s ease-in forwards;\r\n  top: -31px;\r\n  right: -39px;\r\n}\r\n@keyframes slideAndRotateInFromLeft3 {\r\n  from {\r\n    transform: translateX(-100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(36deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-3 {\r\n  animation: slideAndRotateInFromLeft3 1.5s ease-in forwards;\r\n  bottom: -22px;\r\n  left: -48px;\r\n}\r\n\r\n@keyframes slideAndRotateInFromRight4 {\r\n  from {\r\n    transform: translateX(100%) rotate(0deg);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    transform: translateX(0) rotate(312deg);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n#leaf-4 {\r\n  animation: slideAndRotateInFromRight4 1.5s ease-in forwards;\r\n  bottom: -22px;\r\n  right: -46px;\r\n}\r\n\r\n.text {\r\n  font-size: 1.5rem;\r\n  font-family: \"Lato\", sans-serif;\r\n  font-weight: 600;\r\n  padding: 10px;\r\n}\r\n\r\n.pizza {\r\n  width: 80%;\r\n}\r\n.menu-container {\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 5px;\r\n  width: 80%;\r\n  border: 1px solid black;\r\n  border-radius: 5px;\r\n  background-color: $menu-container;\r\n}\r\n.menu-name {\r\n  font-size: 1.9rem;\r\n  font-family: \"Protest Riot\", sans-serif;\r\n}\r\n.menu-text {\r\n  padding: 5px;\r\n  font-family: \"Protest Riot\", sans-serif;\r\n  font-size: 1.1rem;\r\n  font-weight: 500;\r\n}\r\n.map {\r\n  min-width: 240px;\r\n  width: 80%;\r\n  padding-top: 50px;\r\n}\r\n.about-photo {\r\n  width: 25px;\r\n}\r\n.number {\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 1rem;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n.address {\r\n  display: flex;\r\n  gap: 10px;\r\n  font-size: 1rem;\r\n  font-family: \"Lato\", sans-serif;\r\n  text-wrap: wrap;\r\n}\r\n.about-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 50px;\r\n  padding: 5px;\r\n}\r\n.info {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 30px;\r\n  padding-top: 70px;\r\n}\r\n.fade-in {\r\n  animation: fadeInAnimation 0.5s ease-in forwards;\r\n}\r\n\r\n@keyframes fadeInAnimation {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n.inner-fade-in {\r\n  opacity: 0;\r\n  animation: innerFadeInAnimation 0.5s ease-in forwards;\r\n  animation-delay: 0.5s; /* Delay to wait for the main content fade-in to complete */\r\n}\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n/* Hide scrollbar for IE, Edge, and Firefox */\r\nelement {\r\n  -ms-overflow-style: none; /* IE and Edge */\r\n  scrollbar-width: none; /* Firefox */\r\n}\r\n\r\n@keyframes innerFadeInAnimation {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@media screen and (min-width: 1440px) {\r\n  .leaf {\r\n    position: absolute;\r\n    width: 300px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  imgMap.classList.add("inner-fade-in", "map");
  imgHouse.classList.add("about-photo", "home");
  imgNumber.classList.add("about-photo", "phone");
  Phone.className = "about-headline";
  pizzaHouse.className = "about-headline";
  addressContainer.className = "address";
  numberContainer.className = "number";
  container.className = "about-container";
  info.classList.add("inner-fade-in", "info");

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
  logo.classList.add("inner-fade-in");
  text.classList.add("text", "inner-fade-in");
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
  menu.classList.add("inner-fade-in", "menu-container");
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
    content.classList.add("fade-in");
    (0,_pageJs_home_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    content.addEventListener(
      "animationend",
      () => {
        content.classList.remove("fade-in");
      },
      { once: true }
    );
  }
}

function loadMenu() {
  const content = document.getElementById("content");
  if (menuButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(menuButton);
    content.classList.add("fade-in");
    (0,_pageJs_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    content.addEventListener(
      "animationend",
      () => {
        content.classList.remove("fade-in");
      },
      { once: true }
    );
  }
}
function loadAbout() {
  const content = document.getElementById("content");
  if (aboutButton.classList.contains("active")) {
    return;
  } else {
    Remove(content);
    toggelButtons(aboutButton);
    content.classList.add("fade-in");
    (0,_pageJs_about__WEBPACK_IMPORTED_MODULE_2__["default"])();
    content.addEventListener(
      "animationend",
      () => {
        content.classList.remove("fade-in");
      },
      { once: true }
    );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhJQUE4SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DLElBQUksSUFBSSxtQ0FBbUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSx3Q0FBd0M7QUFDclo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxRQUFRLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsc0JBQXNCLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssc0JBQXNCLHFCQUFxQixNQUFN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QTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDVDtBQUM1QjtBQUNBO0FBQ3VDO0FBQ0M7QUFDQTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJO0FBQ25CLGVBQWUsNkNBQUk7QUFDbkIsZUFBZSw2Q0FBSTtBQUNuQixlQUFlLDZDQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUpzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlSnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUpzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVBpeGVsaWZ5K1NhbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Qcm90ZXN0K1Jpb3QmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGI0NjU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlYWRsaW5lIHtcbiAgZm9udC1mYW1pbHk6IFwiRGVsaWNpb3VzIEhhbmRyYXduXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jaGVhZCB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jbG9nbyB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbiNjb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ZDRhYjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uYnV0dG9uIHtcbiAgd2lkdGg6IDk1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMTdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U3MmUyZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3MmUyZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmJlMGI7XG4gIGNvbG9yOiAjZmZiZTBiO1xuICB3aWR0aDogMTEwcHg7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgaGVpZ2h0IDAuM3MgZWFzZSwgYm9yZGVyIDAuM3MgZWFzZSwgY29sb3IgMC41cyBlYXNlO1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5sZWFmIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMTM3ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4jbGVhZi0xIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQxIDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgdG9wOiAtMzBweDtcbiAgbGVmdDogLTQwcHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMjI0ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4jbGVhZi0yIHtcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0MiAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIHRvcDogLTMxcHg7XG4gIHJpZ2h0OiAtMzlweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQzIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgzNmRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xlYWYtMyB7XG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MyAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIGJvdHRvbTogLTIycHg7XG4gIGxlZnQ6IC00OHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQ0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDMxMmRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xlYWYtNCB7XG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDQgMS41cyBlYXNlLWluIGZvcndhcmRzO1xuICBib3R0b206IC0yMnB4O1xuICByaWdodDogLTQ2cHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBpenphIHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLm1lbnUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEwLCAyMjcsIDE4OCwgMC41Nik7XG59XG5cbi5tZW51LW5hbWUge1xuICBmb250LXNpemU6IDEuOXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUHJvdGVzdCBSaW90XCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tZW51LXRleHQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlByb3Rlc3QgUmlvdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hcCB7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiA4MCU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG4uYWJvdXQtcGhvdG8ge1xuICB3aWR0aDogMjVweDtcbn1cblxuLm51bWJlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5hZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC13cmFwOiB3cmFwO1xufVxuXG4uYWJvdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG59XG5cbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gMC41cyBlYXNlLWluIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5pbm5lci1mYWRlLWluIHtcbiAgb3BhY2l0eTogMDtcbiAgYW5pbWF0aW9uOiBpbm5lckZhZGVJbkFuaW1hdGlvbiAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41czsgLyogRGVsYXkgdG8gd2FpdCBmb3IgdGhlIG1haW4gY29udGVudCBmYWRlLWluIHRvIGNvbXBsZXRlICovXG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UsIGFuZCBGaXJlZm94ICovXG5lbGVtZW50IHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbn1cblxuQGtleWZyYW1lcyBpbm5lckZhZGVJbkFuaW1hdGlvbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAubGVhZiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQU9BO0VBQ0UsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0EseUJBWmM7RUFhZCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBTUE7RUFDRSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUlBO0VBQ0UsVUFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7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cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGVsaWNpb3VzK0hhbmRyYXduJmZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZmYW1pbHk9UGl4ZWxpZnkrU2Fuczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZmFtaWx5PVByb3Rlc3QrUmlvdCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMHB4O1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG4kcHJpbWFyeS1jb2xvcjogIzI4YjQ2NTtcXHJcXG4kY29udGVudC1iYWNrZ3JvdW5kOiAjODhkNGFiO1xcclxcbiRidXR0b246ICNlNzJlMmU7XFxyXFxuJGJ1dHRvbi1hY3RpdmU6ICNmZmJlMGI7XFxyXFxuJG1lbnUtY29udGFpbmVyOiByZ2IoMjEwLCAyMjcsIDE4OCwgMC41Nik7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uaGVhZGxpbmUge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJEZWxpY2lvdXMgSGFuZHJhd25cXFwiLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNoZWFkIHtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG4jbG9nbyB7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29udGVudC1iYWNrZ3JvdW5kO1xcclxcbiAgbWluLWhlaWdodDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICB3aWR0aDogOTVweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkYnV0dG9uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbjtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAkYnV0dG9uLWFjdGl2ZTtcXHJcXG4gIGNvbG9yOiAkYnV0dG9uLWFjdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMTBweDtcXHJcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSwgaGVpZ2h0IDAuM3MgZWFzZSwgYm9yZGVyIDAuM3MgZWFzZSxcXHJcXG4gICAgY29sb3IgMC41cyBlYXNlO1xcclxcblxcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVhZiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MSB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMTM3ZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xlYWYtMSB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDEgMS41cyBlYXNlLWluIGZvcndhcmRzO1xcclxcbiAgdG9wOiAtMzBweDtcXHJcXG4gIGxlZnQ6IC00MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQyIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDIyNGRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsZWFmLTIge1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0MiAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxuICB0b3A6IC0zMXB4O1xcclxcbiAgcmlnaHQ6IC0zOXB4O1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDMge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDM2ZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2xlYWYtMyB7XFxyXFxuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDMgMS41cyBlYXNlLWluIGZvcndhcmRzO1xcclxcbiAgYm90dG9tOiAtMjJweDtcXHJcXG4gIGxlZnQ6IC00OHB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQ0IHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDMxMmRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsZWFmLTQge1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0NCAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XFxyXFxuICBib3R0b206IC0yMnB4O1xcclxcbiAgcmlnaHQ6IC00NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dCB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBpenphIHtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxufVxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVudS1jb250YWluZXI7XFxyXFxufVxcclxcbi5tZW51LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxLjlyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIlByb3Rlc3QgUmlvdFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5tZW51LXRleHQge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQcm90ZXN0IFJpb3RcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG4ubWFwIHtcXHJcXG4gIG1pbi13aWR0aDogMjQwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxufVxcclxcbi5hYm91dC1waG90byB7XFxyXFxuICB3aWR0aDogMjVweDtcXHJcXG59XFxyXFxuLm51bWJlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJMYXRvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLmFkZHJlc3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICB0ZXh0LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi5hYm91dC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcbi5pbmZvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNzBweDtcXHJcXG59XFxyXFxuLmZhZGUtaW4ge1xcclxcbiAgYW5pbWF0aW9uOiBmYWRlSW5BbmltYXRpb24gMC41cyBlYXNlLWluIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmlubmVyLWZhZGUtaW4ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbjogaW5uZXJGYWRlSW5BbmltYXRpb24gMC41cyBlYXNlLWluIGZvcndhcmRzO1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzOyAvKiBEZWxheSB0byB3YWl0IGZvciB0aGUgbWFpbiBjb250ZW50IGZhZGUtaW4gdG8gY29tcGxldGUgKi9cXHJcXG59XFxyXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlLCBhbmQgRmlyZWZveCAqL1xcclxcbmVsZW1lbnQge1xcclxcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xcclxcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgaW5uZXJGYWRlSW5BbmltYXRpb24ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xcclxcbiAgLmxlYWYge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIHN0eWxlc0luRE9NID0gW107XHJcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICB2YXIgcmVzdWx0ID0gLTE7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcclxuICAgICAgcmVzdWx0ID0gaTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcclxuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xyXG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xyXG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XHJcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xyXG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XHJcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcclxuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgdmFyIG9iaiA9IHtcclxuICAgICAgY3NzOiBpdGVtWzFdLFxyXG4gICAgICBtZWRpYTogaXRlbVsyXSxcclxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxyXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcclxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cclxuICAgIH07XHJcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XHJcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xyXG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xyXG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xyXG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXHJcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcclxuICAgICAgICByZWZlcmVuY2VzOiAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcclxuICB9XHJcbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcclxuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XHJcbiAgYXBpLnVwZGF0ZShvYmopO1xyXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcclxuICAgIGlmIChuZXdPYmopIHtcclxuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhcGkucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gdXBkYXRlcjtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcbiAgbGlzdCA9IGxpc3QgfHwgW107XHJcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcclxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcclxuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XHJcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xyXG4gICAgfVxyXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcclxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XHJcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XHJcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcclxuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcclxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xyXG4gIH07XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG52YXIgbWVtbyA9IHt9O1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcclxuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xyXG5cclxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXHJcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcclxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxyXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XHJcbiAgfVxyXG4gIHJldHVybiBtZW1vW3RhcmdldF07XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcclxuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XHJcbiAgaWYgKCF0YXJnZXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XHJcbiAgfVxyXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XHJcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XHJcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XHJcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xyXG4gIGlmIChub25jZSkge1xyXG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcclxuICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcclxuICB2YXIgY3NzID0gXCJcIjtcclxuICBpZiAob2JqLnN1cHBvcnRzKSB7XHJcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcclxuICB9XHJcbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xyXG4gIH1cclxuICBjc3MgKz0gb2JqLmNzcztcclxuICBpZiAobmVlZExheWVyKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmoubWVkaWEpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcclxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcclxuICB9XHJcblxyXG4gIC8vIEZvciBvbGQgSUVcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXHJcbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXHJcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XHJcbn1cclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXHJcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuICByZXR1cm4ge1xyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XHJcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcclxuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xyXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuICB9IGVsc2Uge1xyXG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IG1hcCBmcm9tIFwiL3NyYy9hc3NldHMvZ29vZ2xlLXBob3RvLnBuZ1wiO1xyXG5pbXBvcnQgaG91c2UgZnJvbSBcIi9zcmMvYXNzZXRzL3BpenphLXNob3Auc3ZnXCI7XHJcbmltcG9ydCBudW1iZXIgZnJvbSBcIi9zcmMvYXNzZXRzL2NhbGwuc3ZnXCI7XHJcbmZ1bmN0aW9uIGFib3V0UGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IGltZ01hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW1nSG91c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGltZ051bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgY29uc3QgcGl6emFIb3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBjb25zdCBhZGRyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBudW1iZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIC8vY2xhc3Nlc1xyXG4gIGltZ01hcC5jbGFzc0xpc3QuYWRkKFwiaW5uZXItZmFkZS1pblwiLCBcIm1hcFwiKTtcclxuICBpbWdIb3VzZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtcGhvdG9cIiwgXCJob21lXCIpO1xyXG4gIGltZ051bWJlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtcGhvdG9cIiwgXCJwaG9uZVwiKTtcclxuICBQaG9uZS5jbGFzc05hbWUgPSBcImFib3V0LWhlYWRsaW5lXCI7XHJcbiAgcGl6emFIb3VzZS5jbGFzc05hbWUgPSBcImFib3V0LWhlYWRsaW5lXCI7XHJcbiAgYWRkcmVzc0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImFkZHJlc3NcIjtcclxuICBudW1iZXJDb250YWluZXIuY2xhc3NOYW1lID0gXCJudW1iZXJcIjtcclxuICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJhYm91dC1jb250YWluZXJcIjtcclxuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbm5lci1mYWRlLWluXCIsIFwiaW5mb1wiKTtcclxuXHJcbiAgLy9pbm5lciB0ZXh0XHJcbiAgcGl6emFIb3VzZS50ZXh0Q29udGVudCA9IFwiYWRkcmVzczogMTQzNSBCcm9hZHdheSwgTmV3IFlvcmssIE5ZIDEwMDE4LCBVc2FcIjtcclxuICBQaG9uZS50ZXh0Q29udGVudCA9IFwicGhvbmUtbnVtYmVyOiAxMjMtNDU2LTc4OVwiO1xyXG5cclxuICAvL3NyY1xyXG4gIGltZ01hcC5zcmMgPSBtYXA7XHJcbiAgaW1nSG91c2Uuc3JjID0gaG91c2U7XHJcbiAgaW1nTnVtYmVyLnNyYyA9IG51bWJlcjtcclxuICAvL2FwcGVuZGluZ1xyXG5cclxuICBudW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nTnVtYmVyKTtcclxuICBudW1iZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoUGhvbmUpO1xyXG5cclxuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0hvdXNlKTtcclxuICBhZGRyZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBpenphSG91c2UpO1xyXG5cclxuICBpbmZvLmFwcGVuZENoaWxkKG51bWJlckNvbnRhaW5lcik7XHJcbiAgaW5mby5hcHBlbmRDaGlsZChhZGRyZXNzQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGluZm8pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nTWFwKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBhYm91dFBhZ2U7XHJcbiIsImltcG9ydCBwaXp6YUd1eSBmcm9tIFwiL3NyYy9hc3NldHMvcGl6emEtZ3V5LnN2Z1wiOyAvLyBBc3N1bWluZyBwaXp6YS1ndXkuc3ZnIGlzIGluIHRoZSBhc3NldHMgZm9sZGVyIGFuZCBwcm9jZXNzZWQgYnkgV2VicGFja1xyXG5cclxuZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRcIik7XHJcbiAgbG9nby5zcmMgPSBwaXp6YUd1eTtcclxuICBsb2dvLmlkID0gXCJsb2dvXCI7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwiaW5uZXItZmFkZS1pblwiKTtcclxuICB0ZXh0LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIsIFwiaW5uZXItZmFkZS1pblwiKTtcclxuICB0ZXh0LnRleHRDb250ZW50ID1cclxuICAgIFwiRGlzY292ZXIgUHVyZVNsaWNlOiBXaGVyZSBnb3VybWV0IG1lZXRzIHdlbGxuZXNzLiBCaXRlIGludG8gb3VyIGRlbGljaW91c2x5IGhlYWx0aHkgcGl6emFzLCBtYWRlIHdpdGggb3JnYW5pYyBpbmdyZWRpZW50cyBhbmQgYSBwaW5jaCBvZiBqb3kuIFRhc3RlIHRoZSBkaWZmZXJlbmNlIGhlYWx0aCBtYWtlcy4gUHVyZVNsaWNlIC0gWW91ciBzbGljZSBvZiBoZWFsdGghXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlO1xyXG4iLCJpbXBvcnQgcGl6emExIGZyb20gXCIvc3JjL2Fzc2V0cy9yZWd1bGFyLXBpenphLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emEyIGZyb20gXCIvc3JjL2Fzc2V0cy9yZWQtc2F1Y2Uuc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTMgZnJvbSBcIi9zcmMvYXNzZXRzL3NwaWN5LXBpenphLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emE0IGZyb20gXCIvc3JjL2Fzc2V0cy9vdXItZmxhZ3NoaXAtcGl6emEuc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTUgZnJvbSBcIi9zcmMvYXNzZXRzL29saXZlcy10b21hdG8tb25pb24uc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTYgZnJvbSBcIi9zcmMvYXNzZXRzL211c2hyb29tcy1hbmQtdG9tYXRvZXMuc3ZnXCI7XHJcbmltcG9ydCBwaXp6YTcgZnJvbSBcIi9zcmMvYXNzZXRzL21lYXQtYW5kLWNoZWVzZS5zdmdcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUobmFtZSwgaW1nLCBpbmdyZWRpZW50cykge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW1nUGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dFwiKTtcclxuXHJcbiAgLy9jb250ZW50XHJcbiAgaW1nUGl6emEuc3JjID0gaW1nO1xyXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gbmFtZTtcclxuICB0ZXh0LnRleHRDb250ZW50ID0gaW5ncmVkaWVudHM7XHJcblxyXG4gIC8vY2xhc3NcclxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJpbm5lci1mYWRlLWluXCIsIFwibWVudS1jb250YWluZXJcIik7XHJcbiAgaW1nUGl6emEuY2xhc3NOYW1lID0gXCJwaXp6YVwiO1xyXG4gIHRleHQuY2xhc3NOYW1lID0gXCJtZW51LXRleHRcIjtcclxuICBoZWFkbGluZS5jbGFzc05hbWUgPSBcIm1lbnUtbmFtZSBcIjtcclxuXHJcbiAgLy9hcHBlbmRpbmdcclxuICBtZW51LmFwcGVuZENoaWxkKGltZ1BpenphKTtcclxuICBtZW51LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcclxuICBtZW51LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcbn1cclxuZnVuY3Rpb24gbWVudVBhZ2UoKSB7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiUGVwcHlcIixcclxuICAgIHBpenphMSxcclxuICAgIFwicGVwcGVyb25pLCBnYXJuaXNoIG9mIGJhc2lsIGxlYXZlcywgd2l0aCBhIHRvbWF0byBzYXVjZSBjaGVlc2UgYmFzZS5cIlxyXG4gICk7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiTWFyZ2hlclwiLFxyXG4gICAgcGl6emEyLFxyXG4gICAgXCJmcmVzaCB0b21hdG8gc2xpY2VzLCBjaHVua3Mgb2YgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBpcyBnYXJuaXNoZWQgd2l0aCBmcmVzaCBiYXNpbC5cIlxyXG4gICk7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiU3BpY3lcIixcclxuICAgIHBpenphMyxcclxuICAgIFwicGVwcGVyb25pLCByZWQgY2hpbGkgcGVwcGVycyBhbmQgZ2FybGljIGNsb3ZlcyAgYWxvbmcgd2l0aCBhIGNsYXNzaWMgY2hlZXNlIGFuZCB0b21hdG8gc2F1Y2UgYmFzZS5cIlxyXG4gICk7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiU3VwcmVtZVwiLFxyXG4gICAgcGl6emE0LFxyXG4gICAgXCJibGFjayBvbGl2ZXMsIHJlZCBvbmlvbnMsIHNsaWNlcyBvZiBnYXJsaWMgY2xvdmVzLCBjaHVua3Mgb2Ygc2F1c2FnZSwgZnJlc2ggYmFzaWwgbGVhdmVzLCBhbmQgYSBzY2F0dGVyaW5nIG9mIHRvbWF0byBzbGljZXMsIGFsbCBvbiBhIGNoZWVzZSBhbmQgdG9tYXRvIHNhdWNlIGJhc2UuXCJcclxuICApO1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIkRlbGl0ZVwiLFxyXG4gICAgcGl6emE1LFxyXG4gICAgXCJibGFjayBvbGl2ZXMsIHNsaWNlZCB0b21hdG9lcywgcmVkIG9uaW9uIHJpbmdzIHdpdGggY2hlZXNlIGJhc2Ugd2l0aCB0b21hdG8gc2F1Y2VcIlxyXG4gICk7XHJcbiAgY3JlYXRlTWVudShcclxuICAgIFwiVmVnZ2llXCIsXHJcbiAgICBwaXp6YTYsXHJcbiAgICBcInNsaWNlZCBtdXNocm9vbXMsIGJsYWNrIG9saXZlcywgdG9tYXRvIHNsaWNlcyBtb3p6YXJlbGxhIHdpdGggY2hlZXNlIG9uIGEgdG9tYXRvIHNhdWNlIGJhc2UuXCJcclxuICApO1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIkhhd2FpaW5cIixcclxuICAgIHBpenphNyxcclxuICAgIFwiIGhhbSBhbmQgcGluZWFwcGxlIHdpdGggY2hlZXNlIGFuZCBhIHRvbWF0byBzYXVjZSBiYXNlXCJcclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbGVhZiBmcm9tIFwiLi9hc3NldHMvbGVhZi5zdmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XHJcblxyXG4vLyBJbXBvcnRpbmcgcGFnZSBKU1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3BhZ2VKcy9hYm91dFwiO1xyXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vcGFnZUpzL21lbnUuanNcIjtcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3BhZ2VKcy9ob21lLmpzXCI7XHJcblxyXG4vLyBDb3JyZWN0bHkgc2V0IHRoZSBzb3VyY2UgZm9yIGxlYWYtMSBhbmQgbG9nbyBpbWFnZXNcclxuY29uc3QgbGVhZkltZzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtMVwiKTtcclxuY29uc3QgbGVhZkltZzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtMlwiKTtcclxuY29uc3QgbGVhZkltZzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtM1wiKTtcclxuY29uc3QgbGVhZkltZzQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtNFwiKTtcclxubGVhZkltZzEuc3JjID0gbGVhZjtcclxubGVhZkltZzIuc3JjID0gbGVhZjtcclxubGVhZkltZzMuc3JjID0gbGVhZjtcclxubGVhZkltZzQuc3JjID0gbGVhZjtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnV0dG9uXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcclxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ1dHRvblwiKTtcclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWUpO1xyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XHJcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQWJvdXQpO1xyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGlmIChob21lQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSZW1vdmUoY29udGVudCk7XHJcbiAgICB0b2dnZWxCdXR0b25zKGhvbWVCdXR0b24pO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcclxuICAgIGhvbWVQYWdlKCk7XHJcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiYW5pbWF0aW9uZW5kXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlLWluXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIFJlbW92ZShjb250ZW50KTtcclxuICAgIHRvZ2dlbEJ1dHRvbnMobWVudUJ1dHRvbik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xyXG4gICAgbWVudVBhZ2UoKTtcclxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJhbmltYXRpb25lbmRcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImZhZGUtaW5cIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBpZiAoYWJvdXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIFJlbW92ZShjb250ZW50KTtcclxuICAgIHRvZ2dlbEJ1dHRvbnMoYWJvdXRCdXR0b24pO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcclxuICAgIGFib3V0UGFnZSgpO1xyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImFuaW1hdGlvbmVuZFwiLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1pblwiKTtcclxuICAgICAgfSxcclxuICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIFJlbW92ZShkaXYpIHtcclxuICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dlbEJ1dHRvbnMoYnV0dG9uKSB7XHJcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcbmxvYWRIb21lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==