class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here
    console.log(arguments)
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (arguments.length > 0) {
        printTimeCallback()
      }
    }, 1000)

    // setTimeout(printTimeCallback, 1000)

  }


  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes


  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value >= 10) {
      return String(value)
    } else {
      return `0${value}`
    }
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
    // save the getMinutes method inside of a new variable
    const minutes = this.getMinutes()

    // save the getSeconds method inside of a new variable
    const seconds = this.getSeconds()

    // B/C the computeTwoDigitNumber method already exists, we can input the new variables (minutes & seconds) as values, which outputs a string.
    // save the outputs in two variables
    let stringOne = this.computeTwoDigitNumber(minutes)
    let stringTwo = this.computeTwoDigitNumber(seconds)

    // return both variables 
    return `${stringOne}:${stringTwo}`
  }
}