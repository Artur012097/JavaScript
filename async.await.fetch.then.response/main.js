document.querySelector('.load').addEventListener('click', load)

async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    let response = await fetch(url)
    let data = await response.json()
    
    data.map(function(index) {
        for (let key in index) {
            if (index.hasOwnProperty(key)) {
            let item = `<li class="${key}_${index.id}">${key} - ${index[key]}</li>`

            document.querySelector('#list').insertAdjacentHTML('beforebegin', item)
            }
        }
    })
}