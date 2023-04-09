// Exercise 1 - Make a Phrase From Three Words
function phrase3words(value1, value2, value3) {
  let answer = `${value1} ${value2} ${value3}` ;  
  return answer;
}

const result1 = phrase3words('red','orange','green');
console.log('Exercise 1 - Make Phrase From Three Words : ',result1);
console.log('==================================================');

// Exercise 2 - Format a name
function reformatName(first, last) {
  // missing code
  return `${first},${last}`
}

console.log('Exercise 2 - Format a name : ' ,reformatName('Eren','Yeager'))
console.log('==================================================');


// Exercise 3 - Number of pixels in an image
function numberPixels(namefile) {
  const someImg = new SimpleImage(namefile);
  const height = someImg.getHeight(); 
  const width = someImg.getWidth();
  return height * width;
}

const chapelImage = document.getElementById('chapelImage');
console.log('Exercise 3 - Number of pixels in an image : ' ,numberPixels(chapelImage))
console.log('==================================================');

// Exercise 4 - Perimeter of an image
function perimeter(imageName) {

  const someImg = new SimpleImage(imageName);
  const height = someImg.getHeight();
  const width = someImg.getWidth();
  return (height * 2 ) + (width * 2);
}
const rodgerImg = document.getElementById('rodgerImage');
console.log('Exercise 4 - Perimeter of an image : ',perimeter(rodgerImg));

console.log('==================================================');
// Exercise 5 - Print the RGB values of a pixel
// function printPixel(nameImage, xpos, ypos) {
//   // missing code
// }

// CODE:
console.log('Exercise 5 - Print the RGB values of a pixel');
function printPixel(nameImage, xpos, ypos) {
  const someImg = new SimpleImage(nameImage);
  console.log("Red : ",someImg.getRed(xpos,ypos));;
  console.log("Green : ",someImg.getGreen(xpos,ypos));
  console.log("Blue : ",someImg.getBlue(xpos,ypos));
}

const drewGreenImage = document.getElementById('drewGreenImage');
printPixel(drewGreenImage,250, 500);
console.log('==================================================');

// Exercise 6 - Sum of the RGB values for a Pixel
function sumPixel(nameOfImage, xpos, ypos) {
  const someImg = new SimpleImage(nameOfImage);
  const red = someImg.getRed(xpos,ypos);
  const green = someImg.getGreen(xpos,ypos);
  const blue = someImg.getBlue(xpos,ypos);
  
  return red + green + blue
}

var answer = sumPixel(drewGreenImage, 250, 500);
console.log("Exercise 6 - Sum of the RGB values for a Pixel : ",answer);
console.log('==================================================');
 

