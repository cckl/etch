const grid = document.getElementById("grid")
const menu = document.querySelector('.menu')
const cells = document.querySelectorAll('div.grid-cell')
const black = document.getElementById("black")
const grayscale = document.getElementById("grayscale")
const technicolor = document.getElementById("technicolor")
const reset = document.getElementById("reset")

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
    grid.addEventListener("mouseover", drawBlack);
  }
  return grid;
}

window.onload = createGrid(16, 16);

// button event listeners
menu.addEventListener("click", function(e) {
  if (e.target.id == "black") {
    grid.removeEventListener("mouseover", drawGrayscale);
    grid.removeEventListener("mouseover", drawTechnicolor);
    grid.addEventListener("mouseover", drawBlack);
  }
  if (e.target.id == "grayscale") {
    grid.removeEventListener("mouseover", drawBlack);
    grid.removeEventListener("mouseover", drawTechnicolor);
    grid.addEventListener("mouseover", drawGrayscale);

  }
  if (e.target.id == "technicolor") {
    grid.removeEventListener("mouseover", drawGrayscale);
    grid.removeEventListener("mouseover", drawBlack);
    grid.addEventListener("mouseover", drawTechnicolor);
  }
  if (e.target.id == "reset") {
    resetGrid();
  }
})

// black highlight
function drawBlack(e) {
  if (e.target.className === "grid-cell") {
    e.target.style.background = "#000";
  }
  console.log(e.target.className)
}

// grayscale highlight
function drawGrayscale(e){
  if (e.target.className === "grid-cell") {
    e.target.style.opacity = `${Number(e.target.style.opacity) + 0.1}`
  }
}

// randomized technicolor highlight
function getColor(){
  let letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
  let color = "#"
  for (let i = 0; i < 6; i++) {
    let randomCode = letters[Math.floor(Math.random() * letters.length)]
    color = color + randomCode;
  }
  return color;
}

function drawTechnicolor(e){
  if (e.target.className === "grid-cell") {
    e.target.style.background = getColor();
  }
  console.log(e.target.className)
}

// reset grid
function resetGrid(){
  let squares = prompt("How many squares in the new grid?", "");
  if (squares % 1 != 0) {
    alert("Please enter a valid integer.")
  }
  else {
    grid.innerHTML = "";
    createGrid(squares, squares);
  }
}
