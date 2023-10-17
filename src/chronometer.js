class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    setInterval(()=>{
      if(printTimeCallback){
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000)
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    value = value.toString();
    if(value.length===1){
      return value.padStart(2,"0");
    }
    return value;
  }

  stop() {
    clearInterval(this.currentTime)
  }

  reset() {
    if(this.currentTime > 2){
      this.currentTime=0;
    }
  }

  split() {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
}
}
