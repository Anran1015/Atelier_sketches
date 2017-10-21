var flower;


function preload(){
  flower=loadJSON("json.json");
}

function setup(){

createCanvas(700,700);



}

function draw(){
background(255);
fill(flower.r,flower.g,flower.b);
ellipse(mouseX, mouseY, flower.size,flower.size);

fill(0);
var s=map(mouseX, 0,700,10,200);
textSize(s);
text(flower.name, mouseX, mouseY);


}