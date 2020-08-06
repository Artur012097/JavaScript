// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

let In = document.querySelector('#in');
let out = document.querySelector('#out');

In.addEventListener('blur', () => {
    let values = In.value;
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += +values[i];
    }
    out.value = sum;
})