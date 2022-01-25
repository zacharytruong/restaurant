import './reset.css';
import './style.css';
import {blocks} from './blocks.js';
import {homepage} from './homepage/homepage.js';

const createPage = ( function() {
  
  function _init() {
    homepage.render();
  }

  _init();
})();
