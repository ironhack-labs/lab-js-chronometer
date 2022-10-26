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
    const minutes = this.currentTime / 60
    return Math.floor(minutes)
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    let valuestring = value.toString()
    if (valuestring.length === 1) {
      return '0' + valuestring
    } else {
      return valuestring
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    let minutesString = this.computeTwoDigitNumber(this.getMinutes())
    let secondsString = this.computeTwoDigitNumber(this.getSeconds())
    //console.log(secondsString)
    return `${minutesString}:${secondsString}`

  }
}
