const buttons = document.querySelectorAll('button');
const playerIcon = document.querySelector('.player');
const computerIcon = document.querySelector('.computer');
const playerPoint = document.querySelector('.ppoint');
const computerPoint = document.querySelector('.cpoint');
const finalResult = document.querySelector('.result');
let status = false;



const random = num => {
    return Math.floor(Math.random() * (num + 1));
}
//It will randomly return either rock, paper or scissors
const computerPlay = () => {
    let num = random(2);
    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper';
    } else if (num == 2) {
        return 'scissors';
    }
}
//Declare the selections of both
//It take my selection and computer's selection
const playRound = (playerSelection, computerSelection) => {
    //Case Rock Scissors
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win, Rock beats Scissors';
    }
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You lose, Rock beats Scissors';
    }
    //Case Scissor Paper
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win, Scissors beats Paper';
    }
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose, Scissors beats Paper';
    }
    //Case Rock Paper
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You win, Paper beats Rock';
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You lose, Paper beats Rock';
    }
    //Case when both are equal
    if (playerSelection == computerSelection) {
        return 'it\'s a tie';
    }
}
let humanPoint = 0;
let compuPoint = 0;

const game = (playerSelection, computerSelection) => {
    if (status === true) {
        status = false;
        humanPoint = 0;
        compuPoint = 0;
        finalResult.textContent = '';
    }

    playerIcon.innerHTML = '';
    computerIcon.innerHTML = '';
    const playerImage = document.createElement('img');
    const computerImage = document.createElement('img');
    playerImage.classList.add('img');
    playerImage.setAttribute("src", `./img/${playerSelection}.png`);
    computerImage.classList.add('img');
    computerImage.setAttribute("src", `./img/${computerSelection}.png`);
    playerIcon.appendChild(playerImage);
    computerIcon.appendChild(computerImage);

    let result = playRound(playerSelection, computerSelection);

    if (result.includes('win') == true) {
        humanPoint++;
    } else if (result.includes('lose') == true) {
        compuPoint++;
    }

    playerPoint.textContent = humanPoint;
    computerPoint.textContent = compuPoint;

    if (humanPoint == 5) {
        finalResult.textContent = 'You win the game, congratulations';
        status = true;

    } else if (compuPoint == 5) {
        finalResult.textContent = "You lose the game, that's a shame";
        status = true;
    }
}



buttons.forEach(button => {
    button.addEventListener('click', () => {
        let computerChoice = computerPlay();
        game(button.id, computerChoice);
    });
});
