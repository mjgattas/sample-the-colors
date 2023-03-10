let img;  // Declare variable 'img'.
let colorCounts = {};  // Object for storing the counts of each color.

function preload() {
  img = loadImage('RT.png');  // Load the image.
}

function setup() {
  createCanvas(img.width, img.height);  // Set the canvas size to the size of the image.
  image(img, 0, 0);  // Display the image.
  noStroke();
  smooth();

  // Count the colors in the image:
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let c = get(x, y);  // Get the color at (x, y).
      let key = `${red(c)},${green(c)},${blue(c)}`;  // Get a string representation of the color.
      if (colorCounts[key]) {  // If we have already counted this color,
        colorCounts[key]++;  // increment its count.
      } else {  // If this is a new color,
        colorCounts[key] = 1;  // set its count to 1.
      }
    }
  }

  console.log(Object.keys(colorCounts).length);
}

function draw() {


  // Display the colors as dots:
  if (frameCount === 1){
    background(255);  // Clear the canvas.

    for (let key in colorCounts) {
      let [r, g, b] = key.split(',').map(x => parseInt(x));  // Split the string representation of the color into its red, green, and blue components.
      fill(r, g, b);  // Set the fill color.
      for (let i = 0; i < colorCounts[key]; i++) {  // Draw a dot for each count of the color.
        circle(random(width), random(height), colorCounts[key]);  // Draw a small ellipse at a random position on the canvas.
      }
    }
  }
}
