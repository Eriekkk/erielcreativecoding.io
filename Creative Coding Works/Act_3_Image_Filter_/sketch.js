var img;//variable for image
function preload() {
img = loadImage("night shader.jpg");//loading the image
}

function setup () {
createCanvas (1000,600);//size of the canvas
background(0);// background color
}

function draw() {
background(0);//background color

img.resize(1000,600)//resizing the image as the canvas
image(img, 0, 0);//position of the image

var v = map(mouseX, 0, width, 0, 10);//variable for mouse x position

filter(BLUR, v);//adding a blur filter on the image 

}