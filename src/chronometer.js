class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
      this.intervalId  = setInterval(() => {  
        this.currentTime ++ 
        if (typeof printTimeCallback === "function") {
          printTimeCallback()
          console.log(this.currentTime)
      }  
      }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let mins = (this.currentTime / 60)
    let decimal = Math.trunc(mins)
    return decimal
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let twoDigitNumber = ("0" + value).slice(-2)
    return twoDigitNumber
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
    let minutes = Math.floor(this.currentTime  / 60)
    let seconds = this.currentTime - (minutes * 60);
    let timeString = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
    return timeString
  }
}
