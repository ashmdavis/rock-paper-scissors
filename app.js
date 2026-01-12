const container = document.querySelector("#container");

//creat buttons container and append it to html container
const buttonContainer = document.createElement("div");
container.appendChild(buttonContainer);

// create and append selection buttone to button container
const rockButton = document.createElement("button");
buttonContainer.appendChild(rockButton);
rockButton.textContent = "Rock"
rockButton.classList.add("rock");

const paperButton = document.createElement("button");
buttonContainer.appendChild(paperButton);
paperButton.textContent = "Paper"
paperButton.classList.add("paper");

const scissorsButton = document.createElement("button");
buttonContainer.appendChild(scissorsButton);
scissorsButton.textContent = "Scissors"
scissorsButton.classList.add("scissors");

const resetButton = document.createElement("button");

// create a function for computer choice
// return rock paper or scissors in competer choice function at random
// test computer choice function

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock";
    } else if (randomChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// const computerSelection = getComputerChoice();
// console.log(computerSelection);

// create variables to keep track of human score and computer score
// set those variables to be the value of 0

let computerScore = 0;
let humanScore = 0;

const scoreContainer = document.createElement("div");
container.appendChild(scoreContainer);

const humanScoreContainer = document.createElement("div");
//scoreContainer.appendChild(humanScoreContainer);

const compScoreContainer = document.createElement("div");
//scoreContainer.appendChild(compScoreContainer);

const historyContainer = document.createElement("ul");
container.appendChild(historyContainer);
historyContainer.style.listStyle = "none";

// write logic to play a single round
// create playRound function
// create parameters within playRound: humanChoice, computerChoice
// make humanChoice parameter case-insensitive
// playRound function return a string representing the round winner
// increment score based on round winner

function playRound(humanChoice, computerChoice) {
    let gameResult = "";

    scoreContainer.appendChild(humanScoreContainer);
    scoreContainer.appendChild(compScoreContainer);

    if (humanChoice === computerChoice) {
        gameResult = `Opponent chose ${computerChoice}. It's a Draw!`;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        gameResult = `Opponent chose ${computerChoice}. You Win! Rock beats Scissors`;
        humanScore++
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        gameResult = `Opponent chose ${computerChoice}. You Lose! Paper beats Rock.`;
        computerScore++
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        gameResult = `Opponent chose ${computerChoice}. You Win! Paper beats Rock`;
        humanScore++
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        gameResult = `Opponent chose ${computerChoice}. You Lose! Scissors beat Paper.`;
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        gameResult = `Opponent chose ${computerChoice}. You Lose! Rock beats Scissors`;
        computerScore++
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        gameResult = `Opponent chose ${computerChoice}. You Win! Scissors beat Paper.`;
        humanScore++
    }

    humanScoreContainer.textContent = `Your Score: ${humanScore}`;
    compScoreContainer.textContent = `Opponent Score: ${computerScore}`;
    historyContainer.innerHTML += `<li>${gameResult}</li>`;
    getGameWinner();
}

buttonContainer.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.classList.value) {
        case "rock":
            playRound("rock", getComputerChoice());
            break;
        case "paper":
            playRound("paper", getComputerChoice());
            break;
        case "scissors":
            playRound("scissors", getComputerChoice());
            break;
        case "reset":
            gameReset();
            break;
    }
});

// play 5 rounds by calling play round 5 times

function getGameWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            historyContainer.innerHTML += `You win! ${humanScore} to ${computerScore}. Congrats, Winner!`;
        } else if (humanScore < computerScore) {
            historyContainer.innerHTML += `You lost...${humanScore} to ${computerScore}. Try again, Loser!`;     
        } else {
            historyContainer.innerHTML += `It's a tie! ${humanScore} to ${computerScore}. Not worth celebrating...`;
        }
        humanScore = 0;
        computerScore = 0;
        humanScoreContainer.remove();
        compScoreContainer.remove();
        gameEnd();
    }
}

function gameEnd() {
    buttonContainer.appendChild(resetButton);
    resetButton.textContent = "Reset";
    resetButton.classList.add("reset");

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function gameReset() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    historyContainer.innerHTML = "";
    resetButton.remove();
}