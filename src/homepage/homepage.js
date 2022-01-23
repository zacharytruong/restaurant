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
    const logoDiv = blocks.newElement('div', 'logoDiv', '');
    const mainLogo = new Image();
    mainLogo.src = Logo;
    mainLogo.classList.add('mainLogo');
    homepageLink.appendChild(mainLogo);
    logoDiv.appendChild(homepageLink);
    header.appendChild(logoDiv);

    // Create Main Menu Block
    const MenuArr = [];
    const menuDiv = blocks.newElement('div', 'menuDiv', '');
    const mainMenu = blocks.newElement('menu', 'mainMenu');
    menuDiv.appendChild(mainMenu);
    blocks.newMenuItem(MenuArr, 'features', 'Features');
    blocks.newMenuItem(MenuArr, 'about', 'About');
    blocks.newMenuItem(MenuArr, 'menu', 'Menu');
    blocks.displayMenu(mainMenu, MenuArr);
    header.appendChild(menuDiv);

  });
  
  const _mainBlock = ( function() {

    // Cache DOM
    const main = document.getElementById('main');
    
    // Create Features block
    const features = blocks.newElement('div', '', 'features');
    const featuresHeader = blocks.newElement('h3', 'featureHeader');
    featuresHeader.textContent = 'Features';
    features.appendChild(featuresHeader);
    const featuresContainer = blocks.newElement('div', 'featuresContainer');
    features.appendChild(featuresContainer);

    main.appendChild(features);
    
    // Create feature column
    const firstCol = blocks.featureColumn(
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-coffee',
      'featureTitle',
      'TEA'
    );
    featuresContainer.appendChild(firstCol);
    const secondCol = blocks.featureColumn(
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-cutlery',
      'featureTitle',
      'BAKERY - Make to Orders'
    );
    featuresContainer.appendChild(secondCol);
    const thirdCol = blocks.featureColumn(
      'featureCol',
      'featureIconContainer',
      'featureIcon',
      'fa',
      'fa-heart',
      'featureTitle',
      'SWEET'
    );
    featuresContainer.appendChild(thirdCol);
  });
  
  const _footerBlock = ( function() {

    const footer = document.getElementById('footer');
    const firstFooterCol = blocks.newElement('div', 'footerCol');
    footer.appendChild(firstFooterCol);
    const secondFooterCol = blocks.newElement('div', 'footerCol');
    footer.appendChild(secondFooterCol);
    const thirdFooterCol = blocks.newElement('div', 'footerCol');
    footer.appendChild(thirdFooterCol);

    // First Footer Col
    const joinUs = blocks.newElement('h3', 'joinUs');
    joinUs.textContent = 'Join Us';
    firstFooterCol.appendChild(joinUs);
    const joinUsDesc = blocks.newElement('p', 'joinUsDesc');
    joinUsDesc.textContent = 'Always looking for friendly staff with positive attitudes! Please submit your resume to';
    firstFooterCol.appendChild(joinUsDesc);
    const joinUsEmailLink = blocks.newElement('a', 'joinUsEmailLink');
    joinUsEmailLink.innerHTML = 'hello@tealax.com';
    joinUsEmailLink.href = 'mailto:hello@tealax.com';
    firstFooterCol.appendChild(joinUsEmailLink);


    // Second Footer Col
    const location = blocks.newElement('h3', 'location');
    location.textContent = 'LOCATION';
    secondFooterCol.appendChild(location);
    const locationAddr = blocks.newElement('p', 'locationAddr');
    locationAddr.textContent = '1234 Bellaire';
    secondFooterCol.appendChild(locationAddr);
    const locationCity = blocks.newElement('p', 'locationCity');
    locationCity.textContent = 'Houston, TX 77036';
    secondFooterCol.appendChild(locationCity);
    const locationPhoneNumber = blocks.newElement('p', 'locationPhoneNumber');
    locationPhoneNumber.textContent = '281-999-0909';
    secondFooterCol.appendChild(locationPhoneNumber);

    // Third Footer Col
    const hoursTitle = blocks.newElement('h3', 'hoursTitle');
    hoursTitle.textContent = 'HOURS';
    thirdFooterCol.appendChild(hoursTitle);
    const hoursDates = blocks.newElement('p', 'hoursDates');
    hoursDates.textContent = 'SUNDAY - FRIDAY';
    thirdFooterCol.appendChild(hoursDates);
    const hoursHours = blocks.newElement('p', 'hoursHours');
    hoursHours.textContent = '11:00 AM - 9:00 PM';
    thirdFooterCol.appendChild(hoursHours);

  });
  
  
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