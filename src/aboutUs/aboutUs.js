import {blocks} from '../blocks.js';
import backgroundImageSrc from './resources/home-bg-slideshow2.jpg';
import firstColImgSrc from './resources/about-img.jpg';
import storyImg1Src from './resources/story-img1.jpg';
import storyImg2Src from './resources/story-img2.jpg';
import storyImg3Src from './resources/story-img3.jpg';
// import houseMilkTeaSrc from './resources/mt.house-milk-tea.jpg';
// import brownSugarMilkTeaSrc from './resources/mt.brown-sugar-milk-tea.jpg';
// import thaiTeaSrc from './resources/mt.thai-tea.jpg';
// import vintageBlackMilkTeaSrc from './resources/mt.vintage-black-milk-tea.jpg';
// import cheeseJasmineSrc from './resources/cheezo.tippy-tea.jpg';
// import grapeFruitSrc from './resources/grapefruit-overflow.jpg';

const aboutUs = ( function() {

  // Cache DOM
  const mainContent = document.getElementById('mainContent');

  function createAboutUs() {
    const aboutUsContainer = blocks.addElement('div', mainContent, 'aboutUsContainer', 'aboutUsContainer');
    const primaryHeader = blocks.addElement('h2', aboutUsContainer, 'primaryHeader');
    primaryHeader.textContent = 'Our Story';
    primaryHeader.style.textTransform = 'uppercase';

    // Main block sub header
    const subHeader = blocks.addElement('h4', aboutUsContainer, 'subHeader');
    subHeader.textContent = 'Your delicious tea house since 2019'

    // Main block content
    blocks.addElement('div', aboutUsContainer, 'aboutUsContent', 'aboutUsContent');
    _createAboutUsFirstCol();
    _createAboutUsSecondCol();
  }
  function _createAboutUsFirstCol() {
    const firstCol = blocks.addElement('div', aboutUsContent, 'firstCol');
    const img = blocks.addElement('img', firstCol, 'firstColImg');
    img.style.width = '100%';
    img.src = firstColImgSrc;
    const imgCap = blocks.addElement('p', firstCol, 'imgCap');
    imgCap.textContent = 'We Make everthing with LOVE';
  }
  function _createAboutUsSecondCol() {
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
    prev.setAttribute('id', 'prev');
    const next = blocks.addElement('a', slideShowNav);
    next.classList.add('next');
    next.setAttribute('id', 'next');
    prev.innerHTML = '&#10094;';
    next.innerHTML = '&#10095;';
    const firstDot = blocks.addElement('span', dots);
    const secondDot = blocks.addElement('span', dots);
    const thirdDot = blocks.addElement('span', dots);
    firstDot.classList.add('dot');
    secondDot.classList.add('dot');
    thirdDot.classList.add('dot');
  }

  return {
    createAboutUs,
  }

})();

export {aboutUs};