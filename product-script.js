document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion"); //finds the class name accordion
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
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

function filterSelection (color) {
  var items = document.getElementsByClassName("card-item");
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(color)) {
      items[i].classList.toggle("hide");
    } 
  }
}


for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
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

// Get the button that opens the modal
var btn = document.getElementById("pocket-black");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}