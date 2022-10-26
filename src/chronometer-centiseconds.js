class Chronometer {
  constructor() {

    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(() => {
      // console.log(this.currentTime)
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {

    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    const minuts = Math.floor(this.currentTime / 100)
    
    console.log(Math.floor(this.currentTime / 100))
    console.log('--------')
    console.log(minuts%60)
    return minuts % 60
  }

  getCentiseconds() {

    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
        
    if (value < 10) {
      return `0${value}`
    } else {
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
    
    const mm = this.computeTwoDigitNumber(this.getMinutes())
    const ss = this.computeTwoDigitNumber(this.getSeconds())
    const cc = this.computeTwoDigitNumber(this.getCentiseconds())

    return `${mm}:${ss}.${cc}`
  }
}
