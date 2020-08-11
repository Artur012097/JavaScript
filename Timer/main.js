let min = 10;
let sec = 60;

let mn = document.querySelector('.min');
let sc = document.querySelector('.sec');

let audio = new Audio('alarm.mp3')

function timer() {

    if(min < 0) {
        min = 10;
    }

    if(sec == 0) {
        sec = 60;
        min--;
    }
   
    

    if (min == 0 && sec == 0) {
        audio.play();
    }
    sec--;
    mn.textContent = min;

    if (sec < 10) {
        sc.textContent = ` : 0${sec}`
    }
    else {
        sc.textContent = ` : ${sec}`;
    }
    
}

setInterval ( () => {
    timer();
}, 1000);