class Game {
  constructor(gameScreen) {
    this.canvas = null;
    this.ctx = null;
    this.enemies = [];
    this.miners = [];
    this.player = null;
    this.gameIsOver = false;
    this.gameScreen = gameScreen;
    this.gameIsWin = false;
    this.timer = new Timer();
    this.lives = 30;
    this.time = this.timer.currentTime;
    this.framesCounter = 0;
  }

  // Create ctx, a player and start the Canvas loop
  start() {
    //Save references to the bar elements
    //this.timer = this.gameScreen.querySelector('.lives .value')
    this.livesElement = this.gameScreen.querySelector(".menu .value");
    this.timerElement = this.gameScreen.querySelector(".menu .timer");
    //Get and create the canvas and it's context
    this.canvas = this.gameScreen.querySelector("#canvas1");
    this.ctx = this.canvas.getContext("2d");

    // Set the canvas dimensions
    this.canvasContainer = this.gameScreen.querySelector("#canvas1");
    this.containerWidth = this.canvasContainer.clientWidth;
    this.containerHeight = this.canvasContainer.clientHeight;
    this.canvas.setAttribute("width", 400);
    this.canvas.setAttribute("height", 800);

    //player
    this.player = new Player(
      this.canvas,
      "images/sprite-player/mandalorian.png"
    );

    this.timer.startClick();

    this.startLoop();
  }

  startLoop() {
    const loop = () => {
      //Timer
      if (this.timer.currentTime <= 0) {
        this.timer.stop();
        this.gameOver();
      } else if  (this.timer.currentTime == 0){
        this.gameVictory()
      } 

      //dificultad
      const level1 = 0.98;
      const level2 = 0.9;
      const level3 = 0.8;
      
      if (Math.random() > level1) {
        const randomY = 350 + Math.floor(Math.random() * 290);
        const newEnemy = new Enemy(
          this.canvas,
          randomY,
          0.8,
          "images/enemy/enemy.png"
        );
        this.enemies.push(newEnemy);
      }
      //Frames Counter
      this.framesCounter++;

      //checkCollisions
      this.checkCollisions();
      this.CheckCollisionsMiner();

      //update position
      this.enemies = this.enemies.filter((enemy) => {
        enemy.updatePosition();
        return enemy.isInsideScreen();
      });

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //player draw
      this.player.drawSprite(this.framesCounter);

      //draw enemies
      this.enemies.forEach((enemy) => {
        enemy.draw(this.framesCounter);
      });

      //method player
      this.player.movePlayer();
      this.player.confirmedMove();

      //miners
      if (this.miners.length < 5) {
        if (Math.random() > 0.95) {
          const randomX = 0 + Math.floor(Math.random() * 80);
          //create Miner
          const newMiners = new Miner(
            this.canvas,
            randomX,
            3,
            "images/miner/ally.png"
          );
          this.miners.push(newMiners);
        }
      }

      this.miners.forEach((miner) => {
        miner.draw();
      });

      this.miners = this.miners.filter((miner) => {
        miner.updatePosition();
        return miner.isInsideScreen();
      });

      this.updateGameStats();

      //leave game
      if (!this.gameIsOver) {
        window.requestAnimationFrame(loop);
      }
    };

    loop();
  }

  checkCollisions() {
    this.enemies.forEach((enemy) => {
      if (this.player.didCollide(enemy)) {
        //delete enemy
        enemy.positionX = 0 - enemy.size;
      }
    });
  }

  CheckCollisionsMiner() {
    this.enemies.forEach((enemy) => {
      this.miners.forEach((miner, index) => {
        if (miner.minerDidCollide(enemy)) {
          //delete Miner
          this.miners.splice(index, 1);
          this.lostMiner();
          if (this.lives === 0) {
            console.log('holaaaaaaaaaaaaa')
            this.lives = 0
            endGame();
        }
        }
        
      });
    });
  }

  updateGameStats() {
    this.livesElement.innerText = this.lives;
    this.timerElement.innerText = this.timer.getStringTimer();
  }

  gameOver() {
    this.gameIsOver = true;
    endGame();
  }

  lostMiner() {
    this.lives -= 1;
  }
  gameVictory(){
    this.gameIsWin = true;
    victoryGame();  
  }
}
