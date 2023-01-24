class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      if (printTimeCallback) {
        printTimeCallback()
      }
    },1000)
  }

  getMinutes() {
    // if (this.currentTime === 0){
    //   return 0
    // }
    const total = this.currentTime / 60
    const totalFloor = Math.floor(total)
    return totalFloor
  }

  getSeconds() {
    const totalSec = this.currentTime % 60
    return totalSec
  }

  computeTwoDigitNumber(value) {
    return (("0" + value).slice(-2))
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    
  }
}
