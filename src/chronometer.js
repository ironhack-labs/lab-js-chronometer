class Chronometer {
  constructor() {
    this.currentTime = 0;
    this. intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=>{
      this.currentTime += 1;
      if(printTimeCallback){
        printTimeCallback();
      };
    }, 1000)

    
    
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);

  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    const numInText = value.toString();
    if(numInText.length === 1){
      return "0" + numInText;
    } else {
      return numInText;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const min = this.getMinutes();
    const sec = this.getSeconds();
    return this.computeTwoDigitNumber(min) + ":" + this.computeTwoDigitNumber(sec);
  }
}
