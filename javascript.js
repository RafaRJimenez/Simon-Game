$(document).ready(function(){

var arrayColors = [];
var playerColors = [];
var counterTimes = 0; // it counts how many times you need to push the keys. Start by 1 adding 1 each times
var red = $(".red");
var green = $(".green");
var yellow = $(".yellow");
var blue = $(".blue");
var counter = $(".counter");
saveColor();
function saveColor(){
			var number = Math.floor(Math.random() * 8);
			if (number === 0 || number === 1){
					arrayColors.push("green");
					//green.addClass("memorize");
			} else if (number === 2 || number === 3){
				arrayColors.push("red");
				//.addClass("memorize");
			} else if (number === 4 || number === 5){
				arrayColors.push("yellow");
				//yellow.addClass("memorize");
			} else if (number === 6 || number === 7){
				arrayColors.push("blue");
				//blue.addClass("memorize");
			} 

			showColors();
		
}

green.on("click",addColor);
red.on("click",addColor);
yellow.on("click",addColor);
blue.on("click",addColor);

function addColor(e){
	var colour = $(e.target).attr('id');
	playerColors[counterTimes] = colour;
	if (playerColors[counterTimes] != arrayColors[counterTimes]){
		alert("You missed!. Now you need to repeat the last movement");
		while(playerColors.length > 0) {
   			 playerColors.pop();
			}
		showColors();
		counterTimes = 0 ;
	}
	else if (arrayColors.length === playerColors.length){
		alert("Next Round!");
		while(playerColors.length > 0) {
   			 playerColors.pop();
			}
		counterTimes = 0;
		saveColor();
	} else {
		++counterTimes;
	}
}

function showColors(){
  counter.text(arrayColors.length);
  $(".counter").fadeIn();
  var i = 0;
  var moves = setInterval(function(){
    var color = arrayColors[i];
    i++;
	eval(color).addClass("memorize");
		setTimeout(function(){
	    eval(color).removeClass('memorize');
	 	 }, 800);
	    if (i >= arrayColors.length) {
	      clearInterval(moves);
	    }
  }, 850);
}




	
});


/*if (i >= game.currentGame.length) {
      clearInterval(moves);
      clearTimeout() -----> this one is gonna work for me 
    } */