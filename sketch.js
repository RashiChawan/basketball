const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var backGroundImg;


function preload(){
backGroundImg=loadImage("images/basket ball.jpg")

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    ball = new Ball(200,100,20);
    rightBox=new Basket(700,310,19,90);
    middle= new Basket(640,345,100,19);
    leftBox=new Basket(600,300,19,80);
    
   
   ground= new Ground(600,height-100,1200,20)
  
    Engine.run(engine);
}


function draw() {
   background(backGroundImg);
   
  
  
  ball.display();
  ground.display();
  leftBox.display();
  middle.display();
  rightBox.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.p, ball.p.position, {x : 55, y : -85});
	}
}
