class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    let intervalId = setInterval(() =>{
    this.currentTime += 1;
    if (printTimeCallback){
    printTimeCallback()
    }
  }, 1000)
  };

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    let seconds= Math.floor(this.currentTime%60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    let stringTime = value.toString()
    if (stringTime.slice(1) === ""){
      stringTime = `0${stringTime}`
    }
    return stringTime
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    this.getMinutes()
    this.getSeconds()
    let stringMinutes = this.computeTwoDigitNumber(this.minutes)
    let stringSeconds = this.computeTwoDigitNumber(this.seconds)
    return `${stringMinutes}:${stringSeconds}`
  }
}
