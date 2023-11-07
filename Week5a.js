// Returns a random number:
let num1 = Math.random();
console.log(num1);

// Returns a random integer from 1 to 11:
let x = Math.floor(Math.random() * 11) + 1;
console.log("The Number is: " + x);
if (x==7 || x==11){
    console.log("Congratulations, you win!");
} else {
    console.log("Sorry, you lost.");
}