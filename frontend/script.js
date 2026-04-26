/* infos pour le rolex */
let productName1 = "Rolex Submariner";
let productPrice1 = 8500;
let productAvailability1 = false;
let productImage1 = "./images/watch-1.png";

/* infos pour le tissot */
let productName2 = "Tissot PRX";
let productPrice2 = 450;
let productAvailability2 = true;
let productImage2 = "./images/watch-2.png";

/* infos pour le seiko */
let productName3 = "Seiko Prospex";
let productPrice3 = 1200;
let productAvailability3 = true;
let productImage3 = "./images/watch-3.png";

function showRolex() {
  if (productAvailability1) {
    document.getElementById("product-status").textContent = "Disponible";
  } else {
    document.getElementById("product-status").textContent = "Rupture de stock";
  }

  document.getElementById("product-name").textContent = productName1;
  document.getElementById("product-price").textContent =
    "Prix : " + productPrice1 + " TND";
}

function showTissot() {
  if (productAvailability2) {
    document.getElementById("product-status").textContent = "Disponible";
  } else {
    document.getElementById("product-status").textContent = "Rupture de stock";
  }

  document.getElementById("product-name").textContent = productName2;
  document.getElementById("product-price").textContent =
    "Prix : " + productPrice2 + " TND";
}

function showSeiko() {
  if (productAvailability3) {
    document.getElementById("product-status").textContent = "Disponible";
  } else {
    document.getElementById("product-status").textContent = "Rupture de stock";
  }

  document.getElementById("product-name").textContent = productName3;
  document.getElementById("product-price").textContent =
    "Prix : " + productPrice3 + " TND";
}

showTissot();
