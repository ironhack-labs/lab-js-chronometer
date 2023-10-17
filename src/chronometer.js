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
    }, 1000
    )


  }

  getMinutes() {
    // ... your code goes here

    this.getMinutes = this.currentTime / 60
    return Math.floor(this.getMinutes)
  }

  getSeconds() {
    // ... your code goes here
    this.getSeconds = this.currentTime % 60
    return this.getSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10) {
      value = "0" + value



      return value
    } else {
      value = "" + value
      return value
    }
  }
  //

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
