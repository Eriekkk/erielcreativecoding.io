var img;//variable for the image

function preload() {
  img = loadImage ("minecraft.jpg");//loading up the image
}

function setup() {
createCanvas(700, 700);//size of the canvas
background(0);//background color
noStroke();//no outlines for the shape
}

function draw() {
  //adding random x and y coords
  x = random(width);
  y = random(height);
  
  var c = img.get(x, y);//variable for getting pixels
  
  fill(c[0], c[1], c[2], 100);//filling color with the variable c
  rect(x, y, 30, 30);//rectangle
}