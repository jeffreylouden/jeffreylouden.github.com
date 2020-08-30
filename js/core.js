(function (win, doc) {
  "use strict";

  let canvas = document.getElementById("lines");

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createNoise() {
    if (!canvas) {
      return;
    }

    let winHeight = window.innerHeight;
    let winWidth = window.innerWidth;
    let context = canvas.getContext("2d");

    canvas.height = winHeight;
    canvas.width = winWidth;

    context.clearRect(0, 0, canvas.width, winHeight);

    canvas.style.height = winHeight + "px";
    canvas.style.width = winWidth + "px";

    context.scale(2, 2);

    for (let e = 0, len = winHeight; e < len; e++) {
      for (let f = 0, len = winWidth; f < len; f++) {
        let randomColor = getRandomInt(0, 1);

        // Skip setting color since it would be white anyway
        if (!randomColor) continue;

        context.fillRect(e, f, getRandomInt(0, 1), getRandomInt(0, 1));
      }
    }

    if (winWidth > 400) {
      const main = document.getElementById("main");
      main.style.top = `${winHeight / 2 - 200}px`;
      main.style.opacity = "1";
    }
  }

  window.addEventListener("resize", function () {
    createNoise();
  });

  window.onload = function () {
    createNoise();
  };
})(window, document);
