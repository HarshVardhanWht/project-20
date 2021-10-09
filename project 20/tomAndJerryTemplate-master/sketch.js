
function preload() {
    //load the images here
    cat1 = loadAnimation("images/cat1.png");
    catImage = loadAnimation("images/cat2.png","images/cat3.png");
    cat2 = loadAnimation("images/cat4.png");
    mouseimage = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse4.png");
    bg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);

    mouse = createSprite(200,600);
    mouse.addAnimation("mouse1",mouse1);
    mouse.scale = 0.15;

    cat = createSprite(900,600);
    cat.addAnimation("cat1",cat1);
    cat.scale = 0.25;



    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("cat2",cat2);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("cat2");

        mouse.addAnimation("mouse2",mouse2);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouse2");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseImage",mouseimage);
      mouse.changeAnimation("mouseImage");
      mouse.frameDelay = 25;

      cat.velocityX = -5;
      cat.addAnimation("catImage", catImage);
      cat.changeAnimation("catImage");
  }


}
