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
  function newMenuLink(id, className, menuName) {
    const newItem = addElement('li', '', className);
    const newItemLink = addElement('a', newItem);
    newItemLink.setAttribute('id', id);
    newItemLink.innerHTML = menuName;
    return newItem;
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
  function createImgFigure(node, imgSrc, caption) {
    const figWrap = addElement('div', node, 'figureWrap');
    const img = addElement('img', figWrap, 'figureImg');
    img.src = imgSrc;
    const h3 = addElement('h3', figWrap, 'figureCaption');
    h3.textContent = caption.toUpperCase();
    return figWrap;
  }
  function toggleElement(idName, className) {
    const node = document.getElementById(idName);
    node.classList.toggle(className);
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
    createImgFigure,
    toggleElement,
    clearPage,
  }
} )();



/***/ }),

/***/ "./src/footerBlock/footerBlock.js":
/*!****************************************!*\
  !*** ./src/footerBlock/footerBlock.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerBlock": () => (/* binding */ footerBlock)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks.js */ "./src/blocks.js");

// import Logo from './resources/TEALAX-transparent.png';
// import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
// import firstColImgSrc from './resources/about-img.jpg';
// import storyImg1Src from './resources/story-img1.jpg';
// import storyImg2Src from './resources/story-img2.jpg';
// import storyImg3Src from './resources/story-img3.jpg';

const footerBlock = ( function() {

  // Create sections
  function _createFooterFirstCol() {
    const firstFooterCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', footer, 'footerCol');
    const joinUs = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', firstFooterCol, 'joinUs');
    joinUs.textContent = 'Join Us';
    const joinUsDesc = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', firstFooterCol, 'joinUsDesc');
    joinUsDesc.textContent = 'Always looking for friendly staff with positive attitudes! Please submit your resume to';
    const joinUsEmailLink = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('a', firstFooterCol, 'joinUsEmailLink');
    joinUsEmailLink.innerHTML = 'hello@tealax.com';
    joinUsEmailLink.href = 'mailto:hello@tealax.com';
  }
  function _createFooterSecondCol() {
    const secondFooterCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', footer, 'footerCol');
    const location = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', secondFooterCol, 'location');
    location.textContent = 'LOCATION';
    const locationAddr = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondFooterCol, 'locationAddr');
    locationAddr.textContent = '1234 Bellaire';
    const locationCity = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondFooterCol, 'locationCity');
    locationCity.textContent = 'Houston, TX 77036';
    const locationPhoneNumber = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondFooterCol, 'locationPhoneNumber');
    locationPhoneNumber.textContent = '281-999-0909';
    
  }
  function _createFooterThirdCol() {
    const thirdFooterCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', footer, 'footerCol');
    const hoursTitle = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', thirdFooterCol, 'hoursTitle');
    hoursTitle.textContent = 'HOURS';
    const hoursDates = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', thirdFooterCol, 'hoursDates');
    hoursDates.textContent = 'SUNDAY - FRIDAY';
    const hoursHours = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', thirdFooterCol, 'hoursHours');
    hoursHours.textContent = '11:00 AM - 9:00 PM';
  }
  
  // Render to the DOM
  function render() {
    _createFooterFirstCol();
    _createFooterSecondCol();
    _createFooterThirdCol();
  }

  return {
    render,
  }
})();



/***/ }),

/***/ "./src/headerBlock/headerBlock.js":
/*!****************************************!*\
  !*** ./src/headerBlock/headerBlock.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "headerBlock": () => (/* binding */ headerBlock)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_TEALAX_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/TEALAX-transparent.png */ "./src/headerBlock/resources/TEALAX-transparent.png");
/* harmony import */ var _resources_home_bg_slideshow1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/home-bg-slideshow1.jpg */ "./src/headerBlock/resources/home-bg-slideshow1.jpg");




