/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blocks": () => (/* binding */ blocks)
/* harmony export */ });
const blocks = ( function() {

  const _mainContent = document.getElementById('mainContent');

  function skeletonHTML() {
    _mainContent.appendChild(blocks.newBlock('header'));
    _mainContent.appendChild(blocks.newBlock('main'));
    _mainContent.appendChild(blocks.newBlock('footer'));
  }
  function newBlock(name){
    const block = addElement('div');
    block.setAttribute('id', name);
    return block;
  }
  function newMenuLink(id, className, menuName) {
    const newItem = addElement('li', '', className);
    const newItemLink = addElement('a', newItem);
    newItemLink.setAttribute('href', `./#${id}`);
    newItemLink.innerHTML = menuName;
    return newItem;
  }
  function featureColumn(
    node,
    colClassName, 
    subColClassName, 
    featureIconContainerClassName, 
    firstFeatureIconClassName,
    secondFeatureIconClassName, 
    featureTitleClassName,
    featureTitleContent
    ) {
    const col = blocks.addElement('div');
    col.classList.add(colClassName);
    const subCol = blocks.addElement('div', col);
    subCol.classList.add(subColClassName);
    const featureIconContainer = blocks.addElement('span', subCol);
    featureIconContainer.classList.add(featureIconContainerClassName);
    const featureIcon = blocks.addElement('i', featureIconContainer);
    featureIcon.classList.add(firstFeatureIconClassName);
    featureIcon.classList.add(secondFeatureIconClassName);
    const featureTitle = blocks.addElement('h3', col);
    featureTitle.classList.add(featureTitleClassName);
    featureTitle.textContent = featureTitleContent;
    return node.appendChild(col);
  }
  function newMenuItem(arr, id, className, menuName) {
    const menuItem = blocks.newMenuLink(id, className, menuName);
    arr.push(menuItem);
    return arr;
  }
  function displayMenu(node, arr) {
    for (let i = 0; i < arr.length; i++) {
      node.appendChild(arr[i]);
    }
  }
  function addElement(ele, node, className, idName) {
    const element = document.createElement(ele);
    if (className) {element.classList.add(className)}
    if (idName) {element.setAttribute('id', idName)}
    if (node) {
      return node.appendChild(element);
    } else {
      return element;
    }
  }
  function clearPage() {
    _mainContent.innerHTML = '';
  }
  return {
    skeletonHTML,
    addElement,
    newBlock,
    newMenuLink,
    newMenuItem,
    displayMenu,
    featureColumn,
    clearPage,
  }
} )();



/***/ }),

/***/ "./src/homepage/homepage.js":
/*!**********************************!*\
  !*** ./src/homepage/homepage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homepage": () => (/* binding */ homepage)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_TEALAX_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/TEALAX-transparent.png */ "./src/homepage/resources/TEALAX-transparent.png");
/* harmony import */ var _resources_home_bg_slideshow1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/home-bg-slideshow1.jpg */ "./src/homepage/resources/home-bg-slideshow1.jpg");




