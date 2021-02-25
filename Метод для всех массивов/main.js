// Реализовать возможность использвуя прототип, чтобы у каждого массива
// был новый медот, позволяющий удваивать значение каждого элемента с учетом
// типа данных таким образом, чтобы:
// 1. Для чисел юто возведение в квадрат
// 2. Для строк это удваивание строки
// 3. Метод не изменял существующий массив и возвращал новый

let array1 = [1,2,3,4]
let array2 = [2, 5,'Hello', 'My', 'Name', 'Is', 'Liana', 25]

Array.prototype.double = function () {
    let newArray = this.map(function(item) {
        if (typeof item == 'number') {
            return Math.pow(item, 2)
        }
        if (typeof item == 'string') {
            return item += ' ' + item
        }
    })
    return newArray
}

console.log(array1.double())
console.log(array2.double())