class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null; 
    this.mms = 0;
    this.intervalIdMs = null;
  }

  start(printTimeCallback) {
    this.intervalIdMs = setInterval(() => {
          if (this.mms > 99){
         this.mms = 0;
      }
      this.mms++
      if (typeof printTimeCallback === "function")  {
        printTimeCallback()
      }
  }, 10)
    this.intervalId =  setInterval(() => {
        this.currentTime++ 
        if (typeof printTimeCallback === "function")  {
          printTimeCallback()
        }
    }, 1000)
  }
  getMilliseconds() {
    return Math.floor(this.mms)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    if (value < 10) return `0${value}`
    else return `${value}`
  }

  stop() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalIdMs)
  }

  reset() {
    return this.currentTime = 0
    
  }

  split() {
      return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds()) }`
    }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
