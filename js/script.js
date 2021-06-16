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

// onkey down
document.addEventListener("keydown", moveUp);

function moveUp (){
    dY -= 20;
}

// rocket placement

var rocketpos = [];

rocketpos[0] = {
    x : cvs.width,
    y : 0,
}

// draw images

function draw(){

    ctx.drawImage(bg,0,0);

    for(var i = 0; i < rocketpos.length; i++){
        ctx.drawImage(rocketNorth,rocketpos[i].x,rocketpos[i].y);
        ctx.drawImage(rocketSouth,rocketpos[i].x,rocketpos[i].y+constant);

        rocketpos[i].x--;

        if(rocketpos[i].x==125){
            rocketpos.push({
                x : cvs.width,
                y : Math.floor(Math.random()*rocketNorth.height)-
                rocketNorth.height
            });
        }
    }
    
    ctx.drawImage(dog,dX,dY);

    dY += gravity;

    requestAnimationFrame(draw);
}

draw();