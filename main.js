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

    if (outcome === 'win') {
        const result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (outcome === 'lose') {
        const result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        const result = `Draw! You both selected ${playerSelection}`;
    }

    return result;
};

const playOptions = ['rock', 'paper', 'scissors'];
const playerSelection = 'paper';
