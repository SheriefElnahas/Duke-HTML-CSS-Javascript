const firstCanvas = document.querySelector('.first-canvas__canvas');
const secondCanvas = document.querySelector('.second-canvas__canvas');

// const tealButton = document.querySelector('.btn-teal')
// const blackButton = document.querySelector('.btn-black');

// function doTeal() {
//   firstCanvas.style.backgroundColor = 'teal';

//   const context = firstCanvas.getContext("2d");
//   context.fillStyle = 'white';
//   context.fillRect(10,10,80,40);
//   context.fillRect(100,10,80,40);

//   context.fillStyle = 'black';
//   context.font = '25px Arial';
//   context.fillText('Hello', 20,40);
// }

// function doBlack() {
//   secondCanvas.style.backgroundColor = 'black';
// }

// tealButton.addEventListener('click' , doTeal)
// blackButton.addEventListener('click' , doBlack)

// Input Colors
const firstColorInput = document.querySelector('.first-canvas__color');
const secondColorInput = document.querySelector('.second-canvas__color');

firstColorInput.addEventListener('change', () => {
  firstCanvas.style.backgroundColor = firstColorInput.value;
  // const firstCanvasContext = firstCanvas.getContext("2d");
});

secondColorInput.addEventListener('change', () => {
  secondCanvas.style.backgroundColor = secondColorInput.value;
});


// Input Range
const firstCanvasRangeInput = document.querySelector('.first-canvas__range');
const secondCanvasRangeInput = document.querySelector('.second-canvas__range');

function doSquare(rangeInput, canvas, squareColor) {
  const canvasContext = canvas.getContext("2d");


  rangeInput.addEventListener('input', () => {
    const size = rangeInput.value;
    canvasContext.fillStyle = squareColor;
    canvasContext.clearRect(0,0, canvas.width, canvas.height);
    canvasContext.fillRect(10,10,size * 2,size);
  })
}

doSquare(firstCanvasRangeInput, firstCanvas, '#fff');
doSquare(secondCanvasRangeInput, secondCanvas, '#000');