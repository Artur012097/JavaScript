

window.addEventListener('scroll', () => {
    let first = document.querySelector('.first');
    let second = document.querySelector('.second');
    let third = document.querySelector('.third');
    let h1 = document.querySelector('h1');
    let y = window.scrollY;

    second.style.transform = 'translate(' + y/5 + 'px' + ',' + y/3 + 'px' + ')';
    third.style.transform = 'translate(' + -y/5 + 'px' + ',' + y/3 + 'px' + ')';
    h1.style.top = `100%`;
    h1.style.top = '1' + y/100 + '%';
})