class Enemy {
    constructor(canvas, positionY, speed){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        /* this.width = 32;
        this.height = 48; */
        //comentarlo
        this.size = 20
        this.positionX = this.canvas.width
        this.positionY = positionY;
        this.speed = speed;
    }

    draw(){
        this.ctx.fillStyle = '#00ff00';
        this.ctx.fillRect(this.positionX, this.positionY, this.size, this.size);
    }

    updatePosition(){
        this.positionX -= this.speed
    }

    //comprobate enemies out
    isInsideScreen(){
        const enemyRight = this.positionX + this.size;
        const screenLeft = 0;
        const isInside = enemyRight > screenLeft;
        return isInside;
    }

}