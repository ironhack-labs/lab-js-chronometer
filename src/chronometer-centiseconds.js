class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime++
      if(typeof printTimeCallback === `function`) printTimeCallback()

    },10) 
  }

  getMinutes() {
    return Math.floor(this.currentTime/(60*100))
  }

  getSeconds() {
    return Math.floor(0.01*this.currentTime % 60)
  }

  getCentiseconds() {
    return Math.floor(this.currentTime%(100))
  }

  computeTwoDigitNumber(value) {
    let twoDig= `0` + new String(value) 
    
    if(twoDig.length>2){
      return twoDig.slice(1,3)
    }

    return twoDig
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0  
  }

  split() {
    let cent = this.computeTwoDigitNumber(this.getCentiseconds())
    let mins = this.computeTwoDigitNumber(this.getMinutes())
    let secs = this.computeTwoDigitNumber(this.getSeconds())
    let timeString =`${mins}:${secs}.${cent}`
    return timeString
  }
}
