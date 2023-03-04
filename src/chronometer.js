class Chronometer {
  constructor() {
      this.currentTime = 0
      this.intervalId = null
  }

  start(printTimeCallback) {
    setInterval(()=>{
      this.currentTime++;
      if (printTimeCallback){
        printTimeCallback()
      }else{}
    },1000)
  }

  getMinutes() {
    let numberSec = this.currentTime
    return Math.floor(numberSec / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    return value.toString().padStart(2, '0')
  }

  stop() {
    const baba=setInterval()
  
     clearInterval(baba)
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
