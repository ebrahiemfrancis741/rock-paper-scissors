
let humanScore = 0;
let computerScore = 0;

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
    console.log(result);
    return result;
  }

  // human rock vs computer paper
  if (humanChoice == "rock" && computerChoice == "paper"){
    result = "You lose! rock loses to paper";
    console.log(result);
    computerScore++;
    return result;
  }

  // human rock vs computer scissors
  if (humanChoice == "rock" && computerChoice == "scissors"){
    result = "You win! rock beats paper.";
    console.log(result);
    humanScore++;
    return result;
  }

  // human paper vs computer rock
  if (humanChoice == "paper" && computerChoice == "rock"){
    result = "You win! paper beats rock.";
    console.log(result);
    humanScore++;
    return result;
  }

  // human paper vs computer paper
  if (humanChoice == "paper" && computerChoice == "paper"){
    result = "Draw! paper can't beat itself.";
    console.log(result);
    return result;
  }

  // human paper vs computer scissors
  if (humanChoice == "paper" && computerChoice == "scissors"){
    result = "You lose! paper loses to scissors.";
    console.log(result);
    computerScore++;
    return result;
  }

  // human scissors vs computer rock
  if (humanChoice == "scissors" && computerChoice == "rock"){
    result = "You lose! scissors loses to rock.";
    console.log(result);
    computerScore++;
    return result;
  }

  // human scissors vs computer paper
  if (humanChoice == "scissors" && computerChoice == "paper"){
    result = "You win! scissors beats paper.";
    console.log(result);
    humanScore++;
    return result;
  }

  // human scissors vs computer scissors
  if (humanChoice == "scissors" && computerChoice == "scissors"){
    result = "Draw! Scissors can't beat itself";
    console.log(result);
    return result;
  }
}