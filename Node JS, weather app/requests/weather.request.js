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
            q: city,
            units: 'imperial'
        },
        json: true
    }

    try {
        const data = await rs(options)
        const celsius = (data.main.temp - 32) * 5/9 

        return {
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        
        return {
            weather: null,
            error: error.error.message
        }
    }
}