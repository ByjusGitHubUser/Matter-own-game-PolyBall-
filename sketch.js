
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var block;
var ground;
var left_wall;
var right_wall;
var top_wall;
var stand;
var volley;

function preload(){
  volley = loadImage('volley.png');
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  right_arrow = createImg('rightside.png');
  right_arrow.position(300,100);
  right_arrow.size(50,50);
  right_arrow.mouseClicked(rforce);

  left_arrow = createImg('leftside.png');
  left_arrow.position(50,100);
  left_arrow.size(50,50);
  left_arrow.mouseClicked(lforce);


  block = new Ground(200,200,50,90);
  ground = new Ground(200,390,400,10);
  right_wall = new Ground(400,200,10,400);
  left_wall = new Ground(10,200,10,400);
  top_wall = new Ground(200,20,400,10);
  stand = new Ground(200,300,10,200);
  

  ball = Bodies.circle(290,300,20, ballOption);
  World.add(world, ball);

  var ballOption = {
    restitution: 0.50
  }
  
}


function draw() 
{
  background(51);
  block.show();
  ground.show();
  ellipse(ball.position.x, ball.position.y, 20);

  if(ball!=null){
    image(volley,ball.position.x,ball.position.y,30,30);
  }

  Engine.update(engine);
  
}

function lforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.01,y:-0.05});
}

function rforce(){
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:-0.01,y:-0.05});
}
