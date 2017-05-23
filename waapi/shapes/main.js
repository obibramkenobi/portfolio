var One = document.querySelector('.one');
var Two = document.querySelector('.two');
var Three = document.querySelector('.three');

One.animate([
	{ transform: 'translateX(-10em)'},
	{ transform: 'translateX(10em)'}
	], {
		duration: 1000,
		iterations: Infinity,
		direction: 'alternate',
		easing: 'ease'
	});

Two.animate([
	{ transform: 'translateX(-5em)', opacity: 0},
	{ transform: 'translateX(5em)', opacity: 1}
	], {
		duration: 1500,
		iterations: Infinity,
		direction: 'alternate',
		easing: 'ease-in-out'
	});

Three.animate([
	{ transform: 'translateY(0em) scale(0.5) rotate(0)',
	borderRadius: "0",

},
	{ transform: 'translateY(20em) scale(1) rotate(360deg)',
	borderRadius: "100%",
}
	], {
		duration: 1750,
		iterations: Infinity,
		direction: 'alternate',
		easing: 'ease-in-out'
	});
