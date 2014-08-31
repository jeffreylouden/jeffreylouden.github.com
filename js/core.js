(function( win, doc ) {
    "use strict";

    var
        speeds = ['fast', 'medium', 'slow']
        

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createStars(min, max) {
        var
            starCount = getRandomInt(min, max),
            starContainer = doc.createElement("div"),
            fragment = doc.createDocumentFragment();

        for ( var e = 0; e < starCount; e++ ) {
            var
                b = doc.createElement("b"),
                t = getRandomInt(0, window.innerHeight),
                l = getRandomInt(0, window.innerWidth);

            b.setAttribute('style', "position:absolute;width:1px;height:1px;top:"+t+"px;left:"+l+"px;");
            b.setAttribute('class', speeds[getRandomInt(0, 2)]);

            fragment.appendChild( b );
        }

        starContainer.appendChild( fragment.cloneNode(true) )
         
        doc.body.appendChild( starContainer.cloneNode(true) );
        
    }

    window.addEventListener("resize", function() {
        if (doc.getElementsByTagName('div')) {
            doc.body.removeChild(doc.getElementsByTagName('div')[0])
        }
        createStars(500, 1000);
    });

    window.onload = function() {
        createStars(500, 1000);
    };

})(window, document);