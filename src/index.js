import './reset.css';
import './style.css';
import {homepage} from './homepage/homepage.js';

const createPage = ( function() {
  
  function _init() {
    homepage.createBasicHTML('header', 'main', 'footer');
  }

  _init();
})();
