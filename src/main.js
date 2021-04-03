let game;
let splashScreem;
let gameScreen;
let gameOverScreen;
let gameVictory;


//Creates DOM elements from a string representation
buildDom = (htmlString) => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = htmlString;

    return tempDiv.children[0];
}

//Create first interfance
//Splash screen
function createSplashScreen(){
    splashScreem = buildDom(`
    <main>
        <button class="sound__on">sound on</button>
        <button class="sound__off">sound off</button>
            <h1>Title</h1>
            <button class="game__intro">Start</button>
    </main>
    `);

    document.body.appendChild(splashScreem)
    //start video game
    const startButtom = splashScreem.querySelector('.game__intro')
    startButtom.addEventListener('click', startGame)
}

//Create a function for remove SplashScreen 
removeSplashScreen = () =>{
    // remove() is the DOM method that removes the Node from the page
    splashScreem.remove()
} 

//Game Screen
createGameScreen = () => {
    gameScreen = buildDom(`
    <main>
        <header>
            <nav>
                <button class="sound__on"></button>
                <button class="sound__off"></button>
                <img src="" alt="bar_mines">
                <div class="lives">
                <span class="value"></span>
            </div>
            </nav>    
        </header>

        <div class="canvas-container">
            <canvas></canvas>
        </div>
    </main>
    `)
document.body.appendChild(gameScreen);
return gameScreen; 
}
  
removeSplashScreen = () =>{
    splashScreem.remove()
} 

//Game Over

createGameOverScreen = () => {
    gameOverScreen = buildDom(`
    <main>
        <header>
            <button class="sound__on"></button>
            <button class="sound__off"></button>
        </header>
        <div>
        <img class="title__failed" src="" alt="">
        <img class="image__failed" src="" alt="">
        </div>
    </main>
    `)
    document.body.appendChild(gameOverScreen);
    return gameOverScreen;
}

removeSplashScreen = () =>{
    splashScreem.remove()
} 

//Game Win

createGameVictory = () => {
    gameVictory = buildDom(`
    <main>
        <header>
            <button class="sound__on"></button>
            <button class="sound__off"></button>
        </header>
        <div>
            <img class="title__victory" src="" alt="">
            <img class="image__victory" src="" alt="">
        </div>
    </main>
    `)
    document.body.appendChild(gameVictory)
    return gameVictory;
}
removeSplashScreen = () =>{
    splashScreem.remove()
} 

// -- Setting the game state - start or game over
//
startGame = () => {
    removeSplashScreen();
    if(gameOverScreen){
        removeGameOverScreen();
    }else if (gameVictory){
        removeSplashScreen()
    }
    createGameScreen();
    
    //New class
    game = new Game(gameScreen);
    //game.gameScreen = gameScreen;
    //function game
    game.start();
  }
  
endGame = () => {
    removeGameScreen();
    createGameOverScreen(gameOverScreen);
  }

window.addEventListener('load', createSplashScreen)
