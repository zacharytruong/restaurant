const blocks = ( function() {

  function newElement(ele) {
    return document.createElement(ele);
  }
  function newMenuItem(id, name) {
    const newItem = newElement('li');
    const newItemLink = newElement('a');
    newItemLink.setAttribute('href', `./#${id}`);
    newItemLink.innerHTML = name;
    newItem.appendChild(newItemLink);
    return newItem;
  }
  function newColumns(num, node) {
    for (let i = 1; i <= num; i++) {
      const col = newElement('div');
      col.width = '100 / 3' + '%';
    }
  }
  
  return {
    newElement,
    newMenuItem,
    newColumns,
  }
} )();

export {blocks};