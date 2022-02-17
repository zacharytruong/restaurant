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

    // Create slide show
    const slides = Array.from(document.getElementsByClassName('slideShow'));
    const dotsArr = Array.from(document.getElementsByClassName('dot'));
    const prevArrow = document.getElementById('prev');
    const nextArrow = document.getElementById('next');
    let slideIndex = 0;
    _showSlide(slideIndex);
    function _showSlide(n) {
      slides.map( slide => {
        slide.style.display = 'none';
      })
      dotsArr.map( dot => {
        dot.classList.remove('active');
      })
      if (n > slides.length - 1) {
        slideIndex = 0;
      }
      if ( n < 0) {
        slideIndex = slides.length - 1;
      }
      slides[slideIndex].style.display = 'block';
      dotsArr[slideIndex].classList.add('active');
    }

    // Show current slide
    dotsArr.forEach( (dot, index) => {
      dot.addEventListener('click', function() {
        _currentSlide(index)
      });
    })
    function _currentSlide(n) {
      _showSlide(slideIndex = n);
    }

    // Next or prev slide
    prevArrow.addEventListener('click', function() {
      nextSlide(-1);
    });
    nextArrow.addEventListener('click',function() {
      nextSlide(1);
    });
    function nextSlide(n) {
      _showSlide(slideIndex += n);
    }
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksc0VBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLElBQUksa0ZBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFrQjtBQUN0QixJQUFJLDBFQUF1QjtBQUMzQixJQUFJLDJFQUFrQjtBQUN0QjtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmVzZXQuY3NzP2NlMzgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0VXMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2RyaW5rc01lbnUvZHJpbmtzTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2ZlYXR1cmVzL2ZlYXR1cmVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyQmxvY2svZm9vdGVyQmxvY2suanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9oZWFkZXJCbG9jay9oZWFkZXJCbG9jay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG5pbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG5pbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbmltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG4vLyBpbXBvcnQgaG91c2VNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmhvdXNlLW1pbGstdGVhLmpwZyc7XG4vLyBpbXBvcnQgYnJvd25TdWdhck1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuYnJvd24tc3VnYXItbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCB0aGFpVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnRoYWktdGVhLmpwZyc7XG4vLyBpbXBvcnQgdmludGFnZUJsYWNrTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC52aW50YWdlLWJsYWNrLW1pbGstdGVhLmpwZyc7XG4vLyBpbXBvcnQgY2hlZXNlSmFzbWluZVNyYyBmcm9tICcuL3Jlc291cmNlcy9jaGVlem8udGlwcHktdGVhLmpwZyc7XG4vLyBpbXBvcnQgZ3JhcGVGcnVpdFNyYyBmcm9tICcuL3Jlc291cmNlcy9ncmFwZWZydWl0LW92ZXJmbG93LmpwZyc7XG5cbmNvbnN0IGFib3V0VXMgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIC8vIENhY2hlIERPTVxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKSB7XG4gICAgY29uc3QgYWJvdXRVc0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluQ29udGVudCwgJ2Fib3V0VXNDb250YWluZXInLCAnYWJvdXRVc0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IHByaW1hcnlIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDInLCBhYm91dFVzQ29udGFpbmVyLCAncHJpbWFyeUhlYWRlcicpO1xuICAgIHByaW1hcnlIZWFkZXIudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgICBwcmltYXJ5SGVhZGVyLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJztcblxuICAgIC8vIE1haW4gYmxvY2sgc3ViIGhlYWRlclxuICAgIGNvbnN0IHN1YkhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoNCcsIGFib3V0VXNDb250YWluZXIsICdzdWJIZWFkZXInKTtcbiAgICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBkZWxpY2lvdXMgdGVhIGhvdXNlIHNpbmNlIDIwMTknXG5cbiAgICAvLyBNYWluIGJsb2NrIGNvbnRlbnRcbiAgICBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRhaW5lciwgJ2Fib3V0VXNDb250ZW50JywgJ2Fib3V0VXNDb250ZW50Jyk7XG4gICAgX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpO1xuICAgIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCk7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpIHtcbiAgICBjb25zdCBmaXJzdENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ2ZpcnN0Q29sJyk7XG4gICAgY29uc3QgaW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0Q29sLCAnZmlyc3RDb2xJbWcnKTtcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgaW1nLnNyYyA9IGZpcnN0Q29sSW1nU3JjO1xuICAgIGNvbnN0IGltZ0NhcCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RDb2wsICdpbWdDYXAnKTtcbiAgICBpbWdDYXAudGV4dENvbnRlbnQgPSAnV2UgTWFrZSBldmVydGhpbmcgd2l0aCBMT1ZFJztcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVc1NlY29uZENvbCgpIHtcbiAgICBjb25zdCBzZWNvbmRDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRlbnQsICdzZWNvbmRDb2wnKTtcblxuICAgIC8vIE1haW4gYmxvY2sgY29udGVudCBzZWNvbmQgY29sdW1uIHNsaWRlc2hvd1xuICAgIGNvbnN0IHNsaWRlU2hvd0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzZWNvbmRDb2wsICdzbGlkZVNob3dDb250YWluZXInKTtcbiAgICBjb25zdCBmaXJzdFNsaWRlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvdycpO1xuICAgIGNvbnN0IHNlY29uZFNsaWRlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvdycpO1xuICAgIGNvbnN0IHRoaXJkU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgc2Vjb25kU2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgIHRoaXJkU2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgIGNvbnN0IHNsaWRlU2hvd05hdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3dOYXYnKTtcbiAgICBjb25zdCBkb3RzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ2RvdHMnKTtcbiAgICBjb25zdCBzbGlkZVNob3dDYXB0aW9uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRDb2wsICdzbGlkZVNob3dDYXB0aW9uJyk7XG4gICAgc2xpZGVTaG93Q2FwdGlvbi50ZXh0Q29udGVudCA9ICdNb3JlIGNvbWZvcnRhYmxlIHNwYWNlJztcbiAgICBjb25zdCBmaXJzdEltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBmaXJzdFNsaWRlKTtcbiAgICBmaXJzdEltZy5zcmMgPSBzdG9yeUltZzFTcmM7XG4gICAgY29uc3Qgc2Vjb25kSW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIHNlY29uZFNsaWRlKTtcbiAgICBzZWNvbmRJbWcuc3JjID0gc3RvcnlJbWcyU3JjO1xuICAgIGNvbnN0IHRoaXJkSW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIHRoaXJkU2xpZGUpO1xuICAgIHRoaXJkSW1nLnNyYyA9IHN0b3J5SW1nM1NyYztcbiAgICBjb25zdCBwcmV2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAgIHByZXYuY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAgIHByZXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2Jyk7XG4gICAgY29uc3QgbmV4dCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgc2xpZGVTaG93TmF2KTtcbiAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgICBuZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dCcpO1xuICAgIHByZXYuaW5uZXJIVE1MID0gJyYjMTAwOTQ7JztcbiAgICBuZXh0LmlubmVySFRNTCA9ICcmIzEwMDk1Oyc7XG4gICAgY29uc3QgZmlyc3REb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xuICAgIGNvbnN0IHNlY29uZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgY29uc3QgdGhpcmREb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xuICAgIGZpcnN0RG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgIHNlY29uZERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICB0aGlyZERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcblxuICAgIC8vIENyZWF0ZSBzbGlkZSBzaG93XG4gICAgY29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZVNob3cnKSk7XG4gICAgY29uc3QgZG90c0FyciA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG90JykpO1xuICAgIGNvbnN0IHByZXZBcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2Jyk7XG4gICAgY29uc3QgbmV4dEFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKTtcbiAgICBsZXQgc2xpZGVJbmRleCA9IDA7XG4gICAgX3Nob3dTbGlkZShzbGlkZUluZGV4KTtcbiAgICBmdW5jdGlvbiBfc2hvd1NsaWRlKG4pIHtcbiAgICAgIHNsaWRlcy5tYXAoIHNsaWRlID0+IHtcbiAgICAgICAgc2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH0pXG4gICAgICBkb3RzQXJyLm1hcCggZG90ID0+IHtcbiAgICAgICAgZG90LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSlcbiAgICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAoIG4gPCAwKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIHNsaWRlc1tzbGlkZUluZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvdHNBcnJbc2xpZGVJbmRleF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBjdXJyZW50IHNsaWRlXG4gICAgZG90c0Fyci5mb3JFYWNoKCAoZG90LCBpbmRleCkgPT4ge1xuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIF9jdXJyZW50U2xpZGUoaW5kZXgpXG4gICAgICB9KTtcbiAgICB9KVxuICAgIGZ1bmN0aW9uIF9jdXJyZW50U2xpZGUobikge1xuICAgICAgX3Nob3dTbGlkZShzbGlkZUluZGV4ID0gbik7XG4gICAgfVxuXG4gICAgLy8gTmV4dCBvciBwcmV2IHNsaWRlXG4gICAgcHJldkFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0U2xpZGUoLTEpO1xuICAgIH0pO1xuICAgIG5leHRBcnJvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICBuZXh0U2xpZGUoMSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKG4pIHtcbiAgICAgIF9zaG93U2xpZGUoc2xpZGVJbmRleCArPSBuKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUFib3V0VXMsXG4gIH1cblxufSkoKTtcblxuZXhwb3J0IHthYm91dFVzfTsiLCJjb25zdCBibG9ja3MgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIGNvbnN0IF9tYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpO1xuXG4gIGZ1bmN0aW9uIHNrZWxldG9uSFRNTCgpIHtcbiAgICBfbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvY2tzLm5ld0Jsb2NrKCdoZWFkZXInKSk7XG4gICAgX21haW5Db250ZW50LmFwcGVuZENoaWxkKGJsb2Nrcy5uZXdCbG9jaygnbWFpbicpKTtcbiAgICBfbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvY2tzLm5ld0Jsb2NrKCdmb290ZXInKSk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3QmxvY2sobmFtZSl7XG4gICAgY29uc3QgYmxvY2sgPSBhZGRFbGVtZW50KCdkaXYnKTtcbiAgICBibG9jay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XG4gICAgcmV0dXJuIGJsb2NrO1xuICB9XG4gIGZ1bmN0aW9uIGZlYXR1cmVDb2x1bW4oXG4gICAgbm9kZSxcbiAgICBjb2xDbGFzc05hbWUsIFxuICAgIHN1YkNvbENsYXNzTmFtZSwgXG4gICAgZmVhdHVyZUljb25Db250YWluZXJDbGFzc05hbWUsIFxuICAgIGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUsXG4gICAgc2Vjb25kRmVhdHVyZUljb25DbGFzc05hbWUsIFxuICAgIGZlYXR1cmVUaXRsZUNsYXNzTmFtZSxcbiAgICBmZWF0dXJlVGl0bGVDb250ZW50XG4gICAgKSB7XG4gICAgY29uc3QgY29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbC5jbGFzc0xpc3QuYWRkKGNvbENsYXNzTmFtZSk7XG4gICAgY29uc3Qgc3ViQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGNvbCk7XG4gICAgc3ViQ29sLmNsYXNzTGlzdC5hZGQoc3ViQ29sQ2xhc3NOYW1lKTtcbiAgICBjb25zdCBmZWF0dXJlSWNvbkNvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgc3ViQ29sKTtcbiAgICBmZWF0dXJlSWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lKTtcbiAgICBjb25zdCBmZWF0dXJlSWNvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpJywgZmVhdHVyZUljb25Db250YWluZXIpO1xuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoZmlyc3RGZWF0dXJlSWNvbkNsYXNzTmFtZSk7XG4gICAgZmVhdHVyZUljb24uY2xhc3NMaXN0LmFkZChzZWNvbmRGZWF0dXJlSWNvbkNsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZVRpdGxlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgY29sKTtcbiAgICBmZWF0dXJlVGl0bGUuY2xhc3NMaXN0LmFkZChmZWF0dXJlVGl0bGVDbGFzc05hbWUpO1xuICAgIGZlYXR1cmVUaXRsZS50ZXh0Q29udGVudCA9IGZlYXR1cmVUaXRsZUNvbnRlbnQ7XG4gICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoY29sKTtcbiAgfVxuICBmdW5jdGlvbiBuZXdNZW51SXRlbShhcnIsIGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBibG9ja3MubmV3TWVudUxpbmsoaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpO1xuICAgIGFyci5wdXNoKG1lbnVJdGVtKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGZ1bmN0aW9uIG5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKSB7XG4gICAgY29uc3QgbmV3SXRlbSA9IGFkZEVsZW1lbnQoJ2xpJywgJycsIGNsYXNzTmFtZSk7XG4gICAgY29uc3QgbmV3SXRlbUxpbmsgPSBhZGRFbGVtZW50KCdhJywgbmV3SXRlbSk7XG4gICAgbmV3SXRlbUxpbmsuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICBuZXdJdGVtTGluay5pbm5lckhUTUwgPSBtZW51TmFtZTtcbiAgICByZXR1cm4gbmV3SXRlbTtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5TWVudShub2RlLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJbaV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZSwgbm9kZSwgY2xhc3NOYW1lLCBpZE5hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xuICAgIGlmIChjbGFzc05hbWUpIHtlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKX1cbiAgICBpZiAoaWROYW1lKSB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKX1cbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJbWdGaWd1cmUobm9kZSwgaW1nU3JjLCBjYXB0aW9uKSB7XG4gICAgY29uc3QgZmlnV3JhcCA9IGFkZEVsZW1lbnQoJ2RpdicsIG5vZGUsICdmaWd1cmVXcmFwJyk7XG4gICAgY29uc3QgaW1nID0gYWRkRWxlbWVudCgnaW1nJywgZmlnV3JhcCwgJ2ZpZ3VyZUltZycpO1xuICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgY29uc3QgaDMgPSBhZGRFbGVtZW50KCdoMycsIGZpZ1dyYXAsICdmaWd1cmVDYXB0aW9uJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBjYXB0aW9uLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIGZpZ1dyYXA7XG4gIH1cbiAgZnVuY3Rpb24gdG9nZ2xlRWxlbWVudChpZE5hbWUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE5hbWUpO1xuICAgIG5vZGUuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBza2VsZXRvbkhUTUwsXG4gICAgYWRkRWxlbWVudCxcbiAgICBuZXdCbG9jayxcbiAgICBuZXdNZW51TGluayxcbiAgICBuZXdNZW51SXRlbSxcbiAgICBkaXNwbGF5TWVudSxcbiAgICBmZWF0dXJlQ29sdW1uLFxuICAgIGNyZWF0ZUltZ0ZpZ3VyZSxcbiAgICB0b2dnbGVFbGVtZW50LFxuICB9XG59ICkoKTtcblxuZXhwb3J0IHtibG9ja3N9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xuLy8gaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzIuanBnJztcbi8vIGltcG9ydCBmaXJzdENvbEltZ1NyYyBmcm9tICcuL3Jlc291cmNlcy9hYm91dC1pbWcuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMS5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nMlNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcyLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWczU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzMuanBnJztcbmltcG9ydCBob3VzZU1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuaG91c2UtbWlsay10ZWEuanBnJztcbmltcG9ydCBicm93blN1Z2FyTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5icm93bi1zdWdhci1taWxrLXRlYS5qcGcnO1xuaW1wb3J0IHRoYWlUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQudGhhaS10ZWEuanBnJztcbmltcG9ydCB2aW50YWdlQmxhY2tNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnZpbnRhZ2UtYmxhY2stbWlsay10ZWEuanBnJztcbmltcG9ydCBjaGVlc2VKYXNtaW5lU3JjIGZyb20gJy4vcmVzb3VyY2VzL2NoZWV6by50aXBweS10ZWEuanBnJztcbmltcG9ydCBncmFwZUZydWl0U3JjIGZyb20gJy4vcmVzb3VyY2VzL2dyYXBlZnJ1aXQtb3ZlcmZsb3cuanBnJztcblxuY29uc3QgZHJpbmtzTWVudSA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ2FjaGUgRE9NXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlRHJpbmtzTWVudSgpIHtcbiAgICBjb25zdCBkcmlua3NNZW51Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnZHJpbmtzTWVudUNvbnRhaW5lcicsICdkcmlua3NNZW51Q29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJpbWFyeUhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMicsIGRyaW5rc01lbnVDb250YWluZXIsICdwcmltYXJ5SGVhZGVyJyk7XG4gICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgICBwcmltYXJ5SGVhZGVyLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJztcblxuICAgIC8vIFN1YiBoZWFkZXJcbiAgICBjb25zdCBzdWJIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDQnLCBkcmlua3NNZW51Q29udGFpbmVyLCAnc3ViSGVhZGVyJyk7XG4gICAgc3ViSGVhZGVyLmlubmVySFRNTCA9ICc8c3Bhbj7irKE8L3NwYW4+IE9SR0FOSUMgRlJVSVQgPHNwYW4+4qyhPC9zcGFuPiBIT1QgQVZBSUxBQkxFJztcblxuICAgIC8vIEdhbGxlcnlcbiAgICBjb25zdCBnYWxsZXJ5ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGRyaW5rc01lbnVDb250YWluZXIsICdnYWxsZXJ5JywgJ2dhbGxlcnknKTtcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGhvdXNlTWlsa1RlYVNyYywgJ2hvdXNlIG1pbGsgdGVhJyk7XG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBicm93blN1Z2FyTWlsa1RlYVNyYywgJ2Jyb3duIHN1Z2FyIG1pbGsgdGVhJyk7XG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCB0aGFpVGVhU3JjLCAndGhhaSB0ZWEnKTtcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIHZpbnRhZ2VCbGFja01pbGtUZWFTcmMsICd2aW50YWdlIGJsYWNrIHRlYSBtaWxrIHRlYScpO1xuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgY2hlZXNlSmFzbWluZVNyYywgJ2NoZWVzZSBqYXNtaW5lIHRpcHB5IHRlYScpO1xuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgZ3JhcGVGcnVpdFNyYywgJ2dyYXBlZ3J1aXQgb3ZlcmZsb3cnKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlRHJpbmtzTWVudVxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7ZHJpbmtzTWVudX07IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4uL2Jsb2Nrcy5qcyc7XG4vLyBpbXBvcnQgYmFja2dyb3VuZEltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2hvbWUtYmctc2xpZGVzaG93Mi5qcGcnO1xuLy8gaW1wb3J0IGZpcnN0Q29sSW1nU3JjIGZyb20gJy4vcmVzb3VyY2VzL2Fib3V0LWltZy5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nMVNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcxLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcyU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzIuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzNTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMy5qcGcnO1xuLy8gaW1wb3J0IGhvdXNlTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5ob3VzZS1taWxrLXRlYS5qcGcnO1xuLy8gaW1wb3J0IGJyb3duU3VnYXJNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmJyb3duLXN1Z2FyLW1pbGstdGVhLmpwZyc7XG4vLyBpbXBvcnQgdGhhaVRlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC50aGFpLXRlYS5qcGcnO1xuLy8gaW1wb3J0IHZpbnRhZ2VCbGFja01pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQudmludGFnZS1ibGFjay1taWxrLXRlYS5qcGcnO1xuLy8gaW1wb3J0IGNoZWVzZUphc21pbmVTcmMgZnJvbSAnLi9yZXNvdXJjZXMvY2hlZXpvLnRpcHB5LXRlYS5qcGcnO1xuLy8gaW1wb3J0IGdyYXBlRnJ1aXRTcmMgZnJvbSAnLi9yZXNvdXJjZXMvZ3JhcGVmcnVpdC1vdmVyZmxvdy5qcGcnO1xuXG5jb25zdCBmZWF0dXJlcyA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ2FjaGUgRE9NXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgLy8gQ3JlYXRlIHNlY3Rpb25zXG4gIGZ1bmN0aW9uIGNyZWF0ZUZlYXR1cmVzKCkge1xuICAgIGNvbnN0IGZlYXR1cmVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnJywgJ2ZlYXR1cmVzJyk7XG4gICAgY29uc3QgZmVhdHVyZXNIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmZWF0dXJlcywgJ2ZlYXR1cmVIZWFkZXInKTtcbiAgICBmZWF0dXJlc0hlYWRlci50ZXh0Q29udGVudCA9ICdGZWF0dXJlcyc7XG4gICAgY29uc3QgZmVhdHVyZXNDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZmVhdHVyZXMsICdmZWF0dXJlc0NvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBmZWF0dXJlcyBjb2x1bW5zXG4gICAgYmxvY2tzLmZlYXR1cmVDb2x1bW4oXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcbiAgICAgICdmZWF0dXJlQ29sJyxcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXG4gICAgICAnZmVhdHVyZUljb24nLFxuICAgICAgJ2ZhJyxcbiAgICAgICdmYS1jb2ZmZWUnLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnVEVBJ1xuICAgICk7XG4gICAgYmxvY2tzLmZlYXR1cmVDb2x1bW4oXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcbiAgICAgICdmZWF0dXJlQ29sJyxcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXG4gICAgICAnZmVhdHVyZUljb24nLFxuICAgICAgJ2ZhJyxcbiAgICAgICdmYS1jdXRsZXJ5JyxcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxuICAgICAgJ0JBS0VSWSdcbiAgICApO1xuICAgIGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtaGVhcnQnLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnU1dFRVQnXG4gICAgKTtcbiAgfVxuICAvLyBmdW5jdGlvbiBjcmVhdGVBYm91dFVzKCkge1xuICAvLyAgIGNvbnN0IGFib3V0VXNDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbkNvbnRlbnQsICdhYm91dFVzQ29udGFpbmVyJywgJ2Fib3V0VXNDb250YWluZXInKTtcbiAgLy8gICBjb25zdCBwcmltYXJ5SGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gyJywgYWJvdXRVc0NvbnRhaW5lciwgJ3ByaW1hcnlIZWFkZXInKTtcbiAgLy8gICBwcmltYXJ5SGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gIC8vICAgcHJpbWFyeUhlYWRlci5zdHlsZS50ZXh0VHJhbnNmb3JtID0gJ3VwcGVyY2FzZSc7XG5cbiAgLy8gICAvLyBNYWluIGJsb2NrIHN1YiBoZWFkZXJcbiAgLy8gICBjb25zdCBzdWJIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDQnLCBhYm91dFVzQ29udGFpbmVyLCAnc3ViSGVhZGVyJyk7XG4gIC8vICAgc3ViSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgZGVsaWNpb3VzIHRlYSBob3VzZSBzaW5jZSAyMDE5J1xuXG4gIC8vICAgLy8gTWFpbiBibG9jayBjb250ZW50XG4gIC8vICAgYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250YWluZXIsICdhYm91dFVzQ29udGVudCcsICdhYm91dFVzQ29udGVudCcpO1xuICAvLyAgIF9jcmVhdGVBYm91dFVzRmlyc3RDb2woKTtcbiAgLy8gICBfY3JlYXRlQWJvdXRVc1NlY29uZENvbCgpO1xuICAvLyB9XG4gIC8vIGZ1bmN0aW9uIF9jcmVhdGVBYm91dFVzRmlyc3RDb2woKSB7XG4gIC8vICAgY29uc3QgZmlyc3RDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRlbnQsICdmaXJzdENvbCcpO1xuICAvLyAgIGNvbnN0IGltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBmaXJzdENvbCwgJ2ZpcnN0Q29sSW1nJyk7XG4gIC8vICAgaW1nLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAvLyAgIGltZy5zcmMgPSBmaXJzdENvbEltZ1NyYztcbiAgLy8gICBjb25zdCBpbWdDYXAgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIGZpcnN0Q29sLCAnaW1nQ2FwJyk7XG4gIC8vICAgaW1nQ2FwLnRleHRDb250ZW50ID0gJ1dlIE1ha2UgZXZlcnRoaW5nIHdpdGggTE9WRSc7XG4gIC8vIH1cbiAgLy8gZnVuY3Rpb24gX2NyZWF0ZUFib3V0VXNTZWNvbmRDb2woKSB7XG4gIC8vICAgY29uc3Qgc2Vjb25kQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250ZW50LCAnc2Vjb25kQ29sJyk7XG5cbiAgLy8gICAvLyBNYWluIGJsb2NrIGNvbnRlbnQgc2Vjb25kIGNvbHVtbiBzbGlkZXNob3dcbiAgLy8gICBjb25zdCBzbGlkZVNob3dDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnc2xpZGVTaG93Q29udGFpbmVyJyk7XG4gIC8vICAgY29uc3QgZmlyc3RTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgLy8gICBjb25zdCBzZWNvbmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgLy8gICBjb25zdCB0aGlyZFNsaWRlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvdycpO1xuICAvLyAgIGZpcnN0U2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAvLyAgIHNlY29uZFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgLy8gICB0aGlyZFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgLy8gICBjb25zdCBzbGlkZVNob3dOYXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93TmF2Jyk7XG4gIC8vICAgY29uc3QgZG90cyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzZWNvbmRDb2wsICdkb3RzJyk7XG4gIC8vICAgY29uc3Qgc2xpZGVTaG93Q2FwdGlvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kQ29sLCAnc2xpZGVTaG93Q2FwdGlvbicpO1xuICAvLyAgIHNsaWRlU2hvd0NhcHRpb24udGV4dENvbnRlbnQgPSAnTW9yZSBjb21mb3J0YWJsZSBzcGFjZSc7XG4gIC8vICAgY29uc3QgZmlyc3RJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgZmlyc3RTbGlkZSk7XG4gIC8vICAgZmlyc3RJbWcuc3JjID0gc3RvcnlJbWcxU3JjO1xuICAvLyAgIGNvbnN0IHNlY29uZEltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBzZWNvbmRTbGlkZSk7XG4gIC8vICAgc2Vjb25kSW1nLnNyYyA9IHN0b3J5SW1nMlNyYztcbiAgLy8gICBjb25zdCB0aGlyZEltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCB0aGlyZFNsaWRlKTtcbiAgLy8gICB0aGlyZEltZy5zcmMgPSBzdG9yeUltZzNTcmM7XG4gIC8vICAgY29uc3QgcHJldiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgc2xpZGVTaG93TmF2KTtcbiAgLy8gICBwcmV2LmNsYXNzTGlzdC5hZGQoJ3ByZXYnKTtcbiAgLy8gICBwcmV2LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJldicpO1xuICAvLyAgIGNvbnN0IG5leHQgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XG4gIC8vICAgbmV4dC5jbGFzc0xpc3QuYWRkKCduZXh0Jyk7XG4gIC8vICAgbmV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25leHQnKTtcbiAgLy8gICBwcmV2LmlubmVySFRNTCA9ICcmIzEwMDk0Oyc7XG4gIC8vICAgbmV4dC5pbm5lckhUTUwgPSAnJiMxMDA5NTsnO1xuICAvLyAgIGNvbnN0IGZpcnN0RG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgLy8gICBjb25zdCBzZWNvbmREb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xuICAvLyAgIGNvbnN0IHRoaXJkRG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgLy8gICBmaXJzdERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgLy8gICBzZWNvbmREb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gIC8vICAgdGhpcmREb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gIC8vIH1cbiAgLy8gZnVuY3Rpb24gY3JlYXRlRHJpbmtzTWVudSgpIHtcbiAgLy8gICBjb25zdCBkcmlua3NNZW51Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnZHJpbmtzTWVudUNvbnRhaW5lcicsICdkcmlua3NNZW51Q29udGFpbmVyJyk7XG4gIC8vICAgY29uc3QgcHJpbWFyeUhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMicsIGRyaW5rc01lbnVDb250YWluZXIsICdwcmltYXJ5SGVhZGVyJyk7XG4gIC8vICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdNRU5VJztcbiAgLy8gICBwcmltYXJ5SGVhZGVyLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJztcblxuICAvLyAgIC8vIFN1YiBoZWFkZXJcbiAgLy8gICBjb25zdCBzdWJIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDQnLCBkcmlua3NNZW51Q29udGFpbmVyLCAnc3ViSGVhZGVyJyk7XG4gIC8vICAgc3ViSGVhZGVyLmlubmVySFRNTCA9ICc8c3Bhbj7irKE8L3NwYW4+IE9SR0FOSUMgRlJVSVQgPHNwYW4+4qyhPC9zcGFuPiBIT1QgQVZBSUxBQkxFJztcblxuICAvLyAgIC8vIEdhbGxlcnlcbiAgLy8gICBjb25zdCBnYWxsZXJ5ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGRyaW5rc01lbnVDb250YWluZXIsICdnYWxsZXJ5JywgJ2dhbGxlcnknKTtcbiAgLy8gICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGhvdXNlTWlsa1RlYVNyYywgJ2hvdXNlIG1pbGsgdGVhJyk7XG4gIC8vICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBicm93blN1Z2FyTWlsa1RlYVNyYywgJ2Jyb3duIHN1Z2FyIG1pbGsgdGVhJyk7XG4gIC8vICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCB0aGFpVGVhU3JjLCAndGhhaSB0ZWEnKTtcbiAgLy8gICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIHZpbnRhZ2VCbGFja01pbGtUZWFTcmMsICd2aW50YWdlIGJsYWNrIHRlYSBtaWxrIHRlYScpO1xuICAvLyAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgY2hlZXNlSmFzbWluZVNyYywgJ2NoZWVzZSBqYXNtaW5lIHRpcHB5IHRlYScpO1xuICAvLyAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgZ3JhcGVGcnVpdFNyYywgJ2dyYXBlZ3J1aXQgb3ZlcmZsb3cnKTtcbiAgLy8gfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlRmVhdHVyZXMsXG4gIH1cblxufSkoKTtcblxuZXhwb3J0IHtmZWF0dXJlc307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4uL2Jsb2Nrcy5qcyc7XG4vLyBpbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcbi8vIGltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG4vLyBpbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG5cbmNvbnN0IGZvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDcmVhdGUgc2VjdGlvbnNcbiAgZnVuY3Rpb24gX2NyZWF0ZUZvb3RlckZpcnN0Q29sKCkge1xuICAgIGNvbnN0IGZpcnN0Rm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IGpvaW5VcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzJyk7XG4gICAgam9pblVzLnRleHRDb250ZW50ID0gJ0pvaW4gVXMnO1xuICAgIGNvbnN0IGpvaW5Vc0Rlc2MgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRGVzYycpO1xuICAgIGpvaW5Vc0Rlc2MudGV4dENvbnRlbnQgPSAnQWx3YXlzIGxvb2tpbmcgZm9yIGZyaWVuZGx5IHN0YWZmIHdpdGggcG9zaXRpdmUgYXR0aXR1ZGVzISBQbGVhc2Ugc3VibWl0IHlvdXIgcmVzdW1lIHRvJztcbiAgICBjb25zdCBqb2luVXNFbWFpbExpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRW1haWxMaW5rJyk7XG4gICAgam9pblVzRW1haWxMaW5rLmlubmVySFRNTCA9ICdoZWxsb0B0ZWFsYXguY29tJztcbiAgICBqb2luVXNFbWFpbExpbmsuaHJlZiA9ICdtYWlsdG86aGVsbG9AdGVhbGF4LmNvbSc7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUZvb3RlclNlY29uZENvbCgpIHtcbiAgICBjb25zdCBzZWNvbmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgbG9jYXRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcbiAgICBjb25zdCBsb2NhdGlvbkFkZHIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQWRkcicpO1xuICAgIGxvY2F0aW9uQWRkci50ZXh0Q29udGVudCA9ICcxMjM0IEJlbGxhaXJlJztcbiAgICBjb25zdCBsb2NhdGlvbkNpdHkgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQ2l0eScpO1xuICAgIGxvY2F0aW9uQ2l0eS50ZXh0Q29udGVudCA9ICdIb3VzdG9uLCBUWCA3NzAzNic7XG4gICAgY29uc3QgbG9jYXRpb25QaG9uZU51bWJlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25QaG9uZU51bWJlcicpO1xuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMjgxLTk5OS0wOTA5JztcbiAgICBcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlRm9vdGVyVGhpcmRDb2woKSB7XG4gICAgY29uc3QgdGhpcmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNUaXRsZScpO1xuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSE9VUlMnO1xuICAgIGNvbnN0IGhvdXJzRGF0ZXMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNEYXRlcycpO1xuICAgIGhvdXJzRGF0ZXMudGV4dENvbnRlbnQgPSAnU1VOREFZIC0gRlJJREFZJztcbiAgICBjb25zdCBob3Vyc0hvdXJzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzSG91cnMnKTtcbiAgICBob3Vyc0hvdXJzLnRleHRDb250ZW50ID0gJzExOjAwIEFNIC0gOTowMCBQTSc7XG4gIH1cbiAgXG4gIC8vIFJlbmRlciB0byB0aGUgRE9NXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBfY3JlYXRlRm9vdGVyRmlyc3RDb2woKTtcbiAgICBfY3JlYXRlRm9vdGVyU2Vjb25kQ29sKCk7XG4gICAgX2NyZWF0ZUZvb3RlclRoaXJkQ29sKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfVxufSkoKTtcblxuZXhwb3J0IHtmb290ZXJCbG9ja307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4uL2Jsb2Nrcy5qcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cxLmpwZyc7XG5cbmNvbnN0IGhlYWRlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDYWNoZSBET01cblxuICAvLyBDcmVhdGluZyBzZWN0aW9uc1xuICBmdW5jdGlvbiBfc3R5bGVIZWFkZXJCbG9jaygpIHtcbiAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDE5NCwgMjEsIDAsIC41KSAsIHJnYmEoMjU1LCAxOTcsIDAsIC41KSksIHVybCgnJHtiYWNrZ3JvdW5kSW1hZ2VTcmN9JylgO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVOYXZCYXIoKSB7XG4gICAgYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGhlYWRlciwgJycsICdtYWluTmF2Jyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUxvZ28oKSB7XG4gICAgY29uc3QgbG9nb0RpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTmF2LCAnbG9nb0RpdicpO1xuICAgIGNvbnN0IG1haW5Mb2dvID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGxvZ29EaXYsICdtYWluTG9nbycsICdtYWluTG9nbycpO1xuICAgIG1haW5Mb2dvLnNyYyA9IExvZ287XG4gICAgY29uc3QgaG9tZXBhZ2VMaW5rID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBsb2dvRGl2LCAnJywgJ21haW5Mb2dvTGluaycpO1xuICAgIGhvbWVwYWdlTGluay5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZU1vYmlsZU1lbnVJY29uKCkge1xuICAgIGNvbnN0IG1lbnVEaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5hdiwgJ21lbnVEaXYnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1lbnVEaXYsICdtb2JpbGVNZW51JywgJ21vYmlsZU1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51SWNvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpJywgbW9iaWxlTWVudSwgJ2ZhcycpO1xuICAgIG1vYmlsZU1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICBtb2JpbGVNZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWJ1cmdlck1lbnUnKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlTmF2TWVudSgpIHtcbiAgICBjb25zdCBNZW51QXJyID0gW107XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51RGl2Jyk7XG4gICAgY29uc3QgbWFpbk1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnbWVudScsIG1lbnVEaXYsICdtYWluTWVudScpO1xuICAgIC8vIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoJ2Ryb3BEb3duJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdmZWF0dXJlc0xpbmsnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2Fib3V0TGluaycsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnbWVudUxpbmsnLCAnbWVudUxpc3QnLCAnTWVudScpO1xuICAgIGJsb2Nrcy5kaXNwbGF5TWVudShtYWluTWVudSwgTWVudUFycik7XG4gIH1cblxuICAvLyBSZW5kZXIgdG8gdGhlIERPTVxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgX3N0eWxlSGVhZGVyQmxvY2soKVxuICAgIF9jcmVhdGVOYXZCYXIoKTtcbiAgICBfY3JlYXRlTG9nbygpO1xuICAgIF9jcmVhdGVNb2JpbGVNZW51SWNvbigpO1xuICAgIF9jcmVhdGVOYXZNZW51KCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfVxuXG59KSgpO1xuXG5leHBvcnQge2hlYWRlckJsb2NrfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgaGVhZGVyQmxvY2sgfSBmcm9tICcuL2hlYWRlckJsb2NrL2hlYWRlckJsb2NrLmpzJztcbmltcG9ydCB7IGZlYXR1cmVzIH0gZnJvbSAnLi9mZWF0dXJlcy9mZWF0dXJlcy5qcyc7XG5pbXBvcnQgeyBhYm91dFVzIH0gZnJvbSAnLi9hYm91dFVzL2Fib3V0VXMuanMnO1xuaW1wb3J0IHsgZHJpbmtzTWVudSB9IGZyb20gJy4vZHJpbmtzTWVudS9kcmlua3NNZW51LmpzJztcbmltcG9ydCB7IGZvb3RlckJsb2NrIH0gZnJvbSAnLi9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyc7XG5cbiggZnVuY3Rpb24oKSB7XG5cbiAgX2luaXQoKTtcblxuICAvLyBDYWNoZSBET01cbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbk1lbnUnKTtcblxuICAvLyBGdW5jdGlvbnNcbiAgbWFpbkxvZ29MaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dGZWF0dXJlcyk7XG4gIGZlYXR1cmVzTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93RmVhdHVyZXMpO1xuICBhYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0Fib3V0VXMpO1xuICBtZW51TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93RHJpbmtzTWVudSk7XG4gIG1vYmlsZU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd01vYmlsZU1lbnUpO1xuXG4gIGZ1bmN0aW9uIF9zaG93RmVhdHVyZXMoKSB7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZmVhdHVyZXMuY3JlYXRlRmVhdHVyZXMoKTtcbiAgfVxuICBmdW5jdGlvbiBfc2hvd0Fib3V0VXMoKSB7XG4gICAgd2hpbGUgKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKG1haW5Db250ZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBhYm91dFVzLmNyZWF0ZUFib3V0VXMoKTtcbiAgfVxuICBmdW5jdGlvbiBfc2hvd0RyaW5rc01lbnUoKSB7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZHJpbmtzTWVudS5jcmVhdGVEcmlua3NNZW51KCk7XG4gIH1cbiAgZnVuY3Rpb24gX3Nob3dNb2JpbGVNZW51KCkge1xuICAgIG1haW5NZW51LmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3BEb3duJyk7XG4gIH1cbiAgZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgaGVhZGVyQmxvY2sucmVuZGVyKCk7XG4gICAgZmVhdHVyZXMuY3JlYXRlRmVhdHVyZXMoKTtcbiAgICBmb290ZXJCbG9jay5yZW5kZXIoKTtcbiAgfVxuICBcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=