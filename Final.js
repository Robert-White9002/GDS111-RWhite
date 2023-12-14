let x = Math.floor((Math.random() * 100) + 1);
const answer = [x];
answer.push; //put secrt number in array

console.log(" Guess the Number Game: Must be between 1 and 100");

function fiveGuesses() {

let guess = 0;

do {
guess = Number(prompt ("Guess the number?"));
console.log("You guessed " + guess);

let text = " ";
for (i = 0; i < 5; i++) {
    if  (i === 5) {break;}
text += (text + i);
}

let win = false;

if (guess == x) {  //right answer
    win = true;
    console.log("Hooray! Your guessed in" + i + "attempts!");
}
if (guess < x) { //guessed too high
    win = false;
    console.log(" Your guess " + guess + " is too low - try again.");
    guess = prompt ("Guess the Number?");
}
if (guess > x) {
    win = false;
    console.log(" Your guess " + guess + " is too high - try again.");
    guess = prompt ("Guess the Number?");
}
 } while (i <= 5);
 console.log("Try Again.");
 fiveGuesses();

if (i < 5);
 console.log('Sorry, you lose.');
}
