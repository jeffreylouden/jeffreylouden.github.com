(function( win, doc ) {
    "use strict";

    let canvas = document.getElementById('lines');

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createNoise() {
        if (!canvas) { return; }

        let winHeight = window.innerHeight;
        let winWidth = window.innerWidth;
        let context = canvas.getContext('2d');

        canvas.height = winHeight * 2;
        canvas.width = winWidth * 2;

        context.clearRect(0, 0, canvas.width, winHeight );
        
        canvas.style.height = winHeight+ 'px';
        canvas.style.width = winWidth + 'px';
        
        context.scale(4,4);

        for ( let e = 0, len = winHeight; e < len; e++ ) {
            for (let f = 0, len = winWidth; f < len; f++) {
                let randomColor = getRandomInt(0, 1);
                // let randomSkip = getRandomInt(0, 1);
                
                // Skip setting color since it would be white anyway                
                // Random skip to reduce concentration of fill              
                if (!randomColor) continue;
                    
                context.fillStyle = 'rbg(0,0,0)';
                context.fillRect(e, f, getRandomInt(0, 1), getRandomInt(0, 1));
            }
        }
    }

    window.addEventListener("resize", function() {
        createNoise();
    });

    window.onload = function() {
        createNoise();
    };

})(window, document);
