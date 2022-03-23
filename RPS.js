//Initializes the only choices that the computer can make
const choices = ["Rock", "Paper", "Scissors"];
//const playerselection = document.addEventListener();

//Comes up with a random option for the computer
function computerPlay(choices) {
        const computerchoice = choices[Math.floor(Math.random()* choices.length)];
        return computerchoice;
}

computerselection = computerPlay(choices);
console.log(computerPlay(choices)); 

//Thinking that I can use the integer return of playRound to pick an option from an results array
let results = [
    "It's a tie!", 
    "You win! Scissors beats Paper",
    "You win! Rock beats Scissors", 
    "You win! Paper beats Rock!!", 
    "You lose! Paper beats Rock!!",
    "You lose! Scissors beats Paper!!", 
    "You lose! Rock beats Scissors!!"
]

//This function is to get the user selection
function playerChoice() {
    for (let i = 0; i < 1;) {
    let x = window.prompt("What's your choice? Rock,Paper or Scissors?");
     y = x.toLowerCase();
    console.log(y);
    if (y === "rock" || y === "paper" || y === "scissors") {
        i++
        return y
    }
    else {
        console.log("Please pick one of the three options")
    }
}
}

//function to determine the winner between the player and the computer
function playRound(computerselection, playerselection) {
        let x = computerselection.length; 
        let y = playerselection.length; 
        let z = 0; // This is going to be the return value that picks the message from the results array
        

        if (x == 4) {
            if (y == 4) {
                z = 0;
            }
            else if (y == 5) {
                z = 4;
            }
            else {
                z = 2;
            }
        }
        if (x == 5) {
            if (y == 5) {
                z = 0;
            }
            else if (y == 4) {
                z = 3; 
            }
            else {
                z = 5; 
            }
        }
        if (x == 8) { 
            if (y == 4) {
                z = 6; 
            }
            else if (y == 5) {
                z = 1;
            }
            else {
                z = 0;
            }
        }

        return z

} 

//This is function is going to call playRound 5 times and keep track of the winner. 
function game() {
    let tie = 0;
    let playerWin = 0; 
    let computerWin = 0;
    for (let i = 0; i < 5; i++) {
        computerselection = computerPlay(choices);
        playerselection = playerChoice();
       z = playRound(computerselection, playerselection)
       if (z == 0) {
           tie++
           console.log(results[z]);
       }
       else if (z <= 3) {
           playerWin++
           console.log(results[z]);
       }
       else {
           computerWin++
           console.log(results[z]);
       }
    }

    if (playerWin > computerWin) { 
        console.log("Congrats! You won " + playerWin + " to " + computerWin);
    }
    else if (computerWin > playerWin) { 
        console.log("Sorry, you lost " + playerWin + " to " + computerWin);
    }
    else 
        console.log("It's a tie!!");
     
    console.log("Final score: " + playerWin + " - " + computerWin + " - " + tie + "!");
}

game();

// 3/20/22: To work on, need to write the round(). Also need to come up with an easier way to do a counter. 
//Maybe fixing the array so that all the winning messages are in the front? 
//3/22/22: Finally finished. Added a final score tally and fixed the bugs I saw. Played the game a couple times