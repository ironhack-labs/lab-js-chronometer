class Chronometer {
  constructor() {
    this.currentTime = 0,
      this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
      console.log(this.currentTime)
    }, 10)

  }

  getMinutes() {
    const minutes = this.currentTime / 6000
    return Math.floor(minutes)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 6000 / 100)
  }

  getCentiseconds() {
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    if (value < 9) {
      return "0" + value
    } else {
      return "" + value
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let min = this.getMinutes()
    let sec = this.getSeconds()
    let milSeg = this.getCentiseconds()
    console.log("el currenttime es igual a ", this.currentTime, "donde min y seg son ", min, sec, "y nmileseg", milSeg)

    let minFormated = this.computeTwoDigitNumber(min)
    let secondsFormated = this.computeTwoDigitNumber(sec)
    let milSegFormated = this.computeTwoDigitNumber(milSeg)

    return `${minFormated}:${secondsFormated}.${milSegFormated}`
  }
}
