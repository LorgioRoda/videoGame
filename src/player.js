class Player {
    constructor(canvas, lives){
        this.canvas = canvas;
        this.ctx = this.getContext('2d')
        this.live = lives
        //height and weight
        this.size = 100;
        this.x = 400;
        //Position player in mid
        this.y = canvas.height / 2  -  this.size / 2

        this.direction = 0
    }
}