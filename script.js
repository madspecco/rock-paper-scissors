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
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const rockPC = document.querySelector('#rock-pc');
const paperPC = document.querySelector('#paper-pc');
const scissorsPC = document.querySelector('#scissors-pc');

const reset = document.querySelector('#reset');
const rps = document.querySelectorAll("#rock, #paper, #scissors");

/* Add a div for displaying results */
const divLog = document.querySelector('#gameLog');

/* Add an event listener to the buttons that calls playRound function */
/* with the correct playerSelection every time a button is clicked. */

rock.addEventListener('click', function () {
    playRound('Rock', getComputerChoice());
});

paper.addEventListener('click', function () {
    playRound('Paper', getComputerChoice());
});

scissors.addEventListener('click', function () {
    playRound('Scissors', getComputerChoice());
});

/* Event Listener for the reset button */
reset.addEventListener('click', function () {
    if(playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        divLog.innerHTML = "AGAIN! AGAIN!";
        divLog.innerHTML += "<br/>";
        for(let btn = 0; btn < rps.length; btn++) {
            rps[btn].disabled = false;
        }
    }

    else {
        divLog.innerHTML += "<br/>THE GAME IS NOT OVER YET!";
        divLog.innerHTML += "<br/>";
        reset.disabled = true;
    }
    
});

/* Display the running score, and announce a winner of the game
once one player reaches 5 points. */
var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {
    // Resetting button effects
    rock.classList.remove('selected');
    paper.classList.remove('selected');
    scissors.classList.remove('selected');

    rockPC.classList.remove('selected');
    paperPC.classList.remove('selected');
    scissorsPC.classList.remove('selected');

    // Setting Game Over Condition
    if(playerScore === 5 || computerScore === 5) {
        divLog.innerHTML += "<br/> GAME OVER! PLEASE RESET!";
        for(let btn = 0; btn < rps.length; btn++) {
            rps[btn].disabled = true;
        }
    }

    else {
        if(playerSelection === 'Rock') {
            rock.classList.add('selected');

            if(computerSelection === 'Rock') {
                rockPC.classList.add('selected');
                divLog.innerHTML = "<br/> ROCK AGAINST ROCK! <br/> ISSA TIE! <br/> FEEL THE TENSION!";
                divLog.innerHTML += `<br/> PLAYER: ${playerScore} COMPUTER: ${computerScore}`
                return "ISSA TIE! FEEL THE TENSION!"
            }
    
            if(computerSelection === 'Paper') {
                paperPC.classList.add('selected');

                computerScore++;
                divLog.innerHTML = "<br/> PAPER BEATS ROCK! <br/> THE COMPUTER WINS! <br/> TAKE THAT HUMAN!";
                divLog.innerHTML += `<br/> PLAYER: ${playerScore} COMPUTER: ${computerScore}`;

                if(computerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! <br/> THE COMPUTER WINS! <br/> WHAT A SHAME FOR HUMANITY!";
                    reset.disabled = false;
                }
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
    
            if(computerSelection === 'Scissors') {
                scissorsPC.classList.add('selected');

                playerScore++;
                divLog.innerHTML = "<br/> ROCK BEATS SCISSORS! <br/> THE PLAYER WINS!";
                divLog.innerHTML += `<br/> PLAYER: ${playerScore} COMPUTER: ${computerScore}`;

                if(playerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! <br/> THE PLAYER WINS!";
                    reset.disabled = false;
                }
                return "THE PLAYER WINS!";
            }
        }
    
        if(playerSelection === 'Paper') {
            paper.classList.add('selected');

            if(computerSelection === 'Rock') {
                rockPC.classList.add('selected');
                playerScore++;
                divLog.innerHTML = "PAPER BEATS ROCK! <br/> THE PLAYER WINS!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;

                if(playerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! <br/> THE PLAYER WINS!";
                    reset.disabled = false;
                }
                return "THE PLAYER WINS!";
            }
    
            if(computerSelection === 'Paper') {
                paperPC.classList.add('selected');

                divLog.innerHTML = "<br/> PAPER AGAINST PAPER! <br/> ISSA TIE! <br/> FEEL THE TENSION!";
                divLog.innerHTML += `<br/> PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                return "ISSA TIE! FEEL THE TENSION!"
            }
    
            if(computerSelection === 'Scissors') {
                scissorsPC.classList.add('selected');

                computerScore++;
                divLog.innerHTML = "SCISSORS BEAT PAPER! <br/> THE COMPUTER WINS! <br/> TAKE THAT HUMAN!";
                divLog.innerHTML += `<br/> PLAYER: ${playerScore} COMPUTER: ${computerScore}`;

                if(computerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! THE COMPUTER WINS! WHAT A SHAME FOR HUMANITY!";
                    reset.disabled = false;
                }
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
        }
    
        if(playerSelection === 'Scissors') {
            scissors.classList.add('selected');

            if(computerSelection === 'Rock') {
                rockPC.classList.add('selected');
                computerScore++;
                divLog.innerHTML = "ROCK BEATS SCISSORS! <br/> THE COMPUTER WINS! <br/> TAKE THAT HUMAN!";
                divLog.innerHTML += `<br/> PLAYER: ${playerScore} COMPUTER: ${computerScore}`;

                if(computerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! <br/> THE COMPUTER WINS! <br/> WHAT A SHAME FOR HUMANITY!";
                    reset.disabled = false;
                }
                return "THE COMPUTER WINS! TAKE THAT HUMAN!";
            }
    
            if(computerSelection === 'Paper') {
                paperPC.classList.add('selected');

                playerScore++;
                divLog.innerHTML = "SCISSORS BEAT PAPER!<br/>THE PLAYER WINS!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;

                if(playerScore === 5) {
                    divLog.innerHTML += "<br/> GAME OVER! <br/> THE PLAYER WINS!";
                    reset.disabled = false;
                }
                return "THE PLAYER WINS!";
            }
    
            if(computerSelection === 'Scissors') {
                scissorsPC.classList.add('selected');

                divLog.innerHTML = "SCISSORS AGAINST SCISSORS!<br/>ISSA TIE!<br/>FEEL THE TENSION!";
                divLog.innerHTML += `<br/>PLAYER: ${playerScore} COMPUTER: ${computerScore}`;
                return "ISSA TIE! FEEL THE TENSION!"
            }
        }
    }
}