const headerBlock = ( function() {

  // Cache DOM
  // const header = document.getElementById('header');

  // Creating sections
  function _styleHeaderBlock() {
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${_resources_home_bg_slideshow1_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;
  }
  function _createNavBar() {
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', header, '', 'mainNav');
  }
  function _createLogo() {
    const logoDiv = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainNav, 'logoDiv');
    const mainLogo = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', logoDiv, 'mainLogo', 'mainLogo');
    mainLogo.src = _resources_TEALAX_transparent_png__WEBPACK_IMPORTED_MODULE_1__;
    const homepageLink = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('a', logoDiv, '', 'mainLogoLink');
    homepageLink.appendChild(mainLogo);
  }
  function _createMobileMenuIcon() {
    const menuDiv = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainNav, 'menuDiv');
    const mobileMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', menuDiv, 'mobileMenu', 'mobileMenu');
    const mobileMenuIcon = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.setAttribute('id', 'hamburgerMenu');
  }
  function _createNavMenu() {
    const MenuArr = [];
    const menuDiv = document.querySelector('.menuDiv');
    const mainMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('menu', menuDiv, 'mainMenu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MenuArr, 'featuresLink', 'menuList', 'Features');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MenuArr, 'aboutLink', 'menuList', 'About');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MenuArr, 'menuLink', 'menuList', 'Menu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.displayMenu(mainMenu, MenuArr);
  }

  // Render to the DOM
  function render() {
    _styleHeaderBlock()
    _createNavBar();
    _createLogo();
    _createMobileMenuIcon();
    _createNavMenu();
  }

  return {
    render,
  }

})();



/***/ }),

/***/ "./src/mainContent/mainContent.js":
/*!****************************************!*\
  !*** ./src/mainContent/mainContent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContent": () => (/* binding */ mainContent)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_home_bg_slideshow2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/home-bg-slideshow2.jpg */ "./src/mainContent/resources/home-bg-slideshow2.jpg");
/* harmony import */ var _resources_about_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/about-img.jpg */ "./src/mainContent/resources/about-img.jpg");
/* harmony import */ var _resources_story_img1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/story-img1.jpg */ "./src/mainContent/resources/story-img1.jpg");
/* harmony import */ var _resources_story_img2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/story-img2.jpg */ "./src/mainContent/resources/story-img2.jpg");
/* harmony import */ var _resources_story_img3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/story-img3.jpg */ "./src/mainContent/resources/story-img3.jpg");
/* harmony import */ var _resources_mt_house_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/mt.house-milk-tea.jpg */ "./src/mainContent/resources/mt.house-milk-tea.jpg");
/* harmony import */ var _resources_mt_brown_sugar_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resources/mt.brown-sugar-milk-tea.jpg */ "./src/mainContent/resources/mt.brown-sugar-milk-tea.jpg");
/* harmony import */ var _resources_mt_thai_tea_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/mt.thai-tea.jpg */ "./src/mainContent/resources/mt.thai-tea.jpg");
/* harmony import */ var _resources_mt_vintage_black_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resources/mt.vintage-black-milk-tea.jpg */ "./src/mainContent/resources/mt.vintage-black-milk-tea.jpg");
/* harmony import */ var _resources_cheezo_tippy_tea_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resources/cheezo.tippy-tea.jpg */ "./src/mainContent/resources/cheezo.tippy-tea.jpg");
/* harmony import */ var _resources_grapefruit_overflow_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resources/grapefruit-overflow.jpg */ "./src/mainContent/resources/grapefruit-overflow.jpg");













