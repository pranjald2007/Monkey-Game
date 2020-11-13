
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score = 0;
var time = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  //creating the monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  //creating the ground
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;

  //creating groups
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background("white");

  //making the ground infinite
  ground.x = ground.width/2
  
  //making the monkey jump
  if(keyDown("space") && monkey.y >= 300){
    monkey.velocityY = -18;
  }
  
  //giving the monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  //making sure the monkey doesn't fall through the ground
  monkey.collide(ground);
  
  //writing the survival time
  stroke("black");
  textSize(0);
  fill("black");
  time = Math.ceil(frameCount);
  text("Survival Time: " + time, 10, 25);
  
  //writing the score
  stroke("white");
  textSize(15);
  fill("white");
  text("score: idk yet", 10, 40);
  
  drawSprites();
  
  spawnFood();
  
  spawnObstacles();
}



function spawnFood() {
   
  if (frameCount % 80 === 0) {
    //creating the food
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    //assign lifetime to the variable
    banana.lifetime = 200;

    //add each cloud to the group
    foodGroup.add(banana);
  }
  

}

function spawnObstacles() {
 
  if (frameCount % 300 === 0) {
    //creating the obstacles
    obstacle = createSprite(600,330,40,10);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    
    //assign lifetime to the variable
    obstacle.lifetime = 200;

    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  

}
