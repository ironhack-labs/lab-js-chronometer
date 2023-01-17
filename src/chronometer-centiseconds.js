class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null  
      }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      
      this.currentTime++
       if (printTimeCallback){
         printTimeCallback();
       }
      }, 10)
      
    }

  getMinutes() {
    const minutes = Math.floor(this.currentTime/6000)
    return minutes
    }

  getSeconds() {
    const seconds = Math.floor(this.currentTime/100) % 60
    return seconds
  }

  getCentiseconds() {
    const centiseconds = this.currentTime % 100
    return centiseconds
  }

  computeTwoDigitNumber(value) {
    if ( value < 10){
      return '0' + value; 
    }
    return value.toString()
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0
    }
  
    split() {
      let minutes = this.getMinutes();
      let seconds = this.getSeconds();
      let centiseconds = this.getCentiseconds();
      let splitMinutes = this.computeTwoDigitNumber(minutes);
      let splitSeconds = this.computeTwoDigitNumber(seconds);
      let splitCentiseconds = this.computeTwoDigitNumber(centiseconds);
      return splitMinutes + ":" + splitSeconds + "." + splitCentiseconds
    }
  }
