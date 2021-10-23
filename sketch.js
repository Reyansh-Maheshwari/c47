var bg, bgImg;
var Spaceship, Spaceship_img
var laser,laser_img
var meteor, meteor_img
var meteorGroup
var laserGroup;
var GameOver, GameOver_img
var heart1, heart2, heart3
var heart1_img,heart2_img,heart3_img
var gameState="play"

function preload(){
    heart1_img = loadImage("images/Heart.png")
    heart2_img = loadImage("images/Heart.png")
    heart3_img = loadImage("images/Heart.png")
    
    laser_img = loadImage("images/beams.png")
    meteor_img = loadImage("images/Meteors.png")
    
    bgImg = loadImage("images/Space.png")
    Spaceship_img = loadImage("images/Spaceship.png")
    GameOver_img = loadImage("images/Game Over.png")

}
function setup(){
    createCanvas(windowWidth, windowHeight)

//     bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
// bg.addImage(bgImg)
//bg.scale = 3
Spaceship = createSprite(740,610,20,20)
Spaceship.addImage(Spaceship_img)
Spaceship.scale = 0.3


laserGroup = new Group()
meteorGroup = new Group()

}
function draw(){
    background(bgImg)
    text(mouseX+","+mouseY,mouseX,mouseY);

    if(keyDown(LEFT_ARROW)){
        Spaceship.x -=10

    }
    if(keyDown(RIGHT_ARROW)){
        Spaceship.x+=10
    }
    if(keyDown("space")){
        createLaser()
    }
    if(meteorGroup.isTouching(laserGroup)){
        meteorGroup[0].destroy()
    }
    spawnMeteor()
    
    drawSprites()
}
function spawnMeteor(){

    if(frameCount%60===0){
        meteor = createSprite(random(0,width),-10,20,20)
        meteor.addImage(meteor_img)
        meteor.scale = 0.2
    meteor.velocityY = 8
    
meteor.lifetime = 740
meteorGroup.add(meteor)
        
    }
    
}
function createLaser(){
    var laser = createSprite(730,540,60,10)
    laser.addImage(laser_img)
    laser.x = Spaceship.x
    laser.velocityY=-10
    laser.lifetime = 440
    laserGroup.add(laser)
    laser.scale = 0.3
    
}