const homepage = ( function() {
  const _headerBlock = ( function() {

    // Cache DOM
    const header = document.getElementById('header');
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${_resources_home_bg_slideshow1_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;

    // Create Main Navigation
    const mainNAv = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', header, 'mainNav');
    const logoDiv = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainNAv, 'logoDiv');
    const mainLogo = new Image();
    mainLogo.src = _resources_TEALAX_transparent_png__WEBPACK_IMPORTED_MODULE_1__;
    mainLogo.classList.add('mainLogo');
    const homepageLink = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('a', logoDiv);
    homepageLink.href = './index.html';
    homepageLink.appendChild(mainLogo);

    // Create Main Menu Block
    const MenuArr = [];
    const menuDiv = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainNAv, 'menuDiv');
    const mainMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('menu', menuDiv, 'mainMenu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MenuArr, 'features', 'menuList', 'Features');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MenuArr, 'about', 'menuList', 'About');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MenuArr, 'menu', 'menuList', 'Menu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.displayMenu(mainMenu, MenuArr);
  });
  
  const _mainBlock = ( function() {

    // Cache DOM
    const main = document.getElementById('main');
    
    // Create Features block
    const features = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', main, '', 'features');
    const featuresHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', features, 'featureHeader');
    featuresHeader.textContent = 'Features';
    const featuresContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', features, 'featuresContainer');
    
    // Create feature column
    const firstCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.featureColumn(
      featuresContainer,
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-coffee',
      'featureTitle',
      'TEA'
    );
    const secondCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.featureColumn(
      featuresContainer,
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-cutlery',
      'featureTitle',
      'BAKERY'
    );
    const thirdCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.featureColumn(
      featuresContainer,
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-heart',
      'featureTitle',
      'SWEET'
    );
  });
  
  const _footerBlock = ( function() {

    const footer = document.getElementById('footer');
    const firstFooterCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', footer, 'footerCol');
    const secondFooterCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', footer, 'footerCol');
    const thirdFooterCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', footer, 'footerCol');

    // First Footer Col
    const joinUs = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', firstFooterCol, 'joinUs');
    joinUs.textContent = 'Join Us';
    const joinUsDesc = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', firstFooterCol, 'joinUsDesc');
    joinUsDesc.textContent = 'Always looking for friendly staff with positive attitudes! Please submit your resume to';
    const joinUsEmailLink = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('a', firstFooterCol, 'joinUsEmailLink');
    joinUsEmailLink.innerHTML = 'hello@tealax.com';
    joinUsEmailLink.href = 'mailto:hello@tealax.com';

    // Second Footer Col
    const location = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', secondFooterCol, 'location');
    location.textContent = 'LOCATION';
    const locationAddr = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondFooterCol, 'locationAddr');
    locationAddr.textContent = '1234 Bellaire';
    const locationCity = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondFooterCol, 'locationCity');
    locationCity.textContent = 'Houston, TX 77036';
    const locationPhoneNumber = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondFooterCol, 'locationPhoneNumber');
    locationPhoneNumber.textContent = '281-999-0909';

    // Third Footer Col
    const hoursTitle = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', thirdFooterCol, 'hoursTitle');
    hoursTitle.textContent = 'HOURS';
    const hoursDates = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', thirdFooterCol, 'hoursDates');
    hoursDates.textContent = 'SUNDAY - FRIDAY';
    const hoursHours = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', thirdFooterCol, 'hoursHours');
    hoursHours.textContent = '11:00 AM - 9:00 PM';

  });
  
  function render() {
    _headerBlock();
    _mainBlock();
    _footerBlock();
  }

  return {
    render,
  }
})();



/***/ }),

/***/ "./src/homepage/resources/TEALAX-transparent.png":
/*!*******************************************************!*\
  !*** ./src/homepage/resources/TEALAX-transparent.png ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9ae7dc1d75435a7408.png";

/***/ }),

/***/ "./src/homepage/resources/home-bg-slideshow1.jpg":
/*!*******************************************************!*\
  !*** ./src/homepage/resources/home-bg-slideshow1.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "415485375acd1e372265.jpg";

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks.js */ "./src/blocks.js");
/* harmony import */ var _homepage_homepage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.js */ "./src/homepage/homepage.js");





