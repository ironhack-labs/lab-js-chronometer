class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {

    this.intervalId = setInterval(() => {
      this.currentTime ++
      
      if (printTimeCallback){
        printTimeCallback(this.intervalId);
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
     return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if(value >= 10){
      return value.toString();
    }
    else if (value <= 9) {
      return "0" + value.toString();
    }
  }
  /* OU: if(value < 10) {
         return "0" + value;
       } else return `${value}` */

  stop() {
    clearInterval(this.intervalId);
    }

  reset() {
    return this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
    }
  }
