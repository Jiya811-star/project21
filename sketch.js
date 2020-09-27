var wall, bullet;
var speed, weight, thickness;

 
function setup() {
  createCanvas(1600,400);

  //creating sprites
  wall = createSprite(1500,200,thickness,height/2);
  bullet = createSprite(1500,200,600,height/2);

  //giving random values
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(20,80);

  //providing color
  bullet.shapeColor =color(80,80,80);
  wall.shapeColor=color(0,0,255);
  //wall.shapeColor=color(80,80,80);
}


function draw() {
  background(0,0,0);  
 
//colliding condition
  if (collided(bullet,wall)){
    bullet.velocityX =  0;

  var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

  if (damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }
  }
  
  drawSprites();
}


function collided (bullet,wall){
bulletRightEdge = bullet.x+bullet.width;
wall.LeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
}
else{
  return false;
}
}