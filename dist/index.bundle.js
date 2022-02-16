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

/***/ "./src/aboutUs/aboutUs.js":
/*!********************************!*\
  !*** ./src/aboutUs/aboutUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutUs": () => (/* binding */ aboutUs)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_home_bg_slideshow2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/home-bg-slideshow2.jpg */ "./src/aboutUs/resources/home-bg-slideshow2.jpg");
/* harmony import */ var _resources_about_img_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/about-img.jpg */ "./src/aboutUs/resources/about-img.jpg");
/* harmony import */ var _resources_story_img1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/story-img1.jpg */ "./src/aboutUs/resources/story-img1.jpg");
/* harmony import */ var _resources_story_img2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/story-img2.jpg */ "./src/aboutUs/resources/story-img2.jpg");
/* harmony import */ var _resources_story_img3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/story-img3.jpg */ "./src/aboutUs/resources/story-img3.jpg");






// import houseMilkTeaSrc from './resources/mt.house-milk-tea.jpg';
// import brownSugarMilkTeaSrc from './resources/mt.brown-sugar-milk-tea.jpg';
// import thaiTeaSrc from './resources/mt.thai-tea.jpg';
// import vintageBlackMilkTeaSrc from './resources/mt.vintage-black-milk-tea.jpg';
// import cheeseJasmineSrc from './resources/cheezo.tippy-tea.jpg';
// import grapeFruitSrc from './resources/grapefruit-overflow.jpg';

const aboutUs = ( function() {

  // Cache DOM
  const mainContent = document.getElementById('mainContent');

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

  return {
    createAboutUs,
  }

})();



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
  }
} )();



/***/ }),

/***/ "./src/drinksMenu/drinksMenu.js":
/*!**************************************!*\
  !*** ./src/drinksMenu/drinksMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drinksMenu": () => (/* binding */ drinksMenu)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_mt_house_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/mt.house-milk-tea.jpg */ "./src/drinksMenu/resources/mt.house-milk-tea.jpg");
/* harmony import */ var _resources_mt_brown_sugar_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/mt.brown-sugar-milk-tea.jpg */ "./src/drinksMenu/resources/mt.brown-sugar-milk-tea.jpg");
/* harmony import */ var _resources_mt_thai_tea_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/mt.thai-tea.jpg */ "./src/drinksMenu/resources/mt.thai-tea.jpg");
/* harmony import */ var _resources_mt_vintage_black_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/mt.vintage-black-milk-tea.jpg */ "./src/drinksMenu/resources/mt.vintage-black-milk-tea.jpg");
/* harmony import */ var _resources_cheezo_tippy_tea_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/cheezo.tippy-tea.jpg */ "./src/drinksMenu/resources/cheezo.tippy-tea.jpg");
/* harmony import */ var _resources_grapefruit_overflow_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/grapefruit-overflow.jpg */ "./src/drinksMenu/resources/grapefruit-overflow.jpg");

// import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
// import firstColImgSrc from './resources/about-img.jpg';
// import storyImg1Src from './resources/story-img1.jpg';
// import storyImg2Src from './resources/story-img2.jpg';
// import storyImg3Src from './resources/story-img3.jpg';







const drinksMenu = ( function() {

  // Cache DOM
  const mainContent = document.getElementById('mainContent');

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
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_house_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_1__, 'house milk tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_brown_sugar_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_2__, 'brown sugar milk tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_thai_tea_jpg__WEBPACK_IMPORTED_MODULE_3__, 'thai tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_mt_vintage_black_milk_tea_jpg__WEBPACK_IMPORTED_MODULE_4__, 'vintage black tea milk tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_cheezo_tippy_tea_jpg__WEBPACK_IMPORTED_MODULE_5__, 'cheese jasmine tippy tea');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.createImgFigure(gallery, _resources_grapefruit_overflow_jpg__WEBPACK_IMPORTED_MODULE_6__, 'grapegruit overflow');
  }

  return {
    createDrinksMenu
  }

})();



/***/ }),

/***/ "./src/features/features.js":
/*!**********************************!*\
  !*** ./src/features/features.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "features": () => (/* binding */ features)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks.js */ "./src/blocks.js");

// import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
// import firstColImgSrc from './resources/about-img.jpg';
// import storyImg1Src from './resources/story-img1.jpg';
// import storyImg2Src from './resources/story-img2.jpg';
// import storyImg3Src from './resources/story-img3.jpg';
// import houseMilkTeaSrc from './resources/mt.house-milk-tea.jpg';
// import brownSugarMilkTeaSrc from './resources/mt.brown-sugar-milk-tea.jpg';
// import thaiTeaSrc from './resources/mt.thai-tea.jpg';
// import vintageBlackMilkTeaSrc from './resources/mt.vintage-black-milk-tea.jpg';
// import cheeseJasmineSrc from './resources/cheezo.tippy-tea.jpg';
// import grapeFruitSrc from './resources/grapefruit-overflow.jpg';

