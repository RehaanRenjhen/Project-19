var fixedrectangle,movingrectangle
function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(200,200,50,100)
  movingrectangle=createSprite(100,100,50,50)
  movingrectangle.shapeColor="green"
  fixedrectangle.shapeColor="green"
  
}

function draw() {
  background("black")
  movingrectangle.x=World.mouseX
  movingrectangle.y=World.mouseY
  if(fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2){
    movingrectangle.shapeColor="red"
    fixedrectangle.shapeColor="red"   
  }
  else{ movingrectangle.shapeColor="green"
  fixedrectangle.shapeColor="green"}
  drawSprites();
}