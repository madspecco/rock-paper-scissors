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

/* three buttons, one for each selection. */
/* Add an event listener to the buttons that calls playRound function */
/* with the correct playerSelection every time a button is clicked. */

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
const rps = document.querySelectorAll("#rock, #paper, #scissors");


reset.addEventListener('click', function () {
    if(playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        divLog.innerHTML = "GAME RESET";
        divLog.innerHTML += "<br/>";
        for(let btn = 0; btn < rps.length; btn++) {
            rps[btn].disabled = false;
        }
    }

    else {
        divLog.innerHTML += "<br/>THE GAME IS NOT OVER YET!";
        divLog.innerHTML += "<br/>";
    }
    
});

rock.addEventListener('click', function () {
    playRound('Rock', getComputerChoice());
});

paper.addEventListener('click', function () {
    playRound('Paper', getComputerChoice());
});

scissors.addEventListener('click', function () {
    playRound('Scissors', getComputerChoice());
});

/* Add a div for displaying results and change all of your console.logs
into DOM methods.*/

const divLog = document.querySelector('div');
divLog.style.border = 'solid #000000';
divLog.style.backgroundColor = 'pink';

/* Display the running score, and announce a winner of the game
once one player reaches 5 points. */
var playerScore = 0;
var computerScore = 0;



function playRound(playerSelection, computerSelection) {
    console.log("PLAYER SELECTS: " + playerSelection);
    console.log("COMPUTER SELECTS: " + computerSelection);

    if(playerScore === 5 || computerScore === 5) {
        divLog.innerHTML += "<br/> GAME OVER! PLEASE RESET!";
        for(let btn = 0; btn < rps.length; btn++) {
            rps[btn].disabled = true;
        }
    }

    else {
        if(playerSelection === 'Rock') {
            if(computerSelection === 'Rock') {
                divLog.innerHTML += "<br/>ISSA TIE! FEEL THE TENSION!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";
                return "ISSA TIE! FEEL THE TENSION!"
            }
    
            if(computerSelection === 'Paper') {
                computerScore++;
                divLog.innerHTML += "<br/>THE COMPUTER WINS! TAKE THAT HUMAN!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";

                if(computerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE COMPUTER WINS! WHAT A SHAME FOR HUMANITY!";
                }
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
    
            if(computerSelection === 'Scissors') {
                playerScore++;
                divLog.innerHTML += "<br/>THE PLAYER WINS!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";

                if(playerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE PLAYER WINS!";
                }
                return "THE PLAYER WINS!";
            }
        }
    
        if(playerSelection === 'Paper') {
            if(computerSelection === 'Rock') {
                playerScore++;
                divLog.innerHTML += "<br/>THE PLAYER WINS!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";

                if(playerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE PLAYER WINS!";
                }
                return "THE PLAYER WINS!";
            }
    
            if(computerSelection === 'Paper') {
                divLog.innerHTML += "<br/>ISSA TIE! FEEL THE TENSION!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";
                return "ISSA TIE! FEEL THE TENSION!"
            }
    
            if(computerSelection === 'Scissors') {
                computerScore++;
                divLog.innerHTML += "<br/>THE COMPUTER WINS! TAKE THAT HUMAN!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";

                if(computerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE COMPUTER WINS! WHAT A SHAME FOR HUMANITY!";
                }
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
        }
    
        if(playerSelection === 'Scissors') {
            if(computerSelection === 'Rock') {
                computerScore++;
                divLog.innerHTML += "<br/>THE COMPUTER WINS! TAKE THAT HUMAN!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";

                if(computerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE COMPUTER WINS! WHAT A SHAME FOR HUMANITY!";
                }
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
    
            if(computerSelection === 'Paper') {
                playerScore++;
                divLog.innerHTML += "<br/>THE PLAYER WINS!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";

                if(playerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE PLAYER WINS!";
                }
                return "THE PLAYER WINS!";
            }
    
            if(computerSelection === 'Scissors') {
                divLog.innerHTML += "<br/>ISSA TIE! FEEL THE TENSION!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                divLog.innerHTML += "<br/>";
                return "ISSA TIE! FEEL THE TENSION!"
            }
        }
    }
}