const features = ( function() {

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
  // function createAboutUs() {
  //   const aboutUsContainer = blocks.addElement('div', mainContent, 'aboutUsContainer', 'aboutUsContainer');
  //   const primaryHeader = blocks.addElement('h2', aboutUsContainer, 'primaryHeader');
  //   primaryHeader.textContent = 'Our Story';
  //   primaryHeader.style.textTransform = 'uppercase';

  //   // Main block sub header
  //   const subHeader = blocks.addElement('h4', aboutUsContainer, 'subHeader');
  //   subHeader.textContent = 'Your delicious tea house since 2019'

  //   // Main block content
  //   blocks.addElement('div', aboutUsContainer, 'aboutUsContent', 'aboutUsContent');
  //   _createAboutUsFirstCol();
  //   _createAboutUsSecondCol();
  // }
  // function _createAboutUsFirstCol() {
  //   const firstCol = blocks.addElement('div', aboutUsContent, 'firstCol');
  //   const img = blocks.addElement('img', firstCol, 'firstColImg');
  //   img.style.width = '100%';
  //   img.src = firstColImgSrc;
  //   const imgCap = blocks.addElement('p', firstCol, 'imgCap');
  //   imgCap.textContent = 'We Make everthing with LOVE';
  // }
  // function _createAboutUsSecondCol() {
  //   const secondCol = blocks.addElement('div', aboutUsContent, 'secondCol');

  //   // Main block content second column slideshow
  //   const slideShowContainer = blocks.addElement('div', secondCol, 'slideShowContainer');
  //   const firstSlide = blocks.addElement('div', slideShowContainer, 'slideShow');
  //   const secondSlide = blocks.addElement('div', slideShowContainer, 'slideShow');
  //   const thirdSlide = blocks.addElement('div', slideShowContainer, 'slideShow');
  //   firstSlide.classList.add('fade');
  //   secondSlide.classList.add('fade');
  //   thirdSlide.classList.add('fade');
  //   const slideShowNav = blocks.addElement('div', slideShowContainer, 'slideShowNav');
  //   const dots = blocks.addElement('div', secondCol, 'dots');
  //   const slideShowCaption = blocks.addElement('p', secondCol, 'slideShowCaption');
  //   slideShowCaption.textContent = 'More comfortable space';
  //   const firstImg = blocks.addElement('img', firstSlide);
  //   firstImg.src = storyImg1Src;
  //   const secondImg = blocks.addElement('img', secondSlide);
  //   secondImg.src = storyImg2Src;
  //   const thirdImg = blocks.addElement('img', thirdSlide);
  //   thirdImg.src = storyImg3Src;
  //   const prev = blocks.addElement('a', slideShowNav);
  //   prev.classList.add('prev');
  //   prev.setAttribute('id', 'prev');
  //   const next = blocks.addElement('a', slideShowNav);
  //   next.classList.add('next');
  //   next.setAttribute('id', 'next');
  //   prev.innerHTML = '&#10094;';
  //   next.innerHTML = '&#10095;';
  //   const firstDot = blocks.addElement('span', dots);
  //   const secondDot = blocks.addElement('span', dots);
  //   const thirdDot = blocks.addElement('span', dots);
  //   firstDot.classList.add('dot');
  //   secondDot.classList.add('dot');
  //   thirdDot.classList.add('dot');
  // }
  // function createDrinksMenu() {
  //   const drinksMenuContainer = blocks.addElement('div', mainContent, 'drinksMenuContainer', 'drinksMenuContainer');
  //   const primaryHeader = blocks.addElement('h2', drinksMenuContainer, 'primaryHeader');
  //   primaryHeader.textContent = 'MENU';
  //   primaryHeader.style.textTransform = 'uppercase';

  //   // Sub header
  //   const subHeader = blocks.addElement('h4', drinksMenuContainer, 'subHeader');
  //   subHeader.innerHTML = '<span>⬡</span> ORGANIC FRUIT <span>⬡</span> HOT AVAILABLE';

  //   // Gallery
  //   const gallery = blocks.addElement('div', drinksMenuContainer, 'gallery', 'gallery');
  //   blocks.createImgFigure(gallery, houseMilkTeaSrc, 'house milk tea');
  //   blocks.createImgFigure(gallery, brownSugarMilkTeaSrc, 'brown sugar milk tea');
  //   blocks.createImgFigure(gallery, thaiTeaSrc, 'thai tea');
  //   blocks.createImgFigure(gallery, vintageBlackMilkTeaSrc, 'vintage black tea milk tea');
  //   blocks.createImgFigure(gallery, cheeseJasmineSrc, 'cheese jasmine tippy tea');
  //   blocks.createImgFigure(gallery, grapeFruitSrc, 'grapegruit overflow');
  // }

  return {
    createFeatures,
  }

})();



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

/***/ "./src/aboutUs/resources/about-img.jpg":
/*!*********************************************!*\
  !*** ./src/aboutUs/resources/about-img.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b5b7b946867c7e5c00.jpg";

/***/ }),

/***/ "./src/aboutUs/resources/home-bg-slideshow2.jpg":
/*!******************************************************!*\
  !*** ./src/aboutUs/resources/home-bg-slideshow2.jpg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3598f2a2f49f87f7b02f.jpg";

/***/ }),

/***/ "./src/aboutUs/resources/story-img1.jpg":
/*!**********************************************!*\
  !*** ./src/aboutUs/resources/story-img1.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a06feaed951427a4f60f.jpg";

/***/ }),

/***/ "./src/aboutUs/resources/story-img2.jpg":
/*!**********************************************!*\
  !*** ./src/aboutUs/resources/story-img2.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed2f1cd1779508515fcd.jpg";

/***/ }),

/***/ "./src/aboutUs/resources/story-img3.jpg":
/*!**********************************************!*\
  !*** ./src/aboutUs/resources/story-img3.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efe9eab3d3a3b7ae0688.jpg";

/***/ }),

/***/ "./src/drinksMenu/resources/cheezo.tippy-tea.jpg":
/*!*******************************************************!*\
  !*** ./src/drinksMenu/resources/cheezo.tippy-tea.jpg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bfda72d91a70eac6b1b.jpg";

/***/ }),

/***/ "./src/drinksMenu/resources/grapefruit-overflow.jpg":
/*!**********************************************************!*\
  !*** ./src/drinksMenu/resources/grapefruit-overflow.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f4519d88186da011bc67.jpg";

/***/ }),

/***/ "./src/drinksMenu/resources/mt.brown-sugar-milk-tea.jpg":
/*!**************************************************************!*\
  !*** ./src/drinksMenu/resources/mt.brown-sugar-milk-tea.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4221eedee687390dd08.jpg";

/***/ }),

/***/ "./src/drinksMenu/resources/mt.house-milk-tea.jpg":
/*!********************************************************!*\
  !*** ./src/drinksMenu/resources/mt.house-milk-tea.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eccdbbaf86963df4a35f.jpg";

/***/ }),

/***/ "./src/drinksMenu/resources/mt.thai-tea.jpg":
/*!**************************************************!*\
  !*** ./src/drinksMenu/resources/mt.thai-tea.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5f6dfc8bb3e77362a9e.jpg";

/***/ }),

