const blocks = ( function() {

  function skeletonHTML() {
    document.body.appendChild(blocks.newBlock('header'));
    document.body.appendChild(blocks.newBlock('main'));
    document.body.appendChild(blocks.newBlock('footer'));
  }
  function newElement(ele, className, idName) {
    const element = document.createElement(ele);
    if (className) {element.classList.add(className)}
    if (idName) {element.setAttribute('id', idName)}
    return element;
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
  function featureColumn(
    colClassName, 
    subColClassName, 
    featureIconContainerClassName, 
    firstFeatureIconClassName,
    secondFeatureIconClassName, 
    featureTitleClassName,
    featureTitleContent
    ) {
    const col = blocks.newElement('div');
    col.classList.add(colClassName);
    const subCol = blocks.newElement('div');
    subCol.classList.add(subColClassName);
    col.appendChild(subCol);
    const featureIconContainer = blocks.newElement('span');
    featureIconContainer.classList.add(featureIconContainerClassName);
    const featureIcon = blocks.newElement('i');
    featureIcon.classList.add(firstFeatureIconClassName);
    featureIcon.classList.add(secondFeatureIconClassName);
    featureIconContainer.appendChild(featureIcon);
    subCol.appendChild(featureIcon);
    const featureTitle = blocks.newElement('h3');
    featureTitle.classList.add(featureTitleClassName);
    featureTitle.textContent = featureTitleContent,
    col.appendChild(featureTitle);
    return col;
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
    skeletonHTML,
    newElement,
    newBlock,
    newMenuLink,
    newMenuItem,
    displayMenu,
    featureColumn,
  }
} )();

export {blocks};