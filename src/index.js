import './reset.css';
import './style.css';
import { headerBlock } from './headerBlock/headerBlock.js';
import { mainContent } from './mainContent/mainContent.js';
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
    features.classList.remove('hideElement');
    aboutUsContainer.classList.add('hideElement');
    drinksMenuContainer.classList.add('hideElement');
  }
  function _showAboutUs() {
    features.classList.add('hideElement');
    aboutUsContainer.classList.remove('hideElement');
    drinksMenuContainer.classList.add('hideElement');
  }
  function _showDrinksMenu() {
    features.classList.add('hideElement');
    aboutUsContainer.classList.add('hideElement');
    drinksMenuContainer.classList.remove('hideElement');
  }
  function _showMobileMenu() {
    mainMenu.classList.toggle('dropDown');
  }
  function _init() {
    headerBlock.render();
    mainContent.createFeatures();
    mainContent.createAboutUs();
    mainContent.createDrinksMenu();
    _showFeatures();
    footerBlock.render();
  }
  
})();


// Function slide show
const slideShow = ( function() {
  // Cache DOM
    const slides = Array.from(document.getElementsByClassName('slideShow'));
    const dots = Array.from(document.getElementsByClassName('dot'));
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');

    // Init
    let slideIndex = 0;
    showSlide(slideIndex);
    
    // Show slide by SlideIndex
    function showSlide(n) {
      if (!slides[0]) {
        return
      } else {
        slides.map( slide => {
          slide.style.display = 'none';
        })
        dots.map( dot => {
          dot.classList.remove('active');
        })
        if (n > slides.length - 1) {
          slideIndex = 0;
        }
        if ( n < 0) {
          slideIndex = slides.length - 1;
        }
        slides[slideIndex].style.display = 'block';
        dots[slideIndex].classList.add('active');
      }
    }

    // Show current slide
    if (!dots[0]) {
      return
    } else {
      dots.forEach( (dot, index) => {
        dot.addEventListener('click', function() {
          currentSlide(index)
        });
      })
    }
    
    function currentSlide(n) {
      showSlide(slideIndex = n);
    }

    // Next or prev slide
    prev.addEventListener('click', function() {
      nextSlide(-1);
    });
    next.addEventListener('click',function() {
      nextSlide(1);
    });
    function nextSlide(n) {
      showSlide(slideIndex += n);
    }
})();



