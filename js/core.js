function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColors(maxColors) {
  let colors = ["rgba(255,255,255,1)"];

  for (let c = 0, len = maxColors; c < len; c++) {
    colors.push("rgba(" + getRandomInt(0, 254) + "," + getRandomInt(0, 254) + "," + getRandomInt(0, 254) + "," + 1 + ")")
  }

  return colors;

}

(function (win, doc) {
  "use strict";

  let winHeight;
  let winWidth;

  const canvas = document.getElementById("lines");
  if (!canvas) return;
  const context = canvas.getContext("2d");

  const colorArray = generateColors(3);

  function sizeCanvas() {

    winHeight = window.innerHeight;
    winWidth = window.innerWidth;

    canvas.height = winHeight / 2;
    canvas.width = winWidth / 2;


    canvas.style.height = canvas.height + "px";
    canvas.style.width = canvas.width + "px";

    context.scale(2, 2);

  }

  function createNoise() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let e = 0, len = winHeight; e < len; e++) {
      for (let f = 0, len = winWidth; f < len; f++) {
        const randomColor = getRandomInt(0, 4);

        context.fillStyle = colorArray[randomColor];
        context.fillRect(e, f, getRandomInt(0, 1), getRandomInt(0, 1));
      }
    }

    const main = document.getElementById("main");
    main.style.opacity = 1;

  }

  window.addEventListener("resize", function () {
    sizeCanvas();
    createNoise();
  });

  window.onload = function () {
    sizeCanvas();
    createNoise();
  };
})(window, document);
