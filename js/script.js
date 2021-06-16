var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// Load images

var dog = new Image();
var bg = new Image();
var rocketNorth = new Image();
var rocketSouth = new Image();

dog.src = "../images/dogrocket.png";
bg.src = "../images/sbg.png";
rocketNorth.src = "../images/rocketNorth.png";
rocketSouth.src = "../images/rocketSouth.png";

//variables
var gap = 75;
var constant = rocketNorth.height+gap;

// draw images

function draw(){

    ctx.drawImage(bg,0,0);
    ctx.drawImage(rocketNorth,100,-30);
    ctx.drawImage(rocketSouth,100,0+constant);
}

draw();