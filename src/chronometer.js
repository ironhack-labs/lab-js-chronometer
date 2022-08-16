class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) printTimeCallback()
    }, 1000);
  }



  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // ... your code goes here
  }


  getSeconds() {
    return Math.floor(this.currentTime % 60)

  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {
    return this.currentTime = 0
  }

  split() {
    /*
    let min = `${computeTwoDigitNumber(getMinutes())}`
    let sec = `${computeTwoDigitNumber(getSeconds())}`

    let min = getMinutes()
    let sec = getSeconds()   
    
    */
    return this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds())

    /*
        let min = this.computeTwoDigitNumber(this.getMinutes())
    
        let sec = this.computeTwoDigitNumber(this.getSeconds())
    
        return `${min}:${sec}`
    
    */

  }
}
