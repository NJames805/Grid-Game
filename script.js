// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows += 1;
    let grid = document.getElementById("grid");
    //add row
    let row = document.createElement("tr");
    row.id = numRows
    //To start things up
    if(numCols == 0){
        numCols = 1;
    }
    for(let i = 0; i < numCols;i++){
        //incase I need to change something about the cell
        let cell = document.createElement("td");
        cell.classList.add("uncolored");
        cell.onclick = function(){
            HandleClicks(cell);
        };
        row.appendChild(cell);
    }
    grid.appendChild(row);
    console.log("New row added");
}

// Add a column
function addC() {
    numCols += 1;
    let grid = document.getElementById("grid");
    //To start things up
    if(numRows == 0){
        //add row
        numRows = 1;
        let row = document.createElement("tr");
        row.id = 1;
        grid.appendChild(row);
    }
    //add col
    for(let i = 1; i <= numRows; i++){
        //add one td to every row
        let row = document.getElementById(i);
        //incase I need to change something about the cell
        let cell = document.createElement("td")
        cell.classList.add("uncolored");
        cell.onclick = function(){
            HandleClicks(cell);
        };
        row.appendChild(cell);
    }
    console.log("new column added");
}

// Remove a row
function removeR() {
    if(numRows == 0){
        alert("No rows to remove");
        return;
    }
    let grid = document.getElementById("grid");
    //remove row
    let row = grid.lastElementChild;
    grid.removeChild(row);
    numRows -= 1;
    if(numRows == 0){
        numCols = 0;
    }
    console.log("Row Removed");
}

// Remove a column
function removeC() {
    if(numCols == 0){
        alert("No columns to remove");
        return;
    }
    let grid = document.getElementById("grid");
    //remove row(loop through each row remove the first child)
    for(let i = 1; i <= numRows; i++){
        let row = document.getElementById(i);
        let block = row.lastElementChild;
        row.removeChild(block);
    }
    numCols -= 1;
    if(numCols == 0){
        numRows = 0;
    }
    console.log("column removed");
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    if(numRows == 0){
        alert("No rows to fill");
        return;
    }
    if(colorSelected == null){
        alert("Pick a color to fill the cells with")
        return;
    }
    //.getElementsByNames is dynamic so i had to make a static array from it
    let cells = Array.from(document.getElementsByClassName("uncolored"));
    console.log(cells);
    for(let i = 0; i < cells.length; i++){
        //change it from uncolored to colored
        cells[i].classList.replace("uncolored","colored");
        //color cells
        cells[i].style.backgroundColor = colorSelected;
        
    }
    console.log("Uncolored cells changed to", colorSelected);
}

// Fill all cells
function fillAll(){
    if(numRows == 0){
        alert("No rows to fill");
        return;
    }
    if(colorSelected == null){
        alert("Pick a color to fill the cells with")
        return;
    }
    let cells = document.getElementsByTagName("td");
    for(let i = 0; i < cells.length; i++){
        //change it from uncolored to colored
        cells[i].classList.replace("uncolored","colored");
        cells[i].style.backgroundColor = colorSelected;
    }
    console.log("All cells changed to", colorSelected);
}

// Clear all cells
function clearAll(){
    if(numRows == 0){
        alert("No rows to delete");
        return;
    }
    let cells = document.getElementsByTagName("tr");
    let grid = document.getElementById("grid");
    for(let i = 0; i < cells.length; i++){
        grid.remove(grid.lastElementChild);
    }
}

//cell is clicked
function HandleClicks(cell){
    console.log("cell clicked");
    if(colorSelected == null){
        alert("Select a color to change the color of the cell");
    }
    else{
        cell.style.backgroundColor = colorSelected;
        //change it from uncolored to colored
        cell.classList.replace("uncolored","colored");
        console.log("color changed to", colorSelected);
        console.log(cell.classList[0])
    }
}