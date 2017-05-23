$( document ).ready(function() {

    var slomo = false;
    var anim;
    var animData = {
        container: document.getElementById('bodymovin'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true

        },
        path: 'data.json'
    };
    anim = bodymovin.loadAnimation(animData);

    anim.addEventListener('data_ready', function(){
    
    console.log('rate?', anim);
});

    document.getElementById("myBtn").addEventListener("click", function(){
        console.log(slomo);
    
    if (slomo == false){
    anim.frameModifier = 0.008;
    anim.frameMult = 0.120;
    
    slomo= true;
}
else if (slomo == true) {
    anim.frameModifier = 0.0299700012207031;
    anim.frameMult = 0.0299700012207031;
    slomo = false;
    
}

});

        $('.toggle').click(function(){
        var $this = $(this);
        $this.toggleClass('toggle');
        if($this.hasClass('toggle')){
            $this.text('SLOMO');         
        } else {
            $this.text('NORMAL');
        }
    });

console.log( "ready!" );
});


  