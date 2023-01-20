const body = document.body
const container = document.getElementById('grid-container')
const button = document.querySelector('button')
let userSelection
let userGrid

//Create grid
makeNewGrid();
function makeNewGrid() {
    userSelection = prompt("Enter new grid size");
    userGrid = userSelection**2
    for (i=1; i <= userGrid; i++) {
        const div = document.createElement('div');
        const gridItems = div.classList.add('grid-items');
        container.append(div);
    }
    container.style.gridTemplateColumns = `repeat(${userSelection}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userSelection}, 1fr)`;
}

//Add event listener for drawing
const boxes = document.querySelectorAll('.grid-items')
boxes.forEach(box => box.addEventListener('mouseover', draw));

function draw() {
    let colorRed = Math.floor(Math.random() * 256);
    let colorGreen = Math.floor(Math.random() * 256);
    let colorBlue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}

//Add event listener for clear button
button.addEventListener('click', clear);

function clear() {
    boxes.forEach(box => box.style.backgroundColor = "white");
    makeNewGrid();
    draw();
}
