class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0,
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 10)

    return this.currentTime
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here

    return Math.floor((this.currentTime / 100) % 60)
  }

  getCentiseconds() {
    // ... your code goes here

    return this.currentTime % 100
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    let stringValue = value.toString()

    if (stringValue.length === 1) {
      stringValue = 0 + stringValue
    }

    return stringValue
  }

  stop() {
    // ... your code goes here

    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here

    this.currentTime = 0
  }

  split() {
    // ... your code goes here

    const stringMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const stringSeconds = this.computeTwoDigitNumber(this.getSeconds())
    const stringCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds())

    return stringMinutes + ":" + stringSeconds + "." + stringCentiseconds
  }
}
