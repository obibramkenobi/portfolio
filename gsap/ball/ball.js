var tl = new TimelineMax({repeat:9999999});

tl.to(".ball", 0.8, {ease: Power2.easeIn, y:400})
tl.to(".ball", 0, {backgroundColor:"#fff200", borderRadius:"0%"}) 
tl.to(".ball", 0.8, {ease: Circ.easeOut, y:0})
tl.to(".ball", 0.8, {ease: Circ.easeIn, y:400})
tl.to(".ball", 0, 	{backgroundColor:"transparent", width:"0", height:"0", borderLeft:"50px solid transparent", borderRight:"50px solid transparent", borderBottom: "100px solid #0800ff"}) 
tl.to(".ball", 0.8, {ease: Circ.easeOut, y:0})
tl.to(".ball", 0.8, {ease: Circ.easeIn, y:400})
tl.to(".ball", 0, {backgroundColor:"#ff0000", borderRadius:"50%",  borderLeft:"100px solid transparent", borderRight:"0px solid transparent", borderBottom: "100px solid #ff0000"} )
tl.to(".ball", 0.8, {ease: Circ.easeOut, y:0,} ) 




