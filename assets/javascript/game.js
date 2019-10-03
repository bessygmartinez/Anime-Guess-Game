//List of anime titles to choose from
let animeTitles = [
    "Naruto",
    "Neon Genesis Evangelion",
    "Attack on Titan",
    "The Rising of the Shield Hero",
    "One Piece",
    "Sailor Moon",
    "Made in Abyss",
    "My Hero Academia",
    "Fullmetal Alchemist",
    "Dragon Ball Z",
    "Samurai Champloo",
    "Goblin Slayer",
];

console.log(animeTitles);

//Maximum number of guesses
const maxGuesses = 10;

//Letters guessed by the player
let guessedLetters = [];

//Index of current title in the array
let currentTitleIndex;

//Title to build current title
let guessingTitle = [];

//The amount of guesses the player has left
let remainingGuesses = 0;

//Amount of wins the player has scored
let wins = 0;

//Selects random index in the array
currentTitleIndex = Math.floor(Math.random() * (animeTitles.length));

//Pushes "_" for every letter of random index in the array
for (var i = 0; i < animeTitles[currentTitleIndex].length; i++) {
    guessingTitle.push(" _");
}

console.log(currentTitleIndex);
console.log(guessingTitle);

//function to update the display on the HTML document
function updateDisplay () {
    document.getElementById("totalWin").innerText = wins;
    document.getElementById("currentTitle").innerText = "";
    for (var i =0; i < animeTitles[currentTitleIndex].length; i++) {
        document.getElementById("currentTitle").innerText += guessingTitle[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText =  guessedLetters;
    if (remainingGuesses <= 0) {
        document.getElementById("tryAgain").style.cssText = "display: block";
    }
}

//Game Over screen
function gameOver() {
    remainingGuesses = maxGuesses;
    document.getElementById("animeQuestion").style.cssText = "display: none";
    document.getElementById("pressKey").style.cssText = "display: block";
    document.getElementById("tryAgain").style.cssText= "display: block";
    document.getElementById("gameOverImg").style.cssText = "display: block";
    document.getElementById("youWinImg").style.cssText = "display: none";
}

