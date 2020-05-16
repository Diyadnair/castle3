function setup() {
  var canvas = createCanvas(800,600);
 
}

function draw() {
  background(0); 
//rect
  fill("green");
  rect(0, 550, 1500, 50);
  stroke(255);

  //rect
  fill("darkBlue");
  rect(200,200,60,350);

  fill("red");
  rect(350,150,60,400);

  fill("darkBlue");
  rect(500,200,60,350);
 
 //rect
  fill("brown");
  rect(100,50,30,500);

  fill("brown");
  rect(630,50,30,500);

//ellipse
  fill(0);
  ellipse(380,110,100,100);

  fill(255);
  ellipse(230,200,100,100);

  fill(255);
  ellipse(530,200,100,100); 

}