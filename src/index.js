import './reset.css';
import './style.css';
import {homepage} from './homepage/homepage.js';

const createPage = ( function() {
  
  // Caching DOM
  const body = document.body;


  function _init() {
    _createSkeletonHTML('header', 'main', 'footer');
  }
  function _render(template, node) {
    if (!node) return;
    node.innerHTML = template;
  }
  function _createSkeletonHTML(...args) {
    for (let arg of args){
      const ele = document.createElement(arg);
      body.appendChild(ele);
    }
  }


  _init();
})();
