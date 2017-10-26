/* 
FINAL CODE: FUTURE SPACE CLOCK
DIGF 2004 - Atelier I
Anran Zhou, Enna Kim, Vivian Wong
Professor Adam Tindale

References:
//reference: https://www.openprocessing.org/sketch/440556
*/

var data;													// initialize variable for data
var people;												// initialize variable for people, used for API
var angle = [];										// initialize array for angle
var add;													// initialize variable for add

var m,b;													// initialize variable 'm' and 'b' to be used in galaxy()
var rad = 0;											// initialize variable rad equals zero
var t = 0;												// initialize variable 't' equals 0
var pg;														// initialize variable pg for Graphics


// Preload json data of planets and world population API data from web
function preload() {
  data=loadJSON("data/json.json");
  people=loadJSON('http://api.population.io/1.0/population/World/today-and-tomorrow/?format=json');
}

function setup() {
  createCanvas(800, 800);					// create a 800px by 800px canvas on initialization
pg = createGraphics(800,800);			// create 800px by 800px graphics called pg
  pg.background(255,30);					// create fading black background for pg graphics
  add = int(random(1700, 1725));	// number of years to add to current year, random between 1700 to 1725
}

function draw() {
  background(255);								// draw and display black background
  galaxy();												// call galaxy function
	futureDate();										// display future date below visuals
  translate(width/2, height/2);		// move drawing to center of canvas
  
  sun();													// draw sun
  planets();											// draw planets
}

// Function draws sun to canvas
function sun() {
  stroke(0);											// give sun black outline
  fill(0);												// give sun black fill
  ellipse(0, 0, 50, 50);					// draw ellipse representing sun at center
}

// Function draws all planets onto canvas
function planets() {					

  for (var j=0; j<8; j++) {					// create for loop for variable j equals 0, j less than 8, increment j by 1
    push();													// push Matrix
    noStroke();											// remove stroke
    fill(10,10,10,250-j*30);				// adjust fill to grey, with varying opacity according to j value
   
    var a=PI/3*j;										// define rotation angle
    var inc=data.planets[j].speed;	// define speed of each planet
    
    angle.push(0);									// push value 0 to angle array
	  angle[j]+=inc;									// angle[j] value in array equals angle[j] plus inc value
    rotate(angle[j]);								// rotate at new angle[j] value
    
		
    var r=data.planets[j].dist;  		// define the position of each planet in orbit as variable r
    var x=r*cos(a);									// define xPosition according to cosine function, r, and a value
    var y=r*sin(a);									// define yPosition according to sine function, r, and a value
    ellipse(x, y, data.planets[j].size, data.planets[j].size);	// draw planet as ellipse according to planet size + location
    stroke(50);											// stroke colour 50, grey
    line(0,0,x,y);									// draw line 
    pop();													// pop Matrix
    
		// orbits
    noFill();												// remove fill colour
    strokeWeight(2);								// change strokeWeight to 2
    stroke(0,255-j*40); 				 		// gradient stroke from inner to the outer
    ellipse(0, 0, r*2, r*2);				// draw orbit ellipses according to value r
  }
  
// Draw ring of Saturn
noFill();														// remove fill colour
strokeWeight(5);										// change strokeWeight to 5
stroke(10,10,10,60);								// change stroke colour with 60 opacity
  var inc=data.planets[5].speed;   	// grab data from the json file with array list through the for loop
  var a=PI/3*5;											// define rotation angle (same as Saturn)
    angle.push(0);									// push value 0 to angle array
	  angle[5]+=inc;									// angle[5] value in array equals angle[j] plus inc value
    rotate(angle[5]);								// rotate at new angle[5] value
  																	// draw ring of saturn in ellipse function according to Saturn's JSON data
		ellipse(data.planets[5].dist*cos(a)-2.7,data.planets[5].dist*sin(a)+1.2,data.planets[5].size*1.5,data.planets[5].size*1.5); 
}


// Function displays current date with future year
function futureDate() {
  fill(50);												// adjust fill colour to 50 (grey for text)
  

  var y = year() + add;						// create variable y for year, add 1725 years to represent the future
  var m = month();								// create variable m for month
  var d = day();									// create variable d for day
  
  textSize(40,40);								// adjust textSize to 40px by 40px
  text(m+"."+d+"."+y, 290, 680);  //show the year, month, and day variables in one line
}

// Function creates galaxy with moving points symbolic of future population in universe
// according to current real-time statistics of world's population API
function galaxy(){
  strokeWeight(2);								// change strokeWeight to 2
  stroke(0);											// stroke colour black
  
	var orig = people.total_population[0].population;    //get population data from the API
 	var population=orig/2800000;                      	 //divide the value to create the image
 	console.log(population);														 // show the data in console for debugging
 	console.log(orig);		
  for(m=0;m++<population;																							// for m equals 0, m increment 1 is less than population;
      b= noise(m%100)*9+t/rad, point(400+cos(b)*rad, 400+sin(b)*rad))	// create moving noise points in for loop according to m, t, and rad values
  {
     rad=(noise(m)-0.2)*400;													 // change rad value according to noise(m) minus 0.2 multiplied by 400									
     t+=0.00001;																			 // adjust speed t by 0.00001 to adjust speed of galaxy spin
  }
}
