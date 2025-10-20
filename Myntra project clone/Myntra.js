let bagItems;
onLoad();
function onLoad(){
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}


function addToBag(itemsId){
  bagItems.push(itemsId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}
function displayBagIcon(){
let bagItemCountElement = document.querySelector('.bag_item_count');
if (bagItems.length>0){
  bagItemCountElement.style.visibility = 'visible'
 bagItemCountElement.innerText = bagItems.length; 
}else{
bagItemCountElement.style.visibility = 'hidden';
}
}

function  displayItemsOnHomePage(){
let itemsContainerElement = document.querySelector('.items_container');
let innerHtml = '';
items.forEach(items => {

  innerHtml +=`
    <div class="item_container">
    <img class="item_image" src="${items.image}" alt="item image">
    <div class="rating">
      ${items.rating.stars }⭐| ${items.rating.count} 
      </div>
      <div class="company_name">${items.company}</div>
      <div class="item_name">${items.item_name}</div>
      <div class="price">
        <span class="current_price">Rs ${items.current_price}</span>
        <span class="original_price"> Rs ${items.original_price}</span>
<span class="discount">(${items.discount_percentage} % OFF)</span>
        
 </div>
 <button class="btn_add_bag" onclick="addToBag(${items.id});">Add to Bag</button>
    </div>`

});

itemsContainerElement.innerHTML = innerHtml;
}


