class Miner {
    constructor(canvas, positionX, speed, lives){
            this.canvas = canvas;
            this.ctx = this.canvas.getContext('2d');
            this.size = 20
            this.positionX = positionX
            this.positionY = this.canvas.height;
            this.speed = speed;
        
    }

    draw(){
        this.ctx.fillStyle = "#Ff0000";
        this.ctx.fillRect(this.positionX, this.positionY, this.size, this.size);
    }


    updatePosition(){
        this.positionY -= this.speed
    }

    isInsideScreen() {
        const minersTop = this.positionY + this.size;
        const screenBottom = 120;
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