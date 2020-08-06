// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество)

let input = document.querySelector('input');

input.addEventListener('blur', () => {
    let values = input.value;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] === ',') {
            continue;
        }

        sum += +values[i];
        count++;
    }
    console.log(sum / count)
})
