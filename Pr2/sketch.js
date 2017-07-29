var x = []
var y = []
var squareColor = []
var colors = []
var numberOfsquares = 400
var img;

function preload(){
  img = loadImage("img/img.jpg")
}


function setup() {
  createCanvas(678,960)
  //noStroke()
  
  colors = [
    color (53, 161, 255),
    color(215, 64, 255),
    
]
  
  for (var i=0; i<numberOfsquares ; i=i + 1){
    x[i] = random(5, width)
    y[i] = random(2, height)
    squareColor[i] = random(colors)
  }
  
  
}

function draw() {
  image(img,0, 0, width, height)
  //background(255)
  
   for (var i=0; i<numberOfsquares ; i=i+1){
    x[i] = x[i] + random(-5,5)
    y[i] = y[i] + random(-5,5)
    squareColor[i] = random(colors)
   
  
  
 
  
  for (var q=0; q<numberOfsquares; q=q+1){
    var distance = dist(x[i], y[i], x[q], y[q] )
    if (distance < 75 ){
      //stroke(squareColor[i])
      stroke(random(255), random(255), random(255))
      strokeWeight(2)
      rect(x[i], y[i], x[q], y[q] )
      quad(x[i], y[i], x[q], y[q] )
      rotate(PI/50)
      frameRate(300)
      noFill ()
     
      
    }
    
  }
    }
   
   
    
  }
  
  