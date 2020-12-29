const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygonImgV = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    groundObj = new ground(600, 580, width,20);
   
    // level 2
    block1 = new Block(330, 235, 30, 40);
    block2 = new Block(360, 235, 30, 40);
    block3 = new Block(390, 235, 30, 40);
    block4 = new Block(420, 235, 30, 40);
    block5 = new Block(450, 235, 30, 40);
    // level 3
    block6 = new Block(360, 195, 30, 40);
    block7 = new Block(390, 195, 30, 40);
    block8 = new Block(420, 195, 30, 40);
    // level 3
    block9 = new Block(390, 155, 30, 40);
    
    polygonObj = Bodies.circle(100, 200, 20);
    World.add(world, polygonObj);

    chain = new Chain(polygonObj.body, {x:100, y:200});
}

function draw(){
    background("grey");
    Engine.update(engine);

    fill("brown")
    groundObj.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    
    // polygon.display();

    var pos = polygonObj.position;
    // imageMode(CENTER);
    // image(polygonImgV, pos.x, pos.y);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, 30, 30);

    chain.display();

    
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}