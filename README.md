## Trash Bin
#### by Ashley Lee



### Overview
This is Ashley Lee's trash bin state machine project using p5.js. This is an interactive educational gamer where users will sort a list of different types of trash that is usually found in one’s household to appropriate trash bins. 


### Technical Details
The preload() function will load all the images into an array that will be used in this project from the Assets folder. 

The loadShuffledItem() function will shuffle the itemLabels array to create another shuffledItems array that will randomize the item list.
 
The setup() sets up the canvas size and the text align,size, and style, and set the first state to the drawOpening state when the project opens. 

The loadItemLabels() function will load the items in alphabetical order that will be used to create the shuffledItems array and display the item label in the game state. If you want to add more items please add it into this function. 

The itemLocation array will be used to store the location/trash bin the user put the shuffledItems in. This array is used to help sort the items that are in different bins in the view state. 

The findImageLabel() function identifies what the shuffledItem is and find the appropriate imageIndex from the image array and the labelIndex from the itemLabels array to show the appropriate label and image for that item. If you want to add more items, please add the appropriate find image and label code in this function. 

The correction() function checks if the trash bin selected by the user is the appropraite trash bin for that item and saves the trash bin location for that item in the itemLocations array. This function will be used in the keyTyped() function when on the game state and the wrong state to check if the key typed by the user is correct or not. If you want to add more items, please add the appropriate code to check if the key typed is corrected or not. 

### Adobe XD Link

https://xd.adobe.com/view/cc22c623-3b94-4c57-af17-2f882fa9f91f-9971/
