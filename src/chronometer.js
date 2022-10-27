class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000);

  }
  getMinutes() {
    let minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    let seconds = this.currentTime % 60
    return Math.floor(seconds)

  }

  computeTwoDigitNumber(value) {
    let numbers = value.toString()
    if (numbers.length < 2) {
      return '0' + numbers
    } else {
      return numbers
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {

    this.currentTime = 0
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return minutes + ':' + seconds
  }
}


