newStart();

function newStart() {  //game cycle

    setCred();
    
    function setCred() {   
    
        let credit = 1000; //set start cred
        let bets = 150;
        credit = (credit - bets);
    }

}  //end new start

    function continuePlay() {
   
    console.log("<<<Main Menu>>>");  //prints main menu
    console.log("<1> Spin"); //prints choices 1 or 2
    console.log("<2> Quit");
    
    console.log("               ");
    console.log("               ");  //spaces

    console.log("Bets: " + "$" + bets);
    console.log("Credits: " + "$" + credit);

choice = prompt("Select 1 to Spin, 2 to Quit "); //1 to play, other to quit
    
if (choice == 1) {
    pullLever();  //choose to play or quit
} else {
console.log("You have quit.");
}
    } //end cont play

function pullLever() {  //slot mach funct

let a = Math.floor((Math.random() * 4));
let b = Math.floor((Math.random() * 4));
let c = Math.floor((Math.random() * 4));
let d = Math.floor((Math.random() * 4));

console.log("|" + a + "|" + b + "|" + c + "|" + d + "|");

    if (a == b && a == c && a == d) {  
    console.log("Congratulations, you won!");
    } else {
    calcSlots();
    }
calcSlots();
function calcSlots() { //start calculate winnings

    function firstRet() {
    if (a == 0); {
    firstSlot = 100;
    }
    if (a == 1); {
    firstSlot = 75;
    }
    if (a == 2); {
    firstSlot = 50;
    }
    if (a == 3); {
    firstShot =25;
    }
    return firstSlot;
}
    function secondRet() {
    if (b == 0); {
    secondSlot = 100;
    }
    if (b == 1); {
    secondSlot = 75;
    }
    if (b == 2); {
    secondSlot = 50;
    }
    if (b == 3); {
    secondSlot = 25;
    }
    return secondSlot;
}
    function thirdRet() {
    if (c == 0); {
    thirdSlot = 100;
    }
    if (c == 1); {
    thirdSlot = 75;
    }
    if (c == 2); {
    thirdSlot = 50;
    }
    if (c == 3); {
    thirdSlot = 25;
    }
    return thirdSlot;
}
    function fourthRet() {
    if (d == 0); {
    fourthSlot = 100;
    }
    if (d == 1); {
    fourthSlot = 75;
    }
    if (d == 2); {
    fourthSlot = 50;
    }
    if (d == 3); {
    fourthSlot = 25;
    }
    return fourthSlot; 
} 

let winnings = 0;
let enough = false;

winnings = (credit + firstRet() + secondRet() + thirdRet() + fourthRet());
let credit = (credit + winnings);
if (credit >= 150);
enough = true;

console.log("Winner Paid: " + "$" + winnings);
console.log("Bets: " + "$" + bets);
console.log("Credits: " + "$" + credit);
} //end calc slots
} //end pull lever

do {
    continuePlay();
} while (credit > 150);
console.log("Play Again?");
if (credit < 150) {
console.log("You lose.");
}