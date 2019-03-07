function setup() {
  createCanvas(1500, 800);
  for (var i = 0; i < 500; i = i + 1) {
    append(x, random(width));
    append(y, random(height));
    append(changeInX, random(-3, 3));
    append(changeInY, random(-3, 3));
    append(colors, random(40, 140));
  }

colorMode(HSB);
}
var a = []; // new empty array
var b = []; // new empty array

var x = [50, 70];
var y = [200, 90];
var changeInX = [4, 4];
var changeInY = [3, 7];
var colors = [40, 90];

function draw() {
  background(0);

  noStroke();

    a.push(mouseX); // equivalent to append(x, mouseX)
    b.push(mouseY); // equivalent to append(y, mouseY)
    for (var i = 1; i < a.length; i = i + 1) {
    ellipse(a[i], b[i], 5 + (a.length - i));
  }


  for (var i = 0; i < x.length; i = i +1){
     fill(colors[i], 100, 100, 50);
     ellipse(x[i], y[i], 10);

    x[i] = x[i] + changeInX[i];
    y[i] = y[i] + changeInY[i];

    if(x[i]>width){
      changeInX[i] = -changeInX[i];
      colors[i] = colors[i] + 100;
    }


  if (x[i] < 0) {
    changeInX[i] = -changeInX[i];
  }

  if (y[i] > height) {
    changeInY[i] = -changeInY[i];
  }

  if (y[i] < 0) {
    changeInY[i] = -changeInY[i];
  }
}
}
