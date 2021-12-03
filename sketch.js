
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var right;
var left;

function preload()
{
	
}

function setup() {
	createCanvas(600, 300);
	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.
	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(50,100,20,ball_options);
    World.add(world, ball);

	ground =new Ground(50,300,4000,20);
	right =new Ground(450, 250, 10, 100);
	left =new Ground(380, 250, 10, 100);

	Engine.run(engine);

	ellipseMode(RADIUS); 
}

function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);

  ground.show();
  right.show();
  left.show();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0});
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-50});
	}
}