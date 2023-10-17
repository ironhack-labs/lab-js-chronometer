class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    // ... your code goes here incrementar cada segundo en 1s currentTime
    this.intervalId = setInterval(() => {
      this.currentTime++
      if (printTimeCallback) {
        printTimeCallback()
      }
    }, 1000)
  }
  getMinutes() {
    // ... your code goes here
    if (this.currentTime >= 60) {
      const minutes = this.currentTime / 60
      //const segundos=this.currentTime
      return Math.floor(minutes)
    }
    else {
      return 0
    }
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) {
      return 0
    } else if (this.currentTime < 60) {
      const segundos = this.currentTime
      return Math.floor(segundos)
    } else {
      const secondRemain = this.currentTime % 60
      return Math.floor(secondRemain)
    }
  }
  computeTwoDigitNumber(value) {//45
    // ... your code goes here
    const stringCon = value.toString()
    if (stringCon.length === 2) {
      return stringCon
    } else {
      const chroSrting = "0" + stringCon
      return chroSrting
    }
  }
  stop() {
    // ... your code goes here
    clearInterval(this.currentTime)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutC = this.computeTwoDigitNumber(this.getMinutes(this.currentTime))
    const secC = this.computeTwoDigitNumber(this.getSeconds(this.currentTime))
    return (minutC + ":" + secC)
  }
}
