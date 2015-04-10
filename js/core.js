(function( win, doc ) {
    "use strict";

    var mouse = {x: 0, y: 0};
    var canvas = document.getElementById('lines');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createLines(x,y) {
        var context = canvas.getContext('2d');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        x = x || 0;
        y = y || 0;
        context.clearRect ( 0 , 0 , canvas.width, canvas.height );
        for ( var e = 0; e < (canvas.width/100); e++ ) {
            var 
                l = getRandomInt(0, window.innerWidth),
                w = getRandomInt(0, window.innerWidth);
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(l, w);
            context.strokeStyle = "#"+("000"+(Math.random()*(1<<24)|0).toString(16)).substr(-6);
            context.lineWidth = 1;
            context.stroke();
        }
    }

    window.addEventListener("resize", function() {
        if (!canvas) { return; }
        createLines();
    });

    window.onload = function() {
        if (!canvas) { return; }
        createLines();
    };

    document.addEventListener('mousemove', function(e){ 
        mouse.x = e.clientX || e.pageX; 
        mouse.y = e.clientY || e.pageY;
        if (!canvas) { return; }
        createLines(mouse.x,mouse.y);
    }, false);

})(window, document);