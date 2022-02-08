import {blocks} from './../blocks.js';
import Logo from './resources/TEALAX-transparent.png';
import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
import firstColImgSrc from './resources/about-img.jpg';
import storyImg1Src from './resources/story-img1.jpg';
import storyImg2Src from './resources/story-img2.jpg';
import storyImg3Src from './resources/story-img3.jpg';

const aboutUs = ( function() {
  const _headerBlock = ( function() {

    // Cache DOM
    const header = document.getElementById('header');
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${backgroundImageSrc}')`;
    header.style.height = '600px';
    // Create Main Navigation
    const mainNAv = blocks.addElement('div', header, 'mainNav');
    const logoDiv = blocks.addElement('div', mainNAv, 'logoDiv');
    const mainLogo = new Image();
    mainLogo.src = Logo;
    mainLogo.classList.add('mainLogo');
    const homepageLink = blocks.addElement('a', logoDiv);
    homepageLink.href = './index.html';
    homepageLink.appendChild(mainLogo);

    // Create Main Menu Block
    const MenuArr = [];
    const menuDiv = blocks.addElement('div', mainNAv, 'menuDiv');
    const mainMenu = blocks.addElement('menu', menuDiv, 'mainMenu');
    blocks.newMenuItem(MenuArr, 'features', 'menuList', 'Features');
    blocks.newMenuItem(MenuArr, 'about', 'menuList', 'About');
    blocks.newMenuItem(MenuArr, 'menu', 'menuList', 'Menu');
    blocks.displayMenu(mainMenu, MenuArr);

    // Create mobile menu
    const MobileMenuArr = [];
    const mobileMenu = blocks.addElement('div', menuDiv, 'mobileMenu', 'mobileMenu');
    const mobileMenuIcon = blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.setAttribute('id', 'hamburgerMenu');
    const mobileMenuList = blocks.addElement('menu', mobileMenu, 'mobileMenuList', 'mobileMenuList');
    mobileMenuList.classList.add('hideElement');
    blocks.newMenuItem(MobileMenuArr, 'features', 'menuList', 'Features');
    blocks.newMenuItem(MobileMenuArr, 'about', 'menuList', 'About');
    blocks.newMenuItem(MobileMenuArr, 'menu', 'menuList', 'Menu');
    blocks.displayMenu(mobileMenuList, MobileMenuArr);
  });
  
  const _mainBlock = ( function() {

    // Cache DOM
    const main = document.getElementById('main');
    
    // Main block primary header
    const primaryHeader = blocks.addElement('h2', main, 'primaryHeader');
    primaryHeader.textContent = 'Our Story';
    primaryHeader.style.textTransform = 'uppercase';

    // Main block sub header
    const subHeader = blocks.addElement('h4', main, 'subHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    const aboutUsContent = blocks.addElement('div', main, 'aboutUsContent')

    // Main block content first column
    const firstCol = blocks.addElement('div', aboutUsContent, 'firstCol');    const img = blocks.addElement('img', firstCol, 'firstColImg');
    img.style.width = '100%';
    img.src = firstColImgSrc;
    const imgCap = blocks.addElement('p', firstCol, 'imgCap');
    imgCap.textContent = 'We Make everthing with LOVE';

    // Main block content second column
    const secondCol = blocks.addElement('div', aboutUsContent, 'secondCol');

    // Main block content second column slideshow
    const slideShowContainer = blocks.addElement('div', secondCol, 'slideShowContainer');
    const firstSlide = blocks.addElement('div', slideShowContainer, 'slideShow');
    const secondSlide = blocks.addElement('div', slideShowContainer, 'slideShow');
    const thirdSlide = blocks.addElement('div', slideShowContainer, 'slideShow');
    firstSlide.classList.add('fade');
    secondSlide.classList.add('fade');
    thirdSlide.classList.add('fade');
    const slideShowNav = blocks.addElement('div', slideShowContainer, 'slideShowNav');
    const dots = blocks.addElement('div', secondCol, 'dots');
    const slideShowCaption = blocks.addElement('p', secondCol, 'slideShowCaption');
    slideShowCaption.textContent = 'More comfortable space';
    const firstImg = blocks.addElement('img', firstSlide);
    firstImg.src = storyImg1Src;
    const secondImg = blocks.addElement('img', secondSlide);
    secondImg.src = storyImg2Src;
    const thirdImg = blocks.addElement('img', thirdSlide);
    thirdImg.src = storyImg3Src;
    const prev = blocks.addElement('a', slideShowNav);
    prev.classList.add('prev');
    const next = blocks.addElement('a', slideShowNav);
    next.classList.add('next');
    prev.innerHTML = '&#10094;';
    next.innerHTML = '&#10095;';
    const firstDot = blocks.addElement('span', dots);
    const secondDot = blocks.addElement('span', dots);
    const thirdDot = blocks.addElement('span', dots);
    firstDot.classList.add('dot');
    secondDot.classList.add('dot');
    thirdDot.classList.add('dot');
    secondSlide.style.display = 'none';
    thirdSlide.style.display = 'none';

    // Function slide show
    
    const slideShow = (
      function() {
        const slides = document.getElementsByClassName('slideShow');
        const dots = document.getElementsByClassName('dot');
        const prev = Array.from(document.getElementsByClassName('prev'));
        let slideOrder = 1;
        showSlide(slideOrder);
        
        prev[0].addEventListener('click', nextSlide(-1));
        function showSlide(n) {
          if (n > slides.length) {
            slideOrder = 1;
          }
          if (n < 1) {
            slideOrder = slides.length;
          }
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
          }
          slides[slideOrder -1].style.display = 'block';
        }
        function nextSlide(n) {
          showSlide(slideOrder += n);
        }
        function currentSlide(n) {
          showSlide(slideOrder = n);
        }
      }
    )();

  });
  
  const _footerBlock = ( function() {

    const footer = document.getElementById('footer');
    const firstFooterCol = blocks.addElement('div', footer, 'footerCol');
    const secondFooterCol = blocks.addElement('div', footer, 'footerCol');
    const thirdFooterCol = blocks.addElement('div', footer, 'footerCol');

    // First Footer Col
    const joinUs = blocks.addElement('h3', firstFooterCol, 'joinUs');
    joinUs.textContent = 'Join Us';
    const joinUsDesc = blocks.addElement('p', firstFooterCol, 'joinUsDesc');
    joinUsDesc.textContent = 'Always looking for friendly staff with positive attitudes! Please submit your resume to';
    const joinUsEmailLink = blocks.addElement('a', firstFooterCol, 'joinUsEmailLink');
    joinUsEmailLink.innerHTML = 'hello@tealax.com';
    joinUsEmailLink.href = 'mailto:hello@tealax.com';

    // Second Footer Col
    const location = blocks.addElement('h3', secondFooterCol, 'location');
    location.textContent = 'LOCATION';
    const locationAddr = blocks.addElement('p', secondFooterCol, 'locationAddr');
    locationAddr.textContent = '1234 Bellaire';
    const locationCity = blocks.addElement('p', secondFooterCol, 'locationCity');
    locationCity.textContent = 'Houston, TX 77036';
    const locationPhoneNumber = blocks.addElement('p', secondFooterCol, 'locationPhoneNumber');
    locationPhoneNumber.textContent = '281-999-0909';

    // Third Footer Col
    const hoursTitle = blocks.addElement('h3', thirdFooterCol, 'hoursTitle');
    hoursTitle.textContent = 'HOURS';
    const hoursDates = blocks.addElement('p', thirdFooterCol, 'hoursDates');
    hoursDates.textContent = 'SUNDAY - FRIDAY';
    const hoursHours = blocks.addElement('p', thirdFooterCol, 'hoursHours');
    hoursHours.textContent = '11:00 AM - 9:00 PM';

  });
  
  function render() {
    blocks.skeletonHTML();
    _headerBlock();
    _mainBlock();
    _footerBlock();
  }

  return {
    render,
  }
})();

export {aboutUs};