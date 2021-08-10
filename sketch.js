var plane,planei,planed,planes,planea;
var enemyGroup;
var bulletGroup;
var enemy;
var explosiona;
var bgs;
var gameState=1;
var score;
var Lives;
var flag=1;
var bulletsGroup;
var bag;
var bags;
var te;

function setup() {
  createCanvas(800,400);

  bags = createSprite(0,100);
  bags.addImage("palne",bag);
  bags.scale=0.5;
  bags.x=bags.width*bags.scale/2;
  bags.velocityX=-10;
  bags.depth=1;

  plane = new Plane(200,200,20,10);

  bulletGroup = new Group();  
  bulletsGroup = new Group();  

  enemy = new Plane(800,random(200,400),20,20);
  enemy.plane.velocityX=-6;
  enemy.plane.mirrorX(-1);
  score=0;
  Lives=3;

  edges = createEdgeSprites();

  te = createElement("h2");
 

  //enemyGroup.add(enemy.plane);  


}

function preload(){
  planei = loadImage("i/tile000.png");
  planed = loadImage("i/sgfs.png");
  planes = loadImage("i/tile010.png");
  planea = loadImage("i/rrr.png");
  planef = loadImage("i/tile002.png");
  bullet1 = loadImage("i/images.png");
  explosiona= loadAnimation("h/tile000.png","h/tile001.png","h/tile002.png","h/tile003.png","h/tile004.png","h/tile005.png","h/tile006.png","h/tile007.png","h/tile008.png","h/tile009.png","h/tile010.png","h/tile011.png","h/tile012.png","h/tile013.png","h/tile014.png","h/tile015.png","h/yre.png");
  explosiona.looping=false;
  bgs = loadImage("h/this.jfif");
  bag = loadImage("h/aja.jpg");

}

function draw() {
  background(bgs);
  
  if(bags.x<0){
    bags.x=bags.width*bags.scale/2;
  } 

  te.html=("Enemies killed:"+score);
  te.position(100,100)

 // console.log(gameState);
 

  enemy.plane.debug=true;
  //enemy.plane.setcollider=20,20;
  plane.plane.debug=true;
  plane.plane.collide(edges);
  enemy.plane.bounceOff(edges[1]);
  enemy.plane.bounceOff(edges[3]);

  if(gameState===1){
    
  plane.keys();

  if(keyDown("SPACE")){
    plane.shoot(1); 
  
  }
  if(bulletGroup.isTouching(plane.plane)||(enemy.plane.isTouching(plane.plane)&&plane.plane.visible===true)){
   
    bulletGroup[0].remove();
    console.log("Attacked!")
    plane.plane.changeAnimation("explosiona",explosiona);
    if(flag===1){
      Lives=Lives-1;
      flag=0;
      var wewa = createSprite(plane.plane.x,plane.plane.y);
      wewa.addAnimation("explosiona",explosiona);
      wewa.scale=1;
      plane.plane.visible=false;
      
    }
    

  }

    if(bulletsGroup.isTouching(enemy.plane)){
      score=score+1;
      var wewa = createSprite(enemy.plane.x,enemy.plane.y);
      wewa.addAnimation("explosiona",explosiona);
      wewa.scale=1;
      enemy.plane.visible=false;
   
      }
    
  }
  
  enemy.x=enemy.plane.x;
  enemy.y=enemy.plane.y-5;
  if(enemy.plane.x<0){
    enemy.plane.x=600;
    enemy.plane.y=random(200,400);
    enemy.plane.velocityY=random(-3,3);
    enemy.plane.visible=true;
    plane.plane.visible=true;
    if(flag===0&&Lives>=0){
      plane.plane.changeAnimation("planei",planei)
      flag=1;
    }
    else if(Lives<0){
      gameState=2;
    }

  }


 /* if(enemy.plane.isTouching(plane.plane) && plane.plane.visible===true){

   // gameState=2;
    Lives=Lives-1
    var wewa = createSprite(enemy.plane.x,enemy.plane.y);
   wewa.addAnimation("explosiona",explosiona);
   wewa.scale=1;
   score=score+1;

   plane.plane.visible=false;
  }*/ 

  if(enemy.plane.visible===true){
    enemy.shoot(-1);

}

 

 if(gameState===2&&keyDown("a")){
   gameState=1;
   Lives=3;
   enemy.plane.visible=true;  
   plane.plane.visible=true;
   plane.plane.changeImage("planei",planei);
   score=0;

 }

  drawSprites();

  //text("black")
  textStyle(BOLDITALIC);
  fill("black");
  textFont("Alegbra");
  if(Lives===3){
    text("Lives: ♥♥♥",300,100);

  }
   else if(Lives===2){
    text("Lives: ♥♥",300,100);
    
  }
  else if(Lives===1){
    text("Lives: ♥",300,100);
    
  }
  else{
    text("Lives: 0",300,100);

  }

 
  text("Enemies Killed:"+score,200,100);

  if(gameState===2){
   
    enemy.plane.y=200;
    enemy.plane.x=800;
    //enemy.plane.visible=false;  
    Lives=0;
    text("You were killed! Press A to restart!",width/2-200,height-50);
 
  }

}
