class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
      return printTimeCallback();
    }
      
    }, 1000);
  }
  


  
  
  getMinutes() {
      return Math.floor(this.currentTime / 60)

    }
  

  getSeconds() {
    return this.currentTime % 60
    
  }

  computeTwoDigitNumber(value) {
      let text = value.toString();
      if (text.length === 1) {
        text = "0" + value.toString();
      }
      return text;
    }
  



  
  



  stop() {
clearInterval(this.intervalId)
    
  }

  reset() {
    this.currentTime = 0;
    
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
    
  

}