const createPage = ( function() {
  
  function _init() {
    // Create Skeleton HTML
    _blocks_js__WEBPACK_IMPORTED_MODULE_2__.blocks.skeletonHTML();
    _homepage_homepage_js__WEBPACK_IMPORTED_MODULE_3__.homepage.render();
  }

  _init();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ0E7QUFDYztBQUNhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFtQjtBQUN2QixJQUFJLGtFQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Jlc2V0LmNzcz9jZTM4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBibG9ja3MgPSAoIGZ1bmN0aW9uKCkge1xyXG5cclxuICBjb25zdCBfbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcclxuXHJcbiAgZnVuY3Rpb24gc2tlbGV0b25IVE1MKCkge1xyXG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnaGVhZGVyJykpO1xyXG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnbWFpbicpKTtcclxuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2Zvb3RlcicpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbmV3QmxvY2sobmFtZSl7XHJcbiAgICBjb25zdCBibG9jayA9IGFkZEVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdNZW51TGluayhpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IGFkZEVsZW1lbnQoJ2xpJywgJycsIGNsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGFkZEVsZW1lbnQoJ2EnLCBuZXdJdGVtKTtcclxuICAgIG5ld0l0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAuLyMke2lkfWApO1xyXG4gICAgbmV3SXRlbUxpbmsuaW5uZXJIVE1MID0gbWVudU5hbWU7XHJcbiAgICByZXR1cm4gbmV3SXRlbTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZmVhdHVyZUNvbHVtbihcclxuICAgIG5vZGUsXHJcbiAgICBjb2xDbGFzc05hbWUsIFxyXG4gICAgc3ViQ29sQ2xhc3NOYW1lLCBcclxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcclxuICAgIGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUsXHJcbiAgICBzZWNvbmRGZWF0dXJlSWNvbkNsYXNzTmFtZSwgXHJcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXHJcbiAgICBmZWF0dXJlVGl0bGVDb250ZW50XHJcbiAgICApIHtcclxuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKGNvbENsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBzdWJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgY29sKTtcclxuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBmZWF0dXJlSWNvbkNvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgc3ViQ29sKTtcclxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZmVhdHVyZUljb25Db250YWluZXJDbGFzc05hbWUpO1xyXG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcclxuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoZmlyc3RGZWF0dXJlSWNvbkNsYXNzTmFtZSk7XHJcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XHJcbiAgICBmZWF0dXJlVGl0bGUuY2xhc3NMaXN0LmFkZChmZWF0dXJlVGl0bGVDbGFzc05hbWUpO1xyXG4gICAgZmVhdHVyZVRpdGxlLnRleHRDb250ZW50ID0gZmVhdHVyZVRpdGxlQ29udGVudDtcclxuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld01lbnVJdGVtKGFyciwgaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcclxuICAgIGFyci5wdXNoKG1lbnVJdGVtKTtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlNZW51KG5vZGUsIGFycikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZSwgbm9kZSwgY2xhc3NOYW1lLCBpZE5hbWUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSl9XHJcbiAgICBpZiAoaWROYW1lKSB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKX1cclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIF9tYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHNrZWxldG9uSFRNTCxcclxuICAgIGFkZEVsZW1lbnQsXHJcbiAgICBuZXdCbG9jayxcclxuICAgIG5ld01lbnVMaW5rLFxyXG4gICAgbmV3TWVudUl0ZW0sXHJcbiAgICBkaXNwbGF5TWVudSxcclxuICAgIGZlYXR1cmVDb2x1bW4sXHJcbiAgICBjbGVhclBhZ2UsXHJcbiAgfVxyXG59ICkoKTtcclxuXHJcbmV4cG9ydCB7YmxvY2tzfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi8uLi9ibG9ja3MuanMnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzEuanBnJztcclxuXHJcbmNvbnN0IGhvbWVwYWdlID0gKCBmdW5jdGlvbigpIHtcclxuICBjb25zdCBfaGVhZGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIENhY2hlIERPTVxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxOTQsIDIxLCAwLCAuNSkgLCByZ2JhKDI1NSwgMTk3LCAwLCAuNSkpLCB1cmwoJyR7YmFja2dyb3VuZEltYWdlU3JjfScpYDtcclxuXHJcbiAgICAvLyBDcmVhdGUgTWFpbiBOYXZpZ2F0aW9uXHJcbiAgICBjb25zdCBtYWluTkF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGhlYWRlciwgJ21haW5OYXYnKTtcclxuICAgIGNvbnN0IGxvZ29EaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5BdiwgJ2xvZ29EaXYnKTtcclxuICAgIGNvbnN0IG1haW5Mb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBtYWluTG9nby5zcmMgPSBMb2dvO1xyXG4gICAgbWFpbkxvZ28uY2xhc3NMaXN0LmFkZCgnbWFpbkxvZ28nKTtcclxuICAgIGNvbnN0IGhvbWVwYWdlTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgbG9nb0Rpdik7XHJcbiAgICBob21lcGFnZUxpbmsuaHJlZiA9ICcuL2luZGV4Lmh0bWwnO1xyXG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgTWFpbiBNZW51IEJsb2NrXHJcbiAgICBjb25zdCBNZW51QXJyID0gW107XHJcbiAgICBjb25zdCBtZW51RGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OQXYsICdtZW51RGl2Jyk7XHJcbiAgICBjb25zdCBtYWluTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbWVudURpdiwgJ21haW5NZW51Jyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2Fib3V0JywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ21lbnUnLCAnbWVudUxpc3QnLCAnTWVudScpO1xyXG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1haW5NZW51LCBNZW51QXJyKTtcclxuICB9KTtcclxuICBcclxuICBjb25zdCBfbWFpbkJsb2NrID0gKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBDYWNoZSBET01cclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgRmVhdHVyZXMgYmxvY2tcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW4sICcnLCAnZmVhdHVyZXMnKTtcclxuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmVhdHVyZXMsICdmZWF0dXJlSGVhZGVyJyk7XHJcbiAgICBmZWF0dXJlc0hlYWRlci50ZXh0Q29udGVudCA9ICdGZWF0dXJlcyc7XHJcbiAgICBjb25zdCBmZWF0dXJlc0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmZWF0dXJlcywgJ2ZlYXR1cmVzQ29udGFpbmVyJyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSBmZWF0dXJlIGNvbHVtblxyXG4gICAgY29uc3QgZmlyc3RDb2wgPSBibG9ja3MuZmVhdHVyZUNvbHVtbihcclxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXHJcbiAgICAgICdmZWF0dXJlQ29sJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uJyxcclxuICAgICAgJ2ZhJyxcclxuICAgICAgJ2ZhLWNvZmZlZScsXHJcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxyXG4gICAgICAnVEVBJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxyXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcclxuICAgICAgJ2ZlYXR1cmVDb2wnLFxyXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxyXG4gICAgICAnZmVhdHVyZUljb24nLFxyXG4gICAgICAnZmEnLFxyXG4gICAgICAnZmEtY3V0bGVyeScsXHJcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxyXG4gICAgICAnQkFLRVJZJ1xyXG4gICAgKTtcclxuICAgIGNvbnN0IHRoaXJkQ29sID0gYmxvY2tzLmZlYXR1cmVDb2x1bW4oXHJcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxyXG4gICAgICAnZmVhdHVyZUNvbCcsXHJcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXHJcbiAgICAgICdmZWF0dXJlSWNvbicsXHJcbiAgICAgICdmYScsXHJcbiAgICAgICdmYS1oZWFydCcsXHJcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxyXG4gICAgICAnU1dFRVQnXHJcbiAgICApO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IF9mb290ZXJCbG9jayA9ICggZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xyXG4gICAgY29uc3QgZmlyc3RGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XHJcbiAgICBjb25zdCBzZWNvbmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XHJcbiAgICBjb25zdCB0aGlyZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcclxuXHJcbiAgICAvLyBGaXJzdCBGb290ZXIgQ29sXHJcbiAgICBjb25zdCBqb2luVXMgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5VcycpO1xyXG4gICAgam9pblVzLnRleHRDb250ZW50ID0gJ0pvaW4gVXMnO1xyXG4gICAgY29uc3Qgam9pblVzRGVzYyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNEZXNjJyk7XHJcbiAgICBqb2luVXNEZXNjLnRleHRDb250ZW50ID0gJ0Fsd2F5cyBsb29raW5nIGZvciBmcmllbmRseSBzdGFmZiB3aXRoIHBvc2l0aXZlIGF0dGl0dWRlcyEgUGxlYXNlIHN1Ym1pdCB5b3VyIHJlc3VtZSB0byc7XHJcbiAgICBjb25zdCBqb2luVXNFbWFpbExpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRW1haWxMaW5rJyk7XHJcbiAgICBqb2luVXNFbWFpbExpbmsuaW5uZXJIVE1MID0gJ2hlbGxvQHRlYWxheC5jb20nO1xyXG4gICAgam9pblVzRW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmhlbGxvQHRlYWxheC5jb20nO1xyXG5cclxuICAgIC8vIFNlY29uZCBGb290ZXIgQ29sXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uJyk7XHJcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICdMT0NBVElPTic7XHJcbiAgICBjb25zdCBsb2NhdGlvbkFkZHIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQWRkcicpO1xyXG4gICAgbG9jYXRpb25BZGRyLnRleHRDb250ZW50ID0gJzEyMzQgQmVsbGFpcmUnO1xyXG4gICAgY29uc3QgbG9jYXRpb25DaXR5ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbkNpdHknKTtcclxuICAgIGxvY2F0aW9uQ2l0eS50ZXh0Q29udGVudCA9ICdIb3VzdG9uLCBUWCA3NzAzNic7XHJcbiAgICBjb25zdCBsb2NhdGlvblBob25lTnVtYmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvblBob25lTnVtYmVyJyk7XHJcbiAgICBsb2NhdGlvblBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzI4MS05OTktMDkwOSc7XHJcblxyXG4gICAgLy8gVGhpcmQgRm9vdGVyIENvbFxyXG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNUaXRsZScpO1xyXG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIT1VSUyc7XHJcbiAgICBjb25zdCBob3Vyc0RhdGVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzRGF0ZXMnKTtcclxuICAgIGhvdXJzRGF0ZXMudGV4dENvbnRlbnQgPSAnU1VOREFZIC0gRlJJREFZJztcclxuICAgIGNvbnN0IGhvdXJzSG91cnMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNIb3VycycpO1xyXG4gICAgaG91cnNIb3Vycy50ZXh0Q29udGVudCA9ICcxMTowMCBBTSAtIDk6MDAgUE0nO1xyXG5cclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBfaGVhZGVyQmxvY2soKTtcclxuICAgIF9tYWluQmxvY2soKTtcclxuICAgIF9mb290ZXJCbG9jaygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlcixcclxuICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2hvbWVwYWdlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7YmxvY2tzfSBmcm9tICcuL2Jsb2Nrcy5qcyc7XHJcbmltcG9ydCB7aG9tZXBhZ2V9IGZyb20gJy4vaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlUGFnZSA9ICggZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgZnVuY3Rpb24gX2luaXQoKSB7XHJcbiAgICAvLyBDcmVhdGUgU2tlbGV0b24gSFRNTFxyXG4gICAgYmxvY2tzLnNrZWxldG9uSFRNTCgpO1xyXG4gICAgaG9tZXBhZ2UucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBfaW5pdCgpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=