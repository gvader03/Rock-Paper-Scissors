let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection){
    let result = ""
   if (playerSelection == computerSelection)  {
       result = "It's a tie game!"
   } 
   else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
       result = "You win! " + playerSelection + " beats " + computerSelection + "!";
       playerScore++
   }
   else {
       result = "You lose, " + computerSelection + " beats " + playerSelection + "!";
       computerScore++
   }
   return result + " Your score is " + playerScore + "." + " Computer score is " + computerScore + "."
}

function gamePlay() {
    while (playerScore <= 5 && computerScore <= 5){
        let playerSelection=prompt('Rock, paper, scissors?').toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        return "Nice job! You win!";
    }
    else {
        return "Too bad. You lose!";
    }
    
}




