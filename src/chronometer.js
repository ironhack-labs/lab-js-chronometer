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

    }, 1000)

  }

  getMinutes() {
    // ... your code goes here
    let minutes = 0
    setInterval(() => {
      this.currentTime++
    }, 1000)

    minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    let seconds = 0
    setInterval(() => {
      this.currentTime++
    }, 1000)

    seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = "0"
    if (value < 10) {
      string += value.toString()
    } else {
      string = value.toString()
    }
    return string
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
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    let string = `${minutes}:${seconds}`
    console.log(string)

    return string
  }
}
