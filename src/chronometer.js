class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime= 0
    this.intervalId=null
  }

  start(printTimeCallback) {
    // ... your code goes here
    setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime++
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes=Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
      return this.currentTime%60
  }

  computeTwoDigitNumber(value) {
    value=value.toString()

    if(value.length===1){
      return value.padStart(2, '0')
    }
    return value
  }

  stop() {
    return clearInterval(this.currentTime)
  }

  reset() {
    // ... your code goes here
    this.currentTime=0
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds= this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}`
  }
}