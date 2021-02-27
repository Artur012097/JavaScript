const $gameBox= document.querySelector('#game')
const $buttons = document.querySelector('#buttons')
const x = 'X'
const o = 'O'
let playerIcon = ''
let aiIcon = ''
let isGameStarted = false

$buttons.style.position = 'absolute'
$buttons.style.top = `calc(50% - ${$buttons.getBoundingClientRect().height/2}px)`
$buttons.style.left = `calc(50% - ${$buttons.getBoundingClientRect().width/2}px)`


document.onload = createBox();
$gameBox.addEventListener('click',playGame)
$buttons.addEventListener('click', checkGameIcon)
let boxes = document.querySelectorAll('.block')

function show($el) {
   $el.classList.remove('hide')
}

function hide($el) {
   $el.classList.add('hide')
}

function checkGameIcon(event) {
   if(event.target.getAttribute('data-x')) {
      playerIcon = x
      aiIcon = o
   }
   if (event.target.getAttribute('data-o')) {
      playerIcon = o
      aiIcon = x
   }
   startGame()
}

function createBox() {
    for(let i = 0; i < 9; i++) {
        let gameBlock = document.createElement('div')
        gameBlock.classList.add('block')
        gameBlock.setAttribute('game-box', true)
        $gameBox.insertAdjacentElement('afterbegin', gameBlock) 
    }
}

function startGame() {
   hide($buttons)
   let isGameStarted = true
}

function playGame(event) {
    if (event.target.getAttribute('game-box')) {
         event.target.innerHTML = ''
         event.target.textContent = playerIcon
         checkGame()
         aiPlay()
    }
}

function aiPlay() {
    let timeout = setTimeout(()=>{
       aiBox = boxes[random(0, 9)]
       if (aiBox.textContent !== '') {
         return false
       }
       else { 
         aiBox.textContent = aiIcon
      }
      },300)
}

function checkGame() {

    if (boxes[0].textContent == playerIcon && boxes[1].textContent == playerIcon && boxes[2].textContent == playerIcon) {
       gameEnd()
    }
    if (boxes[3].textContent == playerIcon && boxes[4].textContent == playerIcon && boxes[5].textContent == playerIcon) {
        gameEnd()
     }
     if (boxes[6].textContent == playerIcon && boxes[7].textContent == playerIcon && boxes[8].textContent == playerIcon) {
        gameEnd()
     }
     if (boxes[0].textContent == playerIcon && boxes[4].textContent == playerIcon && boxes[8].textContent == playerIcon) {
        gameEnd()
     }
     if (boxes[0].textContent == playerIcon && boxes[3].textContent == playerIcon && boxes[6].textContent == playerIcon) {
        gameEnd()
     }
     if (boxes[1].textContent == playerIcon && boxes[4].textContent == playerIcon && boxes[7].textContent == playerIcon) {
        gameEnd()
     }
     if (boxes[2].textContent == playerIcon && boxes[5].textContent == playerIcon && boxes[8].textContent == playerIcon) {
        gameEnd()
     }
     if (boxes[2].textContent == playerIcon && boxes[4].textContent == playerIcon && boxes[6].textContent == playerIcon) {
        gameEnd()
     }
}

function gameEnd() {
    setTimeout(()=>{
       alert(`Win ${playerIcon}`)
      },100)
    show($buttons)
    for (let i = 0; i < boxes.length; i++) {
       boxes[i].textContent = ''
    }
    let isGameStarted = false
}

function random(min, max) {
   return Math.floor(Math.random() * (max - min) + min)
}