let slides = document.querySelectorAll('.slider #slide');
let slide = document.querySelector('.slider')
let overflow = document.querySelector('.overflow')
let slidesArr = [0];
let sliderWidth = 0;
let offset = 0;
let number = 0;
let balance = 0;

for(let i = 0; i < slides.length; i++) {
    slidesArr.push(slides[i].offsetWidth)
    sliderWidth += slides[i].offsetWidth;
}
slider();

slide.style.width = sliderWidth  + 'px';

function slider () {
    balance = slide.offsetWidth - overflow.offsetWidth - (offset + slidesArr[number]);
    if (balance >= 0) {
        offset = offset + slidesArr[number];
        slide.style.left = -offset + 'px';
    }
    else {
        slide.style.left = -(slide.offsetWidth - overflow.offsetWidth) + 'px';
        offset = 0;
        number = -1;
    }
    if (number + 1 == slides.length) {
        number = 0;
        offset = 0;
    }
    else {
        number ++;
    }
    console.log(number)
}

document.onclick = function() {
    slider();
    console.log('Offset =' + offset)
    console.log('sliderWidth =' + sliderWidth)
    console.log(balance)
};