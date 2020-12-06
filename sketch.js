var fixedRect, movingRect;
var ob1,ob2,ob3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1=createSprite(500,300,30,60);
  ob2=createSprite(400,100,40,50); 
  ob3=createSprite(500,200,35,65);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (istouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  if (istouching(movingRect,ob2)){
    movingRect.shapeColor = "red";
    ob2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    ob2.shapeColor = "blue";
  }
  if (istouching(movingRect,ob1)){
    movingRect.shapeColor = "red";
    ob1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    ob1.shapeColor = "blue";
  }
  if (istouching(movingRect,ob3)){
    movingRect.shapeColor = "red";
    ob3.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    ob3.shapeColor = "blue";
  }
  drawSprites();
}
//object1 is the moving object,object2 is the fixed object
function istouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
    }
else {
return false;  
}





}

