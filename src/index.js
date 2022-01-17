import './reset.css';
import './style.css';
import {blocks} from './blocks.js';
import {homepage} from './homepage/homepage.js';

const createPage = ( function() {
  
  function _init() {

    // Create Skeleton HTML
    document.body.appendChild(blocks.newBlock('header'));
    document.body.appendChild(blocks.newBlock('main'));
    document.body.appendChild(blocks.newBlock('footer'));

    homepage.render();

  }

  _init();
})();
