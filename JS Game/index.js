let $game = document.querySelector('#game');
let $start = document.querySelector('#start');
let handelTime = document.querySelector('#time-header')
let handleScore = document.querySelector('#result-header')
let result = document.querySelector('#result')
let isGameStarted = false

let score = 0

$start.addEventListener('click', gameStart);

function gameStart() {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    renderBox()
}

document.addEventListener('click', handleBoxClick)

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