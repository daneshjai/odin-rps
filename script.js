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
    let roundCounter = 1;
    let setScore = 0;

    // function to add UI to game
    function addUI() {

        // add div for header
        divHeader = document.createElement("div");
        divHeader.id = "gameHeader";
        roundHeader = document.createElement("h1");
        roundHeader.textContent = "PRESS A BUTTON TO START";
        divHeader.appendChild(roundHeader);
        document.body.append(divHeader);

        // create buttons
        divButtons = document.createElement("div");
        divButtons.id = "gameOptions";
        
        const gameOptions = ['rock', 'paper', 'scissors'];
        
        for (let index = 0; index < gameOptions.length; index++) {
            const option = gameOptions[index];
            let btn = document.createElement("button");
            btn.textContent = option;
            btn.id = index + 1;
            btn.addEventListener("click", (event) => {
                // get the choices
                const humanSelection = event.target.textContent;
                const computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
            });
            divButtons.append(btn);
            
        }
        
        document.body.appendChild(divButtons);

        // define div for intro, selections
        divSteps = document.createElement("div");
        divSteps.id = "gameSteps";
        gameIntro = document.createElement("p");
        textHumanChoice = document.createElement("p");
        textComputerChoice = document.createElement("p");
        divSteps.appendChild(gameIntro);
        divSteps.appendChild(textHumanChoice);
        divSteps.appendChild(textComputerChoice);
        document.body.append(divSteps);       
        
        // define outcome div and text for stats
        divOutcome = document.createElement("div");
        divOutcome.id = "gameOutcome";
        textWinner = document.createElement("p");
        textWinner.textContent = "";
        textGameStats = document.createElement("p");
        textGameStats.textContent = "";
        divOutcome.appendChild(textWinner);
        divOutcome.appendChild(textGameStats);
        document.body.append(divOutcome);

        // define div for best out of set
        divSetWinner = document.createElement("div");
        textSetWinner = document.createElement("p");
        textSetStats = document.createElement("p");
        textSetWinner.textContent = "";
        textSetStats.textContent = "";
        divSetWinner.appendChild(textSetWinner);
        divSetWinner.appendChild(textSetStats);
        document.body.append(divSetWinner);

        
    }

    // function with game logic
    function playRound(humanChoice, computerChoice) {        
        
        roundHeader.textContent = `******** ROUND ${roundCounter} ********`;
        gameIntro.textContent = "Rock. Paper. Scissors. Shoot!";
        textHumanChoice.textContent = `Human picked: ${humanChoice}`;
        textComputerChoice.textContent = `Computer picked: ${computerChoice}`;
        const formatterPercent = new Intl.NumberFormat('en-US', {
            style: 'percent'
        });
        

        if (
                (humanChoice == "rock" && computerChoice == "scissors") ||
                (humanChoice == "paper" && computerChoice == "rock") ||
                (humanChoice == "scissors" && computerChoice == "paper")) {
                    humanScore +=1;
                    textWinner.textContent = "Human wins this round.";
                }
        else if (humanChoice == computerChoice) {
                drawCount += 1;
                textWinner.textContent = "Draw.";
            }
        else {
                computerScore += 1;
                textWinner.textContent = "Human loses this round.";
            }

         // output the game stats
        textWins = `Wins: ${humanScore} (${formatterPercent.format(humanScore/roundCounter)})`;
        textLosses = `Losses: ${computerScore} (${formatterPercent.format(computerScore/roundCounter)})`;
        textDraws = `Draws: ${drawCount} (${formatterPercent.format(drawCount/roundCounter)})`;
        textGameStats.textContent = `Total human ${textWins} ${textLosses} ${textDraws}`;

        // announce winner for best of 5 games
        gameSets = 5;
        if (roundCounter % gameSets == 0) {
            setsPlayed = Math.trunc(roundCounter / gameSets);
            if (humanScore > computerScore) {
                setScore += 1;
                textSetWinner.textContent = `Human wins best out of ${gameSets}!`;
            }
            else {
                textSetWinner.textContent = `Computer wins best out of ${gameSets}`;
            }
            textSetStats.textContent = `Total sets won ${setScore} (${formatterPercent.format(setScore/setsPlayed)})`;



        }

        // define round footer
        roundCounter += 1; 


   
  
    }
    

    // call UI where any button click calls PlayRound function
    addUI();
}

// game start
playGame();


