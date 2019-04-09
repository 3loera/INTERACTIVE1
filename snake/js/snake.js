
var numSegments = 10;
var direction = 'right';

var xStart = 0;
var yStart = 250;
var diff = 10;

var xCor = [];
var yCor = [];

var xPoint = 0;
var yPoint = 0;
var scoreElem;

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(200, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

  createCanvas(500, 500);
  frameRate(15);
  stroke(255);
  strokeWeight(10);
  updatePointCoordinates();

  for (var i = 0; i < numSegments; i++) {
    xCor.push(xStart + (i * diff));
    yCor.push(yStart);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  updateSnakeCoordinates();
  checkGameStatus();
  checkForPoint();
}


function updateSnakeCoordinates() {

  for (var i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}


function checkGameStatus() {
  if (xCor[xCor.length - 1] > width ||
      xCor[xCor.length - 1] < 0 ||
      yCor[yCor.length - 1] > height ||
      yCor[yCor.length - 1] < 0 ||
      checkSnakeCollision()) {
    noLoop();
    var scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('YOU LOSE! score : ' + scoreVal);
  }
}


function checkSnakeCollision() {
  var snakeHeadX = xCor[xCor.length - 1];
  var snakeHeadY = yCor[yCor.length - 1];
  for (var i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}


function checkForPoint() {
  point(xPoint, yPoint);
  if (xCor[xCor.length - 1] === xPoint && yCor[yCor.length - 1] === yPoint) {
    var prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updatePointCoordinates();
  }
}

function updatePointCoordinates() {


  xPoint = floor(random(10, (width - 100) / 10)) * 10;
  yPoint = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
  switch (keyCode) {
    case 37:
      if (direction != 'right') {
        direction = 'left';
      }
      break;
    case 39:
      if (direction != 'left') {
        direction = 'right';
      }
      break;
    case 38:
      if (direction != 'down') {
        direction = 'up';
      }
      break;
    case 40:
      if (direction != 'up') {
        direction = 'down';
      }
      break;
  }
}
document.querySelector("button").addEventListener("click", function () {
  started = !started;
})
