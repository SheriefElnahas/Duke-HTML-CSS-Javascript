let foregroundImage, backgroundImage;

const fCanvas = document.querySelector('#fCanvas');
const bCanvas = document.querySelector('#bCanvas');
const greenCanvas = document.querySelector('#greenCanvas');

function loadForegroundImage() {
  const foreImageFileInput = document.querySelector('#fImage');

  foregroundImage = new SimpleImage(foreImageFileInput);
  foregroundImage.drawTo(fCanvas);
}

function loadBackgroundImage() {
  const backgroundImageFileInput = document.querySelector('#bImage');

  backgroundImage = new SimpleImage(backgroundImageFileInput);
  backgroundImage.drawTo(bCanvas);
}

function doGreenScreen() {
  if (foregroundImage && backgroundImage) {
    const outImage = new SimpleImage(foregroundImage.getWidth(), foregroundImage.getHeight());

    for (let pixel of foregroundImage.values()) {
      // Look at the currentPixel and check if its green
      if (pixel.getGreen() > pixel.getRed() + pixel.getBlue()) {
        // Look at the same position in bgImage
        const bgPixel = backgroundImage.getPixel(pixel.getX(), pixel.getY());
        outImage.setPixel(pixel.getX(), pixel.getY(), bgPixel);
      } else {
        //Otherwise: set output's corresponding pixel to current pixel
        outImage.setPixel(pixel.getX(), pixel.getY(), pixel);
      }
    }
    outImage.drawTo(greenCanvas);
  }
  
}

// function clearCanvas() {
//   greenCanvas.clearCanvas();
// }
