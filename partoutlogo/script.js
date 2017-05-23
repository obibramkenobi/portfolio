

    var anim;
    var animData1 = {
        container: document.getElementById('bodymovin1'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie1.json'
    };

    var animData2 = {
        container: document.getElementById('bodymovin2'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie1skelet.json'
    };

    var animData3 = {
        container: document.getElementById('bodymovin3'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie1_1.json'
    };

    var animData4 = {
        container: document.getElementById('bodymovin4'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie1_1skelet.json'
    };

    var animData5 = {
        container: document.getElementById('bodymovin5'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie2.json'
    };

    var animData6 = {
        container: document.getElementById('bodymovin6'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie2_1.json'
    };

    var animData7 = {
        container: document.getElementById('bodymovin7'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie2skelet.json'
    };

     var animData8 = {
        container: document.getElementById('bodymovin8'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3.json'
    };

     var animData9 = {
        container: document.getElementById('bodymovin9'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3skelet.json'
    };

    var animData10 = {
        container: document.getElementById('bodymovin10'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie3skeletwitstrokedikker.json'
    };

    var animData11 = {
        container: document.getElementById('bodymovin11'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie4.json'
    };

    var animData12 = {
        container: document.getElementById('bodymovin12'),
        renderer: 'svg',
        loop: true,
        prerender:true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:true},
        path: 'optie4_1.json'
    };



    anim = bodymovin.loadAnimation(animData1);
    anim = bodymovin.loadAnimation(animData2);
    anim = bodymovin.loadAnimation(animData3);
    anim = bodymovin.loadAnimation(animData4);
    anim = bodymovin.loadAnimation(animData5);
    anim = bodymovin.loadAnimation(animData6);
    anim = bodymovin.loadAnimation(animData7);
    anim = bodymovin.loadAnimation(animData8);
    anim = bodymovin.loadAnimation(animData9);
    anim = bodymovin.loadAnimation(animData10);
    anim = bodymovin.loadAnimation(animData11);
    anim = bodymovin.loadAnimation(animData12);
    anim.addEventListener('data_ready', function(){
});

    


      
  