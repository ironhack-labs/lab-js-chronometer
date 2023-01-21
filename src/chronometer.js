class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

    

  }

  start(printTimeCallback) {
    // ... your code goes here

    setInterval(() => {

      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60)
    return minutes

  }

  getSeconds() {
    // ... your code goes here
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if (value < 10){
      let below10 = (('0' + value).slice(-2)).toString()
      return below10
    }else {
      let greater10 = value.toString()
      return greater10
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
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
