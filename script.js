console.log("Hello World");

let humanScore = 0;
let computerScore = 0;

// function that randomly picks and assigns it to a Rock, Paper, or defaults to Scissors based on number threshold
function getComputerChoice() {
    const computer_choice = Math.random();

    if (computer_choice < .33) {
        return "rock";
    }
    else if (computer_choice < .66) {
         return "paper";
    }
    else {
        return "scissors";
    }

}

// function that gets human input.
// currently does not handle input validation
function getHumanChoice() {
    const message = "Enter a number. 1 = Rock, 2 = Paper, 3 = Scissors";
    let human_choice = parseInt(prompt(message, 1));

    switch (human_choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("Bad selection. You automatically lose.")
            break;

    }
}

function playRound() {

}

console.log("Computer selects", getComputerChoice());
console.log("Human selects", getHumanChoice());