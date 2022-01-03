const computerPlay = () => {
    const randInt = Math.floor(Math.random() * playOptions.length);

    return playOptions[randInt];
};

const playRound = (playerSelection, computerSelection) => {
    let outcome = '';
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            outcome = 'lose';
        } else if (computerSelection === 'scissors') {
            outcome = 'win';
        } else {
            outcome = 'draw';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            outcome = 'lose';
        } else if (computerSelection === 'rock') {
            outcome = 'win';
        } else {
            outcome = 'draw';
        }
    } else {
        if (computerSelection === 'rock') {
            outcome = 'lose';
        } else if (computerSelection === 'paper') {
            outcome = 'win';
        } else {
            outcome = 'draw';
        }
    }

    return outcome;
};

const game = () => {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let playCount = 0;
    let playerSelection;
    let gameOutcome;

    while (playCount < rounds) {
        playerSelection = window.prompt('Enter rock, paper, or scissors: ');
        gameOutcome = playRound(playerSelection, computerPlay());

        if (gameOutcome === 'lose') {
            computerScore++;
        } else if (gameOutcome === 'win') {
            playerScore++;
        } else {
            draws++;
            continue;
        }

        playCount++;
    }

    if (playerScore > computerScore) {
        console.log(`You won with ${playerScore} wins to ${computerScore} and ${draws} draws`);
    } else if (computerScore > playerScore) {
        console.log(`You lose ${computerScore} to ${playerScore} with ${draws} draws`);
    }
};

const playOptions = ['rock', 'paper', 'scissors'];
const playerSelection = 'paPer';
game();