(function( win, doc ) {
    "use strict";
        
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createLines() {
        var
            lineContainer = doc.createElement("div"),
            fragment = doc.createDocumentFragment();

        lineContainer.setAttribute('class', 'lines');

        for ( var e = 0; e < window.innerHeight; e++ ) {
            if (e % 2 === 1) { continue; }
            console.log(e)
            var
                b = doc.createElement("b"),
                t = getRandomInt(0, window.innerHeight),
                l = getRandomInt(0, window.innerWidth);

            b.setAttribute('style', "position:absolute;width:"+l+"px;height:1px;top:"+e+"px;left:0;background-color:#"+("000"+(Math.random()*(1<<24)|0).toString(16)).substr(-6)+";");

            fragment.appendChild( b );
        }

        lineContainer.appendChild( fragment.cloneNode(true) )
         
        doc.body.appendChild( lineContainer.cloneNode(true) );
    }

    window.addEventListener("resize", function() {
        if (doc.getElementsByTagName('div')) {
            doc.body.removeChild(doc.getElementsByTagName('div')[0])
        }
        createLines();
    });

    window.onload = function() {
        createLines();
    };

})(window, document);