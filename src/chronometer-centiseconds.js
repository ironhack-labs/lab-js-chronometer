class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    },10)
  }

  getMinutes() {
    // ... your code goes here
    //let minutes = Math.floor(this.currentTime / 6000)
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    //let seconds = Math.floor(this.currentTime / 100) % 60
    //console.log(seconds)
    return Math.floor(this.currentTime / 100) % 60
  }

  getCentiseconds() {
    // ... your code goes here
    //let getCentiseconds = this.currentTime % 100
    //console.log(getCentiseconds)
    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      return 0 + value.toString()
    } else {
      return value.toString()
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let second = this.computeTwoDigitNumber(this.getSeconds())
    let centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds())
    console.log(`${minutes}:${second}.${centiSeconds}`)
    return `${minutes}:${second}.${centiSeconds}`
  }
}
