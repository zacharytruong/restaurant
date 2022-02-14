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
    // mainMenu.classList.add('dropDown');
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
  function createFeatures() {
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
  function createAboutUs() {
    const aboutUsContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainContent, 'aboutUsContainer', 'aboutUsContainer');
    const primaryHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h2', aboutUsContainer, 'primaryHeader');
    primaryHeader.textContent = 'Our Story';
    primaryHeader.style.textTransform = 'uppercase';

    // Main block sub header
    const subHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h4', aboutUsContainer, 'subHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', aboutUsContainer, 'aboutUsContent', 'aboutUsContent');
    _createAboutUsFirstCol();
    _createAboutUsSecondCol();
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
  function createDrinksMenu() {
    const drinksMenuContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainContent, 'drinksMenuContainer', 'drinksMenuContainer');
    const primaryHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h2', drinksMenuContainer, 'primaryHeader');
    primaryHeader.textContent = 'MENU';
    primaryHeader.style.textTransform = 'uppercase';

    // Sub header
    const subHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h4', drinksMenuContainer, 'subHeader');
    subHeader.innerHTML = '<span>⬡</span> ORGANIC FRUIT <span>⬡</span> HOT AVAILABLE';

    // Gallery
    const gallery = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', drinksMenuContainer, 'gallery', 'gallery');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_house_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_6__, 'house milk tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_brown_sugar_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_7__, 'brown sugar milk tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_thai_tea_jpg__WEBPACK_IMPORTED_MODULE_8__, 'thai tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_vintage_black_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_9__, 'vintage black tea milk tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_cheezo_tippy_tea_jpg__WEBPACK_IMPORTED_MODULE_10__, 'cheese jasmine tippy tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_grapefruit_overflow_jpg__WEBPACK_IMPORTED_MODULE_11__, 'grapegruit overflow');
  }

  return {
    createFeatures,
    createAboutUs,
    createDrinksMenu
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

  _init();

  // Cache DOM
  const mainMenu = document.querySelector('.mainMenu');

  // Functions
  mainLogoLink.addEventListener('click', _showFeatures);
  featuresLink.addEventListener('click', _showFeatures);
  aboutLink.addEventListener('click', _showAboutUs);
  menuLink.addEventListener('click', _showDrinksMenu);
  mobileMenu.addEventListener('click', _showMobileMenu);

  function _showFeatures() {
    features.classList.remove('hideElement');
    aboutUsContainer.classList.add('hideElement');
    drinksMenuContainer.classList.add('hideElement');
  }
  function _showAboutUs() {
    features.classList.add('hideElement');
    aboutUsContainer.classList.remove('hideElement');
    drinksMenuContainer.classList.add('hideElement');
  }
  function _showDrinksMenu() {
    features.classList.add('hideElement');
    aboutUsContainer.classList.add('hideElement');
    drinksMenuContainer.classList.remove('hideElement');
  }
  function _showMobileMenu() {
    mainMenu.classList.toggle('dropDown');
  }
  function _init() {
    _headerBlock_headerBlock_js__WEBPACK_IMPORTED_MODULE_2__.headerBlock.render();
    _mainContent_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.mainContent.createFeatures();
    _mainContent_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.mainContent.createAboutUs();
    _mainContent_mainContent_js__WEBPACK_IMPORTED_MODULE_3__.mainContent.createDrinksMenu();
    _showFeatures();
    _footerBlock_footerBlock_js__WEBPACK_IMPORTED_MODULE_4__.footerBlock.render();
  }
  
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
      if (!slides[0]) {
        return
      } else {
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
    }

    // Show current slide
    if (!dots[0]) {
      return
    } else {
      dots.forEach( (dot, index) => {
        dot.addEventListener('click', function() {
          currentSlide(index)
        });
      })
    }
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlEQUFpQjtBQUM1QyxtQkFBbUIseURBQWlCO0FBQ3BDO0FBQ0EsdUJBQXVCLHlEQUFpQjtBQUN4QztBQUNBLDRCQUE0Qix5REFBaUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseURBQWlCO0FBQzdDLHFCQUFxQix5REFBaUI7QUFDdEM7QUFDQSx5QkFBeUIseURBQWlCO0FBQzFDO0FBQ0EseUJBQXlCLHlEQUFpQjtBQUMxQztBQUNBLGdDQUFnQyx5REFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIseURBQWlCO0FBQzVDLHVCQUF1Qix5REFBaUI7QUFDeEM7QUFDQSx1QkFBdUIseURBQWlCO0FBQ3hDO0FBQ0EsdUJBQXVCLHlEQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERvQztBQUNrQjtBQUNjO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUhBQW1ILDhEQUFrQixDQUFDO0FBQ3RJO0FBQ0E7QUFDQSxJQUFJLHlEQUFpQjtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CLHlEQUFpQjtBQUNyQyxxQkFBcUIseURBQWlCO0FBQ3RDLG1CQUFtQiw4REFBSTtBQUN2Qix5QkFBeUIseURBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5REFBaUI7QUFDckMsdUJBQXVCLHlEQUFpQjtBQUN4QywyQkFBMkIseURBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBaUI7QUFDdEM7QUFDQSxJQUFJLDBEQUFrQjtBQUN0QixJQUFJLDBEQUFrQjtBQUN0QixJQUFJLDBEQUFrQjtBQUN0QixJQUFJLDBEQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REb0M7QUFDZ0M7QUFDYjtBQUNEO0FBQ0E7QUFDQTtBQUNVO0FBQ1c7QUFDdEI7QUFDMEI7QUFDZjtBQUNBO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseURBQWlCO0FBQ3RDLDJCQUEyQix5REFBaUI7QUFDNUM7QUFDQSw4QkFBOEIseURBQWlCO0FBQy9DO0FBQ0E7QUFDQSxJQUFJLDREQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlEQUFpQjtBQUM5QywwQkFBMEIseURBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBaUI7QUFDdEMsZ0JBQWdCLHlEQUFpQjtBQUNqQztBQUNBLGNBQWMscURBQWM7QUFDNUIsbUJBQW1CLHlEQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseURBQWlCO0FBQ3ZDO0FBQ0E7QUFDQSwrQkFBK0IseURBQWlCO0FBQ2hELHVCQUF1Qix5REFBaUI7QUFDeEMsd0JBQXdCLHlEQUFpQjtBQUN6Qyx1QkFBdUIseURBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBaUI7QUFDMUMsaUJBQWlCLHlEQUFpQjtBQUNsQyw2QkFBNkIseURBQWlCO0FBQzlDO0FBQ0EscUJBQXFCLHlEQUFpQjtBQUN0QyxtQkFBbUIsc0RBQVk7QUFDL0Isc0JBQXNCLHlEQUFpQjtBQUN2QyxvQkFBb0Isc0RBQVk7QUFDaEMscUJBQXFCLHlEQUFpQjtBQUN0QyxtQkFBbUIsc0RBQVk7QUFDL0IsaUJBQWlCLHlEQUFpQjtBQUNsQztBQUNBO0FBQ0EsaUJBQWlCLHlEQUFpQjtBQUNsQztBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDhCQUE4QjtBQUM5QixxQkFBcUIseURBQWlCO0FBQ3RDLHNCQUFzQix5REFBaUI7QUFDdkMscUJBQXFCLHlEQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlEQUFpQjtBQUNqRCwwQkFBMEIseURBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlEQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQWlCO0FBQ3JDLElBQUksOERBQXNCLFVBQVUsNkRBQWU7QUFDbkQsSUFBSSw4REFBc0IsVUFBVSxtRUFBb0I7QUFDeEQsSUFBSSw4REFBc0IsVUFBVSx1REFBVTtBQUM5QyxJQUFJLDhEQUFzQixVQUFVLHFFQUFzQjtBQUMxRCxJQUFJLDhEQUFzQixVQUFVLDZEQUFnQjtBQUNwRCxJQUFJLDhEQUFzQixVQUFVLGdFQUFhO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0lBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ0E7QUFDc0M7QUFDQTtBQUNBO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyRUFBa0I7QUFDdEIsSUFBSSxtRkFBMEI7QUFDOUIsSUFBSSxrRkFBeUI7QUFDN0IsSUFBSSxxRkFBNEI7QUFDaEM7QUFDQSxJQUFJLDJFQUFrQjtBQUN0QjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Jlc2V0LmNzcz9jZTM4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlckJsb2NrL2hlYWRlckJsb2NrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbkNvbnRlbnQvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgYmxvY2tzID0gKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgY29uc3QgX21haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XHJcblxyXG4gIGZ1bmN0aW9uIHNrZWxldG9uSFRNTCgpIHtcclxuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2hlYWRlcicpKTtcclxuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ21haW4nKSk7XHJcbiAgICBfbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvY2tzLm5ld0Jsb2NrKCdmb290ZXInKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld0Jsb2NrKG5hbWUpe1xyXG4gICAgY29uc3QgYmxvY2sgPSBhZGRFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcclxuICAgIHJldHVybiBibG9jaztcclxuICB9XHJcbiAgZnVuY3Rpb24gZmVhdHVyZUNvbHVtbihcclxuICAgIG5vZGUsXHJcbiAgICBjb2xDbGFzc05hbWUsIFxyXG4gICAgc3ViQ29sQ2xhc3NOYW1lLCBcclxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcclxuICAgIGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUsXHJcbiAgICBzZWNvbmRGZWF0dXJlSWNvbkNsYXNzTmFtZSwgXHJcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXHJcbiAgICBmZWF0dXJlVGl0bGVDb250ZW50XHJcbiAgICApIHtcclxuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbC5jbGFzc0xpc3QuYWRkKGNvbENsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBzdWJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgY29sKTtcclxuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBmZWF0dXJlSWNvbkNvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgc3ViQ29sKTtcclxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZmVhdHVyZUljb25Db250YWluZXJDbGFzc05hbWUpO1xyXG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcclxuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoZmlyc3RGZWF0dXJlSWNvbkNsYXNzTmFtZSk7XHJcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XHJcbiAgICBmZWF0dXJlVGl0bGUuY2xhc3NMaXN0LmFkZChmZWF0dXJlVGl0bGVDbGFzc05hbWUpO1xyXG4gICAgZmVhdHVyZVRpdGxlLnRleHRDb250ZW50ID0gZmVhdHVyZVRpdGxlQ29udGVudDtcclxuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld01lbnVJdGVtKGFyciwgaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcclxuICAgIGFyci5wdXNoKG1lbnVJdGVtKTtcclxuICAgIHJldHVybiBhcnI7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKSB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0gYWRkRWxlbWVudCgnbGknLCAnJywgY2xhc3NOYW1lKTtcclxuICAgIGNvbnN0IG5ld0l0ZW1MaW5rID0gYWRkRWxlbWVudCgnYScsIG5ld0l0ZW0pO1xyXG4gICAgbmV3SXRlbUxpbmsuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcclxuICAgIG5ld0l0ZW1MaW5rLmlubmVySFRNTCA9IG1lbnVOYW1lO1xyXG4gICAgcmV0dXJuIG5ld0l0ZW07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRpc3BsYXlNZW51KG5vZGUsIGFycikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZSwgbm9kZSwgY2xhc3NOYW1lLCBpZE5hbWUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XHJcbiAgICBpZiAoY2xhc3NOYW1lKSB7ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSl9XHJcbiAgICBpZiAoaWROYW1lKSB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKX1cclxuICAgIGlmIChub2RlKSB7XHJcbiAgICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUltZ0ZpZ3VyZShub2RlLCBpbWdTcmMsIGNhcHRpb24pIHtcclxuICAgIGNvbnN0IGZpZ1dyYXAgPSBhZGRFbGVtZW50KCdkaXYnLCBub2RlLCAnZmlndXJlV3JhcCcpO1xyXG4gICAgY29uc3QgaW1nID0gYWRkRWxlbWVudCgnaW1nJywgZmlnV3JhcCwgJ2ZpZ3VyZUltZycpO1xyXG4gICAgaW1nLnNyYyA9IGltZ1NyYztcclxuICAgIGNvbnN0IGgzID0gYWRkRWxlbWVudCgnaDMnLCBmaWdXcmFwLCAnZmlndXJlQ2FwdGlvbicpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBjYXB0aW9uLnRvVXBwZXJDYXNlKCk7XHJcbiAgICByZXR1cm4gZmlnV3JhcDtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG9nZ2xlRWxlbWVudChpZE5hbWUsIGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTmFtZSk7XHJcbiAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xyXG4gICAgX21haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgc2tlbGV0b25IVE1MLFxyXG4gICAgYWRkRWxlbWVudCxcclxuICAgIG5ld0Jsb2NrLFxyXG4gICAgbmV3TWVudUxpbmssXHJcbiAgICBuZXdNZW51SXRlbSxcclxuICAgIGRpc3BsYXlNZW51LFxyXG4gICAgZmVhdHVyZUNvbHVtbixcclxuICAgIGNyZWF0ZUltZ0ZpZ3VyZSxcclxuICAgIHRvZ2dsZUVsZW1lbnQsXHJcbiAgICBjbGVhclBhZ2UsXHJcbiAgfVxyXG59ICkoKTtcclxuXHJcbmV4cG9ydCB7YmxvY2tzfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcclxuLy8gaW1wb3J0IExvZ28gZnJvbSAnLi9yZXNvdXJjZXMvVEVBTEFYLXRyYW5zcGFyZW50LnBuZyc7XHJcbi8vIGltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XHJcbi8vIGltcG9ydCBmaXJzdENvbEltZ1NyYyBmcm9tICcuL3Jlc291cmNlcy9hYm91dC1pbWcuanBnJztcclxuLy8gaW1wb3J0IHN0b3J5SW1nMVNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcxLmpwZyc7XHJcbi8vIGltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xyXG4vLyBpbXBvcnQgc3RvcnlJbWczU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzMuanBnJztcclxuXHJcbmNvbnN0IGZvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy8gQ3JlYXRlIHNlY3Rpb25zXHJcbiAgZnVuY3Rpb24gX2NyZWF0ZUZvb3RlckZpcnN0Q29sKCkge1xyXG4gICAgY29uc3QgZmlyc3RGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XHJcbiAgICBjb25zdCBqb2luVXMgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5VcycpO1xyXG4gICAgam9pblVzLnRleHRDb250ZW50ID0gJ0pvaW4gVXMnO1xyXG4gICAgY29uc3Qgam9pblVzRGVzYyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNEZXNjJyk7XHJcbiAgICBqb2luVXNEZXNjLnRleHRDb250ZW50ID0gJ0Fsd2F5cyBsb29raW5nIGZvciBmcmllbmRseSBzdGFmZiB3aXRoIHBvc2l0aXZlIGF0dGl0dWRlcyEgUGxlYXNlIHN1Ym1pdCB5b3VyIHJlc3VtZSB0byc7XHJcbiAgICBjb25zdCBqb2luVXNFbWFpbExpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRW1haWxMaW5rJyk7XHJcbiAgICBqb2luVXNFbWFpbExpbmsuaW5uZXJIVE1MID0gJ2hlbGxvQHRlYWxheC5jb20nO1xyXG4gICAgam9pblVzRW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmhlbGxvQHRlYWxheC5jb20nO1xyXG4gIH1cclxuICBmdW5jdGlvbiBfY3JlYXRlRm9vdGVyU2Vjb25kQ29sKCkge1xyXG4gICAgY29uc3Qgc2Vjb25kRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbicpO1xyXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTE9DQVRJT04nO1xyXG4gICAgY29uc3QgbG9jYXRpb25BZGRyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbkFkZHInKTtcclxuICAgIGxvY2F0aW9uQWRkci50ZXh0Q29udGVudCA9ICcxMjM0IEJlbGxhaXJlJztcclxuICAgIGNvbnN0IGxvY2F0aW9uQ2l0eSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25DaXR5Jyk7XHJcbiAgICBsb2NhdGlvbkNpdHkudGV4dENvbnRlbnQgPSAnSG91c3RvbiwgVFggNzcwMzYnO1xyXG4gICAgY29uc3QgbG9jYXRpb25QaG9uZU51bWJlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25QaG9uZU51bWJlcicpO1xyXG4gICAgbG9jYXRpb25QaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcyODEtOTk5LTA5MDknO1xyXG4gICAgXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9jcmVhdGVGb290ZXJUaGlyZENvbCgpIHtcclxuICAgIGNvbnN0IHRoaXJkRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xyXG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNUaXRsZScpO1xyXG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIT1VSUyc7XHJcbiAgICBjb25zdCBob3Vyc0RhdGVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzRGF0ZXMnKTtcclxuICAgIGhvdXJzRGF0ZXMudGV4dENvbnRlbnQgPSAnU1VOREFZIC0gRlJJREFZJztcclxuICAgIGNvbnN0IGhvdXJzSG91cnMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNIb3VycycpO1xyXG4gICAgaG91cnNIb3Vycy50ZXh0Q29udGVudCA9ICcxMTowMCBBTSAtIDk6MDAgUE0nO1xyXG4gIH1cclxuICBcclxuICAvLyBSZW5kZXIgdG8gdGhlIERPTVxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIF9jcmVhdGVGb290ZXJGaXJzdENvbCgpO1xyXG4gICAgX2NyZWF0ZUZvb3RlclNlY29uZENvbCgpO1xyXG4gICAgX2NyZWF0ZUZvb3RlclRoaXJkQ29sKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyLFxyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7Zm9vdGVyQmxvY2t9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzEuanBnJztcclxuXHJcbmNvbnN0IGhlYWRlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcclxuXHJcbiAgLy8gQ2FjaGUgRE9NXHJcblxyXG4gIC8vIENyZWF0aW5nIHNlY3Rpb25zXHJcbiAgZnVuY3Rpb24gX3N0eWxlSGVhZGVyQmxvY2soKSB7XHJcbiAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDE5NCwgMjEsIDAsIC41KSAsIHJnYmEoMjU1LCAxOTcsIDAsIC41KSksIHVybCgnJHtiYWNrZ3JvdW5kSW1hZ2VTcmN9JylgO1xyXG4gIH1cclxuICBmdW5jdGlvbiBfY3JlYXRlTmF2QmFyKCkge1xyXG4gICAgYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGhlYWRlciwgJycsICdtYWluTmF2Jyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9jcmVhdGVMb2dvKCkge1xyXG4gICAgY29uc3QgbG9nb0RpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTmF2LCAnbG9nb0RpdicpO1xyXG4gICAgY29uc3QgbWFpbkxvZ28gPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgbG9nb0RpdiwgJ21haW5Mb2dvJywgJ21haW5Mb2dvJyk7XHJcbiAgICBtYWluTG9nby5zcmMgPSBMb2dvO1xyXG4gICAgY29uc3QgaG9tZXBhZ2VMaW5rID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBsb2dvRGl2LCAnJywgJ21haW5Mb2dvTGluaycpO1xyXG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gX2NyZWF0ZU1vYmlsZU1lbnVJY29uKCkge1xyXG4gICAgY29uc3QgbWVudURpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTmF2LCAnbWVudURpdicpO1xyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtZW51RGl2LCAnbW9iaWxlTWVudScsICdtb2JpbGVNZW51Jyk7XHJcbiAgICBjb25zdCBtb2JpbGVNZW51SWNvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpJywgbW9iaWxlTWVudSwgJ2ZhcycpO1xyXG4gICAgbW9iaWxlTWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xyXG4gICAgbW9iaWxlTWVudUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdoYW1idXJnZXJNZW51Jyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9jcmVhdGVOYXZNZW51KCkge1xyXG4gICAgY29uc3QgTWVudUFyciA9IFtdO1xyXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51RGl2Jyk7XHJcbiAgICBjb25zdCBtYWluTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbWVudURpdiwgJ21haW5NZW51Jyk7XHJcbiAgICAvLyBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wRG93bicpO1xyXG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdmZWF0dXJlc0xpbmsnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcclxuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnYWJvdXRMaW5rJywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XHJcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ21lbnVMaW5rJywgJ21lbnVMaXN0JywgJ01lbnUnKTtcclxuICAgIGJsb2Nrcy5kaXNwbGF5TWVudShtYWluTWVudSwgTWVudUFycik7XHJcbiAgfVxyXG5cclxuICAvLyBSZW5kZXIgdG8gdGhlIERPTVxyXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIF9zdHlsZUhlYWRlckJsb2NrKClcclxuICAgIF9jcmVhdGVOYXZCYXIoKTtcclxuICAgIF9jcmVhdGVMb2dvKCk7XHJcbiAgICBfY3JlYXRlTW9iaWxlTWVudUljb24oKTtcclxuICAgIF9jcmVhdGVOYXZNZW51KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyLFxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2hlYWRlckJsb2NrfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzIuanBnJztcclxuaW1wb3J0IGZpcnN0Q29sSW1nU3JjIGZyb20gJy4vcmVzb3VyY2VzL2Fib3V0LWltZy5qcGcnO1xyXG5pbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcclxuaW1wb3J0IHN0b3J5SW1nMlNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcyLmpwZyc7XHJcbmltcG9ydCBzdG9yeUltZzNTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMy5qcGcnO1xyXG5pbXBvcnQgaG91c2VNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmhvdXNlLW1pbGstdGVhLmpwZyc7XHJcbmltcG9ydCBicm93blN1Z2FyTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5icm93bi1zdWdhci1taWxrLXRlYS5qcGcnO1xyXG5pbXBvcnQgdGhhaVRlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC50aGFpLXRlYS5qcGcnO1xyXG5pbXBvcnQgdmludGFnZUJsYWNrTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC52aW50YWdlLWJsYWNrLW1pbGstdGVhLmpwZyc7XHJcbmltcG9ydCBjaGVlc2VKYXNtaW5lU3JjIGZyb20gJy4vcmVzb3VyY2VzL2NoZWV6by50aXBweS10ZWEuanBnJztcclxuaW1wb3J0IGdyYXBlRnJ1aXRTcmMgZnJvbSAnLi9yZXNvdXJjZXMvZ3JhcGVmcnVpdC1vdmVyZmxvdy5qcGcnO1xyXG5cclxuY29uc3QgbWFpbkNvbnRlbnQgPSAoIGZ1bmN0aW9uKCkge1xyXG5cclxuICAvLyBDYWNoZSBET01cclxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xyXG5cclxuICAvLyBDcmVhdGUgc2VjdGlvbnNcclxuICBmdW5jdGlvbiBjcmVhdGVGZWF0dXJlcygpIHtcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnJywgJ2ZlYXR1cmVzJyk7XHJcbiAgICBjb25zdCBmZWF0dXJlc0hlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZlYXR1cmVzLCAnZmVhdHVyZUhlYWRlcicpO1xyXG4gICAgZmVhdHVyZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnRmVhdHVyZXMnO1xyXG4gICAgY29uc3QgZmVhdHVyZXNDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZmVhdHVyZXMsICdmZWF0dXJlc0NvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAvLyBDcmVhdGUgZmVhdHVyZXMgY29sdW1uc1xyXG4gICAgYmxvY2tzLmZlYXR1cmVDb2x1bW4oXHJcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxyXG4gICAgICAnZmVhdHVyZUNvbCcsXHJcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXHJcbiAgICAgICdmZWF0dXJlSWNvbicsXHJcbiAgICAgICdmYScsXHJcbiAgICAgICdmYS1jb2ZmZWUnLFxyXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcclxuICAgICAgJ1RFQSdcclxuICAgICk7XHJcbiAgICBibG9ja3MuZmVhdHVyZUNvbHVtbihcclxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXHJcbiAgICAgICdmZWF0dXJlQ29sJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uJyxcclxuICAgICAgJ2ZhJyxcclxuICAgICAgJ2ZhLWN1dGxlcnknLFxyXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcclxuICAgICAgJ0JBS0VSWSdcclxuICAgICk7XHJcbiAgICBibG9ja3MuZmVhdHVyZUNvbHVtbihcclxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXHJcbiAgICAgICdmZWF0dXJlQ29sJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcclxuICAgICAgJ2ZlYXR1cmVJY29uJyxcclxuICAgICAgJ2ZhJyxcclxuICAgICAgJ2ZhLWhlYXJ0JyxcclxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXHJcbiAgICAgICdTV0VFVCdcclxuICAgICk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKSB7XHJcbiAgICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnYWJvdXRVc0NvbnRhaW5lcicsICdhYm91dFVzQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBwcmltYXJ5SGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gyJywgYWJvdXRVc0NvbnRhaW5lciwgJ3ByaW1hcnlIZWFkZXInKTtcclxuICAgIHByaW1hcnlIZWFkZXIudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcclxuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xyXG5cclxuICAgIC8vIE1haW4gYmxvY2sgc3ViIGhlYWRlclxyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgYWJvdXRVc0NvbnRhaW5lciwgJ3N1YkhlYWRlcicpO1xyXG4gICAgc3ViSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgZGVsaWNpb3VzIHRlYSBob3VzZSBzaW5jZSAyMDE5J1xyXG5cclxuICAgIC8vIE1haW4gYmxvY2sgY29udGVudFxyXG4gICAgYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250YWluZXIsICdhYm91dFVzQ29udGVudCcsICdhYm91dFVzQ29udGVudCcpO1xyXG4gICAgX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpO1xyXG4gICAgX2NyZWF0ZUFib3V0VXNTZWNvbmRDb2woKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpIHtcclxuICAgIGNvbnN0IGZpcnN0Q29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250ZW50LCAnZmlyc3RDb2wnKTtcclxuICAgIGNvbnN0IGltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBmaXJzdENvbCwgJ2ZpcnN0Q29sSW1nJyk7XHJcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XHJcbiAgICBpbWcuc3JjID0gZmlyc3RDb2xJbWdTcmM7XHJcbiAgICBjb25zdCBpbWdDYXAgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIGZpcnN0Q29sLCAnaW1nQ2FwJyk7XHJcbiAgICBpbWdDYXAudGV4dENvbnRlbnQgPSAnV2UgTWFrZSBldmVydGhpbmcgd2l0aCBMT1ZFJztcclxuICB9XHJcbiAgZnVuY3Rpb24gX2NyZWF0ZUFib3V0VXNTZWNvbmRDb2woKSB7XHJcbiAgICBjb25zdCBzZWNvbmRDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRlbnQsICdzZWNvbmRDb2wnKTtcclxuXHJcbiAgICAvLyBNYWluIGJsb2NrIGNvbnRlbnQgc2Vjb25kIGNvbHVtbiBzbGlkZXNob3dcclxuICAgIGNvbnN0IHNsaWRlU2hvd0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzZWNvbmRDb2wsICdzbGlkZVNob3dDb250YWluZXInKTtcclxuICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XHJcbiAgICBjb25zdCBzZWNvbmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcclxuICAgIGNvbnN0IHRoaXJkU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XHJcbiAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIHNlY29uZFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIHRoaXJkU2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xyXG4gICAgY29uc3Qgc2xpZGVTaG93TmF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvd05hdicpO1xyXG4gICAgY29uc3QgZG90cyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzZWNvbmRDb2wsICdkb3RzJyk7XHJcbiAgICBjb25zdCBzbGlkZVNob3dDYXB0aW9uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRDb2wsICdzbGlkZVNob3dDYXB0aW9uJyk7XHJcbiAgICBzbGlkZVNob3dDYXB0aW9uLnRleHRDb250ZW50ID0gJ01vcmUgY29tZm9ydGFibGUgc3BhY2UnO1xyXG4gICAgY29uc3QgZmlyc3RJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgZmlyc3RTbGlkZSk7XHJcbiAgICBmaXJzdEltZy5zcmMgPSBzdG9yeUltZzFTcmM7XHJcbiAgICBjb25zdCBzZWNvbmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgc2Vjb25kU2xpZGUpO1xyXG4gICAgc2Vjb25kSW1nLnNyYyA9IHN0b3J5SW1nMlNyYztcclxuICAgIGNvbnN0IHRoaXJkSW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIHRoaXJkU2xpZGUpO1xyXG4gICAgdGhpcmRJbWcuc3JjID0gc3RvcnlJbWczU3JjO1xyXG4gICAgY29uc3QgcHJldiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgc2xpZGVTaG93TmF2KTtcclxuICAgIHByZXYuY2xhc3NMaXN0LmFkZCgncHJldicpO1xyXG4gICAgcHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcclxuICAgIGNvbnN0IG5leHQgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XHJcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcclxuICAgIG5leHQuc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XHJcbiAgICBwcmV2LmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XHJcbiAgICBuZXh0LmlubmVySFRNTCA9ICcmIzEwMDk1Oyc7XHJcbiAgICBjb25zdCBmaXJzdERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XHJcbiAgICBjb25zdCBzZWNvbmREb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xyXG4gICAgY29uc3QgdGhpcmREb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xyXG4gICAgZmlyc3REb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XHJcbiAgICBzZWNvbmREb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XHJcbiAgICB0aGlyZERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY3JlYXRlRHJpbmtzTWVudSgpIHtcclxuICAgIGNvbnN0IGRyaW5rc01lbnVDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbkNvbnRlbnQsICdkcmlua3NNZW51Q29udGFpbmVyJywgJ2RyaW5rc01lbnVDb250YWluZXInKTtcclxuICAgIGNvbnN0IHByaW1hcnlIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDInLCBkcmlua3NNZW51Q29udGFpbmVyLCAncHJpbWFyeUhlYWRlcicpO1xyXG4gICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdNRU5VJztcclxuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xyXG5cclxuICAgIC8vIFN1YiBoZWFkZXJcclxuICAgIGNvbnN0IHN1YkhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoNCcsIGRyaW5rc01lbnVDb250YWluZXIsICdzdWJIZWFkZXInKTtcclxuICAgIHN1YkhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4+4qyhPC9zcGFuPiBPUkdBTklDIEZSVUlUIDxzcGFuPuKsoTwvc3Bhbj4gSE9UIEFWQUlMQUJMRSc7XHJcblxyXG4gICAgLy8gR2FsbGVyeVxyXG4gICAgY29uc3QgZ2FsbGVyeSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBkcmlua3NNZW51Q29udGFpbmVyLCAnZ2FsbGVyeScsICdnYWxsZXJ5Jyk7XHJcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGhvdXNlTWlsa1RlYVNyYywgJ2hvdXNlIG1pbGsgdGVhJyk7XHJcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGJyb3duU3VnYXJNaWxrVGVhU3JjLCAnYnJvd24gc3VnYXIgbWlsayB0ZWEnKTtcclxuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgdGhhaVRlYVNyYywgJ3RoYWkgdGVhJyk7XHJcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIHZpbnRhZ2VCbGFja01pbGtUZWFTcmMsICd2aW50YWdlIGJsYWNrIHRlYSBtaWxrIHRlYScpO1xyXG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBjaGVlc2VKYXNtaW5lU3JjLCAnY2hlZXNlIGphc21pbmUgdGlwcHkgdGVhJyk7XHJcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGdyYXBlRnJ1aXRTcmMsICdncmFwZWdydWl0IG92ZXJmbG93Jyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY3JlYXRlRmVhdHVyZXMsXHJcbiAgICBjcmVhdGVBYm91dFVzLFxyXG4gICAgY3JlYXRlRHJpbmtzTWVudVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQge21haW5Db250ZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IGhlYWRlckJsb2NrIH0gZnJvbSAnLi9oZWFkZXJCbG9jay9oZWFkZXJCbG9jay5qcyc7XHJcbmltcG9ydCB7IG1haW5Db250ZW50IH0gZnJvbSAnLi9tYWluQ29udGVudC9tYWluQ29udGVudC5qcyc7XHJcbmltcG9ydCB7IGZvb3RlckJsb2NrIH0gZnJvbSAnLi9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyc7XHJcblxyXG4oIGZ1bmN0aW9uKCkge1xyXG5cclxuICBfaW5pdCgpO1xyXG5cclxuICAvLyBDYWNoZSBET01cclxuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTWVudScpO1xyXG5cclxuICAvLyBGdW5jdGlvbnNcclxuICBtYWluTG9nb0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0ZlYXR1cmVzKTtcclxuICBmZWF0dXJlc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0ZlYXR1cmVzKTtcclxuICBhYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0Fib3V0VXMpO1xyXG4gIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dEcmlua3NNZW51KTtcclxuICBtb2JpbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dNb2JpbGVNZW51KTtcclxuXHJcbiAgZnVuY3Rpb24gX3Nob3dGZWF0dXJlcygpIHtcclxuICAgIGZlYXR1cmVzLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgICBhYm91dFVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgICBkcmlua3NNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9zaG93QWJvdXRVcygpIHtcclxuICAgIGZlYXR1cmVzLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgICBhYm91dFVzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgICBkcmlua3NNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9zaG93RHJpbmtzTWVudSgpIHtcclxuICAgIGZlYXR1cmVzLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgICBhYm91dFVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgICBkcmlua3NNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVFbGVtZW50Jyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9zaG93TW9iaWxlTWVudSgpIHtcclxuICAgIG1haW5NZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3BEb3duJyk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIF9pbml0KCkge1xyXG4gICAgaGVhZGVyQmxvY2sucmVuZGVyKCk7XHJcbiAgICBtYWluQ29udGVudC5jcmVhdGVGZWF0dXJlcygpO1xyXG4gICAgbWFpbkNvbnRlbnQuY3JlYXRlQWJvdXRVcygpO1xyXG4gICAgbWFpbkNvbnRlbnQuY3JlYXRlRHJpbmtzTWVudSgpO1xyXG4gICAgX3Nob3dGZWF0dXJlcygpO1xyXG4gICAgZm9vdGVyQmxvY2sucmVuZGVyKCk7XHJcbiAgfVxyXG4gIFxyXG59KSgpO1xyXG5cclxuXHJcbi8vIEZ1bmN0aW9uIHNsaWRlIHNob3dcclxuY29uc3Qgc2xpZGVTaG93ID0gKCBmdW5jdGlvbigpIHtcclxuICAvLyBDYWNoZSBET01cclxuICAgIGNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVTaG93JykpO1xyXG4gICAgY29uc3QgZG90cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG90JykpO1xyXG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XHJcbiAgICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcclxuXHJcbiAgICAvLyBJbml0XHJcbiAgICBsZXQgc2xpZGVJbmRleCA9IDA7XHJcbiAgICBzaG93U2xpZGUoc2xpZGVJbmRleCk7XHJcbiAgICBcclxuICAgIC8vIFNob3cgc2xpZGUgYnkgU2xpZGVJbmRleFxyXG4gICAgZnVuY3Rpb24gc2hvd1NsaWRlKG4pIHtcclxuICAgICAgaWYgKCFzbGlkZXNbMF0pIHtcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzbGlkZXMubWFwKCBzbGlkZSA9PiB7XHJcbiAgICAgICAgICBzbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG90cy5tYXAoIGRvdCA9PiB7XHJcbiAgICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBzbGlkZUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCBuIDwgMCkge1xyXG4gICAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZG90c1tzbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgY3VycmVudCBzbGlkZVxyXG4gICAgaWYgKCFkb3RzWzBdKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG90cy5mb3JFYWNoKCAoZG90LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgY3VycmVudFNsaWRlKGluZGV4KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBjdXJyZW50U2xpZGUobikge1xyXG4gICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCA9IG4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE5leHQgb3IgcHJldiBzbGlkZVxyXG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXh0U2xpZGUoLTEpO1xyXG4gICAgfSk7XHJcbiAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcclxuICAgICAgbmV4dFNsaWRlKDEpO1xyXG4gICAgfSk7XHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUobikge1xyXG4gICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCArPSBuKTtcclxuICAgIH1cclxufSkoKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9