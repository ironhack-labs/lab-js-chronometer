class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (!printTimeCallback) {
        this.currentTime++
      } else {
        printTimeCallback()
      }
    }, 1000)
    return this.intervalId //???
  }

  getMinutes() {
    const minutes = this.currentTime / 60;
    return Math.floor(minutes)
  }
  getSeconds() {
    const seconds = this.currentTime % 60
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    const twoDigit = value.toString()
    console.log(typeof (twoDigit))
    if (twoDigit.length === 1) {
      let newTwoDigits = '0' + twoDigit
      return newTwoDigits
    }
    else {
      return twoDigit
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

    const minutesComputed = this.computeTwoDigitNumber(minutes)
    const secondsComputed = this.computeTwoDigitNumber(seconds)

    return minutesComputed + ':' + secondsComputed
  }
}
