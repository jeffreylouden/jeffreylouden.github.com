(function( win, doc ) {
    "use strict";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createLines() {
        var canvas = document.getElementById('lines');

        if (!canvas) { return; }

        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;

        var context = canvas.getContext('2d');

        canvas.height = winHeight * 2;
        canvas.width = winWidth * 2;

        context.clearRect (0 , 0 , canvas.width, canvas.height);

        canvas.style.height = winHeight + 'px';
        canvas.style.width = winWidth + 'px';

        context.scale(2,2);

        for (var e = 0, len = (winWidth + winHeight); e < len; e++) {
            var
                x = getRandomInt(0, winWidth),
                y = getRandomInt(0, winHeight),
                randomColor = "#"+("000"+(Math.random()*(1<<24)|0).toString(16)).substr(-6);

            context.fillStyle = randomColor;
            context.fillRect(x,y,2,2);
        }
    }

    window.addEventListener("resize", function() {
        createLines();
    });

    window.onload = function() {
        createLines();
    };

})(window, document);
