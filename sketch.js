
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    block8 = new block (330,235,30,40);
    block9 = new block (360,235,30,40);
    block10 = new block (390,235,30,40);
    block11 = new block (420,235,30,40);
    block12 = new block (450,235,30,40);
    block13 = new block (360,195,30,40);
    block14 = new block(390,195,30,40);
    block15 = new block (420,195,30,40);
    block16 = new block (390,115,30,40);

    block1 = new block (630,-165,30,40);
    block2 = new block (660,-165,30,40);
    block3 = new block (690,-165,30,40);
    block4 = new block (720,-165,30,40);
    block5 = new block (750,-165,30,40);
    block6 = new block (660,-205,30,40);
    block7 = new block(690,-205,30,40);
    block17 = new block (720,-205,30,40);
    block18 = new block (690,-285,30,40);

    stopper = new ground (200,700,200,100);


    ground1 = new ground (400,700,200,20);
    ground2 = new ground (700,500,200,20);


    launcher1 = new launcher (200,50);

    slingshot1 = new SlingShot(launcher1.body,{x:200, y:600});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block17.display();
    block18.display();
    launcher1.display();
    slingshot1.display(); 
   ground1.display();  
   ground2.display();
   stopper.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(launcher1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}