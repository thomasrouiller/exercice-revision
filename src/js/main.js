var button = document.querySelector(".pink-square");
var button2 = document.querySelector(".trigger-all");

var changeColor = function () {
  button.classList.toggle("is-active");
};

var changeBoxesColors = function () {};

button.addEventListener("click", changeColor);
button2.addEventListener("click", changeBoxesColors);
