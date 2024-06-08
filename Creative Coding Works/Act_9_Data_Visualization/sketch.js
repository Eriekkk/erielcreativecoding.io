
let colors;//storing the pie chart colors

let angles = [135, 90, 72, 60, 45]//size of angles in the pie chart
let movies = ["Demon Slayer: Mugen Train", "Spirited Away", "Your Name", "Suzume", "The First Slam Dunk"];//5 movies

function setup() {
  createCanvas(700, 700);//canvas size
  
  colors = [//different shades of blue
    color("#03045e"),
    color("#0077b6"),
    color("#00b4d8"),
    color("#90e0ef"),
    color("#caf0f8")
  ]; 
  noLoop();//removing loop
}

function draw() {
  background(225);//background to light gray
  let lastAngle = 0;//last angle of the pie
  noStroke(); 
  //loop to draw angles 
  for (let i = 0; i < angles.length; i++) {
    let currentAngle = radians(angles[i]);
    fill(colors[i]);//filling the colors 
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + currentAngle, PIE);//drawing arc for the graph
    lastAngle += currentAngle;
  }
  
  //text for the movie lables
  textSize(13); 
  textFont('Helvetica');
  let margin = 400; 
  for (let i = 0; i < movies.length; i++) {
    fill(colors[i]);
    rect(10, margin + 10 + i * 30, 10, 10); 
    fill(0);
    text(movies[i], 25, margin + 20 + i * 30); 
    
  }
  //heading text
  textSize(24);
  fill(0);
  textStyle(BOLD);
  textFont('Helvetica');
  text("TOP 5 HIGHEST GROSSING ANIME MOVIE", 100, 50);

  textSize(15);
  textStyle(BOLD)
  fill(0);
  textFont('Helvetica');
  text("According to IMDb", 300, 80);
}
