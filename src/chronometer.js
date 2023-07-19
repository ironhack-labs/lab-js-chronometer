class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {

    const intervalID = setInterval(() => {
      printTimeCallback()
      this.currentTime += 1
    }, 1000)

  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {

    if (value >= 0 && value < 10) {
      return (`0${value}`)

    } else {
      return (`${value}`)

    }

  }


  stop() {

    clearInterval(this.intervalId)

  }

  reset() {

  }

  split() {

  }
}
