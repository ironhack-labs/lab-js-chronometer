class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    const intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }


  getMinutes() {
    const currentMinutes = this.currentTime / 60
    return Number(Math.floor(currentMinutes))
  }


  getSeconds() {
    const currentSeconds = this.currentTime % 60
    return Number(Math.floor(currentSeconds))
  }


  computeTwoDigitNumber(value) {
    if (value.length < 2) {
      let newValue = '0' + value
      return newValue.toString()
    }
    return value.toString()
  }


  // stop() {



  // }

  // reset() {



  // }

  // split() {



  // }
}
