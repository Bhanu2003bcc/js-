const prompt = require('prompt-sync')() 
//Exercise 1: Guess the Number
function guessNumber() {

    const random = Math.floor(Math.random() * 100) + 1;
    let number = parseInt(console.log(' Welcome, The grand Number Guessing Game '));

    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 100: '));
        if(number < random)  console.log("Oooo! Tumhara to bahot chota h")
        
        else if(number > random ) console.log("Ufffff! kitna badaa h")
        
        else console.log(' Congratulations 🎉, You guessed the correct number.');
        
    }
}

guessNumber()