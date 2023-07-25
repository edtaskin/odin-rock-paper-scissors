const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const WINNING_SCORE = 5;


function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return [ROCK, PAPER, SCISSORS][randomIndex];
}

function playRound(cpuChoice, playerChoice) {
    let playerWins;
    if(cpuChoice === playerChoice) {
        playerWins = null; // Tie
        return playerWins;
    }

    switch (cpuChoice) {
        case ROCK:
            playerWins = playerChoice === PAPER;
            break;
        case PAPER:
            playerWins = playerChoice === SCISSORS;
            break;
        case SCISSORS:
            playerWins = playerChoice === ROCK;
    }
    playerWins ? playerScore++ : cpuScore++;

    displayScore(playerScore, cpuScore);
    displayRoundInfo(playerScore, playerChoice, cpuChoice);

    if (checkGameOver())
        endGame();

    return playerWins;
}

const buttons = document.querySelectorAll('.game-area .bt');


buttons.forEach((button) => button.addEventListener('click', (e) => playRound(getComputerChoice(), e.currentTarget.getAttribute('id'))));


let playerScore = 0, cpuScore = 0;
const scoreDiv = document.querySelector('div.score-area');

function displayScore(playerScore, cpuScore) {
    scoreDiv.textContent = `Player ${playerScore} : ${cpuScore} CPU`;
}

const infoDiv = document.querySelector('div.info-area');

function displayRoundInfo(playerWins, playerChoice, cpuChoice) {
    infoDiv.textContent = `Player: ${playerChoice}, CPU: ${cpuChoice}`;
    if (playerWins === null) 
        infoDiv.textContent += "\nNo one wins the round: TIE";
    else
        infoDiv.textContent += `\n${playerWins ? "PLAYER" : "CPU"} wins the round: ${playerWins ? playerChoice : cpuChoice} beats ${playerWins ? cpuChoice : playerChoice}`;
}

function checkGameOver() {
    return playerScore === WINNING_SCORE || cpuScore === WINNING_SCORE;
}

const gameOverDiv = document.querySelector('.game-over-msg');

function endGame() {
    if (playerScore === WINNING_SCORE) {
        gameOverDiv.textContent = "YOU WIN!!!! Congrats!";
    }
    else if (cpuScore === WINNING_SCORE) {
        gameOverDiv.textContent = "Ohhh nooo! YOU LOSE!!!!";
    }
    buttons.forEach(button => button.disabled = true);
    const rematch = prompt("Wanna play again? (Yes/No)");
    if (rematch === null || rematch.toLowerCase() == "no") {
        return;
    } 
    else {
        resetComponents();
    }
}

function resetComponents() {
    playerScore = cpuScore = 0;
    scoreDiv.textContent = "Player 0 : 0 CPU";
    infoDiv.textContent = "Choose your weapon to start.";
    gameOverDiv.textContent = "";
    buttons.forEach(button => button.disabled = false);
}