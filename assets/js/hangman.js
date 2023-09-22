let currentWord = '';
let wordStatus;
let incorrectGuess = 0;
let maxGuesses = 8;
let correctLetters = [];

function newGame(){
    newWord();
    resetGame();
};

function resetGame(){
    if (document.getElementsByTagName('li').classList.contains(guessed)){
        document.getElementsByTagName('li').classList.remove(guessed);
    };
    document.getElementsByTagName('button').removeAttribute('disabled');
    document.getElementById('hangman-image').innerHTML = `<img src="assets/images/hangmanImg0.png" alt="Hangman Image">`;
};

function correctLetter(letter){
    for (let i =0; i<= currentWord.length; i++){
        if (letter === currentWord.at(i)) {
            console.log(currentWord.at(i));
            document.getElementsByTagName('li')[i+5].innerHTML = currentWord.at(i);
            document.getElementsByTagName('li')[i+5].classList.add('guessed');
            let add = correctLetters.push(letter);
            continue;
        };
    };
    console.log(correctLetters);
    if (correctLetters.length === currentWord.length) return displayVictory();
};

function wrongLetter(){
    incorrectGuess++;
    console.log(incorrectGuess);
    document.getElementById('hangman-image').innerHTML = `<img src="assets/images/hangmanImg` + incorrectGuess +`.png" alt="Hangman Image">`;
    if (incorrectGuess === maxGuesses) return displayLoss();
};

// function displayVictory();

// function displayLoss();

// function gameOver(){
//     if (true){
//         displayVictory();
//     } else if (false){
//         displayLoss();
//     };
// };

function newWord(){
    let {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    currentWord = word;
    $('.hint').html(hint);
    $('.letters').html(word.split('').map(() => `<li class="letter"></li>`).join(''));
};
newWord();

// function letterChoice();

$('.keyboard > button').click(function(e){
    $(this).attr('disabled', true);
    checkLetter(this.innerHTML);
})

function checkLetter(clickedLetter){
   if(currentWord.includes(clickedLetter)){
    console.log(clickedLetter, 'is in the word');
    correctLetter(clickedLetter);
   } else {
    console.log(clickedLetter, 'is not in the word');
    wrongLetter(clickedLetter);
   }
};