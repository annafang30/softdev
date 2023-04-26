// Team Double A V2 :: Sasha Shifrina, Anna Fang
// SoftDev pd7
// K31 -- canvas based JS animation
// 2023-04-25
// --------------------------------------------------

var c = document.getElementById('playground');
var dotButton = document.getElementById('buttonCircle');
var stopButton = document.getElementById('buttonStop');

var ctx = c.getContext('2d');

var requestID;

var clear = (e) => {
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

var stopIt = () => {
    console.log("stopIt invoked..."); 
    console.log(requestID); 
    window.cancelAnimationFrame(requestID); // pause animation 
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt); 