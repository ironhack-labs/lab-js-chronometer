class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval( ()=>  {
      this.currentTime++  
      if(printTimeCallback !=undefined){
        printTimeCallback()
      }
        
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }
  
  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {

    let newValue = String(value)

    if(newValue.length < 2){
      return '0'+newValue
    } 
    return newValue;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
  this.currentTime = 0;
  }

  split() {
    return (this.computeTwoDigitNumber(this.getMinutes()) + ':' + this.computeTwoDigitNumber(this.getSeconds()))  
  }
}
