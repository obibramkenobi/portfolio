//logo wink

$( document ).ready(function() {


    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
        });
    }

// Usage:

    



var counter = 1 ;
function slideshow() {
    $('.slideshow-image.image'+counter).fadeIn();
    setTimeout(function(){
        $('.slideshow-image.image'+counter).fadeOut();
        counter++
        if (counter==4) {
            counter = 1;
        }
        slideshow();
    }, 6000);
};

slideshow();

    // Handler for .ready() called.
});

