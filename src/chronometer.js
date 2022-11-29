class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    
  }

  start(printTimeCallback) {
    
    this.intervalId = setInterval(()=>{
      this.currentTime++
      if(typeof printTimeCallback === `function`) printTimeCallback()

    },1000) 
  }

  getMinutes() {
    
    return Math.floor(this.currentTime/60)
    
  }

  getSeconds() {
    return this.currentTime % 60
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
    let timeString =`${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`


    
    return timeString
  }
}
