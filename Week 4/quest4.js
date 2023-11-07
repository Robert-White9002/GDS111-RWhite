var a = 0; //initialize a
var m = "a minor.";   //under 18
var n = "neither a senior nor a minor."; //between 18 and 65
var s = "a senior."; //over 65

a = prompt("Enter your age here:");
if (a <= 18) {
    
playerAge = m;
    console.log("You are " + m); // player is a minor

} else if (a > 65) {
playerAge = s;
console.log("You are " + s);   //player is a senior

}else if ( a < 65) {
    playerAge = n;
    console.log("You are " + n); //neither minor nor senior
}