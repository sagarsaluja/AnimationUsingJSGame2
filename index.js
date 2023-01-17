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
let gameSpeed = 1;
let gameFrame = 0;
const backgroundLayers = [
  backgroundLayer1,
  backgroundLayer2,
  backgroundLayer3,
  backgroundLayer4,
  backgroundLayer5,
];
const currentPositions = [0, 0, 0, 0, 0];
const currentPositionSecondary = [2400, 2400, 2400, 2400, 2400];
const speedModifiers = [5, 1, 1, 2, 1];

const drawImage = () => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundLayers.forEach((x, index) => {
    context.drawImage(x, currentPositions[index], 0);
    context.drawImage(x, currentPositionSecondary[index], 0);

    if (currentPositions[index] < -2400) {
      currentPositions[index] = 0;
      currentPositionSecondary[index] = currentPositions[index] + 2400;
    } else {
      currentPositions[index] = gameFrame * (gameSpeed * speedModifiers[index]);
      currentPositions[index] %= 2400;
      currentPositionSecondary[index] = currentPositions[index] + 2400;
    }
  });
  gameFrame--;
};

const animate = () => {
  drawImage();
  requestAnimationFrame(animate);
};
animate();
