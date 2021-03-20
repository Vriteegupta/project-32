
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundColor, nightBackground;
var ground, platform;

//making an arrays to hold all the bottles
//9 rows
var bottles = [[],[],[],[],[],[],[],[]];
var baseball, toss;
var gameState = "start";
var misses = 0;
var turn = 1;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(500,580,1000,40,"green");
	platform = new Ground(675,510,650,100, "brown");

	//creates bottles in a row
	for(var i=0; i<10; i++) {
		bottles[0].push(new Bottle(550+25*i,500))
	}
	for(var i=0; i<6; i++) {
		bottles[1].push(new Bottle(600+25*i,350))
	}
	for(var i=0; i<3; i++) {
		bottles[2].push(new Bottle(640+25*i,200))
	}
	for(var i=1; i<2; i++) {
		bottles[3].push(new Bottle(640+25*i,110))
	}

	//console.log(bottles);
	
	baseball = new Ball(100,300);

	toss = new Slingshot(baseball.body, {x:100, y:300});

	Engine.run(engine);
  
}

function draw() {
	if(backgroundColor)
  background(backgroundColor);

  push()
  textAlign(CENTER)
  fill("white")
  textSize(24)
  text("Misses:"+misses,60,30);
  textSize(32)
  text("Turn #:"+turn, 500,40);
  if(gameState === "start") {
  		textSize(24)
  		text("Instructions: Try to hit all the bottles down with the least amount of misses and turns! Press space to get another turn",150, 125, 350)
	}
  pop()

  //makes ground and stand
  ground.display();
  platform.display();
  
  //displays the bottles
  
  for(var i=0; i<10; i++) {
	  bottles[0][i].display();
  }
  for(var i=0; i<6; i++) {
	  bottles[1][i].display();
  }
  for(var i=0; i<3; i++) {
		bottles[2][i].display();
  }
  for(var i=0; i<1; i++) {
		bottles[3][i].display();
  }

  //makes baseball
  baseball.display();

  toss.display();

  if(baseball.body.position.y > 590 || baseball.body.position.y < -200 || 
	baseball.body.position.x < -10000 || baseball.body.position.x > 1005) {
		Matter.Body.setPosition(baseball.body, {x:100, y:300});
		toss.attach();
		misses=misses+1;
		gameState = "ready";
	}

	Time();

  drawSprites();
}

function keyPressed() {
	if(keyCode === 32 && baseball.body.speed < 1) {
		Matter.Body.setPosition(baseball.body, {x:100, y:300});
		toss.attach();
		gameState = "ready";
	}
}

function mouseDragged() {
	if(gameState === "ready" || gameState === "start") {
		Matter.Body.setPosition(baseball.body, {x:mouseX, y:mouseY});
	}
}

function mouseReleased() {
	toss.launch();
	if(gameState === "ready"){
		turn=turn+1;
	}
	gameState = "thrown";
}

async function Time() {
	var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
	
    var time = responseJSON.datetime;
	
    var data = time.slice(11,13);

	
    if(data > 06 && data < 20) {
        backgroundColor = rgb(52, 204, 255);
    }
    else {
        backgroundColor = rgb(0, 0, 128);
    }
} 