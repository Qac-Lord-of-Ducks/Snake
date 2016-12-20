var highscore = [88,0,0,0,0];
var names = ["", "", "", "", ""];

function snake()
{
	this.x = width/2;
	this.y = height/2;
	this.xSpeed = 0;
	this.ySpeed = 0;
	this.total = 0;//this is used for other stuff too no change
	this.tail = [];
	this.score = 1;
	// find a way to store that as a variable like a for each and use that variable for your score, idk 
	
	this.dir = function(x,y)
	{
		this.xSpeed = x;
		this.ySpeed = y;
	}
	
	this.eat = function(pos)
	{
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d === 0)
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
		for(var i = 0; i < this.tail.length; i++)
		{
			var pos = this.tail[i];
			var d = dist(this.x, this.y, pos.x, pos.y)
			if(d===0)
			{
				this.total = 0;
				this.tail = [];
				alert("Game Over");
				this.lastInput = "";
				
				for(i = 0; i < highscore.length; i++)
				{
					if(score > highscore[i])
					{
						if(i===0)
						{
							this.addScore(0);
							break;
						}
						else if(i===1)
						{
							this.addScore(1);
							break;
							
						}
						else if(i===2)
						{
							this.addScore(2);
							break;
						}
						else if(i===3)
						{
							this.addScore(3);
							break;
						}
						else if(i===4)
						{
							this.addScore(4);
							break;
						}
					}
				}
						score = 1;
						document.getElementById('cs').innerHTML = 0;
			}
		}
	}
	this.addScore = function(p){
		for(var a = highscore.length; a > 0; a--)
		{
			highscore[a] = highscore[a-1];
			names[a] = names[a-1];
		}
		highscore[p] = score-1;
		names[p] = window.prompt("NEW HIGHSCORE!! \n Enter your name","");
		document.getElementById('5th').innerHTML = names[4] + ": " + highscore[4];
		document.getElementById('4th').innerHTML = names[3] + ": " + highscore[3];
		document.getElementById('3rd').innerHTML = names[2] + ": " + highscore[2];
		document.getElementById('2nd').innerHTML = names[1] + ": " + highscore[1];
		document.getElementById('1st').innerHTML = names[0] + ": " + highscore[0];
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
