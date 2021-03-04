const rs = require('request-promise')

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Укажите название города')
    }
    
    const KEY = 'cab1564e28eeb59d9230fc27ff56d70c'
    const uri ='http://api.openweathermap.org/data/2.5/weather'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city
        },
        json: true
    }

    const response = rs(options)
    console.log(response)
}