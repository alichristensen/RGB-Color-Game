var colors = generateRandomColors(6); 

var squares = document.querySelectorAll(".square"); 
var picked = pickColor(); 
var colorDis = document.getElementById("colorDis");
var messageDis = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButt = document.querySelector("#reset");

resetButt = addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6)
	//pick new random color from array
	picked = pickColor();
	colorDis.textContent = picked;
	//change colors of squares
	for (var i =0; i <squares.length; i++){
		squares[i].style.background = colors[i];
	}
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
		}
		else {
			messageDis.textContent = "Try Again";
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