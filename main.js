canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var carWidth=75, carHeight=100, carX=5, carY=225;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	bgImg_tag= new Image();
	bgImg_tag.src= background_image;
	bgImg_tag.onload=uploadBackground;

	carImg_tag= new Image();
	carImg_tag.src= greencar_image;
	carImg_tag.onload=uploadgreencar;
}

function uploadBackground() {
	ctx.drawImage(bgImg_tag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(carImg_tag, carX, carY, carWidth, carHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY>=0){
		carY=carY-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(carY>=0){
		carY=carY+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(carX>=0){
		carX=carX-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(carX>=0){
		carX=carX+10;
		uploadBackground();
		uploadgreencar();
	}
}
