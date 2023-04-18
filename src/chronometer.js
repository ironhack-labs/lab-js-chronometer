class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    if (printTimeCallback){
      
    setInterval (() => {
      printTimeCallback()
    }, 1000)
    }
   setInterval (() => {
      this.currentTime ++
    }, 1000)
    
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60) 
    return minutes
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime % 60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    let stringNumber = String(value)
    if (stringNumber.length < 2) {
      stringNumber = '0'+stringNumber
    }
    return stringNumber
  } 

  stop() {
    clearInterval (this.currentTime)
  }

  reset() {
    this.currentTime = 0
  }

  split() {

  
  let minutes = this.getMinutes()
  let seconds = this.getSeconds()
  console.log(minutes)

  let minutesToStr = this.computeTwoDigitNumber(minutes)
  let secondsToStr = this.computeTwoDigitNumber(seconds)
  
  return (minutesToStr + ':' + secondsToStr)
   

   
 }
  
}
