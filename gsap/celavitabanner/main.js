document.addEventListener('DOMContentLoaded', function() {

var tl = new TimelineMax({ repeat:2});

tl.from(".bord", 0.5, {ease: Power2.easeInOut, autoAlpha:0})
tl.from(".tekst1", 0.5, {ease: Power2.easeInOut, autoAlpha:0})
tl.to(".tekst1", 0.5, {ease: Power2.easeInOut, autoAlpha:0, delay:1.2} )
tl.to(".bord", 1, {ease: Power2.easeInOut, backgroundPosition:"0px -250px"})
tl.from(".tekst2", 0.5, {ease: Power2.easeInOut, autoAlpha:0})
tl.to(".tekst2", 0.5, {ease: Power2.easeInOut, autoAlpha:0, delay:1.2})
tl.to(".bord", 1, {ease: Power2.easeInOut, backgroundPosition:"0px -550px"})
tl.from(".tekst3", 0.5, {ease: Power2.easeInOut, autoAlpha:0})
tl.to(".button", 0.1, {ease: Power0.easeNone, left:50})
tl.to(".button", 0.1, {ease: Power0.easeNone, left:55})
tl.to(".button", 0.1, {ease: Power0.easeNone, left:50})
tl.to(".button", 0.1, {ease: Power0.easeNone, left:55})
tl.to(".button", 0.1, {ease: Power0.easeNone, left:50})
tl.to(".tekst3", 2, {} )

});

