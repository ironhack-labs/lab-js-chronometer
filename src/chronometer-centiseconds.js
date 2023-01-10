class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++
      if(printTimeCallback == null){
        return null
      }else{
        return printTimeCallback()
      }
    }, 10)
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000) 
 
   }
 
   getSeconds() {
   return Math.floor(this.currentTime / 100 ) % 60
   }

  getCentiseconds() {
    return Math.floor(this.currentTime % 1000 ) % 100
  }

  computeTwoDigitNumber(value) {
    let test =  value.toString()

    let test2 = test.slice(1) + "0" + test.slice(0, 1)
    
    if(test2 < 10){

    return test2
    }else{
       return test
      }
      
    }
    

  stop() {
     clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}: ${this.computeTwoDigitNumber(this.getCentiseconds())}`
}

}
