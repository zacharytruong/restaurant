import {blocks} from './../blocks.js';
import Logo from './resources/YUMCHA-Gold.svg';

const homepage = ( function() {
  
  // Create Skeleton HTML
  const newHeader = blocks.newElement('div');
  newHeader.setAttribute('id', 'header');
  const newMainContent = blocks.newElement('div');
  newMainContent.setAttribute('id', 'main');
  const newFooter = blocks.newElement('div');
  newFooter.setAttribute('id', 'footer');
  document.body.appendChild(newHeader);
  document.body.appendChild(newMainContent);
  document.body.appendChild(newFooter);

  // Cache DOM
  const header = document.getElementById('header');
  const mainContent = document.getElementById('main');
  const footer = document.getElementById('footer');
  
  // Create Main Navigation
  const logoDiv = blocks.newElement('div');
  logoDiv.classList.add('logoDiv');
  const mainLogo = new Image();
  mainLogo.src = Logo;
  mainLogo.classList.add('mainLogo');
  logoDiv.appendChild(mainLogo);

  const menuDiv = blocks.newElement('div');
  menuDiv.classList.add('menuDiv');
  const mainMenu = blocks.newElement('menu');
  menuDiv.appendChild(mainMenu);
  const featuresMenu = blocks.newMenuItem('feature', 'Features');
  const aboutMenu = blocks.newMenuItem('about', 'About');
  const menuMenu = blocks.newMenuItem('menu', 'Menu');
  mainMenu.appendChild(featuresMenu);
  mainMenu.appendChild(aboutMenu);
  mainMenu.appendChild(menuMenu);
  
  header.appendChild(logoDiv);
  header.appendChild(menuDiv);
  
  


});

export {homepage};