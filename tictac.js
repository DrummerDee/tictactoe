let board;
//let player1 = "O";
//et player2 = "X";
let currentPlayer = "X";
let gameOver = false;
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
]

let block = document.querySelectorAll('.block')
// convert node list to array //
block = Array.from(block)

// click event for block //
block.forEach(function(block){
    block.addEventListener('click', function(){
        if(block.innerText.trim() != "") return 
        block.innerText= currentPlayer
        youWin()
        //code to where the player alternates//
        currentPlayer = currentPlayer == "X" ? "O" : "X" 
    })
})

//check for winner //
function youWin(){
    //loop for all winning combos//
    winnerCombos.forEach(function(combo){
        let check = combo.every(i => block[i].innerText.trim() == currentPlayer)
        if(check){
            alert(currentPlayer + ' is the winner')
        }
    }) 
   }
   // check to see if there is a tie //



   //function for when I want to mark through the x and/or os//
//function hightlightBlock(combo){
    //combo.forEach(function(i){
       // block(i).classList.add("highlight")
    //}
//}

