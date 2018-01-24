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


  // buttons is an array: [button1, button2, button3, button4, ...]
  // arrays can also just hold integers: [0, 456, 123, ...]
  // buttons[0] => button1
  // buttons[1] => button2
  // ...

  // var button = buttons[i] // ,<- this code assigns the button at index i to the "button" variable.

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


var divtoshow = document.getElementById("x");

function showX() {
  divtoshow.innerHTML = "x";
}

divtoshow.addEventListener("click", function () {
    divtoshow.innerHTML = "x";
})



var tics = document.getElementsByClassName("tic")

function checkIfWon(){
  console.log('cat')
}

for (var i = 0; i < tics.length; i = i + 1) {
  var tic = tics[i];
  tic.addEventListener("click", function() {
    clickNumber = clickNumber + 1;

// 0 % 2 = 0
// 1 % 2 = 1
// 2 % 2 = 0
// 3 % 2 = 1
// 4 % 2 = 0

    // var grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    // var grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // to access 1, you would do grid[0][0]
    // to access 8, you would do grid[2][1]
    // to access 9, you would do grid[2][2]

   var grid = [
     ['', '', ''],
     ['', '', ''],
     ['', '', '']
   ];

   if (this.innerHTML != '') {
      console.log(this.innerHTML);
      return;
    }

    // click logic
    if (clickNumber % 2 === 1) {
      // click number is odd
      this.innerHTML = 'O';
    } else {
      // click number is even
      this.innerHTML = 'X';
    }

    checkIfWon()

  });
}

var clickNumber = 0;
