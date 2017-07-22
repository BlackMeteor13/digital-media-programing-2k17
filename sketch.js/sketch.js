var x
var y

function setup() {
  createCanvas(1080, 830 )
  
  x = 150
  y = 150
  
}

var value = 0

function draw() {
  ellipse(x , y , 60, 60)
  
  x = x + random(-15,15)
  y = y + random(-15.15)
  
  
  if (mouseX > width/2) {
    // if mouse is on the right half of canvas
    // use a green fill
    fill(0, 250, 0, 17)
  } else {
    // if mouse is on left half of canvas
    // use an orange fill
    fill(250,100,17,50)
  }

  
  
}