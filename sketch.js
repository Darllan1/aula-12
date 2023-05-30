var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
  
  boyImg = loadAnimation ("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  pathImg = loadImage("path.png");
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,400,20,20);
 path.addImage("chao",pathImg);
path.scale=1;
path.velocityY = 4;

boy = createSprite(200,350,20,20);
boy.addAnimation("correndo",boyImg);
boy.scale=0.4;
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = true;
boy.bounce(leftBoundary);

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = true;
boy.bounce(rightBoundary);
}

function draw() {
  background(0);
  path.velocityY = 4;
  

  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  if (boy.isTouching(leftBoundary)||boy.isTouching(rightBoundary)) {
    boy.X = 0;
  }
  
  boy.x = World.mouseX
  
  if(path.y > 400 ){
    path.y = height/2;
  }

  drawSprites();
}
