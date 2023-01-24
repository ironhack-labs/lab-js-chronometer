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

      if (printTimeCallback) printTimeCallback()

    }, 1000)

  }

  getMinutes() {
    // ... your code goes here
    let minutes = this.currentTime / 60

    return Math.floor(minutes)
  }


  getSeconds() {
    // ... your code goes here
    let seconds = this.currentTime % 60

    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value < 10) {
      return '0' + value.toString()
    } else {
      return value.toString()
    }

  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
