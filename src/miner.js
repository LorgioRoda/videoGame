class Miner {
    constructor(canvas, positionX, speed, MinerImgSrc){
            this.canvas = canvas;
            this.ctx = this.canvas.getContext('2d');
            this.width = 20;
            this.height = 48;
            this.size = this.width + this.height
            this.positionX = positionX
            this.positionY = this.canvas.height;
            this.speed = speed;
            //sprite
            this.frameX = 0;
            this.frame = 4;
            this.image = new Image();
            this.image.src = MinerImgSrc;
    }

    draw(frameCounter){
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
                this.animate(frameCounter)
    }

    animate(frameCounter) {
        if (frameCounter % 10 === 0) {
          this.frameX++;
          console.log(this.frameX)
          if(this.frameX > 3) this.frameX = 0;
        }
      }

    updatePosition(){
        this.positionY -= this.speed
    }

    isInsideScreen() {
        const minersTop = this.positionY + this.size;
        const screenBottom = 390;
        const minersInside = minersTop > screenBottom;
        return minersInside;
        //return this.x + this.size > 0;
      }

    minerDidCollide(enemy){
        //aqui se puede cambiar el tamanho para el size -5, hitbox
        const minerLeft = this.positionX
        const minerRight = this.positionX + this.size
        const minerTop = this.positionY
        const minerBottom = this.positionY + this.size
        //enemy size
        const enemyLeft = enemy.positionX
        const enemyRight = enemy.positionX + enemy.size
        const enemyTop = enemy.positionY
        const enemyBottom = enemy.positionY + enemy.size
        //check collision right and left
        const crossLeft = enemyLeft <= minerRight && enemyLeft >= minerLeft
        const crossRight = enemyRight >= minerLeft && enemyRight <= minerRight
        //check collision top and bottom
        const crossBottom = enemyBottom >= minerTop && enemyBottom <= minerBottom
        const crossTop = enemyTop <= minerBottom && enemyTop >= minerTop
        //check collision
        if((crossLeft || crossRight) && (crossTop || crossBottom)){
            return true;
        }else {
            return false
        }
    }

}