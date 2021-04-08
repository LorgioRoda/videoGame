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
    this.frameY = 0;
    this.minFrame = 0;
    this.maxFrame = 4;
    this.image = new Image();
    this.image.src = enemyImgSrc;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.image.width / 4 * this.frameX,
      0, 
      this.image.width / 4,
      this.image.height,
      this.positionX,
      this.positionY,
      this.width,
      this.height
      );
  }

  updatePosition() {
    this.positionX -= this.speed;
    //console.log(this.frameX)
    //console.log(this.frameY) 
    if (this.frameX < this.maxFrame) this.frameX++;
    else this.frameX = this.minFrame; 
  }

  //comprobate enemies out
  isInsideScreen() {
    const enemyRight = this.positionX + this.size;
    const screenLeft = 0;
    const isInside = enemyRight > screenLeft;
    return isInside;
  }
}
