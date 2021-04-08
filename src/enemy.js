class Enemy {
  constructor(canvas, positionY, speed, enemyImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 20;
    this.height = 48;
    this.size = this.width + this.height;
    this.positionX = this.canvas.width;
    this.positionY = positionY;
    this.speed = speed;
    this.frameX = 0;
    this.frame = 4;
    this.image = new Image();
    this.image.src = enemyImgSrc;
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.frameX * Math.floor(this.image.width / this.frame),
      0, 
      Math.floor(this.image.width / this.frame),
      this.image.height,
      this.positionX,
      this.positionY,
      this.width,
      this.height
      );
      this.animate(framesCounter)
  }

  animate(framesCounter){
    if (framesCounter % 10 === 0){
      this.frameX++
      if(this.frameX > 3) this.frameX = 0;
    }
  }

  updatePosition() {
    this.positionX -= this.speed;
  }

  isInsideScreen() {
    const enemyRight = this.positionX + this.size;
    const screenLeft = 0;
    const isInside = enemyRight > screenLeft;
    return isInside;
  }
}
