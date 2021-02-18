let $game = document.querySelector('#game');
let $start = document.querySelector('#start');
let $handelTime = document.querySelector('#time-header')
let $handleScore = document.querySelector('#result-header')
let $time = document.querySelector('#time')
let $gameTime = document.querySelector('#game-time')
let $result = document.querySelector('#result')

let score = 0
let isGameStarted = false

$start.addEventListener('click', gameStart)
document.addEventListener('click', handleBoxClick)
$gameTime.addEventListener('input', setGameTime)

function gameStart() {
    score = 0
    isGameStarted = true
    setGameTime()
    $handelTime.classList.remove('hide')
    $handleScore.classList.add('hide')
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    $gameTime.setAttribute('disabled', 'true')
    
    let interval = setInterval(function() {
        let time = parseFloat($time.textContent)
        
        if (time <= 0) {
            clearInterval(interval)
            gameStop()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)

    renderBox()
}

function gameStop() {
    isGameStarted = false
    $game.innerHTML = ''
    $game.style.backgroundColor = '#ccc'
    $start.classList.remove('hide')
    $handelTime.classList.add('hide')
    $handleScore.classList.remove('hide')
    $gameTime.removeAttribute('disabled')
    setGameScore()
}

function setGameScore() {
    $result.textContent = score.toString()
}

function setGameTime() {
    $handelTime.classList.remove('hide')
    $handleScore.classList.add('hide')
    let time = +$gameTime.value
    $time.textContent = time + '.0'
}


function handleBoxClick(e) {
    if (e.target.dataset.box) {
        score++
        renderBox()
    }
}

function renderBox() {
    $game.innerHTML = ''
    let box = document.createElement('div')
    let gameBoxSize = $game.getBoundingClientRect()
    let randomSize = randomNumber(30, 100)
    let maxTop = gameBoxSize.height - randomSize
    let maxLeft = gameBoxSize.width - randomSize
    
    box.style.width = randomSize + 'px'
    box.style.height = randomSize + 'px'
    box.style.backgroundColor = '#000'
    box.style.position = 'absolute'
    box.style.top = randomNumber(0, maxTop) + 'px'
    box.style.left = randomNumber(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};