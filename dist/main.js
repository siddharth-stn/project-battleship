/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0px;\\n  padding: 0px;\\n  box-sizing: border-box;\\n}\\nbody {\\n  background-color: white;\\n}\\n\\n#turnDispPara {\\n  display: block;\\n}\\n\\n.wrapperDiv {\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 50%;\\n  display: grid;\\n  grid-template-columns: repeat(10, 15px);\\n}\\n\\n.cellDiv {\\n  border-right: #66ccff solid 1px;\\n  border-bottom: #66ccff solid 1px;\\n  text-align: center;\\n}\\n\\n.cellDiv:nth-child(10n + 1) {\\n  border-left: #66ccff solid 1px;\\n}\\n.cellDiv:nth-child(-n + 10) {\\n  border-top: #66ccff solid 1px;\\n}\\n\\n.cellDiv:nth-child(n) {\\n  width: 15px;\\n  height: 15px;\\n}\\n\\n.CwrapperDiv {\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 77%;\\n  display: grid;\\n  grid-template-columns: repeat(10, 25px);\\n}\\n\\n.CcellDiv {\\n  border-right: red solid 1px;\\n  border-bottom: red solid 1px;\\n  text-align: center;\\n}\\n\\n.CcellDiv:nth-child(10n + 1) {\\n  border-left: red solid 1px;\\n}\\n.CcellDiv:nth-child(-n + 10) {\\n  border-top: red solid 1px;\\n}\\n\\n.CcellDiv:nth-child(n) {\\n  width: 25px;\\n  height: 25px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://project-battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/computerPlayer.js":
/*!*******************************!*\
  !*** ./src/computerPlayer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeBoard.js */ \"./src/makeBoard.js\");\n\n\nfunction aI_Player(name=\"JARVIS\") {\n  return {\n    name,\n    board: (0,_makeBoard_js__WEBPACK_IMPORTED_MODULE_0__.default)(),\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aI_Player);\n\n\n//# sourceURL=webpack://project-battleship/./src/computerPlayer.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _humanPlayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./humanPlayer.js */ \"./src/humanPlayer.js\");\n/* harmony import */ var _computerPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerPlayer */ \"./src/computerPlayer.js\");\n\n\n\n\n//const humanName = prompt(\"Please Enter Your Name\", \"Human\");\nconst body = document.getElementsByTagName(\"body\")[0];\nconst turnDisp = document.getElementById(\"turnDispPara\");\n\nlet boardWrapperDiv = document.createElement(\"div\");\nboardWrapperDiv.id = \"boardWrapperDiv\";\nboardWrapperDiv.className = \"wrapperDiv\";\nfor (let y = 0; y < 10; y++) {\n  for (let x = 0; x < 10; x++) {\n    let childDiv = document.createElement(\"div\");\n    childDiv.className = \"cellDiv\";\n    childDiv.id = `${x},${y}`;\n    boardWrapperDiv.appendChild(childDiv);\n  };\n};\nbody.appendChild(boardWrapperDiv);\n\nlet CboardWrapperDiv = document.createElement(\"div\");\nCboardWrapperDiv.id = \"CboardWrapperDiv\";\nCboardWrapperDiv.className = \"CwrapperDiv\";\nfor (let y = 0; y < 10; y++) {\n  for (let x = 0; x < 10; x++) {\n    let CchildDiv = document.createElement(\"div\");\n    CchildDiv.className = \"CcellDiv\";\n    CchildDiv.id = `C${x},${y}`;\n    CboardWrapperDiv.appendChild(CchildDiv);\n  };\n};\nbody.appendChild(CboardWrapperDiv);\n\nconst startBtn = document.getElementById(\"startBtn\");\n\n// startBtn.addEventListener(\"click\", (event) => {\n//   const playerOne = humanPlayer(humanName);\n//   const playerTwo_comp = aI_Player();\n//   let on = true;\n//   let turn = 1;\n//   while (on) {\n//     if (turn === 1) {\n//       turnDisp.innerText = `${playerOne.name}'s turn`;\n//     } else if (turn === 2) {\n//       turnDisp.innerText = `${playerTwo_comp.name}'s turn`;\n//     }\n\n//     turn = 2;\n//     on = false;\n//   }\n// });\n\n\n//# sourceURL=webpack://project-battleship/./src/game.js?");

/***/ }),

