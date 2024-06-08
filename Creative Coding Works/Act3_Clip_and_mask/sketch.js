let mc;//varaible for the main character image
let bg;//variable for the background image

function preload(){//loading both images
  mc = loadImage("mc.png");
  bg = loadImage("bg.jpg");
}

function setup(){
  createCanvas(500, 400);//size of the canvas
  
  bg.resize(500, 400);//changing the size of the bg image
  let cnvbg = createGraphics(500, 400);//adding layer
  cnvbg.rect(0, 0, 500, 400)//making rectangle
  cnvbg.canvas.getContext("2d").clip()//clipping 
  cnvbg.image(bg, 0, 0);//position of the image
  image(cnvbg,0 , 0);//image and rect positioning
  
  mc.resize(200, 200); //changing the size of mc image
  let cnvmc = createGraphics(200, 200); //layer
  cnvmc.circle(100, 100, 400);//making circle 
  mc.mask(cnvmc);//masking the image to the circle
  image(mc, 200 / 2, 270/ 2); //position of the mc and circle
}