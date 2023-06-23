class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(primeTimeCallBack) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
    
    if (primeTimeCallBack) {
      primeTimeCallBack()
    }
    },1000)
    }

  getMinutes() {
    const minutes = Math.floor(this.currentTime / 60)
    return minutes;
  }

  getSeconds() {
    const seconds = this.currentTime % 60
    return seconds
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, "0")
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`
  }
}


