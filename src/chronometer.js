class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval (() => {
  this.currentTime++
  if (printTimeCallback) return printTimeCallback()
  }, 1000);
}
  getMinutes() {
    if (!this.currentTime) return 0
else {
return Math.floor(this.currentTime / 60)
  }
}

  getSeconds() {
    if (!this.currentTime) return 0
    else {
      return Math.floor(this.currentTime % 60)
    }
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    else {
      return `${value}`
    }
  }


  stop() {
    clearInterval (this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}` 
  } // you need to write getMinutes () with parantheses bc it's a method/function
}

