let $game = document.querySelector('#game')
let $start = document.querySelector('#start')
let $timeHeader = document.querySelector('#time-header')
let $resultHeader = document.querySelector('#result-header')
let $result = document.querySelector('#result')
let $gameTime = document.querySelector('#game-time')
let $time = document.querySelector('#time')
let score = 0
let isGameStarted = false

function show($el) {
    $el.classList.remove('hide')
}

function hide($el) {
    $el.classList.add('hide')
}

$start.addEventListener('click', startGame)
document.addEventListener('click', boxClick)
$gameTime.addEventListener('input', setTime)

function startGame() {
    isGameStarted = true
    score = 0
    hide(start)
    $game.style.backgroundColor = white
    $gameTime.setAttribute('disabled', 'true')
    setTime()

    let interval = setInterval(function() {
        // let variable vor set game time
        let time = parseFloat($time.textContent)
    
        if (time <= 0) {
            clearInterval(interval)
            stopGame()
        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    },100)
    
    renderBox()
}

function stopGame () {
    isGameStarted = false
    $game.innerHTML = ''
    show($start)
    $game.style.backgroundColor = gray
    hide($timeHeader)
    show($resultHeader)
    $gameTime.removeAttribute('disabled')
    setResult()
}

function setResult() {
    $result.textContent = score
}

function setTime() {
    let setGameTime = $gameTime.value

    $time.textContent = setGameTime + '.0'

    show($timeHeader)
    hide($resultHeader)
}

function boxClick(e) {
    // box renders when player clicks on it
    if (e.target.dataset.box) {
        // score rises when player clicks on rendered box
        score++
        renderBox()
    }
}

function renderBox() {
    // clear html after render next box
    $game.innerHTML = ''
    // xox create after start button click
    let box = document.createElement('div')
    // box random size render
    let boxSize = randomBox(30, 100)
    // let game box styles
    let gameBox = $game.getBoundingClientRect()
    // random positions render for box
    let maxTop = gameBox.height - boxSize
    let maxLeft = gameBox.width - boxSize
    // box styles
    box.style.width = boxSize + 'px'
    box.style.height = boxSize + 'px'
    box.style.backgroundColor = letBoxBg()
    box.style.position = 'absolute'
    box.style.top = randomBox(0, maxTop) + 'px'
    box.style.left = randomBox(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box', true)
    $game.insertAdjacentElement('afterbegin', box)
}

function letBoxBg() {
    return boxColors[randomBox(0, boxColors.length)]
}

function randomBox(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}



