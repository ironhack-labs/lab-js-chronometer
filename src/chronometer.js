class Chronometer {
  constructor() {
  this.currentTime = 0
  this.intervalId = null  
  }

  start(printTimeCallback) {
    
  this.intervalId = setInterval(() => {
      this.currentTime++;

      if(printTimeCallback){
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value){
    const stringValue = value.toString();

    if(stringValue.length === 1){
      return "0" + value

    } else if(stringValue.length === 2){
      return '' + value
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const secondes = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${secondes}`;
  }
}
