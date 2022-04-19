let values = ["rock", "paper", "scissors"];

if(window.confirm("Do you want to play a game?")) { game()};

function game (){
    let winFactor = 0;
    for (let i = 0; i < 5; i++) {
        let userInput = prompt("Do you choose 'rock', 'paper', or 'scissors'?");
        console.log(`Round ${i + 1}:`);
        console.log(winFactor += (recaseInputandPlay(userInput)));
        if(i == 4) {
            if(winFactor == 0) {
                alert("Tied with computer");
                console.log("Tied with computer");
            }
            else if(winFactor > 0) {
                alert("You win!")
                console.log("Player wins!");       
            }
            else if (winFactor < 0) {
                alert("Computer wins!");
                console.log("Computer wins!")
            }
        }
    } 
}

function recaseInputandPlay(userInput) {
    let recasedInput = userInput.toLowerCase();

    if (recasedInput == "rock" || recasedInput == "paper" || recasedInput == "scissors") {
        let computerSelection = computerPlay();
        let playerSelection = recasedInput;
        alert(`Computer has chosen: ${computerSelection}`);
        return playRound(playerSelection, computerSelection);
    }
    else {
        alert("Invalid input");
    }
}

function computerPlay () {
    let choice = values [Math.floor(Math.random() * values.length)]
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {

        console.log("Tied!")
        return 0;
    }
    else if(playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock")
        return (-1);
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors");
        return 1;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper");
        return (-1);
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock");
        return 1;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors");
        return (-1);
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You win! Scissors beats paper");
        return 1;
    }
}