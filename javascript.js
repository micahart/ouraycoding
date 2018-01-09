var miaElement = document.getElementById("mia");

function moreAwesomer() {
  miaElement.innerHTML += "Awesome";
}

miaElement.addEventListener("click", moreAwesomer);

var eiaElement = document.getElementById("eia");

function moreAwesomer2() {
  eiaElement.innerHTML += "Awesome";
}

eiaElement.addEventListener("click", moreAwesomer2);

var tableToHide = document.getElementById("hea");
var hideButton = document.getElementById("hide");

function hideIt() {
  tableToHide.style.visibility = "hidden";
}

hideButton.addEventListener("click", hideIt);

var tableToShow = document.getElementById("hea");
var showButton = document.getElementById("show");

function showIt() {
  tableToShow.style.visibility = "visible";
}

showButton.addEventListener("click", showIt);

var screen = document.getElementById("screen");

function updateScreen(num) {
  screen.innerHTML += num;
}

var buttons = document.getElementsByClassName("digit");
for (var i = 0; i < buttons.length; i = i + 1) {
  var button = buttons[i];
  button.addEventListener("click", function() {
    updateScreen(this.innerHTML);
  })
}

var firstNumber;
var operation;

function add(a, b){
  return a+b;
}

function sub(a, b){
  return a-b;
}

function times(a, b){
  return a*b;
}

function divide(a, b){
  return a/b;
}

document.getElementById("plus").addEventListener("click", function() {
  firstNumber = screen.innerHTML;
  screen.innerHTML = '';
  operation = add;
});

document.getElementById("minus").addEventListener("click", function() {
  firstNumber = screen.innerHTML;
  screen.innerHTML = '';
  operation = sub;
});

document.getElementById("times").addEventListener("click", function() {
  firstNumber = screen.innerHTML;
  screen.innerHTML = '';
  operation = times;
});

document.getElementById("divide").addEventListener("click", function() {
  firstNumber = screen.innerHTML;
  screen.innerHTML = '';
  operation = divide;
});

document.getElementById("equals").addEventListener("click", function() {
  var a = parseInt(firstNumber);
  var b = parseInt(screen.innerHTML);
  var result = operation(a, b);
  screen.innerHTML = result;
});
