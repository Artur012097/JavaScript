// let DOM elemnts
let $game = document.querySelector('#game')
let $start = document.querySelector('#start')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $time = document.querySelector('#time')
let $gameTimeShow = document.querySelector('#game-time')
let score = 0
let isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click', boxRenderClick)
$gameTimeShow.addEventListener('input', setTime)

function startGame() {
    isGameStarted = true
    score = 0
    hide($start)
    hide($resultHeader)
    show($timeHeader)
    $game.style.backgroundColor = white
    $gameTimeShow.setAttribute('disabled', true)
    rednerBox()
    setTime()
    setGameTime()
}

function stopGame() {
    isGameStarted = false
    $game.innerHTML = ''
    show($start)
    $game.style.backgroundColor = gray
    $gameTimeShow.removeAttribute('disabled')
    showGameScore()
}

function showGameScore() {
    hide($timeHeader)
    show($resultHeader)
    $result.textContent = score
}

function hide($el) {
    $el.classList.add('hide')
}

function show($el) {
    $el.classList.remove('hide')
}

function setGameTime() {
    let interval = setInterval(function() {
        let time = $time.textContent

        if (time <= 0) {
            stopGame()
            clearInterval(interval)
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100)
}

function setTime() {
    gameTime = $gameTimeShow.value
    $time.textContent = gameTime + '.0'
    show($timeHeader)
    hide($resultHeader)
}

function boxRenderClick(event) {
    if (event.target.getAttribute('data-box')) {
    rednerBox()
    score++
    }
}

function rednerBox() {
    $game.innerHTML = ''
    let box = document.createElement('div')
    let boxSize = random(30, 100)
    let boxPars = $game.getBoundingClientRect()
    let maxTop = boxPars.height - boxSize
    let maxLeft = boxPars.width - boxSize
    box.style.width = box.style.height = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.top = random(0, maxTop) + 'px'
    box.style.left = random(0, maxLeft) + 'px'
    box.style.backgroundColor = boxBg[boxColor()]
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)

    $game.insertAdjacentElement('afterbegin', box)
}

function boxColor() {
    return random(0, boxBg.length)
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}