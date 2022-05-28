//Initializes the only choices that the computer can make
const choices = ["Rock", "Paper", "Scissors"];
//const playerselection = document.addEventListener();

//Comes up with a random option for the computer
function computerPlay(choices) {
    const computerchoice = choices[Math.floor(Math.random()* choices.length)];
    return computerchoice;
}

//Going to create global variables that I can use for a win tally

var count = 0;
var CWin = 0; 
var PWin = 0;
var pcTie = 0; //p(layer)c(omputer)Tie

//This is the game function. When the user pushes the button it takes the event
//and compares it the value it gets from the computerPlay function
function game_new(e) {
    const computer = computerPlay(choices); 

    tally.textContent = "";
    //console.log(e.target); 
    console.log(computer);
    player = e.target.id; //Assigns the user input to a value. 
    //e.target.id puts out the id of the button or more specifically the target
    //of the event
    //alert(player);
    //Going to compare the event with the computer option
    
    //Player picks rock
    if (player == "Rock" && computer == "Rock"){
        pcTie = pcTie + 1; 
    }
    else if (player == "Rock" && computer == "Scissors") {
        PWin = PWin + 1; 
    }
    else if (player == "Rock" && computer == "Paper"){
        CWin = CWin + 1;
    }
    
    //Player picks paper 
    else if (player == "Paper" && computer == "Rock") {
        PWin++;
    }
    else if (player == "Paper" && computer == "Scissors") {
        CWin++;
    }
    else if (player == "Paper" && computer == "Paper") {
        pcTie++;
    }

    //Player picks scissors 
    else if (player == "Scissors" && computer == "Rock") { 
        CWin++;
    }
    else if (player == "Scissors" && computer == "Scissors") { 
        pcTie++; 
    }
    else if (player == "Scissors" && computer == "Paper") { 
        PWin++;
    }

    console.log("Count:" + PWin + " to " + CWin + " to " + pcTie);
    tally.textContent = "Player Score: " + PWin + " Computer Score: " + CWin + " Ties: " + pcTie; 
    count++;
    //This stops the game when either player, the computer gets to 5 points. Or if there are 5 ties.
    if (PWin == 5 || CWin == 5 || pcTie == 5) {
        if (PWin > CWin){
            alert("Game over! Congrats, You Won!!")
        }
        else if (PWin < CWin){
            alert("Game over! Sorry you lost!!")
        }
        else {
            alert("Game over! It's a tie!!")
        }
        count = 0;
        CWin = 0; 
        PWin = 0; 
        pcTie = 0;
    }
    console.log(count);
}

//5/14/22: The below is the first attempt at creating a tally.
//It shows the count and updates with each click.
const container = document.querySelector("#container");
const tallyscreen = document.createElement("div");
    tallyscreen.style.cssText = "background: yellow; border-style: solid;";
const tally = document.createElement('p');
    tally.style.color = "blue";
   // tally.textContent = "Count: " + PWin + " to " + CWin + " to " + pcTie;
    tallyscreen.appendChild(tally);
container.appendChild(tally);

const buttons = document.querySelectorAll('button');
 
buttons.forEach(buttons => { 
buttons.addEventListener('click', game_new);
}); 

