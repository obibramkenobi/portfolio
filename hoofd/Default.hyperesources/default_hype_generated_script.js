//	HYPE.documents["Default"]
(function() {
    (function k() {
        function l(a, b, d) {
            var c=!1;
            null==window[a]&&(null==window[b]?(window[b]=[], window[b].push(k), a=document.getElementsByTagName("head")[0], b=document.createElement("script"), c=h, true==!0&&(c="https://tumult.com/hype/runtime"), b.type="text/javascript", b.src=c+"/"+d, a.appendChild(b)): window[b].push(k), c=!0);
            return c
        }
        var h="Default.hyperesources", c="Default", e="default_hype_container";
        if(false==!1)try {
            for(var f=document.getElementsByTagName("script"), a=0;
            a<f.length;
            a++) {
                var b=f[a].src, d=null!=b?b.indexOf("default_hype_generated_script.js"): -1;
                if(-1!=d) {
                    h=b.substr(0, d-1);
                    break
                }
            }
        }
        catch(n) {}
        if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/), a=parseFloat(a&&a[1])||null, a=l("HYPE_576", "HYPE_dtl_576", !0==(null!=a&&10>a||false==!0)?"HYPE-576.full.min.js":"HYPE-576.thin.min.js"), false==!0&&(a=a||l("HYPE_w_576", "HYPE_wdtl_576", "HYPE-576.waypoints.min.js")), a))return;
        f=window.HYPE.documents;
        if(null!=f[c]) {
            b=1;
            a=c;
            do c=""+a+"-"+b++;
            while(null!=f[c]);
            d=document.getElementsByTagName("div");
            b=!1;
            for(a=0;
            a<d.length;
            a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")) {
                var b=1, g=e;
                do e=""+g+"-"+b++;
                while(null!=document.getElementById(e));
                d[a].id=e;
                b=!0;
                break
            }
            if(!1==b)return
        }
        b=[];
        b=[ {
            name:"looking", source:"function(hypeDocument, element, event) {\t\nwindow.onmousemove = function(event) {\n\nmx = event.clientX; // Mouse X\nmy = event.clientY; // Mouse Y\ngx = parseInt(hypeDocument.getElementById('group').style.left);\ngy = parseInt(hypeDocument.getElementById('group').style.top);\nlx = hypeDocument.getElementProperty(left, 'left') + (hypeDocument.getElementProperty(left, 'width')) + gx;\nly = hypeDocument.getElementProperty(left, 'top') + (hypeDocument.getElementProperty(left, 'height')) + gy;\nrx = hypeDocument.getElementProperty(right, 'left') + (hypeDocument.getElementProperty(right, 'width')/2) + gx;\nry = hypeDocument.getElementProperty(right, 'top') + (hypeDocument.getElementProperty(right, 'height')/2) + gy;\n\nangle = Math.atan2((my-ly),(mx-lx)) * (180/Math.PI) ; // AHHHH MATH!\nhypeDocument.getElementById('left').style.WebkitTransform = \"rotate(\" + angle + \"deg)\"; // Rotate the left eye WebKit\nhypeDocument.getElementById('left').style.MozTransform = \"rotate(\" + angle + \"deg)\"; // Rotate the left eye Firefox\nhypeDocument.getElementById('left').style.msTransform = \"rotate(\" + angle + \"deg)\"; // Rotate the left eye Microsoft\nhypeDocument.getElementById('left').style.transform = \"rotate(\" + angle + \"deg)\"; // Rotate the left eye box \n\nangle = Math.atan2((my-ry),(mx-rx)) * (180/Math.PI) ; // AHHHH MATH!\nhypeDocument.getElementById('right').style.WebkitTransform = \"rotate(\" + angle + \"deg)\"; // Rotate the right eye WebKit\nhypeDocument.getElementById('right').style.MozTransform = \"rotate(\" + angle + \"deg)\"; // Rotate the right eye Firefox\nhypeDocument.getElementById('right').style.msTransform = \"rotate(\" + angle + \"deg)\"; // Rotate the right eye Microsoft\nhypeDocument.getElementById('right').style.transform = \"rotate(\" + angle + \"deg)\"; // Rotate the right eye\n }\n\n}", identifier: "48"
          
        }
        , {
            name:"fullscreen", source:"function(hypeDocument, element, event) {}", identifier: "80"
        }
        , {
            name:"untitledFunction", source:"function(hypeDocument, element, event) {}", identifier: "109"
        }
        , {
            name:"whistle", source:"function(hypeDocument, element, event) {\nvar sounds = [\"f1.mp3\",\n              \"f2.mp3\",\n              \"f3.mp3\",\n              \"http://bramvdijk.nl/hoofd/f4.mp3\"],\n    oldSounds = [];\n\nvar playSounds = function () {\n    var index = Math.floor(Math.random() * (sounds.length)),\n        thisSound = sounds[index];\n    \n        oldSounds.push(thisSound);\n        sounds.splice(index, 1);\n    \n        if (sounds.length < 1) {\n            sounds = oldSounds.splice(0, oldSounds.length);\n        }\n        var audio = new Audio('/f1.mp3');\n        audio.play();\n//        document.body.innerHTML =\"<embed src=\\\"\" + thisSound + \"\\\" hidden=\\\"true\\\" autostart=\\\"true\\\" />\";\n\n        \n\n}\n\nplaySounds();\n\n\n}", identifier: "114"
        }
        ];
        d= {}
        ;
        g= {}
        ;
        for(a=0;
        a<b.length;
        a++)try {
            g[b[a].identifier]=b[a].name, d[b[a].name]=eval("(function(){return "+b[a].source+"})();")
        }
        catch(m) {
            window.console&&window.console.log(m), d[b[a].name]=function() {}
        }
        a=new HYPE_576(c, e, {
            "7": {
                p: 1, n: "hoofdzonderoog.png", g: "86", t: "@1x"
            }
            , "3": {
                p: 1, n: "wang.png", g: "93", t: "@1x"
            }
            , "8": {
                p: 1, n: "brauw.png", g: "121", t: "@1x"
            }
            , "4": {
                p: 1, n: "huid.png", g: "96", t: "@1x"
            }
            , "0": {
                p: 1, n: "oog.png", g: "75", t: "@1x"
            }
            , "5": {
                p: 2, n: "f4.mp3", g: "112", t: "audio/mpeg"
            }
            , "1": {
                p: 1, n: "knipper.png", g: "89", t: "@1x"
            }
            , "6": {
                p: 1, n: "note.png", g: "115", t: "@1x"
            }
            , "2": {
                p: 1, n: "fluit.png", g: "92", t: "@1x"
            }
        }
        , h, [], d, [ {
            n: "Grid", o: "1", X: [0]
        }
        ], [ {
            p:"600px", U: {}
            , c:"#efefef", bZ:180, d:200, cA:false, Y:200, L:[], Z:200, v: {
                "135": {
                    h: "92", p: "no-repeat", x: "visible", a: 139, q: "100% 100%", b: 147, j: "absolute", dB: "img", z: 10, k: "div", c: 8, d: 7, r: "inline", cQ: 0.70000000000000007, e: 0, cR: 0.70000000000000007
                }
                , "128": {
                    b: 78, z: 8, c: 50, BDbK: 1, d: 50, BDbG: 0, bD: "none", cQ: 1, f: 0, cR: 1, h: "75", bF: "127", BDbL: 0, i: "left", BDbH: 0, j: "absolute", bG: 0, k: "div", bH: 0, bI: 1, bJ: 1, BDbI: 1, p: "no-repeat", bK: 1, q: "100% 100%", r: "inline", bL: 0, s: "Arial,Helvetica,Sans-Serif", BDbJ: 1, aP: "auto", w: "", x: "visible", cN: "none", a: 83
                }
                , "131": {
                    p: "no-repeat", tY: 0.5, b: 0, q: "100% 100%", c: 200, d: 200, r: "inline", cQ: 1, e: 1, f: 0, cR: 1, h: "121", j: "absolute", x: "visible", k: "div", dB: "img", z: 12, tX: 0.5, a: 1, bR: 0
                }
                , "134": {
                    p: "no-repeat", tY: 0.5, b: 135, q: "100% 100%", c: 38, d: 24, r: "inline", cQ: 0.0000000000, e: 0, f: 0, cR: 0.0000000000, h: "96", j: "absolute", x: "visible", k: "div", dB: "img", z: 3, tX: 0.5, a: 118, bR: 0
                }
                , "137": {
                    p: "no-repeat", tY: 0.5, b: 136.5, q: "100% 100%", c: 15, d: 27, r: "inline", cQ: 1, e: 0, f: 10, cR: 1, h: "115", j: "absolute", x: "visible", k: "div", dB: "img", z: 11, bP: "YES", tX: 0.5, a: 136.5, bR: 0
                }
                , "127": {
                    cN: "none", x: "visible", bS: 36, a: 0, b: 0, j: "absolute", i: "group", z: 2, k: "div", c: 200, d: 200, cQ: 1, e: 1, aP: "auto", cR: 1, bD: "none"
                }
                , "130": {
                    p: "no-repeat", c: 50, q: "100% 100%", d: 50, r: "inline", cQ: 0.80000000000000004, s: "Arial,Helvetica,Sans-Serif", f: 0, bD: "none", cR: 0.80000000000000004, aP: "auto", h: "75", i: "right", w: "", bF: "127", j: "absolute", x: "visible", k: "div", z: 6, cN: "none", a: 127, b: 65
                }
                , "133": {
                    h: "93", p: "no-repeat", x: "visible", a: 123, q: "100% 100%", b: 144, j: "absolute", dB: "img", z: 9, k: "div", c: 14, d: 15, r: "inline", e: 0
                }
                , "136": {
                    h: "89", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 0, j: "absolute", dB: "img", z: 8, k: "div", c: 200, d: 200, r: "inline", e: -1, aP: "pointer"
                }
                , "129": {
                    h: "86", p: "no-repeat", x: "visible", a: 0, q: "100% 100%", b: 0, j: "absolute", bF: "127", z: 3, k: "div", dB: "img", d: 200, c: 200, r: "inline"
                }
                , "132": {
                    c:201, d:200, I:"None", J:"None", K:"None", g:"rgba(232, 235, 237, 0.000)", L:"None", aP:"pointer", M:0, N:0, A:"#D8DDE4", x:"visible", aA: {
                        a:[ {
                            b: "91", p: 3, z: false, symbolOid: "15"
                        }
                        , {
                            b: "kTimelineDefaultIdentifier", symbolOid: "15", p: 7
                        }
                        ]
                    }
                    , j:"absolute", O:0, k:"div", dB:"button", z:13, C:"#D8DDE4", D:"#D8DDE4", B:"#D8DDE4", P:0, a:0, b:0
                }
            }
            , A: {
                a:[ {
                    p: 4, h: "48"
                }
                ]
            }
            , O:["132", "131", "136", "129", "127", "130", "128", "133", "134", "137", "135"], "_":0, bY:1, E: {
                a:[ {
                    b: "kTimelineDefaultIdentifier", p: 3, z: false, symbolOid: "15"
                }
                ]
            }
            , n:"Hoofd", a:100, o:"16", T: {
                "91": {
                    f:30, z:0.16, i:"91", n:"fluiten", j: {
                        "0": [[144, 150, 144, 150, 149, 148, 149, 148]], "1": [[149, 148, 149, 148, 160, 145, 168, 138], [168, 138, 176, 131, 179.5, 121.5, 179.5, 121.5]]
                    }
                    , a:[ {
                        f: "c", y: 0, z: 0.05, i: "a", e: 127, s: 123, o: "133"
                    }
                    , {
                        f: "a", y: 0, z: 0.15, i: "e", e: 0, s: 1, o: "133"
                    }
                    , {
                        f: "c", y: 0, z: 0.04, i: "cQ", e: 1.1000000000000001, s: 1.600000000000001, o: "135"
                    }
                    , {
                        f: "c", y: 0, z: 0.04, i: "cR", e: 1.1000000000000001, s: 0.60000000000000009, o: "135"
                    }
                    , {
                        f:"c", p:2, y:0, z:0.16, i:"ActionHandler", e: {
                            a:[ {
                                b: "126", p: 3, z: false, symbolOid: "15"
                            }
                            ]
                        }
                        , s: {
                            a:[ {
                                p: 12, o: "112", q: false
                            }
                            ]
                        }
                        , o:"91"
                    }
                    , {
                        o: "137", y: 0, z: 0.01, i: "b", e: 134.5, a: "0", f: "c", s: 136.5
                    }
                    , {
                        f: "c", y: 0, z: 0.08, i: "f", e: 60, s: 0, o: "137"
                    }
                    , {
                        y: 0, i: "bR", s: 0, z: 0, o: "137", f: "c"
                    }
                    , {
                        f: "a", y: 0, z: 0.14, i: "e", e: 1, s: 1, o: "134"
                    }
                    , {
                        y: 0, i: "cQ", s: 1, z: 0, o: "134", f: "a"
                    }
                    , {
                        y: 0, i: "cR", s: 1, z: 0, o: "134", f: "a"
                    }
                    , {
                        f: "a", y: 0, z: 0.14, i: "e", e: 1, s: 1, o: "135"
                    }
                    , {
                        o: "137", y: 0, z: 0.01, i: "a", e: 141.5, a: "0", f: "c", s: 136.5
                    }
                    , {
                        f: "c", y: 0, z: 0.12, i: "cQ", e: 1, s: 0.0000000000, o: "137"
                    }
                    , {
                        f: "c", y: 0, z: 0.12, i: "cR", e: 1, s: 0.0000000000, o: "137"
                    }
                    , {
                        f: "c", y: 0, z: 0.04, i: "b", e: 2, s: 0, o: "131"
                    }
                    , {
                        f: "c", y: 0, z: 0.01, i: "e", e: 1, s: 0, o: "137"
                    }
                    , {
                        f: "c", y: 0, z: 0.04, i: "a", e: 2, s: 1, o: "131"
                    }
                    , {
                        o: "137", y: 0.01, z: 0.11, i: "b", e: 108, a: "1", f: "c", s: 134.5
                    }
                    , {
                        o: "137", y: 0.01, z: 0.11, i: "a", e: 172, a: "1", f: "c", s: 141.5
                    }
                    , {
                        f: "c", y: 0.01, z: 0.09, i: "e", e: 1, s: 1, o: "137"
                    }
                    , {
                        f: "c", y: 0.04, z: 0.1, i: "cQ", e: 0.90000000000000002, s: 1.1000000000000001, o: "135"
                    }
                    , {
                        f: "c", y: 0.04, z: 0.1, i: "cR", e: 0.90000000000000002, s: 1.1000000000000001, o: "135"
                    }
                    , {
                        f: "c", y: 0.04, z: 0.09, i: "b", e: 0, s: 2, o: "131"
                    }
                    , {
                        f: "c", y: 0.04, z: 0.09, i: "a", e: 1, s: 2, o: "131"
                    }
                    , {
                        f: "c", y: 0.05, z: 0.09, i: "a", e: 123, s: 127, o: "133"
                    }
                    , {
                        y: 0.08, i: "f", s: 60, z: 0, o: "137", f: "c"
                    }
                    , {
                        f: "c", y: 0.1, z: 0.02, i: "e", e: 0, s: 1, o: "137"
                    }
                    , {
                        y: 0.12, i: "cQ", s: 1, z: 0, o: "137", f: "c"
                    }
                    , {
                        y: 0.12, i: "cR", s: 1, z: 0, o: "137", f: "c"
                    }
                    , {
                        y: 0.12, i: "b", s: 108, z: 0, o: "137", f: "c"
                    }
                    , {
                        y: 0.12, i: "a", s: 172, z: 0, o: "137", f: "c"
                    }
                    , {
                        y: 0.12, i: "e", s: 0, z: 0, o: "137", f: "c"
                    }
                    , {
                        y: 0.13, i: "b", s: 0, z: 0, o: "131", f: "c"
                    }
                    , {
                        y: 0.13, i: "a", s: 1, z: 0, o: "131", f: "c"
                    }
                    , {
                        f: "c", y: 0.14, z: 0.01, i: "e", e: 0, s: 1, o: "134"
                    }
                    , {
                        f: "c", y: 0.14, z: 0.01, i: "e", e: 0, s: 1, o: "135"
                    }
                    , {
                        y: 0.14, i: "a", s: 123, z: 0, o: "133", f: "c"
                    }
                    , {
                        y: 0.14, i: "cQ", s: 0.90000000000000002, z: 0, o: "135", f: "c"
                    }
                    , {
                        y: 0.14, i: "cR", s: 0.90000000000000002, z: 0, o: "135", f: "c"
                    }
                    , {
                        f: "c", y: 0.15, z: 0.01, i: "e", e: -1, s: 0, o: "133"
                    }
                    , {
                        y: 0.15, i: "e", s: 0, z: 0, o: "134", f: "c"
                    }
                    , {
                        y: 0.15, i: "e", s: 0, z: 0, o: "135", f: "c"
                    }
                    , {
                        f:"e", p:2, y:0.16, z:0, i:"ActionHandler", s: {
                            a:[ {
                                b: "126", p: 3, z: false, symbolOid: "15"
                            }
                            ]
                        }
                        , o:"91"
                    }
                    , {
                        y: 0.16, i: "e", s: -1, z: 0, o: "133", f: "c"
                    }
                    ], b:[]
                }
                , "88": {
                    i:"88", n:"knipperen", z:0.07, b:[], a:[ {
                        f: "c", y: 0, z: 0.05, i: "e", e: 1, s: 1, o: "136"
                    }
                    , {
                        f:"c", p:2, y:0, z:0.07, i:"ActionHandler", e: {
                            a:[ {
                                b: "kTimelineDefaultIdentifier", p: 3, z: false, symbolOid: "15"
                            }
                            ]
                        }
                        , s: {
                            a:[ {
                                b: "91", symbolOid: "15", p: 7
                            }
                            ]
                        }
                        , o:"88"
                    }
                    , {
                        f: "c", y: 0.05, z: 0.01, i: "e", e: 0, s: 1, o: "136"
                    }
                    , {
                        y: 0.06, i: "e", s: 0, z: 0, o: "136", f: "c"
                    }
                    , {
                        f:"c", p:2, y:0.07, z:0, i:"ActionHandler", s: {
                            a:[ {
                                b: "kTimelineDefaultIdentifier", p: 3, z: false, symbolOid: "15"
                            }
                            ]
                        }
                        , o:"88"
                    }
                    ], f:30
                }
                , kTimelineDefaultIdentifier: {
                    i:"kTimelineDefaultIdentifier", n:"Main Timeline", z:4, b:[], a:[ {
                        f:"c", p:2, y:3.29, z:0.01, i:"ActionHandler", e: {
                            a:[ {
                                b: "88", p: 3, z: false, symbolOid: "15"
                            }
                            ]
                        }
                        , s: {
                            a:[ {
                                b: "91", symbolOid: "15", p: 7
                            }
                            ]
                        }
                        , o:"kTimelineDefaultIdentifier"
                    }
                    , {
                        f:"c", p:2, y:4, z:0, i:"ActionHandler", s: {
                            a:[ {
                                b: "88", p: 3, z: false, symbolOid: "15"
                            }
                            ]
                        }
                        , o:"kTimelineDefaultIdentifier"
                    }
                    ], f:30
                }
            }
            , b:100
        }
        ], {}
        , g, {}
        , null, false, true, -1, true, true, true, true);
        f[c]=a.API;
        document.getElementById(e).setAttribute("HYP_dn", c);
        a.z_o(this.body)
    }
    )();
}

)();