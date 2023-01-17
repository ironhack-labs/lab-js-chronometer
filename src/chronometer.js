class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
   let seconds = this.currentTime % 60
   return seconds
  }

  computeTwoDigitNumber(value) {

    return value.toString().padStart(2, '0')

  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
    return this.currentTime
  }

  split() {
    this.currentTime.split(" ")
  }
}
