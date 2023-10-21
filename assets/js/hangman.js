let currentWord = '';
let incorrectGuess = 0;
const maxGuesses = 8;
let correctLetters = [];

function newGame() {
    newWord();
    resetGame();
}

function resetGame() {
    incorrectGuess = 0;
    correctLetters = [];
    document.getElementById('hangman-image').innerHTML = `<img src="assets/images/hangmanImg0.png" alt="Hangman Image">`;
    $('.keyboard > button').attr('disabled', false);
    document.getElementById('win').style.display = ('none');
    document.getElementById('loss').style.display = ('none');
    $('.hint').hide();
}

// /**
//  * 
//  * @param {string} letter letter chosen by the user
//  * @returns victory messge if the letter completes the hangman game
//  */
function correctLetter(letter) {
    for (let i = 0; i <= currentWord.length; i++) {
        if (letter === currentWord.at(i)) {
            document.getElementsByTagName('li')[i].innerHTML = currentWord.at(i);
            let add = correctLetters.push(letter);
        };
    };
    if (correctLetters.length === currentWord.length) {
        return displayVictory();
    }
}

function wrongLetter() {
    incorrectGuess++;
    document.getElementById('hangman-image').innerHTML = `<img src="assets/images/hangmanImg` + incorrectGuess + `.png" alt="Hangman Image">`;
    if (incorrectGuess === maxGuesses) {
        return displayLoss();
    }
}

function displayVictory() {
    document.getElementById('win').style.display = ('flex');
    document.getElementById('win-text').innerHTML = `That right, the word was: ${currentWord}`;
}

function displayLoss() {
    document.getElementById('loss').style.display = ('flex');
    document.getElementById('loss-text').innerHTML = `The word was: ${currentWord}`;
}

function newWord() {
    let { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    $('.hint').html(hint);
    $('.letters').html(word.split('').map(() => `<li class="letter"></li>`).join(''));
}

$('.keyboard > button').click(function (e) {
    $(this).attr('disabled', true);
    checkLetter(this.innerHTML);
});

function checkLetter(clickedLetter) {
    if (currentWord.includes(clickedLetter)) {
        correctLetter(clickedLetter);
    } else {
        wrongLetter(clickedLetter);
    }
}

$('.hint-title').click(function () {
    $('.hint').toggle('fast');
});

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
newWord();
console.log(wordList.length);