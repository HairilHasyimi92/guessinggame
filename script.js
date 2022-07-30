let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}




function compareGuesses(humanGuess, computerGuess, targetGuess){
    let userComp = Math.abs(humanGuess - targetGuess);
    let compComp = Math.abs(computerGuess - targetGuess);
    
    return userComp <= compComp;

}

//console.log(targetNum());

//console.log(compareGuesses(8, 9, 9));

function updateScore(winner){
    if(winner === 'human'){
        humanScore++;
    }else if(winner === 'computer'){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}

