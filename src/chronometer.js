class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null

  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }


  getMinutes() {

    return Math.floor(this.currentTime / 60)

  }




  getSeconds() {


    return this.currentTime % 60

  }

  computeTwoDigitNumber(value) {
    console.log(value)

    let twoDigits = value.toString()

    if (twoDigits.length === 1) {

      twoDigits = '0' + twoDigits
    }
    return twoDigits
  }

  stop() {

    return clearInterval(this.intervalId)


  }

  reset() {




  }

  split() {
    // ... your code goes here
  }
}
