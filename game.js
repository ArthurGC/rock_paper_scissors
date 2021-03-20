const getString = string =>{
    let result = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return result
}
const random = num => {
    return Math.floor(Math.random() * (num + 1));
}
//It will randomly return either rock, paper or scissors
const computerPlay = () => {
    let num = random(2);
    if (num == 0) {
        return 'Rock';
    } else if (num == 1) {
        return 'Paper';
    } else if (num == 2) {
        return 'Scissors';
    }
}
//Declare the selections of both
// let playerSelection = 'Paper';
// let computerSelection = computerPlay();
//It take my selection and computer's selection
const playRound = (playerSelection, computerSelection) => {
    //Case Rock Scissors
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You win, Rock beats Scissors';
    }
    if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose, Rock beats Scissors';
    }
    //Case Scissor Paper
    if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win, Scissors beats Paper';
    }
    if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You lose, Scissors beats Paper';
    }
    //Case Rock Paper
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win, Paper beats Rock';
    }
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You lose, Paper beats Rock';
    }
    //Case when both are equal
    if (playerSelection == computerSelection) {
        return 'it\'s a tie';
    }
}

//console.log(playRound(playerSelection, computerSelection));

const game = () => {
    let humanPoint = 0;
    let computerPoint = 0;
    let result = '';
    while (humanPoint <=5 || computerPoint <=5){
        let playerSelection = getString(prompt('Rock, Paper or Scissors'));
        let computerSelection = computerPlay();
        console.log(playerSelection);
        console.log(computerSelection);

        result = playRound(playerSelection, computerSelection)
        if (result.indexOf('win') != -1) {
            humanPoint++;
        } else if (result.indexOf('lose') != -1) {
            computerPoint++;
        }
        console.log(humanPoint);
        console.log(computerPoint);
        if (humanPoint == 5){
            console.log('You win')
            break;
        }else if (computerPoint == 5) {
            console.log('You lose')
            break;
        }
    }
}
game();
