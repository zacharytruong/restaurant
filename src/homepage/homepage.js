import {blocks} from './../blocks.js';
import Logo from './resources/YUMCHA-Gold.svg';
import backgroundImageSrc from './resources/home-bg-slideshow1.jpg';

const homepage = ( function() {
  const _headerBlock = ( function() {

    // Cache DOM
    const header = document.getElementById('header');
    header.style.backgroundImage = `linear-gradient(to left, rgba(194, 21, 0, .5) , rgba(255, 197, 0, .5)), url('${backgroundImageSrc}')`;

    // Create Main Navigation
    const homepageLink = blocks.newElement('a');
    homepageLink.href = './index.html';
    const logoDiv = blocks.newElement('div');
    logoDiv.classList.add('logoDiv');    
    const mainLogo = new Image();
    mainLogo.src = Logo;
    mainLogo.classList.add('mainLogo');
    homepageLink.appendChild(mainLogo);
    logoDiv.appendChild(homepageLink);
    header.appendChild(logoDiv);

    // Create Main Menu Block
    const MenuArr = [];
    const menuDiv = blocks.newElement('div');
    menuDiv.classList.add('menuDiv');
    const mainMenu = blocks.newElement('menu');
    menuDiv.appendChild(mainMenu);
    blocks.newMenuItem(MenuArr, 'features', 'Features');
    blocks.newMenuItem(MenuArr, 'about', 'About');
    blocks.newMenuItem(MenuArr, 'menu', 'Menu');
    blocks.displayMenu(menuDiv, MenuArr);
    header.appendChild(menuDiv);

  });
  
  const _mainBlock = ( function() {

    // Cache DOM
    const main = document.getElementById('main');
    
    // Create Features block
    const features = blocks.newElement('div');
    features.setAttribute('id', 'features');
    const featuresHeader = blocks.newElement('h2');
    featuresHeader.textContent = 'Features';
    features.appendChild(featuresHeader);
    
    // Create 3 columns of features
    const featuresContainer = blocks.createCols(3,'featuresList');
    featuresContainer.classList.add('featuresContainer');
    features.appendChild(featuresContainer);
    main.appendChild(features);
    const featuresArr = Array.from(document.querySelectorAll('.featuresList'));
    
    // Feature columns content
    

  });
  
  const _footerBlock = ( function() {
    const footer = document.getElementById('footer');
  });
  
  function creatingFeatures(arr) {
    for (let i = 0; i < arr.length; i++) {
      
    }
  }
  function render() {
    _headerBlock();
    _mainBlock();
    _footerBlock();
  }

  return {
    render,
  }
})();

export {homepage};