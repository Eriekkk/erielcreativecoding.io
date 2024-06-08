let trail = [];//storing mouse trails
let bg;//storing the background image

function preload(){
  bg = loadImage("dark.jpg")//loading the background image
}

function setup() {
  createCanvas(700, 500);//canvas
  noStroke();//no outlines
}

function draw() {
  background(0);//background color
  
  tint(255, 70);//adding opacity
  
  image(bg, 0, 0, width, height);//image positioning 

  fill('#001D3DBC');//color of the mouse trail

  trail.push(createVector(mouseX, mouseY));//adding mouse position 

  if (trail.length > 100) {
    trail.shift();
  }
  //loop for the trails dots
  for (let i = 0; i < trail.length; i++) {
    const dot = trail[i];
    circle(dot.x, dot.y, i / 2);
  }
}