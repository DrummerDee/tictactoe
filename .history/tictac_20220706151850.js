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

// you win function //
if( youWin()){
    return gameOver();
}
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
    document.getElementById('declare').innerText = ''
     check = combo.every(i => block[i].innerText == currentPlayer)
     let test = true;
     for(let i = 0 ; i < 9;i++){
        if(block[i].innerText == ''){
            test = false
        }
     }
        if(check){
            block.forEach((block) => block.removeEventListener('click',spacedClicked))
            document.getElementById('declare').innerText = (`${currentPlayer} is the winner`)   
            playAgain() 
        }else if (test){
            document.getElementById('declare').innerText = (`It's a tie`)   
            playAgain()  
        }
    })
}



// function for playAgain//
function playAgain(){
    currentPlayer = X;
    board.fill(null);
    block.forEach((block)=>{
        block.innerHTML = ""
    })
}

