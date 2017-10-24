float a;
float rotate;
void setup() {
  size(800, 800);
  smooth();
}
void draw() {
  background(255);
  translate(width/2, height/2);
  stroke(0);
  fill(0);
  ellipse(0, 0, 50, 50);
  noFill();
  for (int j=0; j<6; j++) {
    ellipse(0, 0, 200+40*j, 200+40*j);
  }
  rotate(rotate);
  rotate+=0.01;
  for (int i=0; i<6; i++) {
    fill(40);
    float r=100+i*20;
    a=PI/7*i;
    ellipse(r*cos(a), r*sin(a), 10+i*5, 10+i*5);
  }
}
