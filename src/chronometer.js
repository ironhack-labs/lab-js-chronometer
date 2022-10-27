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
    }
      , 1000)

  }


  getMinutes() {
    this.minTime = this.currentTime / 60
    const minute = Math.floor(this.minTime)
    return minute
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    let string = value.toString()
    if (string.length === 1) {
      return '0' + string
    } return string
  }

  stop() {

    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minut = this.computeTwoDigitNumber(this.getMinutes())
    const segundos = this.computeTwoDigitNumber(this.getSeconds())
    return minut + ':' + segundos
  }
}
