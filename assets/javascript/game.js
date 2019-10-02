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
    document.getElementById("animeQuestion").style.cssText = "display:inline";
}


//Round random number down to whole
currentTitleIndex = Math.floor(Math.random() * (animeTitles.length));

console.log(currentTitleIndex);