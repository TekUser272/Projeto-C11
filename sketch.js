var rua, ruaimg
var jack, jackimg
var edges

//var cantodi
//var cantoesq

function preload(){

  //imagens pré-carregadas
  jackimg = loadAnimation ("Runner-1.png" , "Runner-2.png");
  ruaimg = loadImage ("path.png");

}

function setup(){

  createCanvas(500,400);
  //crie sprite aqui
  
  rua = createSprite(225,200,50,50);
  rua.addImage(ruaimg);

  jack = createSprite(250,300,20,30);
  jack.addAnimation("jackcorrendo" , jackimg);
  jack.scale = 0.06

  //edges = createEdgeSprites()

  //cantodi = createSprite(85,600,100,200)
  
}

function draw() {

  background("white");
  drawSprites();

  rua.velocityY = 5
  
  if (rua.y > 400){
    rua.y = height/2
  }

  jack.x = mouseX

  //jack.collide(cantodi)
  //jack.collide(edges[2])

  if (jack.x <= 95){
    jack.x = 125
  }
 
  if (jack.x >= 350){
    jack.x = 325
  }
}
