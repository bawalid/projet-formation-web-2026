let productName = "Tissot PRX Powermatic 80";
let productPrice = 8500;
let productAvailability = false;

function displayProduct() {
  let status = "";
  if (productAvailability) {
    status = "Disponible";
  } else {
    status = "Indisponible";
  }

  document.getElementById("product-name").textContent = productName;
  document.getElementById("product-price").textContent =
    "Prix : " + productPrice + " TND";
  document.getElementById("product-status").textContent = status;
}

displayProduct();
