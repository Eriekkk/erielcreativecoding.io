let kimi;//variable for the image

function preload(){
  kimi = loadImage("kimi.jpg")//loading the image
}

function setup(){
  createCanvas(600, 400);//size of the canvas
  
  kimi.resize(600, 400);//changing the size of the image
  let cnvbg = createGraphics(600, 400);//adding layer
  cnvbg.rect(0, 0, 600, 400);//adding rectangle to the layer
  cnvbg.canvas.getContext("2d").clip()//clipping
  cnvbg.image(kimi, 0, 0);//position of the image
  image(cnvbg,0 , 0);//image and rect position
  
  text = createGraphics(width,height)//create layer for text
  text = fill("white")//background white
  text.rect(10, height - 60, 550, 50);//rectangle
  text.textSize(15)//size of text
  text.erase()//making bg and text as the same
  text.textAlign(LEFT, CENTER)//positioning of the text
  text.text("I wanted to tell you that... \n wherever you may end up in this world, I will be searching for you...", 20, height - 35)//text
   image(text,0 , 0);
}