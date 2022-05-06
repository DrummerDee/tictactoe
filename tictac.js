const statusOfGame = document.querySelector('.game--stat');
const block = document.querySelectorAll('.block')
const board = new Array(9).fill(null)
let currentPlayer = "X";
let gameOn = true;

const winText = () => `Player ${currentPlayer} has won!`;
const tieText = () => 'Its a tie!! Try Again?'
const currentPlayerTurn = () => ` It's ${currentPlayer}'s turn` 

statusOfGame.innerHTML = currentPlayerTurn();

//winner combos //
let winnerCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [6,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

//convert node list to array//
//block = Array.from(block)

let i= 0;
while (!check){
//click boxes, switch player//
const spaceClicked = (e) => {
    const id = e.target.id;
e.target.innerText = currentPlayer;

currentPlayer = (currentPlayer === X) ? O : X;
};
// smurf for clicked space //
//block.forEach(block) => block.addEventListener('click',spaceClicked)
block.forEach(function(block){
    block.addEventListener('click', function(){
        if(block.innerText.trim() != "") return 
        block.innerText= currentPlayer
        youWin()
        //code to where the player alternates//
        currentPlayer = currentPlayer == "X" ? "O" : "X" 
    })
})

//smurf for winner //
function youWin(){
    winnerCombos.forEach(function(combo){
        let check = combo.every(i => block[i].innerText.trim() == currentPlayer)
        if(check){
            alert(currentPlayer + ' is the winner')
        }
    }