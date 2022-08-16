class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {

      this.currentTime++;

      if (printTimeCallback) {
        printTimeCallback()

      }
    }, 1000);

  }

  getMinutes() {
    // ... your code goes here

    let totalMinutes = this.currentTime / 60

    return Math.floor(totalMinutes)

  }

  getSeconds() {
    // ... your code goes here

    let totalSeconds = this.currentTime % 60

    return totalSeconds

  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    let decimals = value.toString()

    if (decimals.length == 1) {
      return '0' + decimals
    }

    return decimals

  }

  stop() {
    // ... your code goes here

    let pause = clearInterval(this.intervalId)

    return pause

  }

  reset() {
    // ... your code goes here

    let retry = this.currentTime = 0

    return retry

  }

  split() {
    // ... your code goes here




    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let getSeconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${getSeconds}`








  }
}
