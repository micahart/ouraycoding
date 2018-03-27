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

var grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];



var allWinningCoordinates = [
    [[0,0],[1,0],[2,0]], //left column
    [[0,1],[1,1],[2,1]], //middle column
    [[0,2],[1,2],[2,2]], //right column
    [[0,0],[0,1],[0,2]], // top row
    [[1,0],[1,1],[1,2]], //middle row
    [[2,0],[2,1],[2,2]], //bottom row
    [[0,0],[1,1],[2,2]], //diagonal down to right
    [[0,2],[1,1],[2,0]]  //diagonal up to right
];

function checkIfWon(move) {

    var winningCoordinates = null; // <-- start with no winning coordinates

    // loop over all possible wins
    for (var i = 0; i < allWinningCoordinates.length; i = i + 1) {
      var aWin = allWinningCoordinates[i]; //<-- single possible win to check
      var wonThisWin = true; //<--assume they won this way until we see otherwise

      // loop over all coordinates needed for the win to check
      for (var j = 0; j < aWin.length; j = j + 1) {
        var cooridinate = aWin[j]; //<-- coordinates to check

        var rowToCheck = cooridinate[0];
        var colToCheck = cooridinate[1];

        var gridValue = grid[rowToCheck][colToCheck];

        console.log('rowToCheck', rowToCheck, 'colToCheck', colToCheck, 'gridValue', gridValue);

        //check if grid at the coordinates DOES NOT contain move
        if (gridValue !== move) {
          // current turn doesn't have a move in that grid space needed for this win, so they did not win
          wonThisWin = false;
        }
      }

      // after checking all coordinates, if wonThisWin was never set to false,
      // then they have won the game
      if (wonThisWin === true) {
          winningCoordinates = aWin;
      }

    }

    return winningCoordinates;
};

var clickNumber = 0;
var gameOver = false;

for (var i = 0; i < tics.length; i = i + 1) {

  var tic = tics[i];
  tic.addEventListener("click", function() {

    if (gameOver === true) {
      //no more moves allowed
      return; //<--exits the function; no move code executed
    }

    // when someone clicks a tic:
    //   find out the address in "grid" for that tic
    //   modify the value of that address in "grid" (or not, if invalid move)
    //   set the innerHtml of tic to that value

    // var grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    // 1:[0][0] (1-1)%3 = 0
    // 2:[0][1]
    // 3:[0][2]
    // 4:[1][0]
    // 6:[1][2]
    // 7:[2][0]  (7-1)%3 = 0
    // 8:[2][1] 8%3 = 1
    // 9:[2][2]  9%3 = 2

    // given id, find the address
    // 1 % 3 = 1
    // 2 % 3 = 2
    // 3 % 3 = 0
    // 4 % 3 = 1
    // 5 % 3 = 2
    // 6 % 3 = 0
    // 7 % 3 = 1
    // 8 % 3 = 2
    // 9 % 3 = 0
    // it gives you the remander

    var id = this.id
    var spotNumber =   parseInt(id);
    console.log('id'+ id, 'spotNumber '+spotNumber);

    // ID TO ROW
    // 1,2,3 => 0
    // 4,5,6 => 1
    // 7,8,9 => 2

    // ID TO COLUMN
    // 1,4,7 => 0
    // 2,5,8 => 1
    // 3,6,9 => 2

    var row = Math.floor((spotNumber-1) / 3); //Note: Math.floor() rounds down
    var col = Math.floor((spotNumber+2) % 3 );

    console.log('id',id,'is row',row,'col',col);
    console.log('new grid:',grid);

    if (grid[row][col] === '') {
        //we can move

        var move = '';

        if (clickNumber % 2 === 1) {
          // click number is odd
          move = 'O';
        } else {
          // click number is even
          move = 'X';
        }

        grid[row][col] = move;
        this.innerHTML = move;

        clickNumber = clickNumber + 1;

        var winningCoordinates = checkIfWon(move);
        var isGameWon = winningCoordinates !== null;
        console.log('Did '+move+' win the game? '+(isGameWon));
        //TODO: something more exciting if somebody wins

        if (isGameWon === true){

         gameOver = true;

          winningCoordinates.forEach( function (coordinates) {
             var row = coordinates[0];
             var column = coordinates[1];

            //0,0 -> 0
            //1,0 -> 3
            //2,2 -> 8

            var ticIndex = row * 3 + column;

            var winningTic = tics[ticIndex];

            winningTic.style.backgroundColor = 'green';

          });



        }

      }

  });
}
