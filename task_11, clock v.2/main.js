
function clock() {

    //  Получаем Время в реальном времени

    let date = new Date();
    let hours = date.getHours() % 12 || 12;
    let hours24 = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Подключаем звук Тиканья часов

    let audio = new Audio('click.mp3');
    audio.play();

    // Получаем Стрелки часов 

    let second = document.querySelector('.line-1')
    let hour = document.querySelector('.line-2')
    let minute = document.querySelector('.line-3')

    // Получаем поля для цифровых часов

    let digitalHr = document.querySelector('.digital-hr');
    let digitalMin = document.querySelector('.digital-min');
    let digitalSec = document.querySelector('.digital-sec');

    // Показываем цифровые часы

    digitalHr.textContent = `${hours24} :`;
    digitalMin.textContent = `${minutes} :`;

    if(minutes < 10) {
        digitalMin.textContent = `0${minutes} :`;
    }
    else {
        digitalMin.textContent = `${minutes} :`;
    }
    if(seconds < 10) {
        digitalSec.textContent = `0${seconds}`;
    }
    else {
        digitalSec.textContent = `${seconds}`;
    }

    // Показываем стрелочные часы
    
    minute.style.transform = `rotate(${minutes*6}deg)`;
    hour.style.transform = `rotate(${hours*30}deg)`;
    second.style.transform = `rotate(${seconds*6}deg)`;
    seconds = '';
}

setInterval( () => {
    clock()
}, 1000)




