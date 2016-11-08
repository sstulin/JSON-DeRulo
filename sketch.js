var weather;
var degs;
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=newyork&APPID=c053d55b3de11b69849aaabf789325fc&units=metric', gotData);
}

function gotData(data) {

weather = data;
degs = data.main.temp;
  //println(data);
}

function draw() {
  background(0);
  
  text ('Is It Cold?', 50,50)
  fill (255);
  
  if (degs > 16) {
    text ('NAH', 100,100);
    fill (255);//println('NAH');
  }
    else {
     text ('YAH', 100, 100);
     fill (255);//println('YAH');
    }
  
}