import './reset.css';
import './style.css';
import { headerBlock } from './headerBlock/headerBlock.js';
import { features } from './features/features.js';
import { aboutUs } from './aboutUs/aboutUs.js';
import { drinksMenu } from './drinksMenu/drinksMenu.js';
import { footerBlock } from './footerBlock/footerBlock.js';

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
    features.createFeatures();
  }
  function _showAboutUs() {
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
    aboutUs.createAboutUs();
  }
  function _showDrinksMenu() {
    mainContent.innerHTML = '';
    drinksMenu.createDrinksMenu();
  }
  function _showMobileMenu() {
    mainMenu.classList.toggle('dropDown');
  }
  function _init() {
    headerBlock.render();
    features.createFeatures();
    footerBlock.render();
  }
  
})();
