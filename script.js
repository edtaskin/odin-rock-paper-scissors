const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return [ROCK, PAPER, SCISSORS][randomIndex];
}

function playRound(cpuChoice, playerChoice) {
    let playerWins;

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
    
    return playerWins;
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose from Rock / Paper / Scissors: ");

    if (playerChoice === null) return null; // Cancel button pressed 
    playerChoice = playerChoice.toLowerCase();

    while (playerChoice !== ROCK && playerChoice !== PAPER && playerChoice !== SCISSORS) {
        playerChoice = prompt("Unknown option.\nChoose from Rock / Paper / Scissors: ");
    }

    return playerChoice;
}

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