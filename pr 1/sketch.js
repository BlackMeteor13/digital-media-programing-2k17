var x = 100
var y = 100
angle1 = 0.0
segLength = 50;
var currentColor

function setup() {
  createCanvas(720, 1080)
  strokeWeight(15.5)
  stroke(255)
  frameRate(30);
}

function draw() {
  background(15,10)
  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);
  

  y = y - 1;{ 
  if (y < 0) { 
    y = height; 
  } 
  line(0, y, width, y,x, y, 50, 50);  
} 

  segment(x, y, angle1);
  ellipse(x, y, 50, 50);
  
  rect(x, y, 100, 100);
  
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}