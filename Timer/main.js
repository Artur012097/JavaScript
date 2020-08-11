let min = 1;
let sec = 60;

let mn = document.querySelector('.min');
let sc = document.querySelector('.sec');

let audio = new Audio('alarm.mp3')

function timer() {
    
    sec = sec - 1;

    if(sec == 0) {
        sec = 60;
        min--;
    }

    if (min == 0 && sec == 0) {
        audio.play();
        min = 0;
        sec = 0;
    }
    mn.textContent = min;
    sc.textContent = sec;
}

setInterval ( () => {
    timer();
}, 1000)