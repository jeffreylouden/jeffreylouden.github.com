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

    canvas.height = winHeight / 2;
    canvas.width = winWidth / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.style.height = canvas.height + "px";
    canvas.style.width = canvas.width + "px";

    context.scale(2, 2);

    let color = "rgba(" + getRandomInt(0, 254) + "," + getRandomInt(0, 254) + "," + getRandomInt(0, 254) + "," + 1 + ")";

    for (let e = 0, len = winHeight; e < len; e++) {
      for (let f = 0, len = winWidth; f < len; f++) {
        let randomColor = getRandomInt(0, 1);

        // Skip setting color since it would be white anyway
        if (!randomColor) continue;

        context.fillStyle = color;
        context.fillRect(e, f, getRandomInt(0, 2), getRandomInt(0, 2));
      }
    }

    const lines = document.getElementById("lines");
    const main = document.getElementById("main");
    lines.style.width = canvas.width + "px";
    lines.style.height = canvas.height + "px";
    main.style.opacity = "1";
  }

  window.addEventListener("resize", function () {
    createNoise();
  });

  window.onload = function () {
    createNoise();
  };
})(window, document);
