class Game {
    constructor(gameScreen){
        this.canvas = null;
        this.ctx = null;
        this.enemies = [];
        this.miners = [];
        this.player = null;
        this.gameIsOver = false;
        this.gameScreen = gameScreen;
        this.background = new Image()
        this.gameIsWin = false;
        this.timer = undefined
    }

    // Create ctx, a player and start the Canvas loop
    start() {
        //Save references to the bar elements
        this.timer = this.gameScreen.querySelector('.lives .value')

        //Get and create the canbas and it's context
        this.canvas = this.gameScreen.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')

        // Set the canvas dimensions
        this.canvasContainer = this.gameScreen.querySelector(".canvas-container");
        this.containerWidth = this.canvasContainer.clientWidth;
        this.containerHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", 800);
		this.canvas.setAttribute("height", 400);
        //background
        //this.background.src = '/img/background/game_background_1.png'
        //player 
        this.player = new Player(this.canvas)
        
        //enemies
        //this.enemies = new Enemies()
        //this.enemies = new Image()


        this.startLoop();
    }

    

    

    

    startLoop() {
        //update status from players and enemies
        const loop = () => {
                this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
                //Background
                //this.ctx.drawImage(this.background,0,0,this.canvas.width,this.canvas.height)
                //Player
                this.player.drawSprite(this.playerSprite,this.player.width * this.player.frameX, this.player.height * this.player.frameY, this.player.width, this.player.height,this.player.x,this.player.y, this.player.width, this.player.height);
                this.player.handlePlayerFrame() 
                this.player.movePlayer()
                this.player.confirmedMove()
                window.requestAnimationFrame(loop)
        }
        loop()
        
     }
    
    
    
    
    
    
    
    
    }