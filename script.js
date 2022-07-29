let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');


// function to random rock, paper, scissors as computerplay
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}


// function to play round computer vs. player
function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = ""

    if((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')) {

        playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
                    + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log(`You Win! ` + playerSelection + ` beats ` + computerSelection + 
                   "Player Score: " + playerScore + "Computer Score: " + computerScore)
        if(playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }

    }
    else if (playerSelection == computerSelection){
        result = ('It\'s a tie. You both chose ' + playerSelection
                  + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log('It\'s a tie. You both chose ' + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1;
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
                  + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
        console.log('computer Won the Game')

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            result += 'I won the game'
            disableButtons()
        }
    }
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.value)
    })
})