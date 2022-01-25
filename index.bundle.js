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

    // Create mobile menu
    const mobileMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', menuDiv, 'mobileMenu');
    const mobileMenuIcon = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    const mobileMenuDiv = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mobileMenu, 'mobileMenuDiv');
    const mobileMenuList = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('menu', mobileMenuDiv, 'mobileMenuList');

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
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.skeletonHTML();
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
    _homepage_homepage_js__WEBPACK_IMPORTED_MODULE_3__.homepage.render();
  }

  _init();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNBO0FBQ2M7QUFDYTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrRUFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBibG9ja3MgPSAoIGZ1bmN0aW9uKCkge1xyXG5cclxuICBjb25zdCBfbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcclxuXHJcbiAgZnVuY3Rpb24gc2tlbGV0b25IVE1MKCkge1xyXG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnaGVhZGVyJykpO1xyXG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnbWFpbicpKTtcclxuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2Zvb3RlcicpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbmV3QmxvY2sobmFtZSl7XHJcbiAgICBjb25zdCBibG9jayA9IGFkZEVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgcmV0dXJuIGJsb2NrO1xyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdNZW51TGluayhpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IGFkZEVsZW1lbnQoJ2xpJywgJycsIGNsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGFkZEVsZW1lbnQoJ2EnLCBuZXdJdGVtKTtcclxuICAgIG5ld0l0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIGAuLyMke2lkfWApO1xyXG4gICAgbmV3SXRlbUxpbmsuaW5uZXJIVE1MID0gbWVudU5hbWU7XHJcbiAgICByZXR1cm4gbmV3SXRlbTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZmVhdHVyZUNvbHVtbihcclxuICAgIG5vZGUsXHJcbiAgICBjb2xDbGFzc05hbWUsIFxyXG4gICAgc3ViQ29sQ2xhc3NOYW1lLCBcclxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcclxuICAgIGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUsXHJcbiAgICBzZWNvbmRGZWF0dXJlSWNvbkNsYXNzTmFtZSwgXHJcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXHJcbiAgICBmZWF0dXJlVGl0bGVDb250ZW50XHJcbiAgICApIHtcclxuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKGNvbENsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBzdWJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgY29sKTtcclxuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBmZWF0dXJlSWNvbkNvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgc3ViQ29sKTtcclxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZmVhdHVyZUljb25Db250YWluZXJDbGFzc05hbWUpO1xyXG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcclxuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoZmlyc3RGZWF0dXJlSWNvbkNsYXNzTmFtZSk7XHJcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XHJcbiAgICBmZWF0dXJlVGl0bGUuY2xhc3NMaXN0LmFkZChmZWF0dXJlVGl0bGVDbGFzc05hbWUpO1xyXG4gICAgZmVhdHVyZVRpdGxlLnRleHRDb250ZW50ID0gZmVhdHVyZVRpdGxlQ29udGVudDtcclxuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld01lbnVJdGVtKGFyciwgaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcclxuICAgIGFyci5wdXNoKG1lbnVJdGVtKTtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlNZW51KG5vZGUsIGFycikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZSwgbm9kZSwgY2xhc3NOYW1lLCBpZE5hbWUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSl9XHJcbiAgICBpZiAoaWROYW1lKSB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKX1cclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcclxuICAgIF9tYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIHNrZWxldG9uSFRNTCxcclxuICAgIGFkZEVsZW1lbnQsXHJcbiAgICBuZXdCbG9jayxcclxuICAgIG5ld01lbnVMaW5rLFxyXG4gICAgbmV3TWVudUl0ZW0sXHJcbiAgICBkaXNwbGF5TWVudSxcclxuICAgIGZlYXR1cmVDb2x1bW4sXHJcbiAgICBjbGVhclBhZ2UsXHJcbiAgfVxyXG59ICkoKTtcclxuXHJcbmV4cG9ydCB7YmxvY2tzfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi8uLi9ibG9ja3MuanMnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzEuanBnJztcclxuXHJcbmNvbnN0IGhvbWVwYWdlID0gKCBmdW5jdGlvbigpIHtcclxuICBjb25zdCBfaGVhZGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIENhY2hlIERPTVxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxOTQsIDIxLCAwLCAuNSkgLCByZ2JhKDI1NSwgMTk3LCAwLCAuNSkpLCB1cmwoJyR7YmFja2dyb3VuZEltYWdlU3JjfScpYDtcclxuXHJcbiAgICAvLyBDcmVhdGUgTWFpbiBOYXZpZ2F0aW9uXHJcbiAgICBjb25zdCBtYWluTkF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGhlYWRlciwgJ21haW5OYXYnKTtcclxuICAgIGNvbnN0IGxvZ29EaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5BdiwgJ2xvZ29EaXYnKTtcclxuICAgIGNvbnN0IG1haW5Mb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBtYWluTG9nby5zcmMgPSBMb2dvO1xyXG4gICAgbWFpbkxvZ28uY2xhc3NMaXN0LmFkZCgnbWFpbkxvZ28nKTtcclxuICAgIGNvbnN0IGhvbWVwYWdlTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgbG9nb0Rpdik7XHJcbiAgICBob21lcGFnZUxpbmsuaHJlZiA9ICcuL2luZGV4Lmh0bWwnO1xyXG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgTWFpbiBNZW51IEJsb2NrXHJcbiAgICBjb25zdCBNZW51QXJyID0gW107XHJcbiAgICBjb25zdCBtZW51RGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OQXYsICdtZW51RGl2Jyk7XHJcbiAgICBjb25zdCBtYWluTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbWVudURpdiwgJ21haW5NZW51Jyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2Fib3V0JywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ21lbnUnLCAnbWVudUxpc3QnLCAnTWVudScpO1xyXG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1haW5NZW51LCBNZW51QXJyKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgbW9iaWxlIG1lbnVcclxuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWVudURpdiwgJ21vYmlsZU1lbnUnKTtcclxuICAgIGNvbnN0IG1vYmlsZU1lbnVJY29uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2knLCBtb2JpbGVNZW51LCAnZmFzJyk7XHJcbiAgICBtb2JpbGVNZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51RGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1vYmlsZU1lbnUsICdtb2JpbGVNZW51RGl2Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51TGlzdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbW9iaWxlTWVudURpdiwgJ21vYmlsZU1lbnVMaXN0Jyk7XHJcblxyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IF9tYWluQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIENhY2hlIERPTVxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgICBcclxuICAgIC8vIENyZWF0ZSBGZWF0dXJlcyBibG9ja1xyXG4gICAgY29uc3QgZmVhdHVyZXMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbiwgJycsICdmZWF0dXJlcycpO1xyXG4gICAgY29uc3QgZmVhdHVyZXNIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmZWF0dXJlcywgJ2ZlYXR1cmVIZWFkZXInKTtcclxuICAgIGZlYXR1cmVzSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVzJztcclxuICAgIGNvbnN0IGZlYXR1cmVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZlYXR1cmVzLCAnZmVhdHVyZXNDb250YWluZXInKTtcclxuICAgIFxyXG4gICAgLy8gQ3JlYXRlIGZlYXR1cmUgY29sdW1uXHJcbiAgICBjb25zdCBmaXJzdENvbCA9IGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxyXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcclxuICAgICAgJ2ZlYXR1cmVDb2wnLFxyXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxyXG4gICAgICAnZmVhdHVyZUljb24nLFxyXG4gICAgICAnZmEnLFxyXG4gICAgICAnZmEtY29mZmVlJyxcclxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXHJcbiAgICAgICdURUEnXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2Vjb25kQ29sID0gYmxvY2tzLmZlYXR1cmVDb2x1bW4oXHJcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxyXG4gICAgICAnZmVhdHVyZUNvbCcsXHJcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXHJcbiAgICAgICdmZWF0dXJlSWNvbicsXHJcbiAgICAgICdmYScsXHJcbiAgICAgICdmYS1jdXRsZXJ5JyxcclxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXHJcbiAgICAgICdCQUtFUlknXHJcbiAgICApO1xyXG4gICAgY29uc3QgdGhpcmRDb2wgPSBibG9ja3MuZmVhdHVyZUNvbHVtbihcclxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXHJcbiAgICAgICdmZWF0dXJlQ29sJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uJyxcclxuICAgICAgJ2ZhJyxcclxuICAgICAgJ2ZhLWhlYXJ0JyxcclxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXHJcbiAgICAgICdTV0VFVCdcclxuICAgICk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgX2Zvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XHJcbiAgICBjb25zdCBmaXJzdEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcclxuICAgIGNvbnN0IHNlY29uZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcclxuICAgIGNvbnN0IHRoaXJkRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xyXG5cclxuICAgIC8vIEZpcnN0IEZvb3RlciBDb2xcclxuICAgIGNvbnN0IGpvaW5VcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzJyk7XHJcbiAgICBqb2luVXMudGV4dENvbnRlbnQgPSAnSm9pbiBVcyc7XHJcbiAgICBjb25zdCBqb2luVXNEZXNjID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0Rlc2MnKTtcclxuICAgIGpvaW5Vc0Rlc2MudGV4dENvbnRlbnQgPSAnQWx3YXlzIGxvb2tpbmcgZm9yIGZyaWVuZGx5IHN0YWZmIHdpdGggcG9zaXRpdmUgYXR0aXR1ZGVzISBQbGVhc2Ugc3VibWl0IHlvdXIgcmVzdW1lIHRvJztcclxuICAgIGNvbnN0IGpvaW5Vc0VtYWlsTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNFbWFpbExpbmsnKTtcclxuICAgIGpvaW5Vc0VtYWlsTGluay5pbm5lckhUTUwgPSAnaGVsbG9AdGVhbGF4LmNvbSc7XHJcbiAgICBqb2luVXNFbWFpbExpbmsuaHJlZiA9ICdtYWlsdG86aGVsbG9AdGVhbGF4LmNvbSc7XHJcblxyXG4gICAgLy8gU2Vjb25kIEZvb3RlciBDb2xcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb24nKTtcclxuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcclxuICAgIGNvbnN0IGxvY2F0aW9uQWRkciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25BZGRyJyk7XHJcbiAgICBsb2NhdGlvbkFkZHIudGV4dENvbnRlbnQgPSAnMTIzNCBCZWxsYWlyZSc7XHJcbiAgICBjb25zdCBsb2NhdGlvbkNpdHkgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQ2l0eScpO1xyXG4gICAgbG9jYXRpb25DaXR5LnRleHRDb250ZW50ID0gJ0hvdXN0b24sIFRYIDc3MDM2JztcclxuICAgIGNvbnN0IGxvY2F0aW9uUGhvbmVOdW1iZXIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uUGhvbmVOdW1iZXInKTtcclxuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMjgxLTk5OS0wOTA5JztcclxuXHJcbiAgICAvLyBUaGlyZCBGb290ZXIgQ29sXHJcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc1RpdGxlJyk7XHJcbiAgICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0hPVVJTJztcclxuICAgIGNvbnN0IGhvdXJzRGF0ZXMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNEYXRlcycpO1xyXG4gICAgaG91cnNEYXRlcy50ZXh0Q29udGVudCA9ICdTVU5EQVkgLSBGUklEQVknO1xyXG4gICAgY29uc3QgaG91cnNIb3VycyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0hvdXJzJyk7XHJcbiAgICBob3Vyc0hvdXJzLnRleHRDb250ZW50ID0gJzExOjAwIEFNIC0gOTowMCBQTSc7XHJcblxyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGJsb2Nrcy5za2VsZXRvbkhUTUwoKTtcclxuICAgIF9oZWFkZXJCbG9jaygpO1xyXG4gICAgX21haW5CbG9jaygpO1xyXG4gICAgX2Zvb3RlckJsb2NrKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyLFxyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7aG9tZXBhZ2V9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9yZXNldC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHtibG9ja3N9IGZyb20gJy4vYmxvY2tzLmpzJztcclxuaW1wb3J0IHtob21lcGFnZX0gZnJvbSAnLi9ob21lcGFnZS9ob21lcGFnZS5qcyc7XHJcblxyXG5jb25zdCBjcmVhdGVQYWdlID0gKCBmdW5jdGlvbigpIHtcclxuICBcclxuICBmdW5jdGlvbiBfaW5pdCgpIHtcclxuICAgIC8vIENyZWF0ZSBTa2VsZXRvbiBIVE1MXHJcbiAgICBob21lcGFnZS5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIF9pbml0KCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==