/***/ "./src/humanPlayer.js":
/*!****************************!*\
  !*** ./src/humanPlayer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _makeBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeBoard.js */ \"./src/makeBoard.js\");\n\n\nfunction humanPlayer(name) {\n  return {\n    name,\n    board: (0,_makeBoard_js__WEBPACK_IMPORTED_MODULE_0__.default)(),\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (humanPlayer);\n\n\n//# sourceURL=webpack://project-battleship/./src/humanPlayer.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* *\n * * Get direction randomly (lateral or vertical) for placement of the ship object.\n * * If function returns 1 then the direction is lateral, and\n * * if it returns 2 the direction is vertical.\n */\nfunction getDirection() {\n  return Math.floor(Math.random() * 2) + 1;\n}\n/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n/* *\n * * Make a function that returns an Array of starting co-ordinates\n * * where the ship object can be placed. This function will take\n * * ship object length, the boardArray and direction of plaement values\n * * as arguments to get the possible co-ordinates.\n */\nfunction possiblePlaceArr(length, boardArr, direction) {\n  let spaceArr = [];\n  while (spaceArr.length === 0) {\n    if (direction === 1 && length === 4) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (\n            x + 3 < 10 &&\n            boardArr[x][y] === \"emp\" &&\n            boardArr[x + 1][y] === \"emp\" &&\n            boardArr[x + 2][y] === \"emp\" &&\n            boardArr[x + 3][y] === \"emp\"\n          ) {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 1 && length === 3) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (\n            x + 2 < 10 &&\n            boardArr[x][y] === \"emp\" &&\n            boardArr[x + 1][y] === \"emp\" &&\n            boardArr[x + 2][y] === \"emp\"\n          ) {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 1 && length === 2) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (\n            x + 1 < 10 &&\n            boardArr[x][y] === \"emp\" &&\n            boardArr[x + 1][y] === \"emp\"\n          ) {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 1 && length === 1) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (boardArr[x][y] === \"emp\") {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 2 && length === 4) {\n      // now if the direction is vertical (direction === 2)...\n      // then the starting co-ordinates where the ship objects may be placed.\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (\n            y + 3 < 10 &&\n            boardArr[x][y] === \"emp\" &&\n            boardArr[x][y + 1] === \"emp\" &&\n            boardArr[x][y + 2] === \"emp\" &&\n            boardArr[x][y + 3] === \"emp\"\n          ) {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 2 && length === 3) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (\n            y + 2 < 10 &&\n            boardArr[x][y] === \"emp\" &&\n            boardArr[x][y + 1] === \"emp\" &&\n            boardArr[x][y + 2] === \"emp\"\n          ) {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 2 && length === 2) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (\n            y + 1 < 10 &&\n            boardArr[x][y] === \"emp\" &&\n            boardArr[x][y + 1] === \"emp\"\n          ) {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    } else if (direction === 2 && length === 1) {\n      for (let x = 0; x < 10; x++) {\n        for (let y = 0; y < 10; y++) {\n          if (boardArr[x][y] === \"emp\") {\n            spaceArr.push([x, y]);\n          }\n        }\n      }\n    }\n  }\n  return spaceArr; // this variable spaceArr will hold-\n  // the starting co-ordinates where the ship can be placed\n}\n/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n/* *\n * * Make a function to return random starting-\n * * coordinates from the spaceArr.\n * * This function will take in the spaceArr as an argument.\n */\nfunction getPlacementCoord(spaceArr) {\n  let randIndex = Math.floor(Math.random() * spaceArr.length);\n  return spaceArr[randIndex];\n}\n/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n/* *\n * * Placing the created ship objects in the boardArr\n * * Make a function that takes as an argument:-\n * * The boardArr (where the ship object is going to be placed)\n * * the ship object,\n * * the direction of placement (lateral or vertical), and,\n * * the starting co-ordinates where the ship objects will be placed.\n * * Placing the ship objects on the boardArr means\n * * to replace the value \"emp\" in that index with the ship object.\n */\nfunction placeShip(boardArr, ship, direction, startCoord) {\n  let length = ship.getLength();\n  let xStrCrd = Number(startCoord[0]);\n  let yStrCrd = Number(startCoord[1]);\n\n  if (direction === 1) {\n    for (let x = xStrCrd; x < length + xStrCrd; x++) {\n      boardArr[x][yStrCrd] = ship;\n    }\n  } else if (direction === 2) {\n    for (let y = yStrCrd; y < length + yStrCrd; y++) {\n      boardArr[xStrCrd][y] = ship;\n    }\n  }\n}\n\n/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n/* *\n * * Function to place all the ship types (ie carrier, batteship, submarine &\n * * patrol boat on the board randomly)\n */\nfunction placingAllShips(ship, boardArr) {\n  // * Get the direction of placement of ship randomly\n  const direction = getDirection();\n  // * Now get the possible starting coordinates(an Array) where the\n  // * ship can be placed on the boardArr.\n  const possibleCrdsArr = possiblePlaceArr(\n    ship.getLength(),\n    boardArr,\n    direction\n  );\n  // * Now choose the starting coordinates (randomly)\n  // * from the possibleCrdsArr where the ship (carrier) will be placed\n  // * startCrds is an array of starting co-ordinates (x and y)\n  const startCrds = getPlacementCoord(possibleCrdsArr);\n  // * Now, place the ship object (carrier) on the Board Arr\n  placeShip(boardArr, ship, direction, startCrds);\n}\n/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (placingAllShips);\n\n\n//# sourceURL=webpack://project-battleship/./src/logic.js?");

