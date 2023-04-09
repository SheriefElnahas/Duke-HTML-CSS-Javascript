const firstDiv = document.querySelector('.div1');
const secondDiv = document.querySelector('.div2');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
     firstDiv.className = 'orange'
     firstDiv.textContent = 'Changed Background from white to orange';
     secondDiv.className = 'teal'
     secondDiv.textContent = 'Changed Background from white to teal';
});