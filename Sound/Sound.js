
var song;
var drum;


function preload() {
  // Load a sound file
  song = loadSound('data/videoplayback.mp4');
  drum= loadSound('data/drum.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  song.loop();
}

function draw() {
rect(0,0,width,height);
fill(0);
  // Set the volume to a range between 0 and 1.0
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 1, 3);
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitch
  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

  // Draw some circles to show what is going on
var m =map(mouseX,0,width,0,255);
  fill(m,23,100,m );
var er =map(mouseX,mouseY,width,10,200);
  ellipse(mouseX, mouseY, er, er);
  //stroke(0);
  //fill(51, 100);
  //ellipse(100, mouseY, 48, 48);
  
  
  
  
}

function keyPressed(){
 if (key=="D") {
      drum.play();
    
    rext(0,0,width,height);
  fill(255);
    }
}