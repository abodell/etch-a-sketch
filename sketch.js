const slideBarVal = document.querySelector('#slider');
const dimensions = document.querySelector('.dimensions');

// change the size of the input when the mouse is moved
slideBarVal.addEventListener('mousemove', (event) => {
    slideBarVal.value = event.target.value;
    dimensions.textContent = slideBarVal.value.toString() + " x " + slideBarVal.value.toString();
});