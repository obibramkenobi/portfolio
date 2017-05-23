
var colorsChanging = [
	{backgroundColor: "#FF0000"},	
	{backgroundColor: "#FF6600"},
	{backgroundColor: "#FF9400"},
	{backgroundColor: "#FEC500"},
	{backgroundColor: "#FFFF00"},
	{backgroundColor: "#8CC700"},
	{backgroundColor: "#0FAD00"},
	{backgroundColor: "#00A3C7"},
	{backgroundColor: "#0064B5"},
	{backgroundColor: "#0010A5"},
	{backgroundColor: "#6300A5"},
	{backgroundColor: "#C5007C"},
];

var colorsTiming = {
		duration: 10000,
		iterations: Infinity,
		direction: "alternate-reverse",
}


var stop = document.querySelector("body").animate(
  colorsChanging, 
  colorsTiming
);

var freeze = false;
document.getElementById("colors").onclick = function toggle (){
	

	if (freeze == false) {
		freeze = true;
		stop.pause();
		console.log("pause");
		var strike = document.getElementById("colors");
		strike.style.setProperty("font-style", "italic");
		
	}
	else {
		stop.play();
		freeze = false;
		console.log("play");
		var strike = document.getElementById("colors");
		strike.style.setProperty("font-style", "normal");
	}
	
} 


// var stop = document.getElementById("bg").animate(
//   colorsChanging, 
//   colorsTiming
// );