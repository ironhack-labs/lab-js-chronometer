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

    let minutes = Math.floor(this.currentTime / 60)

    return minutes


  }

  getSeconds() {
    // ... your code goes here

    if (!this.currentTime) {
      return 0
    }

    let seconds = this.currentTime - this.getMinutes() * 60


    return seconds


  }

  computeTwoDigitNumber(value) {
    // ... your code goes here


    if (!value) {
      return '00'
    }

    if (value >= 10) {
      return (`${value}`)
    }

    if (value > 0 && value < 10) {
      return (`0${value}`)
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

    const currentMinutes = this.computeTwoDigitNumber(this.getMinutes())
    const currentSeconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${currentMinutes}:${currentSeconds}`

  }
}
