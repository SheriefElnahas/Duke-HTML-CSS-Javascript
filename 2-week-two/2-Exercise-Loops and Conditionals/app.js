// Exercise 1 - Turn the chapel red.
console.log('==================================================');
console.log('Exercise 1 - Turn the chapel red.');
const chapelRed = document.getElementById('chapelImage');
const canvasOne = document.querySelector('.canvas-1');
const chapelImg = new SimpleImage(chapelRed);

for (let pixel of chapelImg.values()) {
  // If the red value is under 255
  if (pixel.getRed() < 255) {
    // Get the difference between 255 and that value, then add the different to that value
    // Example: if red was 55 , then ( 255 - 55) = 200, then we add 200 to 55 to get 255 full red
    pixel.setRed(255 - pixel.getRed() + pixel.getRed());
  }
}

chapelImg.drawTo(canvasOne);
console.log('==================================================');

// Exercise 2 - Remove all the red
console.log('Exercise 2 - Remove all the red');
const canvasTwo = document.querySelector('.canvas-2');

for (let pixel of chapelImg.values()) {
  // if we have red value
  if (pixel.getRed() !== 0) {
    // Then subtract that number from itself to get 0
    // Example: if red is 50 then pixel.getRed() - pixel.getRed() ==> 50 - 50 = 0
    pixel.setRed(pixel.getRed() - pixel.getRed());
  }
}
chapelImg.drawTo(canvasTwo);
console.log('==================================================');

// Exercise 3 - Turn the eggs less red
console.log('Exercise 3 - Turn the eggs less red.');
const originalEggsImage = document.getElementById('eggsImage');
const canvasThree = document.querySelector('.canvas-3');
const eggImage = new SimpleImage(originalEggsImage);

for (let pixel of eggImage.values()) {
  // If red value is larger than 70
  if (pixel.getRed() > 70) {
    // Get the difference first. Example : red value is 79 - 70 = 9 is the difference
    const extraRedValue = pixel.getRed() - 70;
    // Then subtract the red value from the difference . Example 79 - 9 = 70
    pixel.setRed(pixel.getRed() - extraRedValue);
  }
}
eggImage.drawTo(canvasThree);
console.log('==================================================');

// Exercise 4 - Add Thick Black Line to Bottom of Owen
console.log('Exercise 4 - Add Thick Black Line to Bottom of Owen.');
const originalOwenImage = document.getElementById('ownImg');
const canvasFour = document.querySelector('.canvas-4');
const owenImage = new SimpleImage(originalOwenImage);
const height = owenImage.getHeight();

for (let pixel of owenImage.values()) {
  if (pixel.getY() >= height - 10) {
    pixel.setRed(0);

    pixel.setGreen(0);

    pixel.setBlue(0);
  }
}

owenImage.drawTo(canvasFour);
console.log('==================================================');

// Exercise 5 - Green square in top left corner
console.log('Exercise 5 - Green square in top left corner.');

const canvasFive = document.querySelector('.canvas-5');
const greenSquareChapelImg = new SimpleImage(chapelImg);

// green is rgb(0,255,0)

for (let pixel of greenSquareChapelImg.values()) {
  if (pixel.getY() < 50 && pixel.getX() < 50) {
    // reset each red value to 0
    const newRed = pixel.getRed() - pixel.getRed();
    pixel.setRed(newRed);

    // Make every green value up the max green 255
    const newGreen = 255 - pixel.getGreen() + pixel.getGreen();
    pixel.setGreen(newGreen);

    // reset each blue value to 0
    const newBlue = pixel.getBlue() - pixel.getBlue();
    pixel.setBlue(newBlue);
  }
}

greenSquareChapelImg.drawTo(canvasFive);

console.log('==================================================');

// Exercise 6 - Rectangle of any color in top right corner.
console.log('Exercise 6 - Rectangle of any color in top right corner.');
const canvasSix = document.querySelector('.canvas-6');
const canvasSeven = document.querySelector('.canvas-7');

function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
  const createdImg = new SimpleImage(someImage);
  const width = createdImg.getWidth();

  for (let pixel of createdImg.values()) {
    if (pixel.getY() < cornerHeight) {
      if (pixel.getX() > width - cornerWidth) {
        pixel.setRed(red);
        pixel.setGreen(green);
        pixel.setBlue(blue);
      }
    }
  }
  return createdImg;
}

const modifiedImageOne = topRightCorner(30, 60, chapelImg, 255, 255, 0);
modifiedImageOne.drawTo(canvasSix);

const smallLionImg = document.querySelector('#lionImg');

const modifiedImageTwo = topRightCorner(125, 20, smallLionImg, 255, 0, 0);
modifiedImageTwo.drawTo(canvasSeven);

console.log('==================================================');
