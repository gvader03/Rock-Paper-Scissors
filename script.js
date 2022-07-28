///computer selection - mathfloor - done
///player selection - event listener - done
///play round - onclick, (playerselection) - done
///player score - dom manipulation - done
////computer score - dom manipulation - done
///round over - playerscore || computer score == 5 - done
///reset - reset player score and comp score to 0 - done


let round = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = '';
const btn = document.querySelectorAll('.btn');
const resets = document.getElementById('resets');

function compimg(computerSelection) {
    if (computerSelection == "star"){
        document.getElementById("logo").src = "star.jpg";
    }
    else if (computerSelection == "falcon") {
        document.getElementById("logo").src = "falcon.jpg";
    }
    else {
        document.getElementById("logo").src = "yoda.jpg";
    }
}

function restart(){
    round = 0;
    playerScore = 0;
    computerScore = 0;
    playerSelection = "";
    document.getElementById('result').innerHTML = "Only you have the power to defeat the dark side";
    document.getElementById('computer').innerHTML = 0;
    document.getElementById('player').innerHTML = 0;
    document.getElementById('round').innerHTML = 0;
    document.getElementById("player").style.color = "white";
    document.getElementById("computer").style.color = "white";
    document.getElementById("result").style.color = "white";
    document.getElementById("logo").src = "empire.png";
    document.getElementById("resets").style.visibility = "hidden";
    document.getElementById("end-text").style.visibility = "hidden";
    document.getElementById('end-text').innerHTML = "END GAME HIDDEN TEXT";

    btn.forEach((button) => {
        button.disabled = false;
      })
}

function disabled(){
    btn.forEach((button) => {
        button.disabled = true
      })
    }


function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "star";
    }
    else if (randomNumber == 1) {
        return "falcon";
    }
    else {
        return "force"
    }
}

function playerCap(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  }

  function compCap(computerSelection) {
    return computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  }


function playRound(playerSelection){ 
    let result = "";
    let computerSelection = computerPlay();
   if (playerSelection == computerSelection)  {
       result = "Tie, you did!"
       round++;
   } 
   else if (playerSelection == 'star' && computerSelection == 'force' || playerSelection == 'falcon' && computerSelection == 'star' || playerSelection == 'force' && computerSelection == 'falcon') {
       result = "Most impressive! " + playerCap(playerSelection) + " beats " + compCap(computerSelection) + "!";
       playerScore++
       round++
       
       if (playerScore == 5){
            disabled();
            document.getElementById("player").style.color = "green";
            document.getElementById("computer").style.color = "red";
            document.getElementById("result").style.color = "green"; 
            document.getElementById('end-text').innerHTML = "The Force is strong with this one. You win " + playerScore + " to " + computerScore + "!"
            document.getElementById("resets").style.visibility = "visible";
            document.getElementById("end-text").style.visibility = "visible";
       }
   }
   else {
       result = "You lose, " + compCap(computerSelection) + " beats " + playerCap(playerSelection) + "!";
       computerScore++
       round++
       
       if (computerScore == 5){
        disabled();
        document.getElementById("computer").style.color = "green";
        document.getElementById("player").style.color = "red";
        document.getElementById("result").style.color = "red";  
        document.getElementById('end-text').innerHTML = "Train, you must. You lost " + computerScore + " to " + playerScore + "."
        document.getElementById("resets").style.visibility = "visible";
        document.getElementById("end-text").style.visibility = "visible";

   }
   }
   document.getElementById('result').innerHTML = result;
   document.getElementById('computer').innerHTML = computerScore;
   document.getElementById('player').innerHTML = playerScore;
   document.getElementById('round').innerHTML = round;
   compimg(computerSelection);
   return;
}

btn.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
    })
  });

resets.addEventListener("click", restart)

/*function gamePlay() {
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
    
}*/




