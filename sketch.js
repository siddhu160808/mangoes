const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var chance = 0;
var bgimg;
function preload()
{
	//bgimg=loadImage("images/pmbg.png");
	boyImage = loadImage("images/boy.png");
  treeImg = loadImage("images/tree.png");
  
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	GROUND = new Ground(500,594,1000,10);
	STONE =  new Stone(180,376,5);
	MANGO_1 = new Mango(725,200,30);
	MANGO_2 = new Mango(775,145,30);
	MANGO_3 = new Mango(825,255,30);
	MANGO_4 = new Mango(945,245,30);
  MANGO_5 = new Mango(850,175,30);
  MANGO_6 = new Mango(925,175,30);
  MANGO_7 = new Mango(750,285,30);
  MANGO_8 = new Mango(660,250,30);
  MANGO_9= new Mango(890,270,30)
 ELASTIC = new Elastic(STONE.body,{x:150,y:370});
}


function draw() {
  background("lightblue");

 
 
  Engine.update(engine);
  drawSprites();
  push();
  imageMode(CENTER);
  image(treeImg,500,310,1000,620);
  image(boyImage,225,450,250,350);
  
  
  stroke(179, 119, 249);
  textSize(40);
  fill(120, 29, 125);
  textFont("Freestyle Script");
  text("Chances Taken - " + chance,20,125)
  textSize(40);
  fill(100, 50, 50); 
  textFont("Viner Hand ITC");
  text("Press Space To Get A Second Chance To PLAY!!",60,50);
  pop();
  MANGO_1.display();
  MANGO_2.display();
  MANGO_3.display();
  MANGO_4.display();
  MANGO_5.display();
  MANGO_6.display();
  MANGO_7.display();
  MANGO_8.display();
 MANGO_9.display(); 
  STONE.display();
  ELASTIC.display();
  Collision(STONE,MANGO_1);
  Collision(STONE,MANGO_2);
  Collision(STONE,MANGO_3);
  Collision(STONE,MANGO_4);
  Collision(STONE,MANGO_5);
  Collision(STONE,MANGO_6);
  Collision(STONE,MANGO_7);
  Collision(STONE,MANGO_8);
Collision(STONE,MANGO_9); 
}
function mouseDragged(){
  Matter.Body.setPosition(STONE.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  ELASTIC.fly();
  chance = chance + 1;
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(STONE.body, {x:180, y:376});
    ELASTIC.attach(STONE.body);
  }
}
function Collision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
