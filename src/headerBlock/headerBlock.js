import {blocks} from '../blocks.js';
import Logo from './resources/TEALAX-transparent.png';
import backgroundImageSrc from './resources/home-bg-slideshow1.jpg';

const headerBlock = ( function() {

  // Cache DOM
  // const header = document.getElementById('header');

  // Creating sections
  function _styleHeaderBlock() {
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${backgroundImageSrc}')`;
  }
  function _createNavBar() {
    blocks.addElement('div', header, '', 'mainNav');
  }
  function _createLogo() {
    const logoDiv = blocks.addElement('div', mainNav, 'logoDiv');
    const mainLogo = blocks.addElement('img', logoDiv, 'mainLogo', 'mainLogo');
    mainLogo.src = Logo;
    const homepageLink = blocks.addElement('a', logoDiv, '', 'mainLogoLink');
    homepageLink.appendChild(mainLogo);
  }
  function _createMobileMenuIcon() {
    const menuDiv = blocks.addElement('div', mainNav, 'menuDiv');
    const mobileMenu = blocks.addElement('div', menuDiv, 'mobileMenu', 'mobileMenu');
    const mobileMenuIcon = blocks.addElement('i', mobileMenu, 'fas');
    mobileMenuIcon.classList.add('fa-bars');
    mobileMenuIcon.setAttribute('id', 'hamburgerMenu');
  }
  function _createNavMenu() {
    const MenuArr = [];
    const menuDiv = document.querySelector('.menuDiv');
    const mainMenu = blocks.addElement('menu', menuDiv, 'mainMenu');
    blocks.newMenuItem(MenuArr, 'featuresLink', 'menuList', 'Features');
    blocks.newMenuItem(MenuArr, 'aboutLink', 'menuList', 'About');
    blocks.newMenuItem(MenuArr, 'menuLink', 'menuList', 'Menu');
    blocks.displayMenu(mainMenu, MenuArr);
    mainMenu.classList.add('hideElement');
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

export {headerBlock};