const mainContent = ( function() {

  // Cache DOM
  const mainContent = document.getElementById('mainContent');

  // Create sections
  function _createFeatures() {
    const features = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainContent, '', 'features');
    const featuresHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h3', features, 'featureHeader');
    featuresHeader.textContent = 'Features';
    const featuresContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', features, 'featuresContainer');
    
    // Create features columns
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.featureColumn(
      featuresContainer,
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-coffee',
      'featureTitle',
      'TEA'
    );
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.featureColumn(
      featuresContainer,
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-cutlery',
      'featureTitle',
      'BAKERY'
    );
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.featureColumn(
      featuresContainer,
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-heart',
      'featureTitle',
      'SWEET'
    );
  }
  function _createAboutUs() {
    const aboutUsContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainContent, 'aboutUsContainer');
    const primaryHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h2', aboutUsContainer, 'primaryHeader');
    primaryHeader.textContent = 'Our Story';
    primaryHeader.style.textTransform = 'uppercase';

    // Main block sub header
    const subHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h4', aboutUsContainer, 'subHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', aboutUsContainer, 'aboutUsContent', 'aboutUsContent')
  }
  function _createAboutUsFirstCol() {
    const firstCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', aboutUsContent, 'firstCol');
    const img = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', firstCol, 'firstColImg');
    img.style.width = '100%';
    img.src = _resources_about_img_jpg__WEBPACK_IMPORTED_MODULE_2__;
    const imgCap = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', firstCol, 'imgCap');
    imgCap.textContent = 'We Make everthing with LOVE';
  }
  function _createAboutUsSecondCol() {
    const secondCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', aboutUsContent, 'secondCol');

    // Main block content second column slideshow
    const slideShowContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', secondCol, 'slideShowContainer');
    const firstSlide = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', slideShowContainer, 'slideShow');
    const secondSlide = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', slideShowContainer, 'slideShow');
    const thirdSlide = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', slideShowContainer, 'slideShow');
    firstSlide.classList.add('fade');
    secondSlide.classList.add('fade');
    thirdSlide.classList.add('fade');
    const slideShowNav = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', slideShowContainer, 'slideShowNav');
    const dots = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', secondCol, 'dots');
    const slideShowCaption = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', secondCol, 'slideShowCaption');
    slideShowCaption.textContent = 'More comfortable space';
    const firstImg = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', firstSlide);
    firstImg.src = _resources_story_img1_jpg__WEBPACK_IMPORTED_MODULE_3__;
    const secondImg = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', secondSlide);
    secondImg.src = _resources_story_img2_jpg__WEBPACK_IMPORTED_MODULE_4__;
    const thirdImg = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', thirdSlide);
    thirdImg.src = _resources_story_img3_jpg__WEBPACK_IMPORTED_MODULE_5__;
    const prev = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('a', slideShowNav);
    prev.classList.add('prev');
    prev.setAttribute('id', 'prev');
    const next = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('a', slideShowNav);
    next.classList.add('next');
    next.setAttribute('id', 'next');
    prev.innerHTML = '&#10094;';
    next.innerHTML = '&#10095;';
    const firstDot = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('span', dots);
    const secondDot = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('span', dots);
    const thirdDot = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('span', dots);
    firstDot.classList.add('dot');
    secondDot.classList.add('dot');
    thirdDot.classList.add('dot');
  }
  function _createDrinksMenu() {

  }

  // Render to the DOM


  function render() {
    _createFeatures();
    _createAboutUs();
    _createAboutUsFirstCol();
    _createAboutUsSecondCol();
    _createDrinksMenu();
  }

  return {
    render,
  }

})();



/***/ }),

/***/ "./src/headerBlock/resources/TEALAX-transparent.png":
/*!**********************************************************!*\
  !*** ./src/headerBlock/resources/TEALAX-transparent.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9ae7dc1d75435a7408.png";

/***/ }),

/***/ "./src/headerBlock/resources/home-bg-slideshow1.jpg":
/*!**********************************************************!*\
  !*** ./src/headerBlock/resources/home-bg-slideshow1.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "415485375acd1e372265.jpg";

/***/ }),

/***/ "./src/mainContent/resources/about-img.jpg":
/*!*************************************************!*\
  !*** ./src/mainContent/resources/about-img.jpg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b5b7b946867c7e5c00.jpg";

/***/ }),

/***/ "./src/mainContent/resources/cheezo.tippy-tea.jpg":
/*!********************************************************!*\
  !*** ./src/mainContent/resources/cheezo.tippy-tea.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bfda72d91a70eac6b1b.jpg";

/***/ }),

/***/ "./src/mainContent/resources/grapefruit-overflow.jpg":
/*!***********************************************************!*\
  !*** ./src/mainContent/resources/grapefruit-overflow.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4519d88186da011bc67.jpg";

/***/ }),

/***/ "./src/mainContent/resources/home-bg-slideshow2.jpg":
/*!**********************************************************!*\
  !*** ./src/mainContent/resources/home-bg-slideshow2.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3598f2a2f49f87f7b02f.jpg";

/***/ }),

/***/ "./src/mainContent/resources/mt.brown-sugar-milk-tea.jpg":
/*!***************************************************************!*\
  !*** ./src/mainContent/resources/mt.brown-sugar-milk-tea.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4221eedee687390dd08.jpg";

/***/ }),

/***/ "./src/mainContent/resources/mt.house-milk-tea.jpg":
/*!*********************************************************!*\
  !*** ./src/mainContent/resources/mt.house-milk-tea.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eccdbbaf86963df4a35f.jpg";

/***/ }),

/***/ "./src/mainContent/resources/mt.thai-tea.jpg":
/*!***************************************************!*\
  !*** ./src/mainContent/resources/mt.thai-tea.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5f6dfc8bb3e77362a9e.jpg";

/***/ }),

/***/ "./src/mainContent/resources/mt.vintage-black-milk-tea.jpg":
/*!*****************************************************************!*\
  !*** ./src/mainContent/resources/mt.vintage-black-milk-tea.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "308c777781d25b7bd437.jpg";

/***/ }),

