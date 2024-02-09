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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDhJQUE4SSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0NBQW9DLElBQUksSUFBSSxtQ0FBbUMsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSx3Q0FBd0M7QUFDclo7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLEtBQUssS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxRQUFRLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsc0JBQXNCLE1BQU0sV0FBVyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssc0JBQXNCLHFCQUFxQixNQUFN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YWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VKcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUpzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VKcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EZWxpY2lvdXMrSGFuZHJhd24mZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmZhbWlseT1QaXhlbGlmeStTYW5zOndnaHRANDAwOzUwMDs2MDA7NzAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZmYW1pbHk9UHJvdGVzdCtSaW90JmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhiNDY1O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkbGluZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRlbGljaW91cyBIYW5kcmF3blwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2hlYWQge1xuICB6LWluZGV4OiAxMDtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogNzAlO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OGQ0YWI7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiA5NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNzJlMmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzJlMmU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZiZTBiO1xuICBjb2xvcjogI2ZmYmUwYjtcbiAgd2lkdGg6IDExMHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsIGhlaWdodCAwLjNzIGVhc2UsIGJvcmRlciAwLjNzIGVhc2UsIGNvbG9yIDAuNXMgZWFzZTtcbiAgaGVpZ2h0OiA1NXB4O1xufVxuXG4ubGVhZiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDEge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDEzN2RlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xlYWYtMSB7XG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MSAxLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIHRvcDogLTMwcHg7XG4gIGxlZnQ6IC00MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDIyNGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuI2xlYWYtMiB7XG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDIgMS41cyBlYXNlLWluIGZvcndhcmRzO1xuICB0b3A6IC0zMXB4O1xuICByaWdodDogLTM5cHg7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVBbmRSb3RhdGVJbkZyb21MZWZ0MyB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSByb3RhdGUoMzZkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiNsZWFmLTMge1xuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDMgMS41cyBlYXNlLWluIGZvcndhcmRzO1xuICBib3R0b206IC0yMnB4O1xuICBsZWZ0OiAtNDhweDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0NCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgzMTJkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiNsZWFmLTQge1xuICBhbmltYXRpb246IHNsaWRlQW5kUm90YXRlSW5Gcm9tUmlnaHQ0IDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcbiAgYm90dG9tOiAtMjJweDtcbiAgcmlnaHQ6IC00NnB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5waXp6YSB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICB3aWR0aDogODAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMCwgMjI3LCAxODgsIDAuNTYpO1xufVxuXG4ubWVudS1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjlyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlByb3Rlc3QgUmlvdFwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWVudS10ZXh0IHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LWZhbWlseTogXCJQcm90ZXN0IFJpb3RcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXAge1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICB3aWR0aDogODAlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmFib3V0LXBob3RvIHtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uYWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtd3JhcDogd3JhcDtcbn1cblxuLmFib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uaW5mbyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xufVxuXG4uZmFkZS1pbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uaW5uZXItZmFkZS1pbiB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogaW5uZXJGYWRlSW5BbmltYXRpb24gMC41cyBlYXNlLWluIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7IC8qIERlbGF5IHRvIHdhaXQgZm9yIHRoZSBtYWluIGNvbnRlbnQgZmFkZS1pbiB0byBjb21wbGV0ZSAqL1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlLCBhbmQgRmlyZWZveCAqL1xuZWxlbWVudCB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG59XG5cbkBrZXlmcmFtZXMgaW5uZXJGYWRlSW5BbmltYXRpb24ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmxlYWYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFPQTtFQUNFLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLHlCQVpjO0VBYWQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJB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O0FBUUY7O0FBTEEsNkNBQUE7QUFDQTtFQUNFLHdCQUFBLEVBQUEsZ0JBQUE7RUFDQSxxQkFBQSxFQUFBLFlBQUE7QUFRRjs7QUFMQTtFQUNFO0lBQ0UsVUFBQTtFQVFGO0VBTkE7SUFDRSxVQUFBO0VBUUY7QUFDRjtBQU5BO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFlBQUE7RUFRRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURlbGljaW91cytIYW5kcmF3biZmYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZmFtaWx5PVBpeGVsaWZ5K1NhbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmZhbWlseT1Qcm90ZXN0K1Jpb3QmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuJHByaW1hcnktY29sb3I6ICMyOGI0NjU7XFxyXFxuJGNvbnRlbnQtYmFja2dyb3VuZDogIzg4ZDRhYjtcXHJcXG4kYnV0dG9uOiAjZTcyZTJlO1xcclxcbiRidXR0b24tYWN0aXZlOiAjZmZiZTBiO1xcclxcbiRtZW51LWNvbnRhaW5lcjogcmdiKDIxMCwgMjI3LCAxODgsIDAuNTYpO1xcclxcblxcclxcbmh0bWwge1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmhlYWRsaW5lIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRGVsaWNpb3VzIEhhbmRyYXduXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4jaGVhZCB7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuI2xvZ28ge1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbnRlbnQtYmFja2dyb3VuZDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xcclxcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWF4LXdpZHRoOiA2NTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5idXR0b24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgd2lkdGg6IDk1cHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxN3B4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgJGJ1dHRvbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b247XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgJGJ1dHRvbi1hY3RpdmU7XFxyXFxuICBjb2xvcjogJGJ1dHRvbi1hY3RpdmU7XFxyXFxuICB3aWR0aDogMTEwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UsIGhlaWdodCAwLjNzIGVhc2UsIGJvcmRlciAwLjNzIGVhc2UsXFxyXFxuICAgIGNvbG9yIDAuNXMgZWFzZTtcXHJcXG5cXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlYWYge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlQW5kUm90YXRlSW5Gcm9tTGVmdDEge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDBkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgcm90YXRlKDEzN2RlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsZWFmLTEge1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQxIDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG4gIHRvcDogLTMwcHg7XFxyXFxuICBsZWZ0OiAtNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0MiB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgyMjRkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbGVhZi0yIHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDIgMS41cyBlYXNlLWluIGZvcndhcmRzO1xcclxcbiAgdG9wOiAtMzFweDtcXHJcXG4gIHJpZ2h0OiAtMzlweDtcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQzIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgzNmRlZyk7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsZWFmLTMge1xcclxcbiAgYW5pbWF0aW9uOiBzbGlkZUFuZFJvdGF0ZUluRnJvbUxlZnQzIDEuNXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG4gIGJvdHRvbTogLTIycHg7XFxyXFxuICBsZWZ0OiAtNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUFuZFJvdGF0ZUluRnJvbVJpZ2h0NCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpIHJvdGF0ZSgwZGVnKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHJvdGF0ZSgzMTJkZWcpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbGVhZi00IHtcXHJcXG4gIGFuaW1hdGlvbjogc2xpZGVBbmRSb3RhdGVJbkZyb21SaWdodDQgMS41cyBlYXNlLWluIGZvcndhcmRzO1xcclxcbiAgYm90dG9tOiAtMjJweDtcXHJcXG4gIHJpZ2h0OiAtNDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5waXp6YSB7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lbnUtY29udGFpbmVyO1xcclxcbn1cXHJcXG4ubWVudS1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQcm90ZXN0IFJpb3RcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4ubWVudS10ZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUHJvdGVzdCBSaW90XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuLm1hcCB7XFxyXFxuICBtaW4td2lkdGg6IDI0MHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbn1cXHJcXG4uYWJvdXQtcGhvdG8ge1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxufVxcclxcbi5udW1iZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi5hZGRyZXNzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgdGV4dC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1MHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG4uaW5mbyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDcwcHg7XFxyXFxufVxcclxcbi5mYWRlLWluIHtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW5BbmltYXRpb24ge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbm5lci1mYWRlLWluIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IGlubmVyRmFkZUluQW5pbWF0aW9uIDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMC41czsgLyogRGVsYXkgdG8gd2FpdCBmb3IgdGhlIG1haW4gY29udGVudCBmYWRlLWluIHRvIGNvbXBsZXRlICovXFxyXFxufVxcclxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSwgYW5kIEZpcmVmb3ggKi9cXHJcXG5lbGVtZW50IHtcXHJcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cXHJcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGlubmVyRmFkZUluQW5pbWF0aW9uIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcXHJcXG4gIC5sZWFmIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qXHJcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcclxuICB2YXIgbGlzdCA9IFtdO1xyXG5cclxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcclxuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVsyXSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XHJcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbVs0XSkge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9KS5qb2luKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcclxuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcclxuICAgIH1cclxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcbiAgICBpZiAoZGVkdXBlKSB7XHJcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xyXG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XHJcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcclxuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xyXG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XHJcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1lZGlhKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGxpc3QucHVzaChpdGVtKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBsaXN0O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcclxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XHJcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XHJcbiAgICByZXR1cm4gY29udGVudDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcclxuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcclxuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xyXG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xyXG4gIH1cclxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XHJcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcbiAgY3NzICs9IG9iai5jc3M7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfVxyXG5cclxuICAvLyBGb3Igb2xkIElFXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxyXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XHJcbiAgICB9O1xyXG4gIH1cclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYXAgZnJvbSBcIi9zcmMvYXNzZXRzL2dvb2dsZS1waG90by5wbmdcIjtcclxuaW1wb3J0IGhvdXNlIGZyb20gXCIvc3JjL2Fzc2V0cy9waXp6YS1zaG9wLnN2Z1wiO1xyXG5pbXBvcnQgbnVtYmVyIGZyb20gXCIvc3JjL2Fzc2V0cy9jYWxsLnN2Z1wiO1xyXG5mdW5jdGlvbiBhYm91dFBhZ2UoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBjb25zdCBpbWdNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGltZ0hvdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbWdOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGNvbnN0IHBpenphSG91c2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgY29uc3QgYWRkcmVzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbnVtYmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAvL2NsYXNzZXNcclxuICBpbWdNYXAuY2xhc3NMaXN0LmFkZChcImlubmVyLWZhZGUtaW5cIiwgXCJtYXBcIik7XHJcbiAgaW1nSG91c2UuY2xhc3NMaXN0LmFkZChcImFib3V0LXBob3RvXCIsIFwiaG9tZVwiKTtcclxuICBpbWdOdW1iZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LXBob3RvXCIsIFwicGhvbmVcIik7XHJcbiAgUGhvbmUuY2xhc3NOYW1lID0gXCJhYm91dC1oZWFkbGluZVwiO1xyXG4gIHBpenphSG91c2UuY2xhc3NOYW1lID0gXCJhYm91dC1oZWFkbGluZVwiO1xyXG4gIGFkZHJlc3NDb250YWluZXIuY2xhc3NOYW1lID0gXCJhZGRyZXNzXCI7XHJcbiAgbnVtYmVyQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibnVtYmVyXCI7XHJcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWJvdXQtY29udGFpbmVyXCI7XHJcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5uZXItZmFkZS1pblwiLCBcImluZm9cIik7XHJcblxyXG4gIC8vaW5uZXIgdGV4dFxyXG4gIHBpenphSG91c2UudGV4dENvbnRlbnQgPSBcImFkZHJlc3M6IDE0MzUgQnJvYWR3YXksIE5ldyBZb3JrLCBOWSAxMDAxOCwgVXNhXCI7XHJcbiAgUGhvbmUudGV4dENvbnRlbnQgPSBcInBob25lLW51bWJlcjogMTIzLTQ1Ni03ODlcIjtcclxuXHJcbiAgLy9zcmNcclxuICBpbWdNYXAuc3JjID0gbWFwO1xyXG4gIGltZ0hvdXNlLnNyYyA9IGhvdXNlO1xyXG4gIGltZ051bWJlci5zcmMgPSBudW1iZXI7XHJcbiAgLy9hcHBlbmRpbmdcclxuXHJcbiAgbnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZ051bWJlcik7XHJcbiAgbnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKFBob25lKTtcclxuXHJcbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdIb3VzZSk7XHJcbiAgYWRkcmVzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaXp6YUhvdXNlKTtcclxuXHJcbiAgaW5mby5hcHBlbmRDaGlsZChudW1iZXJDb250YWluZXIpO1xyXG4gIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzc0NvbnRhaW5lcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChpbmZvKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGltZ01hcCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlO1xyXG4iLCJpbXBvcnQgcGl6emFHdXkgZnJvbSBcIi9zcmMvYXNzZXRzL3BpenphLWd1eS5zdmdcIjsgLy8gQXNzdW1pbmcgcGl6emEtZ3V5LnN2ZyBpcyBpbiB0aGUgYXNzZXRzIGZvbGRlciBhbmQgcHJvY2Vzc2VkIGJ5IFdlYnBhY2tcclxuXHJcbmZ1bmN0aW9uIGhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0XCIpO1xyXG4gIGxvZ28uc3JjID0gcGl6emFHdXk7XHJcbiAgbG9nby5pZCA9IFwibG9nb1wiO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcImlubmVyLWZhZGUtaW5cIik7XHJcbiAgdGV4dC5jbGFzc0xpc3QuYWRkKFwidGV4dFwiLCBcImlubmVyLWZhZGUtaW5cIik7XHJcbiAgdGV4dC50ZXh0Q29udGVudCA9XHJcbiAgICBcIkRpc2NvdmVyIFB1cmVTbGljZTogV2hlcmUgZ291cm1ldCBtZWV0cyB3ZWxsbmVzcy4gQml0ZSBpbnRvIG91ciBkZWxpY2lvdXNseSBoZWFsdGh5IHBpenphcywgbWFkZSB3aXRoIG9yZ2FuaWMgaW5ncmVkaWVudHMgYW5kIGEgcGluY2ggb2Ygam95LiBUYXN0ZSB0aGUgZGlmZmVyZW5jZSBoZWFsdGggbWFrZXMuIFB1cmVTbGljZSAtIFlvdXIgc2xpY2Ugb2YgaGVhbHRoIVwiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZTtcclxuIiwiaW1wb3J0IHBpenphMSBmcm9tIFwiL3NyYy9hc3NldHMvcmVndWxhci1waXp6YS5zdmdcIjtcclxuaW1wb3J0IHBpenphMiBmcm9tIFwiL3NyYy9hc3NldHMvcmVkLXNhdWNlLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emEzIGZyb20gXCIvc3JjL2Fzc2V0cy9zcGljeS1waXp6YS5zdmdcIjtcclxuaW1wb3J0IHBpenphNCBmcm9tIFwiL3NyYy9hc3NldHMvb3VyLWZsYWdzaGlwLXBpenphLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emE1IGZyb20gXCIvc3JjL2Fzc2V0cy9vbGl2ZXMtdG9tYXRvLW9uaW9uLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emE2IGZyb20gXCIvc3JjL2Fzc2V0cy9tdXNocm9vbXMtYW5kLXRvbWF0b2VzLnN2Z1wiO1xyXG5pbXBvcnQgcGl6emE3IGZyb20gXCIvc3JjL2Fzc2V0cy9tZWF0LWFuZC1jaGVlc2Uuc3ZnXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KG5hbWUsIGltZywgaW5ncmVkaWVudHMpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGltZ1BpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBoZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRcIik7XHJcblxyXG4gIC8vY29udGVudFxyXG4gIGltZ1BpenphLnNyYyA9IGltZztcclxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgdGV4dC50ZXh0Q29udGVudCA9IGluZ3JlZGllbnRzO1xyXG5cclxuICAvL2NsYXNzXHJcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwiaW5uZXItZmFkZS1pblwiLCBcIm1lbnUtY29udGFpbmVyXCIpO1xyXG4gIGltZ1BpenphLmNsYXNzTmFtZSA9IFwicGl6emFcIjtcclxuICB0ZXh0LmNsYXNzTmFtZSA9IFwibWVudS10ZXh0XCI7XHJcbiAgaGVhZGxpbmUuY2xhc3NOYW1lID0gXCJtZW51LW5hbWUgXCI7XHJcblxyXG4gIC8vYXBwZW5kaW5nXHJcbiAgbWVudS5hcHBlbmRDaGlsZChpbWdQaXp6YSk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZChoZWFkbGluZSk7XHJcbiAgbWVudS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xyXG59XHJcbmZ1bmN0aW9uIG1lbnVQYWdlKCkge1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIlBlcHB5XCIsXHJcbiAgICBwaXp6YTEsXHJcbiAgICBcInBlcHBlcm9uaSwgZ2FybmlzaCBvZiBiYXNpbCBsZWF2ZXMsIHdpdGggYSB0b21hdG8gc2F1Y2UgY2hlZXNlIGJhc2UuXCJcclxuICApO1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIk1hcmdoZXJcIixcclxuICAgIHBpenphMixcclxuICAgIFwiZnJlc2ggdG9tYXRvIHNsaWNlcywgY2h1bmtzIG9mIG1venphcmVsbGEgY2hlZXNlLCBhbmQgaXMgZ2FybmlzaGVkIHdpdGggZnJlc2ggYmFzaWwuXCJcclxuICApO1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIlNwaWN5XCIsXHJcbiAgICBwaXp6YTMsXHJcbiAgICBcInBlcHBlcm9uaSwgcmVkIGNoaWxpIHBlcHBlcnMgYW5kIGdhcmxpYyBjbG92ZXMgIGFsb25nIHdpdGggYSBjbGFzc2ljIGNoZWVzZSBhbmQgdG9tYXRvIHNhdWNlIGJhc2UuXCJcclxuICApO1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIlN1cHJlbWVcIixcclxuICAgIHBpenphNCxcclxuICAgIFwiYmxhY2sgb2xpdmVzLCByZWQgb25pb25zLCBzbGljZXMgb2YgZ2FybGljIGNsb3ZlcywgY2h1bmtzIG9mIHNhdXNhZ2UsIGZyZXNoIGJhc2lsIGxlYXZlcywgYW5kIGEgc2NhdHRlcmluZyBvZiB0b21hdG8gc2xpY2VzLCBhbGwgb24gYSBjaGVlc2UgYW5kIHRvbWF0byBzYXVjZSBiYXNlLlwiXHJcbiAgKTtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJEZWxpdGVcIixcclxuICAgIHBpenphNSxcclxuICAgIFwiYmxhY2sgb2xpdmVzLCBzbGljZWQgdG9tYXRvZXMsIHJlZCBvbmlvbiByaW5ncyB3aXRoIGNoZWVzZSBiYXNlIHdpdGggdG9tYXRvIHNhdWNlXCJcclxuICApO1xyXG4gIGNyZWF0ZU1lbnUoXHJcbiAgICBcIlZlZ2dpZVwiLFxyXG4gICAgcGl6emE2LFxyXG4gICAgXCJzbGljZWQgbXVzaHJvb21zLCBibGFjayBvbGl2ZXMsIHRvbWF0byBzbGljZXMgbW96emFyZWxsYSB3aXRoIGNoZWVzZSBvbiBhIHRvbWF0byBzYXVjZSBiYXNlLlwiXHJcbiAgKTtcclxuICBjcmVhdGVNZW51KFxyXG4gICAgXCJIYXdhaWluXCIsXHJcbiAgICBwaXp6YTcsXHJcbiAgICBcIiBoYW0gYW5kIHBpbmVhcHBsZSB3aXRoIGNoZWVzZSBhbmQgYSB0b21hdG8gc2F1Y2UgYmFzZVwiXHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbGVhZiBmcm9tIFwiLi9hc3NldHMvbGVhZi5zdmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZXMvbWFpbi5zY3NzXCI7XHJcblxyXG4vLyBJbXBvcnRpbmcgcGFnZSBKU1xyXG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3BhZ2VKcy9hYm91dFwiO1xyXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vcGFnZUpzL21lbnUuanNcIjtcclxuaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL3BhZ2VKcy9ob21lLmpzXCI7XHJcblxyXG4vLyBDb3JyZWN0bHkgc2V0IHRoZSBzb3VyY2UgZm9yIGxlYWYtMSBhbmQgbG9nbyBpbWFnZXNcclxuY29uc3QgbGVhZkltZzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtMVwiKTtcclxuY29uc3QgbGVhZkltZzIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtMlwiKTtcclxuY29uc3QgbGVhZkltZzMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtM1wiKTtcclxuY29uc3QgbGVhZkltZzQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlYWYtNFwiKTtcclxubGVhZkltZzEuc3JjID0gbGVhZjtcclxubGVhZkltZzIuc3JjID0gbGVhZjtcclxubGVhZkltZzMuc3JjID0gbGVhZjtcclxubGVhZkltZzQuc3JjID0gbGVhZjtcclxuXHJcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWUtYnV0dG9uXCIpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKTtcclxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0LWJ1dHRvblwiKTtcclxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZEhvbWUpO1xyXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkTWVudSk7XHJcbmFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkQWJvdXQpO1xyXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGlmIChob21lQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSZW1vdmUoY29udGVudCk7XHJcbiAgICB0b2dnZWxCdXR0b25zKGhvbWVCdXR0b24pO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcclxuICAgIGhvbWVQYWdlKCk7XHJcbiAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgIFwiYW5pbWF0aW9uZW5kXCIsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlLWluXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICB7IG9uY2U6IHRydWUgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgaWYgKG1lbnVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIFJlbW92ZShjb250ZW50KTtcclxuICAgIHRvZ2dlbEJ1dHRvbnMobWVudUJ1dHRvbik7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJmYWRlLWluXCIpO1xyXG4gICAgbWVudVBhZ2UoKTtcclxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgXCJhbmltYXRpb25lbmRcIixcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImZhZGUtaW5cIik7XHJcbiAgICAgIH0sXHJcbiAgICAgIHsgb25jZTogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuICBpZiAoYWJvdXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIHtcclxuICAgIFJlbW92ZShjb250ZW50KTtcclxuICAgIHRvZ2dlbEJ1dHRvbnMoYWJvdXRCdXR0b24pO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZmFkZS1pblwiKTtcclxuICAgIGFib3V0UGFnZSgpO1xyXG4gICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICBcImFuaW1hdGlvbmVuZFwiLFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZS1pblwiKTtcclxuICAgICAgfSxcclxuICAgICAgeyBvbmNlOiB0cnVlIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIFJlbW92ZShkaXYpIHtcclxuICB3aGlsZSAoZGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dlbEJ1dHRvbnMoYnV0dG9uKSB7XHJcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59XHJcbmxvYWRIb21lKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==