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
      // console.log(intervalId)
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const entireMinutesPassed = Math.floor(this.currentTime / 60)

    return entireMinutesPassed
  }

  getSeconds() {
    // ... your code goes here
    const entireSecondsPassed = Math.floor(this.currentTime % 60)

    return entireSecondsPassed

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const numToString = value.toString()
    if (numToString.length === 1) {
      return ('0' + numToString).slice(0, 2)
    }
    return numToString
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)

  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
