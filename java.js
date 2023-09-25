let cPoint = 0;
let roundNum = 1;
let uPoint = 0;

const choice1 = document.querySelector(".scissor");
const choice2 = document.querySelector(".rock");
const choice3 = document.querySelector(".paper");

const result = document.querySelector(".result");
const userscore = document.querySelector(".user-score");
const computerscore = document.querySelector(".computer-score");

const newGame = document.createElement('div');
newGame.textContent = `Play again`;
newGame.classList.add('refresh');
newGame.addEventListener('click', refreshPage);
function refreshPage() {
    window.location.reload(true);
}

function computerPlay() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
            return 'rock';
    }
    if (number % 3 === 1) {
            return 'paper';
    }
    return 'scissors';
}

choice1.addEventListener("click", e => {
    roundNum++;
    computerSelection = computerPlay();

    if( cPoint<5 && uPoint<5 )
    {
        if(computerSelection == 'scissors'){
            result.textContent = `Round ${roundNum}: You went with Scissors and Computer went with ${computerSelection}. It's a tie!`;
        }

        else if(computerSelection == 'rock'){
            cPoint = cPoint + 1;
            result.textContent = `Round ${roundNum}: You went with Scissors and Computer went with ${computerSelection}. Rock wins!`;
            computerscore.textContent = `${cPoint}`;    
        }

        else{
            uPoint = uPoint + 1;
            result.textContent = `Round ${roundNum}: You went with Scissors and Computer went with ${computerSelection}. Scissor wins!`;
            userscore.textContent = `${uPoint}`;    
        }
    }
    else{      
        cPoint>uPoint? (result.textContent = `Game Ended. Computer won!`) : (result.textContent = `Game Ended. You won!`);   
        result.insertAdjacentElement('beforebegin', newGame);}  
})

choice2.addEventListener("click", e => {
    roundNum++;
    computerSelection = computerPlay();

    if( cPoint<5 && uPoint<5 )
    {
        if(computerSelection == 'rock'){
            result.textContent = `Round ${roundNum}: You went with Rock and Computer went with ${computerSelection}. It's a tie!`;
        }

        else if(computerSelection == 'scissors'){
            uPoint = uPoint + 1;
            result.textContent = `Round ${roundNum}: You went with Rock and Computer went with ${computerSelection}. Rock wins!`;
            userscore.textContent = `${uPoint}`;    
        }

        else{
            cPoint = cPoint + 1;
            result.textContent = `Round ${roundNum}: You went with Rock and Computer went with ${computerSelection}. Paper wins!`;
            computerscore.textContent = `${cPoint}`;    
        }
    }
    else{      
        cPoint>uPoint? (result.textContent = `Game Ended. Computer won!`) : (result.textContent = `Game Ended. You won!`);   
        result.insertAdjacentElement('beforebegin', newGame);}  
})

choice3.addEventListener("click", e => {
    roundNum++;
    computerSelection = computerPlay();

    if( cPoint<5 && uPoint<5 )
    {
        if(computerSelection == 'paper'){
            result.textContent = `Round ${roundNum}: You went with Paper and Computer went with ${computerSelection}. It's a tie!`;
        }

        else if(computerSelection == 'scissors'){
            cPoint = cPoint + 1;
            result.textContent = `Round ${roundNum}: You went with Paper and Computer went with ${computerSelection}. Scissor wins!`;
            computerscore.textContent = `${cPoint}`;    
        }

        else{
            uPoint = uPoint + 1;
            result.textContent = `Round ${roundNum}: You went with Paper and Computer went with ${computerSelection}. Paper wins!`;
            userscore.textContent = `${uPoint}`;    
        }
    }
    else{      
        cPoint>uPoint? (result.textContent = `Game Ended. Computer won!`) : (result.textContent = `Game Ended. You won!`);   
        result.insertAdjacentElement('afterend', newGame);}  
})

