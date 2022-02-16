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

// // Function slide show
// const slideShow = ( function() {
//   // Cache DOM
//     const slides = Array.from(document.getElementsByClassName('slideShow'));
//     const dots = Array.from(document.getElementsByClassName('dot'));
//     const prev = document.getElementById('prev');
//     const next = document.getElementById('next');

//     // Init
//     let slideIndex = 0;
//     showSlide(slideIndex);
    
//     // Show slide by SlideIndex
//     function showSlide(n) {
//       if (!slides[0]) {
//         return
//       } else {
//         slides.map( slide => {
//           slide.style.display = 'none';
//         })
//         dots.map( dot => {
//           dot.classList.remove('active');
//         })
//         if (n > slides.length - 1) {
//           slideIndex = 0;
//         }
//         if ( n < 0) {
//           slideIndex = slides.length - 1;
//         }
//         slides[slideIndex].style.display = 'block';
//         dots[slideIndex].classList.add('active');
//       }
      
//     }

//     // Show current slide
//     if (!dots[0]) {
//       return
//     } else {
//       dots.forEach( (dot, index) => {
//         dot.addEventListener('click', function() {
//           currentSlide(index)
//         });
//       })
//     }
    
//     function currentSlide(n) {
//       showSlide(slideIndex = n);
//     }

