let playerScore = 0;
let computerScore = 0;
let roundCount = 1;
let playerRoundScore = 0;
let computerRoundScore = 0;

let updateRoundCount = document.querySelector('.round-count');
let roundOverDisplay = document.querySelector('.round-over');
let updatePlayerRoundScore = document.querySelector('.player-round-score');
let updateComputerRoundScore = document.querySelector('.computer-round-score');
let updatePlayerScore = document.getElementById("player-score");
let updateComputerScore = document.getElementById("computer-score");
let updateMessage = document.getElementById("game-update-msg");
let gameFinalOutcome = document.getElementById("final-win-or-lose-msg");
let congratulationMsg = document.getElementById("congrats-betterluck-msg");
let updateFinalPlayerScore = document.getElementById("final-player-score");
let updateFinalComputerScore = document.getElementById("final-computer-score");
let continueGame = document.getElementById("game-update-msg-container");
let startGameAgain = document.getElementById("start-again-container");
let gamePlayButton = document.getElementById("game-play-btn-container");
let continuPlaying = document.getElementById("continue-btn");

function playGame(playerMove) {

  function pickRandomComputerMove(){

    let randomPick = ["rock", "paper", "scissors"];
    let figure = Math.floor(Math.random() * randomPick.length);
    return randomPick[figure];
  }
  let computerMove = pickRandomComputerMove();

  function hasPlayerWonRound(playerMove, computerMove) {
    return(
      playerMove === "rock" && computerMove === "scissors" || playerMove === "paper" && computerMove === "rock" ||
      playerMove === "scissors" && computerMove === "paper"); 

      // to return a boolean value.
  }

  function updateResults(playerMove, computerMove) {

  let comparedResult =
    hasPlayerWonRound(playerMove, computerMove) ? (playerScore++, updatePlayerScore.innerText = playerScore, updateMessage.innerHTML = `You picked <b>${playerMove}</b> and Computer picked <b>${computerMove}</b><br>
      <b>${playerMove}</b> beats <b>${computerMove}<b><br>
      You won this round!`, continueGame.style.display = "block", gamePlayButton.style.visibility ="hidden") : playerMove === computerMove ? (updateMessage.innerHTML = `Both chose <b>${playerMove}</b>,<br> That's a <b>Tie</b>.`, continueGame.style.display = "block", gamePlayButton.style.visibility ="hidden") : (computerScore++, updateComputerScore.innerText = computerScore, updateMessage.innerHTML = `You picked <b>${playerMove}</b> and Computer picked <b>${computerMove}</b><br>
        <b>${computerMove}</b> beats <b>${playerMove}</b><br>
        Computer won this round!`, continueGame.style.display = "block", gamePlayButton.style.visibility ="hidden")

        return comparedResult;
  };

  let result = updateResults(playerMove, computerMove);

  if (playerScore === 10 && computerScore < 10){
    roundOverDisplay.innerHTML = `<strong>Round ${roundCount} Over!</strong>`;
    playerRoundScore++;
    updatePlayerRoundScore.innerText = playerRoundScore;
    gameFinalOutcome.innerText = `You Won!`;
    gameFinalOutcome.style.color = "green";
    congratulationMsg.innerText = `Congratulations!`;
    updateFinalPlayerScore.innerText = playerScore;
    updateFinalComputerScore.innerText = computerScore;
    document.getElementById("game-reset-div").style.display = "block";
    
    document.getElementById("game-play-main-div").style.display = "none";
    startGameAgain.style.display = "none";

  } else if (playerScore < 10 && computerScore === 10) {
    roundOverDisplay.innerHTML = `<strong>Round ${roundCount} Over!</strong>`;
    computerRoundScore++;
    updateComputerRoundScore.innerText = computerRoundScore;
    gameFinalOutcome.innerText = `You Lose!`;
    gameFinalOutcome.style.color = "red";
    congratulationMsg.innerText = `Better luck next time.`;
    updateFinalPlayerScore.innerText = playerScore;
    updateFinalComputerScore.innerText = computerScore;
    document.getElementById("game-reset-div").style.display = "block";
    document.getElementById("game-play-main-div").style.display = "none";
    startGameAgain.style.display = "none";
  }
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;
  roundCount++;

  updateMessage.innerText = "";
  document.getElementById("game-reset-div").style.display = "none";
  document.getElementById("game-play-main-div").style.display = "block";
  updateRoundCount.innerText = roundCount;
  updateFinalPlayerScore.innerText = "0";
  updateFinalComputerScore.innerText = "0";
  updatePlayerScore.innerText = "0";
  updateComputerScore.innerText = "0";
  continueGame.style.display = "none";
  gamePlayButton.style.visibility ="visible";
  startGameAgain.style.display = "block";

}

function continueGameBtn(){
  continueGame.style.display = "none";
  gamePlayButton.style.visibility ="visible";
  gamePlayButton.style.display ="flex";
  
}

 function reStartGameAgain(){
  roundCount = 1;
  updateRoundCount.innerText = roundCount;
  updateComputerRoundScore.innerText = "0";
  updatePlayerRoundScore.innerText = "0";
  playerScore = 0;
  computerScore = 0;
  updateMessage.innerText = "";
  updateFinalPlayerScore.innerText = "0";
  updateFinalComputerScore.innerText = "0";
  updatePlayerScore.innerText = "0";
  updateComputerScore.innerText = "0";
  gamePlayButton.style.visibility ="visible";
  continueGame.style.display = "none";
  alert("Game has been reset");
} 


