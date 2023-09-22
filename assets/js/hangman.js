let currentWord = '';
let wordStatus;

function newGame(){
    newWord();
};

// function resetGame();

function correctLetter(letter){
    for (let i =0; i<= currentWord.length; i++){
        if (letter === currentWord.at(i)) {
            console.log(currentWord.at(i));
            document.getElementsByTagName('li')[i+5].innerHTML = currentWord.at(i);
            document.getElementsByTagName('li')[i+5].classList.add('guessed');
            continue;
        };
    };
};

// function wrongLetter();

// function displayVictory();

// function displayLoss();

// function gameOver();

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