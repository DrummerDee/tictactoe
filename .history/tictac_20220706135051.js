const block = document.querySelectorAll('.block');
const board = new Array(9).fill(null);
const again = document.getElementById("play");
let check;
const O = "O";
const X = "X";

let currentPlayer = "X";


// winner combinations //
let winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
// spaceClicked function //
const spaceClicked = (e) => {
    const id = e.target.id;

 //prevent the characters from switching//
if(!board[id]){ 
    board[id] = currentPlayer;
 e.target.innerText=currentPlayer;
 currentPlayer = currentPlayer === X ? O : X;
};
}
//smurf for clicked spaces//
block.forEach((block) => block.addEventListener("click",spaceClicked));

//play again smurf//
again.addEventListener('click',playAgain);


// function for youWin //
function youWin(){
    winnerCombos.forEach(function(combo){
     check = combo.every(i => block[i].innerText == currentPlayer)
        if(check){
            window.alert(currentPlayer + ' is the winner');
            playAgain();
        }else if (!check){

        }
    })
}
// function for tie //
function tiedGame(){
   if (!check){
alert ("It's a tie!!")
   }
}

// function for playAgain//
function playAgain(){
    currentPlayer = X;
    board.fill(null);
    block.forEach((block)=>{
        block.innerHTML = ""
    })
}

