!function(a,b,c,d,e){function k(){var a=this._cloneProps(new this.constructor(this.mode,this.startPosition,this.loop));return a.gotoAndStop(this.currentFrame),a.paused=this.paused,a.framerate=this.framerate,a}function l(a,b,d){var e=c.extend(a,c.MovieClip);return e.clone=k,e.nominalBounds=b,e.frameBounds=d,e}var f;a.webFontTxtInst={};var g=0,h=0,i=[],j=[];a.ssMetadata=[],a.updateListCache=function(a){for(var b=0;b<a.length;b++)a[b].cacheCanvas&&a[b].updateCache()},a.addElementsToCache=function(a,b){for(var c=a;c!=exportRoot&&b.indexOf(c)==-1;)c=c.parent;if(c!=exportRoot)for(var d=a,e=b.indexOf(c);d!=c;)b.splice(e,0,d),d=d.parent,e++;else for(c=a;c!=exportRoot;)b.push(c),c=c.parent},a.gfontAvailable=function(b,c){a.properties.webfonts[b]=!0;for(var d=a.webFontTxtInst&&a.webFontTxtInst[b]||[],e=0;e<d.length;++e)a.addElementsToCache(d[e],i);h++,h==c&&a.updateListCache(i)},a.tfontAvailable=function(b,c){a.properties.webfonts[b]=!0;for(var d=a.webFontTxtInst&&a.webFontTxtInst[b]||[],e=0;e<d.length;++e)a.addElementsToCache(d[e],j);g++,g==c&&a.updateListCache(j)},(a.background=function(){this.initialize(b.background)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,300,600),(a.button=function(){this.initialize(b.button)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,262,60),(a.sticker=function(){this.initialize(b.sticker)}).prototype=f=new c.Bitmap,f.nominalBounds=new c.Rectangle(0,0,104,104),(a.Tween6=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.button,this.instance.parent=this,this.instance.setTransform(-131,-30),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(-131,-30,262,60),(a.Tween3=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.button,this.instance.parent=this,this.instance.setTransform(-131,-30),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(-131,-30,262,60),(a.Tween2=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.button,this.instance.parent=this,this.instance.setTransform(-131,-30),this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(-131,-30,262,60),(a.Symbol4=function(b,d,e){this.initialize(b,d,e,{}),this.instance=new a.sticker,this.instance.parent=this,this.timeline.addTween(c.Tween.get(this.instance).wait(1))}).prototype=l(a.Symbol4,new c.Rectangle(0,0,104,104),null),(a.buschjeagerhtml=function(b,d,e){null==e&&(e=!1),this.initialize(b,d,e,{}),this.frame_0=function(){this.loopsPlayed||(this.loopsPlayed=0)},this.frame_149=function(){this.loopsPlayed++,this.loopsPlayed>=4?this.stop():this.gotoAndPlay(0)},this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(1)),this.instance=new a.Symbol4,this.instance.parent=this,this.instance.setTransform(58,413,.01,.01,0,0,0,50.1,50.1),this.timeline.addTween(c.Tween.get(this.instance).wait(4).to({scaleX:1,scaleY:1,x:58.1,y:413.1},15,c.Ease.get(1)).wait(131)),this.instance_1=new a.button,this.instance_1.parent=this,this.instance_1.setTransform(20,472),this.instance_2=new a.Tween2("synched",0),this.instance_2.parent=this,this.instance_2.setTransform(151,502),this.instance_2._off=!0,this.instance_3=new a.Tween3("synched",0),this.instance_3.parent=this,this.instance_3.setTransform(162,502),this.instance_3._off=!0,this.instance_4=new a.Tween6("synched",0),this.instance_4.parent=this,this.instance_4.setTransform(151,502),this.timeline.addTween(c.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},39).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_4}]},98).wait(1)),this.timeline.addTween(c.Tween.get(this.instance_2).wait(39).to({_off:!1},0).to({_off:!0,x:162},3,c.Ease.get(1)).to({_off:!1,x:151},3,c.Ease.get(1)).to({_off:!0,x:162},3,c.Ease.get(1)).wait(102)),this.timeline.addTween(c.Tween.get(this.instance_3).wait(39).to({_off:!1},3,c.Ease.get(1)).to({_off:!0,x:151},3,c.Ease.get(1)).to({_off:!1,x:162},3,c.Ease.get(1)).to({_off:!0,x:151},3,c.Ease.get(1)).wait(99)),this.instance_5=new a.background,this.instance_5.parent=this,this.instance_5.setTransform(1,0),this.timeline.addTween(c.Tween.get(this.instance_5).wait(150)),this.shape=new c.Shape,this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg"),this.shape.setTransform(151,300),this.shape_1=new c.Shape,this.shape_1.graphics.f("#FFFFFF").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg"),this.shape_1.setTransform(151,300),this.timeline.addTween(c.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(150))}).prototype=f=new c.MovieClip,f.nominalBounds=new c.Rectangle(150,299,302,602),a.properties={width:300,height:600,fps:24,color:"#FFFFFF",opacity:1,webfonts:{},manifest:[{src:"images/background.jpg",id:"background"},{src:"images/button.jpg",id:"button"},{src:"images/sticker.png",id:"sticker"}],preloads:[]}}(lib=lib||{},images=images||{},createjs=createjs||{},ss=ss||{},AdobeAn=AdobeAn||{});var lib,images,createjs,ss,AdobeAn;