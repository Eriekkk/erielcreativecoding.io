let cols;
let rows; // variable declaration for creating the grid
let csize = 4;
let rsize = 5; // variable declaration for the grid size

let img; // variable declaration for the image
let rects = []; // variable for the array for the whole grid

function preload() { // function to load the image used 
  img = loadImage("images/welcome.png");
}

function setup() { // function to setup the whole canvas
  createCanvas(windowWidth, windowHeight); // create canvas that enables to show fullscreen
  background(255); //set the bg to white
  cols = img.width / csize;
  rows = img.height / rsize; // variable to calculate the grid from the rows and its columns
  let bright; // variable declaration for the brightness
  for (let i = 0; i < cols; i++) { // for loops to declare the grid size, to fit within the image text
    rects[i] = [];
    for (let j = 0; j < rows; j++) {
      let c = img.get(i * csize, j * rsize);
      if (brightness(c) == 0) { //variable used when the mouse hovers over the black screen, it changes its color following to the image in the back
        bright = true;
      } else {
        bright = false;
      }
      rects[i][j] = new Rect(i * csize, j * rsize, bright); // iterates the rectangle that represents the whole grid
    }
  }
}

function draw() { // function to draw the whole grid, with the following for loop to iterate the whole grid 
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      rects[i][j].display();
    }
  }
}

class Rect { // declaring a rect class to represent the rectangle within the grid
  constructor(x, y, isBlack) { // setting a positional variable for the rectangle and the color
    this.x = x;
    this.y = y;
    this.isBlack = isBlack;
    this.c = 0;
    this.randomColor = floor(random(7)); // giving the following grid a random color if the mouse hovers over it
  }
  
    display() { // display variable to draw the rectangles 
   /* strokeWeight(0.5); // sets the rectangle stroke weight to be thin when the mouse hovers
    if (this.isBlack == true) { // sets the following rectangle colors to be black
      this.c = 0;
    } */
    this.mouseHover(); // a function for the mouse hovering, which if hovers over the grid, changes its color 
    fill(this.c);
    rect(this.x, this.y, csize, rsize);
  }
  
 mouseHover() { // mouse hover function 
    let colors = ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531"]; // color array for the randomization for the image text in teh back
    let distance = dist(this.x, this.y, mouseX, mouseY); // sets the distance of the rectangles within each other and replaces the colors with each rectangle that the mouse hovers
    let hoverSize = 200; // sets the thickness of the mouse cursor once hovered
    if (distance < hoverSize) { // if statement for when the mouse hovers over the screen, changes the color of the text (the black text color)
      if (this.isBlack == true) {
        this.c = color(colors[this.randomColor]);
      } else {
        this.c = 0;
      }
    }
  }


}
