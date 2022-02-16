import {blocks} from '../blocks.js';
// import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
// import firstColImgSrc from './resources/about-img.jpg';
// import storyImg1Src from './resources/story-img1.jpg';
// import storyImg2Src from './resources/story-img2.jpg';
// import storyImg3Src from './resources/story-img3.jpg';
import houseMilkTeaSrc from './resources/mt.house-milk-tea.jpg';
import brownSugarMilkTeaSrc from './resources/mt.brown-sugar-milk-tea.jpg';
import thaiTeaSrc from './resources/mt.thai-tea.jpg';
import vintageBlackMilkTeaSrc from './resources/mt.vintage-black-milk-tea.jpg';
import cheeseJasmineSrc from './resources/cheezo.tippy-tea.jpg';
import grapeFruitSrc from './resources/grapefruit-overflow.jpg';

const drinksMenu = ( function() {

  // Cache DOM
  const mainContent = document.getElementById('mainContent');

  function createDrinksMenu() {
    const drinksMenuContainer = blocks.addElement('div', mainContent, 'drinksMenuContainer', 'drinksMenuContainer');
    const primaryHeader = blocks.addElement('h2', drinksMenuContainer, 'primaryHeader');
    primaryHeader.textContent = 'MENU';
    primaryHeader.style.textTransform = 'uppercase';

    // Sub header
    const subHeader = blocks.addElement('h4', drinksMenuContainer, 'subHeader');
    subHeader.innerHTML = '<span>⬡</span> ORGANIC FRUIT <span>⬡</span> HOT AVAILABLE';

    // Gallery
    const gallery = blocks.addElement('div', drinksMenuContainer, 'gallery', 'gallery');
    blocks.createImgFigure(gallery, houseMilkTeaSrc, 'house milk tea');
    blocks.createImgFigure(gallery, brownSugarMilkTeaSrc, 'brown sugar milk tea');
    blocks.createImgFigure(gallery, thaiTeaSrc, 'thai tea');
    blocks.createImgFigure(gallery, vintageBlackMilkTeaSrc, 'vintage black tea milk tea');
    blocks.createImgFigure(gallery, cheeseJasmineSrc, 'cheese jasmine tippy tea');
    blocks.createImgFigure(gallery, grapeFruitSrc, 'grapegruit overflow');
  }

  return {
    createDrinksMenu
  }

})();

export {drinksMenu};