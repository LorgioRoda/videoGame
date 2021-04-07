class Game {
    constructor(gameScreen){
        this.canvas = null;
        this.ctx = null;
        this.enemies = [];
        this.miners = [];
        this.player = null;
        this.live = 10;
        this.gameIsOver = false;
        this.gameScreen = gameScreen;
        this.gameIsWin = false;
        this.timer = new Timer;

    }

    // Create ctx, a player and start the Canvas loop
    start() {
        //Save references to the bar elements
        //this.timer = this.gameScreen.querySelector('.lives .value')
        this.livesElement = this.gameScreen.querySelector(".lives .value");
        this.scoreElement = this.gameScreen.querySelector(".score .value");
        //Get and create the canbas and it's context
        this.canvas = this.gameScreen.querySelector('#canvas1')
        this.ctx = this.canvas.getContext('2d')

        // Set the canvas dimensions
        this.canvasContainer = this.gameScreen.querySelector("#canvas1");
        this.containerWidth = this.canvasContainer.clientWidth;
        this.containerHeight = this.canvasContainer.clientHeight;
        this.canvas.setAttribute("width", this.containerWidth);
		this.canvas.setAttribute("height", this.containerHeight);
        
        //player 
        this.player = new Player(this.canvas)
    
        
        //enemies
        //this.enemies = new Enemies()
        //this.enemies = new Image()


        this.startLoop();
    }

    

    

    

    startLoop() {
        const loop = () => {
                
                //dificultad
                const level1 = 0.95
                const level2 = 0.90
                const level3 = 0.80
                    if (Math.random() > 0.95) {
                        const randomY =  180 + Math.floor(Math.random()* 270);
                        const newEnemy = new Enemy(this.canvas, randomY, 2);
                        this.enemies.push(newEnemy);
                    }
                
                //checkCollisions
                this.checkCollisions()
                this.CheckCollisionsMiner()
                
                this.enemies.forEach(enemy =>{
                    if(enemy.isInsideScreen){}
                })
                
                //update position
                this.enemies = this.enemies.filter((enemy) => {
                    enemy.updatePosition();
                    return enemy.isInsideScreen();
                  });
                
                //renovar canvas
                this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
                
                //player draw
                this.player.drawSprite();
                //draw enemies
                this.enemies.forEach((enemy) => {
                    enemy.draw();
                })

                
                
                //method player
                this.player.handlePlayerFrame() 
                this.player.movePlayer()
                this.player.confirmedMove()
                
                //miners
                if (this.miners.length < 5){
                    if (Math.random() > 0.95){
                        const randomX = Math.floor((this.canvas.height - 400) * Math.random());;
                        //create Miner
                        const newMiners = new Miner(this.canvas,randomX, 1);
                        this.miners.push(newMiners);
                    }
                }

                this.miners.forEach((miner) => {
                    miner.draw()
                })

                this.miners = this.miners.filter((miner) => {
                    miner.updatePosition();
                    return miner.isInsideScreen();
                  });
                
                //timer

                //leave game
                if (!this.gameIsOver){
                    window.requestAnimationFrame(loop)
                }
                
        };
          
        loop()
        
     }

     checkCollisions(){
        this.enemies.forEach((enemy) => {
            if(this.player.didCollide(enemy)){
                //delete enemy
                enemy.positionX = 0 - enemy.size
                
                //if (this.player.live === 0)
            }
        })
     }

     CheckCollisionsMiner(){
         this.enemies.forEach((enemy) => {
            this.miners.forEach((miner) =>{ 
                if(miner.minerDidCollide(enemy)){
                    miner.removeLife();
                    //delete enemy
                    miner.positionX = 0 - miner.size; 
                    this.live--
                    //console.log(this.live)
                     
                }
                
            })
            
         })
     } 
     
    
    
    
    
    
    
    
}