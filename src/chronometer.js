class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null

  }

  start(printTimeCallback) {
    // ... your code goes here

    this.intervalId = setInterval(() => {
      // printTimeCallback()
      if (printTimeCallback) {
        printTimeCallback()
      }
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const minutes = this.currentTime / 60
    return (Math.floor(minutes))
  }

  getSeconds() {
    // ... your code goes here
    const seconds = 0
    if (this.currentTime % 60 === 0) {
      seconds = 0
    }
    console.log(this.currentTime)
    return this.currentTime
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
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
