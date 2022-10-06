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
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    let stringMinutes = minutes.toString()
    let stringSeconds = seconds.toString()
    if (stringMinutes.slice(1) === ""){
      stringMinutes = `0${stringMinutes}`
    }
    else if (stringSeconds.slice(1) === ""){
      stringSeconds = `0${stringMinutes}`
    }
return `${stringMinutes}:${stringSeconds}`
  }
}
