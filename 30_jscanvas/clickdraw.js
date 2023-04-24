// Team Double A V2 :: Sasha Shifrina, Anna Fang
// SoftDev pd7
// K30 -- canvas based JS drawing
// 2023-04-24
// --------------------------------------------------

// retrieve node in DOM via ID
var c = document.getElementById("slate"); 

var ctx = c.getContext("2d");

// toggle button => implementation of e indicates a "click" event 
var mode = "rectangle"; 

var toggleMode = function(e){
    console.log("toggling..."); 
    if(mode == "rectangle"){
        mode = "circle"
    }
    else{
        mode = "rectangle"; 
    }
}

var drawRect = function(e) {
    var mouseX = e.offsetX; 
    var mouseY = e.offsetY; 
    console.log("mouseclick registered at ", mouseX, mouseY); 
    // draw rectangle with coordinates 
    ctx.beginPath(); 
    ctx.strokeStyle = "red"; 
    ctx.fillStyle = "red"; 
    ctx.moveTo(mouseX, mouseY); 
    ctx.lineTo(mouseX+20, mouseY); // additional moveTo calls are not necessary 
    ctx.lineTo(mouseX+20, mouseY+30); 
    ctx.lineTo(mouseX, mouseY+30); 
    ctx.lineTo(mouseX, mouseY); 
    ctx.stroke(); 
    ctx.fill(); 
}
// circle from 0 to 360 
var fullbend = 2 * Math.PI;

var drawCircle = (e) => {
    var mouseX = e.offsetX; 
    var mouseY = e.offsetY; 
    console.log("mouseclick registered at ", mouseX, mouseY);
    ctx.beginPath(); 
    ctx.strokeStyle = "red"; 
    ctx.fillStyle = "red"; 
    ctx.arc(mouseX, mouseY, 30, 0, fullbend); 
    ctx.stroke(); 
    ctx.fill(); 
}

var draw = (e) => {
     if(mode == "rectangle"){
        drawRect(e); 
    }
    else{
        drawCircle(e); 
    }
}
// using information from mdn web docs (https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)
var wipeCanvas = () => {
    ctx.clearRect(0, 0, slate.width, slate.height);
}

// e => click event  
c.addEventListener("click", draw);

// toggle [(event, listener)]
var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener("click", toggleMode); 

// clear  
var clearB = document.getElementById("buttonClear"); 
clearB.addEventListener("click", wipeCanvas); 


