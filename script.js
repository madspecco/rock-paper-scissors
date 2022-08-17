/* begin with a function called getComputerChoice that
   will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ */

function getComputerChoice(computerSelection) {
    computerSelection = Math.ceil(Math.random() * 3);

    if(computerSelection == 1) {
        return 'Rock';
    }

    else if (computerSelection == 2) {
        return 'Paper';
    }

    else if (computerSelection == 3) {
        return 'Scissors';
    }
}

function getPlayerChoice(playerSelection) {
    let choice = prompt("Rock, Paper, Scissors?");
    // make choice case sensitive
    choice = choice[0].toUpperCase() + choice.slice(1, choice.length).toLowerCase();
        
    // failsafe
    if(choice !== 'Rock' && choice !== 'Paper' && choice !== 'Scissors') {
        alert("Whoops! Looks like that is not a valid choice.");
        return 0;
    }

    else return choice;
}

function playRound(playerSelection, computerSelection) {
        playerSelection = getPlayerChoice();
        console.log("PLAYER SELECTS: " + playerSelection);
        computerSelection = getComputerChoice();
        console.log("COMPUTER SELECTS: " + computerSelection);

        if(playerSelection === 'Rock') {
            if(computerSelection === 'Rock') {
                console.log("ISSA TIE! FEEL THE TENSION!");
                return "ISSA TIE! FEEL THE TENSION!"
            }

            if(computerSelection === 'Paper') {
                console.log("THE COMPUTER WINS! TAKE THAT HUMAN!");
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }

            if(computerSelection === 'Scissors') {
                console.log("THE PLAYER WINS!");
                return "THE PLAYER WINS!";
            }
        }

        if(playerSelection === 'Paper') {
            if(computerSelection === 'Rock') {
                console.log("THE PLAYER WINS!");
                return "THE PLAYER WINS!";
            }

            if(computerSelection === 'Paper') {
                console.log("ISSA TIE! FEEL THE TENSION!");
                return "ISSA TIE! FEEL THE TENSION!"
            }

            if(computerSelection === 'Scissors') {
                console.log("THE COMPUTER WINS! TAKE THAT HUMAN!");
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
        }

        if(playerSelection === 'Scissors') {
            if(computerSelection === 'Rock') {
                console.log("THE COMPUTER WINS! TAKE THAT HUMAN!");
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }

            if(computerSelection === 'Paper') {
                console.log("THE PLAYER WINS!");
                return "THE PLAYER WINS!";
            }

            if(computerSelection === 'Scissors') {
                console.log("ISSA TIE! FEEL THE TENSION!");
                return "ISSA TIE! FEEL THE TENSION!"
            }
        }
    }


// Create a function to play 5 rounds
function game() {
    let player_score = 0;
    let computer_score = 0;

    for (let i = 1; i <= 5; i++) {

        console.log("ROUND " + i + " BEGINS!");
        let result = playRound();

        if(result === "THE PLAYER WINS!") {
            player_score++;
            console.log("PLAYER: " + player_score + " COMPUTER: " + computer_score);
        }

        if(result === "THE COMPUTER WINS! TAKE THAT HUMAN!") {
            computer_score++;
            console.log("PLAYER: " + player_score + " COMPUTER: " + computer_score);
        }

        if(result === "ISSA TIE! FEEL THE TENSION!") {
            console.log("PLAYER: " + player_score + " COMPUTER: " + computer_score);
        }

        console.log("ROUND " + i + " IS OVER!");
    }
}


game();