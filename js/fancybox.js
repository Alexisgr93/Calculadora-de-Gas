Fancybox.bind('[data-fancybox]', {
    // sin el Toolbar se ve nada mas el zoom, close y el fullscreen
    Toolbar: {
      display: {
        left: ["infobar"],
        middle: [
          "zoomIn",
          "zoomOut",
          "toggle1to1",
          "rotateCCW",
          "rotateCW",
          "fullscreen",
        ],
        right: ["slideshow", "thumbs", "close"],
      },
    },
  }); 