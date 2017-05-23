var mclicked = false;
var bclicked = false;

var tl = new TimelineMax({});
var screenWidth = $( window ).width()/12 ;
var animData = {
        container: document.getElementById('jelly'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'jelly.json'

    };
    anim = bodymovin.loadAnimation(animData);
     document.getElementById("menu").addEventListener("click", function(){     
     if (mclicked == false){
        document.getElementById("back").style.display = "block";
        document.getElementById("menu").style.display = "none";
        tl.to(".list , .profile", 1, {ease: Power3.easeInOut, x:screenWidth});

        


         
     anim.playSegments([0,62],true);
     bclicked = false;
     mclicked = true;

 }
 });

    document.getElementById("back").addEventListener("click", function(){
     if (bclicked == false){
     document.getElementById("menu").style.display = "block";   
    document.getElementById("back").style.display = "none";
    tl.to(".list , .profile", 0.5, {ease: Power2.easeIn, x:0 })
    
     anim.playSegments([62,110],true);
     mclicked = false;
     bclicked = true;
 }

});



