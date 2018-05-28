var bgColorTop;
var bgColorBottom;
var ellipses = [];
var successMessage;

function setup() {
  createCanvas(640, 360);

  textSize(36);
  textFont("Helvetica");
  textStyle(BOLD);
  textAlign(CENTER);

  bgColorTop = color(255, 200, 200);
  bgColorBottom = color(200, 200, 255);

  for (var i = 200 - 1; i >= 0; i--) {
    var newEllipse = {
      posX: random(width),
      posY: random(0, -height),
      size: random(5, 20),
      speedX: random(-0.5, 0.5),
      speedY: random(3, 5),
      color: color(random(255), random(255), random(255))
    }

    ellipses.push(newEllipse);
  }

  var success = ["Läuft!", "Funktioniert!", "Es klappt!", "Ausgezeichnet!", "Helau!", "Up and running!", "Good job!", "Well done!", "Amazing!", "Très bien!", "Voilà!", "C'est génial!"];
  successMessage = random(success);

}

function draw() {

  for (var i = height - 1; i >= 0; i--) {
    var bgColor = lerpColor(bgColorTop, bgColorBottom, (height - i) / height);
    stroke(bgColor);
    line(0, i, width, i);
  }

  for (var i = ellipses.length - 1; i >= 0; i--) {
    noStroke();
    var e = ellipses[i];

    if(mouseX) {
      var eSizeMod = constrain(map(mouseX, 0, width, -20, 20), -20, 20);
    } else {
      var eSizeMod = 0;
    }

    fill(e.color)
    ellipse(e.posX, e.posY, constrain(e.size + eSizeMod, 0, 100));
    e.posX += e.speedX;
    e.posY += e.speedY;

    if(e.posY > height + e.size / 2) {
      ellipses.splice(i, 1);

      var newEllipse = {
        posX: random(width),
        posY: random(0, -height),
        size: random(5, 20),
        speedX: random(-0.5, 0.5),
        speedY: random(3, 5),
        color: color(random(255), random(255), random(255))
      }
      ellipses.push(newEllipse);
    }
  }

  fill(255);
  text(successMessage, width / 2 + (i * 3), height / 2 - (i * 3));
}