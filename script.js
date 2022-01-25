function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return("ROCK");
        case 1:
            return("SCISSORS");
        case 2:
            return("PAPER");
    }
}

function getPlayerSelection() {
    let playerSelection;
    while (playerSelection !== "ROCK" &&
           playerSelection !== "SCISSORS" &&
           playerSelection !== "PAPER") {
        playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toUpperCase();
        playerSelection = playerSelection.trim();
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "ROCK") {
                return ("Tie game!");
            } else if (computerSelection === "SCISSORS") {
                return ("You win! Rock beats scissors!");
            } else {
                return ("You lose! Rock loses to paper!");
            }
        case "SCISSORS":
            if (computerSelection === "ROCK") {
                return ("You lose! Scissors loses to rock!");
            } else if (computerSelection === "SCISSORS") {
                return ("Tie game!");
            } else {
                return ("You win! Scissors beats paper!");
            }
        case "PAPER":
            if (computerSelection === "ROCK") {
                return ("You win! Paper beats rock!");
            } else if (computerSelection === "SCISSORS") {
                return ("You lose! Paper loses to scissors!");
            } else {
                return ("You tie!");
            }
    }
}

function game() {
    const playerSelection = getPlayerSelection();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i < 5; i++) {
    game();
}