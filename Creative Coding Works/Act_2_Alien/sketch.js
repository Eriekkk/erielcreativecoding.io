function setup() {
  createCanvas(500, 500);//size of the canvas page
}

function draw() {
  background('#fefae0');//background color

  translate(width / 2, height / 2);//positioning the cat in the center

  //main cat head
  fill('#faa307');
  beginShape();
  vertex(-100, -100);
  bezierVertex(-50, -150, 50, -150, 100, -100);
  bezierVertex(100, 100, -100, 100, -100, -100);
  endShape(CLOSE);

  //eyes of the cat
  fill(0);
  ellipse(-40, -20, 30, 30); 
  ellipse(40, -20, 30, 30); 

 //nose of the cat using triangle
  fill('#ff0054');
  triangle(0, 10, -10, 30, 10, 30);

  //two cat ears 
  //first ear
  fill('#faa307');
  beginShape();
  vertex(-100, -100);
  bezierVertex(-120, -200, -60, -180, -60, -100);  
  endShape();
  
  //second ear
  beginShape();
  vertex(100, -100);
  bezierVertex(120, -200, 60, -180, 60, -100); 
  endShape();
  
  //the whiskers of the cat
  stroke(0);
  strokeWeight(2);
  line(-30, 20, -70, 40);
  line(-30, 20, -70, 20);
  line(-30, 20, -70, 0);
  line(30, 20, 70, 40);
  line(30, 20, 70, 20);
  line(30, 20, 70, 0);
}

