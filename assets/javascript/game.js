// Create a library of anime titles and images
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
    }
   
]

//Variables
var letters;
var guessesRemaining;
var wins;
var losses;
var underscores;
var guessedLetters;
var individualMainInfo;
var randomme;
var animeName;
var connector;
var instruction;
var directionsText;

// create a variable to pause the screen after winning and wait for user to click for the next game
var pauseWinLoss;



// Fired when page loads
window.onload = function () {

    // Wins and Losses start at 0
    wins = 0;
    losses = 0;

    // When the page is loaded, the screen doesn't need to pause at winning
    pauseWinLoss = false;
    
    reset();
}

// When player types a key, the functions fire
document.onkeyup = function (event) {

    // userGuess stores the key that is being clicked.
    var userGuess = event.key;

    directionsText = document.getElementById("pressKey");
    directionsText.textContent = "";

    // pauseWinLoss is true when the screen pauses to wait for user's input (click) for the next game
    // .onkeyup triggers pauseWinLoss
    if(pauseWinLoss){
        // check if pauseWinLoss is true
        // if true, start a new game 
        reset();

        // set pauseWinLoss to false so that user can continue playing game
        // if pauseWinLoss is true, user will start a new game for every key pressed.
        pauseWinLoss = false;

        // to hide the instruction after the game starts
        instruction = "";
        document.getElementById("pressKey").innerHTML = instruction;

        // exit out of the function
        // or else without 'return', it will continue with the code below
        // which means if the user click any key it will register to the next game
        return;
    }
    

    // check if userGuess is an alphabet
    // /i means case insensitive
    if (userGuess.match(/[a-z]/i)) {
        // guessedLetters is an array containing strings
        // index of -1 means that if userGuess does not match any letter in guessedLetter
        if (guessedLetters.indexOf(userGuess) === -1) {
            // if the letter is not already there in guessedLetter, add userGuess's letter into the array 
            // this is also to prevent the same letter being recorded twice 
            guessedLetters.push(userGuess);
            // guessRemaining reduces by one
            //guessesRemaining--;
        }
        
        // if 'userGuess' equals to 'letters' at index i, assign 'letters' at index i to 'underscore' at the same location
        // to replace 'underscore' at index i with the correct character
        for (var i = 0; i < letters.length; i++) {
            if (userGuess.toLowerCase() === letters[i].toLowerCase()) {
                underscores[i] = letters[i];
            }
        }

        // if user guesses title correctly
        if (underscores.toString() === letters.toString()) {
            // display anime image
            animeImage = individualMainInfo.image;
            document.getElementById("imageHTML").setAttribute("src", animeImage);

            // display anime name
            animeName = individualMainInfo.anime;
            document.getElementById("animeTitle").innerHTML = animeName;

            // display the instruction below
            instruction = "Press any key to start";
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

            // display anime name
            animeName = individualMainInfo.anime;
            document.getElementById("animeTitle").innerHTML = animeName;

            // display the instruction below
            instruction = "Press any key to start";
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
            updateFields()
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
    randomAnime = individualMainInfo.anime

    // split the anime name into letter
    letters = randomAnime.split(""); // empty string ""
    
    // .slice creates a copy of var letters under var underscores at different location in memory aka two separate locations for two var's. 
    //The original array (var letters) will not be modified when var underscores is modified. 
    underscores = letters.slice();

    // Change the character in underscores array into underscore "_"
    for (var i = 0; i < underscores.length; i++) {
        var character = underscores[i];

        // Check if the character is an alphabet 
        // if true, replace character at index i with underscore "_"
        if (character.match(/[a-z]/i)) {
            underscores[i] = "_";
        }
    }


    guessesRemaining = 10;

    // start with empty array
    guessedLetters = [];

    updateFields();

    // reset anime image
    animeImage = individualMainInfo.image;
    document.getElementById("imageHTML").setAttribute("src", "assets/images/animegirl_questionmark.png");

    // erase me anime name
    animeName = "";
    document.getElementById("animeTitle").innerHTML = animeName;
}