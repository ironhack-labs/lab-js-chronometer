class Chronometer {
  constructor(currentTime = 122418, intervalId = null) {
    this.currentTime = currentTime;
    this.intervalId = intervalId;
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
      printTimeCallback
      console.log('id',this.intervalId,'time',this.currentTime)
    },10)
  }
  stop() {
    clearInterval(this.intervalId)
  }
  getMinutes() {
    return Math.floor(Math.trunc(this.currentTime / 100)/ 60)
  }
  getSeconds() {
    return Math.floor(Math.trunc(this.currentTime / 100) % 60)
  }
  getCentiSeconds() {
    return this.currentTime.toString().slice(-2)
  }
   computeTwoDigitNumber(number) {
    return number.toString().padStart(2,0)
  }
  reset() {
    this.currentTime = 0
  }
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes(this.currentTime))}:${this.computeTwoDigitNumber(this.getSeconds(this.currentTime))}:${this.computeTwoDigitNumber(this.getCentiSeconds(this.currentTime))}`
  }
}