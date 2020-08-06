// Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты.

let input = document.querySelector('#input');

let out = document.querySelectorAll('.out');

input.addEventListener('blur', function( ) {
    
    if (input.value !==0) {
        let item = input.value;
        let arr = item.split(' ');
        for (let i = 0; i < arr.length; i++) {
            out[i].value = arr[i];
        }
        console.log(arr)
    }
})