var dog, happyDog, dogIMG, happyDogIMG
var database
var foodS, foodStock




function preload(){
  dogIMG = loadImage("images/dogImg.png")
  happyDogIMG = loadImage("images/dogImg1.png")
}


function setup() {
  database = firebase.database();  
  createCanvas(500, 500);
  
  
  
  dog = createSprite(250,300,25,25);
  dog.addImage(dogIMG);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)



  

}


function draw() {  
background(46,139,87);
  drawSprites();
  
  //add styles here

  
/*  if( keyWentDown === RIGHT_ARROW){
    foodS = foodS -1;
    foodStock = foodStock -1;
    readStock();
    writeStock();
  }*/

fill("black");
  text("food left:" + foodS, 250,250)
  


  drawSprites();

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
function keyPressed(){
  if(keyWentDown === RIGHT_ARROW){
    writeStock(foodS);
    readStock();
    dog.addImage(happyDogIMG)

  }

}

