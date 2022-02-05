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
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_TEALAX_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/TEALAX-transparent.png */ "./src/aboutUs/resources/TEALAX-transparent.png");
/* harmony import */ var _resources_home_bg_slideshow2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/home-bg-slideshow2.jpg */ "./src/aboutUs/resources/home-bg-slideshow2.jpg");
/* harmony import */ var _resources_about_img_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/about-img.jpg */ "./src/aboutUs/resources/about-img.jpg");





const aboutUs = ( function() {
  const _headerBlock = ( function() {

    // Cache DOM
    const header = document.getElementById('header');
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${_resources_home_bg_slideshow2_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;
    header.style.height = '600px';
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
    const MobileMenuArr = [];
    const mobileMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', menuDiv, 'mobileMenu', 'mobileMenu');
    const mobileMenuIcon = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.setAttribute('id', 'hamburgerMenu');
    const mobileMenuList = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('menu', mobileMenu, 'mobileMenuList', 'mobileMenuList');
    mobileMenuList.classList.add('hideElement');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'features', 'menuList', 'Features');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'about', 'menuList', 'About');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'menu', 'menuList', 'Menu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.displayMenu(mobileMenuList, MobileMenuArr);
  });
  
  const _mainBlock = ( function() {

    // Cache DOM
    const main = document.getElementById('main');
    
    // Main block primary header
    const primaryHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h2', main, 'primaryHeader');
    primaryHeader.textContent = 'Our Story';
    primaryHeader.style.textTransform = 'uppercase';

    // Main block sub header
    const subHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h4', main, 'primaryHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    const mainContent = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', main, 'mainContent')
    mainContent.style.width = '70%';
    mainContent.style.margin = '0 auto';

    // Main block content first column
    const firstCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainContent, 'firstCol');
    firstCol.style.width = '30%';
    const img = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', firstCol, 'firstColImg');
    img.style.width = '100%';
    img.src = _resources_about_img_jpg__WEBPACK_IMPORTED_MODULE_3__;
    const imgCap = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', firstCol, 'imgCap');
    imgCap.textContent = 'We Make everthing with LOVE';

    // Main block content second column
    const secondCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', mainContent, 'secondCOl');
    secondCol.style.width = '100%';

    // Main block content second column slideshow
    const secondColSlideContainer = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', secondCol, 'slideShowContainer');
    

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
    toggleElement,
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
    const MobileMenuArr = [];
    const mobileMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', menuDiv, 'mobileMenu', 'mobileMenu');
    const mobileMenuIcon = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.setAttribute('id', 'hamburgerMenu');
    const mobileMenuList = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('menu', mobileMenu, 'mobileMenuList', 'mobileMenuList');
    mobileMenuList.classList.add('hideElement');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'features', 'menuList', 'Features');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'about', 'menuList', 'About');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'menu', 'menuList', 'Menu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.displayMenu(mobileMenuList, MobileMenuArr);
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

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _blocks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../blocks.js */ "./src/blocks.js");
/* harmony import */ var _resources_TEALAX_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/TEALAX-transparent.png */ "./src/menu/resources/TEALAX-transparent.png");
/* harmony import */ var _resources_home_bg_slideshow2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/home-bg-slideshow2.jpg */ "./src/menu/resources/home-bg-slideshow2.jpg");




const menu = ( function() {
  const _headerBlock = ( function() {

    // Cache DOM
    const header = document.getElementById('header');
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${_resources_home_bg_slideshow2_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;

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
    const MobileMenuArr = [];
    const mobileMenu = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', menuDiv, 'mobileMenu', 'mobileMenu');
    const mobileMenuIcon = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.setAttribute('id', 'hamburgerMenu');
    const mobileMenuList = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('menu', mobileMenu, 'mobileMenuList', 'mobileMenuList');
    mobileMenuList.classList.add('hideElement');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'features', 'menuList', 'Features');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'about', 'menuList', 'About');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.newMenuItem(MobileMenuArr, 'menu', 'menuList', 'Menu');
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.displayMenu(mobileMenuList, MobileMenuArr);
  });
  
  const _mainBlock = ( function() {

    // Cache DOM
    const main = document.getElementById('main');
    
    
   
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

/***/ "./src/aboutUs/resources/TEALAX-transparent.png":
/*!******************************************************!*\
  !*** ./src/aboutUs/resources/TEALAX-transparent.png ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9ae7dc1d75435a7408.png";

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

/***/ }),

/***/ "./src/menu/resources/TEALAX-transparent.png":
/*!***************************************************!*\
  !*** ./src/menu/resources/TEALAX-transparent.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f9ae7dc1d75435a7408.png";

/***/ }),

