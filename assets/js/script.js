// menu-icon open and close function

function myFunction(x) {
  x.classList.toggle("change");
}var menuButton = document.getElementById("menu-icon");

// hidden-menu display function

var menu = document.getElementById("hidden-menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

