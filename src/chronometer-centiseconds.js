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
      }, 10) 
    }
  
    getMinutes() {
      return Math.floor(this.currentTime / 6000)
    }
  
    getSeconds() {
      return Math.floor((this.currentTime % 6000) / 100)
    }
  
    getCentiseconds() {
      return (this.currentTime % 6000) % 100
    }

    computeTwoDigitNumber(value) {
      let stringValue = String(value)
      if (stringValue.length <= 1) {
          stringValue = "0" + stringValue
      }
      return stringValue
    }
  
    stop() {
      clearInterval(this.intervalId)
    }
  
    reset() {
      this.currentTime = 0
    }
  
    split() {
      let minutes = this.computeTwoDigitNumber(this.getMinutes())
      let seconds = this.computeTwoDigitNumber(this.getSeconds())
      let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
      // There is an error in tests that says we need to print the split in "mm:ss.SS" instead of "mm:ss:cc"
      // So the last test is not passed because I corrected this error 
      return `${minutes}:${seconds}:${centiseconds}`
    }
  }
  