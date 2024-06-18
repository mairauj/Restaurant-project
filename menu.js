function loadMenu() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    myFunction(this);
  };
  xhttp.open("GET", "menu.json");
  xhttp.send();
}

function myFunction(json) {
  const menuObj = JSON.parse(json.responseText);
  makeMenu(menuObj);
}

window.onload = loadMenu();

function makeMenu(obj) {
  const starterContainer = document
    .getElementById("menu-starters")
    .querySelector(".menu-item-container");
  const mainContainer = document
    .getElementById("menu-main")
    .querySelector(".menu-item-container");
  const drinksContainer = document
    .getElementById("menu-drinks")
    .querySelector(".menu-item-container");
  const dessertContainer = document
    .getElementById("menu-dessert")
    .querySelector(".menu-item-container");
  const starter = obj.starter;
  const main = obj.main;
  const drinks = obj.drinks;
  const dessert = obj.dessert;
  menuObjects(starter, starterContainer);
  menuObjects(main, mainContainer);
  menuObjects(drinks, drinksContainer);
  menuObjects(dessert, dessertContainer);
}

function menuObjects(menuObj, target) {
  menuObj.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("menu-item");
    const itemHeading = document.createElement("h2");
    itemHeading.textContent = item.name;
    const itemDesc = document.createElement("p");
    itemDesc.textContent = item.desc;
    itemContainer.appendChild(itemHeading);
    itemContainer.appendChild(itemDesc);
    target.appendChild(itemContainer);
  });
}
