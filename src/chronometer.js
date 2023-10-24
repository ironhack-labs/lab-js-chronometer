class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }

  getMinutes() {
    if (this.currentTime === 0) {
      return 0
    } else {
      const minutes = Math.floor(this.currentTime / 60);
      return minutes
    }
  }

  getSeconds() {
    if (this.currentTime === 0) {
      return 0
    } else {
      const seconds = Math.floor(this.currentTime % 60);
      return seconds
    }
  }

  computeTwoDigitNumber(value) {
    if (value === 0) {
      return '00'
    } else if (value < 10) {
      return '0' + String(value)
    } else {
      return String(value)
    }
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}
