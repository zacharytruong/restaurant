const homepage = ( function() {
  
    _createBasicHTML('header', 'main', 'footer');

  // Cache DOM
  const header = document.getElementById('header');

  _addingDivs(2, header);

  function _createBasicHTML(...args) {
    for (let arg of args) {
      const ele = document.createElement(arg);
      ele.setAttribute('id', arg);
      document.body.appendChild(ele)
    }
  }  

  function _createEle(ele) {
    return document.createElement(ele);
  }
  function _addingDivs(num, node) {
    for (let i = 0; i++; i <= num) {
      
      node.appendChild(_createEle('div'))
    }
  }
  

});

export {homepage};