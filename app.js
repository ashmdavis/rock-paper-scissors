// create user selection buttons and container
const container = document.querySelector("#container");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

// attatch buttons to container
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

// give each button text content
rockButton.textContent = "Rock"
paperButton.textContent = "Paper"
scissorsButton.textContent = "Scissors"

// give each button a unique id
rockButton.id = "rock";
paperButton.id = "paper";
scissorsButton.id = "scissors";

// add an event lister for each button element
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // button differentiated by id
        alert(button.id);
    });
});

// create a function for computer choice
// return rock paper or scissors in competer choice function at random
// test computer choice function

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock"
    } else if (randomChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// create a function for human choice
// return one valid user choice depending on user input
// test human choice function

function getHumanChoice() {
    const humanInput = prompt("Rock, paper, or scissors?");
    return humanInput.toLowerCase();
}

// create variables to keep track of human score and computer score
// set those variables to be the value of 0

let computerScore = 0;
let humanScore = 0;

// write logic to play a single round
// create playRound function
// create parameters within playRound: humanChoice, computerChoice
// make humanChoice parameter case-insensitive
// playRound function return a string representing the round winner
// increment score based on round winner

function playRound(computerChoice, humanChoice) {
    let gameResult = "";

    if (humanChoice === computerChoice) {
        gameResult = "It's a draw!"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        gameResult = "You win! Rock beats Scissors";
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        gameResult = "You lose! Paper beats Rock.";
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        gameResult = "You win! Paper beats Rock";
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        gameResult = "You lose! Scissors beat Paper.";
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        gameResult = "You lose! Rock beats Scissors";
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        gameResult = "You win! Scissors beat Paper.";
        humanScore++
    }
    return (gameResult);
}

// create a function named playGame
// move playRound inside of playGame function
// play 5 rounds by calling play round 5 times

function playGame() {
    alert(`Opponent chose ${computerSelection}`);
    alert(playRound(computerSelection, humanSelection));
    alert("Game Over")
    if (humanScore > computerScore) {
        alert(`Your Score: ${humanScore} | Opponent Score: ${computerScore} | Congrats, Winner.`);
    } else {
        alert(`Your Score: ${humanScore} | Opponent Score: ${computerScore} | Try again, Loser.`);
    }
}

playGame();


