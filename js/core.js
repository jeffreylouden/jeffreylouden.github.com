(function( win, doc ) {
    "use strict";
        
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createLines() {
        var canvas = document.getElementById('lines');
        var context = canvas.getContext('2d');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        for ( var e = 0; e < window.innerHeight; e++ ) {
            if (e % 2 === 1) { continue; }
            var 
                topOffset = e + .5, // to create single pixel line
                l = getRandomInt(0, window.innerWidth);
            context.beginPath();
            context.moveTo(l, topOffset);
            context.lineTo(canvas.width, topOffset);
            context.strokeStyle = '#B3B3B3';
            context.lineWidth = 1;
            context.stroke();
        }
    }

    window.addEventListener("resize", function() {
        createLines();
    });

    window.onload = function() {
        createLines();
    };

})(window, document);