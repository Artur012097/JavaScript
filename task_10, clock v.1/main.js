
setInterval( () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hour = document.querySelector('.clock-1');
    let minute = document.querySelector('.clock-2')
    let second = document.querySelector('.clock-3'); 

    if (minutes < 10) {
        minute.innerHTML = `0${minutes}`;
    }
    else {
        minute.innerHTML = minutes;
    }
    hour.innerHTML = hours;
    
    second.innerHTML = seconds;
},1000)
