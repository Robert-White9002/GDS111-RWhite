var a = 0; //initialize a
var L = "Load"; // 1
var S = "Save"; // 2
var P = "Play"; // 3
var H = "Help"; // 4
var Q = "Quit"; // 5
var E = "Error"; // over 5
var E = "Error"; // under 0

a = prompt("Make a Selection:");
if (a = 1) {
    selection = L;
    console.log( L); // Load
    
} else if (a = 2 ) {
    selection = S;
    console.log( S);  // Save
    
} else if (a = 3 ) {
    selection = P;
    console.log( P);   // Play

} else if (a = 4 ) {
    selection = H;
    console.log( H);   //Help

} else if (a = 5 ) {
    selection = Q;
    console.log( Q);   // Quit

} else if (a => 6 ) {
error = E;
console.log(E);   // Error

}else if ( a <= 0 ) {
    error = E;
    console.log(E); // Error
}