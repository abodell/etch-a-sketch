// get variables for all of our widgets
const slideBarVal = document.querySelector('#slider');
const dimensions = document.querySelector('.dimensions');
const grid = document.querySelector('.grid');
const select = document.querySelector("#colorwheel");
const eraser = document.querySelector("#eraser");
const black = document.querySelector("#black");
const randomColor = document.querySelector("#random");
const clear = document.querySelector("#clear");
const DEFAULT_COLOR = '#000000';
const DEFAULT_MODE = 'black';
const DEFAULT_SIZE = '17';
// initialize variables that will determine which state we are in
let currColor = DEFAULT_COLOR;
let currMode = DEFAULT_MODE;
let currSize = DEFAULT_SIZE;
// functions to change mode, color, and size
function changeColor(color) {
    currColor = color;
}
function changeMode(mode) {
    currMode = mode;
}
function changeSize(size) {
    currSize = size;
}
function clearGrid() {
    grid.innerHTML = '';
    makeGrid(currSize);
}
function paint(event) {
    if (event.type == 'mouseover') {
        event.target.style.backgroundColor = currColor;
    }
}
function makeGrid(dims) {
    grid.style.gridTemplateColumns = `repeat(${dims}, 1fr)`;
    grid.style.gridTemplateRows = `repeat${dims}, 1fr)`;
    for (let i = 0; i < dims * dims; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.addEventListener('mouseover', paint);
        grid.appendChild(square);
    }
}
// add event listeners to our different buttons
select.addEventListener('change', (event) => {
    changeColor(event.target.value);
    changeMode('custom');
});
black.addEventListener('click', () => {
    changeColor(DEFAULT_COLOR);
    changeMode('black');
});
eraser.addEventListener('click', () => {
    changeColor('#fffffe');
    changeMode('eraser');
});
randomColor.addEventListener('click', () => {
    let randColor = Math.floor(Math.random()*16777215).toString(16);
    changeColor("#" + randColor);
    changeMode('random');
});
clear.addEventListener('click', () => {
    clearGrid();
});

// change the listed dimensions in real time when the slider is moved
slideBarVal.addEventListener('mousemove', (event) => {
    slideBarVal.value = event.target.value;
    dimensions.textContent = slideBarVal.value.toString() + " x " + slideBarVal.value.toString();
});
// store the new value in the variable once the user is done sliding
// we also want to clear the grid and resize it when this occurs.
slideBarVal.addEventListener('change', (event) => {
    slideBarVal.value = event.target.value;
    changeSize(slideBarVal.value);
    clearGrid();
    makeGrid(currSize);
});

window.onload = () => {
    makeGrid(DEFAULT_SIZE);
}

