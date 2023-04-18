class Chronometer {
  constructor(currentTime = 0, intervalId = null) {
    // ... your code goes here
    this.currentTime = currentTime
    this.intervalId = intervalId
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervaId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)


  }

  getMinutes() {
    // ... your code goes here

    /* let num = this.currentTime / 60
    num = Math.floor(num)
    return num */
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    let num = this.currentTime % 60
    return num
    //return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let string = String(value)
    if (string.length < 2) {
      return "0" + string
    } else {
      return string
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervaId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    /*  let min = this.computeTwoDigitNumber(this.getMinutes())
     let seconds = this.computeTwoDigitNumber(this.getSeconds())
     return  min + ":" + seconds */

    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
  }
}
