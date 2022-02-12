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
/* harmony import */ var _resources_story_img1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/story-img1.jpg */ "./src/aboutUs/resources/story-img1.jpg");
/* harmony import */ var _resources_story_img2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resources/story-img2.jpg */ "./src/aboutUs/resources/story-img2.jpg");
/* harmony import */ var _resources_story_img3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/story-img3.jpg */ "./src/aboutUs/resources/story-img3.jpg");








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
    const subHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h4', main, 'subHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    const aboutUsContent = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', main, 'aboutUsContent')

    // Main block content first column
    const firstCol = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', aboutUsContent, 'firstCol');    const img = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', firstCol, 'firstColImg');
    img.style.width = '100%';
    img.src = _resources_about_img_jpg__WEBPACK_IMPORTED_MODULE_3__;
    const imgCap = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('p', firstCol, 'imgCap');
    imgCap.textContent = 'We Make everthing with LOVE';

    // Main block content second column
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
    firstImg.src = _resources_story_img1_jpg__WEBPACK_IMPORTED_MODULE_4__;
    const secondImg = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', secondSlide);
    secondImg.src = _resources_story_img2_jpg__WEBPACK_IMPORTED_MODULE_5__;
    const thirdImg = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('img', thirdSlide);
    thirdImg.src = _resources_story_img3_jpg__WEBPACK_IMPORTED_MODULE_6__;
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

    // Function slide show
    
    const slideShow = (
      function() {

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
      }
    )();

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
  function createImgFigure(node) {
    const figWrap = addElement('div', node, 'figureWrap');
    const img = addElement('img', figWrap, 'figureImg');
    const h3 = addElement('h3', figWrap, 'figureCaption');
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
/* harmony import */ var _resources_home_bg_slideshow3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/home-bg-slideshow3.jpg */ "./src/menu/resources/home-bg-slideshow3.jpg");




