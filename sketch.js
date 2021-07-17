const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg,snowImg;
var snows =[];
function preload(){
  backgroundImg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
  var canvas = createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
    if(frameCount%60 === 0){
    snows.push(new snow(random(10,1400),10));
  }
  for (var s = 0;s<snows.length;s++){
    snows[s].display();
  }
  drawSprites();
}