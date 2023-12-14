var winnerPaid = 0;
var playerBets = 0;
var playerCredit = 1000; 


function checkCredits() {
   //check if credits are at least 150
}

function calculateBets () {
  // increment bets from 0 

}

function addTotal () {

   //add total amount earned for each spin  a + b + c + d
}

function calculateCredits() {
   
   // playerCredit = add winnings and/or subtract lose to exitsting credits
}


function spinWheel() {   //return random whole number 0-3
    let a = Math.floor((Math.random() * 3) + 1);
    let b = Math.floor((Math.random() * 3) + 1);
    let c = Math.floor((Math.random() * 3) + 1);
    let d = Math.floor((Math.random() * 3) + 1);
console.log((a) + "|" + (b) + "|" + (c) + "|" + (d));
}

function winGame() {
    let gameOver = false;  //initialize
    if ( a == b && a == c && a == d ) {   //if all numbers match, player wins
    gameOver = true;
    }
    }

function mainMenu() {
    console.log("<<<Main Menu>>>");  //prints main menu
    console.log("<1> Spin"); //prints choices 1 or 2
    console.log("<2> Quit");
    
    
    console.log("Winner Paid: " +"$" + winnerPaid);
    console.log("Bets: " + "$" + playerBets);
    console.log("Credits: " + "$" + playerCredit);
}

//gameplay

let choice = 0;

do {
mainMenu();
choice = prompt("Select 1 to Play, 2 to Quit "); //1 to play, other to quit
} while (!winGame);
if (choice == 1) {
spinWheel();

} else {
console.log("You have quit.");
}

//check for wingame or prompt again