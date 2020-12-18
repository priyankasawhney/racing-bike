//gamestates
var PLAY = 1;
var END = 0;
var CRASH=2;
var gameState = PLAY;

//background
var ground,backgroundimg;

//crash
var crash;

//bike
var bikeimg,bikeimg2,bike,bike3right,bike3left;

//car1
var car1img,car1;

//car2
var car2img,car2;

//car3
var car3img,car3;

//car4
var car4img,car4;

//car5
var car5img,car5;

//car6
var car6img, car6;

//car7
var car7img, car7;

//rockstar
var rockstarimg,rockstar;

//boom
var boomimg,boom;

//crashsound
var crashsnd;

//racesound
var racesnd;

//gameend
var restart;
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

//score
score = 0;

}

function setup() {
  createCanvas(700,720);

  //crash


//ground
ground = createSprite(350,350,400,700);
  ground.addImage("ground",backgroundimg);
  //ground.y = ground.height/2;
  //ground.velocityY = 6

  //bike
  bike = createSprite(250,250,50,50);
  bike.addAnimation("bikeimg",bikeimg);
  bike.scale = 0.7;
 
  //rockstar
  rockstar = createSprite(40,45,50,50);
  rockstar.addImage("rockstar",rockstarimg);
  rockstar.scale = 0.3;

  //restart
  restart=createSprite(300,150);  
  restart.addImage("restartimg",restartimg);
  restart.scale = 0.4;
  restart.visible = false;

 

  score=0;
   CarsGroup = new Group();
}

function draw() {
        
  background(255);
  
  if (gameState === PLAY){
  bike.velocityX = 0;
  bike.velocityX = 0; 
  ground.velocityY = 6
 
  if (ground.y > 700) {
   ground.y = 350
}

  // right arrow
   if(keyDown("RIGHT_ARROW")) {
    bike.velocityX = 5;
   bike.addAnimation("bikeimg",bike3right);
    }


 
  //left arrow
  if(keyDown("LEFT_ARROW")) {
    bike.velocityX = -5;
    bike.addAnimation("bikeimg",bike3left);
    bike.addImage("bikeimg",bikeimg2);
  }

  if (bike.x<50 || bike.x>670 || CarsGroup.isTouching(bike)) {
   //gameState = END;     
   gameover();    
  }


  spawncars();
  spawncars2();
  spawncars3();
  spawncars4();
}



else if (gameState === END){
gameover=createSprite(300,200,700,720)
 gameover.addImage(gameOverImage);
 ground.velocityY=0
  CarsGroup.setVelocityXEach(0);
  bike.velocityX=0; 
}

drawSprites();
}
function keyPressed(){
   if(keyCode === 37)
   {
   bike.velocityX = -5;
   bike.addAnimation("bikeimg",bike3left);   
   }
   if(keyCode === 39)
   {
   bike.velocityX = 5;
   bike.addAnimation("bikeimg",bike3right); 
   }
}

function gameover(){
  CarsGroup.setVelocityXEach(0);
  CarsGroup.setVelocityYEach(0);
  CarsGroup.destroyEach();
  ground.velocityX=0;
  ground.velocityY=0;
  bike.destroy();

  var GAMEOVER = createSprite(350,300,30,20);
  GAMEOVER.addImage("gameover",gameoverimg);
  GAMEOVER.scale=0.9;

  var RESTART = createSprite(350,460,30,30);
  RESTART.addImage("restart",restartimg);
  RESTART.scale=0.6;

}


function spawncars() {
  if(frameCount % 170 === 0) {
    var car = createSprite(180,700,10,40);

   //car.debug = true;
    car.velocityY = -6;
   
                                                                                    
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
  if(frameCount % 100 === 0) {
    var car = createSprite(280,700,10,40);
   //car.debug = true;
    car.velocityY = -6;
                                                                                    
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
  if(frameCount % 180 === 0) {
    var car = createSprite(420,700,10,40);
   //car.debug = true;
    car.velocityY = -6;
                                                                                    
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
  if(frameCount % 150 === 0) {
    var car = createSprite(520,700,10,40);
   //car.debug = true;
    car.velocityY = -6;
                                                                                    
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