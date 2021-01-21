let num = document.querySelectorAll('.num');
let result = document.querySelector('.result');
let equally = document.querySelector('.equally');

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener('click', e => {
        result.innerText += num[i].value;
        if (e.target == equally) {
        }
    })
}