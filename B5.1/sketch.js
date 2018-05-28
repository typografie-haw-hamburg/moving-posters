var dia = 100;

function setup() {
  createCanvas(800,600);
  background(255,255,0);
}

function draw() {
  // zufällige Position
  var x = random(0, width);
  var y = random(0, height);

  var randomNumber = random(100);

  if (randomNumber < 20) {
    ellipse(x, y, dia);
  } else {
    rect(x, y, dia, dia);
  }

}
