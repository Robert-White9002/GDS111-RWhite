for (let i = 0; i < 5; i++) {  //assign i as zero, see if it's less than 5, then increase by 1
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    console.log("Are we there yet?");
}

let text = "";
let i =0;
do {
    text =text + i + "<br>";
    i++;
}
while (i < 5);
console.log(text);

let j=0;
while (j < 3) {
    console.log("The number is " + j);
    j++;
}