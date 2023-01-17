const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
const backgroundLayer1 = new Image();
backgroundLayer1.src = "assets/backgroundLayers/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "assets/backgroundLayers/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "assets/backgroundLayers/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "assets/backgroundLayers/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "assets/backgroundLayers/layer-5.png";

let currentFrameX = 0;
let currentFrameX2 = 2400;
let gameSpeed = 5;

const drawImage = () => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.drawImage(backgroundLayer4, currentFrameX, 0);
  context.drawImage(backgroundLayer4, currentFrameX2, 0);

  if (currentFrameX < -2400) {
    currentFrameX = 0;
  } else {
    currentFrameX -= gameSpeed;
    currentFrameX2 = currentFrameX + 2400;
  }
};

const animate = () => {
  drawImage();
  requestAnimationFrame(animate);
};
animate();
