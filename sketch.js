var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftrectangle,leftbody;
var rightrectangle,rightbody;
var bottomrectangle,bottombody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

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


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    leftrectangle=createSprite(400,610,20,100);
	leftrectangle.shapeColor="red";
	leftbody=  Bodies.rectangle(400, 610, 20, 100 , {isStatic:true} );
	World.add(world, leftbody);
	
	rightrectangle=createSprite(550,610,20,100);
	rightrectangle.shapeColor="red";
	rightbody=  Bodies.rectangle(550, 610, 20, 100 , {isStatic:true} );
	World.add(world, rightbody);

	bottomrectangle=createSprite(480,650,150,20);
	bottomrectangle.shapeColor="red";
	bottombody=  Bodies.rectangle(480, 650, 150,20 , {isStatic:true} );
	World.add(world, bottombody);

	Engine.run(engine);
	
  if(keyPressed){
packageSprite.velocityY=-2;

  }
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageSprite.velocityY=-2;
    
  }
}
function keyPressed()
 { if (keyCode === LEFT_ARROW) { helicopterSprite.x=helicopterSprite.x-20; translation={x:-20,y:0}
  Matter.Body.translate(packageBody, translation) } else if (keyCode === RIGHT_ARROW) { helicopterSprite.x=helicopterSprite.x+20; translation={x:20,y:0}
   Matter.Body.translate(packageBody, translation) } else if
 (keyCode === DOWN_ARROW) { Matter.Body.setStatic(packageBody,false); } } 


