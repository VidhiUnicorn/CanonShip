const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;
var ground;
var canon1;
var ball; 

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower ();
    
    ground = new Ground ();

    canon1 = new Canon (180,110,100,50,-PI/4);

    ball = new CanonBalls (canon1.x,canon1.y);
    
}

function draw(){
    background(120);
    Engine.update(engine);
   
    tower.show();
    ground.display ();
    canon1.showC();
    ball.show ();
    
}

function keyReleased (){
    if (keyCode === DOWN_ARROW){
        ball.shoot (); 
    }
}