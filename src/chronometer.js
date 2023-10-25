class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId=null
  }

  start(printTimeCallback) {
    
     this.intervalId = setInterval(() => {
    
       this.currentTime++ 
       if (printTimeCallback) {
          printTimeCallback()
        }
      
      }, 1000)
   
   
    
    
  }

  getMinutes() {
    const minute = Math.floor(this.currentTime/60)
    return minute
    

  }

  getSeconds() {
    return (this.currentTime%60)
    
    
  }

  computeTwoDigitNumber(value) {
    if (value < 10) {
      return `0${value}`
    } else {
    return `${value}`
    }
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    return `${this.computeTwoDigitNumber (this.getMinutes())}:${this.computeTwoDigitNumber (this.getSeconds())}`
  }
}