//     // Next or prev slide
//     prev.addEventListener('click', function() {
//       nextSlide(-1);
//     });
//     next.addEventListener('click',function() {
//       nextSlide(1);
//     });
//     function nextSlide(n) {
//       showSlide(slideIndex += n);
//     }
// })();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksc0VBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLElBQUksa0ZBQTJCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFrQjtBQUN0QixJQUFJLDBFQUF1QjtBQUMzQixJQUFJLDJFQUFrQjtBQUN0QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXRVcy9hYm91dFVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYmxvY2tzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZHJpbmtzTWVudS9kcmlua3NNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZmVhdHVyZXMvZmVhdHVyZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mb290ZXJCbG9jay9mb290ZXJCbG9jay5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlckJsb2NrL2hlYWRlckJsb2NrLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLi9ibG9ja3MuanMnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzIuanBnJztcbmltcG9ydCBmaXJzdENvbEltZ1NyYyBmcm9tICcuL3Jlc291cmNlcy9hYm91dC1pbWcuanBnJztcbmltcG9ydCBzdG9yeUltZzFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMS5qcGcnO1xuaW1wb3J0IHN0b3J5SW1nMlNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcyLmpwZyc7XG5pbXBvcnQgc3RvcnlJbWczU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzMuanBnJztcbi8vIGltcG9ydCBob3VzZU1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuaG91c2UtbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCBicm93blN1Z2FyTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5icm93bi1zdWdhci1taWxrLXRlYS5qcGcnO1xuLy8gaW1wb3J0IHRoYWlUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQudGhhaS10ZWEuanBnJztcbi8vIGltcG9ydCB2aW50YWdlQmxhY2tNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnZpbnRhZ2UtYmxhY2stbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCBjaGVlc2VKYXNtaW5lU3JjIGZyb20gJy4vcmVzb3VyY2VzL2NoZWV6by50aXBweS10ZWEuanBnJztcbi8vIGltcG9ydCBncmFwZUZydWl0U3JjIGZyb20gJy4vcmVzb3VyY2VzL2dyYXBlZnJ1aXQtb3ZlcmZsb3cuanBnJztcblxuY29uc3QgYWJvdXRVcyA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ2FjaGUgRE9NXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQWJvdXRVcygpIHtcbiAgICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnYWJvdXRVc0NvbnRhaW5lcicsICdhYm91dFVzQ29udGFpbmVyJyk7XG4gICAgY29uc3QgcHJpbWFyeUhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMicsIGFib3V0VXNDb250YWluZXIsICdwcmltYXJ5SGVhZGVyJyk7XG4gICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgU3RvcnknO1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gICAgLy8gTWFpbiBibG9jayBzdWIgaGVhZGVyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgYWJvdXRVc0NvbnRhaW5lciwgJ3N1YkhlYWRlcicpO1xuICAgIHN1YkhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIGRlbGljaW91cyB0ZWEgaG91c2Ugc2luY2UgMjAxOSdcblxuICAgIC8vIE1haW4gYmxvY2sgY29udGVudFxuICAgIGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGFpbmVyLCAnYWJvdXRVc0NvbnRlbnQnLCAnYWJvdXRVc0NvbnRlbnQnKTtcbiAgICBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCk7XG4gICAgX2NyZWF0ZUFib3V0VXNTZWNvbmRDb2woKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVc0ZpcnN0Q29sKCkge1xuICAgIGNvbnN0IGZpcnN0Q29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGFib3V0VXNDb250ZW50LCAnZmlyc3RDb2wnKTtcbiAgICBjb25zdCBpbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgZmlyc3RDb2wsICdmaXJzdENvbEltZycpO1xuICAgIGltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBpbWcuc3JjID0gZmlyc3RDb2xJbWdTcmM7XG4gICAgY29uc3QgaW1nQ2FwID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdENvbCwgJ2ltZ0NhcCcpO1xuICAgIGltZ0NhcC50ZXh0Q29udGVudCA9ICdXZSBNYWtlIGV2ZXJ0aGluZyB3aXRoIExPVkUnO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCkge1xuICAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ3NlY29uZENvbCcpO1xuXG4gICAgLy8gTWFpbiBibG9jayBjb250ZW50IHNlY29uZCBjb2x1bW4gc2xpZGVzaG93XG4gICAgY29uc3Qgc2xpZGVTaG93Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3Qgc2Vjb25kU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3QgdGhpcmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgdGhpcmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgY29uc3Qgc2xpZGVTaG93TmF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvd05hdicpO1xuICAgIGNvbnN0IGRvdHMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnZG90cycpO1xuICAgIGNvbnN0IHNsaWRlU2hvd0NhcHRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NhcHRpb24nKTtcbiAgICBzbGlkZVNob3dDYXB0aW9uLnRleHRDb250ZW50ID0gJ01vcmUgY29tZm9ydGFibGUgc3BhY2UnO1xuICAgIGNvbnN0IGZpcnN0SW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0U2xpZGUpO1xuICAgIGZpcnN0SW1nLnNyYyA9IHN0b3J5SW1nMVNyYztcbiAgICBjb25zdCBzZWNvbmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgc2Vjb25kU2xpZGUpO1xuICAgIHNlY29uZEltZy5zcmMgPSBzdG9yeUltZzJTcmM7XG4gICAgY29uc3QgdGhpcmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgdGhpcmRTbGlkZSk7XG4gICAgdGhpcmRJbWcuc3JjID0gc3RvcnlJbWczU3JjO1xuICAgIGNvbnN0IHByZXYgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XG4gICAgcHJldi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgcHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcbiAgICBjb25zdCBuZXh0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgIG5leHQuc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XG4gICAgcHJldi5pbm5lckhUTUwgPSAnJiMxMDA5NDsnO1xuICAgIG5leHQuaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcbiAgICBjb25zdCBmaXJzdERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgY29uc3Qgc2Vjb25kRG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgICBjb25zdCB0aGlyZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgZmlyc3REb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgc2Vjb25kRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgIHRoaXJkRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuXG4gICAgLy8gQ3JlYXRlIHNsaWRlIHNob3dcbiAgICBjb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlU2hvdycpKTtcbiAgICBjb25zdCBkb3RzQXJyID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkb3QnKSk7XG4gICAgY29uc3QgcHJldkFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcbiAgICBjb25zdCBuZXh0QXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xuICAgIGxldCBzbGlkZUluZGV4ID0gMDtcbiAgICBfc2hvd1NsaWRlKHNsaWRlSW5kZXgpO1xuICAgIGZ1bmN0aW9uIF9zaG93U2xpZGUobikge1xuICAgICAgc2xpZGVzLm1hcCggc2xpZGUgPT4ge1xuICAgICAgICBzbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSlcbiAgICAgIGRvdHNBcnIubWFwKCBkb3QgPT4ge1xuICAgICAgICBkb3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KVxuICAgICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBzbGlkZUluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmICggbiA8IDApIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgc2xpZGVzW3NsaWRlSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG90c0FycltzbGlkZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICAvLyBTaG93IGN1cnJlbnQgc2xpZGVcbiAgICBkb3RzQXJyLmZvckVhY2goIChkb3QsIGluZGV4KSA9PiB7XG4gICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgX2N1cnJlbnRTbGlkZShpbmRleClcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgZnVuY3Rpb24gX2N1cnJlbnRTbGlkZShuKSB7XG4gICAgICBfc2hvd1NsaWRlKHNsaWRlSW5kZXggPSBuKTtcbiAgICB9XG5cbiAgICAvLyBOZXh0IG9yIHByZXYgc2xpZGVcbiAgICBwcmV2QXJyb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIG5leHRTbGlkZSgtMSk7XG4gICAgfSk7XG4gICAgbmV4dEFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbiAgICAgIG5leHRTbGlkZSgxKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUobikge1xuICAgICAgX3Nob3dTbGlkZShzbGlkZUluZGV4ICs9IG4pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlQWJvdXRVcyxcbiAgfVxuXG59KSgpO1xuXG5leHBvcnQge2Fib3V0VXN9OyIsImNvbnN0IGJsb2NrcyA9ICggZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgX21haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gc2tlbGV0b25IVE1MKCkge1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2hlYWRlcicpKTtcbiAgICBfbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvY2tzLm5ld0Jsb2NrKCdtYWluJykpO1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2Zvb3RlcicpKTtcbiAgfVxuICBmdW5jdGlvbiBuZXdCbG9jayhuYW1lKXtcbiAgICBjb25zdCBibG9jayA9IGFkZEVsZW1lbnQoJ2RpdicpO1xuICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cbiAgZnVuY3Rpb24gZmVhdHVyZUNvbHVtbihcbiAgICBub2RlLFxuICAgIGNvbENsYXNzTmFtZSwgXG4gICAgc3ViQ29sQ2xhc3NOYW1lLCBcbiAgICBmZWF0dXJlSWNvbkNvbnRhaW5lckNsYXNzTmFtZSwgXG4gICAgZmlyc3RGZWF0dXJlSWNvbkNsYXNzTmFtZSxcbiAgICBzZWNvbmRGZWF0dXJlSWNvbkNsYXNzTmFtZSwgXG4gICAgZmVhdHVyZVRpdGxlQ2xhc3NOYW1lLFxuICAgIGZlYXR1cmVUaXRsZUNvbnRlbnRcbiAgICApIHtcbiAgICBjb25zdCBjb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jyk7XG4gICAgY29sLmNsYXNzTGlzdC5hZGQoY29sQ2xhc3NOYW1lKTtcbiAgICBjb25zdCBzdWJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgY29sKTtcbiAgICBzdWJDb2wuY2xhc3NMaXN0LmFkZChzdWJDb2xDbGFzc05hbWUpO1xuICAgIGNvbnN0IGZlYXR1cmVJY29uQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBzdWJDb2wpO1xuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZmVhdHVyZUljb25Db250YWluZXJDbGFzc05hbWUpO1xuICAgIGNvbnN0IGZlYXR1cmVJY29uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2knLCBmZWF0dXJlSWNvbkNvbnRhaW5lcik7XG4gICAgZmVhdHVyZUljb24uY2xhc3NMaXN0LmFkZChmaXJzdEZlYXR1cmVJY29uQ2xhc3NOYW1lKTtcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lKTtcbiAgICBjb25zdCBmZWF0dXJlVGl0bGUgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBjb2wpO1xuICAgIGZlYXR1cmVUaXRsZS5jbGFzc0xpc3QuYWRkKGZlYXR1cmVUaXRsZUNsYXNzTmFtZSk7XG4gICAgZmVhdHVyZVRpdGxlLnRleHRDb250ZW50ID0gZmVhdHVyZVRpdGxlQ29udGVudDtcbiAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChjb2wpO1xuICB9XG4gIGZ1bmN0aW9uIG5ld01lbnVJdGVtKGFyciwgaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGJsb2Nrcy5uZXdNZW51TGluayhpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSk7XG4gICAgYXJyLnB1c2gobWVudUl0ZW0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUxpbmsoaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gYWRkRWxlbWVudCgnbGknLCAnJywgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGFkZEVsZW1lbnQoJ2EnLCBuZXdJdGVtKTtcbiAgICBuZXdJdGVtTGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIG5ld0l0ZW1MaW5rLmlubmVySFRNTCA9IG1lbnVOYW1lO1xuICAgIHJldHVybiBuZXdJdGVtO1xuICB9XG4gIGZ1bmN0aW9uIGRpc3BsYXlNZW51KG5vZGUsIGFycikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGFycltpXSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGFkZEVsZW1lbnQoZWxlLCBub2RlLCBjbGFzc05hbWUsIGlkTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG4gICAgaWYgKGNsYXNzTmFtZSkge2VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpfVxuICAgIGlmIChpZE5hbWUpIHtlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpfVxuICAgIGlmIChub2RlKSB7XG4gICAgICByZXR1cm4gbm9kZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZUltZ0ZpZ3VyZShub2RlLCBpbWdTcmMsIGNhcHRpb24pIHtcbiAgICBjb25zdCBmaWdXcmFwID0gYWRkRWxlbWVudCgnZGl2Jywgbm9kZSwgJ2ZpZ3VyZVdyYXAnKTtcbiAgICBjb25zdCBpbWcgPSBhZGRFbGVtZW50KCdpbWcnLCBmaWdXcmFwLCAnZmlndXJlSW1nJyk7XG4gICAgaW1nLnNyYyA9IGltZ1NyYztcbiAgICBjb25zdCBoMyA9IGFkZEVsZW1lbnQoJ2gzJywgZmlnV3JhcCwgJ2ZpZ3VyZUNhcHRpb24nKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IGNhcHRpb24udG9VcHBlckNhc2UoKTtcbiAgICByZXR1cm4gZmlnV3JhcDtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KGlkTmFtZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTmFtZSk7XG4gICAgbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNrZWxldG9uSFRNTCxcbiAgICBhZGRFbGVtZW50LFxuICAgIG5ld0Jsb2NrLFxuICAgIG5ld01lbnVMaW5rLFxuICAgIG5ld01lbnVJdGVtLFxuICAgIGRpc3BsYXlNZW51LFxuICAgIGZlYXR1cmVDb2x1bW4sXG4gICAgY3JlYXRlSW1nRmlndXJlLFxuICAgIHRvZ2dsZUVsZW1lbnQsXG4gIH1cbn0gKSgpO1xuXG5leHBvcnQge2Jsb2Nrc307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4uL2Jsb2Nrcy5qcyc7XG4vLyBpbXBvcnQgYmFja2dyb3VuZEltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2hvbWUtYmctc2xpZGVzaG93Mi5qcGcnO1xuLy8gaW1wb3J0IGZpcnN0Q29sSW1nU3JjIGZyb20gJy4vcmVzb3VyY2VzL2Fib3V0LWltZy5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nMVNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcxLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcyU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzIuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzNTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMy5qcGcnO1xuaW1wb3J0IGhvdXNlTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC5ob3VzZS1taWxrLXRlYS5qcGcnO1xuaW1wb3J0IGJyb3duU3VnYXJNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmJyb3duLXN1Z2FyLW1pbGstdGVhLmpwZyc7XG5pbXBvcnQgdGhhaVRlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC50aGFpLXRlYS5qcGcnO1xuaW1wb3J0IHZpbnRhZ2VCbGFja01pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQudmludGFnZS1ibGFjay1taWxrLXRlYS5qcGcnO1xuaW1wb3J0IGNoZWVzZUphc21pbmVTcmMgZnJvbSAnLi9yZXNvdXJjZXMvY2hlZXpvLnRpcHB5LXRlYS5qcGcnO1xuaW1wb3J0IGdyYXBlRnJ1aXRTcmMgZnJvbSAnLi9yZXNvdXJjZXMvZ3JhcGVmcnVpdC1vdmVyZmxvdy5qcGcnO1xuXG5jb25zdCBkcmlua3NNZW51ID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDYWNoZSBET01cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICBmdW5jdGlvbiBjcmVhdGVEcmlua3NNZW51KCkge1xuICAgIGNvbnN0IGRyaW5rc01lbnVDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbkNvbnRlbnQsICdkcmlua3NNZW51Q29udGFpbmVyJywgJ2RyaW5rc01lbnVDb250YWluZXInKTtcbiAgICBjb25zdCBwcmltYXJ5SGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gyJywgZHJpbmtzTWVudUNvbnRhaW5lciwgJ3ByaW1hcnlIZWFkZXInKTtcbiAgICBwcmltYXJ5SGVhZGVyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gICAgLy8gU3ViIGhlYWRlclxuICAgIGNvbnN0IHN1YkhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoNCcsIGRyaW5rc01lbnVDb250YWluZXIsICdzdWJIZWFkZXInKTtcbiAgICBzdWJIZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuPuKsoTwvc3Bhbj4gT1JHQU5JQyBGUlVJVCA8c3Bhbj7irKE8L3NwYW4+IEhPVCBBVkFJTEFCTEUnO1xuXG4gICAgLy8gR2FsbGVyeVxuICAgIGNvbnN0IGdhbGxlcnkgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZHJpbmtzTWVudUNvbnRhaW5lciwgJ2dhbGxlcnknLCAnZ2FsbGVyeScpO1xuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgaG91c2VNaWxrVGVhU3JjLCAnaG91c2UgbWlsayB0ZWEnKTtcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGJyb3duU3VnYXJNaWxrVGVhU3JjLCAnYnJvd24gc3VnYXIgbWlsayB0ZWEnKTtcbiAgICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIHRoYWlUZWFTcmMsICd0aGFpIHRlYScpO1xuICAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgdmludGFnZUJsYWNrTWlsa1RlYVNyYywgJ3ZpbnRhZ2UgYmxhY2sgdGVhIG1pbGsgdGVhJyk7XG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBjaGVlc2VKYXNtaW5lU3JjLCAnY2hlZXNlIGphc21pbmUgdGlwcHkgdGVhJyk7XG4gICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBncmFwZUZydWl0U3JjLCAnZ3JhcGVncnVpdCBvdmVyZmxvdycpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVEcmlua3NNZW51XG4gIH1cblxufSkoKTtcblxuZXhwb3J0IHtkcmlua3NNZW51fTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcbi8vIGltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG4vLyBpbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG4vLyBpbXBvcnQgaG91c2VNaWxrVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LmhvdXNlLW1pbGstdGVhLmpwZyc7XG4vLyBpbXBvcnQgYnJvd25TdWdhck1pbGtUZWFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvbXQuYnJvd24tc3VnYXItbWlsay10ZWEuanBnJztcbi8vIGltcG9ydCB0aGFpVGVhU3JjIGZyb20gJy4vcmVzb3VyY2VzL210LnRoYWktdGVhLmpwZyc7XG4vLyBpbXBvcnQgdmludGFnZUJsYWNrTWlsa1RlYVNyYyBmcm9tICcuL3Jlc291cmNlcy9tdC52aW50YWdlLWJsYWNrLW1pbGstdGVhLmpwZyc7XG4vLyBpbXBvcnQgY2hlZXNlSmFzbWluZVNyYyBmcm9tICcuL3Jlc291cmNlcy9jaGVlem8udGlwcHktdGVhLmpwZyc7XG4vLyBpbXBvcnQgZ3JhcGVGcnVpdFNyYyBmcm9tICcuL3Jlc291cmNlcy9ncmFwZWZydWl0LW92ZXJmbG93LmpwZyc7XG5cbmNvbnN0IGZlYXR1cmVzID0gKCBmdW5jdGlvbigpIHtcblxuICAvLyBDYWNoZSBET01cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKTtcblxuICAvLyBDcmVhdGUgc2VjdGlvbnNcbiAgZnVuY3Rpb24gY3JlYXRlRmVhdHVyZXMoKSB7XG4gICAgY29uc3QgZmVhdHVyZXMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbkNvbnRlbnQsICcnLCAnZmVhdHVyZXMnKTtcbiAgICBjb25zdCBmZWF0dXJlc0hlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZlYXR1cmVzLCAnZmVhdHVyZUhlYWRlcicpO1xuICAgIGZlYXR1cmVzSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVzJztcbiAgICBjb25zdCBmZWF0dXJlc0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmZWF0dXJlcywgJ2ZlYXR1cmVzQ29udGFpbmVyJyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGZlYXR1cmVzIGNvbHVtbnNcbiAgICBibG9ja3MuZmVhdHVyZUNvbHVtbihcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxuICAgICAgJ2ZlYXR1cmVDb2wnLFxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcbiAgICAgICdmZWF0dXJlSWNvbicsXG4gICAgICAnZmEnLFxuICAgICAgJ2ZhLWNvZmZlZScsXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcbiAgICAgICdURUEnXG4gICAgKTtcbiAgICBibG9ja3MuZmVhdHVyZUNvbHVtbihcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxuICAgICAgJ2ZlYXR1cmVDb2wnLFxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcbiAgICAgICdmZWF0dXJlSWNvbicsXG4gICAgICAnZmEnLFxuICAgICAgJ2ZhLWN1dGxlcnknLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnQkFLRVJZJ1xuICAgICk7XG4gICAgYmxvY2tzLmZlYXR1cmVDb2x1bW4oXG4gICAgICBmZWF0dXJlc0NvbnRhaW5lcixcbiAgICAgICdmZWF0dXJlQ29sJyxcbiAgICAgICdmZWF0dXJlSWNvbkNvbnRhaW5lcicsXG4gICAgICAnZmVhdHVyZUljb24nLFxuICAgICAgJ2ZhJyxcbiAgICAgICdmYS1oZWFydCcsXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcbiAgICAgICdTV0VFVCdcbiAgICApO1xuICB9XG4gIC8vIGZ1bmN0aW9uIGNyZWF0ZUFib3V0VXMoKSB7XG4gIC8vICAgY29uc3QgYWJvdXRVc0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluQ29udGVudCwgJ2Fib3V0VXNDb250YWluZXInLCAnYWJvdXRVc0NvbnRhaW5lcicpO1xuICAvLyAgIGNvbnN0IHByaW1hcnlIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDInLCBhYm91dFVzQ29udGFpbmVyLCAncHJpbWFyeUhlYWRlcicpO1xuICAvLyAgIHByaW1hcnlIZWFkZXIudGV4dENvbnRlbnQgPSAnT3VyIFN0b3J5JztcbiAgLy8gICBwcmltYXJ5SGVhZGVyLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSAndXBwZXJjYXNlJztcblxuICAvLyAgIC8vIE1haW4gYmxvY2sgc3ViIGhlYWRlclxuICAvLyAgIGNvbnN0IHN1YkhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoNCcsIGFib3V0VXNDb250YWluZXIsICdzdWJIZWFkZXInKTtcbiAgLy8gICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBkZWxpY2lvdXMgdGVhIGhvdXNlIHNpbmNlIDIwMTknXG5cbiAgLy8gICAvLyBNYWluIGJsb2NrIGNvbnRlbnRcbiAgLy8gICBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRhaW5lciwgJ2Fib3V0VXNDb250ZW50JywgJ2Fib3V0VXNDb250ZW50Jyk7XG4gIC8vICAgX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpO1xuICAvLyAgIF9jcmVhdGVBYm91dFVzU2Vjb25kQ29sKCk7XG4gIC8vIH1cbiAgLy8gZnVuY3Rpb24gX2NyZWF0ZUFib3V0VXNGaXJzdENvbCgpIHtcbiAgLy8gICBjb25zdCBmaXJzdENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ2ZpcnN0Q29sJyk7XG4gIC8vICAgY29uc3QgaW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0Q29sLCAnZmlyc3RDb2xJbWcnKTtcbiAgLy8gICBpbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIC8vICAgaW1nLnNyYyA9IGZpcnN0Q29sSW1nU3JjO1xuICAvLyAgIGNvbnN0IGltZ0NhcCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RDb2wsICdpbWdDYXAnKTtcbiAgLy8gICBpbWdDYXAudGV4dENvbnRlbnQgPSAnV2UgTWFrZSBldmVydGhpbmcgd2l0aCBMT1ZFJztcbiAgLy8gfVxuICAvLyBmdW5jdGlvbiBfY3JlYXRlQWJvdXRVc1NlY29uZENvbCgpIHtcbiAgLy8gICBjb25zdCBzZWNvbmRDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgYWJvdXRVc0NvbnRlbnQsICdzZWNvbmRDb2wnKTtcblxuICAvLyAgIC8vIE1haW4gYmxvY2sgY29udGVudCBzZWNvbmQgY29sdW1uIHNsaWRlc2hvd1xuICAvLyAgIGNvbnN0IHNsaWRlU2hvd0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzZWNvbmRDb2wsICdzbGlkZVNob3dDb250YWluZXInKTtcbiAgLy8gICBjb25zdCBmaXJzdFNsaWRlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvdycpO1xuICAvLyAgIGNvbnN0IHNlY29uZFNsaWRlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvdycpO1xuICAvLyAgIGNvbnN0IHRoaXJkU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gIC8vICAgZmlyc3RTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gIC8vICAgc2Vjb25kU2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAvLyAgIHRoaXJkU2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAvLyAgIGNvbnN0IHNsaWRlU2hvd05hdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3dOYXYnKTtcbiAgLy8gICBjb25zdCBkb3RzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ2RvdHMnKTtcbiAgLy8gICBjb25zdCBzbGlkZVNob3dDYXB0aW9uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRDb2wsICdzbGlkZVNob3dDYXB0aW9uJyk7XG4gIC8vICAgc2xpZGVTaG93Q2FwdGlvbi50ZXh0Q29udGVudCA9ICdNb3JlIGNvbWZvcnRhYmxlIHNwYWNlJztcbiAgLy8gICBjb25zdCBmaXJzdEltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBmaXJzdFNsaWRlKTtcbiAgLy8gICBmaXJzdEltZy5zcmMgPSBzdG9yeUltZzFTcmM7XG4gIC8vICAgY29uc3Qgc2Vjb25kSW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIHNlY29uZFNsaWRlKTtcbiAgLy8gICBzZWNvbmRJbWcuc3JjID0gc3RvcnlJbWcyU3JjO1xuICAvLyAgIGNvbnN0IHRoaXJkSW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIHRoaXJkU2xpZGUpO1xuICAvLyAgIHRoaXJkSW1nLnNyYyA9IHN0b3J5SW1nM1NyYztcbiAgLy8gICBjb25zdCBwcmV2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAvLyAgIHByZXYuY2xhc3NMaXN0LmFkZCgncHJldicpO1xuICAvLyAgIHByZXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcmV2Jyk7XG4gIC8vICAgY29uc3QgbmV4dCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgc2xpZGVTaG93TmF2KTtcbiAgLy8gICBuZXh0LmNsYXNzTGlzdC5hZGQoJ25leHQnKTtcbiAgLy8gICBuZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV4dCcpO1xuICAvLyAgIHByZXYuaW5uZXJIVE1MID0gJyYjMTAwOTQ7JztcbiAgLy8gICBuZXh0LmlubmVySFRNTCA9ICcmIzEwMDk1Oyc7XG4gIC8vICAgY29uc3QgZmlyc3REb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xuICAvLyAgIGNvbnN0IHNlY29uZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gIC8vICAgY29uc3QgdGhpcmREb3QgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIGRvdHMpO1xuICAvLyAgIGZpcnN0RG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAvLyAgIHNlY29uZERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgLy8gICB0aGlyZERvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgLy8gfVxuICAvLyBmdW5jdGlvbiBjcmVhdGVEcmlua3NNZW51KCkge1xuICAvLyAgIGNvbnN0IGRyaW5rc01lbnVDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbkNvbnRlbnQsICdkcmlua3NNZW51Q29udGFpbmVyJywgJ2RyaW5rc01lbnVDb250YWluZXInKTtcbiAgLy8gICBjb25zdCBwcmltYXJ5SGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gyJywgZHJpbmtzTWVudUNvbnRhaW5lciwgJ3ByaW1hcnlIZWFkZXInKTtcbiAgLy8gICBwcmltYXJ5SGVhZGVyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAvLyAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gIC8vICAgLy8gU3ViIGhlYWRlclxuICAvLyAgIGNvbnN0IHN1YkhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoNCcsIGRyaW5rc01lbnVDb250YWluZXIsICdzdWJIZWFkZXInKTtcbiAgLy8gICBzdWJIZWFkZXIuaW5uZXJIVE1MID0gJzxzcGFuPuKsoTwvc3Bhbj4gT1JHQU5JQyBGUlVJVCA8c3Bhbj7irKE8L3NwYW4+IEhPVCBBVkFJTEFCTEUnO1xuXG4gIC8vICAgLy8gR2FsbGVyeVxuICAvLyAgIGNvbnN0IGdhbGxlcnkgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZHJpbmtzTWVudUNvbnRhaW5lciwgJ2dhbGxlcnknLCAnZ2FsbGVyeScpO1xuICAvLyAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgaG91c2VNaWxrVGVhU3JjLCAnaG91c2UgbWlsayB0ZWEnKTtcbiAgLy8gICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIGJyb3duU3VnYXJNaWxrVGVhU3JjLCAnYnJvd24gc3VnYXIgbWlsayB0ZWEnKTtcbiAgLy8gICBibG9ja3MuY3JlYXRlSW1nRmlndXJlKGdhbGxlcnksIHRoYWlUZWFTcmMsICd0aGFpIHRlYScpO1xuICAvLyAgIGJsb2Nrcy5jcmVhdGVJbWdGaWd1cmUoZ2FsbGVyeSwgdmludGFnZUJsYWNrTWlsa1RlYVNyYywgJ3ZpbnRhZ2UgYmxhY2sgdGVhIG1pbGsgdGVhJyk7XG4gIC8vICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBjaGVlc2VKYXNtaW5lU3JjLCAnY2hlZXNlIGphc21pbmUgdGlwcHkgdGVhJyk7XG4gIC8vICAgYmxvY2tzLmNyZWF0ZUltZ0ZpZ3VyZShnYWxsZXJ5LCBncmFwZUZydWl0U3JjLCAnZ3JhcGVncnVpdCBvdmVyZmxvdycpO1xuICAvLyB9XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVGZWF0dXJlcyxcbiAgfVxuXG59KSgpO1xuXG5leHBvcnQge2ZlYXR1cmVzfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcbi8vIGltcG9ydCBMb2dvIGZyb20gJy4vcmVzb3VyY2VzL1RFQUxBWC10cmFuc3BhcmVudC5wbmcnO1xuLy8gaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzIuanBnJztcbi8vIGltcG9ydCBmaXJzdENvbEltZ1NyYyBmcm9tICcuL3Jlc291cmNlcy9hYm91dC1pbWcuanBnJztcbi8vIGltcG9ydCBzdG9yeUltZzFTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMS5qcGcnO1xuLy8gaW1wb3J0IHN0b3J5SW1nMlNyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWcyLmpwZyc7XG4vLyBpbXBvcnQgc3RvcnlJbWczU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzMuanBnJztcblxuY29uc3QgZm9vdGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIC8vIENyZWF0ZSBzZWN0aW9uc1xuICBmdW5jdGlvbiBfY3JlYXRlRm9vdGVyRmlyc3RDb2woKSB7XG4gICAgY29uc3QgZmlyc3RGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3Qgam9pblVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXMnKTtcbiAgICBqb2luVXMudGV4dENvbnRlbnQgPSAnSm9pbiBVcyc7XG4gICAgY29uc3Qgam9pblVzRGVzYyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNEZXNjJyk7XG4gICAgam9pblVzRGVzYy50ZXh0Q29udGVudCA9ICdBbHdheXMgbG9va2luZyBmb3IgZnJpZW5kbHkgc3RhZmYgd2l0aCBwb3NpdGl2ZSBhdHRpdHVkZXMhIFBsZWFzZSBzdWJtaXQgeW91ciByZXN1bWUgdG8nO1xuICAgIGNvbnN0IGpvaW5Vc0VtYWlsTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNFbWFpbExpbmsnKTtcbiAgICBqb2luVXNFbWFpbExpbmsuaW5uZXJIVE1MID0gJ2hlbGxvQHRlYWxheC5jb20nO1xuICAgIGpvaW5Vc0VtYWlsTGluay5ocmVmID0gJ21haWx0bzpoZWxsb0B0ZWFsYXguY29tJztcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlRm9vdGVyU2Vjb25kQ29sKCkge1xuICAgIGNvbnN0IHNlY29uZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTE9DQVRJT04nO1xuICAgIGNvbnN0IGxvY2F0aW9uQWRkciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25BZGRyJyk7XG4gICAgbG9jYXRpb25BZGRyLnRleHRDb250ZW50ID0gJzEyMzQgQmVsbGFpcmUnO1xuICAgIGNvbnN0IGxvY2F0aW9uQ2l0eSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25DaXR5Jyk7XG4gICAgbG9jYXRpb25DaXR5LnRleHRDb250ZW50ID0gJ0hvdXN0b24sIFRYIDc3MDM2JztcbiAgICBjb25zdCBsb2NhdGlvblBob25lTnVtYmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvblBob25lTnVtYmVyJyk7XG4gICAgbG9jYXRpb25QaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcyODEtOTk5LTA5MDknO1xuICAgIFxuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVGb290ZXJUaGlyZENvbCgpIHtcbiAgICBjb25zdCB0aGlyZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc1RpdGxlJyk7XG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIT1VSUyc7XG4gICAgY29uc3QgaG91cnNEYXRlcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0RhdGVzJyk7XG4gICAgaG91cnNEYXRlcy50ZXh0Q29udGVudCA9ICdTVU5EQVkgLSBGUklEQVknO1xuICAgIGNvbnN0IGhvdXJzSG91cnMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNIb3VycycpO1xuICAgIGhvdXJzSG91cnMudGV4dENvbnRlbnQgPSAnMTE6MDAgQU0gLSA5OjAwIFBNJztcbiAgfVxuICBcbiAgLy8gUmVuZGVyIHRvIHRoZSBET01cbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIF9jcmVhdGVGb290ZXJGaXJzdENvbCgpO1xuICAgIF9jcmVhdGVGb290ZXJTZWNvbmRDb2woKTtcbiAgICBfY3JlYXRlRm9vdGVyVGhpcmRDb2woKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9XG59KSgpO1xuXG5leHBvcnQge2Zvb3RlckJsb2NrfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi4vYmxvY2tzLmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vcmVzb3VyY2VzL1RFQUxBWC10cmFuc3BhcmVudC5wbmcnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzEuanBnJztcblxuY29uc3QgaGVhZGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIC8vIENhY2hlIERPTVxuXG4gIC8vIENyZWF0aW5nIHNlY3Rpb25zXG4gIGZ1bmN0aW9uIF9zdHlsZUhlYWRlckJsb2NrKCkge1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk0LCAyMSwgMCwgLjUpICwgcmdiYSgyNTUsIDE5NywgMCwgLjUpKSwgdXJsKCcke2JhY2tncm91bmRJbWFnZVNyY30nKWA7XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZU5hdkJhcigpIHtcbiAgICBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgaGVhZGVyLCAnJywgJ21haW5OYXYnKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlTG9nbygpIHtcbiAgICBjb25zdCBsb2dvRGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OYXYsICdsb2dvRGl2Jyk7XG4gICAgY29uc3QgbWFpbkxvZ28gPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgbG9nb0RpdiwgJ21haW5Mb2dvJywgJ21haW5Mb2dvJyk7XG4gICAgbWFpbkxvZ28uc3JjID0gTG9nbztcbiAgICBjb25zdCBob21lcGFnZUxpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGxvZ29EaXYsICcnLCAnbWFpbkxvZ29MaW5rJyk7XG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcbiAgfVxuICBmdW5jdGlvbiBfY3JlYXRlTW9iaWxlTWVudUljb24oKSB7XG4gICAgY29uc3QgbWVudURpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTmF2LCAnbWVudURpdicpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWVudURpdiwgJ21vYmlsZU1lbnUnLCAnbW9iaWxlTWVudScpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVJY29uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2knLCBtb2JpbGVNZW51LCAnZmFzJyk7XG4gICAgbW9iaWxlTWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgIG1vYmlsZU1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYnVyZ2VyTWVudScpO1xuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVOYXZNZW51KCkge1xuICAgIGNvbnN0IE1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVEaXYnKTtcbiAgICBjb25zdCBtYWluTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbWVudURpdiwgJ21haW5NZW51Jyk7XG4gICAgLy8gbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnZHJvcERvd24nKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2ZlYXR1cmVzTGluaycsICdtZW51TGlzdCcsICdGZWF0dXJlcycpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnYWJvdXRMaW5rJywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdtZW51TGluaycsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1haW5NZW51LCBNZW51QXJyKTtcbiAgfVxuXG4gIC8vIFJlbmRlciB0byB0aGUgRE9NXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBfc3R5bGVIZWFkZXJCbG9jaygpXG4gICAgX2NyZWF0ZU5hdkJhcigpO1xuICAgIF9jcmVhdGVMb2dvKCk7XG4gICAgX2NyZWF0ZU1vYmlsZU1lbnVJY29uKCk7XG4gICAgX2NyZWF0ZU5hdk1lbnUoKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9XG5cbn0pKCk7XG5cbmV4cG9ydCB7aGVhZGVyQmxvY2t9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBoZWFkZXJCbG9jayB9IGZyb20gJy4vaGVhZGVyQmxvY2svaGVhZGVyQmxvY2suanMnO1xuaW1wb3J0IHsgZmVhdHVyZXMgfSBmcm9tICcuL2ZlYXR1cmVzL2ZlYXR1cmVzLmpzJztcbmltcG9ydCB7IGFib3V0VXMgfSBmcm9tICcuL2Fib3V0VXMvYWJvdXRVcy5qcyc7XG5pbXBvcnQgeyBkcmlua3NNZW51IH0gZnJvbSAnLi9kcmlua3NNZW51L2RyaW5rc01lbnUuanMnO1xuaW1wb3J0IHsgZm9vdGVyQmxvY2sgfSBmcm9tICcuL2Zvb3RlckJsb2NrL2Zvb3RlckJsb2NrLmpzJztcblxuKCBmdW5jdGlvbigpIHtcblxuICBfaW5pdCgpO1xuXG4gIC8vIENhY2hlIERPTVxuICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluTWVudScpO1xuXG4gIC8vIEZ1bmN0aW9uc1xuICBtYWluTG9nb0xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0ZlYXR1cmVzKTtcbiAgZmVhdHVyZXNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dGZWF0dXJlcyk7XG4gIGFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93QWJvdXRVcyk7XG4gIG1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dEcmlua3NNZW51KTtcbiAgbW9iaWxlTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93TW9iaWxlTWVudSk7XG5cbiAgZnVuY3Rpb24gX3Nob3dGZWF0dXJlcygpIHtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBmZWF0dXJlcy5jcmVhdGVGZWF0dXJlcygpO1xuICB9XG4gIGZ1bmN0aW9uIF9zaG93QWJvdXRVcygpIHtcbiAgICB3aGlsZSAobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgbWFpbkNvbnRlbnQucmVtb3ZlQ2hpbGQobWFpbkNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGFib3V0VXMuY3JlYXRlQWJvdXRVcygpO1xuICB9XG4gIGZ1bmN0aW9uIF9zaG93RHJpbmtzTWVudSgpIHtcbiAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBkcmlua3NNZW51LmNyZWF0ZURyaW5rc01lbnUoKTtcbiAgfVxuICBmdW5jdGlvbiBfc2hvd01vYmlsZU1lbnUoKSB7XG4gICAgbWFpbk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcERvd24nKTtcbiAgfVxuICBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICBoZWFkZXJCbG9jay5yZW5kZXIoKTtcbiAgICBmZWF0dXJlcy5jcmVhdGVGZWF0dXJlcygpO1xuICAgIGZvb3RlckJsb2NrLnJlbmRlcigpO1xuICB9XG4gIFxufSkoKTtcblxuLy8gLy8gRnVuY3Rpb24gc2xpZGUgc2hvd1xuLy8gY29uc3Qgc2xpZGVTaG93ID0gKCBmdW5jdGlvbigpIHtcbi8vICAgLy8gQ2FjaGUgRE9NXG4vLyAgICAgY29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZVNob3cnKSk7XG4vLyAgICAgY29uc3QgZG90cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG90JykpO1xuLy8gICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldicpO1xuLy8gICAgIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpO1xuXG4vLyAgICAgLy8gSW5pdFxuLy8gICAgIGxldCBzbGlkZUluZGV4ID0gMDtcbi8vICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCk7XG4gICAgXG4vLyAgICAgLy8gU2hvdyBzbGlkZSBieSBTbGlkZUluZGV4XG4vLyAgICAgZnVuY3Rpb24gc2hvd1NsaWRlKG4pIHtcbi8vICAgICAgIGlmICghc2xpZGVzWzBdKSB7XG4vLyAgICAgICAgIHJldHVyblxuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgc2xpZGVzLm1hcCggc2xpZGUgPT4ge1xuLy8gICAgICAgICAgIHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIGRvdHMubWFwKCBkb3QgPT4ge1xuLy8gICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgaWYgKG4gPiBzbGlkZXMubGVuZ3RoIC0gMSkge1xuLy8gICAgICAgICAgIHNsaWRlSW5kZXggPSAwO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmICggbiA8IDApIHtcbi8vICAgICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgc2xpZGVzW3NsaWRlSW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuLy8gICAgICAgICBkb3RzW3NsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuLy8gICAgICAgfVxuICAgICAgXG4vLyAgICAgfVxuXG4vLyAgICAgLy8gU2hvdyBjdXJyZW50IHNsaWRlXG4vLyAgICAgaWYgKCFkb3RzWzBdKSB7XG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9IGVsc2Uge1xuLy8gICAgICAgZG90cy5mb3JFYWNoKCAoZG90LCBpbmRleCkgPT4ge1xuLy8gICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgICBjdXJyZW50U2xpZGUoaW5kZXgpXG4vLyAgICAgICAgIH0pO1xuLy8gICAgICAgfSlcbi8vICAgICB9XG4gICAgXG4vLyAgICAgZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcbi8vICAgICAgIHNob3dTbGlkZShzbGlkZUluZGV4ID0gbik7XG4vLyAgICAgfVxuXG4vLyAgICAgLy8gTmV4dCBvciBwcmV2IHNsaWRlXG4vLyAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuLy8gICAgICAgbmV4dFNsaWRlKC0xKTtcbi8vICAgICB9KTtcbi8vICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpIHtcbi8vICAgICAgIG5leHRTbGlkZSgxKTtcbi8vICAgICB9KTtcbi8vICAgICBmdW5jdGlvbiBuZXh0U2xpZGUobikge1xuLy8gICAgICAgc2hvd1NsaWRlKHNsaWRlSW5kZXggKz0gbik7XG4vLyAgICAgfVxuLy8gfSkoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==