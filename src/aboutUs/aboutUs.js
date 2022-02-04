import {blocks} from './../blocks.js';
import Logo from './resources/TEALAX-transparent.png';
import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
import firstColImgSrc from './resources/about-img.jpg';

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
    const subHeader = blocks.addElement('h4', main, 'primaryHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    const mainContent = blocks.addElement('div', main, 'mainContent')
    mainContent.style.width = '70%';
    mainContent.style.margin = '0 auto';

    // Main block content first column
    const firstCol = blocks.addElement('div', mainContent, 'firstCol');
    firstCol.style.width = '30%';
    const img = blocks.addElement('img', firstCol, 'firstColImg');
    img.style.width = '100%';
    img.src = firstColImgSrc;
    const imgCap = blocks.addElement('p', firstCol, 'imgCap');
    imgCap.textContent = 'We Make everthing with LOVE';

    // Main block content second column
    const secondCol = blocks.addElement('div', mainContent, 'secondCOl');
    secondCol.style.width = '100%';

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