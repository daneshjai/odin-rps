// function that randomly picks a number and based on number thresholds assigns it to a Rock, Paper, or Scissors
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
// simple validation input by limiting input to number selection
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
            console.log("Bad selection. Pick again")
            return getHumanChoice();

    }
}


// function to initialize the game
function playGame() {
    //define score counters
    let humanScore = 0;
    let computerScore = 0;
    let drawCount = 0;

    // function with game logic
    function playRound(humanChoice, computerChoice) {
        console.log("Rock. Paper. Scissors. Shoot!");
        console.log("Human picked", humanChoice);
        console.log("Computer picked", computerChoice);

    if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
                humanScore +=1;
                console.log("Human wins.");
            }
        else if (humanChoice == computerChoice) {
            drawCount += 1;
            console.log("Draw.");
        }
        else {
            computerScore += 1;
            console.log("Computer wins.");
        }
   
  
    }
    
    // define loop variables
    roundCounter = 1;
    maxRound = 5;

    while (roundCounter <= maxRound) {
        // define round header
        roundHeader = `******** ROUND ${roundCounter} ********`;
        console.log(roundHeader)
        
        // get the choices
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        // call the logic
        playRound(humanSelection, computerSelection);
        
        // output the game stats
        console.log("Human Wins:", humanScore, "Losses:", computerScore, "Draws:", drawCount);
        console.log("Rounds remaining:", maxRound - roundCounter);
        roundCounter += 1;

        // define round footer
        console.log("*".repeat(roundHeader.length));
        console.log(" ");
        
    }
    

}

// game start
playGame();


