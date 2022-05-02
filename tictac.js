// create player one & two objects//
function MakePlayer(playerName,playerMarker){
    this.name = playerName
    this.marker = playerMarker
}

let playerOne = new MakePlayer ('PlayerOne','x')
let playerTwo = new MakePlayer ('PlayerTwo','o')

const wins =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
    [3,5,9],

]
// on click for boxes//

// loop needed//
let i = 0;
while ( i <= 9){
    console.log(i);
i++;
} 