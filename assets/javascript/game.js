// Anime titles and images
let animeInfo = [
    {
        anime: "Naruto",
        image: "assets/images/naruto.jpg",
    },
    {
        anime: "Neon Genesis Evangelion",
        image: "assets/images/evangelion.jpg",
    },
    {
        anime: "Attack on Titan",
        image: "assets/images/attackontitan.jpg",
    },
    {
        anime: "The Rising of the Shield Hero",
        image: "assets/images/shieldhero.jpg",
    },
    {
        anime: "One Piece",
        image: "assets/images/onepiece.jpg",
    },
    {
        anime: "Sailor Moon",
        image: "assets/images/sailormoon.jpg",
    },
    {
        anime: "Made in Abyss",
        image: "assets/images/madeinabyss.jpg",
    },
    {
        anime: "My Hero Academia",
        image: "assets/images/myheroacademia.jpg",
    },
    {
        anime: "Fullmetal Alchemist",
        image: "assets/images/fullmetalalchemist.jpg",
    },
    {
        anime: "Dragon Ball Z",
        image: "assets/images/dragonballz.jpg",
    },
    {
        anime: "Samurai Champloo",
        image: "assets/images/samuraichamploo.jpg",
    },
    {
        anime: "Goblin Slayer",
        image: "assets/images/goblinslayer.jpg",
    },
    {
        anime: "Sword Art Online",
        image: "assets/images/SAO.jpg",
    },
    {
        anime: "The Seven Deadly Sins",
        image: "assets/images/sevendeadlysins.jpg",
    },
    {
        anime: "Yuri On Ice!!",
        image: "assets/images/yurionice.jpg",
    },
    {
        anime: "The Ancient Magus' Bride",
        image: "assets/images/ancientmagus.jpg",
    },
    {
        anime: "Death Note",
        image: "assets/images/deathnote.jpg",
    },
    {
        anime: "Cowboy Bebop",
        image: "assets/images/cowboybebop.jpg",
    },
    {
        anime: "Steins;Gate",
        image: "assets/images/steinsgate.jpg",
    },
    {
        anime: "Psycho-Pass",
        image: "assets/images/psychopass.jpg",
    },
    {
        anime: "Parasyte -the maxim-",
        image: "assets/images/parasyte.jpg",
    },
]

//Variables
let letters;
let guessesRemaining;
let wins;
let losses;
let underscores;
let guessedLetters;
let individualMainInfo;
let animeName;
let connector;
let instruction;
let directionsText;

// Pauses screen and waits for player to press key
let pauseWinLoss;


// Fired when page loads
window.onload = function () {

    // Wins and Losses start at 0
    wins = 0;
    losses = 0;

    // When page loads, the game doesn't need to be paused.
    pauseWinLoss = false;
    
    reset();
}

    directionsText = document.getElementById("pressKey");
    directionsText.textContent = "Press any key to start!";

    //Gets link for audio
    const youWinAudio = new Audio ("assets/sounds/you-win-fanfare.mp3");
    const youLoseAudio = new Audio ("assets/sounds/you-lose-sound.mp3");

