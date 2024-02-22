const chron = new Chronometer()

// state
let stopWatchRunning = false

// constants
const startButton = document.querySelector('.btn.start')
const resetButton = document.querySelector('.btn.reset')
const splitButton = document.querySelector('.btn.split')

// ['minDec','minUni','secDec','secUni','centisecDec','centisecUni'].forEach(element => console.log(`const ${element} = document.querySelector('#${element}')`))
const minDec = document.querySelector('#minDec')
const minUni = document.querySelector('#minUni')
const secDec = document.querySelector('#secDec')
const secUni = document.querySelector('#secUni')
const centisecDec = document.querySelector('#centisecDec')
const centisecUni = document.querySelector('#centisecUni')

const splitsList = document.querySelector('ol#splits')

// functions
// update time function
const updateTime = () => {
    const minutes = chron.getMinutes().toString().slice(-2).padStart(2,0).split('')
    const seconds = chron.getSeconds().toString().padStart(2,0).split('')
    const centiseconds = chron.getCentiseconds().toString().padStart(2,0).split('')
    
    centisecDec.innerText = centiseconds[0]
    centisecUni.innerText = centiseconds[1]
    secDec.innerText = seconds[0]
    secUni.innerText = seconds[1]
    minDec.innerText = minutes[0]
    minUni.innerText = minutes[1]

}

// split function
const addSplit = () => {
    const newSplit = document.createElement('li')
    newSplit.innerText = chron.split()
    splitsList.appendChild(newSplit)
}

// event listeners
startButton.addEventListener('click', () => {
    if (!stopWatchRunning) {
        chron.start(updateTime)
        stopWatchRunning = !stopWatchRunning
        startButton.innerText = 'PAUSE'
    } else {
        chron.stop()
        stopWatchRunning = !stopWatchRunning
        startButton.innerText = 'START'
    }
})

resetButton.addEventListener('click', () => {
    stopWatchRunning = false
    chron.stop()
    chron.reset()
    startButton.innerText = 'START'
})

splitButton.addEventListener('click',addSplit)

