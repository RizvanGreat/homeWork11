const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let counterValue = 0;

incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counterValue;
    
    localStorage.setItem('counterValue', counterValue);
}


const savedValue = localStorage.getItem('counterValue');
if (savedValue !== null) {
    counterValue = parseInt(savedValue);
    updateCounter();
}
