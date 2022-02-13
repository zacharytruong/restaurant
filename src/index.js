import './reset.css';
import './style.css';
import { blocks } from './blocks.js';
import { homepage } from './homepage/homepage.js';
import { aboutUs } from './aboutUs/aboutUs.js';
import { menu } from './menu/menu.js';

( function() {
  
  function _init() {
    menu.render();
  }

  _init();
})();

const mobileMenu = ( function() {

  // Cache DOM
  const hamburgerMenu = document.getElementById('hamburgerMenu');

  // Toogle mobile menu
  hamburgerMenu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    blocks.toggleElement('mobileMenuList', 'hideElement');
  }

})();


// const loadHomepageFromMainLogo = ( function() {

//   const mainLogoLink = document.getElementById('mainLogoLink');
//   mainLogoLink.addEventListener('click', homepage.render);

//   console.log('click on logo')

// })();

// const menuLinks = ( function() {

//   const featuresLink = document.getElementById('featuresLink');
//   const aboutLink = document.getElementById('aboutLink');
//   const menuLink = document.getElementById('menuLink');

//   featuresLink.addEventListener('click', homepage.render);
//   aboutLink.addEventListener('click', aboutUs.render);
//   menuLink.addEventListener('click', menu.render);

//   const featuresMLink = document.getElementById('featuresMLink');
//   const aboutMLink = document.getElementById('aboutMLink');
//   const menuMLink = document.getElementById('menuMLink');

//   featuresMLink.addEventListener('click', homepage.render);
//   aboutMLink.addEventListener('click', aboutUs.render);
//   menuMLink.addEventListener('click', menu.render);

// })();