const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2;
var bird;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,20);
  box1 = new Box(700,300,50,50);
  box2 = new Box(900,300,50,50);
  pig1 = new Pig(800,320);
  log1 = new Log(800,275,250,PI/2);
  box3 = new Box(700,200,50,50);
  box4 = new Box(900,200,50,50);
  

  pig2 = new Pig(800,220);
  log2 = new Log(800,175,250,PI/2);
  box5 = new Box(800,100,50,50);


 
 
  log3 = new Log(730,80,150,PI/7);
  log4 = new Log(870,80,150,-PI/7);

  bird = new Bird(100,100);

 
}

function draw() {
  background(0);  

  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();
  
  ground.display();
}