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

    console.log(`${playerWins ? "PLAYER" : "CPU"} wins the round: ${playerWins ? playerChoice : cpuChoice} beats ${playerWins ? cpuChoice : playerChoice}`);
    console.log("-------------\n");

    return playerWins;
}

const rockButton = document.querySelector('.bt#rock');
const paperButton = document.querySelector('.bt#paper');
const scissorsButton = document.querySelector('.bt#scissors');

const buttons = [rockButton, paperButton, scissorsButton];

const receiveUserChoice = e => playRound(getComputerChoice(), e.target.getAttribute('id'));  

buttons.forEach((button) => button.addEventListener('click', receiveUserChoice));


/*
function game() {
    let cpuScore = 0;
    let playerScore = 0;
    while (cpuScore < 3 && playerScore < 3) {
        console.log("-----------------")
        let cpuChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        if (playerChoice === null) {
            console.log("Game cancelled.");
            return;
        }
        console.log(`Player: ${playerChoice}, CPU: ${cpuChoice}`);
        let playerWinsRound = playRound(cpuChoice, playerChoice);
        switch (playerWinsRound) {
            case null:
                break;
            case true:
                playerScore++;
                break;
            case false:
                cpuScore++;
                break;
        }
        console.log(`PLAYER ${playerScore} : ${cpuScore} CPU`);
    }

    if (playerScore === 3) 
        console.log("!!!YOU WIN!!! Congrats!");
    else if (cpuScore === 3)
        console.log(":( YOU LOSE :( Too bad!");
    else 
        console.log("!!! IT'S A TIE!!!");
    
    let playAgain = prompt("Do you want a rematch? (Yes/No)");
    if (playAgain != null && playAgain.toLowerCase() == "yes")
        game();
    else
        console.log("GAME OVER");
}


game();
*/