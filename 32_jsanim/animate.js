// Team Double A V2 :: Sasha Shifrina, Anna Fang
// SoftDev pd7
// K32 -- canvas based JS dvdLogo animation
// 2023-04-26w
// --------------------------------------------------

var c = document.getElementById('playground');
var dotButton = document.getElementById('circle');
var dvdButton = document.getElementById('dvd');
var stopButton = document.getElementById('stop');

var ctx = c.getContext('2d');

var requestID;

var clear = (e) => {
  //e.preventDefault(); //A:
  ctx.clearRect(0, 0, playground.width, playground.height);
};

var radius = 0;
var growing = true;
var change = 1; // inc

var drawDot = (e) => {
    clear();
    //render the circle !
    ctx.beginPath();
    ctx.arc(playground.width/2, playground.height/2, radius, 0, 2*Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    //set conditionals
    radius += change;
    if (radius*2 >= playground.width || radius == 0) {
      growing = !growing;
      change *= -1;
    }
    window.cancelAnimationFrame(requestID);
    requestID = window.requestAnimationFrame(drawDot);
};

var dvdLogoSetup = function() {
  window.cancelAnimationFrame(requestID);

  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.random() * (playground.width - rectWidth);
  var rectY = Math.random() * (playground.height - rectHeight);

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";

  var dvdLogo = function() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    if (rectX + rectWidth >= c.width || rectX <= 0) {
      xVel *= -1;
    }
    if (rectY + rectHeight >= c.height || rectY <= 0) {
      yVel *= -1;
    }
    rectX += xVel;
    rectY += yVel;
    requestID = window.requestAnimationFrame(dvdLogo);
  };
  dvdLogo();
};

var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID); // pause animation
};

dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdLogoSetup);
stopButton.addEventListener("click", stopIt);