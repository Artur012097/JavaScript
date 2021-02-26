// Реализуйте класс Dropdown, кототый будет инициализировать контент выбира
// элементов по функционалу похожий на обычный HTML элемент selector, но полностью
// реализованный вами кодом без select тега.

// Пример использования:
// const dropdown = new Dropdown('dropdown'), {
//     items: [
//         {label: 'Москва', id: 'msk'},
//         {label: 'Санкт-Петербург', id: 'spb'},
//         {label: 'Новосибирск', id: 'nsk'},
//         {label: 'Краснодар', id: 'krdr'}
//     ]
// }


class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.items = options.items
        
        this.$el.querySelector('.dropdown__title').textContent = this.items[0].label

        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__title')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
            }
            else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id)
            }
        })

        let newItem = this.items.map(function(i) {
            return  `<li class="dropdown__item" data-id="${i.id}">${i.label}</li>` 
        }).join(' ')

        this.$el.querySelector('.dropdown__list').insertAdjacentHTML('afterbegin', newItem)
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }

    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__title').textContent = item.label
        this.close()
    }
}


const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'},
        {label: 'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krdr'}
    ]
})