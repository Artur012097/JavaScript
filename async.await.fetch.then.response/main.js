document.querySelector('.load').addEventListener('click', load)
let usersFirst = document.querySelector('.list')


async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    // fetch(url)
    //     .then(function(response) {
    //         return response.json()
    //     })

        let response = await fetch(url)
        let data = await response.json()
           let list = document.querySelector('.list')
           
           data.map(function(index) {
               for (let key in index) {
                   if (index.hasOwnProperty(key)) {
                    let item = `<li class="${key}_${index.id}">${key} - ${index[key]}</li>`
                    list.insertAdjacentHTML('beforebegin', item)
                   }
               }
           })
}