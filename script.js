/* begin with a function called getComputerChoice that
   will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’ */



// (you can keep the console.logs for this step) 

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

/* Create three buttons, one for each selection. */
/* Add an event listener to the buttons that call your playRound function */
/* with the correct playerSelection every time a button is clicked. */

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', function () {
    playRound('Rock', getComputerChoice());
});

paper.addEventListener('click', function () {
    playRound('Paper', getComputerChoice());
});

scissors.addEventListener('click', function () {
    playRound('Scissors', getComputerChoice());
});


function playRound(playerSelection, computerSelection) {
        console.log("PLAYER SELECTS: " + playerSelection);
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

// function game() {
//     let player_score = 0;
//     let computer_score = 0;

//     for (let i = 1; i <= 5; i++) {

//         console.log("ROUND " + i + " BEGINS!");
//         let result = playRound();
    
//         if(result === "THE PLAYER WINS!") {
//             player_score++;
//             console.log("PLAYER: " + player_score + " COMPUTER: " + computer_score);
//         }
    
//         if(result === "THE COMPUTER WINS! TAKE THAT HUMAN!") {
//             computer_score++;
//             console.log("PLAYER: " + player_score + " COMPUTER: " + computer_score);
//         }
    
//         if(result === "ISSA TIE! FEEL THE TENSION!") {
//             console.log("PLAYER: " + player_score + " COMPUTER: " + computer_score);
//         }
    
//         console.log("ROUND " + i + " IS OVER!");
//     }

//     if(player_score > computer_score) {
//         console.log("THE PLAYER WINS THE GAME :) !");
//     }

//     else if(player_score < computer_score) {
//         console.log("THE PLAYER LOST THE GAME :( !");
//     }

//     else {
//         console.log("UNBELIEVABLE! IT'S A TIE!")
//     }
// }

// game();