//gamestates
var PLAY = 1;
var END = 0;
var CRASH=2;
var gameState = PLAY;
var score=0;

//background
var ground,backgroundimg;

//crash
var crash;

//bike
var bikeimg,bikeimg2,bike,bike3right,bike3left;

//car
var car;

//car1
var car1img;

//car2
var car2img;

//car3
var car3img;

//car4
var car4img;

//car5
var car5img;

//car6
var car6img;

//car7
var car7img;

//rockstar
var rockstarimg,rockstar;

//boom
var boomimg,boom;

//crashsound
var crashsnd;

//racesound
var racesnd;

//gameend
var RESTART,GAMEOVER;

//gameoverimg
var gameoverimg;


function preload(){
//backgroundimg
backgroundimg = loadImage("images/backgroundimg.jpg")

//bikeimg
bikeimg = loadAnimation("images/bike3.png")

//bikeimg2
bikeimg2 = loadImage("images/bike3.png")

//bike3right
bike3right = loadAnimation("images/bike3right.jpeg")

//bike3left
bike3left = loadAnimation("images/bike3left.jpeg")

//car1img
car1img = loadImage("images/car1.png")

//car2img
car2img = loadImage("images/car2.png")

//car3img
car3img = loadImage("images/car3.png")

//car4img
car4img = loadImage("images/car4.png")

//car5img
car5img = loadImage("images/car5.png")

//car6img
car6img = loadImage("images/car6.png")

//car7img
car7img = loadImage("images/car7.png")

//rockstarimg
rockstarimg = loadImage("images/rockstar.png")

//boomimg
boomimg = loadImage("images/boom.png")

//restart
restartimg = loadImage("images/restartimg.jpg")

//gameoverimg
gameoverimg = loadImage("images/gameover.jpg")

//crashsound
crashsnd = loadSound("sounds/crashsound.mp3")

//racesound
racesnd = loadSound("sounds/racesound.mp3")

}

function setup() {
  createCanvas(700,720);

//ground
ground = createSprite(350,350,400,700);
  ground.addImage("ground",backgroundimg);

  //bike
  bike = createSprite(250,320,50,50);
  bike.addAnimation("bikeimg",bikeimg);
  bike.scale = 0.7;
 
  //rockstar
  rockstar = createSprite(40,45,50,50);
  rockstar.addImage("rockstar",rockstarimg);
  rockstar.scale = 0.3;

  RESTART = createSprite(350,460,30,30);
  RESTART.addImage("restart",restartimg);
  RESTART.scale=0.6;
  RESTART.visible=false;

  GAMEOVER = createSprite(350,300,30,20);
  GAMEOVER.addImage("gameover",gameoverimg);
  GAMEOVER.scale=0.9;
  GAMEOVER.visible=false;

  score=0;
   CarsGroup = new Group();
   BoostGroup = new Group();
}

function draw() {
        
  background(255);
  text("Score: "+ score, 350,350);
  console.log(bike.x);
  if (gameState === PLAY){
  bike.velocityX = 0;
  bike.velocityY = 0; 

  score = score + Math.round(getFrameRate()/60);
  ground.velocityY = 6
 
  if (ground.y > 700) {
   ground.y = 350
}

  // right arrow
   if(keyDown("RIGHT_ARROW")) {    
    bike.velocityX = 5;
    }
 
  //left arrow
  if(keyDown("LEFT_ARROW")) {
    bike.velocityX = -5;
  }

  if(GAMEOVER.visible) {
        CarsGroup.setVelocityXEach(0);
        CarsGroup.setVelocityYEach(0);
        CarsGroup.destroyEach();
        CarsGroup.visible=false;
        ground.velocityX=0;
        ground.velocityY=0;
        bike.visible=false; 
        car.x = -800;
  car.y = -800;        
      }
      
  if (bike.x<100 || bike.x>615 || CarsGroup.isTouching(bike)) {     
   gameover(); 
   CarsGroup.visible=false;
   car.x = -800;
  car.y = -800;   
  }


  spawncars();
  spawncars2();
  spawncars3();
  spawncars4();
}



if(mousePressedOver(RESTART)) {
        gameState = PLAY;
        reset();
}



drawSprites();

}


