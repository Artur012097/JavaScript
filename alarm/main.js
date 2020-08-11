function time () {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let dateFull = date.toDateString();
    let hr = document.querySelector('.hr');
    let min = document.querySelector('.min');
    let fullDate = document.querySelector('.full-date')

    hr.textContent = `${hour}:`;
    if (minutes < 10) {
        min.textContent = `0${minutes}`
    }    
    else {
        min.textContent = minutes;
    }
    fullDate.textContent = dateFull;
}

setInterval( () => {
    time();
}, 1000)

let btn = document.querySelector('.alarm-btn');

function alarm () {
    setInterval( () => {
        let alarmTime = document.querySelector('.alarm-time');
        let alarmHr = document.querySelector('.alarm-hr').value;
        let alarmMin = document.querySelector('.alarm-min').value;
        let date = new Date();
        let hour1 = date.getHours();
        let minutes1 = date.getMinutes();

        if (alarmHr < 0 || alarmHr > 24 || alarmMin < 0 || alarmMin > 60) {
            alarmTime.textContent = 'Wrong Time!!'
            alarmHr = '';
            alarmMin = '';
            alarmTime = '';
        }
        else if (alarmHr !== '' && alarmMin !== '') {
            alarmTime.textContent = `${alarmHr} : ${alarmMin}`
        }

        else if (alarmHr == '' && alarmMin == '') {
            alarmTime.textContent = 'Wrong!! Set Time'
            alarmTime = '';
        }

        let audio = new Audio('alarm.mp3')
        if (alarmHr == hour1 && alarmMin == minutes1) {
            audio.play();
        }
    },1000)
}

btn.addEventListener('click', alarm)