class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (typeof printTimeCallback === "function"){
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    const numberMinutes = Math.floor(this.currentTime/60)
    return numberMinutes
  }

  getSeconds() {
    const numberSeconds = Math.floor(this.currentTime%60)
    return numberSeconds
  }


  // if there is one number, add a 0 to the string
  // convert the number to a string first, then use slice method
  computeTwoDigitNumber(value) {
    if (value < 10){
      let strValue = value.toString()
      let newValue = '0' + strValue;
      return newValue.toString()

    } else {
      return value.toString()
    }
  }

  stop() {
    clearInterval(this.intervalId)
    return clearInterval
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return `${getMinutes()} + ':' ${getSeconds(this.computeTwoDigitNumber)}`
  }
}
