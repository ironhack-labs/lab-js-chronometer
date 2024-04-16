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
      printTimeCallback()
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime - minutes % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringValue = value.toString()
    let charArray = stringValue.split('')

    if (charArray.length < 2) {
      charArray.unshift('0')
    }
    return charArray.join('')
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
  }
}
