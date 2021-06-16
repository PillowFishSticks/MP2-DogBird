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

// gap variables

var gap = 55;
var constant = rocketNorth.height+gap;

// dog variables

var dX = 10;
var dY = 150;

// gravity variable

var gravity = 1;

// draw images

function draw(){

    ctx.drawImage(bg,0,0);
    ctx.drawImage(rocketNorth,100,-30);
    ctx.drawImage(rocketSouth,100,0+constant);
    ctx.drawImage(dog,dX,dY);

    dY += gravity;

    requestAnimationFrame(draw);
}

draw();