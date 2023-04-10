const buttons = document.querySelectorAll('.btn');
console.log(buttons);

let originalImage = null;
let grayImg = null;
let redImg = null;

// buttons.forEach((button) => {
//   if (originalImage) {
//     button.setAttribute('disabled', true);
//   } else {
//     button.setAttribute('disabled', false);
//   }
// });

const imgCanvas = document.querySelector('.filter__canvas');
function upload() {
  const fileInput = document.querySelector('#fInput');

  originalImage = new SimpleImage(fileInput);
  grayImg = new SimpleImage(fileInput);
  redImg = new SimpleImage(fileInput);

  originalImage.drawTo(imgCanvas);

  // Remove disabled attribute when the image is loaded
  buttons.forEach((button) => {
    button.removeAttribute('disabled');
  });
}

function doGray() {
  if (grayImg) {
    filterGray(grayImg);
  }

  grayImg.drawTo(imgCanvas);
}

function filterGray(image) {
  for (let pixel of image.values()) {
    const red = pixel.getRed();
    const green = pixel.getGreen();
    const blue = pixel.getBlue();
    const avg = (red + green + blue) / 3;

    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}

function doRed() {
  if (redImg) {
    filterRed(redImg);
  }

  redImg.drawTo(imgCanvas);
}

function filterRed(image) {
  for (let pixel of image.values()) {
    if (pixel.getRed() < 255) {
      pixel.setRed(255);
    }
  }
}

function resetImage() {
  originalImage.drawTo(imgCanvas);
}
