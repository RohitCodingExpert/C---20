var bgImg;

var cat;

function preload() {
    //load the images here

    bgImg = loadImage("garden.png")
    catimg1 = loadImage("cat1.png");
    mouseimg1 = loadImage("mouse1.png");
    catimg2 = loadImage("cat2.png");
    mouseimg2 = loadImage("mouse2.png");
    catimg3 = loaddImage("cat3.png");
    mouseimg3 = loadImage("mouse4.png");
    catimg4 = loadImage("cat4.png");
    mouseimg4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("garden");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

    }

    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 25;
}  

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay = 25;

  }

}
