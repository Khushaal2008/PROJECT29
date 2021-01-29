
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	
	engine = Engine.create();
	world = engine.world;

land = new Ground(10000,10)
sp = new Support(400,350,200,20)
sp2 = new Support(900,250,300,20)


redB = new RedBlock(330,318,30,40)
redB2 = new RedBlock(360,318,30,40)
redB3 = new RedBlock(390,318,30,40)
redB4 = new RedBlock(420,318,30,40)
redB5 = new RedBlock(450,318,30,40)

greenB = new greenBlock(360,277,30,40)
greenB2 = new greenBlock(390,277,30,40)
greenB3 = new greenBlock(420,277,30,40)

pinkB = new pinkBlock(390,237,30,40)


redB6 = new RedBlock(780,217,30,40)
redB7 = new RedBlock(811.5,217,30,40)
redB8 = new RedBlock(843,217,30,40)
redB9 = new RedBlock(874,217,30,40)
redB10 = new RedBlock(905,217,30,40)
redB11 = new RedBlock(937,217,30,40)
redB12 = new RedBlock(968,217,30,40)
redB13 = new RedBlock(999,217,30,40)
redB14 = new RedBlock(874,94,30,40)




greenB4 = new greenBlock(811.5,175,30,40)
greenB5 = new greenBlock(843,175,30,40)
greenB6 = new greenBlock(874,175,30,40)
greenB7 = new greenBlock(905,175,30,40)
greenB8 = new greenBlock(937,175,30,40)
greenB9 = new greenBlock(968,175,30,40)
greenB10 = new greenBlock(905,94,30,40)

pinkB2 = new pinkBlock(843,135,30,40)
pinkB3 = new pinkBlock(874,135,30,40)
pinkB4 = new pinkBlock(905,135,30,40)
pinkB5 = new pinkBlock(937,135,30,40)

ball = new Ball(100,250,10)

spring = new Rope(ball.body,{x:200,y:300})

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("purple");
Engine.update(engine)


spring.display();
land.display();
sp.display();
//ballT.display();
redB.display();
redB2.display();
redB3.display();
redB4.display();
redB5.display();

greenB.display();
greenB2.display();
greenB3.display();

pinkB.display();


redB6.display();
redB7.display();
redB8.display();
redB9.display();
redB10.display();
redB11.display();
redB12.display();
redB13.display();
redB14.display();

greenB4.display();
greenB5.display();
greenB6.display();
greenB7.display();
greenB8.display();
greenB9.display();
greenB10.display();

pinkB2.display()
pinkB3.display()
pinkB4.display()
pinkB5.display()

ball.display();



sp2.display();
  
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX , y:mouseY});
}

function mouseReleased(){
	spring.fly();
}

function keyPressed() {
	if(keyCode === 32){
		Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
		spring.attach(ball.body)
	                   }
	}