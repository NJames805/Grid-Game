// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
    numRows += 1;
    let grid = document.getElementById("grid");
    //add row
    let row = document.createElement("tr")
    for(let i = 0; i < numCols;i++){
        row.appendChild(document.createElement("td"))
    }
    grid.appendChild(row);
    console.log("New row added");
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
    numCols += 1;
    let grid = document.getElementById("grid");
    //add col
    for(let i = 0; i < numRows; i++){
        //add one td to every row
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}