var data;

var angle = [];

var m,b;
var rad = 0;
var t = 0;
var pg;



function preload() {
  data=loadJSON("data/json.json");
  
  
}


function setup() {
  createCanvas(800, 800);
pg = createGraphics(800,800);
  pg.background(255,30);
  
}

function draw() {
  background(255);
  galaxy();
  fill(50);
  
  var y = year() + 1725;
  var m = month();
  var d = day();
  var h = hour();
  var s = second();
  var mil = round(millis());
  
  textSize(40,40);

  text(m+"."+d+"."+y, 290, 700);
//   text(y, 347, 740);

	textSize(30,30);
// 	text(h+":"+s, 450, 720);

	// var date = new Date();
// 	year += 30;
	
// 	text(date,400,600);
  translate(width/2, height/2);


////sun:
  stroke(0);
  fill(0);
  ellipse(0, 0, 50, 50);
  
  
  

  fill(0,150);
  strokeWeight(1);
//   saturnData();
//   marsData();
//   lines();


 
  
  for (var j=0; j<8; j++) {
    push();
    noStroke();
    fill(10,10,10,250-j*30);
   


/////rotate angles and speed
    var a=PI/3*j;
    var inc=data.planets[j].speed;
    
    angle.push(0);
	  angle[j]+=inc;
	    rotate(angle[j]);
////the position of each planet	
    var r=data.planets[j].dist;  
    var x=r*cos(a);
    var y=r*sin(a);
    ellipse(x, y, data.planets[j].size, data.planets[j].size);
    stroke(50);
    line(0,0,x,y);
    pop();
    
//// orbits
    noFill();
    strokeWeight(2);
    stroke(0,255-j*40);
    ellipse(0, 0, r*2, r*2);
  }
  
  
  /////////ring of sat!!
noFill();
strokeWeight(5);
stroke(10,10,10,60);
 var a=PI/3*j;
    var inc=data.planets[j].speed;
      var a=PI/3*5;
    angle.push(0);
	  angle[5]+=inc;
	    rotate(angle[5]);
	    ellipseMode(CENTER);
ellipse(data.planets[5].dist*cos(a)-2.7,data.planets[5].dist*sin(a)+1.2,data.planets[5].size*1.5,data.planets[5].size*1.5);



// ellipse(0, 0, 260*2,260*2);
// 
// for(var k=0;k<400;k++){
// noStroke();
// fill(11+k);
// ellipse(260*cos(k),260*sin(k),3,5);
// 
// 
// }

  
}


function galaxy(){
image(pg, 0,0);
  strokeWeight(2);
  stroke(0);
  
  for(m=0;m++<3000;b= noise(m%100)*9+t/rad, point(400+cos(b)*rad, 400+sin(b)*rad))
  {
     rad=abs(noise(m)-0.2)*400;
     t+=0.00001;
  }
  

}


function lines() {

  strokeWeight(random(1, 2));
  line(0, 0, -200, 200);
  line(0, 0, 50, 200);
  line(0, 0, 5, 200);
  line(0, 0, -300, 20);
  line(0, 0, -100, 50);
}






function saturnData(){
  var r1=100;
  var a1=0;
  var x1=r1*cos(a1);
  var y1=r1*sin(a1);
  //line(0,0,x1,y1);
  for(var i=0;i<9;i++){
  ellipse(x1+10*i,y1,14,14);
  }
}

  function marsData(){
  rotate(0.05);
  var r2=120;
  var a2=PI/3;
  var x2=r2*cos(a2)+20;
  var y2=r2*sin(a2)-50;
  //line(0,0,x1,y1);
  for(var i=0;i<5;i++){
  rect(x2+10*i,y2+10*i,14,14);
  }
}