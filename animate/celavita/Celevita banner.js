!function(a,b,c,d,e){function k(){var a=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return a.gotoAndStop(this.currentFrame),a.paused=this.paused,a.framerate=this.framerate,a}function l(a,b,d){var e=c.extend(a,c.MovieClip);return e.clone=k,e.nominalBounds=b,e.frameBounds=d,e}var f;a.webFontTxtInst={};var g=0,h=0,i=[],j=[];a.ssMetadata=[],a.updateListCache=function(a){for(var b=0;b<a.length;b++)a[b].cacheCanvas&&a[b].updateCache()},a.addElementsToCache=function(a,b){for(var c=a;c!=exportRoot&&b.indexOf(c)==-1;)c=c.parent;if(c!=exportRoot)for(var d=a,e=b.indexOf(c);d!=c;)b.splice(e,0,d),d=d.parent,e++;else for(c=a;c!=exportRoot;)b.push(c),c=c.parent},a.gfontAvailable=function(b,c){a.properties.webfonts[b]=!0;for(var d=a.webFontTxtInst&&a.webFontTxtInst[b]||[],e=0;e<d.length;++e)a.addElementsToCache(d[e],i);h++,h==c&&a.updateListCache(i)},a.tfontAvailable=function(b,c){a.properties.webfonts[b]=!0;for(var d=a.webFontTxtInst&&a.webFontTxtInst[b]||[],e=0;e<d.length;++e)a.addElementsToCache(d[e],j);g++,g==c&&a.updateListCache(j)},(a.bg=function(){this.initialize(b.bg)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,336,280),(a.bord=function(){this.initialize(b.bord)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,336,840),(a.button=function(){this.initialize(b.button)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,255,81),(a.logo=function(){this.initialize(b.logo)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,109,67),(a.tekst1=function(){this.initialize(b.tekst1)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,160,79),(a.tekst2pngcopy=function(){this.initialize(b.tekst2pngcopy)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,159,125),(a.tekst3pngcopy=function(){this.initialize(b.tekst3pngcopy)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,130,98),(a.Symbol8=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.button,this.instance.parent=this,this.instance.setTransform(0,0,.98,.98),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=l(a.Symbol8,new c.Rectangle(0,0,250,79.4),null),(a.Symbol7=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.tekst3pngcopy,this.instance.parent=this,this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=l(a.Symbol7,new c.Rectangle(0,0,130,98),null),(a.Symbol4=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.tekst2pngcopy,this.instance.parent=this,this.instance.setTransform(0,0,.881,.88),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(0,0,140,110.1),(a.Symbol3=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.tekst1,this.instance.parent=this,this.instance.setTransform(0,0,.894,.894),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(0,0,143,70.6),(a.Symbol1=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.bord,this.instance.parent=this,this.instance.setTransform(0,0,.893,.893),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(0,0,300,750),(a.Symbol5=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.Symbol4("synched",0),this.instance.parent=this,this.instance.setTransform(70,55,1,1,0,0,0,70,55),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(0,0,140,110.1),(a.Symbol2=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.Symbol1("synched",0),this.instance.parent=this,this.instance.setTransform(150,375,1,1,0,0,0,150,375),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(0,0,300,750),(a.Celevitabanner=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.Symbol8,this.instance.parent=this,this.instance.setTransform(175,210.7,1,1,0,0,0,125,39.7),this.timeline.addTween(c.Tween.get(this.instance).wait(199).to({x:177},0).wait(1).to({x:179},0).wait(1).to({x:181},0).wait(1).to({x:183},0).wait(1).to({x:185},0).wait(1).to({x:183.6},0).wait(1).to({x:182.1},0).wait(1).to({x:180.7},0).wait(1).to({x:179.3},0).wait(1).to({x:177.9},0).wait(1).to({x:176.4},0).wait(1).to({x:175},0).wait(1).to({x:176.7},0).wait(1).to({x:178.3},0).wait(1).to({x:180},0).wait(1).to({x:181.7},0).wait(1).to({x:183.3},0).wait(1).to({x:185},0).wait(1).to({x:183},0).wait(1).to({x:181},0).wait(1).to({x:179},0).wait(1).to({x:177},0).wait(1).to({x:175},0).wait(79)),this.instance_1=new a.logo,this.instance_1.parent=this,this.instance_1.setTransform(0,0,.917,.917),this.timeline.addTween(c.Tween.get(this.instance_1).wait(300)),this.instance_2=new a.Symbol7,this.instance_2.parent=this,this.instance_2.setTransform(80,110.5,1,1,0,0,0,65,49),this.instance_2.alpha=0,this.instance_2._off=!0,this.timeline.addTween(c.Tween.get(this.instance_2).wait(150).to({_off:!1},0).wait(1).to({alpha:.052},0).wait(1).to({alpha:.104},0).wait(1).to({alpha:.156},0).wait(1).to({alpha:.208},0).wait(1).to({alpha:.259},0).wait(1).to({alpha:.311},0).wait(1).to({alpha:.362},0).wait(1).to({alpha:.414},0).wait(1).to({alpha:.465},0).wait(1).to({alpha:.516},0).wait(1).to({alpha:.567},0).wait(1).to({alpha:.618},0).wait(1).to({alpha:.668},0).wait(1).to({alpha:.719},0).wait(1).to({alpha:.769},0).wait(1).to({alpha:.82},0).wait(1).to({alpha:.87},0).wait(1).to({alpha:.92},0).wait(1).to({alpha:.97},0).wait(1).to({alpha:1},0).wait(99).to({alpha:.951},0).wait(1).to({alpha:.896},0).wait(1).to({alpha:.841},0).wait(1).to({alpha:.786},0).wait(1).to({alpha:.732},0).wait(1).to({alpha:.677},0).wait(1).to({alpha:.623},0).wait(1).to({alpha:.569},0).wait(1).to({alpha:.516},0).wait(1).to({alpha:.462},0).wait(1).to({alpha:.409},0).wait(1).to({alpha:.355},0).wait(1).to({alpha:.302},0).wait(1).to({alpha:.249},0).wait(1).to({alpha:.197},0).wait(1).to({alpha:.144},0).wait(1).to({alpha:.092},0).wait(1).to({alpha:.039},0).wait(1).to({alpha:0},0).wait(13)),this.instance_3=new a.Symbol5("synched",0),this.instance_3.parent=this,this.instance_3.setTransform(210,110,1,1,0,0,0,70,55),this.instance_3.alpha=0,this.instance_3._off=!0,this.timeline.addTween(c.Tween.get(this.instance_3).wait(77).to({_off:!1},0).wait(1).to({alpha:.171},0).wait(1).to({alpha:.341},0).wait(1).to({alpha:.509},0).wait(1).to({alpha:.677},0).wait(1).to({alpha:.843},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:.933},0).wait(1).to({alpha:.835},0).wait(1).to({alpha:.739},0).wait(1).to({alpha:.644},0).wait(1).to({alpha:.549},0).wait(1).to({alpha:.455},0).wait(1).to({alpha:.363},0).wait(1).to({alpha:.271},0).wait(1).to({alpha:.18},0).wait(1).to({alpha:.089},0).wait(1).to({alpha:0},0).to({_off:!0},1).wait(171)),this.instance_4=new a.Symbol3("synched",0),this.instance_4.parent=this,this.instance_4.setTransform(81.5,110.3,1,1,0,0,0,71.5,35.3),this.instance_4.alpha=0,this.instance_4._off=!0,this.timeline.addTween(c.Tween.get(this.instance_4).wait(19).to({_off:!1},0).wait(1).to({alpha:.133},0).wait(1).to({alpha:.265},0).wait(1).to({alpha:.395},0).wait(1).to({alpha:.525},0).wait(1).to({alpha:.654},0).wait(1).to({alpha:.781},0).wait(1).to({alpha:.908},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:.934},0).wait(1).to({alpha:.851},0).wait(1).to({alpha:.77},0).wait(1).to({alpha:.689},0).wait(1).to({alpha:.609},0).wait(1).to({alpha:.53},0).wait(1).to({alpha:.452},0).wait(1).to({alpha:.374},0).wait(1).to({alpha:.298},0).wait(1).to({alpha:.222},0).wait(1).to({alpha:.147},0).wait(1).to({alpha:.073},0).wait(1).to({alpha:0},0).to({_off:!0},1).wait(237)),this.instance_5=new a.Symbol2("synched",0),this.instance_5.parent=this,this.instance_5.setTransform(150,375,1,1,0,0,0,150,375),this.instance_5.alpha=0,this.instance_5._off=!0,this.timeline.addTween(c.Tween.get(this.instance_5).wait(9).to({_off:!1},0).to({alpha:1},20,c.Ease.get(.2)).wait(30).to({startPosition:0},0).to({y:135},20,c.Ease.get(.2)).wait(41).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({y:-125},20,c.Ease.get(.2)).wait(115).to({startPosition:0},0).to({y:-365},17,c.Ease.get(.2)).to({_off:!0},26).wait(1)),this.instance_6=new a.bg,this.instance_6.parent=this,this.instance_6.setTransform(0,0,.893,.893),this.timeline.addTween(c.Tween.get(this.instance_6).wait(300))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(150,125,300,250.4),a.properties={width:300,height:250,fps:30,color:"#FFFFFF",opacity:1,webfonts:{},manifest:[{src:"images/bg.jpg",id:"bg"},{src:"images/bord.png",id:"bord"},{src:"images/button.png",id:"button"},{src:"images/logo.png",id:"logo"},{src:"images/tekst1.png",id:"tekst1"},{src:"images/tekst2pngcopy.png",id:"tekst2pngcopy"},{src:"images/tekst3pngcopy.png",id:"tekst3pngcopy"}],preloads:[]}}(lib=lib||{},images=images||{},createjs=createjs||{},ss=ss||{},AdobeAn=AdobeAn||{});var lib,images,createjs,ss,AdobeAn;