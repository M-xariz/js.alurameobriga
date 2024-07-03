function setup() {
    createCanvas(600, 400);
    background("green")
  }
  
  function draw() {
    
    
    stroke("orange")
    fill("yellow")
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed){
    rect(mouseX,mouseY,20,20)
    }
    
  }