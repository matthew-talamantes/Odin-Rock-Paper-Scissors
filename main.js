const computerPlay = () => {
    const randInt = Math.floor(Math.random() * playOptions.length);

    return playOptions[randInt];
};

const playOptions = ['rock', 'paper', 'scissors'];