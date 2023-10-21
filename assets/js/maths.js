// ----- Listen for the enter key so that the user can use the keypad intead of the mouse ----
document.getElementById('answer-box').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (document.getElementById('answer-box').value == "") {
            console.log('empty answer box');
            alert("Enter your answer please");
            return false;
        } else { checkAnswer(); }
    }
});
runGame();

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
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplicationQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '/';
}

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

function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementLoss() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function resetGame() {
    document.getElementById('score').innerHTML = '0';
    document.getElementById('incorrect').innerHTML = '0';
    runGame();
}

$('.help-button').mouseover(function () {
    $('.help').css('display', 'flex');
});
$('.help-button').mouseout(function () {
    $('.help').css('display', 'none');
});
$('.help-button').on('taphold',(function () {
    $('.help').css('display', 'flex');
    // setTimeout($('.help').css('display', 'none'), 10000);
}));
