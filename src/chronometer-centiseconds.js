class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {

    this.IntervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) {
        printTimeCallback()

      }



    }, 10)



  }



  // ... your code goes here


  getMinutes() {
    return Math.floor(this.currentTime / 6000)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 600
    // ... your code goes here
  }

  getCentiseconds() {
    return this.currentTime % 600

    // ... your code goes here
  }

  computeTwoDigitNumber(value) {



    return ("0" + value).slice(-2)
  }
  // ... your code goes here


  stop() {
    clearInterval(this.IntervalId)
  }


  reset() {
    this.currentTime = 0

    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds)
    return `${minutes}:${seconds}`

    // ... your code goes here
  }
}

