import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from "./snake.js"
import { update as updateFood, draw as drawFood} from "./food.js"
import { outsideGrid } from "./grid.js"




let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById("game-board")

function main(currentTime){

    if (gameOver){
        if(confirm('You lost. Press ok to restart.')){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondSinceLastRender < 1 / SNAKE_SPEED) return

    lastRenderTime = currentTime
    
    update()
    draw()
}


window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

// Mudança de dificuldade

let easyButton = document.getElementById('easy')
let hardButton = document.getElementById('hard')
let impossibleButton = document.getElementById('impossible')
let buttons = document.getElementsByClassName('changeDifficulty')

easyButton.addEventListener('click', changeToEasy())
hardButton.addEventListener('click', changeToHard())
impossibleButton.addEventListener('click', changeToImpossible())

function changeToEasy(){
    buttons.forEach(element => {
        element.style.backgroundColor = 'gray'
        element.style.transform.scale = 1.0;
    });
}