function gameover(){
  CarsGroup.setVelocityXEach(0);
  CarsGroup.setVelocityYEach(0);
  CarsGroup.destroyEach();
  CarsGroup.visible=false;
  car.x = -800;
  car.y = -800;
  ground.velocityX=0;
  ground.velocityY=0;
  bike.visible=false;
  RESTART.visible=true;
  GAMEOVER.visible=true;  
}

function reset(){
  gameState = PLAY;  
  CarsGroup.setVelocityXEach(0);
  CarsGroup.setVelocityYEach(-6);
  ground.velocityY=6;
  bike.visible=true;
  bike.x = 250;
  bike.y = 320;
  GAMEOVER.visible=false;
  RESTART.visible=false;
}

function spawncars() {
  if(frameCount % 100 === 0) {
     car = createSprite(180,700,10,40);

   //car.debug = true;
    car.velocityY = -6;
      car.scale = 1.2;
   
                                                                                    
    //generate random cars
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: car.addImage(car1img);
              break;
      case 2: car.addImage(car2img);
              break;
      case 3: car.addImage(car3img);
              break;
      case 4: car.addImage(car4img);
              break;
      case 5: car.addImage(car5img);
              break;
      case 6: car.addImage(car6img);
              break;  
      case 7: car.addImage(car7img);
              break;      
      default: break;
    }

    //assign scale and lifetime to the car           
    car.lifetime = 300;
    //add each car to the group
    CarsGroup.add(car);
  }
}

function spawncars2() {
  if(frameCount % 200 === 0) {
     car = createSprite(280,700,10,40);
   //car.debug = true;
    car.velocityY = -6;
      car.scale = 1.2;
                                                                                    
    //generate random cars
    var rand = Math.round(random(1,5));
    switch(rand){
    case 1: car.addImage(car1img);
              break;
      case 2: car.addImage(car2img);
              break;
      case 3: car.addImage(car3img);
              break;
      case 4: car.addImage(car4img);
              break;
      case 5: car.addImage(car5img);
              break;
      case 6: car.addImage(car6img);
              break;  
      case 7: car.addImage(car7img);
              break;      
      default: break;
    }

    //assign scale and lifetime to the car           
    car.lifetime = 300;
    //add each car to the group
    CarsGroup.add(car);
  }
}

function spawncars3() {
  if(frameCount % 300 === 0) {
     car = createSprite(420,700,10,40);
   //car.debug = true;
    car.velocityY = -6;
      car.scale = 1.2;
                                                                                    
    //generate random cars
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: car.addImage(car1img);
              break;
      case 2: car.addImage(car2img);
              break;
      case 3: car.addImage(car3img);
              break;
      case 4: car.addImage(car4img);
              break;
      case 5: car.addImage(car5img);
              break;
      case 6: car.addImage(car6img);
              break;  
      case 7: car.addImage(car7img);
              break;      
      default: break;
    }

    //assign scale and lifetime to the car           
    car.lifetime = 300;
    //add each car to the group
    CarsGroup.add(car);
  }
}

function spawncars4() {
  if(frameCount % 400 === 0) {
     car = createSprite(520,700,10,40);
   //car.debug = true;
    car.velocityY = -6;
      car.scale = 1.2;
                                                                                    
    //generate random cars
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: car.addImage(car1img);
              break;
      case 2: car.addImage(car2img);
              break;
      case 3: car.addImage(car3img);
              break;
      case 4: car.addImage(car4img);
              break;
      case 5: car.addImage(car5img);
              break;
      case 6: car.addImage(car6img);
              break;  
      case 7: car.addImage(car7img);
              break;      
      default: break;
    }

    //assign scale and lifetime to the car           
    car.lifetime = 300;
    //add each car to the group
    CarsGroup.add(car);
  }
}

