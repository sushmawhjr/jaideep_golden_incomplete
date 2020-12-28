

 var lep_running, lep;
 var ground_img,ground;
 var hWood, wood_img;
 

 function preload(){
    lep_running =  loadAnimation("images/l1.png","images/l2.png","images/l3.png");
    lep_running_reverse =  loadAnimation("images/l1flip.png","images/l2flip.png","images/l3flip.png");
    ground_img  =  loadImage("images/grass1.png");
    wood1  = loadImage("images/EWood.png");
 }
 function setup(){
    createCanvas(displayWidth,displayHeight-150);

    // myEngine  = Engine.create();
    // myWorld  =  myEngine.world;


    ground   = createSprite(width/2, height-100,width,30);
    ground.addImage("ground",ground_img);

    lep = createSprite(50,height-150);
    lep.addAnimation("run", lep_running);
    lep.addAnimation("reverse",lep_running_reverse)

//     invisibleGround  = createSprite(width/2, height-1,width,5)
//    invisibleGround.visible = false;
    
   hWood  = createSprite(width/2,height-160);
   hWood.addImage("wood1",wood1);
   hWood.scale = 0.8
   //lep.debug  = true;
   lep.setCollider("rectangle",0,0,70,70)

   

 }

 function draw(){

    background("white");
    lep.collide(ground);


    if(keyDown("space")){
        lep.velocityY  = -10;
    }
    lep.velocityY  = lep.velocityY +0.5;

    if(keyDown("right")){
        lep.x  = lep.x +5;
        lep.changeAnimation("run", lep_running);
    }

   if(lep.isTouching(hWood)){
    lep.collide(hWood);
   }

   if(keyDown("left")){
       lep.x = lep.x-5;
    lep.changeAnimation("reverse",lep_running_reverse)
   }
    drawSprites();

 }