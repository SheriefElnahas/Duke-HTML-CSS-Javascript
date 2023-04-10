let image;

const originalCanvas = document.querySelector('#originalCanvas');
const grayCanavas = document.querySelector('#grayCanvas')

function upload() {

  const fileInput = document.querySelector('#finput');
  image = new SimpleImage(fileInput);

  image.drawTo(originalCanvas);
}

function makeGray() {
  if(image) {
    for(let pixel of image.values()) {
      const red  = pixel.getRed();
      const green = pixel.getGreen();
      const blue = pixel.getBlue();
      const avg = ((red + green + blue) / 3)

      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
    }
  }
  image.drawTo(grayCanavas);
}
