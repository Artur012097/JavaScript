let reg = document.querySelector('.reg');
let log = document.querySelector('.log');
let login = document.querySelector('.login');
let password = document.querySelector('.pass');
let clear = document.querySelector('.del');

let person = {
    login: '',
    password: ''
}

reg.addEventListener('click', () => {
     localStorage.setItem('login', login.value);
     localStorage.setItem('password', password.value)
     person.login = login.value;
     person.password = password.value;
     login.value = '';
     password.value = '';
})

log.addEventListener('click', () => {
    if (localStorage.getItem('login') == login.value && localStorage.getItem('password') == password.value) {
        alert('Вы успешно вошли')
    } else if (login.value == '' || password.value == '') {
        alert('Введите логин или пороль')
    } else if (localStorage.getItem('login') !== login.value && localStorage.getItem('password') !== password.value) {
        alert('Неверный логин или пороль')
    } else {
        alert('Пользователь не найден')
    }
    login.value = '';
    password.value = '';
})

clear.addEventListener('click', () => {
    localStorage.clear();
})