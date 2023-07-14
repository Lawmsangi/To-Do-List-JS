/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list_js"] = self["webpackChunkto_do_list_js"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  list-style: none;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 1.2rem;\r\n  padding: 10px;\r\n}\r\n\r\n.container {\r\n  width: 60%;\r\n  margin: 50px auto;\r\n  box-shadow: 0 0 15px #ebe8e8;\r\n}\r\n\r\n.to-do {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  border-bottom: 1px solid #ebe8e8;\r\n}\r\n\r\n.to-do h2 {\r\n  font-size: 1.5rem;\r\n  font-weight: 100;\r\n  margin: 0;\r\n  padding: 10px;\r\n}\r\n\r\nform input {\r\n  border: none;\r\n  font-size: 20px;\r\n  padding: 10px;\r\n}\r\n\r\nform > input::placeholder {\r\n  font-weight: 500;\r\n  color: #000;\r\n  opacity: 1;\r\n}\r\n\r\ninput:focus {\r\n  outline: none;\r\n  border: none;\r\n}\r\n\r\n.remove-btn {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 1rem;\r\n}\r\n\r\n.remove {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  background-color: #eee;\r\n}\r\n\r\n.remove button {\r\n  text-decoration: none;\r\n  color: #b4a8a8;\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n  border: none;\r\n}\r\n\r\n.remove button:hover {\r\n  color: #000;\r\n}\r\n\r\n.task {\r\n  padding: 10px;\r\n}\r\n\r\n.span {\r\n  text-decoration: none;\r\n  outline: none;\r\n}\r\n\r\n.line {\r\n  text-decoration: line-through;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-js/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-js/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/add.js */ \"./src/modules/add.js\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_add_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_checkTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/checkTask.js */ \"./src/modules/checkTask.js\");\n/* harmony import */ var _modules_checkTask_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_checkTask_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_checkUI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/checkUI.js */ \"./src/modules/checkUI.js\");\n/* harmony import */ var _modules_checkUI_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_checkUI_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/remove.js */ \"./src/modules/remove.js\");\n/* harmony import */ var _modules_remove_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_storage_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _modules_updateIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/updateIndex.js */ \"./src/modules/updateIndex.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst display = () => {\r\n  const list = document.getElementById('list-toDo');\r\n  list.innerHTML = '';\r\n  const tasks = (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_5__.getTask)();\r\n  tasks.forEach((task) => {\r\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToUI)(task.description);\r\n  });\r\n};\r\n\r\nconst editTasks = () => {\r\n  const editContents = document.querySelectorAll('.span');\r\n  editContents.forEach((item, index) => {\r\n    item.addEventListener('keypress', (e) => {\r\n      if (e.key === 'Enter') {\r\n        e.preventDefault();\r\n        (0,_modules_edit_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index, e.currentTarget.innerHTML);\r\n        item.blur();\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\nconst removeTasks = () => {\r\n  const removeButtons = document.querySelectorAll('.remove-btn');\r\n  removeButtons.forEach((button) => button.addEventListener('click', (e) => {\r\n    (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__.removeFromStorage)(e.currentTarget.parentElement.children[1].innerHTML);\r\n    (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__.removeFromUI)(e);\r\n    (0,_modules_updateIndex_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n  }));\r\n};\r\n\r\nconst checkTasks = () => {\r\n  const checkBox = document.querySelectorAll('.task');\r\n  checkBox.forEach((item, index) => {\r\n    _modules_checkUI_js__WEBPACK_IMPORTED_MODULE_2___default()(item, index, item.parentElement.children[1]);\r\n  });\r\n  checkBox.forEach((item, index) => {\r\n    item.addEventListener('change', (e) => {\r\n      e.preventDefault();\r\n      _modules_checkTask_js__WEBPACK_IMPORTED_MODULE_1___default()(index);\r\n      _modules_checkUI_js__WEBPACK_IMPORTED_MODULE_2___default()(item, index, item.parentElement.children[1]);\r\n    });\r\n  });\r\n};\r\n\r\nconst removeAll = document.getElementById('remove-all');\r\nremoveAll.addEventListener('click', () => {\r\n  (0,_modules_remove_js__WEBPACK_IMPORTED_MODULE_4__.removeCompletedTasks)();\r\n  display();\r\n  (0,_modules_updateIndex_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n});\r\n\r\nconst form = document.getElementById('form-list');\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  const addInput = document.getElementById('add-input');\r\n  const description = addInput.value;\r\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToUI)(description);\r\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToStorage)(description);\r\n  addInput.value = '';\r\n  window.location.reload();\r\n});\r\n\r\nconst tasks = (0,_modules_storage_js__WEBPACK_IMPORTED_MODULE_5__.getTask)();\r\ntasks.forEach((item) => {\r\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToUI)(item.description);\r\n});\r\nremoveTasks();\r\neditTasks();\r\ncheckTasks();\r\n\n\n//# sourceURL=webpack://to-do-list-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/add.js":
/*!****************************!*\
  !*** ./src/modules/add.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { savedTask, getTask } = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\r\n\r\nconst addTaskToUI = (description) => {\r\n  const tasks = document.getElementById('list-toDo');\r\n  const task = document.createElement('div');\r\n  task.className = 'to-do';\r\n  task.classList.add = 'completed';\r\n  task.innerHTML = `\r\n                        <input type=\"checkbox\" class= 'task' id=\"checkbox\"/>\r\n                        <span class=\"span\" spellcheck=\"false\" contenteditable=\"true\">${description}</span>\r\n                        <button class = 'remove-btn'><i class=\"fa-solid fa-trash\"></i></button>\r\n     `;\r\n  tasks.appendChild(task);\r\n};\r\n\r\nconst addTaskToStorage = (description) => {\r\n  const tasks = getTask();\r\n  const newTask = {\r\n    description,\r\n    completed: false,\r\n    index: tasks.length + 1,\r\n  };\r\n  tasks.push(newTask);\r\n  savedTask(tasks);\r\n};\r\n\r\nmodule.exports = { addTaskToStorage, addTaskToUI };\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/add.js?");

/***/ }),

