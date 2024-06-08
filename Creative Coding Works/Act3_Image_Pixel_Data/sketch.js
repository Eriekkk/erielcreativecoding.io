var img, x, y;//variables for image and coordinates

function preload() {
img = loadImage("shader mc.jpg");//inputing the image
}



function setup() {
createCanvas (1020,1080);//size of the canvas
background(0);//background color
noStroke();//no outlines for the shapes
}



function draw() {
background(0);// background color
//mouse coordinates
x = mouseX;
y = mouseY;
image( img, 0, 0);//the position of the image
  
var c = get(x, y);//variable of getting pixels
  
fill(c);//set fill to the color of the pixels 
ellipse (x, y, 100, 100);//a circle for the mouse

}

