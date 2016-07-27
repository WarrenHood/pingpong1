window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
  var absolute = event.absolute;
  var alpha    = event.alpha;
  var beta     = event.beta;
  var gamma    = event.gamma;
	bdX *= Math.abs(gamma/90);
  if(gamma < -10){bottomL = true;bottomR =false;}
  if(gamma > 10){bottomL = true;bottomR =false;}
}
choices = false;
scale = 1.06;
padding = 10;
downScale = 0.9999;
fps = 300;
topWidth = 200;
bottomWidth = 200;
topBorder = 3;
bottomBorder = 3;
topL = false;
topR = false;
bottomL = false;
bottomR = false;
hOffset = 150;
tdX = 12;
bdX = tdX;
dX = 2;
dY = 2;
bDrunk = false;
tDrunk = false;
players = 1;
ballDiameter = 20;
ballRad = ballDiameter/2;
ballxd = Math.floor(Math.random() * 2);
ballyd = Math.floor(Math.random() * 2);
maxSpeedX = 3.2;
maxSpeedY = 3;
function main(){
	if(topX + topWidth/2 < ballX)topRight();
	if(topX + topWidth/2 > ballX)topLeft();
	if(players == 0){
		if(bottomX + bottomWidth/2 < ballX)bottomRight();
		if(bottomX + bottomWidth/2 > ballX)bottomLeft();
	}
	dY *= downScale;
	dX *= downScale;
	if(dX > maxSpeedX)dX = maxSpeedX;
	if(dY > maxSpeedY)dY = maxSpeedY;
	if(bottomR)bottomRight();
	if(bottomL)bottomLeft();
	if(ballX <= 0)ballxd = 1;
	if(ballX >= screen.width - ballDiameter -30)ballxd = 0;
	if(ballY + ballDiameter > screen.height - hOffset && ballY + ballDiameter < screen.height -hOffset + 20  && ballX >= bottomX - padding &&  ballX <= bottomX + bottomWidth + padding){ballyd = 0;
																																																		dX *= scale;dY *= scale;}
	if(ballY + ballDiameter >= 10 && ballY + ballDiameter <= 40  && ballX >= topX  - padding && ballX <= topX + topWidth + padding){ballyd = 1;dX*= scale;dY *=scale;}
	if(ballxd == 1){ballRight();
	
	}
	else {ballLeft();
		}
	if(ballyd == 1){ballDown();
					}
	else {ballUp();
}
	updatePos();
	if(ballY > screen.height - 100){
		console.log(dX +' , '+dY);
		bDrunk = false;
		dX = 2;
		dY = 2;
		ballY = screen.height/2 - hOffset;
		alert('Top wins this round!');
		if(choices){choice = Math.floor(Math.random() * 2);
		if(choice == 0)topWidth += 5;
		if(choice == 1)bDrunk = true;
		alert('lol');
		}
		topL = false;
		topR = false;
		bottomL = false;
		bottomR = false;
		ballxd = Math.floor(Math.random() * 2);
		ballyd = Math.floor(Math.random() * 2);
	}
	if(ballY + ballDiameter < 0){
		console.log(dX +' , '+dY);
		tDrunk = false;
		dX = 2;
		dY = 2;
		topL = false;
		topR = false;
		bottomL = false;
		bottomR = false;
		alert('Bottom wins this round!');
		if(choices){
		choice = Math.floor(Math.random() * 2);
		if(choice == 0)bottomWidth += 5;
		if(choice == 1)tDrunk = true;}
		ballY = screen.height / 2 - hOffset;
		ballxd = Math.floor(Math.random() * 2);
		ballyd = Math.floor(Math.random() * 2);
	}
}
function downHandle(e){
	e = e || event;	
		if(players != 0){
	if(e.keyCode == 100){bottomL = true;
	if(bDrunk && Math.random()<0.5){bottomL = false;bottomR = true;}}
	if(e.keyCode == 102){bottomR = true;
	if(bDrunk && Math.random()<0.5){bottomL = true;bottomR = false;}	}							}
}
function upHandle(e){
	e = e || event;
	if(e.keyCode == 100 || e.keyCode == 102){bottomL = false;bottomR = false;}
}
window.onload = function(){
	document.onkeydown = downHandle;
	document.onkeyup = upHandle;
	top = document.getElementById('top');
	bottom = document.getElementById('bottom');
	ball = document.getElementById('ball');
	topX = screen.width/2 - 75;
	bottomX = screen.width/2 - 75;
	ballX = screen.width/2;
	ballY = screen.height/2;
	gameLoop = setInterval(main,1000/fps);
	bottom.style.top = screen.height - hOffstet + 'px';
}
function updatePos(){
	ball.style.height = ballDiameter + 'px';
	ball.style.width = ballDiameter + 'px';
	document.getElementById('top').style.width = topWidth + 'px';
	document.getElementById('bottom').style.width = bottomWidth + 'px';
	ball.style.left = ballX + 'px';
	ball.style.top = ballY + 'px';
	document.getElementById('top').style.left = topX + 'px';
	bottom.style.left = bottomX + 'px';
}
function topLeft(){
	if(topX > 0)topX -= tdX;
}
function topRight(){
	if(topX < screen.width -topWidth - topBorder - 12)topX += tdX;
}
function bottomLeft(){
	if(bottomX > 0)bottomX -= bdX;
}
function bottomRight(){
	if(bottomX < screen.width - bottomWidth - bottomBorder - 12)bottomX += bdX;
}
function ballLeft(){
	ballX -= dX;
}
function ballRight(){
	ballX += dX;
}
function ballUp(){
	ballY -= dY;
}
function ballDown(){
	ballY += dY;
}
/*function collided(px,py,pw,ph,bx,by,br){
	if(bx >= px && bx + br <= px + pw && by > py && by +)
}*/