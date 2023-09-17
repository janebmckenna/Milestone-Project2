let currentWord = '';

// function newGame();

// function resetGame();

function correctLetter(clickedLetter){
    currentWord.forEach(function(letter, index){
        if (letter === clickedLetter){
            li[index].innerHTML = letter;
        }
    });
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

$('button').click(function(e){
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

// module.exports = newWord;
