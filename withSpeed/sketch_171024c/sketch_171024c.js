var data;
var angle=0;

function preload() {
  data=loadJSON("data/json.json");
}


function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(255);
  translate(width/2, height/2);
  

////sun:
  stroke(0);
  fill(0);
  ellipse(0, 0, 50, 50);



  for (var j=0; j<10; j++) {
    fill(10,10,10,j*20);
   


/////rotate angles and speed
    var a=PI/3*j;
    var inc=data.planets[j].speed;
    rotate(angle);
	angle+=inc;
	
////the position of each planet	
    var r=data.planets[j].dist;  
    var x=r*cos(a);
    var y=r*sin(a);
    ellipse(x, y, data.planets[j].size, data.planets[j].size);
    
//// orbits
    noFill();
    ellipse(0, 0, r*2, r*2);
  }



}