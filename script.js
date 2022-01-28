function getComputerSelection() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return("rock");
        case 1:
            return("scissors");
        case 2:
            return("paper");
    }
}

function getRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "player";
        } else if (computerSelection === "paper") {
            return "computer";
        } else {
            return null;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "player";
        } else if (computerSelection === "rock") {
            return "computer";
        } else {
            return null;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "player";
        } else if (computerSelection === "scissors") {
            return "computer";
        } else {
            return null;
        }
    }
}

function displayChoices(playerSelection, computerSelection) {
    const choiceDiv = document.querySelector('#choices-div');
    const playerChoice = document.querySelector('#player-choice');
    const pcChoice = document.querySelector('#pc-choice');
    choiceDiv.classList.add('choices');
    playerChoice.textContent = `Player chose ${playerSelection}!`;
    pcChoice.textContent = `Computer chose ${computerSelection}!`;
}

function getRoundWinnerElement(winner) {
    if (winner === 'player') {
        return document.querySelector('#player-score');
    }
    else if (winner === 'computer') {
        return document.querySelector('#computer-score');
    }
}

function updateScores(winnerElement) {
    score = parseInt(winnerElement.textContent);
    score += 1;
    winnerElement.textContent = score;
}

function checkForWinner(winnerElement) {
    score = parseInt(winnerElement.textContent);
    return score === 5 ? true : false;
}

function displayWinner(winner) {
    const winnerText = document.querySelector('#winner-text');
    if (winner === 'player') {
        winnerText.textContent = 'Player wins!';
    } else {
        winnerText.textContent = 'Computer wins!';
    }
}

function stopGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.removeEventListener('click', playRound);
    });
}

function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerSelection();
    displayChoices(playerSelection, computerSelection);

    const roundWinner = getRoundWinner(playerSelection, computerSelection);
    if (roundWinner) {
        const roundWinnerElement = getRoundWinnerElement(roundWinner);
        updateScores(roundWinnerElement);
        if (checkForWinner(roundWinnerElement)) {
            displayWinner(roundWinner);
            stopGame();
        }
    }
}

function startGame() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', playRound);
    });
}

startGame();