class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback) {
          printTimeCallback()
        }
    }, 1000) 

    
    // ... your code goes here
  }

  getMinutes() {
    if (this.currentTime === 0) return 0;
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }

  getSeconds() {
    if (this.currentTime === 0) return 0;
    let minutes = Math.floor(this.currentTime / 60)
    let seconds = this.currentTime - minutes * 60
    return seconds;
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    return `${value}`

    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    //this.getMinutes()
    //this.getSeconds()
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
    // ... your code goes here
  }
}
