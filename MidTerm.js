var a = 0; //initialize a
var l = "Loading Game..."; //1
var s = "Saving status..."; //2
var p = "Lets Play!"; //3
var h = "Heres Your Help"; //4
var q = "Game Over!"; //5
var e = "Invalid Entry"; //over 5

a = prompt("1-Load 2-Save 3-Play 4-Help 5-Quit Make a selecion.");
if (a == 1) {
    playerChoice = l;
    console.log(playerChoice);     
} else if (a == 2) {
    playerChoice = s;
    console.log(playerChoice);    
} else if (a == 3) {
    playerChoice = p;
    console.log(playerChoice);
} else if (a == 4) {
    playerChoice = h;
    console.log(playerChoice);
} else if (a == 5) {
    playerChoice = q;
    console.log(playerChoice);
} else {
    playerChoice = e; //Error 
console.log(playerChoice);
}