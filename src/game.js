class Game {
    constructor(gameScren){
        this.canvas = null;
        this.ctx = null;
        this.enemies = [];
        this.miners = [];
        this.player = null;
        this.gameIsOver = false;
        this.gameScreen = gameScren;
        this.gameIsWin = false;
        this.bar = undefined
    }

    // Create ctx, a player and start the Canvas loop

    start() {
        //Save references to the bar elements
        this.bar = this.gameScreen.querySelector('.lives .value')

        //Get and create the canbas and it's context
        this.canvas = this.gameScreen.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')

        // Set the canvas dimensions
        this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
        this.containerWidth = this.canvasContainer.clientWidth;
        this.containerHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", this.containerWidth);
        this.canvas.setAttribute("height", this.containerHeight);

        //Create player, canvas and lives for miners
        this.player = new Player(this.canvas, 10);

        //Arrow function.

        document.body.addEventListener("keydown", (event) => {
            if (event.key === "ArrowUp") this.player.setDirection("up");
            else if (event.key === "ArrowDown") this.player.setDirection("down");
          });

        this.startLoop();
    }

    startLoop() {
        //update status from players and enemies
        const loop = () => {
            if(thids.enemies.length < 10){
                if (Math.random() > 0.95){
                const randomY = Math.floor((this.canvas.height - 20) * Math.random());
                const newEnemy = new Enemy(this.canvas, randomY, 5);
                this.enemies.push(newEnemy); 
                }
            }
        }
     }