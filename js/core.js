(function( win, doc ) {
    "use strict";

    var canvas = document.getElementById('lines');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createLines() {
        if (!canvas) { return; }

        var
            context = canvas.getContext('2d'),
            x = getRandomInt(0, window.innerWidth),
            y = getRandomInt(0, window.innerHeight);

        context.clearRect ( 0 , 0 , canvas.width, canvas.height );
        
        canvas.height = window.innerHeight * 2;
        canvas.width = window.innerWidth * 2;

        canvas.style.height = window.innerHeight + 'px';
        canvas.style.width = window.innerWidth + 'px';
        
        context.scale(2,2);

        for ( var e = 0, len = (canvas.width/100); e < len; e++ ) {
            var 
                randomWidth = getRandomInt(0, window.innerWidth),
                randomHeight = getRandomInt(0, window.innerHeight),
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