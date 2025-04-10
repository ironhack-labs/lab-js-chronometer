class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = 0

    minutes = this.currentTime / 60

    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = 0

    seconds = this.currentTime % 60

    return seconds
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    }
    if (value >= 10) {
      return `${value}`
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    
    const minutes = this.getMinutes()
    const seconds = this.getSeconds()
    
    
    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`
  }
}
