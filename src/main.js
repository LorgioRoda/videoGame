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
            <div class ='main__menu'>
                <div class="menu">
                    <img class="timer" src="img/UI/menu/7.png" alt="">  
                    <img class="timer" src="img/UI/menu/skull.png" alt="">        
                </div>
                <div class="main__menu--conteiner" >
                    <h1></h1>
                    <img src="img/UI/menu/logo.png" alt="">
                    <img class="game__intro" src="img//UI//menu/button_play.png" alt="">
                </div>
            </div>
    </main>
    `);

    document.body.appendChild(splashScreem)
    //start video game
    const startButtom = splashScreem.querySelector('.game__intro')
    startButtom.addEventListener('click', startGame)
}



//Game Screen
createGameScreen = () => {
    gameScreen = buildDom(`
    <main>
        <header>
             <nav>
            <div class="menu"> 
                <img src="img/UI/menu/7.png" alt=""> 
                <span class="timer">0</span>
                <img class="lost" src="img/UI/menu/skull.png" alt=""> 
                <span class="value">0</span>
            </div>
            </nav>    
        </header>
        <canvas id="canvas1"> </canvas>
        </div>
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


//Game Win

createGameVictory = () => {
    gameVictory = buildDom(`
    <main>
        <header>
            <button class="sound__on"></button>
            <button class="sound__off"></button>
        <div class="lives">
            <span class="label">Lives:</span>
            <span class="value"></span>
        </div>
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
    removeSplashScreen()
    createGameScreen();
    
    //New class
    game = new Game(gameScreen);
    console.log(game)
    //game.gameScreen = gameScreen;
    game.start();
  }

  removeGameScreen = () =>{
    gameScreen.remove()
  }
  
endGame = () => {
    removeGameScreen();
    createGameOverScreen(gameOverScreen);
  }

window.addEventListener('load', createSplashScreen)
