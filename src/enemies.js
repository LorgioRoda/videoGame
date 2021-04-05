class Enemies {
    constructor(canvas)
    {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.enemiesSprite= new Image()
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.speed = 6;
        this.sprite = '/img/sprite-enemies/stormtrooper.png'
    }

    drawSprite(img, sX, sY, sW,sH, dX, dY, dW, dH){
        this.ctx.fillStyle = '#f1f1f1'
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }

    updatePosition(){
        this.positionX -= this.speed
    }

    //comprobate enemies out
    isInsideScreen(){
        const enemiesRight = this.positionX + this.width
        const screenLeft = 0
        const  inInside = enemiesRight > screenLeft
        return isInside
    }

}