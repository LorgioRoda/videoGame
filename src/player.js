class Player {
  constructor(canvas, playerImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 20;
    this.height = 50;
    this.positionX = 50;
    this.positionY = this.canvas.height / 2;
    this.size = 40;
    this.keys = [];
    this.speed = 1.3;
    this.moving = false;
    //spites
    this.image = new Image();
    this.image.src = playerImgSrc;
    this.frameX = 0;
    this.frameY = 0;
  }

  drawSprite(frameCounter) {
    this.ctx.drawImage(
      this.image,
      (this.image.width / 4) * this.frameX,
      (this.image.height / 4) * this.frameY,
      this.image.width / 4,
      this.image.height / 4,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
    this.handlePlayerFrame(frameCounter);
  }

  handlePlayerFrame(frameCounter) {
    if (frameCounter % 10 === 0 && this.moving) {
      this.frameX++;
      if (this.frameX > 3) this.frameX = 0;
    }
  }

  confirmedMove() {
    document.body.addEventListener("keydown", (e) => {
      this.keys[e.keyCode] = true;
      this.moving = true;
    });

    document.body.addEventListener("keyup", (e) => {
      this.keys[e.keyCode] = false;
      this.moving = false;
    });
  }

  movePlayer() {
    this.confirmedMove();
    if (this.keys[38] && this.positionY > 300) {
      this.positionY -= this.speed;
      this.frameY = 3;
      this.moving = true;
    }
    if (this.keys[37] && this.positionX > 0) {
      this.positionX -= this.speed;
      this.frameY = 1;
    }
    if (this.keys[40] && this.positionY < 700 - this.height) {
      this.positionY += this.speed;
      this.frameY = 0;
    }
    if (this.keys[39] && this.positionX < 1250) {
      this.positionX += this.speed;
      this.frameY = 2;
    }
  }

  didCollide(enemy) {
    const playerLeft = this.positionX;
    const playerRight = this.positionX + this.size;
    const playerTop = this.positionY;
    const playerBottom = this.positionY + this.size;
    //enemy size
    const enemyLeft = enemy.positionX;
    const enemyRight = enemy.positionX + enemy.size;
    const enemyTop = enemy.positionY;
    const enemyBottom = enemy.positionY + enemy.size;
    //check collision right and left
    const crossLeft = enemyLeft <= playerRight && enemyLeft >= playerLeft;
    const crossRight = enemyRight >= playerLeft && enemyRight <= playerRight;
    //check collision top and bottom
    const crossBottom = enemyBottom >= playerTop && enemyBottom <= playerBottom;
    const crossTop = enemyTop <= playerBottom && enemyTop >= playerTop;
    //check collision
    if ((crossLeft || crossRight) && (crossTop || crossBottom)) {
      return true;
    } else {
      return false;
    }
  }
}