/***/ "./src/mainContent/resources/story-img1.jpg":
/*!**************************************************!*\
  !*** ./src/mainContent/resources/story-img1.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a06feaed951427a4f60f.jpg";

/***/ }),

/***/ "./src/mainContent/resources/story-img2.jpg":
/*!**************************************************!*\
  !*** ./src/mainContent/resources/story-img2.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed2f1cd1779508515fcd.jpg";

/***/ }),

/***/ "./src/mainContent/resources/story-img3.jpg":
/*!**************************************************!*\
  !*** ./src/mainContent/resources/story-img3.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efe9eab3d3a3b7ae0688.jpg";

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
/* harmony import */ var _headerBlock_headerBlock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headerBlock/headerBlock.js */ "./src/headerBlock/headerBlock.js");
/* harmony import */ var _mainContent_mainContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainContent/mainContent.js */ "./src/mainContent/mainContent.js");
/* harmony import */ var _footerBlock_footerBlock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footerBlock/footerBlock.js */ "./src/footerBlock/footerBlock.js");






( function() {
  
  function _init() {
    _headerBlock_headerBlock_js__WEBPACK_IMPORTED_MODULE_2__.headerBlock.render();
    _mainContent_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.mainContent.render();
    _footerBlock_footerBlock_js__WEBPACK_IMPORTED_MODULE_4__.footerBlock.render();
  }

  _init();

})();