// When player types a key, the functions fire
document.onkeyup = function (event) {

    // stores key that player presses
    let userGuess = event.key;

    directionsText = document.getElementById("pressKey");
    directionsText.textContent = "";

    // if pauseWinLoss is true, game will reset
    if(pauseWinLoss){
        reset();

        youWinAudio.pause();
        youWinAudio.currentTime = 0;

        youLoseAudio.pause();
        youLoseAudio.currentTime =0;

        // set pauseWinLoss to false so that player can continue playing
        pauseWinLoss = false;

        // Hides "Press any key" when game begins
        instruction = "";
        document.getElementById("pressKey").innerHTML = instruction;

        // exit function
        return;
    }
    

    // Checks for alpha characters
    if (userGuess.match(/[a-z]/i)) {

        // index of -1 means that if userGuess does not match any letter in guessedLetter...
        if (guessedLetters.indexOf(userGuess) === -1) {

            // if the letter wasn't already pressed, the player's letter goes into the array and prevents repeat
            guessedLetters.push(userGuess);

            // Remaining guesses goes down by one
            guessesRemaining--;
        }
        
        // if 'userGuess' equals to 'letters' at index i, assign 'letters' at index i to 'underscore' at the same location
        // to replace 'underscore' at index i with the correct character
        for (let i = 0; i < letters.length; i++) {
            if (userGuess.toLowerCase() === letters[i].toLowerCase()) {
                underscores[i] = letters[i]
            }
        }

        // if user guesses title correctly...
        if (underscores.toString() === letters.toString()) {

            // display anime image
            animeImage = individualMainInfo.image;
            document.getElementById("imageHTML").setAttribute("src", animeImage);
            document.getElementById("youWin").style.cssText = ("display:block;");

            // display anime name
            animeName = individualMainInfo.anime;
            document.getElementById("animeTitle").innerHTML = animeName.toUpperCase();
            youWinAudio.play();

            // display the instruction below
            instruction = "Great job! Press any key to play again!";
            document.getElementById("pressKey").innerHTML = instruction;
            
            // increment win by 1
            wins++;
            
            // pause the screen
            // wait for user's input to trigger reset
            pauseWinLoss = true;

            // update HTML elements for the user to see
            updateFields();
        
            // if guessesRemaining  === 0 before the word is correctly guessed
        } else if (guessesRemaining === 0) {
            // the following display commands/code is to show the answer to the user when lost
            // display anime image
            animeImage = individualMainInfo.image;
            document.getElementById("imageHTML").setAttribute("src", animeImage);
            document.getElementById("gameOver").style.cssText = ("display: block;");
            youLoseAudio.play();

            // display anime name
            animeName = individualMainInfo.anime;
            document.getElementById("animeTitle").innerHTML = animeName.toUpperCase();

            // display the instruction below
            instruction = "Too bad. Press any key to try again!";
            document.getElementById("pressKey").innerHTML = instruction;

            // increment losses by 1
            losses++;

            // pause the screen
            // wait for user's input to trigger reset
            pauseWinLoss = true;

            // update HTML elements for the user to see
            updateFields();

            // if start a new game
            //reset();

            // have not won or lost 
            // update fields so that the user can see
            // e.g. the Letter Already Guessed
        } else {
            updateFields();
        }
    } 
}

// to update HTML elements on the screen so that the user can see them
// for example:  if the user wins, wins will increase by 1, and this function updates the field on the HTML for the user to see. 
function updateFields() {
    // "&nbsp;" is a space 
    // .join: character in underscore array seperated a by space
    document.getElementById("currentTitle").innerHTML = underscores.join("&nbsp;");
    document.getElementById("totalWin").innerHTML = wins;
    document.getElementById("totalLosses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = guessesRemaining;
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    
}


// to start a new game
function reset () {
    
    // animeInfo.length = the number anime in the library
    // Math.floor * animeInfo.length: anime index from 0 to (animeInfo.length - 1)

    individualMainInfo = animeInfo[Math.floor(Math.random() * animeInfo.length)];

    // anime name for the random anime
    randomAnime = individualMainInfo.anime;

    // split the anime name into letter
    letters = randomAnime.split(""); // empty string ""
    
    // .slice creates a copy of var letters under var underscores at different location in memory aka two separate locations for two var's. 
    //The original array (var letters) will not be modified when var underscores is modified. 
    underscores = letters.slice();

    // Change the character in underscores array into underscore "_"
    for (let i = 0; i < underscores.length; i++) {
        let character = underscores[i];

        // Check if the character is an alphabet 
        // if true, replace character at index i with underscore "_"
        if (character.match(/[a-z]/i)) {
            underscores[i] = "_";
        }
    }
    

    guessesRemaining = 15;

    // start with empty array
    guessedLetters = [];

    updateFields();

    // reset anime image
    animeImage = individualMainInfo.image;
    document.getElementById("imageHTML").setAttribute("src", "assets/images/animegirl_questionmark.png");
    document.getElementById("youWin").style.cssText = ("display:none;");
    document.getElementById("gameOver").style.cssText = ("display:none;");
    document.getElementById("pressAZ").style.cssText = ("display:none;");

    // erase me anime name
    animeName = "";
    document.getElementById("animeTitle").innerHTML = animeName;
}