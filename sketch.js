/***************************************************************************
	Project name: Trash Bins
		by Ashley Lee
	Overview: This is Ashley Lee's p5.js code for her Trash Bin project. 
	The Trash Bin project is an interactive educational game targeted towards children 
	to educate them about the different types of trash bins and who types of items
	go inside each bin. 
	________________________________________________________________________
	Note: 
	(1) The user will use their keybaord to navigate through the different states 
	and play the game.
	(2) The array list of items will be generated randomly per game
	(3) The correct label will show fpr 5 seconds and move on to the next state.
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
var itemLabelX = itemImageX + 107;
var itemLabelY = itemImageY - lineHeight;

// array of item labels 
var itemLabels = [];

//array of shuffled items
var shuffledItems = [];

//array of item location
var itemLocations = [];

// Correct/Wrong text label position
var correctWrongLabelX = 502;
var correctWrongLabelY = 65;

// index variable for keeping track of item
var itemIndex = 0;

// index variable for keeping track of image 
var imageIndex = 0;

// index variable for keeping track of image
var labelIndex = 0;

// variable for timer
var labelTimer;

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

  //setup for timer for wrong/correct label
  labelTimer = new Timer(5000);

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
//load shuffled array of items
function loadShuffledItems() {
	loadItemLabels();
  	shuffledItems = shuffle(itemLabels);
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

function findImageLabel() {
	//if item is balloon
	if (shuffledItems[itemIndex] === "Balloon") {
		imageIndex = 7;
		labelIndex = 0;
	}
	//if item is banana peel
	else if (shuffledItems[itemIndex] === "Banana Peel") {
		imageIndex = 8;
		labelIndex = 1;
	}
	//if item is Candy Wrapper
	else if (shuffledItems[itemIndex] === "Candy Wrapper") {
		imageIndex = 9;
		labelIndex = 2;
	}
	//if item is Cereal Box
	else if (shuffledItems[itemIndex] === "Cereal Box") {
		imageIndex = 10;
		labelIndex = 3;
	}
	//if item is Compostable Box
	else if (shuffledItems[itemIndex] === "Compostable Box") {
		imageIndex = 11;
		labelIndex = 4;
	}
	//if item is Dry Leaves
	else if (shuffledItems[itemIndex] === "Dry Leaves") {
		imageIndex = 12;
		labelIndex = 5;
	}
	//if item is Filled Soup Can
	else if (shuffledItems[itemIndex] === "Filled Soup Can") {
		imageIndex = 13;
		labelIndex = 6;
	}
	//if item is Lego
	else if (shuffledItems[itemIndex] === "Lego") {
		imageIndex = 14;
		labelIndex = 7;
	}
	//if item is Milk Carton
	else if (shuffledItems[itemIndex] === "Milk Carton") {
		imageIndex = 15;
		labelIndex = 8;
	}
	//if item is Paper Bag
	else if (shuffledItems[itemIndex] === "Paper Bag") {
		imageIndex = 16;
		labelIndex = 9;
	}
	//if item is Water Bottle
	else if (shuffledItems[itemIndex] === "Water Bottle") {
		imageIndex = 17;
		labelIndex = 10;
	}
}

function correction() {
	//If item is balloon
	if ( labelIndex === 0) {
		//incorrect
		if ( key === "1") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//correct store correct location to itemLocation
		else if (key === "3") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Landfill";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
	}

	//If item is banan peel
	else if ( labelIndex === 1) {
		// correct store correct location to itemLocation
		if ( key === "1") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Compost";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			drawFunction = drawWrong;
		}
	}

	//If item is candy wrapper
	else if ( labelIndex === 2) {
		// correct store correct location to itemLocation
		if ( key === "3") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Landfill";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
	}

	//If item is cereal box
	else if ( labelIndex === 3) {
		// correct store correct location to itemLocation
		if ( key === "2") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Recycle";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			drawFunction = drawWrong;
		}
	}

	//If item is Compostable Box
	else if ( labelIndex === 4) {
		// correct store correct location to itemLocation
		if ( key === "1") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Compost";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			drawFunction = drawWrong;
		}
	}

	//If item is dry leaves
	else if ( labelIndex === 5) {
		// correct store correct location to itemLocation
		if ( key === "1") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Compost";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
			
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			drawFunction = drawWrong;
		}
	}

	//If item is filled soup can
	else if ( labelIndex === 6) {
		// correct store correct location to itemLocation
		if ( key === "3") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Landfill";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
	}

	//If item is Lego
	else if ( labelIndex === 7) {
		// correct store correct location to itemLocation
		if ( key === "3") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Landfill";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "2") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
	}

	//If item is Milk Carton
	else if ( labelIndex === 8) {
		// correct store correct location to itemLocation
		if ( key === "2") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Recycle";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();

		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			drawFunction = drawWrong;
		}
	}

	//If item is paper bag
	else if ( labelIndex === 9) {
		// correct store correct location to itemLocation
		if ( key === "2") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Recycle";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1 ;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			rawFunction = drawWrong;
		}
	}
	
	//If item is water bottle 
	else if ( labelIndex === 10) {
		// correct store correct location to itemLocation
		if ( key === "2") {
			drawFunction = drawCorrect;
			itemLocations[itemIndex] = "Recycle";
			//increase itemIndex to move on to next item
			itemIndex = itemIndex +1;
			//start timer when the correct bin is selected
			labelTimer.start();
		}
		//incorrect
		else if (key === "1") {
			drawFunction = drawWrong;
		}
		//incorrect
		else if (key === "3") {
			drawFunction = drawWrong;
		}
	}
}

//Sort the locations of each item and show the item labels in each bin
function viewItems () {
	//location variables for each bin 
	let landfillX = 900;
	let landfillY = 160;
	let compostX = 400;
	let compostY = 160;
	let recycleX = 400;
	let recycleY = 450;

	//bin indexes used for sorting and organizing the layout of the bins. 
	let landfillIndex = 0;
	let recycleIndex = 0;
	let compostIndex = 0;

	for ( let i = 0; i < itemLocations.length; i++ ) {
		if (itemLocations[i] === "Landfill") {
			if (landfillIndex === 0) {
				text(shuffledItems[i], landfillX, landfillY);
			}
			else {
				text(shuffledItems[i], landfillX, landfillY + (landfillIndex * 18));
			}
			landfillIndex = landfillIndex +1;
		}
		else if (itemLocations[i] === "Recycle") {
			if (recycleIndex === 0) {
				text(shuffledItems[i], recycleX, recycleY);
			}
			else {
				text(shuffledItems[i], recycleX, recycleY + (recycleIndex * 18));
			}
			recycleIndex = recycleIndex +1;
		}
		else if (itemLocations[i] === "Compost") {
			if (compostIndex === 0) {
				text(shuffledItems[i], compostX, compostY);
			}
			else {
				text(shuffledItems[i], compostX, compostY + (compostIndex * 18));
			}
			compostIndex = compostIndex +1;
		}
	}
}

// draw Opening
drawOpening = function() {
	// image of opening background
	image(images[0], backX, backY);

	//Randomize list of items 
	loadShuffledItems();
}

//draw Learn
drawLearn = function() {
	// image of learn background
	image(images[1], backX, backY);
}

//draw Game
drawGame = function() {
	// image of game background
	image(images[2], backX, backY);

	//image of item
	findImageLabel();
	image(images[imageIndex], itemImageX, itemImageY);

	//label of item
	fill(0);
	textSize(30);
	loadItemLabels()
	// move X position of itemLabel to the left for compostable box
	if ( labelIndex === 4) {
		text(itemLabels[labelIndex], itemLabelX - 4, itemLabelY);
	}
	else {
		text(itemLabels[labelIndex], itemLabelX, itemLabelY);
	}
}

//draw Correct
drawCorrect = function() {
	// image of correct background
	image(images[3], backX, backY);

	//label text in green
	textSize(60);
	fill(0,128,0);

	//timer to move on to next item in 5 seconds
	if ( labelTimer.expired() ) {
		if (itemIndex === 11) {
			drawFunction = drawEnding;
		}
		else {
			drawFunction = drawGame; 
		}
	}
	else {
		text("Correct! You Got It! Move on!", correctWrongLabelX, correctWrongLabelY);
	}
}

//draw Wrong
drawWrong = function() {
	// image of wrong background
	image(images[4], backX, backY);

	//image of item
	image(images[imageIndex], itemImageX, itemImageY);

	//label of item
	fill(0);
	textSize(30);
	loadItemLabels();
	text(itemLabels[labelIndex], itemLabelX, itemLabelY);

	//label text in red 
	textSize(60);
	fill(202,0,42);
	text("Wrong! Please Try Again", correctWrongLabelX, correctWrongLabelY);
}

//draw View
drawView = function() {
	image(images[5], backX, backY);
	// setup item text size.
	textSize(15);
	// function that shows the different items in each bin
	viewItems();
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
			drawFunction = drawGame;
		}
	}
	//From Learn
	else if ( drawFunction === drawLearn) {
		//To Game
		if ( key === "p") {
			drawFunction = drawGame;
		}
	}

	//From Game
	else if ( drawFunction === drawGame) {
		//To learn
		if ( key === "l") {
			drawFunction = drawLearn;
		}
		// To view
		else if ( key === "v") {
			drawFunction = drawView;
		}
		// checks if the bin selected is correct
		correction();
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
		if ( key === "n") {
			// When no more item is left
			if (itemIndex === 11) {
				drawFunction = drawEnding;
			}
			// continue to game
			else {
				drawFunction = drawGame;
			}
		}
	}

	//From Wrong
	else if ( drawFunction === drawWrong) {
		//To learn
		if ( key === "l") {
			drawFunction = drawLearn;
		}
		// To view
		else if ( key === "v") {
			drawFunction = drawView;
		}
		// checks if the bin selected is correct
		correction();
	}
}