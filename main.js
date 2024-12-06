
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


function getComputerChoice(){

  let choice = Math.ceil(Math.random() * 3); 
  switch (choice){
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "An error has occured";
  }

}

function getHumanChoice(){
  return prompt("Enter Rock, Paper or Scissors");
}

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase();
  let result = "";

  // human rock vs computer rock
  if (humanChoice == "rock" && computerChoice == "rock"){
    result = "Draw! rock can't beat itself.";
    return result;
  }

  // human rock vs computer paper
  if (humanChoice == "rock" && computerChoice == "paper"){
    result = "You lose! rock loses to paper";
    computerScore++;
    return result;
  }

  // human rock vs computer scissors
  if (humanChoice == "rock" && computerChoice == "scissors"){
    result = "You win! rock beats scissors.";
    humanScore++;
    return result;
  }

  // human paper vs computer rock
  if (humanChoice == "paper" && computerChoice == "rock"){
    result = "You win! paper beats rock.";
    humanScore++;
    return result;
  }

  // human paper vs computer paper
  if (humanChoice == "paper" && computerChoice == "paper"){
    result = "Draw! paper can't beat itself.";
    return result;
  }

  // human paper vs computer scissors
  if (humanChoice == "paper" && computerChoice == "scissors"){
    result = "You lose! paper loses to scissors.";
    computerScore++;
    return result;
  }

  // human scissors vs computer rock
  if (humanChoice == "scissors" && computerChoice == "rock"){
    result = "You lose! scissors loses to rock.";
    computerScore++;
    return result;
  }

  // human scissors vs computer paper
  if (humanChoice == "scissors" && computerChoice == "paper"){
    result = "You win! scissors beats paper.";
    humanScore++;
    return result;
  }

  // human scissors vs computer scissors
  if (humanChoice == "scissors" && computerChoice == "scissors"){
    result = "Draw! Scissors can't beat itself";
    return result;
  }
}

/* 
  this event handler is placed on the button container, event bubbling is used to
  get the actual button that was clicked inside this container. This listener also
  actually handles the events of the whole game.
*/
function initEventListener(){

  let buttonContainer = document.querySelector(".buttonChoicesContainer");
  let humanScoreElement = document.querySelector("#humanScore");
  let computerScoreElement = document.querySelector("#computerScore");
  let choices = document.querySelector(".choices");
  let result = document.querySelector(".result");

  let computerChoice = "";
  buttonContainer.addEventListener("click", (e) =>{
    roundsPlayed++;
    if(e.target.id == "rock"){
      computerChoice = getComputerChoice();
      choices.textContent = `rock vs. ${computerChoice}`;
      result.textContent = playRound("rock", computerChoice);
    }
    else if(e.target.id == "paper"){
      computerChoice = getComputerChoice();
      choices.textContent = `paper vs. ${computerChoice}`;
      result.textContent = playRound("paper", computerChoice);
    }
    else if(e.target.id == "scissors"){
      computerChoice = getComputerChoice();
      choices.textContent = `scissors vs. ${computerChoice}`;
      result.textContent = playRound("scissors", computerChoice);
    }

    humanScoreElement.textContent =`Score: ${humanScore}`;
    computerScoreElement.textContent =`Score: ${computerScore}`;

    if(humanScore == 5){
      result.textContent = "Human is victorius!";
    }
    else if(computerScore == 5){
      result.textContent = "Computer is victorius!";
    }
  });

}

initEventListener();