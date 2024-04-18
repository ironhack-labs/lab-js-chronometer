class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0,
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
    const numberOfMinutes = Math.floor(this.currentTime / 60)
    return numberOfMinutes
  }

  getSeconds() {
    // ... your code goes here
    const currentSeconds = this.currentTime % 60
    return currentSeconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const toString = String(value)
    if (toString.length === 1) return toString.padStart(2, '0')
    else return toString
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
    const minutes = this.getMinutes()
    const formattedMinutes = this.computeTwoDigitNumber(minutes)

    const seconds = this.getSeconds()
    const formattedSeconds = this.computeTwoDigitNumber(seconds)

    const formattedTime = `${formattedMinutes}:${formattedSeconds}`
    return formattedTime
  }
}
