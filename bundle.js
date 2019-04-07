/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @siddharthbosecodeware/hydrogen */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/Hydrogen.js\");\n\n\nconst router = new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Router();\n\nclass AppComponent extends _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component {\n\n  render() {\n\n    return [\n      new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n        type: \"header\",\n        props: {\n          \"class\": \"header\"\n        },\n        children: [\n          new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n            type: \"h1\",\n            props: {\n              \"class\": \"logo\"\n            },\n            textNodes: [\n              \"HydrogenJS\"\n            ]\n          }),\n          new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n            type: \"div\",\n            props: {\n              \"class\": \"others\"\n            },\n            children: [\n              new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n                type: \"a\",\n                props: {\n                  \"class\": \"view-on-github-button\",\n                  \"href\": \"https://github.com/SiddharthBose-Codeware/hydrogen\"\n                },\n                textNodes: [\n                  \"View on GitHub\"\n                ]\n              })\n            ]\n          })\n        ]\n      }),\n      new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n        type: \"div\",\n        props: {\n          \"class\": \"content\"\n        },\n        children: [\n          new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n            type: \"div\",\n            props: {\n              \"class\": \"description-box\"\n            },\n            children: [\n              new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n                type: \"h1\",\n                textNodes: [\n                  \"The UI rendering library\"\n                ]\n              }),\n              new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n                type: \"p\",\n                textNodes: [\n                  \"HydrogenJS is a library which renders content dynamically directly to the DOM without using any Virtual DOMs. HydrogenJS combines power of components based development with the native usage of JS APIs. By the way, this webpage is made using HydrogenJS!\"\n                ]\n              })\n            ]\n          })\n        ]\n      }),\n      new _siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Element({\n        type: \"footer\",\n        props: {\n          \"class\": \"footer\"\n        },\n        textNodes: [\n          \"© Siddharth Bose 2019\"\n        ]\n      })\n    ];\n\n  }\n\n}\n\n_siddharthbosecodeware_hydrogen__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Model.render(new AppComponent(), document.body);\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/Hydrogen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/Hydrogen.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar HydrogenElement = __webpack_require__(/*! ./HydrogenElement.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenElement.js\");\nvar HydrogenComponent = __webpack_require__(/*! ./HydrogenComponent.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenComponent.js\");\nvar HydrogenModel = __webpack_require__(/*! ./HydrogenModel.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js\");\nvar HydrogenRouter = __webpack_require__(/*! ./HydrogenRouter.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenRouter.js\");\nvar LazyLoader = __webpack_require__(/*! ./LazyLoader.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/LazyLoader.js\");\n\nvar Hydrogen = {\n\n  Element: HydrogenElement,\n  Component: HydrogenComponent,\n  Model: HydrogenModel,\n  Router: HydrogenRouter,\n  lazyLoader: new LazyLoader()\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hydrogen);\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/Hydrogen.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenComponent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenComponent.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var HydrogenModel = __webpack_require__(/*! ./HydrogenModel.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js\");\n\nfunction HydrogenComponent() {\n\n  this.ref = null;\n\n  this.isComponent = true;\n\n  this.isMounted = false;\n\n  this.isLazyComponent = false;\n\n  this.fragment = null; // To be rendered\n\n  this.refs = {};\n\n  this.rootDOMElement = null; // To be rendered\n\n  this.rootElement = null; // To be rendered\n\n  this.lastElement = null; // To be rendered\n\n}\n\nHydrogenComponent.prototype.remove = function(start, end) {\n\n  var head = start || this.rootElement;\n\n  var back = end || this.lastElement;\n\n  while (true) {\n\n    var next = head.nextElementSibling;\n\n    head.remove();\n\n    if (head === back) {\n\n      break;\n\n    }\n\n    head = next;\n\n  }\n\n}\n\nHydrogenComponent.prototype.refresh = function() {\n\n  var rootElement = this.rootElement;\n\n  var lastElement = this.lastElement;\n\n  HydrogenModel.render(this, this.rootElement, false, true);\n\n  this.remove(rootElement, lastElement);\n\n}\n\nmodule.exports = HydrogenComponent;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenComponent.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenElement.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenElement.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var HydrogenModel = __webpack_require__(/*! ./HydrogenModel.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js\");\nvar HydrogenToDOMConverter = __webpack_require__(/*! ./HydrogenToDOMConverter.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenToDOMConverter.js\");\n\nfunction HydrogenElement(config) {\n\n  this.config = config;\n\n  this.domElement = null; // To be rendered\n\n  this.isComponent = false;\n\n  this.parent = null; // To be rendered\n\n  this.dynamicTextNodes = null; // To be rendered\n\n  this.init(config);\n\n}\n\nHydrogenElement.prototype.init = function(config) {\n\n  this.domElement = HydrogenToDOMConverter.convert(this);\n\n}\n\nHydrogenElement.prototype.appendChild = function(hydrogenElement) {\n\n  this.config.children.push(hydrogenElement);\n\n  hydrogenElement.parent = this;\n\n  HydrogenModel.render(hydrogenElement, this.domElement, false, false);\n\n}\n\nHydrogenElement.prototype.remove = function() {\n\n  if (!this.parent.isComponent) {\n\n    this.parent.config.children.splice(this.parent.config.children.indexOf(this), 1);\n\n  }\n\n  this.domElement.remove();\n\n}\n\nHydrogenElement.prototype.getFirstChild = function() {\n\n  return this.config.children[0];\n\n}\n\nHydrogenElement.prototype.getLastChild = function() {\n\n  return this.config.children[this.children.length - 1];\n\n}\n\nHydrogenElement.prototype.getNextSibling = function() {\n\n  return this.parent.config.children[this.parent.config.children.indexOf(this) + 1];\n\n}\n\nHydrogenElement.prototype.getPreviousSibling = function() {\n\n  return this.parent.config.children[this.parent.config.children.indexOf(this) - 1];\n\n}\n\nHydrogenElement.prototype.getNodeType = function() {\n\n  return this.domElement.nodeType;\n\n}\n\nHydrogenElement.prototype.getNodeValue = function() {\n\n  return this.domElement.nodeValue;\n\n}\n\nHydrogenElement.prototype.getOwnerDocument = function() {\n\n  return this.domElement.ownerDocument;\n\n}\n\nHydrogenElement.prototype.setDynamicTextNode = function(textNodeName, value) {\n\n  this.dynamicTextNodes[textNodeName].textContent = value;\n\n}\n\nmodule.exports = HydrogenElement;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenElement.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Renderer = __webpack_require__(/*! ./Renderer.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/Renderer.js\");\n\nvar renderer = new Renderer();\n\nvar HydrogenModel = {\n\n  render: function(rootElement, domRootNode, isParentToBeCleared, insertAfter) {\n\n    renderer.render(rootElement, domRootNode, !!isParentToBeCleared, !!insertAfter);\n\n  }\n\n};\n\nmodule.exports = HydrogenModel;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenRouter.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenRouter.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var HydrogenElement = __webpack_require__(/*! ./HydrogenElement.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenElement.js\");\nvar HydrogenModel = __webpack_require__(/*! ./HydrogenModel.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenModel.js\");\nvar pathToRegexp = __webpack_require__(/*! path-to-regexp */ \"./node_modules/path-to-regexp/index.js\");\n\nfunction makeMatchingRouteWithParams(route, keys, regexTestResult) {\n\n  var paramsValue = regexTestResult;\n\n  var params = {};\n\n  for (var i = 0; i < paramsValue.length; i++) {\n\n    params[keys[i]] = paramsValue[i];\n\n  }\n\n  return {\n\n    route: route,\n    params: params\n\n  };\n\n}\n\nfunction HydrogenRouter() {\n\n  // this.states = [];\n\n  this.isPopStateSet = false;\n\n}\n\nHydrogenRouter.prototype.setRoutes = function(routes, root) {\n\n  this.routes = routes;\n\n  this.root = root;\n\n}\n\nHydrogenRouter.prototype.addPopStateListener = function(path) {\n\n  let currentRouter = this;\n\n  window.addEventListener(\"popstate\", function (event) {\n\n    // currentRouter.states.pop();\n\n    // if (currentRouter.states.length !== 0) {\n\n      // currentRouter.mount(currentRouter.states[currentRouter.states - 1]);\n\n      currentRouter.mount(path);\n\n    // }\n\n  });\n\n  this.isPopStateSet = true;\n\n}\n\nHydrogenRouter.prototype.getMatchingRouteWithParams = function(currentLocation) {\n\n  for (var route of this.routes) {\n\n    var keys = [];\n\n    var routePathRegex = pathToRegexp(route.path, keys);\n\n    var regexTestResult = routePathRegex.exec(currentLocation);\n\n    if (regexTestResult !== null) {\n\n      return makeMatchingRouteWithParams(route, keys, regexTestResult);\n\n    }\n\n  }\n\n  return null;\n\n}\n\nHydrogenRouter.prototype.mount = function(path) {\n\n  if (!this.isPopStateSet) {\n\n    this.addPopStateListener();\n\n  }\n\n  var currentLocation = path || location.pathname;\n\n  var matchingRouteWithParams = this.getMatchingRouteWithParams(currentLocation);\n\n  if (matchingRouteWithParams !== null) {\n\n    var route = matchingRouteWithParams.route;\n\n    var params = matchingRouteWithParams.params;\n\n    // this.states.push(componentHydrogenElement);\n\n    if (path) {\n\n      history.pushState({}, null, path);\n\n    }\n\n    document.title = route.title;\n\n    HydrogenModel.render(\n\n      route.viewComponent,\n\n      this.root || document.body,\n\n      true,\n\n      false\n\n    );\n\n  } else {\n\n    // TODO: Not found (404)\n\n  }\n\n}\n\nmodule.exports = HydrogenRouter;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenRouter.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenToDOMConverter.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenToDOMConverter.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("HydrogenToDOMConverter = {\n\n  addEventListenersToDOMElement: function(domElement, hydrogenElement) {\n\n    if (hydrogenElement.config.eventListeners) {\n\n      var eventListeners = hydrogenElement.config.eventListeners;\n\n      for (var i = 0; i < eventListeners.length; i++) {\n\n        var eventListener = eventListeners[i];\n\n        domElement.addEventListener(eventListener.event, function(event) {\n\n          eventListener.listener(event, hydrogenElement);\n\n        }, eventListener.useCapture || false);\n\n      }\n\n    }\n\n    if (!hydrogenElement.config.children) {\n\n      hydrogenElement.config.children = [];\n\n    }\n\n  },\n\n  addPropsToDOMElement: function(domElement, hydrogenElement) {\n\n    if (hydrogenElement.config.props) {\n\n      var props = hydrogenElement.config.props;\n\n      var entries = Object.entries(props);\n\n      for (var i = 0; i < entries.length; i++) {\n\n        var key = entries[i][0];\n\n        var value = entries[i][1];\n\n        domElement.setAttribute(key, value);\n\n      }\n\n    }\n\n  },\n\n  addTextNodesToDOMElement: function(domElement, hydrogenElement) {\n\n    if (hydrogenElement.config.textNodes) {\n\n     hydrogenElement.dynamicTextNodes = {};\n\n      var textNodes = hydrogenElement.config.textNodes;\n\n      var textNode = null;\n\n      for (var i = 0; i < textNodes.length; i++) {\n\n        if (typeof textNodes[i] !== \"object\") {\n\n          textNode = document.createTextNode(textNodes[i]);\n\n        } else {\n\n          var textNodeEntry = Object.entries(textNodes[i])[0];\n\n          textNode = document.createTextNode(textNodeEntry[1]);\n\n          hydrogenElement.dynamicTextNodes[textNodeEntry[0]] = textNode;\n\n        }\n\n        domElement.appendChild(textNode);\n\n      }\n\n    }\n\n  },\n\n  addRouteLocation: function(domElement, hydrogenElement) {\n\n    if (hydrogenElement.config.routeTo) {\n\n      domElement.addEventListener(\"click\", function() {\n\n        hydrogenElement.config.router.mount(hydrogenElement.config.routeTo);\n\n        event.stopPropagation();\n\n      });\n\n    }\n\n  },\n\n  convert: function(hydrogenElement) {\n\n    var domElement = document.createElement(hydrogenElement.config.type);\n\n    this.addEventListenersToDOMElement(domElement, hydrogenElement);\n\n    this.addPropsToDOMElement(domElement, hydrogenElement);\n\n    this.addTextNodesToDOMElement(domElement, hydrogenElement);\n\n    this.addRouteLocation(domElement, hydrogenElement);\n\n    hydrogenElement.domElement = domElement;\n\n    return domElement;\n\n  }\n\n}\n\nmodule.exports = HydrogenToDOMConverter;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenToDOMConverter.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/LazyLoader.js":
/*!************************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/LazyLoader.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var HydrogenComponent = __webpack_require__(/*! ./HydrogenComponent */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenComponent.js\");\n\nclass LazyComponentWrapperComponent extends HydrogenComponent {\n\n  constructor(loadingComponent, componentImport, shouldLoad, componentArguments) {\n\n    super();\n\n    this.currentComponent = loadingComponent;\n\n    this.componentImport = componentImport;\n\n    this.componentArguments = componentArguments;\n\n    this.isLazyComponent = true;\n\n    this.shouldLoad = shouldLoad;\n\n  }\n\n  render() {\n\n    return this.currentComponent;\n\n  }\n\n  lazyLoad() {\n\n    if (!this.shouldLoad) return;\n\n    var current = this;\n\n    this.componentImport.then(function(componentModule) {\n\n      var component = new (componentModule.default)(...current.componentArguments);\n\n      current.loadComponent(component);\n\n    });\n\n  }\n\n  loadComponent(component) {\n\n    this.currentComponent = component;\n\n    this.refresh();\n\n  }\n\n}\n\nfunction LazyLoader() {\n\n  this.lazyComponentsList = {};\n\n  this.lazyComponentWrapperComponent = LazyComponentWrapperComponent;\n\n}\n\nLazyLoader.prototype.load = function(componentImport, loadingComponent, ...arguments) {\n\n  var lazyComponentWrapperComponent = new (this.lazyComponentWrapperComponent)(loadingComponent, componentImport, !!componentImport, arguments);\n\n  return lazyComponentWrapperComponent;\n\n}\n\nmodule.exports = LazyLoader;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/LazyLoader.js?");

/***/ }),

/***/ "./node_modules/@siddharthbosecodeware/hydrogen/src/Renderer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@siddharthbosecodeware/hydrogen/src/Renderer.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var HydrogenToDOMConverter = __webpack_require__(/*! ./HydrogenToDOMConverter.js */ \"./node_modules/@siddharthbosecodeware/hydrogen/src/HydrogenToDOMConverter.js\");\n\nfunction Renderer() {\n\n  this.queue = [];\n\n  this.appendPendingStack = [];\n\n  this.lazyComponentsList = [];\n\n  // this.hydrogenToDOMConverter = new HydrogenToDOMConverter();\n\n}\n\nRenderer.prototype.renderComponentOrElement = function(root) {\n\n  this.queue = [{\n\n    element: root,\n    parent: null\n\n  }];\n\n  while (this.queue.length != 0) {\n\n    let front = this.queue.shift();\n\n    if (front.element.isComponent) {\n\n      if (front.element.isLazyComponent && front.element != root) {\n\n        this.lazyComponentsList.push(front.element);\n\n      }\n\n      this.renderComponent(front);\n\n      let innerComponents = front.element.render();\n\n      if (!Array.isArray(innerComponents)) {\n\n        innerComponents = [innerComponents];\n\n      }\n\n      for (let i = 0; i < innerComponents.length; i++) {\n\n        this.queue.push({\n\n          element: innerComponents[i],\n          parent: front.element\n\n        });\n\n      }\n\n    } else {\n\n      this.renderElement(front);\n\n      if (front.element.config.children) {\n\n        for (let i = 0; i < front.element.config.children.length; i++) {\n\n          this.queue.push({\n\n            element: front.element.config.children[i],\n            parent: front.element\n\n          });\n\n        }\n\n      }\n\n    }\n\n  }\n\n  while (this.appendPendingStack.length != 0) {\n\n    var front = this.appendPendingStack.pop();\n\n    if (front.element.isComponent) {\n\n      front.element.rootElement = front.element.fragment.firstElementChild;\n\n      front.element.lastElement = front.element.fragment.lastElementChild;\n\n    }\n\n    if (front.parent.isComponent) {\n\n      if (front.element.isComponent) {\n\n        if (front.parent.fragment.firstChild) {\n\n          front.parent.fragment.insertBefore(front.element.fragment, front.parent.fragment.firstChild);\n\n        } else {\n\n          front.parent.fragment.appendChild(front.element.fragment);\n\n        }\n\n      } else {\n\n        if (front.parent.fragment.firstChild) {\n\n          front.parent.fragment.insertBefore(front.element.domElement, front.parent.fragment.firstChild);\n\n        } else {\n\n          front.parent.fragment.appendChild(front.element.domElement);\n\n        }\n\n        if (front.element.config.onAttach) {\n\n          front.element.config.onAttach(front.element);\n\n        }\n\n      }\n\n    } else {\n\n      if (front.element.isComponent) {\n\n        if (front.parent.domElement.firstChild) {\n\n          front.parent.domElement.insertBefore(front.element.fragment, front.parent.domElement.firstChild);\n\n        } else {\n\n          front.parent.domElement.appendChild(front.element.fragment);\n\n        }\n\n      } else {\n\n        if (front.parent.domElement.firstChild) {\n\n          front.parent.domElement.insertBefore(front.element.domElement, front.parent.domElement.firstChild);\n\n        } else {\n\n          front.parent.domElement.appendChild(front.element.domElement);\n\n        }\n\n        if (front.element.config.onAttach) {\n\n          front.element.config.onAttach(front.element);\n\n        }\n\n      }\n\n    }\n\n  }\n\n}\n\nRenderer.prototype.renderComponent = function(front) {\n\n  front.element.fragment = document.createDocumentFragment();\n\n  if (front.parent) {\n\n    if (front.parent.isComponent) {\n\n      front.element.isMounted = true;\n\n      front.element.component = front.parent;\n\n    } else {\n\n      front.element.component = front.parent.component;\n\n    }\n\n    this.appendPendingStack.push({\n      element: front.element,\n      parent: front.parent\n    });\n\n  }\n\n  if (front.element.ref) {\n\n    front.element.component.refs[front.element.ref] = front.element;\n\n  }\n\n  if (front.element.groupref) {\n\n    if (front.element.component.grouprefs[front.element.groupref]) {\n\n      front.element.component.grouprefs[front.element.groupref].push(front.element);\n\n    } else {\n\n      front.element.component.grouprefs[front.element.groupref] = [front.element];\n\n    }\n\n  }\n\n}\n\nRenderer.prototype.renderElement = function(front) {\n\n  if (front.parent) {\n\n    if (front.parent.isComponent) {\n\n      front.element.component = front.parent;\n\n      this.appendPendingStack.push({\n        element: front.element,\n        parent: front.parent\n      });\n\n    } else {\n\n      this.appendPendingStack.push({\n        element: front.element,\n        parent: front.parent\n      });\n\n      front.element.component = front.parent.component;\n\n    }\n\n    front.element.parent = front.parent;\n\n  } else {\n\n    this.hydrogenToDOMConverter.convert(front.element);\n\n  }\n\n  if (front.element.config.ref) {\n\n    front.element.component.refs[front.element.config.ref] = front.element;\n\n  }\n\n  if (front.element.config.groupref) {\n\n    if (front.element.component.groupref[front.element.config.groupref]) {\n\n      front.element.component.groupref[front.element.config.groupref].push(front.element);\n\n    } else {\n\n      front.element.component.groupref[front.element.config.groupref] = [front.element];\n\n    }\n\n  }\n\n}\n\nRenderer.prototype.clearParentDOMElement = function(parentDOMElement) {\n\n  while (parentDOMElement.hasChildNodes()) {\n\n    parentDOMElement.lastChild.remove();\n\n  }\n\n}\n\nRenderer.prototype.loadLazyComponents = function() {\n\n  var current = this;\n\n  while (current.lazyComponentsList.length != 0) {\n\n    current.lazyComponentsList.pop().lazyLoad();\n\n  }\n\n}\n\nRenderer.prototype.render = function(rootComponent, parentDOMElement, isParentToBeCleared, insertBefore) {\n\n  this.renderComponentOrElement(rootComponent);\n\n  if (isParentToBeCleared) {\n\n    this.clearParentDOMElement(parentDOMElement);\n\n  }\n\n  if (insertBefore) {\n\n    if (rootComponent.isComponent) {\n\n      parentDOMElement.parentNode.insertBefore(rootComponent.fragment, parentDOMElement);\n\n    } else {\n\n      parentDOMElement.parentNode.insertBefore(rootComponent.domElement, parentDOMElement);\n\n    }\n\n  } else {\n\n    if (rootComponent.isComponent) {\n\n      parentDOMElement.appendChild(rootComponent.fragment);\n\n    } else {\n\n      parentDOMElement.appendChild(rootComponent.domElement);\n\n    }\n\n  }\n\n  rootComponent.isMounted = true;\n\n  this.loadLazyComponents();\n\n}\n\nmodule.exports = Renderer;\n\n\n//# sourceURL=webpack:///./node_modules/@siddharthbosecodeware/hydrogen/src/Renderer.js?");

/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Expose `pathToRegexp`.\n */\nmodule.exports = pathToRegexp\nmodule.exports.parse = parse\nmodule.exports.compile = compile\nmodule.exports.tokensToFunction = tokensToFunction\nmodule.exports.tokensToRegExp = tokensToRegExp\n\n/**\n * Default configs.\n */\nvar DEFAULT_DELIMITER = '/'\n\n/**\n * The main path matching regexp utility.\n *\n * @type {RegExp}\n */\nvar PATH_REGEXP = new RegExp([\n  // Match escaped characters that would otherwise appear in future matches.\n  // This allows the user to escape special characters that won't transform.\n  '(\\\\\\\\.)',\n  // Match Express-style parameters and un-named parameters with a prefix\n  // and optional suffixes. Matches appear as:\n  //\n  // \":test(\\\\d+)?\" => [\"test\", \"\\d+\", undefined, \"?\"]\n  // \"(\\\\d+)\"  => [undefined, undefined, \"\\d+\", undefined]\n  '(?:\\\\:(\\\\w+)(?:\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))?|\\\\(((?:\\\\\\\\.|[^\\\\\\\\()])+)\\\\))([+*?])?'\n].join('|'), 'g')\n\n/**\n * Parse a string for the raw tokens.\n *\n * @param  {string}  str\n * @param  {Object=} options\n * @return {!Array}\n */\nfunction parse (str, options) {\n  var tokens = []\n  var key = 0\n  var index = 0\n  var path = ''\n  var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER\n  var whitelist = (options && options.whitelist) || undefined\n  var pathEscaped = false\n  var res\n\n  while ((res = PATH_REGEXP.exec(str)) !== null) {\n    var m = res[0]\n    var escaped = res[1]\n    var offset = res.index\n    path += str.slice(index, offset)\n    index = offset + m.length\n\n    // Ignore already escaped sequences.\n    if (escaped) {\n      path += escaped[1]\n      pathEscaped = true\n      continue\n    }\n\n    var prev = ''\n    var name = res[2]\n    var capture = res[3]\n    var group = res[4]\n    var modifier = res[5]\n\n    if (!pathEscaped && path.length) {\n      var k = path.length - 1\n      var c = path[k]\n      var matches = whitelist ? whitelist.indexOf(c) > -1 : true\n\n      if (matches) {\n        prev = c\n        path = path.slice(0, k)\n      }\n    }\n\n    // Push the current path onto the tokens.\n    if (path) {\n      tokens.push(path)\n      path = ''\n      pathEscaped = false\n    }\n\n    var repeat = modifier === '+' || modifier === '*'\n    var optional = modifier === '?' || modifier === '*'\n    var pattern = capture || group\n    var delimiter = prev || defaultDelimiter\n\n    tokens.push({\n      name: name || key++,\n      prefix: prev,\n      delimiter: delimiter,\n      optional: optional,\n      repeat: repeat,\n      pattern: pattern\n        ? escapeGroup(pattern)\n        : '[^' + escapeString(delimiter === defaultDelimiter ? delimiter : (delimiter + defaultDelimiter)) + ']+?'\n    })\n  }\n\n  // Push any remaining characters.\n  if (path || index < str.length) {\n    tokens.push(path + str.substr(index))\n  }\n\n  return tokens\n}\n\n/**\n * Compile a string to a template function for the path.\n *\n * @param  {string}             str\n * @param  {Object=}            options\n * @return {!function(Object=, Object=)}\n */\nfunction compile (str, options) {\n  return tokensToFunction(parse(str, options))\n}\n\n/**\n * Expose a method for transforming tokens into the path function.\n */\nfunction tokensToFunction (tokens) {\n  // Compile all the tokens into regexps.\n  var matches = new Array(tokens.length)\n\n  // Compile all the patterns before compilation.\n  for (var i = 0; i < tokens.length; i++) {\n    if (typeof tokens[i] === 'object') {\n      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')\n    }\n  }\n\n  return function (data, options) {\n    var path = ''\n    var encode = (options && options.encode) || encodeURIComponent\n\n    for (var i = 0; i < tokens.length; i++) {\n      var token = tokens[i]\n\n      if (typeof token === 'string') {\n        path += token\n        continue\n      }\n\n      var value = data ? data[token.name] : undefined\n      var segment\n\n      if (Array.isArray(value)) {\n        if (!token.repeat) {\n          throw new TypeError('Expected \"' + token.name + '\" to not repeat, but got array')\n        }\n\n        if (value.length === 0) {\n          if (token.optional) continue\n\n          throw new TypeError('Expected \"' + token.name + '\" to not be empty')\n        }\n\n        for (var j = 0; j < value.length; j++) {\n          segment = encode(value[j], token)\n\n          if (!matches[i].test(segment)) {\n            throw new TypeError('Expected all \"' + token.name + '\" to match \"' + token.pattern + '\"')\n          }\n\n          path += (j === 0 ? token.prefix : token.delimiter) + segment\n        }\n\n        continue\n      }\n\n      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {\n        segment = encode(String(value), token)\n\n        if (!matches[i].test(segment)) {\n          throw new TypeError('Expected \"' + token.name + '\" to match \"' + token.pattern + '\", but got \"' + segment + '\"')\n        }\n\n        path += token.prefix + segment\n        continue\n      }\n\n      if (token.optional) continue\n\n      throw new TypeError('Expected \"' + token.name + '\" to be ' + (token.repeat ? 'an array' : 'a string'))\n    }\n\n    return path\n  }\n}\n\n/**\n * Escape a regular expression string.\n *\n * @param  {string} str\n * @return {string}\n */\nfunction escapeString (str) {\n  return str.replace(/([.+*?=^!:${}()[\\]|/\\\\])/g, '\\\\$1')\n}\n\n/**\n * Escape the capturing group by escaping special characters and meaning.\n *\n * @param  {string} group\n * @return {string}\n */\nfunction escapeGroup (group) {\n  return group.replace(/([=!:$/()])/g, '\\\\$1')\n}\n\n/**\n * Get the flags for a regexp from the options.\n *\n * @param  {Object} options\n * @return {string}\n */\nfunction flags (options) {\n  return options && options.sensitive ? '' : 'i'\n}\n\n/**\n * Pull out keys from a regexp.\n *\n * @param  {!RegExp} path\n * @param  {Array=}  keys\n * @return {!RegExp}\n */\nfunction regexpToRegexp (path, keys) {\n  if (!keys) return path\n\n  // Use a negative lookahead to match only capturing groups.\n  var groups = path.source.match(/\\((?!\\?)/g)\n\n  if (groups) {\n    for (var i = 0; i < groups.length; i++) {\n      keys.push({\n        name: i,\n        prefix: null,\n        delimiter: null,\n        optional: false,\n        repeat: false,\n        pattern: null\n      })\n    }\n  }\n\n  return path\n}\n\n/**\n * Transform an array into a regexp.\n *\n * @param  {!Array}  path\n * @param  {Array=}  keys\n * @param  {Object=} options\n * @return {!RegExp}\n */\nfunction arrayToRegexp (path, keys, options) {\n  var parts = []\n\n  for (var i = 0; i < path.length; i++) {\n    parts.push(pathToRegexp(path[i], keys, options).source)\n  }\n\n  return new RegExp('(?:' + parts.join('|') + ')', flags(options))\n}\n\n/**\n * Create a path regexp from string input.\n *\n * @param  {string}  path\n * @param  {Array=}  keys\n * @param  {Object=} options\n * @return {!RegExp}\n */\nfunction stringToRegexp (path, keys, options) {\n  return tokensToRegExp(parse(path, options), keys, options)\n}\n\n/**\n * Expose a function for taking tokens and returning a RegExp.\n *\n * @param  {!Array}  tokens\n * @param  {Array=}  keys\n * @param  {Object=} options\n * @return {!RegExp}\n */\nfunction tokensToRegExp (tokens, keys, options) {\n  options = options || {}\n\n  var strict = options.strict\n  var start = options.start !== false\n  var end = options.end !== false\n  var delimiter = options.delimiter || DEFAULT_DELIMITER\n  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|')\n  var route = start ? '^' : ''\n\n  // Iterate over the tokens and create our regexp string.\n  for (var i = 0; i < tokens.length; i++) {\n    var token = tokens[i]\n\n    if (typeof token === 'string') {\n      route += escapeString(token)\n    } else {\n      var capture = token.repeat\n        ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'\n        : token.pattern\n\n      if (keys) keys.push(token)\n\n      if (token.optional) {\n        if (!token.prefix) {\n          route += '(' + capture + ')?'\n        } else {\n          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?'\n        }\n      } else {\n        route += escapeString(token.prefix) + '(' + capture + ')'\n      }\n    }\n  }\n\n  if (end) {\n    if (!strict) route += '(?:' + escapeString(delimiter) + ')?'\n\n    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')'\n  } else {\n    var endToken = tokens[tokens.length - 1]\n    var isEndDelimited = typeof endToken === 'string'\n      ? endToken[endToken.length - 1] === delimiter\n      : endToken === undefined\n\n    if (!strict) route += '(?:' + escapeString(delimiter) + '(?=' + endsWith + '))?'\n    if (!isEndDelimited) route += '(?=' + escapeString(delimiter) + '|' + endsWith + ')'\n  }\n\n  return new RegExp(route, flags(options))\n}\n\n/**\n * Normalize the given path string, returning a regular expression.\n *\n * An empty array can be passed in for the keys, which will hold the\n * placeholder key descriptions. For example, using `/user/:id`, `keys` will\n * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.\n *\n * @param  {(string|RegExp|Array)} path\n * @param  {Array=}                keys\n * @param  {Object=}               options\n * @return {!RegExp}\n */\nfunction pathToRegexp (path, keys, options) {\n  if (path instanceof RegExp) {\n    return regexpToRegexp(path, keys)\n  }\n\n  if (Array.isArray(path)) {\n    return arrayToRegexp(/** @type {!Array} */ (path), keys, options)\n  }\n\n  return stringToRegexp(/** @type {string} */ (path), keys, options)\n}\n\n\n//# sourceURL=webpack:///./node_modules/path-to-regexp/index.js?");

/***/ })

/******/ });