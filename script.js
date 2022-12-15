//modify the DOM to add grids
const container = document.querySelector("#container");
const grids = document.createElement("div");

//call the function
createGrid();


//Function to create grid 
function createGrid() {
  for (let i = 1; i <= 20; i++) {
    const grids = document.createElement("div");
    grids.setAttribute("id", `grid${i}`);
    container.appendChild(grids);
  }
}
