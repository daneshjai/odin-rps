console.log("Hello World");

function getComputerChoice() {
    const computer_choice = Math.random();

    if (computer_choice < .33) {
        console.log("rock");
    }
    else if (computer_choice < .66) {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }

}

function getHumanChoice() {
    const message = "Enter a number. 1 = Rock, 2 = Paper, 3 = Scissors";
    let human_choice = parseInt(prompt(message, 1));

    switch (human_choice) {
        case 1:
            console.log(output_message, "rock");
            break;
        case 2:
            console.log(output_message, "paper");
            break;
        case 3:
            console.log(output_message, "scissors");
            break;
        default:
            console.log("Bad selection. You automatically lose.")
            break;

    }
}



getComputerChoice();
getHumanChoice();