function setup() {
  createCanvas(500, 400);//size of the canvas
}

function draw() {
  background('#bde0fe');//background color

  //body of the bus
  fill(255, 204, 0);//yellow color
  rect(50, 50, 300, 100, 20);//size of the rectangle with border radius 

  //windows of the bus
  fill('#00a6fb');// blue color
  rect(80, 60, 50, 40, 10); //window 1
  rect(160, 60, 50, 40, 10); //window 2
  rect(280, 60, 50, 40, 10); //window 3

  //wheels of the bus
  fill(0);//black color
  ellipse(100, 150, 40, 40);//back wheels
  ellipse(300, 150, 40, 40);// font wheels
  
  //door of the bus
  fill('#212529');//gray color
  rect(220, 60, 40, 90, 5);//size and position of the door
  
  //windows inside the door
  fill('#00a6fb');//same color with all the windows
  rect(225, 65, 30, 35, 5); //top window
  rect(225, 105, 30, 35, 5);//bottom window

  //lights of the bus
  fill('#c1121f');//red color
  ellipse(55, 120, 20, 20);//backlight
   fill('#e5e5e5');//light gray color
  ellipse(350, 120, 20, 20);//headlights

}


