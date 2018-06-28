const grid = document.getElementById("grid")
const div = document.getElementsByClassName('grid');

//  creates grid. Nested loop. First, it iterates 1 to create a row. Then, it goes into the nested loop to create columns and iterates x times to create columns under the rows. Then when cols no longer < x it exits the nested loop and goes back to the outer loop to create another row. Then it goes into the nested cols loop etc rinse repeat.

// create grid
function createGrid(rows, cols) {
  for (let r = 0; r < rows; r++) {
      let row = document.createElement('div');
      row.className = "grid-row";
      row.style.height = (600 / cols) + "px";
    for (let c = 0; c < cols; c++) {
      let cell = document.createElement('div');
      cell.className = "grid-cell";
      cell.style.width = (600 / cols) + "px";
      cell.style.height = (600 / cols) + "px";
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
  return grid;
}

window.onload = createGrid(16, 16);

// highlight cell on mouseover
const cells = document.querySelectorAll('div.grid-cell')
const black = document.getElementById("black")
// THIS NEEDS TO BE FIXED!!!!!!!
function getBlack(e) {
  if (e.target.className === "grid-cell") {
    // e.target.classList.add("mouseover")
    e.target.style.background = "#000";
  }
  else {
    console.log("This is not the grid cell.")
  }
}

grid.addEventListener("mouseover", getBlack);
// black.addEventListener("click", function(){
//   grid.addEventListener("mouseover", getBlack)
// });

// button event listener - bubbling
const menu = document.querySelector('.menu')

menu.addEventListener("click", function(e) {
  if (e.target.id == "black") {
    grid.addEventListener("mouseover", getBlack);
  }
  if (e.target.id == "grayscale") {
    grid.addEventListener("mouseover", getGrayscale);
  }
  if (e.target.id == "technicolor") {
    grid.addEventListener("mouseover", getTechnicolor);
  }
  if (e.target.id == "reset") {
    resetGrid();
  }
})

// grayscale highlight
const grayscale = document.getElementById("grayscale")

// function addGrayscale(){
//   grid.addEventListener("mouseover", getGrayscale)
// }

function getGrayscale(e){
    console.log(e);
    if (e.target.className === "grid-cell") {
      e.target.style.opacity = `${Number(e.target.style.opacity) + 0.1}`
    }
}

// grayscale.addEventListener("click", addGrayscale)

// randomized technicolor highlight
const technicolor = document.getElementById("technicolor")

// function addTechnicolor() {
//   grid.addEventListener("mouseover", getTechnicolor)
// }

function getColor(){
  let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
  let color = "#"
  for (let i = 0; i < 6; i++) {
    let randomCode = letters[Math.floor(Math.random() * letters.length)]
    color = color + randomCode;
  }
  console.log(color);
  return color;
}

function getTechnicolor(e){
  if (e.target.className === "grid-cell") {
    e.target.style.background = getColor();
  }
}

// technicolor.addEventListener("click", addTechnicolor)

// reset grid
const reset = document.getElementById("reset")
function resetGrid(){
  let squares = prompt("How many squares in the new grid?", "");
  grid.innerHTML = "";
  createGrid(squares, squares);
}
// reset.addEventListener("click", resetGrid)
