const blocks = ( function() {

  function newElement(ele) {
    return document.createElement(ele);
  }
  function newBlock(name){
    const block = newElement('div');
    block.setAttribute('id', name);
    return block;
  }
  function newMenuLink(id, name) {
    const newItem = newElement('li');
    const newItemLink = newElement('a');
    newItemLink.setAttribute('href', `./#${id}`);
    newItemLink.innerHTML = name;
    newItem.appendChild(newItemLink);
    return newItem;
  }
  function createCols(num, className) {
    const container = newElement('div');
    for (let i = 1; i <= num; i++) {
      const col = newElement('div');
      col.style.width = (100 / num) + '%';
      col.classList.add(className);
      container.appendChild(col);
    }
    return container;
  }
  function newMenuItem(arr, id, name) {
    const menuItem = blocks.newMenuLink(id, name);
    arr.push(menuItem);
    return arr;
  }
  function displayMenu(node, arr) {
    for (let i = 0; i < arr.length; i++) {
      node.appendChild(arr[i]);
    }
  }
  
  
  return {
    newElement,
    newBlock,
    newMenuLink,
    createCols,
    newMenuItem,
    displayMenu,
  }
} )();

export {blocks};