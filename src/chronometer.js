class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {

    this.intervalID = setInterval(() => {

      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }

    }, 1000)



  }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    const seconds = this.currentTime % 60

    return seconds

  }

  computeTwoDigitNumber(value) {
    const number = value.toString().padStart(2, '0')
    return number
  }


  stop() {

    clearInterval(this.intervalId)

  }

  reset() {
    this.currentTime = 0

  }

  split() {
    // ... your code goes here
  }
}
