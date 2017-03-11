var PLAYER1 = "X";
var PLAYER2 = "O";
var currentTurn = PLAYER1;

var board = document.querySelector('#gameBoard');

board.addEventListener('click', function(e){
	e.target.innerHTML = currentTurn;
	currentTurn = currentTurn === PLAYER1 ? PLAYER2 : PLAYER1;

})