const menu = ( function() {
  const _headerBlock = ( function() {

    // Cache DOM
    const header = document.getElementById('header');
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${_resources_home_bg_slideshow3_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;
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
    primaryHeader.textContent = 'MENU';
    primaryHeader.style.textTransform = 'uppercase';

    // Main block sub header
    const subHeader = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('h4', main, 'subHeader');
    subHeader.innerHTML = '<span>⬡</span> ORGANIC FRUIT <span>⬡</span> HOT AVAILABLE';

    // Gallery
    const gallery = _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.addElement('div', main, 'gallery', 'gallery');
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
    _blocks_js__WEBPACK_IMPORTED_MODULE_0__.blocks.clearPage();
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

/***/ "./src/menu/resources/home-bg-slideshow3.jpg":
/*!***************************************************!*\
  !*** ./src/menu/resources/home-bg-slideshow3.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afca5a1a1f1adef7f861.jpg";

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
    _menu_menu_js__WEBPACK_IMPORTED_MODULE_5__.menu.render();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQW9CO0FBQ3hCOzs7QUFHQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0VXMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWVwYWdlL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7YmxvY2tzfSBmcm9tICcuLy4uL2Jsb2Nrcy5qcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL3Jlc291cmNlcy9URUFMQVgtdHJhbnNwYXJlbnQucG5nJztcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2VTcmMgZnJvbSAnLi9yZXNvdXJjZXMvaG9tZS1iZy1zbGlkZXNob3cyLmpwZyc7XG5pbXBvcnQgZmlyc3RDb2xJbWdTcmMgZnJvbSAnLi9yZXNvdXJjZXMvYWJvdXQtaW1nLmpwZyc7XG5pbXBvcnQgc3RvcnlJbWcxU3JjIGZyb20gJy4vcmVzb3VyY2VzL3N0b3J5LWltZzEuanBnJztcbmltcG9ydCBzdG9yeUltZzJTcmMgZnJvbSAnLi9yZXNvdXJjZXMvc3RvcnktaW1nMi5qcGcnO1xuaW1wb3J0IHN0b3J5SW1nM1NyYyBmcm9tICcuL3Jlc291cmNlcy9zdG9yeS1pbWczLmpwZyc7XG5cbmNvbnN0IGFib3V0VXMgPSAoIGZ1bmN0aW9uKCkge1xuICBjb25zdCBfaGVhZGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gQ2FjaGUgRE9NXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk0LCAyMSwgMCwgLjUpICwgcmdiYSgyNTUsIDE5NywgMCwgLjUpKSwgdXJsKCcke2JhY2tncm91bmRJbWFnZVNyY30nKWA7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9ICc2MDBweCc7XG4gICAgLy8gQ3JlYXRlIE1haW4gTmF2aWdhdGlvblxuICAgIGNvbnN0IG1haW5OQXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgaGVhZGVyLCAnbWFpbk5hdicpO1xuICAgIGNvbnN0IGxvZ29EaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5BdiwgJ2xvZ29EaXYnKTtcbiAgICBjb25zdCBtYWluTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5Mb2dvLnNyYyA9IExvZ287XG4gICAgbWFpbkxvZ28uY2xhc3NMaXN0LmFkZCgnbWFpbkxvZ28nKTtcbiAgICBjb25zdCBob21lcGFnZUxpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGxvZ29EaXYpO1xuICAgIGhvbWVwYWdlTGluay5ocmVmID0gJy4vaW5kZXguaHRtbCc7XG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICAgIC8vIENyZWF0ZSBNYWluIE1lbnUgQmxvY2tcbiAgICBjb25zdCBNZW51QXJyID0gW107XG4gICAgY29uc3QgbWVudURpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTkF2LCAnbWVudURpdicpO1xuICAgIGNvbnN0IG1haW5NZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ21lbnUnLCBtZW51RGl2LCAnbWFpbk1lbnUnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdhYm91dCcsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnbWVudScsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1haW5NZW51LCBNZW51QXJyKTtcblxuICAgIC8vIENyZWF0ZSBtb2JpbGUgbWVudVxuICAgIGNvbnN0IE1vYmlsZU1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1lbnVEaXYsICdtb2JpbGVNZW51JywgJ21vYmlsZU1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51SWNvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpJywgbW9iaWxlTWVudSwgJ2ZhcycpO1xuICAgIG1vYmlsZU1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICBtb2JpbGVNZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWJ1cmdlck1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51TGlzdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbW9iaWxlTWVudSwgJ21vYmlsZU1lbnVMaXN0JywgJ21vYmlsZU1lbnVMaXN0Jyk7XG4gICAgbW9iaWxlTWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZUVsZW1lbnQnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTW9iaWxlTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1vYmlsZU1lbnVBcnIsICdhYm91dCcsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNb2JpbGVNZW51QXJyLCAnbWVudScsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1vYmlsZU1lbnVMaXN0LCBNb2JpbGVNZW51QXJyKTtcbiAgfSk7XG4gIFxuICBjb25zdCBfbWFpbkJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIFxuICAgIC8vIE1haW4gYmxvY2sgcHJpbWFyeSBoZWFkZXJcbiAgICBjb25zdCBwcmltYXJ5SGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gyJywgbWFpbiwgJ3ByaW1hcnlIZWFkZXInKTtcbiAgICBwcmltYXJ5SGVhZGVyLnRleHRDb250ZW50ID0gJ091ciBTdG9yeSc7XG4gICAgcHJpbWFyeUhlYWRlci5zdHlsZS50ZXh0VHJhbnNmb3JtID0gJ3VwcGVyY2FzZSc7XG5cbiAgICAvLyBNYWluIGJsb2NrIHN1YiBoZWFkZXJcbiAgICBjb25zdCBzdWJIZWFkZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnaDQnLCBtYWluLCAnc3ViSGVhZGVyJyk7XG4gICAgc3ViSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgZGVsaWNpb3VzIHRlYSBob3VzZSBzaW5jZSAyMDE5J1xuXG4gICAgLy8gTWFpbiBibG9jayBjb250ZW50XG4gICAgY29uc3QgYWJvdXRVc0NvbnRlbnQgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbiwgJ2Fib3V0VXNDb250ZW50JylcblxuICAgIC8vIE1haW4gYmxvY2sgY29udGVudCBmaXJzdCBjb2x1bW5cbiAgICBjb25zdCBmaXJzdENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ2ZpcnN0Q29sJyk7ICAgIGNvbnN0IGltZyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpbWcnLCBmaXJzdENvbCwgJ2ZpcnN0Q29sSW1nJyk7XG4gICAgaW1nLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGltZy5zcmMgPSBmaXJzdENvbEltZ1NyYztcbiAgICBjb25zdCBpbWdDYXAgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIGZpcnN0Q29sLCAnaW1nQ2FwJyk7XG4gICAgaW1nQ2FwLnRleHRDb250ZW50ID0gJ1dlIE1ha2UgZXZlcnRoaW5nIHdpdGggTE9WRSc7XG5cbiAgICAvLyBNYWluIGJsb2NrIGNvbnRlbnQgc2Vjb25kIGNvbHVtblxuICAgIGNvbnN0IHNlY29uZENvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBhYm91dFVzQ29udGVudCwgJ3NlY29uZENvbCcpO1xuXG4gICAgLy8gTWFpbiBibG9jayBjb250ZW50IHNlY29uZCBjb2x1bW4gc2xpZGVzaG93XG4gICAgY29uc3Qgc2xpZGVTaG93Q29udGFpbmVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZpcnN0U2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3Qgc2Vjb25kU2xpZGUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2xpZGVTaG93Q29udGFpbmVyLCAnc2xpZGVTaG93Jyk7XG4gICAgY29uc3QgdGhpcmRTbGlkZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBzbGlkZVNob3dDb250YWluZXIsICdzbGlkZVNob3cnKTtcbiAgICBmaXJzdFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICBzZWNvbmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgdGhpcmRTbGlkZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XG4gICAgY29uc3Qgc2xpZGVTaG93TmF2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIHNsaWRlU2hvd0NvbnRhaW5lciwgJ3NsaWRlU2hvd05hdicpO1xuICAgIGNvbnN0IGRvdHMgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2Jywgc2Vjb25kQ29sLCAnZG90cycpO1xuICAgIGNvbnN0IHNsaWRlU2hvd0NhcHRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZENvbCwgJ3NsaWRlU2hvd0NhcHRpb24nKTtcbiAgICBzbGlkZVNob3dDYXB0aW9uLnRleHRDb250ZW50ID0gJ01vcmUgY29tZm9ydGFibGUgc3BhY2UnO1xuICAgIGNvbnN0IGZpcnN0SW1nID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2ltZycsIGZpcnN0U2xpZGUpO1xuICAgIGZpcnN0SW1nLnNyYyA9IHN0b3J5SW1nMVNyYztcbiAgICBjb25zdCBzZWNvbmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgc2Vjb25kU2xpZGUpO1xuICAgIHNlY29uZEltZy5zcmMgPSBzdG9yeUltZzJTcmM7XG4gICAgY29uc3QgdGhpcmRJbWcgPSBibG9ja3MuYWRkRWxlbWVudCgnaW1nJywgdGhpcmRTbGlkZSk7XG4gICAgdGhpcmRJbWcuc3JjID0gc3RvcnlJbWczU3JjO1xuICAgIGNvbnN0IHByZXYgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIHNsaWRlU2hvd05hdik7XG4gICAgcHJldi5jbGFzc0xpc3QuYWRkKCdwcmV2Jyk7XG4gICAgcHJldi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByZXYnKTtcbiAgICBjb25zdCBuZXh0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2EnLCBzbGlkZVNob3dOYXYpO1xuICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnbmV4dCcpO1xuICAgIG5leHQuc2V0QXR0cmlidXRlKCdpZCcsICduZXh0Jyk7XG4gICAgcHJldi5pbm5lckhUTUwgPSAnJiMxMDA5NDsnO1xuICAgIG5leHQuaW5uZXJIVE1MID0gJyYjMTAwOTU7JztcbiAgICBjb25zdCBmaXJzdERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgY29uc3Qgc2Vjb25kRG90ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3NwYW4nLCBkb3RzKTtcbiAgICBjb25zdCB0aGlyZERvdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdzcGFuJywgZG90cyk7XG4gICAgZmlyc3REb3QuY2xhc3NMaXN0LmFkZCgnZG90Jyk7XG4gICAgc2Vjb25kRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuICAgIHRoaXJkRG90LmNsYXNzTGlzdC5hZGQoJ2RvdCcpO1xuXG4gICAgLy8gRnVuY3Rpb24gc2xpZGUgc2hvd1xuICAgIFxuICAgIGNvbnN0IHNsaWRlU2hvdyA9IChcbiAgICAgIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIENhY2hlIERPTVxuICAgICAgICBjb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlU2hvdycpKTtcbiAgICAgICAgY29uc3QgZG90cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZG90JykpO1xuICAgICAgICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKTtcbiAgICAgICAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0Jyk7XG5cbiAgICAgICAgLy8gSW5pdFxuICAgICAgICBsZXQgc2xpZGVJbmRleCA9IDA7XG4gICAgICAgIHNob3dTbGlkZShzbGlkZUluZGV4KTtcbiAgICAgICAgXG4gICAgICAgIC8vIFNob3cgc2xpZGUgYnkgU2xpZGVJbmRleFxuICAgICAgICBmdW5jdGlvbiBzaG93U2xpZGUobikge1xuICAgICAgICAgIHNsaWRlcy5tYXAoIHNsaWRlID0+IHtcbiAgICAgICAgICAgIHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgfSlcbiAgICAgICAgICBkb3RzLm1hcCggZG90ID0+IHtcbiAgICAgICAgICAgIGRvdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChuID4gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIG4gPCAwKSB7XG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNsaWRlc1tzbGlkZUluZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBkb3RzW3NsaWRlSW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBjdXJyZW50IHNsaWRlXG4gICAgICAgIGRvdHMuZm9yRWFjaCggKGRvdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZShpbmRleClcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgZnVuY3Rpb24gY3VycmVudFNsaWRlKG4pIHtcbiAgICAgICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCA9IG4pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmV4dCBvciBwcmV2IHNsaWRlXG4gICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBuZXh0U2xpZGUoLTEpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmV4dFNsaWRlKDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgZnVuY3Rpb24gbmV4dFNsaWRlKG4pIHtcbiAgICAgICAgICBzaG93U2xpZGUoc2xpZGVJbmRleCArPSBuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICkoKTtcblxuICB9KTtcbiAgXG4gIGNvbnN0IF9mb290ZXJCbG9jayA9ICggZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XG4gICAgY29uc3QgZmlyc3RGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3Qgc2Vjb25kRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuICAgIGNvbnN0IHRoaXJkRm9vdGVyQ29sID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIGZvb3RlciwgJ2Zvb3RlckNvbCcpO1xuXG4gICAgLy8gRmlyc3QgRm9vdGVyIENvbFxuICAgIGNvbnN0IGpvaW5VcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzJyk7XG4gICAgam9pblVzLnRleHRDb250ZW50ID0gJ0pvaW4gVXMnO1xuICAgIGNvbnN0IGpvaW5Vc0Rlc2MgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRGVzYycpO1xuICAgIGpvaW5Vc0Rlc2MudGV4dENvbnRlbnQgPSAnQWx3YXlzIGxvb2tpbmcgZm9yIGZyaWVuZGx5IHN0YWZmIHdpdGggcG9zaXRpdmUgYXR0aXR1ZGVzISBQbGVhc2Ugc3VibWl0IHlvdXIgcmVzdW1lIHRvJztcbiAgICBjb25zdCBqb2luVXNFbWFpbExpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGZpcnN0Rm9vdGVyQ29sLCAnam9pblVzRW1haWxMaW5rJyk7XG4gICAgam9pblVzRW1haWxMaW5rLmlubmVySFRNTCA9ICdoZWxsb0B0ZWFsYXguY29tJztcbiAgICBqb2luVXNFbWFpbExpbmsuaHJlZiA9ICdtYWlsdG86aGVsbG9AdGVhbGF4LmNvbSc7XG5cbiAgICAvLyBTZWNvbmQgRm9vdGVyIENvbFxuICAgIGNvbnN0IGxvY2F0aW9uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9ICdMT0NBVElPTic7XG4gICAgY29uc3QgbG9jYXRpb25BZGRyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbkFkZHInKTtcbiAgICBsb2NhdGlvbkFkZHIudGV4dENvbnRlbnQgPSAnMTIzNCBCZWxsYWlyZSc7XG4gICAgY29uc3QgbG9jYXRpb25DaXR5ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbkNpdHknKTtcbiAgICBsb2NhdGlvbkNpdHkudGV4dENvbnRlbnQgPSAnSG91c3RvbiwgVFggNzcwMzYnO1xuICAgIGNvbnN0IGxvY2F0aW9uUGhvbmVOdW1iZXIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uUGhvbmVOdW1iZXInKTtcbiAgICBsb2NhdGlvblBob25lTnVtYmVyLnRleHRDb250ZW50ID0gJzI4MS05OTktMDkwOSc7XG5cbiAgICAvLyBUaGlyZCBGb290ZXIgQ29sXG4gICAgY29uc3QgaG91cnNUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNUaXRsZScpO1xuICAgIGhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnSE9VUlMnO1xuICAgIGNvbnN0IGhvdXJzRGF0ZXMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNEYXRlcycpO1xuICAgIGhvdXJzRGF0ZXMudGV4dENvbnRlbnQgPSAnU1VOREFZIC0gRlJJREFZJztcbiAgICBjb25zdCBob3Vyc0hvdXJzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ3AnLCB0aGlyZEZvb3RlckNvbCwgJ2hvdXJzSG91cnMnKTtcbiAgICBob3Vyc0hvdXJzLnRleHRDb250ZW50ID0gJzExOjAwIEFNIC0gOTowMCBQTSc7XG5cbiAgfSk7XG4gIFxuICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgYmxvY2tzLnNrZWxldG9uSFRNTCgpO1xuICAgIF9oZWFkZXJCbG9jaygpO1xuICAgIF9tYWluQmxvY2soKTtcbiAgICBfZm9vdGVyQmxvY2soKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9XG59KSgpO1xuXG5leHBvcnQge2Fib3V0VXN9OyIsImNvbnN0IGJsb2NrcyA9ICggZnVuY3Rpb24oKSB7XG5cbiAgY29uc3QgX21haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50Jyk7XG5cbiAgZnVuY3Rpb24gc2tlbGV0b25IVE1MKCkge1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2hlYWRlcicpKTtcbiAgICBfbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvY2tzLm5ld0Jsb2NrKCdtYWluJykpO1xuICAgIF9tYWluQ29udGVudC5hcHBlbmRDaGlsZChibG9ja3MubmV3QmxvY2soJ2Zvb3RlcicpKTtcbiAgfVxuICBmdW5jdGlvbiBuZXdCbG9jayhuYW1lKXtcbiAgICBjb25zdCBibG9jayA9IGFkZEVsZW1lbnQoJ2RpdicpO1xuICAgIGJsb2NrLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcbiAgICByZXR1cm4gYmxvY2s7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUxpbmsoaWQsIGNsYXNzTmFtZSwgbWVudU5hbWUpIHtcbiAgICBjb25zdCBuZXdJdGVtID0gYWRkRWxlbWVudCgnbGknLCAnJywgY2xhc3NOYW1lKTtcbiAgICBjb25zdCBuZXdJdGVtTGluayA9IGFkZEVsZW1lbnQoJ2EnLCBuZXdJdGVtKTtcbiAgICBuZXdJdGVtTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBgLi8jJHtpZH1gKTtcbiAgICBuZXdJdGVtTGluay5pbm5lckhUTUwgPSBtZW51TmFtZTtcbiAgICByZXR1cm4gbmV3SXRlbTtcbiAgfVxuICBmdW5jdGlvbiBmZWF0dXJlQ29sdW1uKFxuICAgIG5vZGUsXG4gICAgY29sQ2xhc3NOYW1lLCBcbiAgICBzdWJDb2xDbGFzc05hbWUsIFxuICAgIGZlYXR1cmVJY29uQ29udGFpbmVyQ2xhc3NOYW1lLCBcbiAgICBmaXJzdEZlYXR1cmVJY29uQ2xhc3NOYW1lLFxuICAgIHNlY29uZEZlYXR1cmVJY29uQ2xhc3NOYW1lLCBcbiAgICBmZWF0dXJlVGl0bGVDbGFzc05hbWUsXG4gICAgZmVhdHVyZVRpdGxlQ29udGVudFxuICAgICkge1xuICAgIGNvbnN0IGNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZChjb2xDbGFzc05hbWUpO1xuICAgIGNvbnN0IHN1YkNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBjb2wpO1xuICAgIHN1YkNvbC5jbGFzc0xpc3QuYWRkKHN1YkNvbENsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb25Db250YWluZXIgPSBibG9ja3MuYWRkRWxlbWVudCgnc3BhbicsIHN1YkNvbCk7XG4gICAgZmVhdHVyZUljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChmZWF0dXJlSWNvbkNvbnRhaW5lckNsYXNzTmFtZSk7XG4gICAgY29uc3QgZmVhdHVyZUljb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaScsIGZlYXR1cmVJY29uQ29udGFpbmVyKTtcbiAgICBmZWF0dXJlSWNvbi5jbGFzc0xpc3QuYWRkKGZpcnN0RmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGZlYXR1cmVJY29uLmNsYXNzTGlzdC5hZGQoc2Vjb25kRmVhdHVyZUljb25DbGFzc05hbWUpO1xuICAgIGNvbnN0IGZlYXR1cmVUaXRsZSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGNvbCk7XG4gICAgZmVhdHVyZVRpdGxlLmNsYXNzTGlzdC5hZGQoZmVhdHVyZVRpdGxlQ2xhc3NOYW1lKTtcbiAgICBmZWF0dXJlVGl0bGUudGV4dENvbnRlbnQgPSBmZWF0dXJlVGl0bGVDb250ZW50O1xuICAgIHJldHVybiBub2RlLmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cbiAgZnVuY3Rpb24gbmV3TWVudUl0ZW0oYXJyLCBpZCwgY2xhc3NOYW1lLCBtZW51TmFtZSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gYmxvY2tzLm5ld01lbnVMaW5rKGlkLCBjbGFzc05hbWUsIG1lbnVOYW1lKTtcbiAgICBhcnIucHVzaChtZW51SXRlbSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBkaXNwbGF5TWVudShub2RlLCBhcnIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChhcnJbaV0pO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBhZGRFbGVtZW50KGVsZSwgbm9kZSwgY2xhc3NOYW1lLCBpZE5hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGUpO1xuICAgIGlmIChjbGFzc05hbWUpIHtlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKX1cbiAgICBpZiAoaWROYW1lKSB7ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKX1cbiAgICBpZiAobm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVJbWdGaWd1cmUobm9kZSkge1xuICAgIGNvbnN0IGZpZ1dyYXAgPSBhZGRFbGVtZW50KCdkaXYnLCBub2RlLCAnZmlndXJlV3JhcCcpO1xuICAgIGNvbnN0IGltZyA9IGFkZEVsZW1lbnQoJ2ltZycsIGZpZ1dyYXAsICdmaWd1cmVJbWcnKTtcbiAgICBjb25zdCBoMyA9IGFkZEVsZW1lbnQoJ2gzJywgZmlnV3JhcCwgJ2ZpZ3VyZUNhcHRpb24nKTtcbiAgICByZXR1cm4gZmlnV3JhcDtcbiAgfVxuICBmdW5jdGlvbiB0b2dnbGVFbGVtZW50KGlkTmFtZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkTmFtZSk7XG4gICAgbm9kZS5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7XG4gIH1cbiAgZnVuY3Rpb24gY2xlYXJQYWdlKCkge1xuICAgIF9tYWluQ29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgfVxuICByZXR1cm4ge1xuICAgIHNrZWxldG9uSFRNTCxcbiAgICBhZGRFbGVtZW50LFxuICAgIG5ld0Jsb2NrLFxuICAgIG5ld01lbnVMaW5rLFxuICAgIG5ld01lbnVJdGVtLFxuICAgIGRpc3BsYXlNZW51LFxuICAgIGZlYXR1cmVDb2x1bW4sXG4gICAgdG9nZ2xlRWxlbWVudCxcbiAgICBjbGVhclBhZ2UsXG4gIH1cbn0gKSgpO1xuXG5leHBvcnQge2Jsb2Nrc307IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4vLi4vYmxvY2tzLmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vcmVzb3VyY2VzL1RFQUxBWC10cmFuc3BhcmVudC5wbmcnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzEuanBnJztcblxuY29uc3QgaG9tZXBhZ2UgPSAoIGZ1bmN0aW9uKCkge1xuICBjb25zdCBfaGVhZGVyQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gQ2FjaGUgRE9NXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTk0LCAyMSwgMCwgLjUpICwgcmdiYSgyNTUsIDE5NywgMCwgLjUpKSwgdXJsKCcke2JhY2tncm91bmRJbWFnZVNyY30nKWA7XG4gICAgaGVhZGVyLnN0eWxlLmhlaWdodCA9ICc2MDBweCc7XG4gICAgLy8gQ3JlYXRlIE1haW4gTmF2aWdhdGlvblxuICAgIGNvbnN0IG1haW5OQXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgaGVhZGVyLCAnbWFpbk5hdicpO1xuICAgIGNvbnN0IGxvZ29EaXYgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWFpbk5BdiwgJ2xvZ29EaXYnKTtcbiAgICBjb25zdCBtYWluTG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW5Mb2dvLnNyYyA9IExvZ287XG4gICAgbWFpbkxvZ28uY2xhc3NMaXN0LmFkZCgnbWFpbkxvZ28nKTtcbiAgICBjb25zdCBob21lcGFnZUxpbmsgPSBibG9ja3MuYWRkRWxlbWVudCgnYScsIGxvZ29EaXYpO1xuICAgIGhvbWVwYWdlTGluay5ocmVmID0gJy4vaW5kZXguaHRtbCc7XG4gICAgaG9tZXBhZ2VMaW5rLmFwcGVuZENoaWxkKG1haW5Mb2dvKTtcblxuICAgIC8vIENyZWF0ZSBNYWluIE1lbnUgQmxvY2tcbiAgICBjb25zdCBNZW51QXJyID0gW107XG4gICAgY29uc3QgbWVudURpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTkF2LCAnbWVudURpdicpO1xuICAgIGNvbnN0IG1haW5NZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ21lbnUnLCBtZW51RGl2LCAnbWFpbk1lbnUnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdhYm91dCcsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnbWVudScsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1haW5NZW51LCBNZW51QXJyKTtcblxuICAgIC8vIENyZWF0ZSBtb2JpbGUgbWVudVxuICAgIGNvbnN0IE1vYmlsZU1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtb2JpbGVNZW51ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1lbnVEaXYsICdtb2JpbGVNZW51JywgJ21vYmlsZU1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51SWNvbiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdpJywgbW9iaWxlTWVudSwgJ2ZhcycpO1xuICAgIG1vYmlsZU1lbnVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWJhcnMnKTtcbiAgICBtb2JpbGVNZW51SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hhbWJ1cmdlck1lbnUnKTtcbiAgICBjb25zdCBtb2JpbGVNZW51TGlzdCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdtZW51JywgbW9iaWxlTWVudSwgJ21vYmlsZU1lbnVMaXN0JywgJ21vYmlsZU1lbnVMaXN0Jyk7XG4gICAgbW9iaWxlTWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnaGlkZUVsZW1lbnQnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTW9iaWxlTWVudUFyciwgJ2ZlYXR1cmVzJywgJ21lbnVMaXN0JywgJ0ZlYXR1cmVzJyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1vYmlsZU1lbnVBcnIsICdhYm91dCcsICdtZW51TGlzdCcsICdBYm91dCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNb2JpbGVNZW51QXJyLCAnbWVudScsICdtZW51TGlzdCcsICdNZW51Jyk7XG4gICAgYmxvY2tzLmRpc3BsYXlNZW51KG1vYmlsZU1lbnVMaXN0LCBNb2JpbGVNZW51QXJyKTtcbiAgfSk7XG4gIFxuICBjb25zdCBfbWFpbkJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBGZWF0dXJlcyBibG9ja1xuICAgIGNvbnN0IGZlYXR1cmVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW4sICcnLCAnZmVhdHVyZXMnKTtcbiAgICBjb25zdCBmZWF0dXJlc0hlYWRlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdoMycsIGZlYXR1cmVzLCAnZmVhdHVyZUhlYWRlcicpO1xuICAgIGZlYXR1cmVzSGVhZGVyLnRleHRDb250ZW50ID0gJ0ZlYXR1cmVzJztcbiAgICBjb25zdCBmZWF0dXJlc0NvbnRhaW5lciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmZWF0dXJlcywgJ2ZlYXR1cmVzQ29udGFpbmVyJyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGZlYXR1cmUgY29sdW1uXG4gICAgY29uc3QgZmlyc3RDb2wgPSBibG9ja3MuZmVhdHVyZUNvbHVtbihcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxuICAgICAgJ2ZlYXR1cmVDb2wnLFxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcbiAgICAgICdmZWF0dXJlSWNvbicsXG4gICAgICAnZmEnLFxuICAgICAgJ2ZhLWNvZmZlZScsXG4gICAgICAnZmVhdHVyZVRpdGxlJyxcbiAgICAgICdURUEnXG4gICAgKTtcbiAgICBjb25zdCBzZWNvbmRDb2wgPSBibG9ja3MuZmVhdHVyZUNvbHVtbihcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxuICAgICAgJ2ZlYXR1cmVDb2wnLFxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcbiAgICAgICdmZWF0dXJlSWNvbicsXG4gICAgICAnZmEnLFxuICAgICAgJ2ZhLWN1dGxlcnknLFxuICAgICAgJ2ZlYXR1cmVUaXRsZScsXG4gICAgICAnQkFLRVJZJ1xuICAgICk7XG4gICAgY29uc3QgdGhpcmRDb2wgPSBibG9ja3MuZmVhdHVyZUNvbHVtbihcbiAgICAgIGZlYXR1cmVzQ29udGFpbmVyLFxuICAgICAgJ2ZlYXR1cmVDb2wnLFxuICAgICAgJ2ZlYXR1cmVJY29uQ29udGFpbmVyJyxcbiAgICAgICdmZWF0dXJlSWNvbicsXG4gICAgICAnZmEnLFxuICAgICAgJ2ZhLWhlYXJ0JyxcbiAgICAgICdmZWF0dXJlVGl0bGUnLFxuICAgICAgJ1NXRUVUJ1xuICAgICk7XG4gIH0pO1xuICBcbiAgY29uc3QgX2Zvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb25zdCBmaXJzdEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCBzZWNvbmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgdGhpcmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG5cbiAgICAvLyBGaXJzdCBGb290ZXIgQ29sXG4gICAgY29uc3Qgam9pblVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXMnKTtcbiAgICBqb2luVXMudGV4dENvbnRlbnQgPSAnSm9pbiBVcyc7XG4gICAgY29uc3Qgam9pblVzRGVzYyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNEZXNjJyk7XG4gICAgam9pblVzRGVzYy50ZXh0Q29udGVudCA9ICdBbHdheXMgbG9va2luZyBmb3IgZnJpZW5kbHkgc3RhZmYgd2l0aCBwb3NpdGl2ZSBhdHRpdHVkZXMhIFBsZWFzZSBzdWJtaXQgeW91ciByZXN1bWUgdG8nO1xuICAgIGNvbnN0IGpvaW5Vc0VtYWlsTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNFbWFpbExpbmsnKTtcbiAgICBqb2luVXNFbWFpbExpbmsuaW5uZXJIVE1MID0gJ2hlbGxvQHRlYWxheC5jb20nO1xuICAgIGpvaW5Vc0VtYWlsTGluay5ocmVmID0gJ21haWx0bzpoZWxsb0B0ZWFsYXguY29tJztcblxuICAgIC8vIFNlY29uZCBGb290ZXIgQ29sXG4gICAgY29uc3QgbG9jYXRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcbiAgICBjb25zdCBsb2NhdGlvbkFkZHIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQWRkcicpO1xuICAgIGxvY2F0aW9uQWRkci50ZXh0Q29udGVudCA9ICcxMjM0IEJlbGxhaXJlJztcbiAgICBjb25zdCBsb2NhdGlvbkNpdHkgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQ2l0eScpO1xuICAgIGxvY2F0aW9uQ2l0eS50ZXh0Q29udGVudCA9ICdIb3VzdG9uLCBUWCA3NzAzNic7XG4gICAgY29uc3QgbG9jYXRpb25QaG9uZU51bWJlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25QaG9uZU51bWJlcicpO1xuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMjgxLTk5OS0wOTA5JztcblxuICAgIC8vIFRoaXJkIEZvb3RlciBDb2xcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc1RpdGxlJyk7XG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIT1VSUyc7XG4gICAgY29uc3QgaG91cnNEYXRlcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0RhdGVzJyk7XG4gICAgaG91cnNEYXRlcy50ZXh0Q29udGVudCA9ICdTVU5EQVkgLSBGUklEQVknO1xuICAgIGNvbnN0IGhvdXJzSG91cnMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNIb3VycycpO1xuICAgIGhvdXJzSG91cnMudGV4dENvbnRlbnQgPSAnMTE6MDAgQU0gLSA5OjAwIFBNJztcblxuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBibG9ja3Muc2tlbGV0b25IVE1MKCk7XG4gICAgX2hlYWRlckJsb2NrKCk7XG4gICAgX21haW5CbG9jaygpO1xuICAgIF9mb290ZXJCbG9jaygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gIH1cbn0pKCk7XG5cblxuZXhwb3J0IHtob21lcGFnZX07IiwiaW1wb3J0IHtibG9ja3N9IGZyb20gJy4vLi4vYmxvY2tzLmpzJztcbmltcG9ydCBMb2dvIGZyb20gJy4vcmVzb3VyY2VzL1RFQUxBWC10cmFuc3BhcmVudC5wbmcnO1xuaW1wb3J0IGJhY2tncm91bmRJbWFnZVNyYyBmcm9tICcuL3Jlc291cmNlcy9ob21lLWJnLXNsaWRlc2hvdzMuanBnJztcblxuY29uc3QgbWVudSA9ICggZnVuY3Rpb24oKSB7XG4gIGNvbnN0IF9oZWFkZXJCbG9jayA9ICggZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBDYWNoZSBET01cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxOTQsIDIxLCAwLCAuNSkgLCByZ2JhKDI1NSwgMTk3LCAwLCAuNSkpLCB1cmwoJyR7YmFja2dyb3VuZEltYWdlU3JjfScpYDtcbiAgICBoZWFkZXIuc3R5bGUuaGVpZ2h0ID0gJzYwMHB4JztcbiAgICAvLyBDcmVhdGUgTWFpbiBOYXZpZ2F0aW9uXG4gICAgY29uc3QgbWFpbk5BdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBoZWFkZXIsICdtYWluTmF2Jyk7XG4gICAgY29uc3QgbG9nb0RpdiA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluTkF2LCAnbG9nb0RpdicpO1xuICAgIGNvbnN0IG1haW5Mb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbWFpbkxvZ28uc3JjID0gTG9nbztcbiAgICBtYWluTG9nby5jbGFzc0xpc3QuYWRkKCdtYWluTG9nbycpO1xuICAgIGNvbnN0IGhvbWVwYWdlTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgbG9nb0Rpdik7XG4gICAgaG9tZXBhZ2VMaW5rLmhyZWYgPSAnLi9pbmRleC5odG1sJztcbiAgICBob21lcGFnZUxpbmsuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuXG4gICAgLy8gQ3JlYXRlIE1haW4gTWVudSBCbG9ja1xuICAgIGNvbnN0IE1lbnVBcnIgPSBbXTtcbiAgICBjb25zdCBtZW51RGl2ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2RpdicsIG1haW5OQXYsICdtZW51RGl2Jyk7XG4gICAgY29uc3QgbWFpbk1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnbWVudScsIG1lbnVEaXYsICdtYWluTWVudScpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNZW51QXJyLCAnZmVhdHVyZXMnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTWVudUFyciwgJ2Fib3V0JywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1lbnVBcnIsICdtZW51JywgJ21lbnVMaXN0JywgJ01lbnUnKTtcbiAgICBibG9ja3MuZGlzcGxheU1lbnUobWFpbk1lbnUsIE1lbnVBcnIpO1xuXG4gICAgLy8gQ3JlYXRlIG1vYmlsZSBtZW51XG4gICAgY29uc3QgTW9iaWxlTWVudUFyciA9IFtdO1xuICAgIGNvbnN0IG1vYmlsZU1lbnUgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgbWVudURpdiwgJ21vYmlsZU1lbnUnLCAnbW9iaWxlTWVudScpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVJY29uID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2knLCBtb2JpbGVNZW51LCAnZmFzJyk7XG4gICAgbW9iaWxlTWVudUljb24uY2xhc3NMaXN0LmFkZCgnZmEtYmFycycpO1xuICAgIG1vYmlsZU1lbnVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGFtYnVyZ2VyTWVudScpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVMaXN0ID0gYmxvY2tzLmFkZEVsZW1lbnQoJ21lbnUnLCBtb2JpbGVNZW51LCAnbW9iaWxlTWVudUxpc3QnLCAnbW9iaWxlTWVudUxpc3QnKTtcbiAgICBtb2JpbGVNZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdoaWRlRWxlbWVudCcpO1xuICAgIGJsb2Nrcy5uZXdNZW51SXRlbShNb2JpbGVNZW51QXJyLCAnZmVhdHVyZXMnLCAnbWVudUxpc3QnLCAnRmVhdHVyZXMnKTtcbiAgICBibG9ja3MubmV3TWVudUl0ZW0oTW9iaWxlTWVudUFyciwgJ2Fib3V0JywgJ21lbnVMaXN0JywgJ0Fib3V0Jyk7XG4gICAgYmxvY2tzLm5ld01lbnVJdGVtKE1vYmlsZU1lbnVBcnIsICdtZW51JywgJ21lbnVMaXN0JywgJ01lbnUnKTtcbiAgICBibG9ja3MuZGlzcGxheU1lbnUobW9iaWxlTWVudUxpc3QsIE1vYmlsZU1lbnVBcnIpO1xuICB9KTtcbiAgXG4gIGNvbnN0IF9tYWluQmxvY2sgPSAoIGZ1bmN0aW9uKCkge1xuICAgIC8vIENhY2hlIERPTVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIFxuICAgIC8vIE1haW4gYmxvY2sgcHJpbWFyeSBoZWFkZXJcbiAgICBjb25zdCBwcmltYXJ5SGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gyJywgbWFpbiwgJ3ByaW1hcnlIZWFkZXInKTtcbiAgICBwcmltYXJ5SGVhZGVyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIHByaW1hcnlIZWFkZXIuc3R5bGUudGV4dFRyYW5zZm9ybSA9ICd1cHBlcmNhc2UnO1xuXG4gICAgLy8gTWFpbiBibG9jayBzdWIgaGVhZGVyXG4gICAgY29uc3Qgc3ViSGVhZGVyID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2g0JywgbWFpbiwgJ3N1YkhlYWRlcicpO1xuICAgIHN1YkhlYWRlci5pbm5lckhUTUwgPSAnPHNwYW4+4qyhPC9zcGFuPiBPUkdBTklDIEZSVUlUIDxzcGFuPuKsoTwvc3Bhbj4gSE9UIEFWQUlMQUJMRSc7XG5cbiAgICAvLyBHYWxsZXJ5XG4gICAgY29uc3QgZ2FsbGVyeSA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBtYWluLCAnZ2FsbGVyeScsICdnYWxsZXJ5Jyk7XG4gIH0pO1xuICBcbiAgY29uc3QgX2Zvb3RlckJsb2NrID0gKCBmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcbiAgICBjb25zdCBmaXJzdEZvb3RlckNvbCA9IGJsb2Nrcy5hZGRFbGVtZW50KCdkaXYnLCBmb290ZXIsICdmb290ZXJDb2wnKTtcbiAgICBjb25zdCBzZWNvbmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG4gICAgY29uc3QgdGhpcmRGb290ZXJDb2wgPSBibG9ja3MuYWRkRWxlbWVudCgnZGl2JywgZm9vdGVyLCAnZm9vdGVyQ29sJyk7XG5cbiAgICAvLyBGaXJzdCBGb290ZXIgQ29sXG4gICAgY29uc3Qgam9pblVzID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXMnKTtcbiAgICBqb2luVXMudGV4dENvbnRlbnQgPSAnSm9pbiBVcyc7XG4gICAgY29uc3Qgam9pblVzRGVzYyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNEZXNjJyk7XG4gICAgam9pblVzRGVzYy50ZXh0Q29udGVudCA9ICdBbHdheXMgbG9va2luZyBmb3IgZnJpZW5kbHkgc3RhZmYgd2l0aCBwb3NpdGl2ZSBhdHRpdHVkZXMhIFBsZWFzZSBzdWJtaXQgeW91ciByZXN1bWUgdG8nO1xuICAgIGNvbnN0IGpvaW5Vc0VtYWlsTGluayA9IGJsb2Nrcy5hZGRFbGVtZW50KCdhJywgZmlyc3RGb290ZXJDb2wsICdqb2luVXNFbWFpbExpbmsnKTtcbiAgICBqb2luVXNFbWFpbExpbmsuaW5uZXJIVE1MID0gJ2hlbGxvQHRlYWxheC5jb20nO1xuICAgIGpvaW5Vc0VtYWlsTGluay5ocmVmID0gJ21haWx0bzpoZWxsb0B0ZWFsYXguY29tJztcblxuICAgIC8vIFNlY29uZCBGb290ZXIgQ29sXG4gICAgY29uc3QgbG9jYXRpb24gPSBibG9ja3MuYWRkRWxlbWVudCgnaDMnLCBzZWNvbmRGb290ZXJDb2wsICdsb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gJ0xPQ0FUSU9OJztcbiAgICBjb25zdCBsb2NhdGlvbkFkZHIgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQWRkcicpO1xuICAgIGxvY2F0aW9uQWRkci50ZXh0Q29udGVudCA9ICcxMjM0IEJlbGxhaXJlJztcbiAgICBjb25zdCBsb2NhdGlvbkNpdHkgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHNlY29uZEZvb3RlckNvbCwgJ2xvY2F0aW9uQ2l0eScpO1xuICAgIGxvY2F0aW9uQ2l0eS50ZXh0Q29udGVudCA9ICdIb3VzdG9uLCBUWCA3NzAzNic7XG4gICAgY29uc3QgbG9jYXRpb25QaG9uZU51bWJlciA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgc2Vjb25kRm9vdGVyQ29sLCAnbG9jYXRpb25QaG9uZU51bWJlcicpO1xuICAgIGxvY2F0aW9uUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnMjgxLTk5OS0wOTA5JztcblxuICAgIC8vIFRoaXJkIEZvb3RlciBDb2xcbiAgICBjb25zdCBob3Vyc1RpdGxlID0gYmxvY2tzLmFkZEVsZW1lbnQoJ2gzJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc1RpdGxlJyk7XG4gICAgaG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdIT1VSUyc7XG4gICAgY29uc3QgaG91cnNEYXRlcyA9IGJsb2Nrcy5hZGRFbGVtZW50KCdwJywgdGhpcmRGb290ZXJDb2wsICdob3Vyc0RhdGVzJyk7XG4gICAgaG91cnNEYXRlcy50ZXh0Q29udGVudCA9ICdTVU5EQVkgLSBGUklEQVknO1xuICAgIGNvbnN0IGhvdXJzSG91cnMgPSBibG9ja3MuYWRkRWxlbWVudCgncCcsIHRoaXJkRm9vdGVyQ29sLCAnaG91cnNIb3VycycpO1xuICAgIGhvdXJzSG91cnMudGV4dENvbnRlbnQgPSAnMTE6MDAgQU0gLSA5OjAwIFBNJztcblxuICB9KTtcbiAgXG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBibG9ja3MuY2xlYXJQYWdlKCk7XG4gICAgYmxvY2tzLnNrZWxldG9uSFRNTCgpO1xuICAgIF9oZWFkZXJCbG9jaygpO1xuICAgIF9tYWluQmxvY2soKTtcbiAgICBfZm9vdGVyQmxvY2soKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVuZGVyLFxuICB9XG59KSgpO1xuXG5leHBvcnQge21lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2Jsb2Nrc30gZnJvbSAnLi9ibG9ja3MuanMnO1xuaW1wb3J0IHtob21lcGFnZX0gZnJvbSAnLi9ob21lcGFnZS9ob21lcGFnZS5qcyc7XG5pbXBvcnQgeyBhYm91dFVzIH0gZnJvbSAnLi9hYm91dFVzL2Fib3V0VXMuanMnO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudS9tZW51LmpzJztcblxuY29uc3QgY3JlYXRlUGFnZSA9ICggZnVuY3Rpb24oKSB7XG4gIFxuICBmdW5jdGlvbiBfaW5pdCgpIHtcbiAgICBtZW51LnJlbmRlcigpO1xuICB9XG5cbiAgX2luaXQoKTtcbn0pKCk7XG5cblxuY29uc3QgbW9iaWxlTWVudSA9ICggZnVuY3Rpb24oKSB7XG5cbiAgLy8gQ2FjaGUgRE9NXG4gIGNvbnN0IGhhbWJ1cmdlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGFtYnVyZ2VyTWVudScpO1xuXG4gIC8vIFRvb2dsZSBtb2JpbGUgbWVudVxuICBoYW1idXJnZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgICBibG9ja3MudG9nZ2xlRWxlbWVudCgnbW9iaWxlTWVudUxpc3QnLCAnaGlkZUVsZW1lbnQnKTtcbiAgfVxuXG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9