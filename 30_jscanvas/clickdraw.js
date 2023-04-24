// Team Double A V2 :: Sasha Shifrina, Anna Fang
// SoftDev pd7
// K30 -- canvas based JS drawing
// 2023-04-24
// --------------------------------------------------

// retrieve node in DOM via ID
var c = document.getElementById("slate"); 

var ctx = c.get.getContext("2d");

var toggleMode = function(e){
    console.log("toggling..."); 
    if(e == "drawRect()"){
        toggleMode = "drawCircle()"; 
    }
    else{
        toggleMode = "drawRect()"; 
    }
}

var drawRect = function(e){
    var mouseX = onclick.offsetX; 
    var mouseY = onclick.offsetY; 
    console.log("mouseclick registered at ", mouseX, mouseY); 
    ctx.beginPath(); 
    ctx.strokeStyle = "red"; 
    ctx.fillStyle = "red"; 
    ctx.moveTo(mouseX, mouseY); 
    ctx.lineTo(mouseX+20, mouseY); 
    ctx.moveTo(mouseX+20, mouseY); 
    ctx.lineTo(mouseX+20, mouseY+30); 
    ctx.moveTo(mouseX+20, mouseY+30); 
    ctx.lineTo(mouseX, mouseY+30); 
    ctx.moveTo(mouseX, mouseY+30); 
    ctx.lineTo(mouseX, mouseY); 
    ctx.stroke(); 
    ctx.fill(); 
}

    var drawCircle = (e) => {
        console.log("mouseclick registered at ", mouseX, mouseY);
    }

    var draw = (e) => {
         
    }

    var wipeCanvas = () => {

    }
        
    c.addEventListener("click", draw);
    var bToggler = document.getElementById("buttonToggle");
    bToggler.toggleMode(); 
    var clearB =document.getElementById("buttonClear"); 
    clearB.wipeCanvas(); 


