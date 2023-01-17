const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let GAME_SPEED = 1;

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

const slider = document.getElementById("sliderInput");
slider.value = GAME_SPEED;
slider.addEventListener("change", (e) => {
  GAME_SPEED = e.target.value;
});
class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = image.width;
    this.height = image.height;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = this.speedModifier * GAME_SPEED;
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
    this.speed = GAME_SPEED * this.speedModifier;
    this.x -= this.speed;
    this.x %= this.width;
  }
}
const layer1 = new Layer(backgroundLayerImage1, 1);
const layer2 = new Layer(backgroundLayerImage2, 2);
const layer3 = new Layer(backgroundLayerImage3, 3);
const layer4 = new Layer(backgroundLayerImage4, 4);
const layer5 = new Layer(backgroundLayerImage5, 5);

const backgroundLayers = [layer1, layer2, layer3, layer4, layer5];

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
