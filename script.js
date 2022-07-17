// function to random rock, paper, scissors as computerplay
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// function to play roun computer vs. player
function playRound(playerSelection, ComputerSelection) {
    let playerPoint = 0;

    if((playerSelection === 'rock' && ComputerSelection === 'scissors') ||
        (playerSelection === 'scissors' && ComputerSelection === 'paper') ||
        (playerSelection === 'paper' && ComputerSelection === 'rock')) {

            playerPoint =1;
            console.log('You win! ' + playerSelection + ' beats ' + ComputerSelection);
        }else {
            console.log('You lose! ' + ComputerSelection + ' beats ' + playerSelection);
        }

        return playerPoint;
}

// function play game 5 times 
function game(roundTotal = 5) {
    let roundPlayed = 0;
    let playerScore = 0;

    while (roundPlayed < roundTotal) {
        let playerSelection = prompt('rock, paper or scissors?');
        playerSelection = playerSelection.toLowerCase();
        if((playerSelection != 'rock') &&
            (playerSelection != 'paper') &&
            (playerSelection != 'scissors'))
        { continue }

        let ComputerSelection = computerPlay();
        if (playerSelection === ComputerSelection) {
            console.log('It\'s a tie. You both chose ' + playerSelection);
            continue
        }

        playerScore += playRound(playerSelection, ComputerSelection);
        roundPlayed++;
    }

    if (playerScore > (roundPlayed / 2)) {
        console.log('You won ' + playerScore + ' Out of ' + roundPlayed + ' rounds. You win!');
    } else if (playerScore === (roundPlayed / 2)) {
        console.log('You won ' + playerScore + 'out of ' + roundPlayed + 'rounds. You tied.');
    } else {
        console.log('You won ' + playerScore + ' out of ' + roundPlayed + 'rounds. You lost');
    }
}