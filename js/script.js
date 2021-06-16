var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Load images

var dog = new Image();
var bg = new Image();
var rocketNorth = new Image();
var rocketSouth = new Image();

dog.src = "../images/dogrocket.png";
bg.src = "../images/sbg.png";
rocketNorth.src = "../images/rocketnorth.png";
rocketSouth.src = "../images/rocketsouth.png";

// draw images

function draw(){

    ctx.drawImage(bg,0,0);
    ctx.drawImage(rocketNorth,0,0);
}

draw();