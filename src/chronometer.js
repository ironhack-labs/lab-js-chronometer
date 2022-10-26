class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }

    }, 1000)
    return printTimeCallback
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
    let string = value.toString()
    if (string.length === 1) {
      return '0' + string
    }
    else {
      return string
    }
  }

  stop() {
    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let newSplitMinutes = this.computeTwoDigitNumber(this.getMinutes())
    let newSplitSeconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${newSplitMinutes}:${newSplitSeconds}`
  }

}