/***/ }),

/***/ "./src/makeBoard.js":
/*!**************************!*\
  !*** ./src/makeBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n\n\n\nfunction gameBoardFactory() {\n  /* *\n   * * Function to create an Array that serves as the board for the\n   * * placement/display of the ship objects\n   */\n  const boardArr = (function createBoard() {\n    let board = [];\n    for (let x = 0; x < 10; x++) {\n      let inBoard = [];\n      for (let y = 0; y < 10; y++) {\n        inBoard[y] = \"emp\";\n      }\n      board.push(inBoard);\n    }\n    return board;\n  })(); // Board for Player Created\n  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n  const missCordsArr = []; //records the coordinates ([x,y]) of missed hits\n  const sunkShipArr = []; // records the names (String) of the ship objects that have been sunk\n  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n  const carrier = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(4, \"carrier\"); // Carrier Ship Created here\n\n  const battleShipOne = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(3, \"battleShipOne\"); // Battle Ship One Created here\n  const battleShipTwo = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(3, \"battleShipTwo\"); // Battle Ship Two Created here\n\n  const submarineOne = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, \"submarineOne\"); // Submarine One Created here\n  const submarineTwo = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, \"submarineTwo\"); // Submarine Two Created here\n  const submarineThree = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, \"submarineThree\"); // Submarine Three Created here\n\n  const patrolBoatOne = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, \"patrolBoatOne\"); // Patrol Boat One Created here\n  const patrolBoatTwo = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, \"patrolBoatTwo\"); // Patrol Boat Two Created here\n  const patrolBoatThree = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, \"patrolBoatThree\"); // Patrol Boat Three Created here\n  const patrolBoatFour = (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, \"patrolBoatFour\"); // Patrol Boat Four Created here\n\n  // *** Called placingAllships function and,\n  // *** passed the ship objects with the,\n  // *** boardArr to place the ships on the board.\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(carrier, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(battleShipOne, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(battleShipTwo, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(submarineOne, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(submarineTwo, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(submarineThree, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(patrolBoatOne, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(patrolBoatTwo, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(patrolBoatThree, boardArr);\n  (0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.default)(patrolBoatFour, boardArr);\n  /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX * */\n\n  return {\n    getBoard() {\n      return boardArr;\n    },\n    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n    getMissCordsArr() {\n      return missCordsArr;\n    },\n    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n    getSunkShipsArr() {\n      return sunkShipArr;\n    },\n    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n    isAllShipSunk() {\n      if (sunkShipArr.length >= 10) {\n        return true;\n      } else return false;\n    },\n    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n    /* *\n     * * Make a function that takes in an array containing\n     * * the value of co-ordinates where the mouse pointer clicked, and,\n     * * check that the value in that cell in the boardArray is not\n     * * equal to \"emp\" (means empty). Then the object in that cell is\n     * * taken and hit function of that object is called to\n     * * reduce its length by one element, and, after that the value in the\n     * * cell to which the coordinates correspond to will be\n     * * replaced by the string \"hit\" to mark that cell.\n     * * If the clicked cell(coordinates) is an empty (\"emp\") then the value\n     * * is replaced by the string \"miss\" to mark that cell.\n     */\n    receiveAttack(clickCrd) {\n      //clickcrd is an array//\n      const [x, y] = clickCrd;\n      if (boardArr[x][y] != \"emp\") {\n        boardArr[x][y].hit();\n        if (boardArr[x][y].isSunk()) {\n          sunkShipArr.push(boardArr[x][y].getName());\n        }\n        boardArr[x][y] = \"hit\";\n      } else {\n        boardArr[x][y] = \"miss\";\n        missCordsArr.push([x, y]);\n      }\n    },\n    // /* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoardFactory);\n\n\n//# sourceURL=webpack://project-battleship/./src/makeBoard.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* *\n * * Make a function that:-\n * * that takes an argument (length) which is a number and returns\n * * a ship object having an array of the desired length of the ship\n * * This object/s will have two functions:-\n * * (1) isSunk() returns true when all the hit points have been hit.\n * * (2) hit() with change pop one item from the array in the object when it is hit/clicked.\n */\nfunction shipFactory(length, name) {\n  length = Number(length);\n  const hitArr = new Array(length);\n  hitArr.forEach((element) => {\n    element = \"NH\"; // NH means not hit\n  });\n  return {\n    getName() {\n      return name;\n    },\n    getLength() {\n      return length;\n    },\n    isSunk() {\n      if (hitArr.length === 0) {\n        return true;\n      } else return false;\n    },\n    hit() {\n      hitArr.pop();\n    },\n  };\n}\n/* * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);\n\n//# sourceURL=webpack://project-battleship/./src/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/game.js");
/******/ 	
/******/ })()
;