class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = '';
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10;
    
  }

  pickWord() {
    let i = Math.floor(Math.random() * (this.words.length))
    this.secretWord = this.words[i]
    return this.secretWord
    
  }

  checkIfLetter(keyCode) {
    if( keyCode <= 'z' && keyCode >= 'a'){
      return true
    } else{
      return false
    } 
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false
    } else{
      return true
    }
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter
    // if(this.secretWord.includes(this.guessedLetters){
    //   return true 
    // }
    // if(this.secretWord.includes(letter)){
    //    this.guessedLetters.push(letter)
    
  }

  addWrongLetter(letter) {
    this.errorsLeft--;
    if(!this.letters.includes(letter)){
    this.letters.push(letter);
    }
    // if(this.letter.includes(letter))
   //push to letters if is not in there
  }

  checkGameOver() {
    if(this.errorsLeft > 0){
      return false
    } else{
      return true
    }
  }

  checkWinner() {
    if(this.secretWord.includes(this.guessedLetters)){
    return true 
    }
    else if(this.secretWord.includes(letter)){
       this.guessedLetters.push(letter)
    }
  }
}
let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
    // console.log(this.secretWord)
    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});


