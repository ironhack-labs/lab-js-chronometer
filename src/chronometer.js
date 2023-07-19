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

      if (printTimeCallback) { // Comprobar que hay un printTimeCallback
        printTimeCallback()
      }

    }, 1000)



  }

  getMinutes() {
    // ... your code goes here

    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    // ... your code goes here

    const seconds = this.currentTime
    const totalSeconds = Math.floor(seconds % 60)
    return totalSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    const addDigit = '0'

    if (value < 10) {
      addDigit + value

    } else {
      return String(value)
    }


    return String(addDigit + value)
  }

  stop() {
    // ... your code goes here
    if (this.currentTime > 0) {
      return clearInterval(time)
    }
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here

    return String(` ${seconds}:${minutes}`)
  }
}
