let first = document.querySelector('.first');
    h1 = document.querySelector('h1');
first.style.transform = 'scale(1)'

window.addEventListener('scroll', () => {
    let second = document.querySelector('.second');
    let third = document.querySelector('.third');
    let y = window.scrollY;

    if (y == 0) {
        first.style.transform = 'scale(1)'
        h1.style.top = '80%';
        h1.style.left = '20%'
    } else {
        first.style.transform = 'scale(' + (1 + y/1000)+  ')'
        h1.style.top = (80 - y/5) + '%';
        h1.style.left = (20 + y/50) + '%'
    }
    second.style.transform = 'translate(' + y/5 + 'px' + ',' + y/3 + 'px' + ')';
    third.style.transform = 'translate(' + -y/5 + 'px' + ',' + y/3 + 'px' + ')';
})