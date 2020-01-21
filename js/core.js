(function( win, doc ) {
    "use strict";

    var canvas = document.getElementById('lines');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createLines() {
        if (!canvas) { return; }

        var
            winHeight = window.innerHeight,
            winWidth = window.innerWidth,
            context = canvas.getContext('2d'),
            x = getRandomInt(0, winWidth),
            y = getRandomInt(0, winHeight);

        canvas.height = winHeight * 2;
        canvas.width = winWidth * 2;

        context.clearRect ( 0 , 0 , canvas.width, canvas.height );
        
        canvas.style.height = winHeight + 'px';
        canvas.style.width = winWidth + 'px';
        
        context.scale(2,2);

        for ( var e = 0, len = (winWidth/10); e < len; e++ ) {
            var 
                randomWidth = getRandomInt(0, winWidth),
                randomHeight = getRandomInt(0, winHeight),
                randomColor = "#"+("000"+(Math.random()*(1<<24)|0).toString(16)).substr(-6);

            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(randomWidth, randomHeight);
            context.strokeStyle = randomColor;
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
