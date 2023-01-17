const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";
const backgroundLayerImage1 = new Image();
backgroundLayerImage1.src = "assets/backgroundLayers/layer-1.png";
const backgroundLayerImage2 = new Image();
backgroundLayerImage2.src = "assets/backgroundLayers/layer-2.png";
const backgroundLayerImage3 = new Image();
backgroundLayerImage3.src = "assets/backgroundLayers/layer-3.png";
const backgroundLayerImage4 = new Image();
backgroundLayerImage4.src = "assets/backgroundLayers/layer-4.png";
const backgroundLayerImage5 = new Image();
backgroundLayerImage5.src = "assets/backgroundLayers/layer-5.png";

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 720;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = this.speedModifier * gameSpeed;
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    );
  }
  update() {
    this.x -= this.speed;
    this.x %= this.width;
  }
}
let gameSpeed = 1;
const backgroundLayers = [
  new Layer(backgroundLayerImage1, 1),
  new Layer(backgroundLayerImage2, 2),
  new Layer(backgroundLayerImage3, 3),
  new Layer(backgroundLayerImage4, 4),
  new Layer(backgroundLayerImage5, 5),
];

const drawImage = () => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  backgroundLayers.forEach((layer) => {
    layer.draw();
    layer.update();
  });
};

const animate = () => {
  drawImage();
  requestAnimationFrame(animate);
};
animate();
