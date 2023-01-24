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
    let seconds = this.currentTime % 60

    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitNumber

    if (value.length < 10) {
      twoDigitNumber = Concat('0', value.numberAsString())
    } else {
      twoDigitNumber = value.toString()
    }

    console.log(typeof twtwoDigitNumbero);

    return twoDigitNumber
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
