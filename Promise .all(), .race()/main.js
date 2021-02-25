function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}

let f1 = sleep(1500).then(function() {
    return {
        log: 1500,
        time: 's1.5s'
    }
})

let f2 = sleep(3000).then(function() {
    return {
        log: 3000
    }
})

// Promise.all([f1, f2]).then(function(data) {
//     console.log('Data', data)
// })

// Promise.race([f1, f2]).then(function(data) {
//     console.log('Data', data)
// })

async function start() {
    let promAll = await Promise.all([f1, f2])
    let promRace = await Promise.race([f1, f2])

    console.log('promAll', promAll)
    console.log('promRace', promRace)
}

start()