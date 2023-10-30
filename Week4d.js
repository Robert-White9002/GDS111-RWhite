let fName = "Larry"; // variables are case-sensitive
let age = 22;
let salary = 40000.00
let employed = true;

console.log(fName + " is " + age + " years old.");
console.log(" He is making " + salary + " annually.");
console.log(typeof fName);
console.log(typeof age);
console.log(typeof salary);
console.log(typeof employed);

fName = 77;
console.log("fName = " + fName)
console.log(typeof fName);

const player = ["Mario", "Luigi", "pikachu", "Peach"]; //declares array
for (let i = 0; i < 4; i++) { //initalize i, set less than 4, increment i
    console.log(player[i]); //console prints players until it does 4
}