/***/ "./src/menu/resources/home-bg-slideshow2.jpg":
/*!***************************************************!*\
  !*** ./src/menu/resources/home-bg-slideshow2.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3598f2a2f49f87f7b02f.jpg";

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
/* harmony import */ var _aboutUs_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutUs/aboutUs.js */ "./src/aboutUs/aboutUs.js");
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.js */ "./src/menu/menu.js");







const createPage = ( function() {
  
  function _init() {
    _aboutUs_aboutUs_js__WEBPACK_IMPORTED_MODULE_4__.aboutUs.render();
  }

  _init();
})();


const mobileMenu = ( function() {

  // Cache DOM
  const hamburgerMenu = document.getElementById('hamburgerMenu');

  // Toogle mobile menu
  hamburgerMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    _blocks_js__WEBPACK_IMPORTED_MODULE_2__.blocks.toggleElement('mobileMenuList', 'hideElement');
  }


})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSwrREFBYztBQUNsQjs7QUFFQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQW9CO0FBQ3hCOzs7QUFHQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Jlc2V0LmNzcz9jZTM4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9hYm91dFVzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lcGFnZS9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi8uLi9ibG9ja3MuanMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9yZXNvdXJjZXMvVEVBTEFYLXRyYW5zcGFyZW50LnBuZyc7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2hvbWUtYmctc2xpZGVzaG93Mi5qcGcnO1xuaW1wb3J0IGZpcnN0Q29sSW1nU3JjIGZyb20gJy4vcmVzb3VyY2VzL2Fib3V0LWltZy5qcGcnO1xuXG5jb25zdCBhYm91dFVzID0gKCBmdW5jdGlvbigpIHtcbiAgY29uc3QgX2hlYWRlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDE5NCwgMjEsIDAsIC41KSAsIHJnYmEoMjU1LCAxOTcsIDAsIC41KSksIHVybCgnJHtiYWNrZ3JvdW5kSW1hZ2VTcmN9JylgO1xuICAgIGhlYWRlci5zdHlsZS5oZWlnaHQgPSAnNjAwcHgnO1xuICAgIC8vIENyZWF0ZSBNYWluIE5hdmlnYXRpb25cbiAgICBjb25zdCBtYWluTkF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGhlYWRlciwgJ21haW5OYXYnKTtcbiAgICBjb25zdCBsb2dvRGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OQXYsICdsb2dvRGl2Jyk7XG4gICAgY29uc3QgbWFpbkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluTG9nby5zcmMgPSBMb2dvO1xuICAgIG1haW5Mb2dvLmNsYXNzTGlzdC5hZGQoJ21haW5Mb2dvJyk7XG4gICAgY29uc3QgaG9tZXBhZ2VMaW5rID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBsb2dvRGl2KTtcbiAgICBob21lcGFnZUxpbmsuaHJlZiA9ICcuL2luZGV4Lmh0bWwnO1xuICAgIGhvbWVwYWdlTGluay5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG5cbiAgICAvLyBDcmVhdGUgTWFpbiBNZW51IEJsb2NrXG4gICAgY29uc3QgTWVudUFyciA9IFtdO1xuICAgIGNvbnN0IG1lbnVEaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5BdiwgJ21lbnVEaXYnKTtcbiAgICBjb25zdCBtYWluTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbWVudURpdiwgJ21haW5NZW51Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdmZWF0dXJlcycsICdtZW51TGlzdCcsICdGZWF0dXJlcycpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnYWJvdXQnLCAnbWVudUxpc3QnLCAnQWJvdXQnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ21lbnUnLCAnbWVudUxpc3QnLCAnTWVudScpO1xuICAgIGJsb2Nrcy5kaXNwbGF5TWVudShtYWluTWVudSwgTWVudUFycik7XG5cbiAgICAvLyBDcmVhdGUgbW9iaWxlIG1lbnVcbiAgICBjb25zdCBNb2JpbGVNZW51QXJyID0gW107XG4gICAgY29uc3QgbW9iaWxlTWVudSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtZW51RGl2LCAnbW9iaWxlTWVudScsICdtb2JpbGVNZW51Jyk7XG4gICAgY29uc3QgbW9iaWxlTWVudUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIG1vYmlsZU1lbnUsICdmYXMnKTtcbiAgICBtb2JpbGVNZW51SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1iYXJzJyk7XG4gICAgbW9iaWxlTWVudUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdoYW1idXJnZXJNZW51Jyk7XG4gICAgY29uc3QgbW9iaWxlTWVudUxpc3QgPSBibG9ja3MuYWRkRWxlbWVudCgnbWVudScsIG1vYmlsZU1lbnUsICdtb2JpbGVNZW51TGlzdCcsICdtb2JpbGVNZW51TGlzdCcpO1xuICAgIG1vYmlsZU1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZGVFbGVtZW50Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1vYmlsZU1lbnVBcnIsICdmZWF0dXJlcycsICdtZW51TGlzdCcsICdGZWF0dXJlcycpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNb2JpbGVNZW51QXJyLCAnYWJvdXQnLCAnbWVudUxpc3QnLCAnQWJvdXQnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTW9iaWxlTWVudUFyciwgJ21lbnUnLCAnbWVudUxpc3QnLCAnTWVudScpO1xuICAgIGJsb2Nrcy5kaXNwbGF5TWVudShtb2JpbGVNZW51TGlzdCwgTW9iaWxlTWVudUFycik7XG4gIH0pO1xuICBcbiAgY29uc3QgX21haW5CbG9jayA9ICggZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBDYWNoZSBET01cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBcbiAgICAvLyBNYWluIGJsb2NrIHByaW1hcnkgaGVhZGVyXG4gICAgY29uc3QgcHJpbWFyeUhlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMicsIG1haW4sICdwcmltYXJ5SGVhZGVyJyk7XG4gICAgcHJpbWFyeUhlYWRlci50ZXh0Q29udGVudCA9ICdPdXIgU3RvcnknO1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gICAgLy8gTWFpbiBibG9jayBzdWIgaGVhZGVyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgbWFpbiwgJ3ByaW1hcnlIZWFkZXInKTtcbiAgICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBkZWxpY2lvdXMgdGVhIGhvdXNlIHNpbmNlIDIwMTknXG5cbiAgICAvLyBNYWluIGJsb2NrIGNvbnRlbnRcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluLCAnbWFpbkNvbnRlbnQnKVxuICAgIG1haW5Db250ZW50LnN0eWxlLndpZHRoID0gJzcwJSc7XG4gICAgbWFpbkNvbnRlbnQuc3R5bGUubWFyZ2luID0gJzAgYXV0byc7XG5cbiAgICAvLyBNYWluIGJsb2NrIGNvbnRlbnQgZmlyc3QgY29sdW1uXG4gICAgY29uc3QgZmlyc3RDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbkNvbnRlbnQsICdmaXJzdENvbCcpO1xuICAgIGZpcnN0Q29sLnN0eWxlLndpZHRoID0gJzMwJSc7XG4gICAgY29uc3QgaW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0Q29sLCAnZmlyc3RDb2xJbWcnKTtcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgaW1nLnNyYyA9IGZpcnN0Q29sSW1nU3JjO1xuICAgIGNvbnN0IGltZ0NhcCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RDb2wsICdpbWdDYXAnKTtcbiAgICBpbWdDYXAudGV4dENvbnRlbnQgPSAnV2UgTWFrZSBldmVydGhpbmcgd2l0aCBMT1ZFJztcblxuICAgIC8vIE1haW4gYmxvY2sgY29udGVudCBzZWNvbmQgY29sdW1uXG4gICAgY29uc3Qgc2Vjb25kQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5Db250ZW50LCAnc2Vjb25kQ09sJyk7XG4gICAgc2Vjb25kQ29sLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuXG4gICAgLy8gTWFpbiBibG9jayBjb250ZW50IHNlY29uZCBjb2x1bW4gc2xpZGVzaG93XG4gICAgY29uc3Qgc2Vjb25kQ29sU2xpZGVDb250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnc2xpZGVTaG93Q29udGFpbmVyJyk7XG4gICAgXG5cbiAgfSk7XG4gIFxuICBjb25zdCBfZm9vdGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGZpcnN0Rm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IHNlY29uZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCB0aGlyZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcblxuICAgIC8vIEZpcnN0IEZvb3RlciBDb2xcbiAgICBjb25zdCBqb2luVXMgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5VcycpO1xuICAgIGpvaW5Vcy50ZXh0Q29udGVudCA9ICdKb2luIFVzJztcbiAgICBjb25zdCBqb2luVXNEZXNjID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0Rlc2MnKTtcbiAgICBqb2luVXNEZXNjLnRleHRDb250ZW50ID0gJ0Fsd2F5cyBsb29raW5nIGZvciBmcmllbmRseSBzdGFmZiB3aXRoIHBvc2l0aXZlIGF0dGl0dWRlcyEgUGxlYXNlIHN1Ym1pdCB5b3VyIHJlc3VtZSB0byc7XG4gICAgY29uc3Qgam9pblVzRW1haWxMaW5rID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0VtYWlsTGluaycpO1xuICAgIGpvaW5Vc0VtYWlsTGluay5pbm5lckhUTUwgPSAnaGVsbG9AdGVhbGF4LmNvbSc7XG4gICAgam9pblVzRW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmhlbGxvQHRlYWxheC5jb20nO1xuXG4gICAgLy8gU2Vjb25kIEZvb3RlciBDb2xcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTE9DQVRJT04nO1xuICAgIGNvbnN0IGxvY2F0aW9uQWRkciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25BZGRyJyk7XG4gICAgbG9jYXRpb25BZGRyLnRleHRDb250ZW50ID0gJzEyMzQgQmVsbGFpcmUnO1xuICAgIGNvbnN0IGxvY2F0aW9uQ2l0eSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25DaXR5Jyk7XG4gICAgbG9jYXRpb25DaXR5LnRleHRDb250ZW50ID0gJ0hvdXN0b24sIFRYIDc3MDM2JztcbiAgICBjb25zdCBsb2NhdGlvblBob25lTnVtYmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvblBob25lTnVtYmVyJyk7XG4gICAgbG9jYXRpb25QaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcyODEtOTk5LTA5MDknO1xuXG4gICAgLy8gVGhpcmQgRm9vdGVyIENvbFxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzVGl0bGUnKTtcbiAgICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0hPVVJTJztcbiAgICBjb25zdCBob3Vyc0RhdGVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzRGF0ZXMnKTtcbiAgICBob3Vyc0RhdGVzLnRleHRDb250ZW50ID0gJ1NVTkRBWSAtIEZSSURBWSc7XG4gICAgY29uc3QgaG91cnNIb3VycyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0hvdXJzJyk7XG4gICAgaG91cnNIb3Vycy50ZXh0Q29udGVudCA9ICcxMTowMCBBTSAtIDk6MDAgUE0nO1xuXG4gIH0pO1xuICBcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGJsb2Nrcy5za2VsZXRvbkhUTUwoKTtcbiAgICBfaGVhZGVyQmxvY2soKTtcbiAgICBfbWFpbkJsb2NrKCk7XG4gICAgX2Zvb3RlckJsb2NrKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfVxufSkoKTtcblxuXG5leHBvcnQge2Fib3V0VXN9OyIsImNvbnN0IGJsb2NrcyA9ICggZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgX21haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gc2tlbGV0b25IVE1MKCkge1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2hlYWRlcicpKTtcbiAgICBfbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvY2tzLm5ld0Jsb2NrKCdtYWluJykpO1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2Zvb3RlcicpKTtcbiAgfVxuICBmdW5jdGlvbiBuZXdCbG9jayhuYW1lKXtcbiAgICBjb25zdCBibG9jayA9IGFkZEVsZW1lbnQoJ2RpdicpO1xuICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUxpbmsoaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gYWRkRWxlbWVudCgnbGknLCAnJywgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGFkZEVsZW1lbnQoJ2EnLCBuZXdJdGVtKTtcbiAgICBuZXdJdGVtTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgLi8jJHtpZH1gKTtcbiAgICBuZXdJdGVtTGluay5pbm5lckhUTUwgPSBtZW51TmFtZTtcbiAgICByZXR1cm4gbmV3SXRlbTtcbiAgfVxuICBmdW5jdGlvbiBmZWF0dXJlQ29sdW1uKFxuICAgIG5vZGUsXG4gICAgY29sQ2xhc3NOYW1lLCBcbiAgICBzdWJDb2xDbGFzc05hbWUsIFxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcbiAgICBmaXJzdEZlYXR1cmVJY29uQ2xhc3NOYW1lLFxuICAgIHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lLCBcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXG4gICAgZmVhdHVyZVRpdGxlQ29udGVudFxuICAgICkge1xuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZChjb2xDbGFzc05hbWUpO1xuICAgIGNvbnN0IHN1YkNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBjb2wpO1xuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb25Db250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIHN1YkNvbCk7XG4gICAgZmVhdHVyZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChmZWF0dXJlSWNvbkNvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoc2Vjb25kRmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XG4gICAgZmVhdHVyZVRpdGxlLmNsYXNzTGlzdC5hZGQoZmVhdHVyZVRpdGxlQ2xhc3NOYW1lKTtcbiAgICBmZWF0dXJlVGl0bGUudGV4dENvbnRlbnQgPSBmZWF0dXJlVGl0bGVDb250ZW50O1xuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUl0ZW0oYXJyLCBpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcbiAgICBhcnIucHVzaChtZW51SXRlbSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5TWVudShub2RlLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJbaV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZSwgbm9kZSwgY2xhc3NOYW1lLCBpZE5hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xuICAgIGlmIChjbGFzc05hbWUpIHtlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKX1cbiAgICBpZiAoaWROYW1lKSB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKX1cbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KGlkTmFtZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTmFtZSk7XG4gICAgbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIF9tYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuICByZXR1cm4ge1xuICAgIHNrZWxldG9uSFRNTCxcbiAgICBhZGRFbGVtZW50LFxuICAgIG5ld0Jsb2NrLFxuICAgIG5ld01lbnVMaW5rLFxuICAgIG5ld01lbnVJdGVtLFxuICAgIGRpc3BsYXlNZW51LFxuICAgIGZlYXR1cmVDb2x1bW4sXG4gICAgdG9nZ2xlRWxlbWVudCxcbiAgICBjbGVhclBhZ2UsXG4gIH1cbn0gKSgpO1xuXG5leHBvcnQge2Jsb2Nrc307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4vLi4vYmxvY2tzLmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vcmVzb3VyY2VzL1RFQUxBWC10cmFuc3BhcmVudC5wbmcnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzEuanBnJztcblxuY29uc3QgaG9tZXBhZ2UgPSAoIGZ1bmN0aW9uKCkge1xuICBjb25zdCBfaGVhZGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gQ2FjaGUgRE9NXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk0LCAyMSwgMCwgLjUpICwgcmdiYSgyNTUsIDE5NywgMCwgLjUpKSwgdXJsKCcke2JhY2tncm91bmRJbWFnZVNyY30nKWA7XG5cbiAgICAvLyBDcmVhdGUgTWFpbiBOYXZpZ2F0aW9uXG4gICAgY29uc3QgbWFpbk5BdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBoZWFkZXIsICdtYWluTmF2Jyk7XG4gICAgY29uc3QgbG9nb0RpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTkF2LCAnbG9nb0RpdicpO1xuICAgIGNvbnN0IG1haW5Mb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbWFpbkxvZ28uc3JjID0gTG9nbztcbiAgICBtYWluTG9nby5jbGFzc0xpc3QuYWRkKCdtYWluTG9nbycpO1xuICAgIGNvbnN0IGhvbWVwYWdlTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgbG9nb0Rpdik7XG4gICAgaG9tZXBhZ2VMaW5rLmhyZWYgPSAnLi9pbmRleC5odG1sJztcbiAgICBob21lcGFnZUxpbmsuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuXG4gICAgLy8gQ3JlYXRlIE1haW4gTWVudSBCbG9ja1xuICAgIGNvbnN0IE1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtZW51RGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OQXYsICdtZW51RGl2Jyk7XG4gICAgY29uc3QgbWFpbk1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnbWVudScsIG1lbnVEaXYsICdtYWluTWVudScpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnZmVhdHVyZXMnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2Fib3V0JywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdtZW51JywgJ21lbnVMaXN0JywgJ01lbnUnKTtcbiAgICBibG9ja3MuZGlzcGxheU1lbnUobWFpbk1lbnUsIE1lbnVBcnIpO1xuXG4gICAgLy8gQ3JlYXRlIG1vYmlsZSBtZW51XG4gICAgY29uc3QgTW9iaWxlTWVudUFyciA9IFtdO1xuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWVudURpdiwgJ21vYmlsZU1lbnUnLCAnbW9iaWxlTWVudScpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVJY29uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2knLCBtb2JpbGVNZW51LCAnZmFzJyk7XG4gICAgbW9iaWxlTWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgIG1vYmlsZU1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYnVyZ2VyTWVudScpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVMaXN0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ21lbnUnLCBtb2JpbGVNZW51LCAnbW9iaWxlTWVudUxpc3QnLCAnbW9iaWxlTWVudUxpc3QnKTtcbiAgICBtb2JpbGVNZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlRWxlbWVudCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNb2JpbGVNZW51QXJyLCAnZmVhdHVyZXMnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTW9iaWxlTWVudUFyciwgJ2Fib3V0JywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1vYmlsZU1lbnVBcnIsICdtZW51JywgJ21lbnVMaXN0JywgJ01lbnUnKTtcbiAgICBibG9ja3MuZGlzcGxheU1lbnUobW9iaWxlTWVudUxpc3QsIE1vYmlsZU1lbnVBcnIpO1xuICB9KTtcbiAgXG4gIGNvbnN0IF9tYWluQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gQ2FjaGUgRE9NXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIEZlYXR1cmVzIGJsb2NrXG4gICAgY29uc3QgZmVhdHVyZXMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbiwgJycsICdmZWF0dXJlcycpO1xuICAgIGNvbnN0IGZlYXR1cmVzSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmVhdHVyZXMsICdmZWF0dXJlSGVhZGVyJyk7XG4gICAgZmVhdHVyZXNIZWFkZXIudGV4dENvbnRlbnQgPSAnRmVhdHVyZXMnO1xuICAgIGNvbnN0IGZlYXR1cmVzQ29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZlYXR1cmVzLCAnZmVhdHVyZXNDb250YWluZXInKTtcbiAgICBcbiAgICAvLyBDcmVhdGUgZmVhdHVyZSBjb2x1bW5cbiAgICBjb25zdCBmaXJzdENvbCA9IGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtY29mZmVlJyxcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxuICAgICAgJ1RFQSdcbiAgICApO1xuICAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtY3V0bGVyeScsXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcbiAgICAgICdCQUtFUlknXG4gICAgKTtcbiAgICBjb25zdCB0aGlyZENvbCA9IGJsb2Nrcy5mZWF0dXJlQ29sdW1uKFxuICAgICAgZmVhdHVyZXNDb250YWluZXIsXG4gICAgICAnZmVhdHVyZUNvbCcsXG4gICAgICAnZmVhdHVyZUljb25Db250YWluZXInLFxuICAgICAgJ2ZlYXR1cmVJY29uJyxcbiAgICAgICdmYScsXG4gICAgICAnZmEtaGVhcnQnLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnU1dFRVQnXG4gICAgKTtcbiAgfSk7XG4gIFxuICBjb25zdCBfZm9vdGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IGZpcnN0Rm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IHNlY29uZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCB0aGlyZEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcblxuICAgIC8vIEZpcnN0IEZvb3RlciBDb2xcbiAgICBjb25zdCBqb2luVXMgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5VcycpO1xuICAgIGpvaW5Vcy50ZXh0Q29udGVudCA9ICdKb2luIFVzJztcbiAgICBjb25zdCBqb2luVXNEZXNjID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0Rlc2MnKTtcbiAgICBqb2luVXNEZXNjLnRleHRDb250ZW50ID0gJ0Fsd2F5cyBsb29raW5nIGZvciBmcmllbmRseSBzdGFmZiB3aXRoIHBvc2l0aXZlIGF0dGl0dWRlcyEgUGxlYXNlIHN1Ym1pdCB5b3VyIHJlc3VtZSB0byc7XG4gICAgY29uc3Qgam9pblVzRW1haWxMaW5rID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBmaXJzdEZvb3RlckNvbCwgJ2pvaW5Vc0VtYWlsTGluaycpO1xuICAgIGpvaW5Vc0VtYWlsTGluay5pbm5lckhUTUwgPSAnaGVsbG9AdGVhbGF4LmNvbSc7XG4gICAgam9pblVzRW1haWxMaW5rLmhyZWYgPSAnbWFpbHRvOmhlbGxvQHRlYWxheC5jb20nO1xuXG4gICAgLy8gU2Vjb25kIEZvb3RlciBDb2xcbiAgICBjb25zdCBsb2NhdGlvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSAnTE9DQVRJT04nO1xuICAgIGNvbnN0IGxvY2F0aW9uQWRkciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25BZGRyJyk7XG4gICAgbG9jYXRpb25BZGRyLnRleHRDb250ZW50ID0gJzEyMzQgQmVsbGFpcmUnO1xuICAgIGNvbnN0IGxvY2F0aW9uQ2l0eSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25DaXR5Jyk7XG4gICAgbG9jYXRpb25DaXR5LnRleHRDb250ZW50ID0gJ0hvdXN0b24sIFRYIDc3MDM2JztcbiAgICBjb25zdCBsb2NhdGlvblBob25lTnVtYmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvblBob25lTnVtYmVyJyk7XG4gICAgbG9jYXRpb25QaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICcyODEtOTk5LTA5MDknO1xuXG4gICAgLy8gVGhpcmQgRm9vdGVyIENvbFxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzVGl0bGUnKTtcbiAgICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gJ0hPVVJTJztcbiAgICBjb25zdCBob3Vyc0RhdGVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzRGF0ZXMnKTtcbiAgICBob3Vyc0RhdGVzLnRleHRDb250ZW50ID0gJ1NVTkRBWSAtIEZSSURBWSc7XG4gICAgY29uc3QgaG91cnNIb3VycyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0hvdXJzJyk7XG4gICAgaG91cnNIb3Vycy50ZXh0Q29udGVudCA9ICcxMTowMCBBTSAtIDk6MDAgUE0nO1xuXG4gIH0pO1xuICBcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGJsb2Nrcy5za2VsZXRvbkhUTUwoKTtcbiAgICBfaGVhZGVyQmxvY2soKTtcbiAgICBfbWFpbkJsb2NrKCk7XG4gICAgX2Zvb3RlckJsb2NrKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgfVxufSkoKTtcblxuXG5leHBvcnQge2hvbWVwYWdlfTsiLCJpbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi8uLi9ibG9ja3MuanMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9yZXNvdXJjZXMvVEVBTEFYLXRyYW5zcGFyZW50LnBuZyc7XG5pbXBvcnQgYmFja2dyb3VuZEltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2hvbWUtYmctc2xpZGVzaG93Mi5qcGcnO1xuXG5jb25zdCBtZW51ID0gKCBmdW5jdGlvbigpIHtcbiAgY29uc3QgX2hlYWRlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDE5NCwgMjEsIDAsIC41KSAsIHJnYmEoMjU1LCAxOTcsIDAsIC41KSksIHVybCgnJHtiYWNrZ3JvdW5kSW1hZ2VTcmN9JylgO1xuXG4gICAgLy8gQ3JlYXRlIE1haW4gTmF2aWdhdGlvblxuICAgIGNvbnN0IG1haW5OQXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgaGVhZGVyLCAnbWFpbk5hdicpO1xuICAgIGNvbnN0IGxvZ29EaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5BdiwgJ2xvZ29EaXYnKTtcbiAgICBjb25zdCBtYWluTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5Mb2dvLnNyYyA9IExvZ287XG4gICAgbWFpbkxvZ28uY2xhc3NMaXN0LmFkZCgnbWFpbkxvZ28nKTtcbiAgICBjb25zdCBob21lcGFnZUxpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGxvZ29EaXYpO1xuICAgIGhvbWVwYWdlTGluay5ocmVmID0gJy4vaW5kZXguaHRtbCc7XG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICAgIC8vIENyZWF0ZSBNYWluIE1lbnUgQmxvY2tcbiAgICBjb25zdCBNZW51QXJyID0gW107XG4gICAgY29uc3QgbWVudURpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTkF2LCAnbWVudURpdicpO1xuICAgIGNvbnN0IG1haW5NZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ21lbnUnLCBtZW51RGl2LCAnbWFpbk1lbnUnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdhYm91dCcsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnbWVudScsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1haW5NZW51LCBNZW51QXJyKTtcblxuICAgIC8vIENyZWF0ZSBtb2JpbGUgbWVudVxuICAgIGNvbnN0IE1vYmlsZU1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1lbnVEaXYsICdtb2JpbGVNZW51JywgJ21vYmlsZU1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51SWNvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpJywgbW9iaWxlTWVudSwgJ2ZhcycpO1xuICAgIG1vYmlsZU1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICBtb2JpbGVNZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWJ1cmdlck1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51TGlzdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbW9iaWxlTWVudSwgJ21vYmlsZU1lbnVMaXN0JywgJ21vYmlsZU1lbnVMaXN0Jyk7XG4gICAgbW9iaWxlTWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZUVsZW1lbnQnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTW9iaWxlTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1vYmlsZU1lbnVBcnIsICdhYm91dCcsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNb2JpbGVNZW51QXJyLCAnbWVudScsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1vYmlsZU1lbnVMaXN0LCBNb2JpbGVNZW51QXJyKTtcbiAgfSk7XG4gIFxuICBjb25zdCBfbWFpbkJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIFxuICAgIFxuICAgXG4gIH0pO1xuICBcbiAgY29uc3QgX2Zvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb25zdCBmaXJzdEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCBzZWNvbmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgdGhpcmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG5cbiAgICAvLyBGaXJzdCBGb290ZXIgQ29sXG4gICAgY29uc3Qgam9pblVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXMnKTtcbiAgICBqb2luVXMudGV4dENvbnRlbnQgPSAnSm9pbiBVcyc7XG4gICAgY29uc3Qgam9pblVzRGVzYyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNEZXNjJyk7XG4gICAgam9pblVzRGVzYy50ZXh0Q29udGVudCA9ICdBbHdheXMgbG9va2luZyBmb3IgZnJpZW5kbHkgc3RhZmYgd2l0aCBwb3NpdGl2ZSBhdHRpdHVkZXMhIFBsZWFzZSBzdWJtaXQgeW91ciByZXN1bWUgdG8nO1xuICAgIGNvbnN0IGpvaW5Vc0VtYWlsTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNFbWFpbExpbmsnKTtcbiAgICBqb2luVXNFbWFpbExpbmsuaW5uZXJIVE1MID0gJ2hlbGxvQHRlYWxheC5jb20nO1xuICAgIGpvaW5Vc0VtYWlsTGluay5ocmVmID0gJ21haWx0bzpoZWxsb0B0ZWFsYXguY29tJztcblxuICAgIC8vIFNlY29uZCBGb290ZXIgQ29sXG4gICAgY29uc3QgbG9jYXRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcbiAgICBjb25zdCBsb2NhdGlvbkFkZHIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQWRkcicpO1xuICAgIGxvY2F0aW9uQWRkci50ZXh0Q29udGVudCA9ICcxMjM0IEJlbGxhaXJlJztcbiAgICBjb25zdCBsb2NhdGlvbkNpdHkgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQ2l0eScpO1xuICAgIGxvY2F0aW9uQ2l0eS50ZXh0Q29udGVudCA9ICdIb3VzdG9uLCBUWCA3NzAzNic7XG4gICAgY29uc3QgbG9jYXRpb25QaG9uZU51bWJlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25QaG9uZU51bWJlcicpO1xuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMjgxLTk5OS0wOTA5JztcblxuICAgIC8vIFRoaXJkIEZvb3RlciBDb2xcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc1RpdGxlJyk7XG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIT1VSUyc7XG4gICAgY29uc3QgaG91cnNEYXRlcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0RhdGVzJyk7XG4gICAgaG91cnNEYXRlcy50ZXh0Q29udGVudCA9ICdTVU5EQVkgLSBGUklEQVknO1xuICAgIGNvbnN0IGhvdXJzSG91cnMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNIb3VycycpO1xuICAgIGhvdXJzSG91cnMudGV4dENvbnRlbnQgPSAnMTE6MDAgQU0gLSA5OjAwIFBNJztcblxuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBibG9ja3Muc2tlbGV0b25IVE1MKCk7XG4gICAgX2hlYWRlckJsb2NrKCk7XG4gICAgX21haW5CbG9jaygpO1xuICAgIF9mb290ZXJCbG9jaygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn0pKCk7XG5cblxuZXhwb3J0IHttZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtibG9ja3N9IGZyb20gJy4vYmxvY2tzLmpzJztcbmltcG9ydCB7aG9tZXBhZ2V9IGZyb20gJy4vaG9tZXBhZ2UvaG9tZXBhZ2UuanMnO1xuaW1wb3J0IHsgYWJvdXRVcyB9IGZyb20gJy4vYWJvdXRVcy9hYm91dFVzLmpzJztcbmltcG9ydCB7IG1lbnUgfSBmcm9tICcuL21lbnUvbWVudS5qcyc7XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSAoIGZ1bmN0aW9uKCkge1xuICBcbiAgZnVuY3Rpb24gX2luaXQoKSB7XG4gICAgYWJvdXRVcy5yZW5kZXIoKTtcbiAgfVxuXG4gIF9pbml0KCk7XG59KSgpO1xuXG5cbmNvbnN0IG1vYmlsZU1lbnUgPSAoIGZ1bmN0aW9uKCkge1xuXG4gIC8vIENhY2hlIERPTVxuICBjb25zdCBoYW1idXJnZXJNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hhbWJ1cmdlck1lbnUnKTtcblxuICAvLyBUb29nbGUgbW9iaWxlIG1lbnVcbiAgaGFtYnVyZ2VyTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU1lbnUpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG4gICAgYmxvY2tzLnRvZ2dsZUVsZW1lbnQoJ21vYmlsZU1lbnVMaXN0JywgJ2hpZGVFbGVtZW50Jyk7XG4gIH1cblxuXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==