let font;//storint font

function preload() {
  font = loadFont("Tiny5.ttf");//loading fonts
}

var points; //storing dots or points

function setup() { 
  createCanvas(1200, 600); //size of canvas page
  noLoop();//stopping loop

  let textString = 'BATH SPA UNIVERSITY';//text 
  let textSizeValue = 100;//size of the text
  textSize(textSizeValue);//spacing for the text
  textFont(font);//setting up the font
  let textWidthTotal = textWidth(textString);//width of the text

  let startX = (width - textWidthTotal) / 2;//position for x
  let startY = height / 2 + textSizeValue / 2;//position for y

  background('#e2eafc'); //background color

  let charX = startX;//horizontal points
  
  //for loop for each character in the text
  for (let j = 0; j < textString.length; j++) {
    let char = textString[j];
    points = font.textToPoints(char, charX, startY, textSizeValue, { sampleFactor: 0.15 });
    let charWidth = textWidth(char);

    //adding points in the letters
    for (let i = 0; i < points.length; i++) { 
      let p = points[i]; 
      

      //adding gradient in in every letter 
      let gradientFactor = map(i, 0, points.length, 0, 1);
      let r = lerp(0, 173, gradientFactor); 
      let g = lerp(0, 216, gradientFactor);
      let b = lerp(139, 230, gradientFactor);
      
      fill(r, g, b);//fill the color with gradient 
      noStroke();//removing the outlines of the text

      let size = 6;//size of the dot
      rect(p.x, p.y, size, size);//drawing the dot
    } 

    charX += charWidth;//positioning of every characters
  }
}

