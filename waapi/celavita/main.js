


var backgroundChanging = [
	{offset: 0.0, backgroundPosition:"0px 0px"},
	{offset: 0.2, backgroundPosition:"0px 0px"},
	{offset: 0.3, backgroundPosition:"0px -250px"},
	{offset: 0.63, backgroundPosition:"0px -250px"},
	{offset:0.7, backgroundPosition:"0px -550px"},
	{offset:1, backgroundPosition:"0px -550px"}
];

var backgroundTiming = {
		delay:500,
		endDelay: 2000,
		duration: 10000,
		iterations: 1,
		easing: "ease-out"	
}

var stop = document.getElementById('bord').animate(
  backgroundChanging, 
  backgroundTiming
);



var tekstOneChanging = [
	{offset: 0.0, opacity:0},
	{offset: 0.2, opacity:0},
	{offset: 0.4, opacity:1},
	{offset: 0.8, opacity:1},
	{offset: 1, opacity:0},
];

var tekstOneTiming = {
	duration: 2000,
	iterations: 1 ,
	fill: "forwards"
}

var one = document.getElementById('tekst1').animate(
  tekstOneChanging,
  tekstOneTiming
);


var tekstTwoChanging = [
	{offset: 0.0, opacity:0},
	{offset: 0.55, opacity:0},
	{offset: 0.7, opacity:1},
	{offset: 0.95, opacity:1},
	{offset: 1, opacity:0},
];

var tekstTwoTiming = {
	
	duration: 5000,
	iterations: 1 ,
	fill: "forwards"
}

var two = document.getElementById('tekst2').animate(
  tekstTwoChanging,
  tekstTwoTiming
);


var tekstThreeChanging = [
	{offset: 0.0, opacity:0},
	{offset: 0.55, opacity:0},
	{offset: 0.57, opacity:1},
	{offset: 0.98, opacity:1},
	{offset: 1, opacity:0},
];

var tekstThreeTiming = {
	
	duration: 10000,
	iterations: 1 ,
	fill: "forwards"
}

var three = document.getElementById('tekst3').animate(
  tekstThreeChanging,
  tekstThreeTiming
);

var buttonChanging = [
	{ transform: 'translateX(0px)'},
	{ transform: 'translateX(5px)'},
	{ transform: 'translateX(-5px)'},
	{ transform: 'translateX(0px)'}
	
];

var buttonTiming = {
	delay: 7500,
	duration: 500,
	iterations: 1 ,
	fill: "forwards"
}

var three = document.getElementById('button').animate(
  buttonChanging,
  buttonTiming
);



