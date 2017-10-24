void setup() {
size(800,800);

smooth();
}

void draw() {
  background(255);
  translate(width/2,height/2);
  stroke(0);
  fill(0);
  ellipse(0,0,50,50);
  noFill();
  for(int i=0;i<6;i++){
  ellipse(0,0,200+40*i,200+40*i);
  
  
  }
  fill(40);
  float r1=100;
float a1=0;
  float x1=r1*cos(a1);
   float y1=r1*sin(a1);
  //line(0,0,x1,y1);
  ellipse(x1,y1,10,10);
  
  float r2=120;
  float a2=PI/3;
  float x2=r2*cos(a2);
   float y2=r2*sin(a2);
   //line(0,0,x2,y2);
   ellipse(x2,y2,10,10);
   
    float r3=140;
  float a3=PI*2/3;
  float x3=r3*cos(a3);
   float y3=r3*sin(a3);
   //line(0,0,x3,y3);
   ellipse(x3,y3,10,10);
   
      float r4=160;
  float a4=PI*3/3;
  float x4=r4*cos(a4);
   float y4=r4*sin(a4);
   //line(0,0,x4,y4);
   ellipse(x4,y4,10,10);
   
         float r5=160;
  float a5=PI*4/3;
  float x5=r5*cos(a5);
   float y5=r5*sin(a5);
   //line(0,0,x5,y5);
   ellipse(x5,y5,10,10);


      float r6=180;
  float a6=PI*5/3;
  float x6=r6*cos(a6);
   float y6=r6*sin(a6);
   //line(0,0,x6,y6);
   ellipse(x6,y6,10,10);
   
  //    float r7=200;
  //float a7=PI*6/;
  //float x7=r7*cos(a7);
  // float y7=r7*sin(a7);
  // line(0,0,x7,y7);
  // ellipse(x7,y7,10,10);

//  ellipse(200*cos(0),200*sin(0),20,20);
//   ellipse(320*cos(0),320*sin(0),30,30);
  //fill(40);

  
  
  
}
