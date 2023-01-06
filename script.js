//modify the DOM to add grids
const grid = document.querySelector("#container");

//call the function
createGrid();
addEventListener();

//Function to create grid by default is create a 16 * 16
function createGrid() {
    for (let i = 1; i <= 16 * 16; i++) {
      const gridElement = document.createElement("div");
      gridElement.setAttribute("id", `grid-element`);
      container.appendChild(gridElement);
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
