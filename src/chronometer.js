    class Chronometer {
          constructor() {
          this.currentTime = 0;
          this.intervalId = null;

  }

    start(printTimeCallback) {

    this.intervalId = setInterval(()=>{

      this.currentTime++

     if (printTimeCallback) printTimeCallback()
    },1000)

  }
 
    getMinutes() {
    
      return  Math.floor(this.currentTime/60)

  }

    getSeconds() {
    
       let seconds = this.currentTime % 60
       return seconds
  }

    computeTwoDigitNumber(value) {

      if (value < 10) return "0" + value
      else{
        return JSON.stringify(value)
      }
  }

    stop() {
    clearInterval(this.intervalId )
  }

    reset() {
    return this.currentTime = 0
    
  }

    split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`

  }
  
}
