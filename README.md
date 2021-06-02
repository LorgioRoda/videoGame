# Fantasy Game

------------


### Description
This is my first project in IronHack, a video game made with Vanilla JS, Canvas, HTML and CSS.
It's a fantasy game based on collisions, using classes, objects and DOM manipulation.

------------
![Alt Text](https://media.giphy.com/media/cwOfRXEcGKROjEbBcY/giphy.gif)

------------


### Data structure
####  Class Game


```javascript
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
```
####  Class Miner
```javascript
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 20;
    this.height = 48;
    this.size = this.width + this.height;
    this.positionX = positionX;
    this.positionY = this.canvas.height;
    this.speed = speed;
    this.frameX = 0;
    this.frame = 4;
    this.image = new Image();
    this.image.src = MinerImgSrc;
```
### Class Player
```javascript
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 70;
    this.height = 150;
    this.positionX = 50;
    this.positionY = this.canvas.height / 2;
    this.size = 40;
    this.keys = [];
    this.speed = 1.3;
    this.moving = false;
    this.image = new Image();
    this.image.src = playerImgSrc;
    this.frameX = 0;
    this.frameY = 0;
```
### Class Enemy
```javascript
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 60;
    this.height = 120;
    this.size = this.width + this.height;
    this.positionX = this.canvas.width;
    this.positionY = positionY;
    this.speed = speed;
    this.frameX = 0;
    this.frame = 4;
    this.image = new Image();
    this.image.src = enemyImgSrc;
```
### Class Timer
```javascript
    this.currentTime = 150;
    this.intervalId = 0;
```
### States y States Transitions
Definition of the different states and their transition (transition functions)

    splashScreen()
    gameScreen()
------------


### Link

#### Git
URls for the project repo and deploy [GitHub](https://lorgioroda.github.io/videoGame/ "GitHub")

