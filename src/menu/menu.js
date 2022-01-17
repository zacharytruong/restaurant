import {blocks} from './../blocks.js';
import Logo from './resources/YUMCHA-Gold.svg';

const homepage = ( function() {
  const _headerBlock = ( function() {
    const header = document.getElementById('header');
  });
  
  const _mainBlock = ( function() {
    const main = document.getElementById('main');
  });
  
  const _footerBlock = ( function() {
    const footer = document.getElementById('footer');
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