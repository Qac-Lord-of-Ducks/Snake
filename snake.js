var s;
var scl = 20;
var food;
var score = 1;

function setup()
{
	createCanvas(1000, 600);
	s = new snake();
	frameRate(10);
	pickLocation();
}
function pickLocation()
{
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}
function draw()
{
	background(51);
	s.death();
	s.update();
	s.show();
	
	if(s.eat(food))
	{
		pickLocation();
	}
	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl)
}
function keyPressed()
{
	var lastInput = "";
	if(keyCode === UP_ARROW && this.lastInput != "down")
	{
		s.dir(0,-1);
		this.lastInput = "up";
	}
	else if(keyCode === DOWN_ARROW && this.lastInput != "up")
	{
		s.dir(0,1);
		this.lastInput = "down";
	}
	else if(keyCode === RIGHT_ARROW && this.lastInput != "left")
	{
		s.dir(1,0);
		this.lastInput = "right";
	}
	else if(keyCode === LEFT_ARROW && this.lastInput != "right")
	{
		s.dir(-1,0);
		this.lastInput = "left";
	}
}
