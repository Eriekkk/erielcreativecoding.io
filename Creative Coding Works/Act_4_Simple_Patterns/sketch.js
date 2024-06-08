let colors = [];//storing colors

function setup() {
  createCanvas(400, 400);//size of canvas
  generatePalette();//calling function
  setInterval(generatePalette, 2000);//generating a palete for every 2 seconds
}

function draw() {
  background(220);//background color

  let squareSize = width / Math.ceil(Math.sqrt(colors.length));//caclulate the sizes of the sqauares
  let index = 0;//counter 
  
  //a nested loop with if to make the squares 
  for (let y = 0; y < height; y += squareSize) {
    for (let x = 0; x < width; x += squareSize) {
      if (index < colors.length) {
        fill(colors[index]);
        rect(x, y, squareSize, squareSize);
        index++;
      }
    }
  }
}

//generating new color pallete
function generatePalette() {
  colors = [];
  //loop to make 25 colors
  for (let i = 0; i < 25; i++) {
    let r, g, b;
    
    //choosing between 3 colors green, blue, and yellow
    let choice = floor(random(3));
    if (choice === 0) { //random shades of blue
      r = random(0, 100);
      g = random(150, 255);
      b = random(200, 255);
    } else if (choice === 1) {//random shades of green
      r = random(50, 150);
      g = random(150, 255);
      b = random(50, 150);
    } else { //random shades of yellow
      r = random(200, 255);
      g = random(200, 255);
      b = random(0, 100);
    }
    //adding colors
    let c = color(r, g, b);
    colors.push(c);
  }
}


