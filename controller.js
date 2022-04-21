const values = ["rock", "paper", "scissors"];
const startBtn = document.querySelector(".start.show");
const choiceButtons = document.querySelector(".play.hide");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const scoreTracker = document.querySelector(".score-tracker.hide");
const endBtn = document.querySelector(".end.hide");
const playerScoreDisplay = document.querySelector(".p-score");
const compScoreDisplay = document.querySelector(".c-score");
const computerChoiceDisplay = document.querySelector(".selections")
const winnerText = document.querySelector(".match-winner")
let playerScore = 0;
let computerScore = 0;

function startGame () {   
    startBtn.className = "start hide";
    scoreTracker.className = "score-tracker show";
    endBtn.className = "end show";
    choiceButtons.className = "play show";
}

function Play(playerSelection) {
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors") {
        let computerSelection = computerPlay();
        computerChoiceDisplay.textContent = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} 
            vs ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}`;
        return playRound(playerSelection, computerSelection);
    }
    else {
        alert("Invalid input");
    }
}

function computerPlay () {
    let compDecision = values [Math.floor(Math.random() * values.length)]
    return compDecision;
}

function playRound(playerSelection, computerSelection) {  
        if(playerSelection == computerSelection) {
            winnerText.textContent = "Tied";
        }
        else if(playerSelection == "rock" && computerSelection == "paper") {
            compScoreDisplay.textContent = (computerScore += 1).toString();
            winnerText.textContent = "Computer wins!";
        }
        else if (playerSelection == "rock" && computerSelection == "scissors") { 
            playerScoreDisplay.textContent = (playerScore += 1).toString();
            winnerText.textContent = "You win!";
        }
        else if (playerSelection == "paper" && computerSelection == "scissors") {
            compScoreDisplay.textContent = (computerScore += 1).toString();
            winnerText.textContent = "Computer wins!";
        }
        else if (playerSelection == "paper" && computerSelection == "rock") {
            playerScoreDisplay.textContent = (playerScore += 1).toString();
            winnerText.textContent = "You win!";
        }
        else if (playerSelection == "scissors" && computerSelection == "rock") {
            compScoreDisplay.textContent = (computerScore += 1).toString();
            winnerText.textContent = "Computer wins!";
        }
        else if(playerSelection == "scissors" && computerSelection == "paper"){
            playerScoreDisplay.textContent = (playerScore += 1).toString();
            winnerText.textContent = "You win!";
        }
        checkForWinner();
}

function checkForWinner() {
    if(playerScore == 5) {
        winnerText.textContent = "";
        choiceButtons.className = "play hide";
        computerChoiceDisplay.textContent = "Player Wins!";
    }
    else if(computerScore == 5) {
        winnerText.textContent = "";
        choiceButtons.className = "play hide";
        computerChoiceDisplay.textContent = "Computer Wins!";
    }
}

function endGame () {
    playerScore = 0;
    computerScore = 0;
    startBtn.className = "start show";
    scoreTracker.className = "score-tracker hide";
    endBtn.className = "end hide";
    compScoreDisplay.textContent = (computerScore).toString();
    playerScoreDisplay.textContent = (playerScore).toString();
    winnerText.textContent = "";
    computerChoiceDisplay.textContent = "vs";
    choiceButtons.className = "play hide";
}

startBtn.addEventListener('click', () => { startGame() });
rockBtn.addEventListener('click', () => { Play("rock") });
paperBtn.addEventListener('click', () => { Play("paper") });
scissorsBtn.addEventListener('click', () => { Play("scissors") });
endBtn.addEventListener('click', () => { endGame() });
