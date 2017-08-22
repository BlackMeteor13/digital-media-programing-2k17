var bg;
var smallPoint, largePoint


function preload(){
  bg = loadImage("image/1.jpg")
}


function setup() {
  createCanvas(1080,720)
  noStroke()
  image(bg, 0, 0, width, height)
  smallPoint = 4;
  largePoint = 40;
  imageMode();
  
  bg.loadPixels();
  
}
var value = 0
function draw() {

  var pointillize = map(mouseX, 0,          width, smallPoint, largePoint);
  var x = floor(random(bg.width));
  var y = floor(random(bg.height));
  var pix = bg.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);


  if (mouseX > width/2) {
   
    fill(0, 42, 34, 19)
  } else {
    
    fill(80, 3, 0, 26)
  }

  
  ellipse(mouseX, mouseY, 35, 35)
}


 
