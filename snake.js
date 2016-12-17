var s;
var scl = 20;
var food;
var score = 1; //like this!!!!!!!!!!!!!!!!
var highscore = [0,0,0,0,0];
var name1, name2, name3, name4, name5;

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
function snake()
{
	this.x = width/2;
	this.y = height/2;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.total = 0;//this is used for other stuff too no change
	this.tail = [];
	// find a way to store that as a variable like a for each and use that variable for your score, idk 
	
	this.dir = function(x,y)
	{
		this.xSpeed = x;
		this.ySpeed = y;
	}
	
	this.eat = function(pos)
	{
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d < 1)
		{
			var zac = score++;
			document.getElementById('cs').innerHTML = zac;
			this.total++;
			return true;
		}
		else{
			return false;
			
		}
	}//discord
	
	// your current score is just the size of the snake
	// where is the actual size stored
	
	
	
	this.death = function()
	{
		if(d<1)
		{
			this.total = 0;
			this.tail = [];
			alert("Game Over");
			document.getElementById('cs').innerHTML = 0;
		}
			
		for(var i = 0; i < this.tail.length; i++)
		{
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y)
			if(d<1)
			{
				this.total = 0;
				this.tail = [];
				alert("Game Over");
				
				this.lastInput = "";
				for(var i = 0; i <= this.highscore.length; i++)
				{
					if(this.score > this.highscore[i])
					{
						if(i==0)
						{
							this.highscore[i] = this.score;
							this.name1 = window.prompt("Enter your name","");
							document.getElementById('1st').innerHTML = this.name1 + ": " + this.score;
						}
						if(i==1)
						{
							this.highscore[i] = this.score;
							this.name2 = window.prompt("Enter your name","");
							document.getElementById('2nd').innerHTML = this.name2 + ": " + this.score;
						}
						if(i==2)
						{
							this.highscore[i] = this.score;
							this.name3 = window.prompt("Enter your name","");
							document.getElementById('3rd').innerHTML = this.name3 + ": " + this.score;
						}
						if(i==3)
						{
							this.highscore[i] = this.score;
							this.name4 = window.prompt("Enter your name","");
							document.getElementById('4th').innerHTML = this.name4 + ": " + this.score;
						}
						if(i==4)
						{
							this.highscore[i] = this.score;
							this.name5 = window.prompt("Enter your name","");
							document.getElementById("5th").innerHTML = this.name5 + ": " + this.score;
						}
					}
				}
			}
		}
	}
	
	this.update = function()
	{
		for(var i = 0; i < this.tail.length-1; i++)
		{
				this.tail[i]=this.tail[i+1];
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x= this.x + this.xSpeed*scl;
		this.y= this.y + this.ySpeed*scl;
		
		this.x = constrain(this.x, 0, width-scl);
		this.y = constrain(this.y, 0, height-scl);
	}
	
	this.show = function()
	{
		fill(255);
		for(var i = 0; i < this.total; i++)
		{
			rect(this.tail[i].x, this.tail[i].y, scl, scl)
		}
		rect(this.x, this.y, scl, scl);
	}
}