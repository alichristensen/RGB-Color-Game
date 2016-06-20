var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares); 

var squares = document.querySelectorAll(".square"); 
var picked = pickColor(); 
var colorDis = document.getElementById("colorDis");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButt = document.querySelector("#reset");
var easy = document.querySelector("#easyBtn"); 
var hard = document.querySelector("#hardBtn");

easy.addEventListener("click", function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numberOfSquares = 3;

	colors = generateRandomColors(numberOfSquares); 
	picked = pickColor(); 
	colorDis.textContent = picked;

	for (var i=0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}

});

hard.addEventListener("click", function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numberOfSquares = 6; 

	colors = generateRandomColors(numberOfSquares); 
	picked = pickColor(); 
	colorDis.textContent = picked;

	for (var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

resetButt.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick new random color from array
	picked = pickColor();
	colorDis.textContent = picked;
	messageDis.textContent = " "; 
	this.textContent = "New Colors";
	//change colors of squares
	for (var i =0; i <squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDis.textContent = picked;

for (var i =0; i < squares.length; i++) {
	squares[i].style.background = colors[i];

	//add click listeners
	squares[i].addEventListener("click", function(){
		//grab color of clicked square 
		var clickedColor = this.style.background
		//compare to picked color
		if (clickedColor === picked){
			messageDis.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButt.textContent = "Play Again?";
		}
		else {
			messageDis.textContent = "Try Again";
			this.style.background = "#232323";
		}

	});
}

function changeColors(color) {
	for (var i=0; i<colors.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	var rand = Math.floor(Math.random() * colors.length);
	console.log("picked color: " + colors[rand]);
	return colors[rand];
}

function generateRandomColors(numb) {
	var arr = []; 

	for (var i=0; i<numb; i++){
		var r = Math.floor(Math.random() * 256);
		var g = Math.floor(Math.random() * 256);
		var b = Math.floor(Math.random() * 256);

		var rgb = "rgb(" + r +", " + g +", " + b + ")";
		arr[i] = rgb; 
		console.log(arr[i]);
	}

	return arr;
}