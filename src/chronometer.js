class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      
      this.currentTime++;

      if(printTimeCallback) printTimeCallback()

    }, 1000)

  }

  getMinutes() {
    // ... your code goes here
    const minutes = this.currentTime / 60;
    return Math.floor(minutes)
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60;
    return Math.floor(seconds)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    return value.toString().padStart(2,"0")

  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.getMinutes()
    let seconds = this.getSeconds()
    let minutesFormatted = this.computeTwoDigitNumber(minutes)
    let secondsFormatted = this.computeTwoDigitNumber(seconds)

    return `${minutesFormatted}:${secondsFormatted}`
  }
}
