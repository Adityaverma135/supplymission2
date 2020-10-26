var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1sprite,block1,block2,block3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	block1=createSprite(400,height-50,150,20);
	block1.shapeColor="red"

	block2=createSprite(320,height-115,20,150)
    block2.shapeColor="red"
   
	block3=createSprite(485,height-115,20,150)
	block3.shapeColor="red"



	engine = Engine.create();
	world = engine.world;

	block1=Bodies.rectangle(400,width-50,150,20, {isStatic:true} );
	World.add(world,block1);

	block2=Bodies.rectangle(320,width-115,20,150, {isStatic:true} );
	World.add(world,block2);

	block3=Bodies.rectangle(485,width-115,20,150, {isStatic:true} );
	World.add(world,block1);

	var options=
	{restitution:0.3, 
	isStatic:true
	}
	packageBody = Bodies.circle(width/2 , 200 , 5, options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {

		helicopterSprite.x=helicopterSprite.x-20;    
		var translation={
			x:-20,
			y:0
		}
		Matter.Body.translate(packageBody, translation)
	
	
	  } else if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x=helicopterSprite.x+20;
		var translation={x:20,y:0}
		Matter.Body.translate(packageBody, translation)
	  }
	  else if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
	  }
}



