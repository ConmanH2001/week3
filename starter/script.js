// 🧠 Starter Word Guess Game — Keyboard Input Ready

// Word bank
var words = ["javascript", "array", "loop", "variable", "string", "function"];

// Randomly select one word from the list
var chosenWord = words[Math.floor(Math.random() * words.length)];

// Track guessed letters and remaining attempts
var guessedLetters = [];
var attempts = 10;

// Log the chosen word for debugging
console.log("Chosen word:", chosenWord);

// 🎮 Function students will build next
let maskedWord = document.getElementById("maskedWord");
let guesses = document.getElementById("guessedLetters");
let attemptsCount = document.getElementById("attempts")
let winLoseDiv = document.createElement("div").classList.add("win-lose-div");
let winLoseP = document.createElement("p")
let retryButton = document.createElement("button");
let gameCard = document.getElementById("gameCard");
let bodyEl = document.body;

gameOver = false

function wordHiding(word){
  let hiddenWord = ""
  for (let i = 0; i < word.length; i++){
    hiddenWord = hiddenWord + "_"
    console.log(i)
    console.log(hiddenWord)
  }
  return hiddenWord
}
maskedWord.textContent = wordHiding(chosenWord);
let blockedWord = maskedWord.textContent

function startGame(letter) {
  console.log(`You pressed: ${letter}`);
  // TODO:
  // 1️⃣ Build a masked string using underscores for letters not yet guessed.
  // 2️⃣ Track guessed letters and remaining attempts.
  // 3️⃣ Detect win or loss and display a message.
  // 4️⃣ (Bonus) Show guessed letters and progress dynamically in the console or DOM.
}

function correctGuessProcess(letter){
  let splitUpBlocked = blockedWord.split("");
  console.log(splitUpBlocked);
  let splitUpChosen = chosenWord.split("");
  console.log(splitUpChosen);
  for (let i = 0; i < splitUpBlocked.length;i++){
    if (splitUpChosen[i] === letter){
      splitUpBlocked[i] = letter;
      console.log(splitUpBlocked)
    } else {
      console.log(splitUpBlocked)
    }
  }
  let rejoinedBlocked = splitUpBlocked.join("");
  console.log(rejoinedBlocked);
  blockedWord = rejoinedBlocked;
}

function guessingProcess(letter){
  if (gameOver === false){
    if (guessedLetters.includes(letter)){
      console.log("You guessed that!");
    } else {
      if (!chosenWord.includes(letter)){
        console.log("WRONG");
        attempts = attempts - 1;
        attemptsCount.textContent = attempts
      } else {
        correctGuessProcess(letter);
      }
      guessedLetters.push(letter);
      guesses.textContent = guessedLetters;
      maskedWord.textContent = blockedWord
    }
  }
}

winLoseP.textContent = "";

let retryButtonStyle = document.querySelector("retryButton")
retryButton.style.width = "200px"
retryButton.style.backgroundColor;
retryButton.style.height = "30px";
retryButton.style.border = "none";
retryButton.style.borderRadius="20px";
retryButton.innerText = "Retry?"

retryButton.addEventListener("click", ()=>{
  window.location.reload()
})


gameCard.append(winLoseP);
gameCard.append(retryButton);

// ⌨️ Listen for keyboard input when the page loads
window.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();

  // Only process alphabetic letters (ignore Shift, Enter, etc.)
  if (key.match(/^[a-z]$/)) {
    if (attempts === 0){
      winLoseP.innerText = 'YOU LOSE'
      gameOver = true;
    }
    startGame(key);
    guessingProcess(key)
    

  } else {
    console.log("Please press a valid letter (A–Z).");
  }
 if(maskedWord.textContent===chosenWord){
      gameOver = true;
      console.log("WINNER");
      winLoseP.innerText = "YOU WIN";
      //replace this with a div that says you win and asks to play again 
 }
});

