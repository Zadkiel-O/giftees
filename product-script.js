let listProduct = document.querySelector('.listProduct');

let cartList = [];

const initApp = () => {
  fetch('/json/main.json')
    .then(response => response.json())
    .then(data => {
      listProduct = data;
      console.log(listProduct)
    })

}

initApp();

document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("accordion"); //finds the class name accordion
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});


var btnContainer = document.getElementById("colorFilters");
var btns = btnContainer.getElementsByClassName("colorFilterButton");

function filterSelection(color) {
  var items = document.getElementsByClassName("card-item");
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(color)) {
      items[i].classList.toggle("hide");
    }
  }
}

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var icon = this.getElementsByClassName("box");
    if (this.classList.contains('active')) {
      icon[0].src = "/assets/unchecked.png";
    } else {
      icon[0].src = "/assets/checked.png";
    }
    this.classList.toggle('active');
  });

}

// Get the modal
var modal = document.getElementById("product-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayProduct(id) {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
  var imageSrc = listProduct[id].image;
  var name = listProduct[id].name;
  var description = listProduct[id].description;
  var rating = listProduct[id].rating;
  var price = listProduct[id].price;
  modal.innerHTML = `<div class='modal-content'>
      <img src="${imageSrc}">
      <div class='text-details'>
        <span class='close' onclick="closeModal()">&times;</span>
        <h2>${name}</h2>
        <p>${description}</p>
        <p>&#9733; ${rating}</p>
        <p class='price'>${price}</p>
        <div class='size-select'>
        <p>Select size:</p>
        <select id="size">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        </div>
        <button class="add-to-cart" onclick="addToCart(${id})">Add to Cart<img src="/assets/add-to-cart.png"></button>
        <button class="add-to-cart" onclick="window.open()">Customize</button>
      </div>
    </div>`

}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "visible";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }
}

var cart = document.getElementById("product-cart");
const element = document.getElementsByClassName("cart-item");

function addToCart(id) {
  console.log(id);
  var imageSrc = listProduct[id].image;
  console.log(imageSrc);
  var name = listProduct[id].name;
  var price = listProduct[id].price;
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.classList.add(id);

  var isDuplicate = false;

  for (var i = 0; i < element.length; i++) {
    if (element[i].classList.contains(id)) {
      var value = parseInt(this.document.getElementById('number').value, 10);
      value++;
      this.document.getElementById('number').value = value;
    }
  }

  if (!isDuplicate) {
    cartItem.innerHTML = `<img src="${imageSrc}">
          <div class="cart-details">
            <h2>${name}</h2>
            <p>${price}</p>
            <div class="quantity-subtotal">
              <div class="quantity">
                <button class="arithmetic" onclick="minus(${id})">-</button>
                <input type="text" id="number" value="1" readonly>
                <button class="arithmetic" onclick="plus(${id})">+</button>
              </div>
            </div>
          </div>
          <a href="javascript:void(0)" onclick="removeDiv(this)">&times;</a>`
    this.cart.appendChild(cartItem);
  }
  alert('Product added!')
}

function removeDiv(btn) {
  (((btn.parentNode).parentNode)).removeChild((btn.parentNode));
}

function minus(id) {
  for (var i = 0; i < element.length; i++) {
    if (element[i].classList.contains(id)) {
      if (this.document.getElementById('number').value != 1) {
        var value = parseInt(this.document.getElementById('number').value, 10);
        value--;
        this.document.getElementById('number').value = value;
      }
    }
  }
}

function plus(id) {
  for (var i = 0; i < element.length; i++) {
    if (element[i].classList.contains(id)) {
      var value = parseInt(this.document.getElementById('number').value, 10);
      value++;
      this.document.getElementById('number').value = value;
    }
  }
}

function checkout() {
  cart.replaceChildren();
  alert('Thank you for your purchase!')
}