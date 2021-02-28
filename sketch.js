/***************************************************************************
	Project name: Rooms of My House
		by Ashley Lee
	Overview: This is Ashley Lee's rooms of my house p5.js that shows navigation structure using the keyboard between 9 rooms.
	________________________________________________________________________
	Note: 
	(1) this code translates Ashley's dream house that was made in XD
	(2) use left,right,down, and up keyboard button to navigate between rooms
	(3) each state is a different room which has a label of the room and the 
	navigation insturctions.
******************************************************************************/

// array of images
var images = [];

//background placing 
var backX = 0;
var backY = 0;

//item image placing
var itemImageX = 530;
var itemImageY = 435;

//item image placing
var lineHeight = 30;
var itemLabelX = itemImageX + 115;
var itemLabelY = itemImageY - lineHeight;

// array of item labels 
var itemLabels = [];

//array of item location
var itemLocations =[];

// Correct/Wrong text label position
var correctWrongLabelX = WIDTH/2;
var correctWrongLabelY = 20;

// variable that is a draw function 
var drawFunction;


//load all images into an array
function preload() {
	images[0] = loadImage('Assets/Opening.png');
	images[1] = loadImage('Assets/Read.png');
	images[2] = loadImage('Assets/Game.png');
	images[3] = loadImage('Assets/Correct.png');
	images[4] = loadImage('Assets/Wrong.png');
	images[5] = loadImage('Assets/View.png');
	images[6] = loadImage('Assets/Ending.png');
	images[7] = loadImage('Assets/Balloon1.png');
	images[8] = loadImage('Assets/BananaPeel.png');
	images[9] = loadImage('Assets/CandyWrapper.png');
	images[10] = loadImage('Assets/CerealBox.png');
	images[11] = loadImage('Assets/CompostableBox.png');
	images[12] = loadImage('Assets/DryLeaves.png');
	images[13] = loadImage('Assets/FilledSoupCan.png');
	images[14] = loadImage('Assets/Lego.png');
	images[15] = loadImage('Assets/MilkCarton.png');
	images[16] = loadImage('Assets/PaperBag.png');
	images[17] = loadImage('Assets/WaterBottle.png');
}

// Setup code 
function setup() {
  createCanvas(1057, 712);

  //Setup for text
  textAlign(CENTER);
  textSize(30);
  textStyle(BOLD);


  //set to Opening for starup
  drawFunction = drawOpening;
 }

// Set background color to white and call state machine function
function draw() {
  background(255);

  //call state machine function
  drawFunction();
}

// load item labels array
function loadItemLabels() {
	itemLabels[0] = "Balloon"
	itemLabels[1] = "Banana Peel"
	itemLabels[2] = "Candy Wrapper"
	itemLabels[3] = "Cereal Box"
	itemLabels[4] = "Compostable Box"
	itemLabels[5] = "Dry Leaves"
	itemLabels[6] = "Filled Soup Can"
	itemLabels[7] = "Lego"
	itemLabels[8] = "Milk Carton"
	itemLabels[9] = "Paper Bag"
	itemLabels[10] = "Water Bottle"
}

//load item locations array
function loadItemLocations() {
	itemLocations[0] = ""
	itemLocations[1] = ""
	itemLocations[2] = ""
	itemLocations[3] = ""
	itemLocations[4] = ""
	itemLocations[5] = ""
	itemLocations[6] = ""
	itemLocations[7] = ""
	itemLocations[8] = ""
	itemLocations[9] = ""
	itemLocations[10] = ""
}

// draw Opening
drawOpening = function() {
	image(images[0], backX, backY);
}

//draw Learn
drawLearn = function() {
	image(images[1], backX, backY);
}

//draw Game
drawGame = function() {
	image(images[2], backX, backY);
	//image of item
	image(images[11], itemImageX, itemImageY);
	//label of item
	fill(0);
	textSize(30);
	loadItemLabels()
	text(itemLabels[6], itemLabelX, itemLabelY);
}

//draw Correct
drawCorrect = function() {
	image(images[3], backX, backY);

	//label text in green
	textSize(60);
	fill(0,128,0);
	text("Correct! You Got It!", correctWrongLabelX, correctWrongLabelY)
}

//draw Wrong
drawWrong = function() {
	image(images[4], backX, backY);

	//label text in red 
	textSize(60);
	fill(202,0,42);
	text("Correct! You Got It!", correctWrongLabelX, correctWrongLabelY)
}

//draw View
drawView = function() {
	image(images[5], backX, backY);
}

//draw Ending
drawEnding = function() {
	image(images[6], backX, backY);
}


function keyTyped() {
	//From Opening
	if ( drawFunction === drawOpening) {
		//To Learn
		if ( key === "l") {
			drawFunction = drawLearn;
		}
		//To Game
		else if ( key === "p") {
			drawFunction = drawCorrect;
		}
	}
	//From Learn
	else if ( drawFunction === drawLearn) {
		//To Game
		if ( key === "p") {
			drawFunction = drawGame;
		}
	}

	//From View 
	else if ( drawFunction === drawView) {
		//To Game
		if ( key === "p") {
			drawFunction = drawGame;
		}
	}

	//From Correct
	else if ( drawFunction === drawCorrect) {
		//To Game
		if ( key === "n") {
			drawFunction = drawGame;
		}
	}
}