function upload() {
  const imgCanvas = document.querySelector('canvas');
  const fileInput = document.querySelector('#finput');
  const image = new SimpleImage(fileInput);

  image.drawTo(imgCanvas);
}
