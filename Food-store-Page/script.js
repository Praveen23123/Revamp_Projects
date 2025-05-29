var menu = document.getElementById("menu");
var cross = document.getElementById("cross");
var nav_list = document.getElementById("nav-list");

menu.addEventListener("click", () => {
  cross.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  nav_list.classList.toggle("hidden");
});

cross.addEventListener("click", () => {
  cross.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  nav_list.classList.toggle("block");
});
