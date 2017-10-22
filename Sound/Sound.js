
var song;
var drum;


function preload() {
  // Load sound files
  song = loadSound('data/videoplayback.mp4');
  drum= loadSound('data/drum.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  song.loop();//background music is looping
}

function draw() {
rect(0,0,width,height);
fill(0);
  // Set the volume to a range between 0 and 1
  var volume = map(mouseX, 0, width, 1, 3);
  volume = constrain(volume, 1, 3); //set the volume between 1 and 3
  song.amp(volume);

  // Set the rate to a range between 0.01 and 4
  // Changing the rate alters the pitch
  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

  // Draw some circle to show what is going on
var m =map(mouseX,0,width,0,255);
  fill(m,23,100,m );// the colour of the circle is changing with the mouse position
var er =map(mouseX,mouseY,width,10,200);// the size of the circle is changing with the mouse position
  ellipse(mouseX, mouseY, er, er);
  
  
}

function keyPressed(){
 if (key=="D") {
      drum.play();
    //when key "D" is pressed, play the drum sound effect
    }
}
