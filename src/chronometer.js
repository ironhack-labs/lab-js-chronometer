class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (typeof printTimeCallback === "function") {
      printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    if (this.currentTime < 60) {
      return 0; 
    }
    else if (this.currentTime >= 60) {
      return Math.floor(this.currentTime/60);
    }
  }

  getSeconds() {
      return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
 
 //   return value.toString().padStart(2, '0');
 // ou
  return `0${value}`.slice(-2);
  }

// ou

   stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
