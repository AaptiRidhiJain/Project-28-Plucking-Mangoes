const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var boyImage,boy;
var mango1,mango2,mango3,mango4,mango5;
var ground;
var slingshot;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(900,290,590,590);
	stone = new Stone(200,200,20);
	mango1 = new Mango(750,200,30);
	mango2 = new Mango(850,100,30);
	mango3 = new Mango(900,180,30);
	mango4 = new Mango(1100,200,30);
	mango5 = new Mango(1000,130,30);
	ground = new Ground(650,580,1300,20);
  slingshot = new SlingShot(stone.body,{x: 150, y:453});
  //stone.debug = true;

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  boy = createSprite(200,510,5,5);
	boy.addImage(boyImage);
	boy.scale = 0.1;
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  drawSprites();
 
  strokeWeight(1.5);
  fill("red");
  stroke("pink");
  textSize(30);
  text("Press SPACE to get a second chance to play!",100,50);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
  }
  
function mouseReleased(){
	slingshot.fly();
  }

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:400,y:400});
	    slingshot.attach(stone.body);
	}
  }

function detectCollision(lstone,lmango){
var mangoBodyPosition = lmango.body.position;
var stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance <= lmango.r + lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}
