var anim;
    var animData = {
        container: document.getElementById('container'),
        renderer: 'canvas',
        loop: false,
        prerender:true,
        autoplay: true,
        path: 'kado.json'
    };
    anim = bodymovin.loadAnimation(animData);


