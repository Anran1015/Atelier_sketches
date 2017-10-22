var flower;


function preload(){
  flower=loadJSON("json.json");
  //preload the JSON file
}

function setup(){

createCanvas(700,700);
}

function draw(){
background(255);
fill(flower.r,flower.g,flower.b);//value of colour is grabbed from the JSON file
ellipse(mouseX, mouseY, flower.size,flower.size);// size is created with the data from json file

fill(0);
var s=map(mouseX, 0,700,10,200);
textSize(s);
text(flower.name, mouseX, mouseY);
//showing the name of flower on the top of the circle and change the position with it

}
