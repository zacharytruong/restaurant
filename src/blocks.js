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
  return {
    newElement,
    newMenuItem,
  }
} )();

export {blocks};