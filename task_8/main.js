//  Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

let num = 12345;

let arr = Array.from(String(num), Number);

function sum() {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
sum();