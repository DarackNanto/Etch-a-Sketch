//Hold user input number for grid - default is 16 * 16
var inputNumber = 16;

//modify the DOM to add grids
const grid = document.querySelector("#container");

createGrid(inputNumber);

// prompt user to enter a desired grid number between 1 - 100 - default 16 * 16.
document.querySelector("#numberBtn").addEventListener("click", promptUser);
function promptUser() {
  let gridUserInput;
  //enforce that input is less that 100.
  do {
    gridUserInput = prompt("Please enter your grid number between 1 and 100", "16");
    inputNumber = Number(gridUserInput);
    console.log(inputNumber);
  }
  while (inputNumber > 100)
//call the function
clearGrid();
createGrid(inputNumber);
}

//Function to create grid by default is create a 16 * 16
function createGrid(a) {

    for (let i = 1; i <= a * a; i++) {
      const gridElement = document.createElement("div");
      gridElement.setAttribute("id", `grid-element`);
      container.appendChild(gridElement);
      //adding css style and passing the cols and rows number
      grid.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${a}, 1fr)`;
    }
    addEventListener();
}

//clear previous DOM grid data
function clearGrid() {
  while (grid.firstChild){
    grid.removeChild(grid.firstChild);
  }
}

//Create event listener from an array of NodeList then call the change color func
function addEventListener() {
  let list = document.querySelectorAll("div#grid-element");
  console.log(list);
  console.log(list[1]);
  console.log(list.length);
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mouseover", changeColor, false);
  }
}
// Function responsible of changing color from black to red
function changeColor() {
  this.style.backgroundColor = "red";
}

