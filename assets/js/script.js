// menu-icon transition effect

// function myFunction(x) {
//   x.classList.toggle("change");
// }

let menuButton = document.getElementById("menu-icon");
let links = document.getElementsByClassName('nav-link');
let menu = document.getElementById("hidden-menu");

// hidden-menu display change

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// hidden-menu after any nav-link is clicked

for (const link of links) {
  link.addEventListener('click', function onClick() {
    menu.style.display = "none";
  });
}

// // hidden-menu after single nav-link is clicked

// menuItem[0].addEventListener('click', function onClick() {
//   if (menu.style.display === "block") {
//     menu.style.display = "none";
//   }
// });