// Function slide show
const slideShow = ( function() {
  // Cache DOM
    const slides = Array.from(document.getElementsByClassName('slideShow'));
    const dots = Array.from(document.getElementsByClassName('dot'));
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    // Init
    let slideIndex = 0;
    showSlide(slideIndex);
    
    // Show slide by SlideIndex
    function showSlide(n) {
      slides.map( slide => {
        slide.style.display = 'none';
      })
      dots.map( dot => {
        dot.classList.remove('active');
      })
      if (n > slides.length - 1) {
        slideIndex = 0;
      }
      if ( n < 0) {
        slideIndex = slides.length - 1;
      }
      slides[slideIndex].style.display = 'block';
      dots[slideIndex].classList.add('active');
    }

    // Show current slide
    dots.forEach( (dot, index) => {
      dot.addEventListener('click', function() {
        currentSlide(index)
      });
    })
    function currentSlide(n) {
      showSlide(slideIndex = n);
    }

    // Next or prev slide
    prev.addEventListener('click', function() {
      nextSlide(-1);
    });
    next.addEventListener('click',function() {
      nextSlide(1);
    });
    function nextSlide(n) {
      showSlide(slideIndex += n);
    }
})();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlckJsb2NrL2hlYWRlckJsb2NrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgYmxvY2tzID0gKCBmdW5jdGlvbigpIHtcblxuICBjb25zdCBfbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBza2VsZXRvbkhUTUwoKSB7XG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnaGVhZGVyJykpO1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ21haW4nKSk7XG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnZm9vdGVyJykpO1xuICB9XG4gIGZ1bmN0aW9uIG5ld0Jsb2NrKG5hbWUpe1xuICAgIGNvbnN0IGJsb2NrID0gYWRkRWxlbWVudCgnZGl2Jyk7XG4gICAgYmxvY2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgIHJldHVybiBibG9jaztcbiAgfVxuICBmdW5jdGlvbiBmZWF0dXJlQ29sdW1uKFxuICAgIG5vZGUsXG4gICAgY29sQ2xhc3NOYW1lLCBcbiAgICBzdWJDb2xDbGFzc05hbWUsIFxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcbiAgICBmaXJzdEZlYXR1cmVJY29uQ2xhc3NOYW1lLFxuICAgIHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lLCBcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXG4gICAgZmVhdHVyZVRpdGxlQ29udGVudFxuICAgICkge1xuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZChjb2xDbGFzc05hbWUpO1xuICAgIGNvbnN0IHN1YkNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBjb2wpO1xuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb25Db250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIHN1YkNvbCk7XG4gICAgZmVhdHVyZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChmZWF0dXJlSWNvbkNvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoc2Vjb25kRmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XG4gICAgZmVhdHVyZVRpdGxlLmNsYXNzTGlzdC5hZGQoZmVhdHVyZVRpdGxlQ2xhc3NOYW1lKTtcbiAgICBmZWF0dXJlVGl0bGUudGV4dENvbnRlbnQgPSBmZWF0dXJlVGl0bGVDb250ZW50O1xuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUl0ZW0oYXJyLCBpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcbiAgICBhcnIucHVzaChtZW51SXRlbSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBuZXdNZW51TGluayhpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBhZGRFbGVtZW50KCdsaScsICcnLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IG5ld0l0ZW1MaW5rID0gYWRkRWxlbWVudCgnYScsIG5ld0l0ZW0pO1xuICAgIG5ld0l0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgbmV3SXRlbUxpbmsuaW5uZXJIVE1MID0gbWVudU5hbWU7XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheU1lbnUobm9kZSwgYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxlbWVudChlbGUsIG5vZGUsIGNsYXNzTmFtZSwgaWROYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSl9XG4gICAgaWYgKGlkTmFtZSkge2VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSl9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSW1nRmlndXJlKG5vZGUsIGltZ1NyYywgY2FwdGlvbikge1xuICAgIGNvbnN0IGZpZ1dyYXAgPSBhZGRFbGVtZW50KCdkaXYnLCBub2RlLCAnZmlndXJlV3JhcCcpO1xuICAgIGNvbnN0IGltZyA9IGFkZEVsZW1lbnQoJ2ltZycsIGZpZ1dyYXAsICdmaWd1cmVJbWcnKTtcbiAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IGgzID0gYWRkRWxlbWVudCgnaDMnLCBmaWdXcmFwLCAnZmlndXJlQ2FwdGlvbicpO1xuICAgIGgzLnRleHRDb250ZW50ID0gY2FwdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBmaWdXcmFwO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUVsZW1lbnQoaWROYW1lLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWROYW1lKTtcbiAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgfVxuICBmdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgX21haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICB9XG4gIHJldHVybiB7XG4gICAgc2tlbGV0b25IVE1MLFxuICAgIGFkZEVsZW1lbnQsXG4gICAgbmV3QmxvY2ssXG4gICAgbmV3TWVudUxpbmssXG4gICAgbmV3TWVudUl0ZW0sXG4gICAgZGlzcGxheU1lbnUsXG4gICAgZmVhdHVyZUNvbHVtbixcbiAgICBjcmVhdGVJbWdGaWd1cmUsXG4gICAgdG9nZ2xlRWxlbWVudCxcbiAgICBjbGVhclBhZ2UsXG4gIH1cbn0gKSgpO1xuXG5leHBvcnQge2Jsb2Nrc307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4uL2Jsb2Nrcy5qcyc7XG4vLyBpbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcbi8vIGltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG4vLyBpbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG5cbmNvbnN0IGZvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDcmVhdGUgc2VjdGlvbnNcbiAgZnVuY3Rpb24gX2NyZWF0ZUZvb3RlckZpcnN0Q29sKCkge1xuICAgIGNvbnN0IGZpcnN0Rm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IGpvaW5VcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzJyk7XG4gICAgam9pblVzLnRleHRDb250ZW50ID0gJ0pvaW4gVXMnO1xuICAgIGNvbnN0IGpvaW5Vc0Rlc2MgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRGVzYycpO1xuICAgIGpvaW5Vc0Rlc2MudGV4dENvbnRlbnQgPSAnQWx3YXlzIGxvb2tpbmcgZm9yIGZyaWVuZGx5IHN0YWZmIHdpdGggcG9zaXRpdmUgYXR0aXR1ZGVzISBQbGVhc2Ugc3VibWl0IHlvdXIgcmVzdW1lIHRvJztcbiAgICBjb25zdCBqb2luVXNFbWFpbExpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRW1haWxMaW5rJyk7XG4gICAgam9pblVzRW1haWxMaW5rLmlubmVySFRNTCA9ICdoZWxsb0B0ZWFsYXguY29tJztcbiAgICBqb2luVXNFbWFpbExpbmsuaHJlZiA9ICdtYWlsdG86aGVsbG9AdGVhbGF4LmNvbSc7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUZvb3RlclNlY29uZENvbCgpIHtcbiAgICBjb25zdCBzZWNvbmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcbiAgICBjb25zdCBsb2NhdGlvbkFkZHIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQWRkcicpO1xuICAgIGxvY2F0aW9uQWRkci50ZXh0Q29udGVudCA9ICcxMjM0IEJlbGxhaXJlJztcbiAgICBjb25zdCBsb2NhdGlvbkNpdHkgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQ2l0eScpO1xuICAgIGxvY2F0aW9uQ2l0eS50ZXh0Q29udGVudCA9ICdIb3VzdG9uLCBUWCA3NzAzNic7XG4gICAgY29uc3QgbG9jYXRpb25QaG9uZU51bWJlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25QaG9uZU51bWJlcicpO1xuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMjgxLTk5OS0wOTA5JztcbiAgICBcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlRm9vdGVyVGhpcmRDb2woKSB7XG4gICAgY29uc3QgdGhpcmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNUaXRsZScpO1xuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSE9VUlMnO1xuICAgIGNvbnN0IGhvdXJzRGF0ZXMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNEYXRlcycpO1xuICAgIGhvdXJzRGF0ZXMudGV4dENvbnRlbnQgPSAnU1VOREFZIC0gRlJJREFZJztcbiAgICBjb25zdCBob3Vyc0hvdXJzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzSG91cnMnKTtcbiAgICBob3Vyc0hvdXJzLnRleHRDb250ZW50ID0gJzExOjAwIEFNIC0gOTowMCBQTSc7XG4gIH1cbiAgXG4gIC8vIFJlbmRlciB0byB0aGUgRE9NXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBfY3JlYXRlRm9vdGVyRmlyc3RDb2woKTtcbiAgICBfY3JlYXRlRm9vdGVyU2Vjb25kQ29sKCk7XG4gICAgX2NyZWF0ZUZvb3RlclRoaXJkQ29sKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfVxufSkoKTtcblxuZXhwb3J0IHtmb290ZXJCbG9ja307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4uL2Jsb2Nrcy5qcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cxLmpwZyc7XG5cbmNvbnN0IGhlYWRlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDYWNoZSBET01cbiAgLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuXG4gIC8vIENyZWF0aW5nIHNlY3Rpb25zXG4gIGZ1bmN0aW9uIF9zdHlsZUhlYWRlckJsb2NrKCkge1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk0LCAyMSwgMCwgLjUpICwgcmdiYSgyNTUsIDE5NywgMCwgLjUpKSwgdXJsKCcke2JhY2tncm91bmRJbWFnZVNyY30nKWA7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZU5hdkJhcigpIHtcbiAgICBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgaGVhZGVyLCAnJywgJ21haW5OYXYnKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlTG9nbygpIHtcbiAgICBjb25zdCBsb2dvRGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OYXYsICdsb2dvRGl2Jyk7XG4gICAgY29uc3QgbWFpbkxvZ28gPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgbG9nb0RpdiwgJ21haW5Mb2dvJywgJ21haW5Mb2dvJyk7XG4gICAgbWFpbkxvZ28uc3JjID0gTG9nbztcbiAgICBjb25zdCBob21lcGFnZUxpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGxvZ29EaXYsICcnLCAnbWFpbkxvZ29MaW5rJyk7XG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlTW9iaWxlTWVudUljb24oKSB7XG4gICAgY29uc3QgbWVudURpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTmF2LCAnbWVudURpdicpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWVudURpdiwgJ21vYmlsZU1lbnUnLCAnbW9iaWxlTWVudScpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVJY29uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2knLCBtb2JpbGVNZW51LCAnZmFzJyk7XG4gICAgbW9iaWxlTWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgIG1vYmlsZU1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYnVyZ2VyTWVudScpO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVOYXZNZW51KCkge1xuICAgIGNvbnN0IE1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVEaXYnKTtcbiAgICBjb25zdCBtYWluTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbWVudURpdiwgJ21haW5NZW51Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdmZWF0dXJlc0xpbmsnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2Fib3V0TGluaycsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnbWVudUxpbmsnLCAnbWVudUxpc3QnLCAnTWVudScpO1xuICAgIGJsb2Nrcy5kaXNwbGF5TWVudShtYWluTWVudSwgTWVudUFycik7XG4gIH1cblxuICAvLyBSZW5kZXIgdG8gdGhlIERPTVxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgX3N0eWxlSGVhZGVyQmxvY2soKVxuICAgIF9jcmVhdGVOYXZCYXIoKTtcbiAgICBfY3JlYXRlTG9nbygpO1xuICAgIF9jcmVhdGVNb2JpbGVNZW51SWNvbigpO1xuICAgIF9jcmVhdGVOYXZNZW51KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfVxuXG59KSgpO1xuXG5leHBvcnQge2hlYWRlckJsb2NrfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG5pbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG5pbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbmltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG5pbXBvcnQgaG91c2VNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmhvdXNlLW1pbGstdGVhLmpwZyc7XG5pbXBvcnQgYnJvd25TdWdhck1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuYnJvd24tc3VnYXItbWlsay10ZWEuanBnJztcbmltcG9ydCB0aGFpVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnRoYWktdGVhLmpwZyc7XG5pbXBvcnQgdmludGFnZUJsYWNrTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC52aW50YWdlLWJsYWNrLW1pbGstdGVhLmpwZyc7XG5pbXBvcnQgY2hlZXNlSmFzbWluZVNyYyBmcm9tICcuL3Jlc291cmNlcy9jaGVlem8udGlwcHktdGVhLmpwZyc7XG5pbXBvcnQgZ3JhcGVGcnVpdFNyYyBmcm9tICcuL3Jlc291cmNlcy9ncmFwZWZydWl0LW92ZXJmbG93LmpwZyc7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDYWNoZSBET01cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICAvLyBDcmVhdGUgc2VjdGlvbnNcbiAgZnVuY3Rpb24gX2NyZWF0ZUZlYXR1cmVzKCkge1xuICAgIGNvbnN0IGZlYXR1cmVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnJywgJ2ZlYXR1cmVzJyk7XG4gICAgY29uc3QgZmVhdHVyZXNIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmZWF0dXJlcywgJ2ZlYXR1cmVIZWFkZXInKTtcbiAgICBmZWF0dXJlc0hlYWRlci50ZXh0Q29udGVudCA9ICdGZWF0dXJlcyc7XG4gICAgY29uc3QgZmVhdHVyZXNDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZmVhdHVyZXMsICdmZWF0dXJlc0NvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBmZWF0dXJlcyBjb2x1bW5zXG4gICAgYmxvY2tzLmZlYXR1cmVDb2x1bW4oXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcbiAgICAgICdmZWF0dXJlQ29sJyxcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXG4gICAgICAnZmVhdHVyZUljb24nLFxuICAgICAgJ2ZhJyxcbiAgICAgICdmYS1jb2ZmZWUnLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnVEVBJ1xuICAgICk7XG4gICAgYmxvY2tzLmZlYXR1cmVDb2x1bW4oXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcbiAgICAgICdmZWF0dXJlQ29sJyxcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXG4gICAgICAnZmVhdHVyZUljb24nLFxuICAgICAgJ2ZhJyxcbiAgICAgICdmYS1jdXRsZXJ5JyxcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxuICAgICAgJ0JBS0VSWSdcbiAgICApO1xuICAgIGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtaGVhcnQnLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnU1dFRVQnXG4gICAgKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVcygpIHtcbiAgICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnYWJvdXRVc0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW1hcnlIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDInLCBhYm91dFVzQ29udGFpbmVyLCAncHJpbWFyeUhlYWRlcicpO1xuICAgIHByaW1hcnlIZWFkZXIudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgICBwcmltYXJ5SGVhZGVyLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJztcblxuICAgIC8vIE1haW4gYmxvY2sgc3ViIGhlYWRlclxuICAgIGNvbnN0IHN1YkhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoNCcsIGFib3V0VXNDb250YWluZXIsICdzdWJIZWFkZXInKTtcbiAgICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBkZWxpY2lvdXMgdGVhIGhvdXNlIHNpbmNlIDIwMTknXG5cbiAgICAvLyBNYWluIGJsb2NrIGNvbnRlbnRcbiAgICBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRhaW5lciwgJ2Fib3V0VXNDb250ZW50JywgJ2Fib3V0VXNDb250ZW50JylcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCkge1xuICAgIGNvbnN0IGZpcnN0Q29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250ZW50LCAnZmlyc3RDb2wnKTtcbiAgICBjb25zdCBpbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgZmlyc3RDb2wsICdmaXJzdENvbEltZycpO1xuICAgIGltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbWcuc3JjID0gZmlyc3RDb2xJbWdTcmM7XG4gICAgY29uc3QgaW1nQ2FwID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdENvbCwgJ2ltZ0NhcCcpO1xuICAgIGltZ0NhcC50ZXh0Q29udGVudCA9ICdXZSBNYWtlIGV2ZXJ0aGluZyB3aXRoIExPVkUnO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCkge1xuICAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ3NlY29uZENvbCcpO1xuXG4gICAgLy8gTWFpbiBibG9jayBjb250ZW50IHNlY29uZCBjb2x1bW4gc2xpZGVzaG93XG4gICAgY29uc3Qgc2xpZGVTaG93Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3Qgc2Vjb25kU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3QgdGhpcmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgdGhpcmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgY29uc3Qgc2xpZGVTaG93TmF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvd05hdicpO1xuICAgIGNvbnN0IGRvdHMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnZG90cycpO1xuICAgIGNvbnN0IHNsaWRlU2hvd0NhcHRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NhcHRpb24nKTtcbiAgICBzbGlkZVNob3dDYXB0aW9uLnRleHRDb250ZW50ID0gJ01vcmUgY29tZm9ydGFibGUgc3BhY2UnO1xuICAgIGNvbnN0IGZpcnN0SW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0U2xpZGUpO1xuICAgIGZpcnN0SW1nLnNyYyA9IHN0b3J5SW1nMVNyYztcbiAgICBjb25zdCBzZWNvbmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgc2Vjb25kU2xpZGUpO1xuICAgIHNlY29uZEltZy5zcmMgPSBzdG9yeUltZzJTcmM7XG4gICAgY29uc3QgdGhpcmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgdGhpcmRTbGlkZSk7XG4gICAgdGhpcmRJbWcuc3JjID0gc3RvcnlJbWczU3JjO1xuICAgIGNvbnN0IHByZXYgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XG4gICAgcHJldi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgcHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcbiAgICBjb25zdCBuZXh0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgIG5leHQuc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XG4gICAgcHJldi5pbm5lckhUTUwgPSAnJiMxMDA5NDsnO1xuICAgIG5leHQuaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcbiAgICBjb25zdCBmaXJzdERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgY29uc3Qgc2Vjb25kRG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgICBjb25zdCB0aGlyZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgZmlyc3REb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgc2Vjb25kRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgIHRoaXJkRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVEcmlua3NNZW51KCkge1xuXG4gIH1cblxuICAvLyBSZW5kZXIgdG8gdGhlIERPTVxuXG5cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIF9jcmVhdGVGZWF0dXJlcygpO1xuICAgIF9jcmVhdGVBYm91dFVzKCk7XG4gICAgX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpO1xuICAgIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCk7XG4gICAgX2NyZWF0ZURyaW5rc01lbnUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7bWFpbkNvbnRlbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXJCbG9jayB9IGZyb20gJy4vaGVhZGVyQmxvY2svaGVhZGVyQmxvY2suanMnO1xuaW1wb3J0IHsgbWFpbkNvbnRlbnQgfSBmcm9tICcuL21haW5Db250ZW50L21haW5Db250ZW50LmpzJztcbmltcG9ydCB7IGZvb3RlckJsb2NrIH0gZnJvbSAnLi9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyc7XG5cbiggZnVuY3Rpb24oKSB7XG4gIFxuICBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICBoZWFkZXJCbG9jay5yZW5kZXIoKTtcbiAgICBtYWluQ29udGVudC5yZW5kZXIoKTtcbiAgICBmb290ZXJCbG9jay5yZW5kZXIoKTtcbiAgfVxuXG4gIF9pbml0KCk7XG5cbn0pKCk7XG5cbi8vIEZ1bmN0aW9uIHNsaWRlIHNob3dcbmNvbnN0IHNsaWRlU2hvdyA9ICggZnVuY3Rpb24oKSB7XG4gIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVTaG93JykpO1xuICAgIGNvbnN0IGRvdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2RvdCcpKTtcbiAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcblxuICAgIC8vIEluaXRcbiAgICBsZXQgc2xpZGVJbmRleCA9IDA7XG4gICAgc2hvd1NsaWRlKHNsaWRlSW5kZXgpO1xuICAgIFxuICAgIC8vIFNob3cgc2xpZGUgYnkgU2xpZGVJbmRleFxuICAgIGZ1bmN0aW9uIHNob3dTbGlkZShuKSB7XG4gICAgICBzbGlkZXMubWFwKCBzbGlkZSA9PiB7XG4gICAgICAgIHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9KVxuICAgICAgZG90cy5tYXAoIGRvdCA9PiB7XG4gICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pXG4gICAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSAwO1xuICAgICAgfVxuICAgICAgaWYgKCBuIDwgMCkge1xuICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkb3RzW3NsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIC8vIFNob3cgY3VycmVudCBzbGlkZVxuICAgIGRvdHMuZm9yRWFjaCggKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJyZW50U2xpZGUoaW5kZXgpXG4gICAgICB9KTtcbiAgICB9KVxuICAgIGZ1bmN0aW9uIGN1cnJlbnRTbGlkZShuKSB7XG4gICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCA9IG4pO1xuICAgIH1cblxuICAgIC8vIE5leHQgb3IgcHJldiBzbGlkZVxuICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG5leHRTbGlkZSgtMSk7XG4gICAgfSk7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0U2xpZGUoMSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKG4pIHtcbiAgICAgIHNob3dTbGlkZShzbGlkZUluZGV4ICs9IG4pO1xuICAgIH1cbn0pKCk7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=