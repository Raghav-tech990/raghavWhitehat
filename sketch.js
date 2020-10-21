var bullet,speed,weight
var wall,thickness

function setup() {
  createCanvas(800,400);
speed=Random(223,321)
weight=Random(30,52)
thickness=Random(22,83)

 bullet= createSprite(50, 200, 50, 5);
bullet.velocityX=speed;
bullet.shapeColor=color(225)
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(230,230,230)
wall.shapeColore=color(80,80,80)

}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColore=color(255,0,0);

    }
  if(damage<10){
    wall.shapeColor=(0,255,0);
  }


  }
  
  
  drawSprites();
}


function hasCollided(lbullet,lwall){bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
  return false;
}