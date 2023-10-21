// ----- Listen for the enter key so that the user can use the keypad intead of the mouse ----
document.getElementById('answer-box').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (document.getElementById('answer-box').value === "") {
            console.log('empty answer box');
            alert("Enter your answer please");
            return false;
        } else { checkAnswer(); }
    }
});
runGame();
/** RUNS A NEW GAME 
 * Calculates a random number between 1 and 4 to choose the game type. Runs this game function.
 * Calculates two random numbers between 1 and 25 and a third which is the 
 * product of multiplying the 1st and 2nd numbers to be the operators for the game.
 * Resets the win or loss display to be hidden and clears the answer box.*/
function runGame() {
    let gameType = Math.floor(Math.random() * 4) + 1;
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    let num3 = num1 * num2;
    document.getElementById('win').style.display = ('none');
    document.getElementById('loss').style.display = ('none');
    document.getElementById('answer-box').value = '';

    if (gameType === 1) {
        displayAdditionQuestion(num1, num2);
    }
    else if (gameType === 2) {
        displayMultiplicationQuestion(num1, num2);
    }
    else if (gameType === 3) {
        displaySubtractionQuestion(num1, num2);
    }
    else if (gameType === 4) {
        displayDivisionQuestion(num3, num2);
    }
    else {
        alert(`Unknown game type: ${gameType}`);
    }
}
// ----- Display the game -----
/**
 * Uses the random numbers generated in New game and displays them with the addition symbol
 * @param {number} operand1 
 * @param {number} operand2 
 */
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}
/**
 * Uses the random numbers generated in New game and displays them with the subtraction symbol
 * @param {number} operand1 
 * @param {number} operand2 
 */
function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}
/**
 * Uses the random numbers generated in New game and displays them with the multiplication symbol
 * @param {number} operand1 
 * @param {number} operand2 
 */
function displayMultiplicationQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}
/**
 * Uses the sum of the numbers generated in New game displays that as the first operator, 
 * the division symbol and the second number generated in new game.
 * @param {number} operand1 
 * @param {number} operand2 
 */
function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '/';
}
/**
 * Calls the calculate answer function, compares the users answer. If they are strictly equal
 * returns win display which times out after 2 seconds if they are not strictly equal 
 * returns loss display which times out after 2 seconds.
 */
function checkAnswer() {
    let answer = parseInt(document.getElementById('answer-box').value);
    let correctAnswer = calculateAnswer();
    let isCorrect = answer === correctAnswer;
    if (isCorrect) {
        document.getElementById('win').style.display = ('flex');
        incrementScore();
        setTimeout(runGame, 2000);
    } else {
        document.getElementById('loss').style.display = ('flex');
        document.getElementById('loss-text').innerHTML = `The correct answer was: ${correctAnswer}`;
        incrementLoss();
        setTimeout(runGame, 2000);
    }
}
/**
 * Calculates the correct answer based on the operator
 * @returns correct answer to the maths question
 */
function calculateAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return (operand1 + operand2);
    } else if (operator === 'x') {
        return (operand1 * operand2);
    }
    else if (operator === '-') {
        return (operand1 - operand2);
    }
    else if (operator === '/') {
        return (operand1 / operand2);
    }
}

// ----- Change the displayed score ----
/**
 * Increases the correct score by 1 when answer is correct
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}
/**
 * Increases the incorrect answers by 1 when the answer is incorrect.
 */
function incrementLoss() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}
/**
 * resets the score tallys to zero
 */
function resetGame() {
    document.getElementById('score').innerHTML = '0';
    document.getElementById('incorrect').innerHTML = '0';
    runGame();
}
/**Display parameters for Help based on device width */
let deviceWidth = window.innerWidth;
if (deviceWidth > 990) {
    $('.help-button').mouseover(function () {
        $('.help').css('display', 'flex');
    });
    $('.help-button').mouseout(function () {
        $('.help').css('display', 'none');
    });
} else {
    $('.help-button').click(function () {
        $('.help').css('display', 'flex');
        setTimeout(function () { $('.help').css('display', 'none'); }, 10000);
    });
}
