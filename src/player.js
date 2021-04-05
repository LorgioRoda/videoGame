class Player {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.playerSprite = null;
        this.width = 32;
        this.height = 48;
        this.frameX = 0;
        this.frameY = 0;
        this.positionX = 450;
        this.positionY = 200
        this.keys = [];
        this.speed = 6;
        this.moving = false;
        this.sprite = '/img/sprite-player/mandalorian2.png'
    }


drawSprite(img, sX, sY, sW,sH, dX, dY, dW, dH){
    this.ctx.fillStyle = '#111111'
    this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    /* this.ctx.drawImage(this.playerSprite,this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height,this.player.x,this.player.y, this.player.width, this.player.height) */
}

confirmedMove(){
    document.body.addEventListener('keydown', (e) =>  {
        this.keys[e.keyCode] = true;
        this.moving = true;
        //console.log(this.keys)
    })
    
    document.body.addEventListener('keyup', (e) => {
        this.keys[e.keyCode] = false;
        this.moving = false;
        //console.log(this.keys)
    })
}

movePlayer(){
    this.confirmedMove()
    console.log(this.keys, this.positionX, this.positionY)
    if(this.keys[38] && this.positionY > 120){
        this.positionY -= this.speed;
        this.frameY = 3
        console.log(this.keys)
    }
    if(this.keys[37] && this.positionX > 0){
        this.positionX -= this.speed
        this.frameY = 1
        console.log(this.keys)
    }
    if(this.keys[40] && this.positionY < 350 - this.height){
        this.positionY += this.speed;
        this.frameY = 0;
        console.log(this.keys)
    }
    if(this.keys[39] && this.positionX < 750){
        this.positionX += this.speed;
        this.frameY = 2;
        console.log(this.keys)
    }
} 
   
handlePlayerFrame(){
    if (this.frameX < 3 && this.moving) {
        this.frameX++;
    }
    else if (this.frameX = 0){
    }
}

}

/* handleMovement(){

}

handleScreenCollision(){
    const screenTop = 0;
    const screenBottom = this.canvas.height

    const playerTop = this.y
    const playerBottom = this.y + this.size

    if(playerBottom >= screenBottom) this.setDirection()
}

//removelife 
loadBar(){

}

draw(){

}

} */



//520--- 380


