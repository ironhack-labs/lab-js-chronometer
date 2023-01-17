class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() => {this.currentTime ++
    if (printTimeCallback){ printTimeCallback()}
  }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let a = ''
    if (value > 9 ) return a + value
    else return '0' + value
    
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