/***/ "./src/modules/checkTask.js":
/*!**********************************!*\
  !*** ./src/modules/checkTask.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask, savedTask } = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\r\n\r\nconst checkTask = (index) => {\r\n  const tasks = getTask();\r\n\r\n  if (tasks[index].completed === false) {\r\n    tasks[index].completed = true;\r\n  } else {\r\n    tasks[index].completed = false;\r\n  }\r\n\r\n  savedTask(tasks);\r\n};\r\n\r\nmodule.exports = checkTask;\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/checkTask.js?");

/***/ }),

/***/ "./src/modules/checkUI.js":
/*!********************************!*\
  !*** ./src/modules/checkUI.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask } = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\r\n\r\nconst checkUI = (checkbox, index, span) => {\r\n  const tasks = getTask();\r\n  if (tasks[index].completed === true) {\r\n    checkbox.checked = true;\r\n    span.style.textDecoration = 'line-through';\r\n    checkbox.parentElement.classList.add = 'clear-all';\r\n  } else {\r\n    checkbox.checked = false;\r\n    span.style.textDecoration = 'none';\r\n  }\r\n};\r\n\r\nmodule.exports = checkUI;\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/checkUI.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storage_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst editTask = (index, edit) => {\r\n  const tasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getTask)();\r\n  tasks[index].description = edit;\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.savedTask)(tasks);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/remove.js":
/*!*******************************!*\
  !*** ./src/modules/remove.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getTask } = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\r\n\r\nconst removeFromUI = (e) => {\r\n  e.currentTarget.parentElement.remove();\r\n};\r\n\r\nconst removeFromStorage = (description) => {\r\n  const tasks = getTask();\r\n  const filteredTasks = tasks.filter((task) => task.description !== description);\r\n  localStorage.setItem('tasks', JSON.stringify(filteredTasks));\r\n};\r\n\r\nconst removeCompletedTasks = () => {\r\n  const tasks = getTask();\r\n  const filteredTasks = tasks.filter((task) => task.completed === false);\r\n  localStorage.setItem('tasks', JSON.stringify(filteredTasks));\r\n};\r\n\r\nmodule.exports = { removeFromUI, removeFromStorage, removeCompletedTasks };\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/remove.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((module) => {

eval("const getTask = () => JSON.parse(localStorage.getItem('tasks')) || [];\n\nconst savedTask = (tasks) => {\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n};\n\nmodule.exports = { getTask, savedTask };\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/updateIndex.js":
/*!************************************!*\
  !*** ./src/modules/updateIndex.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { getTask, savedTask } = __webpack_require__(/*! ./storage.js */ \"./src/modules/storage.js\");\n\nconst updateIndex = () => {\n  const tasks = getTask();\n  tasks.forEach((task, index) => {\n    task.index = index + 1;\n  });\n  savedTask(tasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateIndex);\n\n//# sourceURL=webpack://to-do-list-js/./src/modules/updateIndex.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);