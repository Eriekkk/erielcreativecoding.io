let song;//to store the song
let fft;//for the fft analyzer
let stars = [];//to store the stars
let starIndex = 0;//stars array
let bloomThreshold = 100; //the blooming of the stars
let bg;//backgroung image-

function preload() {
  song = loadSound('katawaredoki.mp3'); //loading song
  bg = loadImage('kimi.jpg');//loading background image
}

function setup() {
  createCanvas(1000, 600);//size of canvas
  fft = new p5.FFT();//analyzer
}

function draw() {
  background(0);

  
  tint(255, 35);//opacity of bg
  image(bg, 0, 0, width, height);//position of bg

  let spectrum = fft.analyze();//frequency of the audio
  
  //using if state to add new starts
  if (fft.getEnergy("bass") > bloomThreshold) {
    stars.push(new Star());
    starIndex++;
     //looping star index 
    if (starIndex >= stars.length) {
      starIndex = 0;
    }
  }
  //updating and displaying stars
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].display();
  }
  //removing the stars when not showing on screen
  for (let i = stars.length - 1; i >= 0; i--) {
    if (stars[i].offscreen()) {
      stars.splice(i, 1);
    }
  }
  //Katawaredoki text in bottom left
 textSize(48);
  fill(255);
  textAlign(LEFT, BOTTOM);
  textFont('Helvetica');
  textStyle(BOLD)
  textLeading(0); 
  text("Katawaredoki", 20, height - 20); 
  //description text in bottom right
  textSize(16);
  textStyle(BOLD)
  textAlign(RIGHT, BOTTOM);
  text("Made by RADWIMPS from Your Name", width - 20, height - 20);
  //start text in top left
  textSize(12);
  textAlign(LEFT, TOP); 
  fill(255);
  text("Press to Play", 20, 20); 
}

//a class to create stars 
class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 5);
    this.opacity = random(50, 255);
    this.speed = random(1, 3);
  }
  //updating position
  update() {
    this.y -= this.speed;
  }
  //displaying stars
  display() {
    noStroke();
    fill(255, this.opacity);
    ellipse(this.x, this.y, this.size);
  }
  offscreen() {
    return this.y < 0;
  }
}
//function when mouse press song will play
function mousePressed() {
  if (!song.isPlaying()) {
    song.play();
  }
}


