console.log("coucou");

const buttons = document.querySelectorAll("button");
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


// function getPlayerChoice() {
//   return playerSelection;
// }

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  choices.sort(() => Math.random() -0.5);
  computerSelection = choices[0];
  return computerSelection;
}

function playRound(playerSelection) {
  // playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  let result;
  let scoreCount;
  if ((playerSelection == "rock" && computerSelection == "scissors")
  || (playerSelection == "scissors" && computerSelection == "paper")
  || (playerSelection == "paper" && computerSelection == "rock"))  {
      result = "You won!" + " " + playerSelection + " " + "beats" + " " + computerSelection + "!";
      playerScore++
      scoreCounter();
      if (playerScore == 5) {
        result = "You won. Do you want to play again?"
        disableButtons();
      }
    } else if (playerSelection == computerSelection){
      result = "Tie game!"
    } else {
      computerScore++
      result = "You lose, " + " " + computerSelection + " " + "beats" + " " + playerSelection + "!";
      scoreCounter();
    } if (computerScore == 5) {
      result = "You lose. Do you want to play again?"
      disableButtons();
    }
    console.log(result);
    roundResult.innerText = result;
    roundSection.appendChild(roundResult);
  }


  const roundContainer = document.querySelector(".round-container");
  const roundSection = document.createElement("div");
  const roundResult = document.createElement("h2");
  const counter = document.createElement("p");
  roundContainer.appendChild(roundSection);

  function scoreCounter() {
    scoreCount = "computer:" + " " + computerScore + " " + "pts" + " vs " + "player:" + " " + playerScore + " " + "pts"
    counter.innerText = scoreCount;
    roundSection.appendChild(counter);

  }

  // function game() {
  //   for (let i = 0; i < 100; i++) {
  //     let message = "";
  //     if (playerScore === 5) {
  //       message = "Congratulation player, you won this game!";
  //       break;
  //     } else if (computerScore === 5) {
  //       message = "Too bad, computer beat you!";
  //       break;
  //     } else if (computerScore < 5 || playerScore < 5) {
  //       playRound();
  //     }
  //   }
  // }


  buttons.forEach(button =>{
    button.addEventListener('click', function(){
      playRound(this.value);
    })
  })

  function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = !true;
        playerScore = 0;
        computerScore = 0;
    })
}
