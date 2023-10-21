let currentWord = '';
let incorrectGuess = 0;
const maxGuesses = 8;
let correctLetters = [];
/**
 * Calls newWord and resetGame functions.
 * resets the game and generates a new word.
 */
function newGame() {
    newWord();
    resetGame();
}
/**
 * resets the game state back to starting position
 */
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
/**
 * increments the number of wrong guesses by 1 and if the user has guessed incorrectly
 * the maximum number fo times then 
 * @returns loss message
 */
function wrongLetter() {
    incorrectGuess++;
    document.getElementById('hangman-image').innerHTML = `<img src="assets/images/hangmanImg` + incorrectGuess + `.png" alt="Hangman Image">`;
    if (incorrectGuess === maxGuesses) {
        return displayLoss();
    }
}
/**
 * Displays a win message and confirms the word to the user
 */
function displayVictory() {
    document.getElementById('win').style.display = ('flex');
    document.getElementById('win-text').innerHTML = `That right, the word was: ${currentWord}`;
}
/**
 * Displays a loss message and tells the user the worrect word.
 */
function displayLoss() {
    document.getElementById('loss').style.display = ('flex');
    document.getElementById('loss-text').innerHTML = `The word was: ${currentWord}`;
}
/**
 * Chooses a random word for the game from the wordList const in word-list.js doc
 */
function newWord() {
    let { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    $('.hint').html(hint);
    $('.letters').html(word.split('').map(() => `<li class="letter"></li>`).join(''));
}
/**Disables the letters and runs function to check the letter */
$('.keyboard > button').click(function (e) {
    $(this).attr('disabled', true);
    checkLetter(this.innerHTML);
});
/**
 * @param {string} clickedLetter letter chosen by user
 * checks if the clickedLetter is correct or incorrect and runs function as appropriate
 */
function checkLetter(clickedLetter) {
    if (currentWord.includes(clickedLetter)) {
        correctLetter(clickedLetter);
    } else {
        wrongLetter(clickedLetter);
    }
}
/**
 * Displays and hides the hint
 */
$('.hint-title').click(function () {
    $('.hint').toggle('fast');
});
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
newWord();