var dia = 50;

function setup() {
  createCanvas(600, 400);
  background(255, 230, 205);
}

function draw() {
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, dia);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, dia / 2);
  fill(0, 0, 255);
  ellipse(width - mouseX, height - mouseY, dia);
}
