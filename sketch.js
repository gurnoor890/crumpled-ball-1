
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftside;
var rightside;
var bottom;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	



	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,650,1200,20);

	//Create the Bodies Here.
  leftside = new Dustbin(550,590,20,100);
  rightside = new Dustbin(670,590,20,100);
  bottom = new Dustbin(610,633,100,20);
  paper = new Paper(100,600,10);
	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  background("black");
  rectMode(CENTER);
  Engine.update(engine);

  ground.display();
  leftside.display();
  rightside.display();
  bottom.display();
  paper.display();

  
  drawSprites();

 
 
}



