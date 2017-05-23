

    var anim;
  

    

     var animData101 = {
        container: document.getElementById('bodymovin101'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3zonderschaduw.json'
    };

    var animData102 = {
        container: document.getElementById('bodymovin102'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3zonderschaduw6px.json'
    };

    var animData103 = {
        container: document.getElementById('bodymovin103'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3zonderschaduw4px.json'
    };

    var animData104 = {
        container: document.getElementById('bodymovin104'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3zonderschaduw2px.json'
    };

 
    anim = bodymovin.loadAnimation(animData101);
    anim = bodymovin.loadAnimation(animData102);
    anim = bodymovin.loadAnimation(animData103);
    anim = bodymovin.loadAnimation(animData104);
    anim.addEventListener('data_ready', function(){
});

    


      
  