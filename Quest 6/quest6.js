console.log("Main Menu Bar");
console.log("1. Change Actions");
console.log("2. Button Layout");
console.log("3. Keybindings");
console.log("4. On Event Scripts");
console.log("5. Main Menu Bar");
console.log("6. Misc Options");
console.log("7. Unlock Dragging");
console.log("8. Show Button IDs");
console.log("9. Show Action IDs");
console.log("10. COPY");
console.log("11. PASTE");

console.log("Select a Number:")

var a = 0;  //initialize a

a = prompt("Select a Number");

if (a == 1) {
    changeActions();
    alert("Processing Change Actions");
}
else if (a == 2) {
    buttonLayout();
    alert("Processing Button Layout");
}
else if (a == 3) {
    keyBindings();
    alert("Processing Key Bindings");
}
else if (a == 4) {
    onEventScripts();
    alert("Processing On Event Scripts");
}
else if (a == 5) {
    mainMenuBar();
    alert("Processing mainMenuBar");
}
else if (a == 6) {
    miscOptions();
    alert("Processing Misc Options");
}
else if (a == 7) {
    unlockDragging();
    alert("Processing Unlock Dragging");
}
else if (a == 8) {
    showButtonIDs();
    alert("Processing Show Button IDs");
}
else if (a == 9) {
    showActionIDs();
    alert("Processing Action Ids");
}
else if (a == 10) {
    copy();
    alert("Processing Copy");
}
else if (a == 11) {
    paste();
    alert("Processing Paste");
} 
else if (a == 0) {
    theEnd();
    alert("The End");
}

//functions 1-11
function changeActions() {
    console.log("I'm inside Change Actions function.");
}
function buttonLayout() {
    console.log("I'm inside Button Layout function.");
}
function keyBindings() {
    console.log("I'm inside Key Bindings function.");
}
function onEventScripts() {
    console.log("I'm inside On Event Scripts function.");
}
function mainMenuBar() {
    console.log("I'm inside Main Menu Bar function.");
}
function miscOptions() {
    console.log("I'm inside Misc Options function.");
}
function unlockDragging() {
    console.log("I'm inside Unlock Dragging function.");
}
function showButtonIDs() {
    console.log("I'm inside Show Button IDs function.");
}
function showActionIDs() {
    console.log("I'm inside Show Action Ids function.");
}
function copy() {
    console.log("I'm inside Copy function.");
}
function paste() {
    console.log("I'm inside Paste function.");
}
function theEnd() {
    console.log("The End");
}




