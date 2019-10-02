//List of anime titles to choose from
let animeTitles = [
    "Naruto",
    "Pokemon",
    "Attack on Titan",
    "Rise of the Shield Hero",
    "One Piece",
    "Sailor Moon",
    "Made in Abyss",
    "My Hero Academia",
    "Fullmetal Alchemist",
    "Dragon Ball Z",
    "Samurai Champloo",
];

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

//To tell if game has started
let gameStarted = false;

//For "Press any key to try again"
let hasFinished = false;

//Amount of wins the player has scored
let wins = 0;

//Resets game stats
function resetGame() {
    remainingGuesses = maxGuesses;
    gameStarted = false;
}

//Round random number down to whole
currentTitleIndex = Math.floor(Math.random() * (animeTitles.lenth));

//Clears the arrays
guessedLetters = [];
guessingTitle = [];

//Building of the title being guessed and clears it out
for (var i = 0; i < animeTitles[currentTitleIndex].length; i++) {
    guessingTitle.push("_");
}

//Hides game over or win images/text
document.getElementById("tryAgain").style.cssText = "display: none";
document.getElementById("gameOverImg").style.cssText = "display: none";
document.getElementById("youWinImg ").style.cssText = "display: none";

//To update display on the HTML
function updateDisplay() {
    document.getElementById("totalWin").innerText = wins;
    document.getElementById("currentTitle").innerText = "";
    for (var i = 0; i < guessingTitle.lenth; i++) {
        document.getElementById("currentTitle").innerText += guessingTitle[i];
    }
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;
    if(remainingGuesses <= 0) {
        document.getElementById("gameOverImg").style.cssText = "display: block";
        document.getElementById("tryAgain").style.cssText = "display: blcok";
        hasFinished = true;
    }
};

//Display
updateDisplay();