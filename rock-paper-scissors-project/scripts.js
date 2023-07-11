var winMessage = "You Won!"
var lossMessage = "You Lost :("
var tieMessage = "You Tied"
const options = ["rock", "paper", "scissors"];


function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
    var input = prompt("Enter your selection here (rock/paper/scissors): ");
    input = input.toLowerCase();

    if (options.includes(input)) {
        return input;
    } else {
        console.log("Invalid response");
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    console.log("You chose " + playerSelection + " and the computer chose " + computerSelection + "!");
    const player = playerSelection.length - 4;
    const computer = computerSelection.length - 4;
    if (player == computer) {
        return tieMessage;
    } else if (player == 0) {
        return computer > 1 ? winMessage : lossMessage;
    } else if (player == 1) {
        return computer > 2 ? winMessage : lossMessage;
    } else {
        return computer == 0 ? winMessage : lossMessage;
    }
}


function playHTML(playerSelection) {
    let computer = getComputerChoice();

    document.querySelector('#computer').textContent = 'The computer chose ' + computer + ', you chose ' + playerSelection;

    document.querySelector('#result').textContent = playRound(playerSelection, computer);
}

