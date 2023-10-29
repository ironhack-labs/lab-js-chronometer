class Chronometer {

    constructor() {
      this.currentTime = 0
      this.intervalId = null;
   
    }


    start(printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback) printTimeCallback();
      }, 1000);
    }
  
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
   const str = value.toString();
   if(str.length < 2 ) {
    return "0" + str
   }
   return str;
  }

  stop() {
  clearInterval(this.intervalId)
    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const mins = this.getMinutes().toString()
    const seconds = this.getSeconds().toString()
   return this.computeTwoDigitNumber(mins) + ":" + this.computeTwoDigitNumber(seconds)
  }
}
