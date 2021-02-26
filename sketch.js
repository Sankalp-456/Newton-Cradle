
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 100, 400, 40);

	bobObject1 = new Bob(220, 400, 80);
	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);

	bobObject2 = new Bob(320, 400, 80);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*2, 0);

	bobObject3 = new Bob(420, 400, 80);
	rope3 = new Rope(bobObject3.body, roof.body);

	bobObject4 = new Bob(520, 400, 80);
	rope4 = new Rope(bobObject4.body, roof.body, bobDiameter*2, 0);

	bobObject5 = new Bob(620, 400, 80);
	rope5 = new Rope(bobObject5.body, roof.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  roof.display();

  bobObject1.display();
  rope1.display();

  bobObject2.display();
  rope2.display();

  bobObject3.display();
  rope3.display();

  bobObject4.display();
  rope4.display();

  bobObject5.display();
  rope5.display();

  
  drawSprites();
 
}


function keyPressed(){

  if(keyPressed === LEFT_ARROW){
      bobObject1.body.velocityX = -4;
  }

}



