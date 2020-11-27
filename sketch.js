
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var ground1;
var tree1;
var boy1;
var launcher1;
var stone1;
var mango1,mango2,mango3,mango4,mango5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree1=new Tree(600,400,400,500);
ground1=new Ground(400,650,800,10);
boy1=new Boy(100,600,200,200);
mango1=new Mango(600,200);
mango2=new Mango(600,260);
mango3=new Mango(660,240);
mango4=new Mango(520,280);
mango5=new Mango(540,360);
stone1= new Stone(40,570,50,50);
launcher=new Launcher(stone1.body,{x:40,y:560});

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree1.display();
  ground1.display();

  collision(stone1,mango1);
  collision(stone1,mango2);
  collision(stone1,mango3);
  collision(stone1,mango4);
  collision(stone1,mango5);


  boy1.display();
mango1.display(); 
mango2.display(); 
mango3.display(); 
mango4.display(); 
mango5.display(); 
stone1.display();
launcher.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    launcher.fly();
}
function keyPressed(){
  if(keyCode===32){
      launcher.attach(stone1.body);
  }
}
function collision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=Lmango.r+Lstone.r)
  {
Matter.Body.setStatic(Lmango.body,false);
  }
}