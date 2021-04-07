class Player {
  constructor(canvas, playerImgSrc) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.playerSprite = null;
    this.width = 32;
    this.height = 48;
    this.positionX = 50;
    this.positionY = this.canvas.height / 2;
    //comentarlo
    this.size = this.width + this.height;
    this.keys = [];
    this.speed = 6;
    this.moving = false;
    //spites
    this.image = new Image();
    this.image.src = playerImgSrc;
    this.frameX = 0;
    this.frameY = 0;
  }

  drawSprite() {
    this.ctx.drawImage(
      this.image,
      this.image.width * this.frameX,
      this.image.height * this.frameY, 
      this.width,
      this.height,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
  }



  handlePlayerFrame() {
    if (this.frameX < 3 && this.moving) {
      this.frameX++;
    } else if ((this.frameX = 0)) {
    }
  }

  /* animate(framesCounter){

} */

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
    if (this.keys[38] && this.positionY > 260) {
      this.positionY -= this.speed;
      //this.frameY = 3;
    }
    if (this.keys[37] && this.positionX > 0) {
      this.positionX -= this.speed;
      //this.frameY = 1;
    }
    if (this.keys[40] && this.positionY < 620 - this.height) {
      this.positionY += this.speed;
      //this.frameY = 0;
    }
    if (this.keys[39] && this.positionX < 1250) {
      this.positionX += this.speed;
      //this.frameY = 2;
    }
  }

  didCollide(enemy) {
    //aqui se puede cambiar el tamanho para el size -5, hitbox
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

//520--- 380
