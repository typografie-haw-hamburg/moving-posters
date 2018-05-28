var api = "https://api.giphy.com/v1/stickers/search?"
var apiKey = "api_key=tFQ1Bue9PJ0hJdg1EJXZrZFeegetXAuB&q="
var query = "cat"
var rest = "&limit=200‚&offset=0&rating=R&lang=en"
var cats = [];
var img;
var loadedImages = [];
var posX
var posY
var speedX
var speedY


function setup() {
  createCanvas(windowWidth,windowHeight);
  var url = api + apiKey + query + rest;
  loadJSON(url,gotData);

  posX = windowWidth / 2;
  posY = windowHeight / 2;
  speedX = 0;
  speedY = 0;

}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
        loadImage(giphy.data[i].images.original.url, function(i) {
            loadedImages.push(i);
          }, function(e) {
            console.log(e);
          })
        }
}


function draw() {

background("black");
textFont("Futura");
fill(245);
textStyle(BOLD);
textSize(150)
text(query,50,windowHeight-50);
textAlign(LEFT)
text("find your",windowWidth-800,150);
imageMode(CENTER);

  speedX = map (pRotationY,-180,180,-20,20);
  speedY = map (pRotationX,-180,180,-20,20);

    posY += speedY;
    posX += speedX;

  if (loadedImages.length > 0) {

    for (var i = 0; i < loadedImages.length; i++) {
      image(loadedImages[i],posX+i*100,posY+i*100);

    }

  }
}
