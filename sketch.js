//Create variables here
var dog;
var dog2;
var database; 
var food;
var foodStock;
var feedButton;
var addFoodButton;
var fedTime;
var lastFed;
var foodObj;


function preload()
{
	//load images here
	dog.loadImg("dog.png");
	dog2.loadImg("dog2.png");
}

function setup() {
	createCanvas(500, 500);
	var dog = createSprite(55, 465, 20, 20);
	dog.addImage("dog.png");
	database = 
	foodStock = database.ref("Food");
	foodStock.on("value", readStock);
	foodObj = createObject(x, y, 50, 50);

	feed = createButton("Feed the dog");
	feed.position(700, 95);
	feed.mousePressed(feedDog);

	addFood = createButton("Add Food");
	addFood.position(800, 95);
	addFood.mousePressed(addFood);
  
}


function draw() {  
	background(46, 139, 87);

	foodObg.display();

	if (lastFed >= 12) {
		text("Last Fed:" + lastFed % 12 + "PM", 350, 30);
	}
	else if (lastFed == 0) {
		text("Last Fed: 12 AM", 350, 30);
	}
	else {
		test("Last Fed:" + lastFed + AM, 350, 30);
    }


  drawSprites();
  //add styles here
	textSize = 10;
	fill(purple);
	stroke(white)
}

function readStock(data) {
	foods = data.val();
}

function writeStock(x) {
	if (x <= 0) {
		x = 0;
	}
	else {
		x = x - 1;
    }

	database.ref("/").update({
		Food:x
    })
}

function addFoods() {
	foodS++;
	database.ref('/').update; ({
		Food: foodS
    })
}

function feedDog() {
	dog.addImage("dog2.png");
}