/***/ "./src/drinksMenu/resources/mt.vintage-black-milk-tea.jpg":
/*!****************************************************************!*\
  !*** ./src/drinksMenu/resources/mt.vintage-black-milk-tea.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "308c777781d25b7bd437.jpg";

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
/* harmony import */ var _features_features_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.js */ "./src/features/features.js");
/* harmony import */ var _aboutUs_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutUs/aboutUs.js */ "./src/aboutUs/aboutUs.js");
/* harmony import */ var _drinksMenu_drinksMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drinksMenu/drinksMenu.js */ "./src/drinksMenu/drinksMenu.js");
/* harmony import */ var _footerBlock_footerBlock_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footerBlock/footerBlock.js */ "./src/footerBlock/footerBlock.js");








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
    mainContent.innerHTML = '';
    _features_features_js__WEBPACK_IMPORTED_MODULE_3__.features.createFeatures();
  }
  function _showAboutUs() {
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
    _aboutUs_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__.aboutUs.createAboutUs();
  }
  function _showDrinksMenu() {
    mainContent.innerHTML = '';
    _drinksMenu_drinksMenu_js__WEBPACK_IMPORTED_MODULE_5__.drinksMenu.createDrinksMenu();
  }
  function _showMobileMenu() {
    mainMenu.classList.toggle('dropDown');
  }
  function _init() {
    _headerBlock_headerBlock_js__WEBPACK_IMPORTED_MODULE_2__.headerBlock.render();
    _features_features_js__WEBPACK_IMPORTED_MODULE_3__.features.createFeatures();
    _footerBlock_footerBlock_js__WEBPACK_IMPORTED_MODULE_6__.footerBlock.render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXRVcy9hYm91dFVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYmxvY2tzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZHJpbmtzTWVudS9kcmlua3NNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZmVhdHVyZXMvZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlckJsb2NrL2hlYWRlckJsb2NrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzIuanBnJztcbmltcG9ydCBmaXJzdENvbEltZ1NyYyBmcm9tICcuL3Jlc291cmNlcy9hYm91dC1pbWcuanBnJztcbmltcG9ydCBzdG9yeUltZzFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMS5qcGcnO1xuaW1wb3J0IHN0b3J5SW1nMlNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcyLmpwZyc7XG5pbXBvcnQgc3RvcnlJbWczU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzMuanBnJztcbi8vIGltcG9ydCBob3VzZU1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuaG91c2UtbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCBicm93blN1Z2FyTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5icm93bi1zdWdhci1taWxrLXRlYS5qcGcnO1xuLy8gaW1wb3J0IHRoYWlUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQudGhhaS10ZWEuanBnJztcbi8vIGltcG9ydCB2aW50YWdlQmxhY2tNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnZpbnRhZ2UtYmxhY2stbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCBjaGVlc2VKYXNtaW5lU3JjIGZyb20gJy4vcmVzb3VyY2VzL2NoZWV6by50aXBweS10ZWEuanBnJztcbi8vIGltcG9ydCBncmFwZUZydWl0U3JjIGZyb20gJy4vcmVzb3VyY2VzL2dyYXBlZnJ1aXQtb3ZlcmZsb3cuanBnJztcblxuY29uc3QgYWJvdXRVcyA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ2FjaGUgRE9NXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcbiAgICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnYWJvdXRVc0NvbnRhaW5lcicsICdhYm91dFVzQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJpbWFyeUhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMicsIGFib3V0VXNDb250YWluZXIsICdwcmltYXJ5SGVhZGVyJyk7XG4gICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgU3RvcnknO1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gICAgLy8gTWFpbiBibG9jayBzdWIgaGVhZGVyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgYWJvdXRVc0NvbnRhaW5lciwgJ3N1YkhlYWRlcicpO1xuICAgIHN1YkhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIGRlbGljaW91cyB0ZWEgaG91c2Ugc2luY2UgMjAxOSdcblxuICAgIC8vIE1haW4gYmxvY2sgY29udGVudFxuICAgIGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGFpbmVyLCAnYWJvdXRVc0NvbnRlbnQnLCAnYWJvdXRVc0NvbnRlbnQnKTtcbiAgICBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCk7XG4gICAgX2NyZWF0ZUFib3V0VXNTZWNvbmRDb2woKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCkge1xuICAgIGNvbnN0IGZpcnN0Q29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250ZW50LCAnZmlyc3RDb2wnKTtcbiAgICBjb25zdCBpbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgZmlyc3RDb2wsICdmaXJzdENvbEltZycpO1xuICAgIGltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbWcuc3JjID0gZmlyc3RDb2xJbWdTcmM7XG4gICAgY29uc3QgaW1nQ2FwID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdENvbCwgJ2ltZ0NhcCcpO1xuICAgIGltZ0NhcC50ZXh0Q29udGVudCA9ICdXZSBNYWtlIGV2ZXJ0aGluZyB3aXRoIExPVkUnO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCkge1xuICAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ3NlY29uZENvbCcpO1xuXG4gICAgLy8gTWFpbiBibG9jayBjb250ZW50IHNlY29uZCBjb2x1bW4gc2xpZGVzaG93XG4gICAgY29uc3Qgc2xpZGVTaG93Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3Qgc2Vjb25kU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3QgdGhpcmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgdGhpcmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgY29uc3Qgc2xpZGVTaG93TmF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvd05hdicpO1xuICAgIGNvbnN0IGRvdHMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnZG90cycpO1xuICAgIGNvbnN0IHNsaWRlU2hvd0NhcHRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NhcHRpb24nKTtcbiAgICBzbGlkZVNob3dDYXB0aW9uLnRleHRDb250ZW50ID0gJ01vcmUgY29tZm9ydGFibGUgc3BhY2UnO1xuICAgIGNvbnN0IGZpcnN0SW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0U2xpZGUpO1xuICAgIGZpcnN0SW1nLnNyYyA9IHN0b3J5SW1nMVNyYztcbiAgICBjb25zdCBzZWNvbmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgc2Vjb25kU2xpZGUpO1xuICAgIHNlY29uZEltZy5zcmMgPSBzdG9yeUltZzJTcmM7XG4gICAgY29uc3QgdGhpcmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgdGhpcmRTbGlkZSk7XG4gICAgdGhpcmRJbWcuc3JjID0gc3RvcnlJbWczU3JjO1xuICAgIGNvbnN0IHByZXYgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XG4gICAgcHJldi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgcHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcbiAgICBjb25zdCBuZXh0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgIG5leHQuc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XG4gICAgcHJldi5pbm5lckhUTUwgPSAnJiMxMDA5NDsnO1xuICAgIG5leHQuaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcbiAgICBjb25zdCBmaXJzdERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgY29uc3Qgc2Vjb25kRG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgICBjb25zdCB0aGlyZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgZmlyc3REb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgc2Vjb25kRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgIHRoaXJkRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVBYm91dFVzLFxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7YWJvdXRVc307IiwiY29uc3QgYmxvY2tzID0gKCBmdW5jdGlvbigpIHtcblxuICBjb25zdCBfbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBza2VsZXRvbkhUTUwoKSB7XG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnaGVhZGVyJykpO1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ21haW4nKSk7XG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnZm9vdGVyJykpO1xuICB9XG4gIGZ1bmN0aW9uIG5ld0Jsb2NrKG5hbWUpe1xuICAgIGNvbnN0IGJsb2NrID0gYWRkRWxlbWVudCgnZGl2Jyk7XG4gICAgYmxvY2suc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xuICAgIHJldHVybiBibG9jaztcbiAgfVxuICBmdW5jdGlvbiBmZWF0dXJlQ29sdW1uKFxuICAgIG5vZGUsXG4gICAgY29sQ2xhc3NOYW1lLCBcbiAgICBzdWJDb2xDbGFzc05hbWUsIFxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcbiAgICBmaXJzdEZlYXR1cmVJY29uQ2xhc3NOYW1lLFxuICAgIHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lLCBcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXG4gICAgZmVhdHVyZVRpdGxlQ29udGVudFxuICAgICkge1xuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZChjb2xDbGFzc05hbWUpO1xuICAgIGNvbnN0IHN1YkNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBjb2wpO1xuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb25Db250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIHN1YkNvbCk7XG4gICAgZmVhdHVyZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChmZWF0dXJlSWNvbkNvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoc2Vjb25kRmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XG4gICAgZmVhdHVyZVRpdGxlLmNsYXNzTGlzdC5hZGQoZmVhdHVyZVRpdGxlQ2xhc3NOYW1lKTtcbiAgICBmZWF0dXJlVGl0bGUudGV4dENvbnRlbnQgPSBmZWF0dXJlVGl0bGVDb250ZW50O1xuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUl0ZW0oYXJyLCBpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcbiAgICBhcnIucHVzaChtZW51SXRlbSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBuZXdNZW51TGluayhpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xuICAgIGNvbnN0IG5ld0l0ZW0gPSBhZGRFbGVtZW50KCdsaScsICcnLCBjbGFzc05hbWUpO1xuICAgIGNvbnN0IG5ld0l0ZW1MaW5rID0gYWRkRWxlbWVudCgnYScsIG5ld0l0ZW0pO1xuICAgIG5ld0l0ZW1MaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG4gICAgbmV3SXRlbUxpbmsuaW5uZXJIVE1MID0gbWVudU5hbWU7XG4gICAgcmV0dXJuIG5ld0l0ZW07XG4gIH1cbiAgZnVuY3Rpb24gZGlzcGxheU1lbnUobm9kZSwgYXJyKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoYXJyW2ldKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gYWRkRWxlbWVudChlbGUsIG5vZGUsIGNsYXNzTmFtZSwgaWROYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSl9XG4gICAgaWYgKGlkTmFtZSkge2VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSl9XG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlSW1nRmlndXJlKG5vZGUsIGltZ1NyYywgY2FwdGlvbikge1xuICAgIGNvbnN0IGZpZ1dyYXAgPSBhZGRFbGVtZW50KCdkaXYnLCBub2RlLCAnZmlndXJlV3JhcCcpO1xuICAgIGNvbnN0IGltZyA9IGFkZEVsZW1lbnQoJ2ltZycsIGZpZ1dyYXAsICdmaWd1cmVJbWcnKTtcbiAgICBpbWcuc3JjID0gaW1nU3JjO1xuICAgIGNvbnN0IGgzID0gYWRkRWxlbWVudCgnaDMnLCBmaWdXcmFwLCAnZmlndXJlQ2FwdGlvbicpO1xuICAgIGgzLnRleHRDb250ZW50ID0gY2FwdGlvbi50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBmaWdXcmFwO1xuICB9XG4gIGZ1bmN0aW9uIHRvZ2dsZUVsZW1lbnQoaWROYW1lLCBjbGFzc05hbWUpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWROYW1lKTtcbiAgICBub2RlLmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc2tlbGV0b25IVE1MLFxuICAgIGFkZEVsZW1lbnQsXG4gICAgbmV3QmxvY2ssXG4gICAgbmV3TWVudUxpbmssXG4gICAgbmV3TWVudUl0ZW0sXG4gICAgZGlzcGxheU1lbnUsXG4gICAgZmVhdHVyZUNvbHVtbixcbiAgICBjcmVhdGVJbWdGaWd1cmUsXG4gICAgdG9nZ2xlRWxlbWVudCxcbiAgfVxufSApKCk7XG5cbmV4cG9ydCB7YmxvY2tzfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcbi8vIGltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG4vLyBpbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG5pbXBvcnQgaG91c2VNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmhvdXNlLW1pbGstdGVhLmpwZyc7XG5pbXBvcnQgYnJvd25TdWdhck1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuYnJvd24tc3VnYXItbWlsay10ZWEuanBnJztcbmltcG9ydCB0aGFpVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnRoYWktdGVhLmpwZyc7XG5pbXBvcnQgdmludGFnZUJsYWNrTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC52aW50YWdlLWJsYWNrLW1pbGstdGVhLmpwZyc7XG5pbXBvcnQgY2hlZXNlSmFzbWluZVNyYyBmcm9tICcuL3Jlc291cmNlcy9jaGVlem8udGlwcHktdGVhLmpwZyc7XG5pbXBvcnQgZ3JhcGVGcnVpdFNyYyBmcm9tICcuL3Jlc291cmNlcy9ncmFwZWZydWl0LW92ZXJmbG93LmpwZyc7XG5cbmNvbnN0IGRyaW5rc01lbnUgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIC8vIENhY2hlIERPTVxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZURyaW5rc01lbnUoKSB7XG4gICAgY29uc3QgZHJpbmtzTWVudUNvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluQ29udGVudCwgJ2RyaW5rc01lbnVDb250YWluZXInLCAnZHJpbmtzTWVudUNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW1hcnlIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDInLCBkcmlua3NNZW51Q29udGFpbmVyLCAncHJpbWFyeUhlYWRlcicpO1xuICAgIHByaW1hcnlIZWFkZXIudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gICAgcHJpbWFyeUhlYWRlci5zdHlsZS50ZXh0VHJhbnNmb3JtID0gJ3VwcGVyY2FzZSc7XG5cbiAgICAvLyBTdWIgaGVhZGVyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgZHJpbmtzTWVudUNvbnRhaW5lciwgJ3N1YkhlYWRlcicpO1xuICAgIHN1YkhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4+4qyhPC9zcGFuPiBPUkdBTklDIEZSVUlUIDxzcGFuPuKsoTwvc3Bhbj4gSE9UIEFWQUlMQUJMRSc7XG5cbiAgICAvLyBHYWxsZXJ5XG4gICAgY29uc3QgZ2FsbGVyeSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBkcmlua3NNZW51Q29udGFpbmVyLCAnZ2FsbGVyeScsICdnYWxsZXJ5Jyk7XG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBob3VzZU1pbGtUZWFTcmMsICdob3VzZSBtaWxrIHRlYScpO1xuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgYnJvd25TdWdhck1pbGtUZWFTcmMsICdicm93biBzdWdhciBtaWxrIHRlYScpO1xuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgdGhhaVRlYVNyYywgJ3RoYWkgdGVhJyk7XG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCB2aW50YWdlQmxhY2tNaWxrVGVhU3JjLCAndmludGFnZSBibGFjayB0ZWEgbWlsayB0ZWEnKTtcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGNoZWVzZUphc21pbmVTcmMsICdjaGVlc2UgamFzbWluZSB0aXBweSB0ZWEnKTtcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGdyYXBlRnJ1aXRTcmMsICdncmFwZWdydWl0IG92ZXJmbG93Jyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZURyaW5rc01lbnVcbiAgfVxuXG59KSgpO1xuXG5leHBvcnQge2RyaW5rc01lbnV9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xuLy8gaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzIuanBnJztcbi8vIGltcG9ydCBmaXJzdENvbEltZ1NyYyBmcm9tICcuL3Jlc291cmNlcy9hYm91dC1pbWcuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMS5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nMlNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcyLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWczU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzMuanBnJztcbi8vIGltcG9ydCBob3VzZU1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuaG91c2UtbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCBicm93blN1Z2FyTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5icm93bi1zdWdhci1taWxrLXRlYS5qcGcnO1xuLy8gaW1wb3J0IHRoYWlUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQudGhhaS10ZWEuanBnJztcbi8vIGltcG9ydCB2aW50YWdlQmxhY2tNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnZpbnRhZ2UtYmxhY2stbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCBjaGVlc2VKYXNtaW5lU3JjIGZyb20gJy4vcmVzb3VyY2VzL2NoZWV6by50aXBweS10ZWEuanBnJztcbi8vIGltcG9ydCBncmFwZUZydWl0U3JjIGZyb20gJy4vcmVzb3VyY2VzL2dyYXBlZnJ1aXQtb3ZlcmZsb3cuanBnJztcblxuY29uc3QgZmVhdHVyZXMgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIC8vIENhY2hlIERPTVxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xuXG4gIC8vIENyZWF0ZSBzZWN0aW9uc1xuICBmdW5jdGlvbiBjcmVhdGVGZWF0dXJlcygpIHtcbiAgICBjb25zdCBmZWF0dXJlcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluQ29udGVudCwgJycsICdmZWF0dXJlcycpO1xuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmVhdHVyZXMsICdmZWF0dXJlSGVhZGVyJyk7XG4gICAgZmVhdHVyZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnRmVhdHVyZXMnO1xuICAgIGNvbnN0IGZlYXR1cmVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZlYXR1cmVzLCAnZmVhdHVyZXNDb250YWluZXInKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgZmVhdHVyZXMgY29sdW1uc1xuICAgIGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtY29mZmVlJyxcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxuICAgICAgJ1RFQSdcbiAgICApO1xuICAgIGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtY3V0bGVyeScsXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcbiAgICAgICdCQUtFUlknXG4gICAgKTtcbiAgICBibG9ja3MuZmVhdHVyZUNvbHVtbihcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxuICAgICAgJ2ZlYXR1cmVDb2wnLFxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcbiAgICAgICdmZWF0dXJlSWNvbicsXG4gICAgICAnZmEnLFxuICAgICAgJ2ZhLWhlYXJ0JyxcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxuICAgICAgJ1NXRUVUJ1xuICAgICk7XG4gIH1cbiAgLy8gZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcbiAgLy8gICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnYWJvdXRVc0NvbnRhaW5lcicsICdhYm91dFVzQ29udGFpbmVyJyk7XG4gIC8vICAgY29uc3QgcHJpbWFyeUhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMicsIGFib3V0VXNDb250YWluZXIsICdwcmltYXJ5SGVhZGVyJyk7XG4gIC8vICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgU3RvcnknO1xuICAvLyAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gIC8vICAgLy8gTWFpbiBibG9jayBzdWIgaGVhZGVyXG4gIC8vICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgYWJvdXRVc0NvbnRhaW5lciwgJ3N1YkhlYWRlcicpO1xuICAvLyAgIHN1YkhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIGRlbGljaW91cyB0ZWEgaG91c2Ugc2luY2UgMjAxOSdcblxuICAvLyAgIC8vIE1haW4gYmxvY2sgY29udGVudFxuICAvLyAgIGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGFpbmVyLCAnYWJvdXRVc0NvbnRlbnQnLCAnYWJvdXRVc0NvbnRlbnQnKTtcbiAgLy8gICBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCk7XG4gIC8vICAgX2NyZWF0ZUFib3V0VXNTZWNvbmRDb2woKTtcbiAgLy8gfVxuICAvLyBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCkge1xuICAvLyAgIGNvbnN0IGZpcnN0Q29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250ZW50LCAnZmlyc3RDb2wnKTtcbiAgLy8gICBjb25zdCBpbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgZmlyc3RDb2wsICdmaXJzdENvbEltZycpO1xuICAvLyAgIGltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgLy8gICBpbWcuc3JjID0gZmlyc3RDb2xJbWdTcmM7XG4gIC8vICAgY29uc3QgaW1nQ2FwID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdENvbCwgJ2ltZ0NhcCcpO1xuICAvLyAgIGltZ0NhcC50ZXh0Q29udGVudCA9ICdXZSBNYWtlIGV2ZXJ0aGluZyB3aXRoIExPVkUnO1xuICAvLyB9XG4gIC8vIGZ1bmN0aW9uIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCkge1xuICAvLyAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ3NlY29uZENvbCcpO1xuXG4gIC8vICAgLy8gTWFpbiBibG9jayBjb250ZW50IHNlY29uZCBjb2x1bW4gc2xpZGVzaG93XG4gIC8vICAgY29uc3Qgc2xpZGVTaG93Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NvbnRhaW5lcicpO1xuICAvLyAgIGNvbnN0IGZpcnN0U2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gIC8vICAgY29uc3Qgc2Vjb25kU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gIC8vICAgY29uc3QgdGhpcmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgLy8gICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgLy8gICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gIC8vICAgdGhpcmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gIC8vICAgY29uc3Qgc2xpZGVTaG93TmF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvd05hdicpO1xuICAvLyAgIGNvbnN0IGRvdHMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnZG90cycpO1xuICAvLyAgIGNvbnN0IHNsaWRlU2hvd0NhcHRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NhcHRpb24nKTtcbiAgLy8gICBzbGlkZVNob3dDYXB0aW9uLnRleHRDb250ZW50ID0gJ01vcmUgY29tZm9ydGFibGUgc3BhY2UnO1xuICAvLyAgIGNvbnN0IGZpcnN0SW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0U2xpZGUpO1xuICAvLyAgIGZpcnN0SW1nLnNyYyA9IHN0b3J5SW1nMVNyYztcbiAgLy8gICBjb25zdCBzZWNvbmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgc2Vjb25kU2xpZGUpO1xuICAvLyAgIHNlY29uZEltZy5zcmMgPSBzdG9yeUltZzJTcmM7XG4gIC8vICAgY29uc3QgdGhpcmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgdGhpcmRTbGlkZSk7XG4gIC8vICAgdGhpcmRJbWcuc3JjID0gc3RvcnlJbWczU3JjO1xuICAvLyAgIGNvbnN0IHByZXYgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XG4gIC8vICAgcHJldi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gIC8vICAgcHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcbiAgLy8gICBjb25zdCBuZXh0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAvLyAgIG5leHQuY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAvLyAgIG5leHQuc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XG4gIC8vICAgcHJldi5pbm5lckhUTUwgPSAnJiMxMDA5NDsnO1xuICAvLyAgIG5leHQuaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcbiAgLy8gICBjb25zdCBmaXJzdERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gIC8vICAgY29uc3Qgc2Vjb25kRG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgLy8gICBjb25zdCB0aGlyZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gIC8vICAgZmlyc3REb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gIC8vICAgc2Vjb25kRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAvLyAgIHRoaXJkRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAvLyB9XG4gIC8vIGZ1bmN0aW9uIGNyZWF0ZURyaW5rc01lbnUoKSB7XG4gIC8vICAgY29uc3QgZHJpbmtzTWVudUNvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluQ29udGVudCwgJ2RyaW5rc01lbnVDb250YWluZXInLCAnZHJpbmtzTWVudUNvbnRhaW5lcicpO1xuICAvLyAgIGNvbnN0IHByaW1hcnlIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDInLCBkcmlua3NNZW51Q29udGFpbmVyLCAncHJpbWFyeUhlYWRlcicpO1xuICAvLyAgIHByaW1hcnlIZWFkZXIudGV4dENvbnRlbnQgPSAnTUVOVSc7XG4gIC8vICAgcHJpbWFyeUhlYWRlci5zdHlsZS50ZXh0VHJhbnNmb3JtID0gJ3VwcGVyY2FzZSc7XG5cbiAgLy8gICAvLyBTdWIgaGVhZGVyXG4gIC8vICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgZHJpbmtzTWVudUNvbnRhaW5lciwgJ3N1YkhlYWRlcicpO1xuICAvLyAgIHN1YkhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4+4qyhPC9zcGFuPiBPUkdBTklDIEZSVUlUIDxzcGFuPuKsoTwvc3Bhbj4gSE9UIEFWQUlMQUJMRSc7XG5cbiAgLy8gICAvLyBHYWxsZXJ5XG4gIC8vICAgY29uc3QgZ2FsbGVyeSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBkcmlua3NNZW51Q29udGFpbmVyLCAnZ2FsbGVyeScsICdnYWxsZXJ5Jyk7XG4gIC8vICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBob3VzZU1pbGtUZWFTcmMsICdob3VzZSBtaWxrIHRlYScpO1xuICAvLyAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgYnJvd25TdWdhck1pbGtUZWFTcmMsICdicm93biBzdWdhciBtaWxrIHRlYScpO1xuICAvLyAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgdGhhaVRlYVNyYywgJ3RoYWkgdGVhJyk7XG4gIC8vICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCB2aW50YWdlQmxhY2tNaWxrVGVhU3JjLCAndmludGFnZSBibGFjayB0ZWEgbWlsayB0ZWEnKTtcbiAgLy8gICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGNoZWVzZUphc21pbmVTcmMsICdjaGVlc2UgamFzbWluZSB0aXBweSB0ZWEnKTtcbiAgLy8gICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGdyYXBlRnJ1aXRTcmMsICdncmFwZWdydWl0IG92ZXJmbG93Jyk7XG4gIC8vIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUZlYXR1cmVzLFxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7ZmVhdHVyZXN9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xuLy8gaW1wb3J0IExvZ28gZnJvbSAnLi9yZXNvdXJjZXMvVEVBTEFYLXRyYW5zcGFyZW50LnBuZyc7XG4vLyBpbXBvcnQgYmFja2dyb3VuZEltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2hvbWUtYmctc2xpZGVzaG93Mi5qcGcnO1xuLy8gaW1wb3J0IGZpcnN0Q29sSW1nU3JjIGZyb20gJy4vcmVzb3VyY2VzL2Fib3V0LWltZy5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nMVNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcxLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcyU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzIuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzNTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMy5qcGcnO1xuXG5jb25zdCBmb290ZXJCbG9jayA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ3JlYXRlIHNlY3Rpb25zXG4gIGZ1bmN0aW9uIF9jcmVhdGVGb290ZXJGaXJzdENvbCgpIHtcbiAgICBjb25zdCBmaXJzdEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCBqb2luVXMgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5VcycpO1xuICAgIGpvaW5Vcy50ZXh0Q29udGVudCA9ICdKb2luIFVzJztcbiAgICBjb25zdCBqb2luVXNEZXNjID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0Rlc2MnKTtcbiAgICBqb2luVXNEZXNjLnRleHRDb250ZW50ID0gJ0Fsd2F5cyBsb29raW5nIGZvciBmcmllbmRseSBzdGFmZiB3aXRoIHBvc2l0aXZlIGF0dGl0dWRlcyEgUGxlYXNlIHN1Ym1pdCB5b3VyIHJlc3VtZSB0byc7XG4gICAgY29uc3Qgam9pblVzRW1haWxMaW5rID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0VtYWlsTGluaycpO1xuICAgIGpvaW5Vc0VtYWlsTGluay5pbm5lckhUTUwgPSAnaGVsbG9AdGVhbGF4LmNvbSc7XG4gICAgam9pblVzRW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmhlbGxvQHRlYWxheC5jb20nO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVGb290ZXJTZWNvbmRDb2woKSB7XG4gICAgY29uc3Qgc2Vjb25kRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IGxvY2F0aW9uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICdMT0NBVElPTic7XG4gICAgY29uc3QgbG9jYXRpb25BZGRyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbkFkZHInKTtcbiAgICBsb2NhdGlvbkFkZHIudGV4dENvbnRlbnQgPSAnMTIzNCBCZWxsYWlyZSc7XG4gICAgY29uc3QgbG9jYXRpb25DaXR5ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbkNpdHknKTtcbiAgICBsb2NhdGlvbkNpdHkudGV4dENvbnRlbnQgPSAnSG91c3RvbiwgVFggNzcwMzYnO1xuICAgIGNvbnN0IGxvY2F0aW9uUGhvbmVOdW1iZXIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uUGhvbmVOdW1iZXInKTtcbiAgICBsb2NhdGlvblBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzI4MS05OTktMDkwOSc7XG4gICAgXG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUZvb3RlclRoaXJkQ29sKCkge1xuICAgIGNvbnN0IHRoaXJkRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzVGl0bGUnKTtcbiAgICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0hPVVJTJztcbiAgICBjb25zdCBob3Vyc0RhdGVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzRGF0ZXMnKTtcbiAgICBob3Vyc0RhdGVzLnRleHRDb250ZW50ID0gJ1NVTkRBWSAtIEZSSURBWSc7XG4gICAgY29uc3QgaG91cnNIb3VycyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0hvdXJzJyk7XG4gICAgaG91cnNIb3Vycy50ZXh0Q29udGVudCA9ICcxMTowMCBBTSAtIDk6MDAgUE0nO1xuICB9XG4gIFxuICAvLyBSZW5kZXIgdG8gdGhlIERPTVxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgX2NyZWF0ZUZvb3RlckZpcnN0Q29sKCk7XG4gICAgX2NyZWF0ZUZvb3RlclNlY29uZENvbCgpO1xuICAgIF9jcmVhdGVGb290ZXJUaGlyZENvbCgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn0pKCk7XG5cbmV4cG9ydCB7Zm9vdGVyQmxvY2t9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9yZXNvdXJjZXMvVEVBTEFYLXRyYW5zcGFyZW50LnBuZyc7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2hvbWUtYmctc2xpZGVzaG93MS5qcGcnO1xuXG5jb25zdCBoZWFkZXJCbG9jayA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ2FjaGUgRE9NXG5cbiAgLy8gQ3JlYXRpbmcgc2VjdGlvbnNcbiAgZnVuY3Rpb24gX3N0eWxlSGVhZGVyQmxvY2soKSB7XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxOTQsIDIxLCAwLCAuNSkgLCByZ2JhKDI1NSwgMTk3LCAwLCAuNSkpLCB1cmwoJyR7YmFja2dyb3VuZEltYWdlU3JjfScpYDtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlTmF2QmFyKCkge1xuICAgIGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBoZWFkZXIsICcnLCAnbWFpbk5hdicpO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVMb2dvKCkge1xuICAgIGNvbnN0IGxvZ29EaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5hdiwgJ2xvZ29EaXYnKTtcbiAgICBjb25zdCBtYWluTG9nbyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBsb2dvRGl2LCAnbWFpbkxvZ28nLCAnbWFpbkxvZ28nKTtcbiAgICBtYWluTG9nby5zcmMgPSBMb2dvO1xuICAgIGNvbnN0IGhvbWVwYWdlTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgbG9nb0RpdiwgJycsICdtYWluTG9nb0xpbmsnKTtcbiAgICBob21lcGFnZUxpbmsuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVNb2JpbGVNZW51SWNvbigpIHtcbiAgICBjb25zdCBtZW51RGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OYXYsICdtZW51RGl2Jyk7XG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtZW51RGl2LCAnbW9iaWxlTWVudScsICdtb2JpbGVNZW51Jyk7XG4gICAgY29uc3QgbW9iaWxlTWVudUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIG1vYmlsZU1lbnUsICdmYXMnKTtcbiAgICBtb2JpbGVNZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgbW9iaWxlTWVudUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdoYW1idXJnZXJNZW51Jyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZU5hdk1lbnUoKSB7XG4gICAgY29uc3QgTWVudUFyciA9IFtdO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudURpdicpO1xuICAgIGNvbnN0IG1haW5NZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ21lbnUnLCBtZW51RGl2LCAnbWFpbk1lbnUnKTtcbiAgICAvLyBtYWluTWVudS5jbGFzc0xpc3QuYWRkKCdkcm9wRG93bicpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnZmVhdHVyZXNMaW5rJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdhYm91dExpbmsnLCAnbWVudUxpc3QnLCAnQWJvdXQnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ21lbnVMaW5rJywgJ21lbnVMaXN0JywgJ01lbnUnKTtcbiAgICBibG9ja3MuZGlzcGxheU1lbnUobWFpbk1lbnUsIE1lbnVBcnIpO1xuICB9XG5cbiAgLy8gUmVuZGVyIHRvIHRoZSBET01cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIF9zdHlsZUhlYWRlckJsb2NrKClcbiAgICBfY3JlYXRlTmF2QmFyKCk7XG4gICAgX2NyZWF0ZUxvZ28oKTtcbiAgICBfY3JlYXRlTW9iaWxlTWVudUljb24oKTtcbiAgICBfY3JlYXRlTmF2TWVudSgpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cblxufSkoKTtcblxuZXhwb3J0IHtoZWFkZXJCbG9ja307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGhlYWRlckJsb2NrIH0gZnJvbSAnLi9oZWFkZXJCbG9jay9oZWFkZXJCbG9jay5qcyc7XG5pbXBvcnQgeyBmZWF0dXJlcyB9IGZyb20gJy4vZmVhdHVyZXMvZmVhdHVyZXMuanMnO1xuaW1wb3J0IHsgYWJvdXRVcyB9IGZyb20gJy4vYWJvdXRVcy9hYm91dFVzLmpzJztcbmltcG9ydCB7IGRyaW5rc01lbnUgfSBmcm9tICcuL2RyaW5rc01lbnUvZHJpbmtzTWVudS5qcyc7XG5pbXBvcnQgeyBmb290ZXJCbG9jayB9IGZyb20gJy4vZm9vdGVyQmxvY2svZm9vdGVyQmxvY2suanMnO1xuXG4oIGZ1bmN0aW9uKCkge1xuXG4gIF9pbml0KCk7XG5cbiAgLy8gQ2FjaGUgRE9NXG4gIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5NZW51Jyk7XG5cbiAgLy8gRnVuY3Rpb25zXG4gIG1haW5Mb2dvTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93RmVhdHVyZXMpO1xuICBmZWF0dXJlc0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0ZlYXR1cmVzKTtcbiAgYWJvdXRMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dBYm91dFVzKTtcbiAgbWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0RyaW5rc01lbnUpO1xuICBtb2JpbGVNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dNb2JpbGVNZW51KTtcblxuICBmdW5jdGlvbiBfc2hvd0ZlYXR1cmVzKCkge1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGZlYXR1cmVzLmNyZWF0ZUZlYXR1cmVzKCk7XG4gIH1cbiAgZnVuY3Rpb24gX3Nob3dBYm91dFVzKCkge1xuICAgIHdoaWxlIChtYWluQ29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChtYWluQ29udGVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgYWJvdXRVcy5jcmVhdGVBYm91dFVzKCk7XG4gIH1cbiAgZnVuY3Rpb24gX3Nob3dEcmlua3NNZW51KCkge1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGRyaW5rc01lbnUuY3JlYXRlRHJpbmtzTWVudSgpO1xuICB9XG4gIGZ1bmN0aW9uIF9zaG93TW9iaWxlTWVudSgpIHtcbiAgICBtYWluTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wRG93bicpO1xuICB9XG4gIGZ1bmN0aW9uIF9pbml0KCkge1xuICAgIGhlYWRlckJsb2NrLnJlbmRlcigpO1xuICAgIGZlYXR1cmVzLmNyZWF0ZUZlYXR1cmVzKCk7XG4gICAgZm9vdGVyQmxvY2sucmVuZGVyKCk7XG4gIH1cbiAgXG59KSgpO1xuXG4vLyBGdW5jdGlvbiBzbGlkZSBzaG93XG5jb25zdCBzbGlkZVNob3cgPSAoIGZ1bmN0aW9uKCkge1xuICAvLyBDYWNoZSBET01cbiAgICBjb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlU2hvdycpKTtcbiAgICBjb25zdCBkb3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3QnKSk7XG4gICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XG4gICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG5cbiAgICAvLyBJbml0XG4gICAgbGV0IHNsaWRlSW5kZXggPSAwO1xuICAgIHNob3dTbGlkZShzbGlkZUluZGV4KTtcbiAgICBcbiAgICAvLyBTaG93IHNsaWRlIGJ5IFNsaWRlSW5kZXhcbiAgICBmdW5jdGlvbiBzaG93U2xpZGUobikge1xuICAgICAgaWYgKCFzbGlkZXNbMF0pIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzbGlkZXMubWFwKCBzbGlkZSA9PiB7XG4gICAgICAgICAgc2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSlcbiAgICAgICAgZG90cy5tYXAoIGRvdCA9PiB7XG4gICAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICBpZiAobiA+IHNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgc2xpZGVJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBuIDwgMCkge1xuICAgICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXNbc2xpZGVJbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvdHNbc2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG5cbiAgICAvLyBTaG93IGN1cnJlbnQgc2xpZGVcbiAgICBpZiAoIWRvdHNbMF0pIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICBkb3RzLmZvckVhY2goIChkb3QsIGluZGV4KSA9PiB7XG4gICAgICAgIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGN1cnJlbnRTbGlkZShpbmRleClcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBjdXJyZW50U2xpZGUobikge1xuICAgICAgc2hvd1NsaWRlKHNsaWRlSW5kZXggPSBuKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IG9yIHByZXYgc2xpZGVcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0U2xpZGUoLTEpO1xuICAgIH0pO1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCkge1xuICAgICAgbmV4dFNsaWRlKDEpO1xuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG5leHRTbGlkZShuKSB7XG4gICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCArPSBuKTtcbiAgICB9XG59KSgpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9