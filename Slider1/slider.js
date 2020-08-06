let images = document.querySelectorAll('.slider img')
let number = 0;



function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity_0')
    }
    images[number].classList.remove('opacity_0');
}

slider();

document.querySelector('.slider-btn-prev').onclick = function() {
    
    if (number - 1 == -1) {
        number = images.length - 1;
    } else {
        number --;
    }
    slider();
};

document.querySelector('.slider-btn-next').onclick = function() {
    if (number + 1 == images.length) {
        number = 0;
    } else {
        number ++;
    }
    slider();
};

// let images = document.querySelectorAll('.slider img');
// let number = 0;

// function slider() {
//     for (let i = 0; i < images.length; i++) {
//         images[i].classList.add('opacity_0')
//     }
//     images[number].classList.remove('opacity_0')
// }
// slider();

// document.querySelector('.slider-btn-prev').onclick = function() {
//     if (number - 1 == -1) {
//         number = images.length - 1;
//     } else {
//         number--;
//     }
//     slider();
// }

// document.querySelector('.slider-btn-next').onclick = function() {
//    if (number + 1 == images.length) {
//        number = 0;
//    } else {
//        number++;
//    }
//    slider();
// }




// let images = document.querySelectorAll('.slider img')
// let number = 0;

// function slider() {
//     for( let i =0; i < images.length; i++) {
//         images[i].classList.add('top')
//     }
//     images[number].classList.remove('top')
// }

// slider();

// document.querySelector('.slider-btn-next').onclick = function() {
//     if (number + 1 == images.length) {
//         number = 0;
//     } else {
//         number++;
//     }
//     slider();
// }

// document.querySelector('.slider-btn-prev').onclick = function() {
//     if (number - 1 == -1) {
//         number = images.length - 1;
//     } else {
//         number--;
//     }
//     slider();
// }
