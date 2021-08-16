const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,left,right,bridge;
var stones = [];
var stone;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height-10,windowWidth,20,"brown");
  left = new Base (300,height/2+50,300,200,"yellow");
  right = new Base (width-300,height/2+50,300,200,"yellow");

  bridge = new Bridge(10,{x:width/2-300,y:height/2});

  jointPoint = new Base(width-400,height/2,10,10,"yellow");

  Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge,jointPoint);

  for (var i =0;i<=7;i++) {
    var x = random(width/2-150,width/2+300);
    var y = random(-10,200);
    stone = new Stone(x,y,50,"white");
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  left.display();
  right.display();
  bridge.show();

  jointPoint.display();

  for (var stone of stones) {
    stone.display();
  }
}
