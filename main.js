let btn;
let textDiv;
document.addEventListener("DOMContentLoaded", function () {
  btn = document.getElementById("btn");
  textDiv = document.getElementById("text");
  btn.addEventListener("click", function () {
    textDiv.innerText = "My text has changed!";
    textDiv.style.color = "blue";
  });
});
