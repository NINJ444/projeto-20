const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var ball2;
var ground2;

function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.95,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  var ball2_options = {
    restitution : 1.5,
    frictionAir : 0.5
  }

  var ground2_options = {
    isStatic : true
  }

  

  ball2 = Bodies.circle(300,10,20,ball2_options);
  World.add(world,ball2);

  ground2 = Bodies.rectangle(450,250,400,20,ground2_options);
  World.add(world,ground2);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background (51);
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,400,20);

 ellipse(ball2.position.x,ball2.position.y,20);
 rect(ground2.position.x,ground2.position.y,400,20);
}

