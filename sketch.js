

 var lep_running, lep;
 var ground_img,ground;
 var hWood, wood_img, HWoodGroup;
 var bg;
 

 function preload(){
    lep_running =  loadAnimation("images/l1.png","images/l2.png","images/l3.png");
    lep_running_reverse =  loadAnimation("images/l1flip.png","images/l2flip.png","images/l3flip.png");
    ground_img  =  loadImage("images/grass.png");
    wood1  = loadImage("images/EWood.png");
    bg  = loadImage("images/bg.png");
 }
 function setup(){
    createCanvas(displayWidth,displayHeight-150);

    // myEngine  = Engine.create();
    // myWorld  =  myEngine.world;


    ground   = createSprite(width/2, height-100,width,30);
    ground.addImage("ground",ground_img);
    ground.x  = ground.width / 2;
   // ground.velocityX  = -2;

    lep = createSprite(50,height-150);
    lep.addAnimation("run", lep_running);
    lep.addAnimation("reverse",lep_running_reverse);

    HWoodGroup = new Group ();

//     invisibleGround  = createSprite(width/2, height-1,width,5)
//    invisibleGround.visible = false;

horizontalWood(150);
horizontalWood(500);


 }

 function draw(){

    background(bg);
    lep.collide(ground);

    
   // hWood(350);
 
    //hWood(700);

    if(ground.x < 0){
       ground.x = ground.width/2
    }

    if(keyDown("space")){
        lep.velocityY  = -10;
    }
    lep.velocityY  = lep.velocityY +0.5;

    if(keyDown("right")){
        lep.x  = lep.x +5;
        lep.changeAnimation("run", lep_running);
    }

   if(lep.isTouching(HWoodGroup)){
    lep.collide(HWoodGroup);
    //lep.velocityY = -3;
   }

   if(keyDown("left")){
       lep.x = lep.x-5;
    lep.changeAnimation("reverse",lep_running_reverse)
   }
    drawSprites();

 }


 function horizontalWood(x){
   hWood  = createSprite(x,height-160);
   hWood.addImage("wood1",wood1);
   hWood.scale = 0.8
   //lep.debug  = true;
   lep.setCollider("rectangle",0,0,70,70);
   HWoodGroup.add(hWood);

 }