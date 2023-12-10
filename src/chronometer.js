class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null 
  }




  

  start(printTimeCallback) {
  this.currentTime=0
  this.intervalId = setInterval(()=>{
    this.currentTime++
    if(printTimeCallback){
      printTimeCallback()
    }
  },1000) }
  

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60)
    return minutesPassed
  }


  getSeconds() {
    const secondsPassed = this.currentTime % 60
    return secondsPassed
  }


  computeTwoDigitNumber(value) {


    if (value>=0 && value <10){
      let twoDigitResult = `0`+value.toString()
      return twoDigitResult
    }
    else{
      return value.toString()
    }
  }


  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
