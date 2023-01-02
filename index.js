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

// const frameWidth = 575;
// const frameHeight = 523;
let currentFrameX = 0;
// let currentFrameY = 0;
let gameSpeed = 5;

// let gameSpeed = 5;
// let gameFrame = 0;
// const staggerFrame = 5;

// const animationLogic = (animationState) => {
//   currentFrameY = animationState.index;
//   if (gameFrame % staggerFrame === 0) {
//     if (currentFrameX < animationState.maxFrame) currentFrameX++;
//     else currentFrameX = 0;
//   }
//   gameFrame++;
// };
const drawImage = () => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  context.drawImage(backgroundLayer4, currentFrameX, 0);
  if (currentFrameX < -2400)
    currentFrameX = 0; // match with the image size = 2400 px
  else {
    currentFrameX -= gameSpeed;
  }
};

const animate = () => {
  // animationLogic(animationStates[currentPlayerState]);
  drawImage();
  requestAnimationFrame(animate);
};
animate();
