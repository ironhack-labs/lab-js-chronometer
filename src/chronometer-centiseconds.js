class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }
  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime += 1; 
      if(printTimeCallback) {printTimeCallback()}
    }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 6000)
  }

  getSeconds() {
    // ... your code goes here
    return (this.currentTime / 100 % 60)
  }

  getCentiseconds() {
    // ... your code goes here
    return (this.currentTime % 100)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = value.toString()
    if (string.length === 1) {return "0" + string
    } else if (string.length === 2) {return string
    } 
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
    let seconds = this.computeTwoDigitNumber(this.getSeconds(this.currentTime))
    let centis = this.computeTwoDigitNumber(this.getCentiseconds(this.currentTime))
    return `${minutes}:${seconds}.${centis}`
  }
}
