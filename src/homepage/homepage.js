const homepage = ( function() {
  
  // Cache DOM
  // const header = document.getElementById('header');

  function createBasicHTML(...args) {
    for (let arg of args) {
      const ele = document.createElement(arg);
      ele.setAttribute('id', arg);
      document.body.appendChild(ele)
    }
  }
  
  return {
    createBasicHTML,
  }

})();

export {homepage};