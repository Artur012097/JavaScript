let min = 10;
let sec = 60;

let mn = document.querySelector('.min');
let sc = document.querySelector('.sec');

let audio = new Audio('alarm.mp3')

function timer() {
    
    sec--;
    if(sec == 0) {
        sec = 60;
        min--;
    }
    else if (sec < 10) {
        sc = `0${sec}`
        sec--;
    }

    if(min < 0) {
        min = 10;
    }

    if (min == 0 && sec == 0) {
        audio.play();
    }
    mn.textContent = min;
    sc.textContent = ` : ${sec}`;
}

setInterval ( () => {
    timer();
}, 1000);