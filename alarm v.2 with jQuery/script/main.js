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

$(".alarm-hour-set").roundSlider({
    handleShape: "dot",
    width: 22,
    radius: "60",
    value: 0,
    max: "24",
    circleShape: "pie",
    sliderType: "min-range",
    lineCap: "round",
    handleSize: "+15"
});

$(".alarm-minutes-set").roundSlider({
    handleShape: "dot",
    width: 22,
    radius: "60",
    value: 0,
    max: "60",
    circleShape: "pie",
    sliderType: "min-range",
    lineCap: "round",
    handleSize: "+15"
});

function alarm () {
        let alarmHour = document.querySelector('.alarm-hour');
        let alarmMinute = document.querySelector('.alarm-minute');
        let alarmHr = document.querySelector('.alarm-hour-set');
        let alarmMin = document.querySelector('.alarm-minutes-set');
        let hourCircleText = document.querySelector('.hour-circle > .rs-tooltip-text');
        let minuteCircleText = document.querySelector('.minutes-circle > .rs-tooltip-text');
        let date = new Date();
        let hour1 = date.getHours();
        let minutes1 = date.getMinutes();

        // if (alarmHr < 0 || alarmHr > 24 || alarmMin < 0 || alarmMin > 60) {
        //     alarmHour.textContent = 'Wrong Time!!'
        //     alarmHr = '';
        //     alarmMin = '';
        //     alarmHour = '';
        //     alarmMinute = '';
        // }
        // else if (alarmHr !== '' && alarmMin !== '') {
        //     alarmHour.textContent = `${alarmHr} : `;
        //     alarmMinute.textContent = alarmMin;
        // }

        // else if (alarmHr == '' && alarmMin == '') {
        //     alarmHour.textContent = 'Wrong!! Set Time'
        //     alarmHr = '';
        //     alarmMin = '';
        //     alarmHour = '';
        //     alarmMinute = '';
        // }

        // let audio = new Audio('../audio/alarm.mp3')
        // if (alarmHour == hour1 && alarmMinute == minutes1) {
        //     audio.play();
        //     console.log(true)
        // }
        console.log(hourCircleText)
}

btn.addEventListener('click', alarm)



    
