
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide,rightSide;
var upButton;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	upButton = createImg('up.png');
	upButton.position(600,100);
	upButton.size(100,100);
	upButton.mouseClicked(force);

	//Create the Bodies Here.

	Engine.run(engine);
  
    groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1000,600,10,120);
	rightSide = new Ground(1250,600,10,120);

	var ball_options= {
		isStattic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(500,450,15,ball_options);
	World.add(world,ball)

	ellipseMode(RADIUS)
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,15)

  groundObj.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);
  
  drawSprites();
 
}

function force() {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:25,y:17})
}


