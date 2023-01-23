class Chronometer {
  // ... your code goes here
constructor() {
  // ... your code goes here
  this.currentTime = 0
  this.intervalId = null
}

start(printTimeCallback) {
  this.intervalId = setInterval (() => {
    this.currentTime++
    if (printTimeCallback){
      printTimeCallback()
    }
}, 1000)
}; 

getMinutes() {
  // ... your code goes here
  return Math.floor(this.currentTime / 60)
}

getSeconds() {
  // ... your code goes here
  return Math.floor(this.currentTime % 60)
}

getCentiseconds() {
  // ... your code goes here
}

computeTwoDigitNumber(value) {
  // ... your code goes here
  if(value > 10) return `${value}`
  if(value < 10) return `0${value}`
}

stop() {
  // ... your code goes here
  clearInterval(this.intervalId)
}

reset() {
  // ... your code goes here
  this.currentTime = 0
}

split() {
  // ... your code goes here
}
}
