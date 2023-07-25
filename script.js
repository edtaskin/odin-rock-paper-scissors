const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return [ROCK, PAPER, SCISSORS][randomIndex];
}

function playRound(cpuChoice, playerChoice) {
    let playerWins;
    console.log(`Player: ${playerChoice}, CPU: ${cpuChoice}`);
    if(cpuChoice === playerChoice) {
        playerWins = null; // Tie
        console.log("No one wins the round: TIE");
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
    //console.log(`${playerWins ? "PLAYER" : "CPU"} wins the round: ${playerWins ? playerChoice : cpuChoice} beats ${playerWins ? cpuChoice : playerChoice}`);
    //console.log("-------------\n");

    return playerWins;
}

const rockButton = document.querySelector('.bt#rock');
const paperButton = document.querySelector('.bt#paper');
const scissorsButton = document.querySelector('.bt#scissors');

const buttons = [rockButton, paperButton, scissorsButton];

const receiveUserChoice = e => playRound(getComputerChoice(), e.target.getAttribute('id'));  

buttons.forEach((button) => button.addEventListener('click', receiveUserChoice));


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