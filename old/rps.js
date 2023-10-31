const choices = ["rock", "paper", "scissors"];
let computerSelection;
let playerSelection;
let roundWinner = ["player", "computer"];
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    console.log("coucou");
    // this.value = playerSelection;
    console.log(this.value);
  })
  playRound(playerSelection, computerSelection);
})

function getComputerChoice(choices) {
  choices.sort(() => Math.random() -0.5);
  computerSelection = choices[0];
  return computerSelection
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors")
    || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "rock"))  {
        result = "You won!";
        playerScore++
      } else if (playerSelection == computerSelection){
        result = "Tie game!"
      } else {
        computerScore++
        result = "You lose";
      };
      console.log(result);
    }
    const resultBox = document.querySelector("#result-container");
    const results = document.createElement("p");

    function game(playRound) {
      for (let i = 0; i < 100; i++) {
        // playerSelection = prompt("What's your selection?", "Rock").toLowerCase();
        if (playerScore === 5 || computerScore === 5) {
          results.innerText = "That game is over!"
          resultBox.appendChild(results);
        } else {
          console.log("player selection:", playerSelection);
          computerSelection = getComputerChoice(choices);
          console.log("computer selection:", computerSelection);
          playRound(playerSelection, computerSelection);
          console.log("player score: ", playerScore);
          console.log("computer score: ", computerScore);
        }
        winnerAnnoucement(playerScore, computerScore)
      }
  }

  function winnerAnnoucement(playerScore, computerScore) {
    let endMessage;
    if (playerScore > computerScore) {
      endMessage = "Player won this game!";
    } else {
      endMessage = "Computer beat you looser";
    }
    console.log(endMessage);
    results.innerText = endMessage;
    resultBox.appendChild(results)
  }

  game(playRound)
